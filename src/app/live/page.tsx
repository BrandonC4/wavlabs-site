"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Activity,
  Clock,
  Eye,
  Flag,
  Flame,
  Lock,
  Maximize,
  MessageCircle,
  Minimize,
  ShieldBan,
  Smartphone,
  Star,
  TrendingUp,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";

const ADMIN_PASSWORD =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "wav-admin-2026";

interface OnlineUser {
  user_id: string;
  display_name: string | null;
  last_seen_at: string;
  avatar_url: string | null;
}

interface RecentSignup {
  user_id: string;
  display_name: string | null;
  created_at: string;
  avatar_url: string | null;
}

interface LiveData {
  timestamp: string;
  signups: {
    today: number;
    last24h: number;
    last7d: number;
    total: number;
    mau: number;
    churned: number;
    retainedPct: number;
  };
  installs: { today: number; total: number; ios: number; android: number };
  activity: {
    messagesToday: number;
    sparksToday: number;
    viewsToday: number;
    convosToday: number;
    convosTotal: number;
  };
  insights: { premiumUsers: number; premiumRate: number; profileCompleteRate: number };
  safety: { blocks: number; reports: number };
  live: { activeNow: number; onlineUsers: OnlineUser[] };
  recentSignups: RecentSignup[];
  hourly: { hour: number; messages: number; signups: number }[];
}

// Velvet palette — the app's own colors.
const V = {
  bg: "#170910",
  card: "#240D19",
  cardDeep: "#100508",
  border: "#43203A",
  accent: "#D63242",
  champagne: "#D8A88E",
  text: "#FFF4F7",
  soft: "#BCA5AF",
  dim: "#7A5F6B",
  green: "#4ADE80",
  pink: "#F472B6",
  orange: "#FB923C",
  purple: "#C084FC",
};

function AnimatedNumber({ value, size }: { value: number; size: string }) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);
  const raf = useRef<number>(0);

  useEffect(() => {
    const start = prev.current;
    const diff = value - start;
    if (diff === 0) return;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / 600, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(start + diff * eased));
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else prev.current = value;
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [value]);

  return (
    <div
      className="truncate font-mono font-black leading-none tabular-nums"
      style={{ fontSize: size, color: V.text, textShadow: `0 0 30px ${V.accent}33` }}
    >
      {display.toLocaleString()}
    </div>
  );
}

function ago(iso: string) {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}

const card = {
  background: V.card,
  border: `1px solid ${V.border}`,
  borderRadius: "1rem",
} as const;

const label = {
  fontSize: "clamp(0.6rem, 0.85vw, 0.85rem)",
  color: V.soft,
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
};

const sub = { fontSize: "clamp(0.55rem, 0.72vw, 0.75rem)", color: V.dim };

export default function LivePage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [data, setData] = useState<LiveData | null>(null);
  const [pulse, setPulse] = useState<string | null>(null);
  const [clock, setClock] = useState(new Date());
  const [fs, setFs] = useState(false);
  const prev = useRef<LiveData | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("wav-admin") === "ok") setAuthed(true);
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/live", {
        cache: "no-store",
        headers: { "x-admin-key": ADMIN_PASSWORD },
      });
      if (!res.ok) return;
      const json = (await res.json()) as LiveData;

      const p = prev.current;
      if (p) {
        if (json.signups.today > p.signups.today) setPulse("signup");
        else if (json.installs.today > p.installs.today) setPulse("install");
        else if (
          json.activity.messagesToday > p.activity.messagesToday ||
          json.activity.sparksToday > p.activity.sparksToday ||
          json.activity.viewsToday > p.activity.viewsToday
        )
          setPulse("activity");
        else setPulse(null);
        if (p.signups.today !== json.signups.today ||
            p.installs.today !== json.installs.today ||
            p.activity.messagesToday !== json.activity.messagesToday) {
          setTimeout(() => setPulse(null), 1200);
        }
      }
      prev.current = json;
      setData(json);
    } catch {
      // keep last frame
    }
  }, []);

  useEffect(() => {
    if (!authed) return;
    const start = () => {
      if (pollRef.current) return;
      fetchData();
      pollRef.current = setInterval(fetchData, 15000);
    };
    const stop = () => {
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };
    const onVis = () => (document.visibilityState === "visible" ? start() : stop());
    onVis();
    document.addEventListener("visibilitychange", onVis);
    const tick = setInterval(() => setClock(new Date()), 1000);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      stop();
      clearInterval(tick);
    };
  }, [authed, fetchData]);

  const toggleFs = () => {
    if (!document.fullscreenElement)
      document.documentElement.requestFullscreen?.().catch(() => {});
    else document.exitFullscreen?.().catch(() => {});
  };
  useEffect(() => {
    const f = () => setFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", f);
    return () => document.removeEventListener("fullscreenchange", f);
  }, []);

  if (!authed) {
    return (
      <div
        className="flex min-h-screen items-center justify-center px-6"
        style={{ background: V.bg }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (pw === ADMIN_PASSWORD) {
              sessionStorage.setItem("wav-admin", "ok");
              setAuthed(true);
            } else setPwError(true);
          }}
          className="w-full max-w-sm"
        >
          <div className="mb-8 text-center">
            <div
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: `${V.accent}22` }}
            >
              <Lock className="h-8 w-8" style={{ color: V.champagne }} />
            </div>
            <h1 className="text-2xl font-bold" style={{ color: V.text }}>
              l8r Live
            </h1>
            <p className="mt-2 text-sm" style={{ color: V.soft }}>
              Operations dashboard
            </p>
          </div>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Password"
            autoFocus
            className="mb-3 w-full rounded-xl px-5 py-4 text-lg outline-none"
            style={{ background: V.card, border: `1px solid ${V.border}`, color: V.text }}
          />
          {pwError && (
            <p className="mb-3 text-sm" style={{ color: V.accent }}>
              Wrong password.
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-xl px-6 py-3.5 font-semibold text-white"
            style={{ background: V.accent }}
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center" style={{ background: V.bg }}>
        <p style={{ color: V.dim }}>Loading…</p>
      </div>
    );
  }

  const maxHourly = Math.max(
    ...data.hourly.map((h) => Math.max(h.messages, h.signups)),
    1,
  );

  const pulseGlow = (key: string) =>
    pulse === key ? `0 0 30px ${V.accent}55` : "none";

  return (
    <div
      className="flex h-screen w-screen flex-col gap-[1vh] overflow-hidden p-[1vh_1.5vw] antialiased"
      style={{ background: V.bg, color: V.text }}
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="h-[0.7rem] w-[0.7rem] animate-pulse rounded-full"
            style={{ background: V.green, boxShadow: `0 0 12px ${V.green}99` }}
          />
          <span className="text-[clamp(1.2rem,2.2vw,2rem)] font-extrabold tracking-tight">
            l8r <span style={{ color: V.champagne }}>Live</span>
          </span>
          <span
            className="flex items-center gap-1.5 rounded-full px-3 py-1 font-semibold"
            style={{
              background: V.accent,
              fontSize: "clamp(0.6rem,0.8vw,0.8rem)",
            }}
          >
            <Zap className="h-3 w-3" /> LIVE
          </span>
        </div>
        <div className="flex items-center gap-3" style={{ color: V.dim }}>
          <Clock className="h-4 w-4" />
          <span className="font-mono text-[clamp(0.7rem,1vw,1rem)]">
            {clock.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              timeZone: "America/Los_Angeles",
            })}
          </span>
          <span>
            {clock.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              timeZone: "America/Los_Angeles",
            })}
          </span>
          <button onClick={toggleFs} className="p-1 transition hover:text-white">
            {fs ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Row 1 — headline stats */}
      <div className="flex shrink-0 gap-[1vw]">
        <div className="relative flex-1 overflow-hidden p-[0.8vh_1vw]" style={{ ...card, boxShadow: pulseGlow("signup"), transition: "all .3s" }}>
          <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: V.champagne }} />
          <div className="mb-[0.8vh] flex items-center gap-2">
            <UserPlus style={{ color: V.champagne }} className="h-[clamp(1rem,1.5vw,1.5rem)] w-[clamp(1rem,1.5vw,1.5rem)]" />
            <span style={label}>Members Today</span>
          </div>
          <AnimatedNumber value={data.signups.today} size="clamp(2rem,4.5vw,4.5rem)" />
          <div style={sub}>{data.signups.last24h} in 24h · {data.signups.last7d} in 7d</div>
        </div>

        <div className="relative flex-1 overflow-hidden p-[0.8vh_1vw]" style={{ ...card, boxShadow: pulseGlow("install"), transition: "all .3s" }}>
          <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: V.purple }} />
          <div className="mb-[0.8vh] flex items-center gap-2">
            <Smartphone style={{ color: V.purple }} className="h-[clamp(1rem,1.5vw,1.5rem)] w-[clamp(1rem,1.5vw,1.5rem)]" />
            <span style={label}>Devices Today</span>
          </div>
          <AnimatedNumber value={data.installs.today} size="clamp(2rem,4.5vw,4.5rem)" />
          <div style={sub}>{data.installs.ios} iOS · {data.installs.android} Android</div>
        </div>

        <div className="relative flex-1 overflow-hidden p-[0.8vh_1vw]" style={card}>
          <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: V.green }} />
          <div className="mb-[0.8vh] flex items-center gap-2">
            <Users style={{ color: V.green }} className="h-[clamp(1rem,1.5vw,1.5rem)] w-[clamp(1rem,1.5vw,1.5rem)]" />
            <span style={label}>Total Members</span>
          </div>
          <AnimatedNumber value={data.signups.total} size="clamp(2rem,4.5vw,4.5rem)" />
          <div style={sub}>
            <span style={{ color: V.green }}>{data.signups.mau}</span> active 30d ·{" "}
            {data.signups.retainedPct}% retained
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden p-[0.8vh_1vw]" style={{ ...card, boxShadow: pulseGlow("activity"), transition: "all .3s" }}>
          <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: V.accent }} />
          <div className="mb-[0.8vh] flex items-center gap-2">
            <Activity style={{ color: V.accent }} className="h-[clamp(1rem,1.5vw,1.5rem)] w-[clamp(1rem,1.5vw,1.5rem)]" />
            <span style={label}>Online Now</span>
          </div>
          <AnimatedNumber value={data.live.activeNow} size="clamp(2rem,4.5vw,4.5rem)" />
          <div style={sub}>seen in the last 5 min</div>
        </div>
      </div>

      {/* Row 2 — compact metrics */}
      <div className="flex shrink-0 gap-[0.6vw]">
        {[
          { icon: MessageCircle, color: V.champagne, label: "Messages", value: data.activity.messagesToday },
          { icon: Flame, color: V.accent, label: "Sparks", value: data.activity.sparksToday },
          { icon: Eye, color: V.orange, label: "Views", value: data.activity.viewsToday },
          { icon: Star, color: V.champagne, label: "Premium %", value: data.insights.premiumRate },
          { icon: Users, color: V.green, label: "Profiles %", value: data.insights.profileCompleteRate },
          { icon: ShieldBan, color: V.pink, label: "Blocks", value: data.safety.blocks },
          { icon: Flag, color: V.orange, label: "Reports", value: data.safety.reports },
        ].map(({ icon: Icon, color, label: l, value }) => (
          <div
            key={l}
            className="flex flex-1 items-center gap-[0.6vw] p-[0.6vh_0.8vw]"
            style={{ ...card, borderRadius: "0.8rem" }}
          >
            <Icon style={{ color }} className="h-[clamp(0.9rem,1.3vw,1.3rem)] w-[clamp(0.9rem,1.3vw,1.3rem)] shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="truncate" style={{ ...label, fontSize: "clamp(0.5rem,0.65vw,0.65rem)" }}>{l}</div>
              <AnimatedNumber value={value} size="clamp(1rem,1.8vw,1.8rem)" />
            </div>
          </div>
        ))}
      </div>

      {/* Row 3 — online users + recent signups */}
      <div className="flex h-[13vh] min-h-[100px] shrink-0 gap-[0.6vw]">
        <div className="flex flex-[3] flex-col overflow-hidden p-[0.8vh_1vw]" style={card}>
          <div className="mb-[0.8vh] flex items-center gap-2">
            <Activity style={{ color: V.green }} className="h-4 w-4" />
            <span style={label}>Online Right Now</span>
            <span className="font-mono" style={{ color: V.green, fontSize: "0.75rem" }}>
              {data.live.activeNow}
            </span>
          </div>
          <div className="flex-1 space-y-[0.3vh] overflow-hidden">
            {data.live.onlineUsers.length === 0 && (
              <p style={{ ...sub, padding: "0.5rem 0" }}>Nobody online right now</p>
            )}
            {data.live.onlineUsers.slice(0, 5).map((u) => (
              <div
                key={u.user_id}
                className="flex items-center justify-between rounded-lg px-[0.6vw] py-[0.3vh]"
                style={{ background: `${V.green}11` }}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="h-[0.4rem] w-[0.4rem] animate-pulse rounded-full" style={{ background: V.green }} />
                  <span className="truncate font-semibold" style={{ fontSize: "clamp(0.65rem,0.85vw,0.9rem)" }}>
                    {u.display_name ?? "Member"}
                  </span>
                </div>
                <span className="font-mono" style={{ ...sub, fontSize: "clamp(0.55rem,0.7vw,0.7rem)" }}>
                  {ago(u.last_seen_at)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-[2] flex-col overflow-hidden p-[0.8vh_1vw]" style={card}>
          <div className="mb-[0.8vh] flex items-center gap-2">
            <UserPlus style={{ color: V.champagne }} className="h-4 w-4" />
            <span style={label}>Newest Members</span>
          </div>
          <div className="flex-1 space-y-[0.3vh] overflow-hidden">
            {data.recentSignups.slice(0, 5).map((u) => (
              <div key={u.user_id} className="flex items-center justify-between rounded-lg px-[0.6vw] py-[0.3vh]" style={{ background: `${V.champagne}0d` }}>
                <span className="truncate font-semibold" style={{ fontSize: "clamp(0.65rem,0.85vw,0.9rem)" }}>
                  {u.display_name ?? "New member"}
                </span>
                <span className="font-mono" style={{ ...sub, fontSize: "clamp(0.55rem,0.7vw,0.7rem)" }}>
                  {ago(u.created_at)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 4 — hourly chart */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-[0.8vh_1vw]" style={card}>
        <div className="mb-[0.5vh] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp style={{ color: V.champagne }} className="h-4 w-4" />
            <span style={label}>Today, hourly</span>
          </div>
          <div className="flex gap-3" style={{ fontSize: "clamp(0.55rem,0.7vw,0.7rem)", color: V.dim }}>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm" style={{ background: V.champagne }} /> Messages</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm" style={{ background: V.accent }} /> Signups</span>
          </div>
        </div>
        <div className="flex min-h-0 flex-1 items-end gap-[2px]">
          {data.hourly.map((h) => (
            <div key={h.hour} className="flex min-w-0 flex-1 items-end justify-center gap-[2px]" style={{ height: "100%" }}>
              <div
                className="w-[45%] rounded-t-sm"
                style={{
                  height: `${(h.messages / maxHourly) * 100}%`,
                  background: `${V.champagne}cc`,
                  minHeight: h.messages ? "3px" : 0,
                }}
                title={`${h.hour}:00 — ${h.messages} messages`}
              />
              <div
                className="w-[45%] rounded-t-sm"
                style={{
                  height: `${(h.signups / maxHourly) * 100}%`,
                  background: V.accent,
                  minHeight: h.signups ? "3px" : 0,
                }}
                title={`${h.hour}:00 — ${h.signups} signups`}
              />
            </div>
          ))}
        </div>
        <div className="mt-[0.4vh] flex justify-between font-mono" style={{ ...sub, fontSize: "clamp(0.5rem,0.6vw,0.62rem)" }}>
          <span>12a</span><span>3a</span><span>6a</span><span>9a</span><span>12p</span><span>3p</span><span>6p</span><span>9p</span><span>11p</span>
        </div>
      </div>
    </div>
  );
}
