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
      <nav className="fixed top-0 z-50 w-full border-b border-ocean/10 bg-sand/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-ocean-glow">
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
            <a href="#wav" className="transition hover:text-ocean-glow">Wav</a>
            <a href="#flistr" className="transition hover:text-ocean-glow">Flistr</a>
            <a href="#about" className="transition hover:text-ocean-glow">About</a>
            <a
              href="/wav"
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
              href="/wav"
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

      {/* ─── Screenshots Carousel ────────────────────────────── */}
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
          <div className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-8 no-scrollbar md:justify-center">
            {[
              { src: "/screenshots/chats.jpeg", label: "Chats", delay: "0s" },
              { src: "/screenshots/conversations.jpeg", label: "Conversation", delay: "1s" },
              { src: "/screenshots/discover.jpeg", label: "Discover", delay: "2s" },
              { src: "/screenshots/friends.jpeg", label: "Friends", delay: "3s" },
              { src: "/screenshots/profile.jpeg", label: "Profile", delay: "4s" },
            ].map((shot) => (
              <div key={shot.label} className="flex shrink-0 snap-center flex-col items-center gap-4">
                <div
                  className="screenshot-card overflow-hidden rounded-[2.5rem] border-2 border-ocean/20 shadow-2xl glow-ocean"
                  style={{ animation: `float 6s ease-in-out ${shot.delay} infinite` }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.label}
                    width={280}
                    height={607}
                    className="h-auto w-[280px] object-cover"
                    priority={shot.label === "Chats"}
                  />
                </div>
                <span className="text-sm font-medium text-ocean-glow">{shot.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Wav App Section ─────────────────────────────────── */}
      <section id="wav" className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean/10 px-4 py-1.5 text-sm font-medium text-ocean-glow">
              <MessageCircle className="h-4 w-4" />
              Wav Messenger
            </div>
            <h2 className="text-5xl font-bold tracking-tight text-ink">
              Username-first messaging that feels like the beach.
            </h2>
            <p className="mt-6 text-lg text-ink-soft">
              Find people by username, not phone number. Start conversations with
              friends, create groups, and chat in realtime. Light beach and night
              beach themes for whatever vibe you're riding.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Users, title: "Your username is enough", desc: "Connect without giving someone your phone number." },
                { icon: Zap, title: "Messages that feel instant", desc: "No refreshing. No waiting. Just conversations that move." },
                { icon: Shield, title: "Privacy by default", desc: "No phone number required, ever. Your data stays yours." },
                { icon: Smartphone, title: "iOS & Android", desc: "Native apps for both platforms, built for speed." },
              ].map((f) => (
                <div key={f.title} className="glass rounded-xl p-5 transition hover:border-ocean/40">
                  <f.icon className="h-6 w-6 text-ocean-glow" />
                  <h3 className="mt-3 font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Beta waitlist form */}
          <div id="beta" className="scroll-mt-24">
            <div className="mb-6 text-center">
              <h3 className="text-3xl font-bold text-ink">Wav is now in beta.</h3>
              <p className="mt-2 text-ink-soft">Join the first wave of iOS and Android users.</p>
            </div>
            <div className="rounded-2xl border border-ocean/20 bg-surface-raised p-2 glow-ocean-strong">
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
      <section id="about" className="mx-auto max-w-6xl px-6 py-32">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean/10 px-4 py-1.5 text-sm font-medium text-ocean-glow">
            <Waves className="h-4 w-4" />
            Our Mission
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-ink">
            Built by people who care, for people who deserve better.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
            Wav Labs is building consumer social products with a simple philosophy:
            users first. No ads, no data selling, no engagement tricks. Just
            authentic, accessible tools for real human connection.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="glass rounded-2xl p-8 text-center transition hover:border-coral/40">
            <Heart className="mx-auto h-10 w-10 text-coral" />
            <h3 className="mt-4 text-xl font-bold text-ink">User-First</h3>
            <p className="mt-2 text-ink-soft">
              Every decision starts with what's best for the user. No corporate
              greed, no price gouging, no hidden agendas.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 text-center transition hover:border-ocean/40">
            <Shield className="mx-auto h-10 w-10 text-ocean-glow" />
            <h3 className="mt-4 text-xl font-bold text-ink">Privacy by Design</h3>
            <p className="mt-2 text-ink-soft">
              Your data is yours. We don't sell it, we don't mine it, we don't use
              it to serve ads. Period.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 text-center transition hover:border-sunset/40">
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
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ocean/15 text-xl font-bold text-ocean-glow">
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
            <div className="glass rounded-2xl p-8">
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
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 wave-gradient" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean/20 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center text-white">
          <h2 className="text-5xl font-bold tracking-tight">
            Ready to ride the wave?
          </h2>
          <p className="mt-4 text-xl text-white/90">
            Join the beta and be among the first to experience Wav.
          </p>
          <a
            href="/wav"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-bold text-ocean-deep shadow-2xl transition hover:scale-105 hover:bg-ocean-glow"
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
              <a href="#wav" className="transition hover:text-ocean-glow">Wav</a>
              <a href="/wav" className="transition hover:text-ocean-glow">Beta</a>
              <a href="#flistr" className="transition hover:text-ocean-glow">Flistr</a>
              <a href="#about" className="transition hover:text-ocean-glow">About</a>
              <a href="/support" className="transition hover:text-ocean-glow">Support</a>
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
