import WaitlistForm from "../components/WaitlistForm";
import Image from "next/image";
import type { Metadata } from "next";
import {
  MessageCircle,
  Users,
  Shield,
  Zap,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Join the Wav Beta — Username-first messaging for iOS & Android",
  description:
    "Wav is now in beta. Join the first wave of iOS and Android users. Username-first messaging with no phone number, no ads, and no data selling. See the app and sign up in seconds.",
  alternates: {
    canonical: "https://wavlabs.dev/wav",
  },
  openGraph: {
    title: "Join the Wav Beta — Username-first messaging",
    description:
      "Wav is now in beta. Join the first wave of iOS and Android users. No phone number. No ads. Just connection.",
    url: "https://wavlabs.dev/wav",
    images: [
      {
        url: "/screenshots/conversations.jpeg",
        width: 1200,
        height: 630,
        alt: "Wav Messenger — conversation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Wav Beta — Username-first messaging",
    description:
      "Wav is now in beta. Join the first wave of iOS and Android users. No phone number. No ads.",
    images: ["/screenshots/conversations.jpeg"],
  },
};

export default function WavBetaPage() {
  return (
    <div className="flex flex-col">
      {/* ─── Nav ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 z-50 w-full border-b border-ocean/10 bg-sand/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 text-xl font-bold text-ocean-glow">
            <Image
              src="/wav-logo.png"
              alt="Wav Labs"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            Wav Labs
          </a>
          <div className="flex items-center gap-6 text-sm font-medium text-ink-soft">
            <a href="/" className="transition hover:text-ocean-glow">Home</a>
            <a href="/wav" className="text-ocean-glow">Wav</a>
            <a
              href="#join"
              className="rounded-full bg-ocean px-5 py-2 font-semibold text-white transition hover:bg-ocean-bright pulse-glow"
            >
              Join Beta
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 wave-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sand" />

        {/* Glowing orbs for depth */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-ocean/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-coral/10 blur-[100px]" />

        {/* Animated wave SVGs at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="wave-animate-slow relative block h-24 w-[200%]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              fill="rgba(15,20,25,0.5)"
            />
          </svg>
          <svg
            className="wave-animate relative -mt-20 block h-24 w-[200%]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
              fill="rgba(15,20,25,0.8)"
            />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center text-white">
          <div className="fade-up mb-6 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-ocean-glow backdrop-blur-sm">
            Now in beta for iOS + Android
          </div>
          <h1 className="fade-up-delay-1 max-w-4xl text-6xl font-bold tracking-tight sm:text-8xl">
            Message freely.
          </h1>
          <p className="fade-up-delay-1 mt-6 max-w-xl text-xl text-white/90 sm:text-2xl">
            Username-first messaging. No phone number. No ads.
          </p>
          <p className="fade-up-delay-2 mt-3 max-w-xl text-base text-white/60">
            Find your people, start a conversation, and just talk.
          </p>
          <div className="fade-up-delay-2 mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#join"
              className="flex items-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-bold text-ocean-deep shadow-2xl transition hover:scale-105 hover:bg-ocean-glow"
            >
              Join the Beta
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#screenshots"
              className="flex items-center gap-2 rounded-full border-2 border-white/30 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white/10"
            >
              See the App
            </a>
          </div>
        </div>
      </section>

      {/* ─── Screenshots ─────────────────────────────────────── */}
      <section id="screenshots" className="beach-gradient py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold tracking-tight text-ink">
              See Wav in action.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">
              A gorgeous, intuitive messaging experience built for real connection.
            </p>
          </div>
        </div>

        {/* Auto-scrolling marquee with edge fade and 3D tilt */}
        <div className="screenshot-row phone-perspective overflow-hidden">
          <div className="marquee-track">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-8">
                {[
                  { src: "/screenshots/chats.jpeg", label: "Chats", delay: "0s" },
                  { src: "/screenshots/conversations.jpeg", label: "Conversation", delay: "0.8s" },
                  { src: "/screenshots/discover.jpeg", label: "Discover", delay: "1.6s" },
                  { src: "/screenshots/friends.jpeg", label: "Friends", delay: "2.4s" },
                  { src: "/screenshots/profile.jpeg", label: "Profile", delay: "3.2s" },
                ].map((shot) => (
                  <div key={`${dup}-${shot.label}`} className="flex shrink-0 flex-col items-center gap-4">
                    <div
                      className="screenshot-card phone-tilt overflow-hidden rounded-[2.5rem] border-2 border-ocean/20 shadow-2xl glow-ocean"
                      style={{ animation: `float 6s ease-in-out ${shot.delay} infinite` }}
                    >
                      <Image
                        src={shot.src}
                        alt={shot.label}
                        width={320}
                        height={694}
                        className="h-auto w-[320px] object-cover"
                        priority={dup === 0 && shot.label === "Chats"}
                      />
                    </div>
                    <span className="text-sm font-medium text-ocean-glow">{shot.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean/10 px-4 py-1.5 text-sm font-medium text-ocean-glow">
            <MessageCircle className="h-4 w-4" />
            Wav Messenger
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-ink">
            Username-first messaging that feels like the beach.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
            Find people by username, not phone number. Start conversations with
            friends, create groups, and chat in realtime. Light beach and night
            beach themes for whatever vibe you're riding.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { icon: Users, title: "Your username is enough", desc: "Connect without giving someone your phone number. Find anyone by their @username." },
            { icon: Zap, title: "Messages that feel instant", desc: "No refreshing. No waiting. Just conversations that move." },
            { icon: Shield, title: "Privacy by default", desc: "No phone number required, ever. Your data stays yours." },
            { icon: Smartphone, title: "iOS & Android", desc: "Native apps for both platforms, built for speed." },
          ].map((f) => (
            <div key={f.title} className="glass rounded-xl p-6 transition hover:border-ocean/40">
              <f.icon className="h-8 w-8 text-ocean-glow" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-ink-soft">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Beta Form ───────────────────────────────────────── */}
      <section id="join" className="scroll-mt-24 beach-gradient py-32">
        <div className="mx-auto max-w-lg px-6">
          <div className="mb-8 text-center">
            <h3 className="text-4xl font-bold text-ink">Wav is now in beta.</h3>
            <p className="mt-3 text-ink-soft">Join the first wave of iOS and Android users.</p>
          </div>
          <div className="rounded-2xl border border-ocean/20 bg-surface-raised p-2 glow-ocean-strong">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ─── Philosophy ──────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 wave-gradient opacity-60" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean/20 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <h2 className="text-4xl font-bold tracking-tight">
            No ads. No data selling. People first.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
            Wav is built on a simple promise: your conversations are yours. We don't
            sell your data, we don't show you ads, and we don't trick you into staying
            engaged. Just a clean, fast, beautiful messaging app that respects you.
          </p>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-border bg-foam py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-lg font-bold text-ocean-glow">
              <Image
                src="/wav-logo.png"
                alt="Wav Labs"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              Wav Labs
            </div>
            <div className="flex gap-6 text-sm text-ink-soft">
              <a href="/" className="transition hover:text-ocean-glow">Home</a>
              <a href="/wav" className="transition hover:text-ocean-glow">Wav</a>
              <a href="/support" className="transition hover:text-ocean-glow">Support</a>
              <a href="/privacy" className="transition hover:text-ocean-glow">Privacy</a>
              <a href="/terms" className="transition hover:text-ocean-glow">Terms</a>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-ink-soft">
            <p>&copy; 2026 Wav Labs. All rights reserved.</p>
            <p className="mt-2">Built with care in Las Vegas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
