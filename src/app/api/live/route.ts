import { NextRequest, NextResponse } from "next/server";
import { getL8rAdmin } from "@/lib/l8r-admin";

export const dynamic = "force-dynamic";

const ADMIN_PASSWORD =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "wav-admin-2026";

const count = (table: string) =>
  getL8rAdmin().from(table).select("id", { count: "exact", head: true });

export async function GET(req: NextRequest) {
  if (req.headers.get("x-admin-key") !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const db = getL8rAdmin();
  const now = Date.now();
  const h24 = new Date(now - 86400e3).toISOString();
  const d7 = new Date(now - 7 * 86400e3).toISOString();
  const d30 = new Date(now - 30 * 86400e3).toISOString();
  const m5 = new Date(now - 5 * 60e3).toISOString();
  // "Today" in PT — the wall-clock the dashboard runs on.
  const today = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }),
  );
  today.setHours(0, 0, 0, 0);
  const todayUtc = new Date(
    today.getTime() - today.getTimezoneOffset() * 60e3,
  ).toISOString();

  const [
    profilesTotal, signupsToday, signups24h, signups7d,
    devicesTotal, devicesToday, devicesIos, devicesAndroid,
    messagesToday, tapsToday, viewsToday, convosToday, convosTotal,
    activeNow, mau, premium,
    blocks, reports,
  ] = await Promise.all([
    count("profiles"),
    db.from("profiles").select("id", { count: "exact", head: true }).gte("created_at", todayUtc),
    db.from("profiles").select("id", { count: "exact", head: true }).gte("created_at", h24),
    db.from("profiles").select("id", { count: "exact", head: true }).gte("created_at", d7),
    count("device_tokens"),
    db.from("device_tokens").select("id", { count: "exact", head: true }).gte("created_at", todayUtc),
    db.from("device_tokens").select("id", { count: "exact", head: true }).eq("platform", "ios"),
    db.from("device_tokens").select("id", { count: "exact", head: true }).eq("platform", "android"),
    db.from("messages").select("id", { count: "exact", head: true }).gte("created_at", todayUtc),
    db.from("taps").select("to_id", { count: "exact", head: true }).gte("tapped_at", todayUtc),
    db.from("profile_views").select("viewer_id", { count: "exact", head: true }).gte("viewed_at", todayUtc),
    db.from("conversations").select("id", { count: "exact", head: true }).gte("created_at", todayUtc),
    count("conversations"),
    db.from("profiles").select("id", { count: "exact", head: true }).gte("last_seen_at", m5),
    db.from("profiles").select("id", { count: "exact", head: true }).gte("last_seen_at", d30),
    db.from("profiles").select("id", { count: "exact", head: true }).eq("subscription_tier", "premium"),
    count("blocks"),
    count("reports"),
  ]);

  const { data: recentSignups } = await db
    .from("profiles")
    .select("user_id, display_name, created_at, avatar_url, last_seen_at")
    .order("created_at", { ascending: false })
    .limit(8);

  const { data: online } = await db
    .from("profiles")
    .select("user_id, display_name, last_seen_at, avatar_url")
    .gte("last_seen_at", m5)
    .order("last_seen_at", { ascending: false })
    .limit(8);

  // Installs — every registered device with model/version/platform.
  const { data: devices } = await db
    .from("device_tokens")
    .select("platform, device_model, os_version, app_version, created_at, last_seen_at")
    .order("created_at", { ascending: false });

  const deviceRows = (devices ?? []) as Array<{
    platform: string;
    device_model: string | null;
    os_version: string | null;
    app_version: string | null;
    created_at: string;
    last_seen_at: string | null;
  }>;

  const modelCounts = new Map<string, number>();
  const versionCounts = new Map<string, number>();
  const osCounts = new Map<string, number>();
  deviceRows.forEach((d) => {
    const model = d.device_model ?? "Unknown device";
    modelCounts.set(model, (modelCounts.get(model) ?? 0) + 1);
    const ver = d.app_version ?? "pre-1.0";
    versionCounts.set(ver, (versionCounts.get(ver) ?? 0) + 1);
    if (d.os_version) osCounts.set(d.os_version, (osCounts.get(d.os_version) ?? 0) + 1);
  });
  const top = (m: Map<string, number>, n: number) =>
    [...m.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      .map(([name, count]) => ({ name, count }));

  const { count: completeProfiles } = await db
    .from("profiles")
    .select("id", { count: "exact", head: true })
    .not("display_name", "is", null)
    .not("avatar_url", "is", null);

  const { data: hourlyRaw } = await db
    .from("messages")
    .select("created_at")
    .gte("created_at", todayUtc);
  const { data: hourlySignups } = await db
    .from("profiles")
    .select("created_at")
    .gte("created_at", todayUtc);

  const ptHour = (iso: string) =>
    new Date(iso).toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: "numeric",
      hour12: false,
    });
  const hourly = Array.from({ length: 24 }, (_, h) => ({
    hour: h,
    messages: 0,
    signups: 0,
  }));
  (hourlyRaw ?? []).forEach((m: { created_at: string }) => {
    const h = parseInt(ptHour(m.created_at), 10);
    if (h >= 0 && h < 24) hourly[h].messages++;
  });
  (hourlySignups ?? []).forEach((p: { created_at: string }) => {
    const h = parseInt(ptHour(p.created_at), 10);
    if (h >= 0 && h < 24) hourly[h].signups++;
  });

  const total = profilesTotal.count ?? 0;
  const active30 = mau.count ?? 0;

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    signups: {
      today: signupsToday.count ?? 0,
      last24h: signups24h.count ?? 0,
      last7d: signups7d.count ?? 0,
      total,
      mau: active30,
      churned: total - active30,
      retainedPct: total ? Math.round((active30 / total) * 100) : 0,
    },
    installs: {
      today: devicesToday.count ?? 0,
      total: devicesTotal.count ?? 0,
      ios: devicesIos.count ?? 0,
      android: devicesAndroid.count ?? 0,
      topModels: top(modelCounts, 6),
      versions: top(versionCounts, 6),
      osVersions: top(osCounts, 6),
      recent: deviceRows.slice(0, 8).map((d) => ({
        platform: d.platform,
        model: d.device_model ?? "Unknown device",
        os: d.os_version,
        app: d.app_version,
        at: d.created_at,
      })),
    },
    activity: {
      messagesToday: messagesToday.count ?? 0,
      sparksToday: tapsToday.count ?? 0,
      viewsToday: viewsToday.count ?? 0,
      convosToday: convosToday.count ?? 0,
      convosTotal: convosTotal.count ?? 0,
    },
    insights: {
      premiumUsers: premium.count ?? 0,
      premiumRate: total ? Math.round(((premium.count ?? 0) / total) * 100) : 0,
      profileCompleteRate: total
        ? Math.round(((completeProfiles ?? 0) / total) * 100)
        : 0,
    },
    safety: {
      blocks: blocks.count ?? 0,
      reports: reports.count ?? 0,
    },
    live: {
      activeNow: activeNow.count ?? 0,
      onlineUsers: online ?? [],
    },
    recentSignups: recentSignups ?? [],
    hourly,
  });
}
