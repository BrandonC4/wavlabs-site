"use client";

import { useState, useEffect, useCallback } from "react";
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
  Lock,
  Search,
  Ban,
  Trash2,
  Send,
  CheckCircle,
  XCircle,
  UserX,
  Image as ImageIcon,
  AlertTriangle,
} from "lucide-react";

interface ReportedUser {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  created_at: string;
}

interface Report {
  id: string;
  reason: string;
  details: string | null;
  created_at: string;
  reporter_username: string;
  reported: ReportedUser | null;
}

interface GroupInfo {
  id: string;
  title: string;
  created_at: string;
  owner_username: string;
  member_count: number;
}

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
  reports: Report[];
  groups: GroupInfo[];
}

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "wav-admin-2026";

type Tab = "stats" | "users" | "reports" | "groups" | "broadcast";

export default function AdminDashboard({ stats }: { stats: Stats }) {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [tab, setTab] = useState<Tab>("stats");

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
            {error && <p className="text-sm text-coral">Wrong password. Try again.</p>}
            <button
              type="submit"
              className="rounded-xl bg-ocean px-6 py-3.5 font-semibold text-white transition hover:bg-ocean-bright"
            >
              Enter
            </button>
          </form>
          <a href="/" className="mt-6 block text-center text-sm text-ink-soft transition hover:text-ocean-glow">
            Back to site
          </a>
        </div>
      </div>
    );
  }

  const tabs: { id: Tab; label: string; icon: typeof Users; badge?: number }[] = [
    { id: "stats", label: "Stats", icon: TrendingUp },
    { id: "users", label: "Users", icon: Users },
    { id: "reports", label: "Reports", icon: Flag, badge: stats.reports.length },
    { id: "groups", label: "Groups", icon: Group },
    { id: "broadcast", label: "Broadcast", icon: Send },
  ];

  return (
    <div className="min-h-screen bg-sand">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-ocean-glow" />
            <h1 className="text-xl font-bold text-ink">Wav Admin</h1>
          </div>
          <div className="flex items-center gap-4 text-sm text-ink-soft">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> Live
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

      {/* Tab bar */}
      <nav className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl gap-1 px-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition ${
                tab === t.id
                  ? "text-ocean-glow border-b-2 border-ocean-glow"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
              {t.badge !== undefined && t.badge > 0 && (
                <span className="ml-1 rounded-full bg-coral px-2 py-0.5 text-xs font-bold text-white">
                  {t.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {tab === "stats" && <StatsTab stats={stats} />}
        {tab === "users" && <UsersTab initialUsers={stats.recentUsers} />}
        {tab === "reports" && <ReportsTab reports={stats.reports} />}
        {tab === "groups" && <GroupsTab groups={stats.groups} />}
        {tab === "broadcast" && <BroadcastTab deviceCount={stats.counts.deviceTokens} />}
      </main>
    </div>
  );
}

// --- Stats Tab ---

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

function StatsTab({ stats }: { stats: Stats }) {
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

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <div key={stat.label} className="glass rounded-2xl p-6 transition hover:border-ocean/30">
            <div className="flex items-center justify-between">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <span className="text-3xl font-bold text-ink">{stat.value}</span>
            </div>
            <p className="mt-3 font-medium text-ink">{stat.label}</p>
            <p className="mt-1 text-sm text-ink-soft">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="mb-4 text-lg font-bold text-ink">Recent Beta Signups</h2>
          <div className="flex flex-col gap-3">
            {recentWaitlist.length === 0 ? (
              <p className="text-sm text-ink-soft">No signups yet.</p>
            ) : (
              recentWaitlist.map((entry, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0">
                  <div>
                    <p className="font-medium text-ink">{entry.name || entry.email}</p>
                    <p className="text-sm text-ink-soft">{entry.name ? entry.email : ""} / {entry.platform}</p>
                  </div>
                  <span className="text-sm text-ink-dim">{formatTime(entry.created_at)}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="mb-4 text-lg font-bold text-ink">Recent Users</h2>
          <div className="flex flex-col gap-3">
            {recentUsers.length === 0 ? (
              <p className="text-sm text-ink-soft">No users yet.</p>
            ) : (
              recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean/15 text-sm font-bold text-ocean-glow">
                      {user.username.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-ink">@{user.username}</p>
                      <p className="text-sm text-ink-soft">{user.display_name || "No display name"}</p>
                    </div>
                  </div>
                  <span className="text-sm text-ink-dim">{formatTime(user.created_at)}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// --- Users Tab ---

interface UserResult {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  created_at: string;
}

function UsersTab({ initialUsers }: { initialUsers: UserResult[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<UserResult[]>(initialUsers);
  const [loading, setLoading] = useState(false);
  const [actionMsg, setActionMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const search = useCallback(async (q: string) => {
    if (q.length < 1) {
      setResults(initialUsers);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/admin/search-users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q }),
      });
      const data = await res.json();
      if (data.users) setResults(data.users);
    } catch {
      // ignore
    }
    setLoading(false);
  }, [initialUsers]);

  async function doAction(userId: string, action: string, body: Record<string, unknown> = {}) {
    setActionMsg(null);
    const res = await fetch(`/api/admin/${action}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, ...body }),
    });
    const data = await res.json();
    if (data.ok || data.banned !== undefined || data.deleted) {
      setActionMsg({ type: "ok", text: `${action.replace("-", " ")} succeeded` });
    } else {
      setActionMsg({ type: "err", text: data.error || "Action failed" });
    }
    setTimeout(() => setActionMsg(null), 3000);
  }

  return (
    <div>
      <div className="mb-6 flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-dim" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              search(e.target.value);
            }}
            placeholder="Search by username..."
            className="w-full rounded-xl border border-border bg-surface py-3 pl-12 pr-4 text-ink outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/20"
          />
        </div>
        {loading && <span className="self-center text-sm text-ink-soft">Searching...</span>}
      </div>

      {actionMsg && (
        <div
          className={`mb-4 flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${
            actionMsg.type === "ok"
              ? "bg-ocean/15 text-ocean-glow"
              : "bg-coral/15 text-coral"
          }`}
        >
          {actionMsg.type === "ok" ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
          {actionMsg.text}
        </div>
      )}

      <div className="glass rounded-2xl p-6">
        <p className="mb-4 text-sm text-ink-soft">{results.length} user(s)</p>
        <div className="flex flex-col gap-3">
          {results.length === 0 ? (
            <p className="text-sm text-ink-soft">No users found.</p>
          ) : (
            results.map((user) => (
              <div key={user.id} className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean/15 text-sm font-bold text-ocean-glow">
                    {user.username.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-ink">@{user.username}</p>
                    <p className="text-sm text-ink-soft">
                      {user.display_name || "No display name"} / joined {formatTime(user.created_at)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => doAction(user.id, "clear-avatar")}
                    title="Clear avatar"
                    className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink-soft transition hover:border-sunset hover:text-sunset"
                  >
                    <ImageIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => doAction(user.id, "ban-user", { duration: "876000h" })}
                    title="Ban user"
                    className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink-soft transition hover:border-coral hover:text-coral"
                  >
                    <Ban className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => doAction(user.id, "unban-user")}
                    title="Unban user"
                    className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink-soft transition hover:border-ocean hover:text-ocean-glow"
                  >
                    <UserX className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`Delete @${user.username}? This permanently removes their account, messages, and all data.`)) {
                        doAction(user.id, "delete-user");
                      }
                    }}
                    title="Delete user permanently"
                    className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink-soft transition hover:border-coral hover:text-coral"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// --- Reports Tab ---

function ReportsTab({ reports }: { reports: Report[] }) {
  const [localReports, setLocalReports] = useState(reports);
  const [actionMsg, setActionMsg] = useState<string | null>(null);

  async function dismissReport(reportId: string) {
    const res = await fetch("/api/admin/dismiss-report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reportId }),
    });
    const data = await res.json();
    if (data.ok) {
      setLocalReports(localReports.filter((r) => r.id !== reportId));
      setActionMsg("Report dismissed");
      setTimeout(() => setActionMsg(null), 2000);
    }
  }

  async function banReported(userId: string, username: string) {
    if (!confirm(`Ban @${username}?`)) return;
    const res = await fetch("/api/admin/ban-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, duration: "876000h" }),
    });
    const data = await res.json();
    if (data.ok) {
      setActionMsg(`@${username} banned`);
      setTimeout(() => setActionMsg(null), 2000);
    }
  }

  const reasonColors: Record<string, string> = {
    spam: "text-sunset",
    harassment: "text-coral",
    inappropriate: "text-coral",
    impersonation: "text-sunset",
    other: "text-ink-soft",
  };

  return (
    <div>
      {actionMsg && (
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-ocean/15 px-4 py-3 text-sm text-ocean-glow">
          <CheckCircle className="h-4 w-4" /> {actionMsg}
        </div>
      )}

      <div className="glass rounded-2xl p-6">
        <h2 className="mb-4 text-lg font-bold text-ink">Moderation Queue</h2>
        {localReports.length === 0 ? (
          <div className="flex flex-col items-center py-12 text-center">
            <CheckCircle className="mb-3 h-12 w-12 text-ocean-glow" />
            <p className="text-lg font-medium text-ink">All clear</p>
            <p className="text-sm text-ink-soft">No reports in the queue.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {localReports.map((report) => (
              <div key={report.id} className="rounded-xl border border-border bg-surface p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className={`h-4 w-4 ${reasonColors[report.reason] || "text-ink-soft"}`} />
                      <span className={`font-semibold capitalize ${reasonColors[report.reason] || "text-ink-soft"}`}>
                        {report.reason}
                      </span>
                      <span className="text-sm text-ink-dim">{formatTime(report.created_at)}</span>
                    </div>
                    {report.details && (
                      <p className="mt-2 text-sm text-ink-soft">{report.details}</p>
                    )}
                    <div className="mt-3 flex items-center gap-4 text-sm">
                      <span className="text-ink-soft">
                        Reported: <span className="font-medium text-coral">@{report.reported?.username ?? "unknown"}</span>
                      </span>
                      <span className="text-ink-soft">
                        By: <span className="font-medium text-ink">@{report.reporter_username}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {report.reported && (
                      <button
                        onClick={() => banReported(report.reported!.id, report.reported!.username)}
                        className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-coral transition hover:border-coral hover:bg-coral/10"
                      >
                        <Ban className="mr-1 inline h-4 w-4" /> Ban
                      </button>
                    )}
                    <button
                      onClick={() => dismissReport(report.id)}
                      className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink-soft transition hover:border-ocean hover:text-ocean-glow"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// --- Groups Tab ---

function GroupsTab({ groups }: { groups: GroupInfo[] }) {
  const [localGroups, setLocalGroups] = useState(groups);
  const [actionMsg, setActionMsg] = useState<string | null>(null);

  async function deleteGroup(groupId: string, title: string) {
    if (!confirm(`Delete group "${title}"? This removes all messages and members.`)) return;
    const res = await fetch("/api/admin/delete-group", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ conversationId: groupId }),
    });
    const data = await res.json();
    if (data.ok) {
      setLocalGroups(localGroups.filter((g) => g.id !== groupId));
      setActionMsg("Group deleted");
      setTimeout(() => setActionMsg(null), 2000);
    }
  }

  return (
    <div>
      {actionMsg && (
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-ocean/15 px-4 py-3 text-sm text-ocean-glow">
          <CheckCircle className="h-4 w-4" /> {actionMsg}
        </div>
      )}

      <div className="glass rounded-2xl p-6">
        <h2 className="mb-4 text-lg font-bold text-ink">All Groups ({localGroups.length})</h2>
        {localGroups.length === 0 ? (
          <p className="text-sm text-ink-soft">No groups yet.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {localGroups.map((group) => (
              <div key={group.id} className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0">
                <div>
                  <p className="font-medium text-ink">{group.title}</p>
                  <p className="text-sm text-ink-soft">
                    Owner: @{group.owner_username} / {group.member_count} members / created {formatTime(group.created_at)}
                  </p>
                </div>
                <button
                  onClick={() => deleteGroup(group.id, group.title)}
                  className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-coral transition hover:border-coral hover:bg-coral/10"
                >
                  <Trash2 className="mr-1 inline h-4 w-4" /> Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// --- Broadcast Tab ---

function BroadcastTab({ deviceCount }: { deviceCount: number }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  async function sendBroadcast(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !body) return;
    if (!confirm(`Send push to ALL ${deviceCount} devices?\n\nTitle: ${title}\nBody: ${body}`)) return;
    setSending(true);
    setResult(null);
    try {
      const res = await fetch("/api/admin/broadcast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult({
          type: "ok",
          text: `Sent to ${data.sent}/${data.total} devices (${data.failed} failed)`,
        });
        setTitle("");
        setBody("");
      } else {
        setResult({ type: "err", text: data.error || "Broadcast failed" });
      }
    } catch {
      setResult({ type: "err", text: "Network error" });
    }
    setSending(false);
  }

  return (
    <div className="max-w-2xl">
      <div className="glass rounded-2xl p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean/15">
            <Send className="h-6 w-6 text-ocean-glow" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">Broadcast Push Notification</h2>
            <p className="text-sm text-ink-soft">
              Send to all {deviceCount} registered device{deviceCount !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {result && (
          <div
            className={`mb-6 flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${
              result.type === "ok" ? "bg-ocean/15 text-ocean-glow" : "bg-coral/15 text-coral"
            }`}
          >
            {result.type === "ok" ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
            {result.text}
          </div>
        )}

        <form onSubmit={sendBroadcast} className="flex flex-col gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-ink-soft">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Wav Update"
              maxLength={50}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/20"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-ink-soft">Message</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="e.g. We just shipped group chat! Update your app to try it out."
              maxLength={200}
              rows={4}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/20"
            />
            <p className="mt-1 text-right text-xs text-ink-dim">{body.length}/200</p>
          </div>
          <button
            type="submit"
            disabled={sending || !title || !body || deviceCount === 0}
            className="flex items-center justify-center gap-2 rounded-xl bg-ocean px-6 py-4 font-semibold text-white transition hover:bg-ocean-bright disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send className="h-5 w-5" />
            {sending ? "Sending..." : `Send to ${deviceCount} device${deviceCount !== 1 ? "s" : ""}`}
          </button>
        </form>
      </div>

      <div className="mt-4 rounded-xl border border-coral/20 bg-coral/5 p-4">
        <p className="flex items-center gap-2 text-sm text-coral">
          <AlertTriangle className="h-4 w-4" />
          Use sparingly — every user with the app installed will get a notification.
        </p>
      </div>
    </div>
  );
}
