import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const { userId } = await req.json();
  if (!userId) {
    return NextResponse.json({ error: "missing userId" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  // Unban: set ban_duration to 'none' to lift the ban.
  const { error } = await supabase.auth.admin.updateUserById(
    userId,
    { ban_duration: "none" },
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, banned: false });
}
