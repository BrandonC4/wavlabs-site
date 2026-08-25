import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const { userId, duration } = await req.json();
  if (!userId) {
    return NextResponse.json({ error: "missing userId" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  // Ban the user via Supabase Auth admin API.
  // duration: '8h', '24h', '168h' etc. If omitted, bans for 100 years.
  const banDuration = duration || "876000h"; // ~100 years
  const { error } = await supabase.auth.admin.updateUserById(
    userId,
    { ban_duration: banDuration },
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, banned: true });
}
