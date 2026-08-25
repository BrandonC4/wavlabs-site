import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const { userId } = await req.json();
  if (!userId) {
    return NextResponse.json({ error: "missing userId" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  // Delete from auth.users — cascades to profiles, messages,
  // conversation_members, friendships, device_tokens, etc. via FK.
  const { error } = await supabase.auth.admin.deleteUser(userId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, deleted: true });
}
