import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const { conversationId } = await req.json();
  if (!conversationId) {
    return NextResponse.json({ error: "missing conversationId" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  // Deleting the conversation cascades to conversation_members,
  // messages, banned_members, message_reactions, etc. via FK.
  const { error } = await supabase
    .from("conversations")
    .delete()
    .eq("id", conversationId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, deleted: true });
}
