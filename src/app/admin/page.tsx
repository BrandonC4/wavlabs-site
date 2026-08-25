import { getSupabaseAdmin } from "@/lib/supabase-admin";
import AdminDashboard from "./AdminDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

// Force dynamic rendering — the page reads env vars only available at
// runtime and queries Supabase on every request.
export const dynamic = "force-dynamic";

async function fetchStats() {
  const supabaseAdmin = getSupabaseAdmin();
  const [
    profilesRes,
    conversationsRes,
    messagesRes,
    groupsRes,
    directRes,
    friendshipsRes,
    waitlistRes,
    reportsRes,
    blockedRes,
    deviceTokensRes,
  ] = await Promise.all([
    supabaseAdmin.from("profiles").select("id", { count: "exact", head: true }),
    supabaseAdmin.from("conversations").select("id", { count: "exact", head: true }),
    supabaseAdmin.from("messages").select("id", { count: "exact", head: true }),
    supabaseAdmin.from("conversations").select("id", { count: "exact", head: true }).eq("type", "group"),
    supabaseAdmin.from("conversations").select("id", { count: "exact", head: true }).eq("type", "direct"),
    supabaseAdmin.from("friendships").select("id", { count: "exact", head: true }),
    supabaseAdmin.from("waitlist").select("id", { count: "exact", head: true }),
    supabaseAdmin.from("reports").select("id", { count: "exact", head: true }),
    supabaseAdmin.from("blocked_users").select("id", { count: "exact", head: true }),
    supabaseAdmin.from("device_tokens").select("id", { count: "exact", head: true }),
  ]);

  // Recent signups (last 7 days)
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const recentSignupsRes = await supabaseAdmin
    .from("profiles")
    .select("id", { count: "exact", head: true })
    .gte("created_at", sevenDaysAgo);

  // Recent messages (last 24h)
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const recentMessagesRes = await supabaseAdmin
    .from("messages")
    .select("id", { count: "exact", head: true })
    .gte("created_at", oneDayAgo);

  // Recent beta signups
  const recentWaitlistRes = await supabaseAdmin
    .from("waitlist")
    .select("email, name, platform, created_at")
    .order("created_at", { ascending: false })
    .limit(20);

  // Recent users
  const recentUsersRes = await supabaseAdmin
    .from("profiles")
    .select("id, username, display_name, avatar_url, created_at")
    .order("created_at", { ascending: false })
    .limit(20);

  // Reports — reporter_id and reported_id reference auth.users, not
  // profiles, so we can't use Supabase joins. Fetch reports first,
  // then batch-load all referenced profiles.
  const reportsDataRes = await supabaseAdmin
    .from("reports")
    .select("id, reason, details, created_at, reporter_id, reported_id")
    .order("created_at", { ascending: false })
    .limit(50);

  const reportRows = (reportsDataRes.data ?? []) as Array<{
    id: string;
    reason: string;
    details: string | null;
    created_at: string;
    reporter_id: string;
    reported_id: string;
  }>;

  // Batch-load all profiles referenced in reports.
  const reportUserIds = Array.from(
    new Set(reportRows.flatMap((r) => [r.reporter_id, r.reported_id])),
  );
  const reportProfilesRes = reportUserIds.length > 0
    ? await supabaseAdmin
        .from("profiles")
        .select("id, username, display_name, avatar_url, created_at")
        .in("id", reportUserIds)
    : { data: [], error: null };

  const profileMap: Record<string, any> = {};
  (reportProfilesRes.data ?? []).forEach((p: any) => {
    profileMap[p.id] = p;
  });

  // Groups — owner_id references auth.users, not profiles, so we
  // can't use a Supabase join. Fetch groups first, then batch-load
  // owner profiles by their IDs.
  const groupsDataRes = await supabaseAdmin
    .from("conversations")
    .select("id, title, created_at, owner_id")
    .eq("type", "group")
    .order("created_at", { ascending: false })
    .limit(50);

  // Batch-load owner profiles and member counts.
  const groupRows = (groupsDataRes.data ?? []) as Array<{
    id: string;
    title: string | null;
    created_at: string;
    owner_id: string | null;
  }>;
  const groupIds = groupRows.map((g) => g.id);
  const ownerIds = groupRows
    .map((g) => g.owner_id)
    .filter((id): id is string => id !== null);

  const [ownersRes, membersRes] = await Promise.all([
    ownerIds.length > 0
      ? supabaseAdmin
          .from("profiles")
          .select("id, username")
          .in("id", ownerIds)
      : Promise.resolve({ data: [], error: null }),
    groupIds.length > 0
      ? supabaseAdmin
          .from("conversation_members")
          .select("conversation_id")
          .in("conversation_id", groupIds)
      : Promise.resolve({ data: [], error: null }),
  ]);

  const ownerMap: Record<string, string> = {};
  (ownersRes.data ?? []).forEach((o: any) => {
    ownerMap[o.id] = o.username;
  });

  const groupMemberCounts: Record<string, number> = {};
  (membersRes.data ?? []).forEach((m: any) => {
    groupMemberCounts[m.conversation_id] = (groupMemberCounts[m.conversation_id] || 0) + 1;
  });

  return {
    counts: {
      users: profilesRes.count ?? 0,
      conversations: conversationsRes.count ?? 0,
      messages: messagesRes.count ?? 0,
      groups: groupsRes.count ?? 0,
      direct: directRes.count ?? 0,
      friendships: friendshipsRes.count ?? 0,
      waitlist: waitlistRes.count ?? 0,
      reports: reportsRes.count ?? 0,
      blocked: blockedRes.count ?? 0,
      deviceTokens: deviceTokensRes.count ?? 0,
      recentSignups: recentSignupsRes.count ?? 0,
      recentMessages: recentMessagesRes.count ?? 0,
    },
    recentWaitlist: recentWaitlistRes.data ?? [],
    recentUsers: recentUsersRes.data ?? [],
    reports: reportRows.map((r) => ({
      id: r.id,
      reason: r.reason,
      details: r.details,
      created_at: r.created_at,
      reporter_username: profileMap[r.reporter_id]?.username ?? "unknown",
      reported: profileMap[r.reported_id] ?? null,
    })),
    groups: groupRows.map((g) => ({
      id: g.id,
      title: g.title ?? "Untitled",
      created_at: g.created_at,
      owner_username: g.owner_id ? (ownerMap[g.owner_id] ?? "unknown") : "unknown",
      member_count: groupMemberCounts[g.id] ?? 0,
    })),
  };
}

export default async function AdminPage() {
  let stats;
  try {
    stats = await fetchStats();
  } catch (err) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-sand px-6">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-ink">Admin not configured</h1>
          <p className="mt-3 text-ink-soft">
            {(err as Error).message}
          </p>
          <p className="mt-2 text-sm text-ink-dim">
            Add SUPABASE_SERVICE_ROLE_KEY in Vercel → Settings → Environment
            Variables, then redeploy.
          </p>
        </div>
      </div>
    );
  }
  return <AdminDashboard stats={stats} />;
}
