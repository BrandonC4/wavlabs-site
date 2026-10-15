"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function WaitlistForm() {
  const [state, setState] = useState<{ ok: boolean; message: string } | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setState(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      email: formData.get("email"),
      name: formData.get("name"),
      platform: formData.get("platform"),
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setState({ ok: data.ok, message: data.message });
    } catch {
      setState({ ok: false, message: "Something went wrong. Please try again." });
    } finally {
      setIsPending(false);
    }
  }

  if (state?.ok) {
    return (
      <div className="flex flex-col items-center gap-6 rounded-2xl bg-[#1C0A14] p-12 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D63242]/15">
          <CheckCircle2 className="h-10 w-10 text-[#D8A88E]" />
        </div>
        <div>
          <p className="text-2xl font-bold text-[#FFF4F7]">You&apos;re in.</p>
          <p className="mt-2 text-base text-[#BCA5AF]">{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-2xl bg-[#1C0A14] p-10">
      <div className="mb-2 flex items-center gap-2 text-sm font-medium text-[#D8A88E]">
        <Sparkles className="h-4 w-4" />
        Early access — it takes 10 seconds
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-base font-medium text-[#BCA5AF]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="rounded-xl border border-[#43203A] bg-[#170910] px-5 py-4 text-lg text-[#FFF4F7] outline-none transition placeholder:text-[#7A5F6B] focus:border-[#D8A88E] focus:ring-2 focus:ring-[#D8A88E]/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-base font-medium text-[#BCA5AF]">
          Name <span className="text-[#7A5F6B]">(optional)</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="rounded-xl border border-[#43203A] bg-[#170910] px-5 py-4 text-lg text-[#FFF4F7] outline-none transition placeholder:text-[#7A5F6B] focus:border-[#D8A88E] focus:ring-2 focus:ring-[#D8A88E]/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-base font-medium text-[#BCA5AF]">Platform</label>
        <div className="flex gap-3">
          {[
            { value: "ios", label: "iOS" },
            { value: "android", label: "Android" },
            { value: "both", label: "Both" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex-1 cursor-pointer rounded-xl border border-[#43203A] bg-[#170910] px-5 py-3.5 text-center text-base font-medium text-[#BCA5AF] transition has-[:checked]:border-[#D8A88E] has-[:checked]:bg-[#D8A88E]/10 has-[:checked]:text-[#D8A88E]"
            >
              <input type="radio" name="platform" value={opt.value} className="sr-only" defaultChecked={opt.value === "both"} />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {state && !state.ok && (
        <div className="flex items-center gap-2 rounded-xl bg-[#D63242]/10 px-5 py-4 text-base text-[#D63242]">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="flex items-center justify-center gap-2 rounded-xl bg-[#D63242] px-8 py-5 text-lg font-bold text-white transition hover:bg-[#B82836] hover:scale-[1.02] disabled:opacity-60"
      >
        {isPending ? (
          <>
            <Loader2 className="h-6 w-6 animate-spin" />
            Joining...
          </>
        ) : (
          "Join the Waitlist"
        )}
      </button>

      <p className="text-center text-sm text-[#7A5F6B]">
        No spam. Just a download link when your invite is ready.
      </p>
    </form>
  );
}
