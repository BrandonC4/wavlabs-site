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
      setState(data);
    } catch {
      setState({ ok: false, message: "Something went wrong. Please try again." });
    } finally {
      setIsPending(false);
    }
  }

  if (state?.ok) {
    return (
      <div className="flex flex-col items-center gap-6 rounded-2xl bg-surface p-12 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ocean/15 glow-ocean">
          <CheckCircle2 className="h-10 w-10 text-ocean-glow" />
        </div>
        <div>
          <p className="text-2xl font-bold text-ink">You're in.</p>
          <p className="mt-2 text-base text-ink-soft">{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-2xl bg-surface p-10">
      <div className="mb-2 flex items-center gap-2 text-sm font-medium text-ocean-glow">
        <Sparkles className="h-4 w-4" />
        Beta access — it takes 10 seconds
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-base font-medium text-ink-soft">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="rounded-xl border border-border bg-sand px-5 py-4 text-lg text-ink outline-none transition placeholder:text-ink-dim focus:border-ocean focus:ring-2 focus:ring-ocean/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-base font-medium text-ink-soft">
          Name <span className="text-ink-dim">(optional)</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="rounded-xl border border-border bg-sand px-5 py-4 text-lg text-ink outline-none transition placeholder:text-ink-dim focus:border-ocean focus:ring-2 focus:ring-ocean/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-base font-medium text-ink-soft">Platform</label>
        <div className="flex gap-3">
          {[
            { value: "ios", label: "iOS" },
            { value: "android", label: "Android" },
            { value: "both", label: "Both" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex-1 cursor-pointer rounded-xl border border-border bg-sand px-5 py-3.5 text-center text-base font-medium text-ink-soft transition has-[:checked]:border-ocean has-[:checked]:bg-ocean/10 has-[:checked]:text-ocean-glow has-[:checked]:shadow-lg has-[:checked]:glow-ocean"
            >
              <input type="radio" name="platform" value={opt.value} className="sr-only" defaultChecked={opt.value === "both"} />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {state && !state.ok && (
        <div className="flex items-center gap-2 rounded-xl bg-coral/10 px-5 py-4 text-base text-coral">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="flex items-center justify-center gap-2 rounded-xl bg-ocean px-8 py-5 text-lg font-bold text-white transition hover:bg-ocean-bright hover:scale-[1.02] disabled:opacity-60 pulse-glow"
      >
        {isPending ? (
          <>
            <Loader2 className="h-6 w-6 animate-spin" />
            Joining...
          </>
        ) : (
          "Join the Beta"
        )}
      </button>

      <p className="text-center text-sm text-ink-dim">
        No spam. Just a download link when your invite is ready.
      </p>
    </form>
  );
}
