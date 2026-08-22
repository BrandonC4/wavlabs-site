import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

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
      // Already on the list — still send confirmation
      await sendConfirmationEmail(email, name);
      return NextResponse.json({
        ok: true,
        message: "You're already on the list! We sent you another confirmation email.",
      });
    }
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  await sendConfirmationEmail(email, name);

  return NextResponse.json({
    ok: true,
    message: "You're on the list! Check your email for confirmation.",
  });
}

async function sendConfirmationEmail(email: string, name: string | null) {
  try {
    const { error } = await resend.emails.send({
      from: "Wav <noreply@wavlabs.dev>",
      to: email,
      subject: "You're on the Wav beta list",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; background: #1A1F28; padding: 40px; border-radius: 16px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #2DD4BF; font-size: 28px; margin: 0;">Wav</h1>
            <p style="color: #8893A8; font-size: 14px; margin: 4px 0 0;">Ride the wave.</p>
          </div>

          <p style="color: #E8EAF0; font-size: 16px; line-height: 1.6;">
            Hi${name ? ` ${name}` : " there"},
          </p>

          <p style="color: #E8EAF0; font-size: 16px; line-height: 1.6;">
            You're officially on the Wav beta waitlist. We'll email you as soon as
            beta access opens up so you can be among the first to try Wav Messenger.
          </p>

          <p style="color: #8893A8; font-size: 14px; line-height: 1.6;">
            Wav is a username-first social messenger — find people by @username,
            start conversations, and chat in realtime. No ads, no phone numbers,
            just connection.
          </p>

          <div style="text-align: center; margin: 32px 0;">
            <a href="https://wavlabs.dev" style="background: #14B8A6; color: #fff; text-decoration: none; padding: 12px 32px; border-radius: 999px; font-weight: 600; display: inline-block;">
              Visit wavlabs.dev
            </a>
          </div>

          <hr style="border: none; border-top: 1px solid #363D52; margin: 32px 0;" />

          <p style="color: #555E70; font-size: 12px; text-align: center;">
            You received this email because you joined the Wav beta waitlist.
            If this wasn't you, you can safely ignore this email.
          </p>
          <p style="color: #555E70; font-size: 12px; text-align: center;">
            &copy; 2026 Wav Labs · support@wavlabs.dev
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[waitlist] resend error:", JSON.stringify(error));
    }
  } catch (err) {
    console.error("[waitlist] email send failed:", err);
  }
}
