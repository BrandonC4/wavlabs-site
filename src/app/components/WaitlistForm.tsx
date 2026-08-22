"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

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
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-surface p-8">
        <CheckCircle2 className="h-12 w-12 text-ocean-bright" />
        <p className="text-center text-lg font-medium text-ink">{state.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl bg-surface p-8">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-ink-soft">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="rounded-lg border border-border bg-sand px-4 py-3 text-ink outline-none transition placeholder:text-ink-dim focus:border-ocean focus:ring-2 focus:ring-ocean/20"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-ink-soft">
          Name <span className="text-ink-dim">(optional)</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="rounded-lg border border-border bg-sand px-4 py-3 text-ink outline-none transition placeholder:text-ink-dim focus:border-ocean focus:ring-2 focus:ring-ocean/20"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-ink-soft">Platform</label>
        <div className="flex gap-2">
          {[
            { value: "ios", label: "iOS" },
            { value: "android", label: "Android" },
            { value: "both", label: "Both" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex-1 cursor-pointer rounded-lg border border-border bg-sand px-4 py-2.5 text-center text-sm font-medium text-ink-soft transition has-[:checked]:border-ocean has-[:checked]:bg-ocean/10 has-[:checked]:text-ocean-bright"
            >
              <input type="radio" name="platform" value={opt.value} className="sr-only" defaultChecked={opt.value === "both"} />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {state && !state.ok && (
        <div className="flex items-center gap-2 rounded-lg bg-coral/10 px-4 py-3 text-sm text-coral">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="flex items-center justify-center gap-2 rounded-lg bg-ocean px-6 py-3.5 font-semibold text-white transition hover:bg-ocean-bright disabled:opacity-60"
      >
        {isPending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Joining...
          </>
        ) : (
          "Join the Beta"
        )}
      </button>
    </form>
  );
}
