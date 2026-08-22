"use server";

import { supabase } from "@/lib/supabase";

type WaitlistState = { ok: boolean; message: string } | null;

export async function joinWaitlist(prevState: WaitlistState, formData: FormData) {
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const name = (formData.get("name") as string)?.trim() || null;
  const platform = (formData.get("platform") as string) || "both";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const { error } = await supabase
    .from("waitlist")
    .upsert({ email, name, platform }, { onConflict: "email" });

  if (error) {
    if (error.code === "23505") {
      return { ok: true, message: "You're already on the list! We'll be in touch." };
    }
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  return { ok: true, message: "You're on the list! We'll email you when beta access opens." };
}
