import type { Metadata } from "next";
import WaitlistForm from "../components/WaitlistForm";
import {
  MapPin,
  Shield,
  Zap,
  Smartphone,
  Heart,
  ArrowRight,
} from "lucide-react";

const L8R_URL = "https://l8r.wavlabs.dev";

export const metadata: Metadata = {
  title: "l8r — meet someone, l8r",
  description:
    "A new kind of social discovery. Real people, real nearby — no feeds, no noise. Still early, still growing. iOS & Android.",
  alternates: { canonical: L8R_URL },
  icons: {
    icon: [
      { url: "/l8r-icon.png", sizes: "512x512", type: "image/png" },
      { url: "/l8r-favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: [{ url: "/l8r-apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/l8r-icon.png"],
  },
  openGraph: {
    title: "l8r — meet someone, l8r",
    description:
      "Real people. Real nearby. A new social discovery app — still early, still growing.",
    url: L8R_URL,
    siteName: "l8r",
    images: [
      {
        url: "/l8r-og.png",
        width: 1200,
        height: 630,
        alt: "l8r — the lantern",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "l8r — meet someone, l8r",
    description:
      "Real people. Real nearby. A new social discovery app — still early, still growing.",
    images: ["/l8r-og.png"],
  },
};

export default function L8rPage() {
  return (
    <div className="flex flex-col bg-[#170910]">
      {/* ─── Nav ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#43203A]/60 bg-[#170910]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/l8r" className="flex items-center gap-2 text-xl font-bold text-[#D8A88E]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/l8r-lantern.png"
              alt="l8r"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            l8r
          </a>
          <div className="flex items-center gap-6 text-sm font-medium text-[#BCA5AF]">
            <a href="#features" className="transition hover:text-[#D8A88E]">Features</a>
            <a href="/support" className="transition hover:text-[#D8A88E]">Support</a>
            <a
              href="#waitlist"
              className="rounded-full bg-[#D63242] px-4 py-2 font-semibold text-white transition hover:bg-[#B82836]"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute top-1/3 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D63242]/15 blur-[140px]" />
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <div className="fade-up mb-6 rounded-full border border-[#43203A] bg-[#240D19] px-4 py-1.5 text-sm font-medium text-[#D8A88E]">
            Early access — iOS + Android
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/l8r-lantern.png"
            alt="The l8r lantern"
            className="fade-up h-36 w-36 drop-shadow-[0_0_80px_rgba(214,50,66,0.5)]"
          />
          <h1 className="fade-up-delay-1 mt-8 max-w-4xl font-serif text-6xl tracking-tight text-[#FFF4F7] sm:text-8xl">
            meet someone, l8r.
          </h1>
          <p className="fade-up-delay-1 mt-6 max-w-xl text-xl text-[#BCA5AF] sm:text-2xl">
            Real people. Real nearby. No feeds, no noise.
          </p>
          <p className="fade-up-delay-2 mt-3 max-w-xl text-base text-[#7A5F6B]">
            We&apos;re still early and still growing — and every profile
            you&apos;ll ever see is a real person.
          </p>
          <div className="fade-up-delay-2 mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#waitlist"
              className="flex items-center gap-2 rounded-full bg-[#D63242] px-10 py-4 text-lg font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-[#B82836]"
            >
              Join the Waitlist
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 rounded-full border-2 border-[#43203A] px-10 py-4 text-lg font-semibold text-[#FFF4F7] transition hover:scale-105 hover:border-[#D8A88E]/50"
            >
              See More
            </a>
          </div>
        </div>
      </section>

      {/* ─── Features ────────────────────────────────────────── */}
      <section id="features" className="bg-[#100508] py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-5xl font-bold tracking-tight text-[#FFF4F7]">
              Social discovery, the way it should feel.
            </h2>
            <p className="mt-6 text-lg text-[#BCA5AF]">
              A grid of real people near you — no swiping theatrics, no
              engagement traps. Deliberate design, genuine intent.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: MapPin, title: "People nearby", desc: "A live grid of who's actually around you — distance, not algorithms." },
              { icon: Shield, title: "Privacy by default", desc: "Incognito browsing, discreet notifications, and your data stays yours." },
              { icon: Zap, title: "Deliberate, not addictive", desc: "No infinite feed tricks. You open, you see, you connect." },
              { icon: Smartphone, title: "iOS & Android", desc: "Native apps for both platforms, built for speed." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-[#43203A] bg-[#240D19] p-6 transition hover:border-[#D8A88E]/40">
                <f.icon className="h-8 w-8 text-[#D8A88E]" />
                <h3 className="mt-4 text-lg font-semibold text-[#FFF4F7]">{f.title}</h3>
                <p className="mt-2 text-sm text-[#BCA5AF]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Waitlist ────────────────────────────────────────── */}
      <section id="waitlist" className="scroll-mt-24 py-32">
        <div className="mx-auto max-w-lg px-6">
          <div className="mb-8 text-center">
            <h3 className="text-4xl font-bold text-[#FFF4F7]">Be early.</h3>
            <p className="mt-3 text-[#BCA5AF]">
              l8r is rolling out city by city. Join the list and we&apos;ll let
              you know when it lights up near you.
            </p>
          </div>
          <div className="rounded-2xl border border-[#43203A] bg-[#240D19] p-2">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-[#43203A] py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <a
              href="/"
              className="flex items-center gap-2 text-sm text-[#7A5F6B] transition-colors hover:text-[#D8A88E]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/wavlabs-logo.png" alt="" className="h-4 w-4" />
              Wav Labs
            </a>
            <div className="flex gap-6 text-sm text-[#BCA5AF]">
              <a href="/support" className="transition hover:text-[#D8A88E]">Support</a>
              <a href="/privacy" className="transition hover:text-[#D8A88E]">Privacy</a>
              <a href="/terms" className="transition hover:text-[#D8A88E]">Terms</a>
              <a href="/guidelines" className="transition hover:text-[#D8A88E]">Guidelines</a>
            </div>
          </div>
          <div className="mt-8 border-t border-[#43203A] pt-8 text-center text-sm text-[#7A5F6B]">
            <p>&copy; 2026 Wav Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
