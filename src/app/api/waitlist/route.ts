import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  let body: { email?: string; name?: string; platform?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const email = body.email?.trim().toLowerCase();
  const name = body.name?.trim() || null;
  const platform = body.platform || "both";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email, name, platform });

  if (error) {
    console.error("[waitlist] insert error:", JSON.stringify(error));
    if (error.code === "23505") {
      return NextResponse.json({
        ok: true,
        message: "You're already on the list! We'll be in touch.",
      });
    }
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "You're on the list! We'll email you when beta access opens.",
  });
}
