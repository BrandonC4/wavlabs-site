import WaitlistForm from "./components/WaitlistForm";
import Image from "next/image";
import {
  MessageCircle,
  Users,
  Waves,
  Shield,
  Zap,
  Smartphone,
  MapPin,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ─── Nav ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 z-50 w-full border-b border-ocean/10 bg-sand/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-ocean-bright">
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
            <a href="#wav" className="transition hover:text-ocean-bright">Wav</a>
            <a href="#flistr" className="transition hover:text-ocean-bright">Flistr</a>
            <a href="#about" className="transition hover:text-ocean-bright">About</a>
            <a
              href="#beta"
              className="rounded-full bg-ocean px-5 py-2 text-white transition hover:bg-ocean-bright"
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

        {/* Animated wave SVGs at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="wave-animate-slow relative block h-24 w-[200%]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              fill="rgba(26,31,40,0.4)"
            />
          </svg>
          <svg
            className="wave-animate relative -mt-20 block h-24 w-[200%]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
              fill="rgba(26,31,40,0.7)"
            />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center text-white">
          <h1 className="fade-up max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
            Ride the wave.
          </h1>
          <p className="fade-up-delay-1 mt-6 max-w-xl text-lg text-white/90 sm:text-xl">
            Wav Labs builds username-first social products that put people first.
            No ads. No paywalls. Just connection.
          </p>
          <div className="fade-up-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#beta"
              className="flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-ocean-deep shadow-lg transition hover:bg-sand-light"
            >
              Join the Beta
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#wav"
              className="flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ─── Wav App Section ─────────────────────────────────── */}
      <section id="wav" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean/10 px-4 py-1.5 text-sm font-medium text-ocean-bright">
              <MessageCircle className="h-4 w-4" />
              Wav Messenger
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-ink">
              Username-first messaging that feels like the beach.
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Find people by username, not phone number. Start conversations with
              friends, create groups, and chat in realtime. Light beach and night
              beach themes for whatever vibe you're riding.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Users, title: "Username discovery", desc: "Find anyone by their @username" },
                { icon: Zap, title: "Realtime delivery", desc: "Sub-100ms message delivery via Ably" },
                { icon: Shield, title: "Privacy first", desc: "No phone number required, ever" },
                { icon: Smartphone, title: "iOS & Android", desc: "Native apps for both platforms" },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-border bg-surface p-5 transition hover:border-ocean/30">
                  <f.icon className="h-6 w-6 text-ocean-bright" />
                  <h3 className="mt-3 font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Beta waitlist form */}
          <div id="beta" className="scroll-mt-24">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-ink">Join the Private Beta</h3>
              <p className="mt-2 text-ink-soft">Be first to ride the wave.</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface-raised p-2 glow-ocean">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Flistr Section (Flistr brand slice) ─────────────── */}
      <section id="flistr" className="bg-[#09090B] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/flistr-logo.png"
                alt="Flistr"
                width={64}
                height={64}
                className="h-16 w-16 rounded-xl"
              />
              <h2 className="text-4xl font-bold tracking-tight text-[#E1E1E3]">
                Flistr
              </h2>
            </div>
            <p className="text-lg text-[#C084FC] font-medium">
              Map-first social discovery
            </p>
            <p className="mt-4 text-lg text-[#93939E]">
              Flistr is a map-first social discovery platform solving local
              disconnection. See real people in real places with authentic,
              presence-based connection. Building city-by-city density with a
              user-first philosophy.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: MapPin, title: "Map-first discovery", desc: "Browse profiles on a live map" },
                { icon: Heart, title: "Authentic connection", desc: "No swiping, no algorithms" },
                { icon: Shield, title: "Verified profiles", desc: "Photo verification & moderation" },
                { icon: Users, title: "Local network effects", desc: "City-by-city density building" },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-[#27272A] bg-[#0F0F12] p-5 transition hover:border-[#A855F7]/40"
                >
                  <f.icon className="h-6 w-6 text-[#A855F7]" />
                  <h3 className="mt-3 font-semibold text-[#E1E1E3]">{f.title}</h3>
                  <p className="mt-1 text-sm text-[#93939E]">{f.desc}</p>
                </div>
              ))}
            </div>
            <a
              href="https://flistr.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#A855F7] px-6 py-3 font-semibold text-white transition hover:bg-[#9333EA]"
            >
              Visit Flistr
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── About Wav Labs ──────────────────────────────────── */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean/10 px-4 py-1.5 text-sm font-medium text-ocean-bright">
            <Waves className="h-4 w-4" />
            Our Mission
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-ink">
            Built by people who care, for people who deserve better.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
            Wav Labs is building consumer social products with a simple philosophy:
            users first. No ads, no data selling, no engagement tricks. Just
            authentic, accessible tools for real human connection.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-8 text-center transition hover:border-coral/30">
            <Heart className="mx-auto h-10 w-10 text-coral" />
            <h3 className="mt-4 text-xl font-bold text-ink">User-First</h3>
            <p className="mt-2 text-ink-soft">
              Every decision starts with what's best for the user. No corporate
              greed, no price gouging, no hidden agendas.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center transition hover:border-ocean/30">
            <Shield className="mx-auto h-10 w-10 text-ocean-bright" />
            <h3 className="mt-4 text-xl font-bold text-ink">Privacy by Design</h3>
            <p className="mt-2 text-ink-soft">
              Your data is yours. We don't sell it, we don't mine it, we don't use
              it to serve ads. Period.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center transition hover:border-sunset/30">
            <Zap className="mx-auto h-10 w-10 text-sunset" />
            <h3 className="mt-4 text-xl font-bold text-ink">Built Fast</h3>
            <p className="mt-2 text-ink-soft">
              Lean team, modern stack, rapid iteration. We ship quickly and listen
              to feedback. No bureaucracy, no legacy bloat.
            </p>
          </div>
        </div>

        {/* Founders */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-ink">The Team</h3>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ocean/15 text-xl font-bold text-ocean-bright">
                  BC
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ink">Brandon Currie</h4>
                  <p className="text-sm text-ink-soft">Co-Founder & CEO</p>
                </div>
              </div>
              <p className="mt-4 text-ink-soft">
                Technical founder and primary builder. Self-taught full-stack
                developer with experience across frontend, backend, infrastructure,
                and realtime systems. Designed and built both Flistr and Wav from
                the ground up.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-coral/15 text-xl font-bold text-coral">
                  JS
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ink">Jonathan Snyder</h4>
                  <p className="text-sm text-ink-soft">Co-Founder & COO</p>
                </div>
              </div>
              <p className="mt-4 text-ink-soft">
                Operational and user experience lead. Background in business sales
                and customer behavior. Shapes product accessibility, onboarding
                flows, and real-world usability to ensure products work for actual
                people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 wave-gradient" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center text-white">
          <h2 className="text-4xl font-bold tracking-tight">
            Ready to ride the wave?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Join the private beta and be among the first to experience Wav.
          </p>
          <a
            href="#beta"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-ocean-deep shadow-lg transition hover:bg-sand-light"
          >
            Join the Beta
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-border bg-foam py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-lg font-bold text-ocean-bright">
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
              <a href="#wav" className="transition hover:text-ocean-bright">Wav</a>
              <a href="#flistr" className="transition hover:text-ocean-bright">Flistr</a>
              <a href="#about" className="transition hover:text-ocean-bright">About</a>
              <a href="#beta" className="transition hover:text-ocean-bright">Beta</a>
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
