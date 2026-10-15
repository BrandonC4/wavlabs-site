import WaitlistForm from "./components/WaitlistForm";
import Image from "next/image";
import {
  MapPin,
  Users,
  Shield,
  Zap,
  Smartphone,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ─── Nav ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#43203A]/60 bg-[#170910]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 text-xl font-bold text-[#D8A88E]">
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
            <a href="#about" className="transition hover:text-[#D8A88E]">About</a>
            <a href="/support" className="transition hover:text-[#D8A88E]">Support</a>
            <a
              href="#beta"
              className="rounded-full bg-[#D63242] px-4 py-2 font-semibold text-white transition hover:bg-[#B82836]"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#170910] pt-20">
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
            We&apos;re still early and still growing — and every profile you&apos;ll
            ever see is a real person.
          </p>
          <div className="fade-up-delay-2 mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#beta"
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#43203A] bg-[#240D19] px-4 py-1.5 text-sm font-medium text-[#D8A88E]">
              <Heart className="h-4 w-4" />
              l8r
            </div>
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
      <section id="beta" className="scroll-mt-24 bg-[#170910] py-32">
        <div className="mx-auto max-w-lg px-6">
          <div className="mb-8 text-center">
            <h3 className="text-4xl font-bold text-[#FFF4F7]">Be early.</h3>
            <p className="mt-3 text-[#BCA5AF]">
              l8r is rolling out city by city. Join the list and we&apos;ll let you
              know when it lights up near you.
            </p>
          </div>
          <div className="rounded-2xl border border-[#43203A] bg-[#240D19] p-2">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ─── Flistr Section ──────────────────────────────────── */}
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
      <section id="about" className="bg-[#170910] py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#43203A] bg-[#240D19] px-4 py-1.5 text-sm font-medium text-[#D8A88E]">
              <Heart className="h-4 w-4" />
              Our Mission
            </div>
            <h2 className="text-5xl font-bold tracking-tight text-[#FFF4F7]">
              Built by people who care, for people who deserve better.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#BCA5AF]">
              Wav Labs builds consumer social products with a simple philosophy:
              users first. No ads, no data selling, no engagement tricks. Just
              authentic, accessible tools for real human connection.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-[#43203A] bg-[#240D19] p-8 text-center transition hover:border-[#D8A88E]/40">
              <Heart className="mx-auto h-10 w-10 text-[#D63242]" />
              <h3 className="mt-4 text-xl font-bold text-[#FFF4F7]">User-First</h3>
              <p className="mt-2 text-[#BCA5AF]">
                Every decision starts with what&apos;s best for the user. No
                corporate greed, no price gouging, no hidden agendas.
              </p>
            </div>
            <div className="rounded-2xl border border-[#43203A] bg-[#240D19] p-8 text-center transition hover:border-[#D8A88E]/40">
              <Shield className="mx-auto h-10 w-10 text-[#D8A88E]" />
              <h3 className="mt-4 text-xl font-bold text-[#FFF4F7]">Privacy by Design</h3>
              <p className="mt-2 text-[#BCA5AF]">
                Your data is yours. We don&apos;t sell it, we don&apos;t mine it,
                we don&apos;t use it to serve ads. Period.
              </p>
            </div>
            <div className="rounded-2xl border border-[#43203A] bg-[#240D19] p-8 text-center transition hover:border-[#D8A88E]/40">
              <Zap className="mx-auto h-10 w-10 text-[#D8A88E]" />
              <h3 className="mt-4 text-xl font-bold text-[#FFF4F7]">Built Fast</h3>
              <p className="mt-2 text-[#BCA5AF]">
                Lean team, modern stack, rapid iteration. We ship quickly and
                listen to feedback. No bureaucracy, no legacy bloat.
              </p>
            </div>
          </div>

          {/* Founders */}
          <div className="mt-20">
            <h3 className="text-center text-2xl font-bold text-[#FFF4F7]">The Team</h3>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-[#43203A] bg-[#240D19] p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D63242]/15 text-xl font-bold text-[#D8A88E]">
                    BC
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#FFF4F7]">Brandon Currie</h4>
                    <p className="text-sm text-[#BCA5AF]">Co-Founder & CEO</p>
                  </div>
                </div>
                <p className="mt-4 text-[#BCA5AF]">
                  Technical founder and primary builder. Self-taught full-stack
                  developer with experience across frontend, backend,
                  infrastructure, and realtime systems. Designed and built both
                  Flistr and l8r from the ground up.
                </p>
              </div>
              <div className="rounded-2xl border border-[#43203A] bg-[#240D19] p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D8A88E]/15 text-xl font-bold text-[#D8A88E]">
                    JS
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#FFF4F7]">Jonathan Snyder</h4>
                    <p className="text-sm text-[#BCA5AF]">Co-Founder & COO</p>
                  </div>
                </div>
                <p className="mt-4 text-[#BCA5AF]">
                  Operational and user experience lead. Background in business
                  sales and customer behavior. Shapes product accessibility,
                  onboarding flows, and real-world usability to ensure products
                  work for actual people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#100508] py-32">
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D63242]/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight text-[#FFF4F7]">
            See you l8r.
          </h2>
          <p className="mt-4 text-xl text-[#BCA5AF]">
            Join the waitlist and be there when the lantern lights up.
          </p>
          <a
            href="#beta"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#D63242] px-10 py-4 text-lg font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-[#B82836]"
          >
            Join the Waitlist
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-[#43203A] bg-[#170910] py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-lg font-bold text-[#D8A88E]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/l8r-lantern.png"
                alt="l8r"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              l8r
            </div>
            <div className="flex gap-6 text-sm text-[#BCA5AF]">
              <a href="/l8r" className="transition hover:text-[#D8A88E]">l8r</a>
              <a href="#flistr" className="transition hover:text-[#D8A88E]">Flistr</a>
              <a href="#about" className="transition hover:text-[#D8A88E]">About</a>
              <a href="/support" className="transition hover:text-[#D8A88E]">Support</a>
              <a href="/privacy" className="transition hover:text-[#D8A88E]">Privacy</a>
              <a href="/terms" className="transition hover:text-[#D8A88E]">Terms</a>
            </div>
          </div>
          <div className="mt-8 border-t border-[#43203A] pt-8 text-center text-sm text-[#7A5F6B]">
            <p>&copy; 2026 Wav Labs. All rights reserved.</p>
            <p className="mt-2">Built with care in Las Vegas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
