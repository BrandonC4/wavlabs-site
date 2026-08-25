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

  // Reports with reporter and reported user info
  const reportsDataRes = await supabaseAdmin
    .from("reports")
    .select(`
      id,
      reason,
      details,
      created_at,
      reporter:profiles!reports_reporter_id_fkey(username),
      reported:profiles!reports_reported_id_fkey(id, username, display_name, avatar_url, created_at)
    `)
    .order("created_at", { ascending: false })
    .limit(50);

  // Groups with member counts and owner info
  const groupsDataRes = await supabaseAdmin
    .from("conversations")
    .select(`
      id,
      title,
      created_at,
      owner:profiles!conversations_owner_id_fkey(username)
    `)
    .eq("type", "group")
    .order("created_at", { ascending: false })
    .limit(50);

  // Get member counts for each group
  const groupIds = (groupsDataRes.data ?? []).map((g: any) => g.id);
  let groupMemberCounts: Record<string, number> = {};
  if (groupIds.length > 0) {
    const { data: memberData } = await supabaseAdmin
      .from("conversation_members")
      .select("conversation_id")
      .in("conversation_id", groupIds);

    if (memberData) {
      memberData.forEach((m: any) => {
        groupMemberCounts[m.conversation_id] = (groupMemberCounts[m.conversation_id] || 0) + 1;
      });
    }
  }

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
    reports: (reportsDataRes.data ?? []).map((r: any) => ({
      id: r.id,
      reason: r.reason,
      details: r.details,
      created_at: r.created_at,
      reporter_username: r.reporter?.username ?? "unknown",
      reported: r.reported ?? null,
    })),
    groups: (groupsDataRes.data ?? []).map((g: any) => ({
      id: g.id,
      title: g.title ?? "Untitled",
      created_at: g.created_at,
      owner_username: g.owner?.username ?? "unknown",
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
