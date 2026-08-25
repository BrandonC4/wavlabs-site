"use client";

import { useState, useEffect } from "react";
import {
  Users,
  MessageSquare,
  Group,
  Heart,
  Mail,
  Flag,
  Shield,
  Smartphone,
  TrendingUp,
  Clock,
  ArrowRight,
  Lock,
} from "lucide-react";

interface Stats {
  counts: {
    users: number;
    conversations: number;
    messages: number;
    groups: number;
    direct: number;
    friendships: number;
    waitlist: number;
    reports: number;
    blocked: number;
    deviceTokens: number;
    recentSignups: number;
    recentMessages: number;
  };
  recentWaitlist: Array<{
    email: string;
    name: string | null;
    platform: string;
    created_at: string;
  }>;
  recentUsers: Array<{
    id: string;
    username: string;
    display_name: string | null;
    avatar_url: string | null;
    created_at: string;
  }>;
}

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "wav-admin-2026";

export default function AdminDashboard({ stats }: { stats: Stats }) {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("wav-admin");
    if (saved === "ok") setAuthed(true);
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("wav-admin", "ok");
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-sand px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ocean/15">
              <Lock className="h-8 w-8 text-ocean-glow" />
            </div>
            <h1 className="text-2xl font-bold text-ink">Admin Access</h1>
            <p className="mt-2 text-sm text-ink-soft">Enter password to view dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              className="rounded-xl border border-border bg-surface px-5 py-4 text-lg text-ink outline-none transition placeholder:text-ink-dim focus:border-ocean focus:ring-2 focus:ring-ocean/20"
            />
            {error && (
              <p className="text-sm text-coral">Wrong password. Try again.</p>
            )}
            <button
              type="submit"
              className="rounded-xl bg-ocean px-6 py-3.5 font-semibold text-white transition hover:bg-ocean-bright"
            >
              Enter
            </button>
          </form>
          <a
            href="/"
            className="mt-6 block text-center text-sm text-ink-soft transition hover:text-ocean-glow"
          >
            Back to site
          </a>
        </div>
      </div>
    );
  }

  const { counts, recentWaitlist, recentUsers } = stats;

  const statCards = [
    { label: "Total Users", value: counts.users, icon: Users, color: "text-ocean-glow", sub: `+${counts.recentSignups} this week` },
    { label: "Messages Sent", value: counts.messages, icon: MessageSquare, color: "text-coral", sub: `${counts.recentMessages} in last 24h` },
    { label: "Conversations", value: counts.conversations, icon: Group, color: "text-sunset", sub: `${counts.direct} DMs / ${counts.groups} groups` },
    { label: "Beta Signups", value: counts.waitlist, icon: Mail, color: "text-ocean-glow", sub: "from website" },
    { label: "Friendships", value: counts.friendships, icon: Heart, color: "text-coral", sub: "accepted friends" },
    { label: "Push Tokens", value: counts.deviceTokens, icon: Smartphone, color: "text-sunset", sub: "registered devices" },
    { label: "Reports", value: counts.reports, icon: Flag, color: "text-coral", sub: "moderation queue" },
    { label: "Blocked", value: counts.blocked, icon: Shield, color: "text-ink-soft", sub: "blocked users" },
  ];

  function formatTime(iso: string) {
    const d = new Date(iso);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (mins > 0) return `${mins}m ago`;
    return "just now";
  }

  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-ocean-glow" />
            <h1 className="text-xl font-bold text-ink">Wav Admin</h1>
          </div>
          <div className="flex items-center gap-4 text-sm text-ink-soft">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              Live
            </span>
            <a href="/" className="transition hover:text-ocean-glow">Site</a>
            <button
              onClick={() => {
                sessionStorage.removeItem("wav-admin");
                setAuthed(false);
              }}
              className="text-coral transition hover:text-coral-bright"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 transition hover:border-ocean/30"
            >
              <div className="flex items-center justify-between">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <span className="text-3xl font-bold text-ink">{stat.value}</span>
              </div>
              <p className="mt-3 font-medium text-ink">{stat.label}</p>
              <p className="mt-1 text-sm text-ink-soft">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Recent beta signups */}
          <div className="glass rounded-2xl p-6">
            <h2 className="mb-4 text-lg font-bold text-ink">Recent Beta Signups</h2>
            <div className="flex flex-col gap-3">
              {recentWaitlist.length === 0 ? (
                <p className="text-sm text-ink-soft">No signups yet.</p>
              ) : (
                recentWaitlist.map((entry, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-ink">
                        {entry.name || entry.email}
                      </p>
                      <p className="text-sm text-ink-soft">
                        {entry.name ? entry.email : ""} / {entry.platform}
                      </p>
                    </div>
                    <span className="text-sm text-ink-dim">
                      {formatTime(entry.created_at)}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Recent users */}
          <div className="glass rounded-2xl p-6">
            <h2 className="mb-4 text-lg font-bold text-ink">Recent Users</h2>
            <div className="flex flex-col gap-3">
              {recentUsers.length === 0 ? (
                <p className="text-sm text-ink-soft">No users yet.</p>
              ) : (
                recentUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean/15 text-sm font-bold text-ocean-glow">
                        {user.username.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-ink">
                          @{user.username}
                        </p>
                        <p className="text-sm text-ink-soft">
                          {user.display_name || "No display name"}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-ink-dim">
                      {formatTime(user.created_at)}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
