import { supabaseAdmin } from "@/lib/supabase-admin";
import AdminDashboard from "./AdminDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

async function fetchStats() {
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
  };
}

export default async function AdminPage() {
  const stats = await fetchStats();
  return <AdminDashboard stats={stats} />;
}
