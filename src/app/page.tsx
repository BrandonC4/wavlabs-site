import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Shield, Zap, ArrowRight } from "lucide-react";

const L8R_URL = "https://l8r.wavlabs.dev";

export const metadata: Metadata = {
  title: "Wav Labs — consumer social products that put people first",
  description:
    "Wav Labs builds consumer social products — l8r and Flistr — with a simple philosophy: users first. No ads, no data selling, no engagement tricks.",
  openGraph: {
    title: "Wav Labs",
    description:
      "Consumer social products that put people first. No ads. No data selling.",
    siteName: "Wav Labs",
    images: [
      {
        url: "/wavlabs-logo.png",
        width: 512,
        height: 512,
        alt: "Wav Labs",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Wav Labs",
    description:
      "Consumer social products that put people first. No ads. No data selling.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ─── Nav ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#43203A]/60 bg-[#170910]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 text-xl font-bold text-[#D8A88E]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wavlabs-logo.png"
              alt="Wav Labs"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            Wav Labs
          </a>
          <div className="flex items-center gap-6 text-sm font-medium text-[#BCA5AF]">
            <a href="#products" className="transition hover:text-[#D8A88E]">Products</a>
            <a href="#about" className="transition hover:text-[#D8A88E]">About</a>
            <a href="/support" className="transition hover:text-[#D8A88E]">Support</a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#170910] pt-20">
        <div className="absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D63242]/12 blur-[140px]" />
        <div className="relative z-10 flex flex-col items-center px-6 py-24 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wavlabs-logo.png"
            alt="Wav Labs"
            className="fade-up h-20 w-20"
          />
          <h1 className="fade-up-delay-1 mt-8 max-w-4xl font-serif text-6xl tracking-tight text-[#FFF4F7] sm:text-7xl">
            Wav Labs
          </h1>
          <p className="fade-up-delay-1 mt-6 max-w-xl text-xl text-[#BCA5AF] sm:text-2xl">
            Consumer social products that put people first.
          </p>
          <p className="fade-up-delay-2 mt-3 max-w-xl text-base text-[#7A5F6B]">
            No ads. No data selling. No engagement tricks.
          </p>
        </div>
      </section>

      {/* ─── Products ────────────────────────────────────────── */}
      <section id="products" className="scroll-mt-24 bg-[#100508] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[#FFF4F7]">
            What we&apos;re building
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* l8r */}
            <a
              href={L8R_URL}
              className="group rounded-3xl border border-[#43203A] bg-[#240D19] p-10 transition hover:border-[#D8A88E]/40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/l8r-lantern.png"
                alt="l8r"
                className="h-16 w-16 drop-shadow-[0_0_30px_rgba(214,50,66,0.5)]"
              />
              <h3 className="mt-6 font-serif text-4xl font-bold text-[#FFF4F7]">l8r</h3>
              <p className="mt-2 font-medium text-[#D8A88E]">meet someone, l8r</p>
              <p className="mt-4 text-[#BCA5AF]">
                A new kind of social discovery — real people, real nearby. No
                feeds, no noise. Early access rolling out city by city on iOS
                and Android.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#D63242] transition group-hover:gap-3">
                Visit l8r.wavlabs.dev
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>

            {/* Flistr */}
            <a
              href="https://flistr.com"
              className="group rounded-3xl border border-[#27272A] bg-[#0F0F12] p-10 transition hover:border-[#A855F7]/40"
            >
              <Image
                src="/flistr-logo.png"
                alt="Flistr"
                width={64}
                height={64}
                className="h-16 w-16 rounded-xl"
              />
              <h3 className="mt-6 text-4xl font-bold tracking-tight text-[#E1E1E3]">
                Flistr
              </h3>
              <p className="mt-2 font-medium text-[#C084FC]">
                Map-first social discovery
              </p>
              <p className="mt-4 text-[#93939E]">
                See real people in real places with authentic, presence-based
                connection. Building city-by-city density with a user-first
                philosophy.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#A855F7] transition group-hover:gap-3">
                Visit flistr.com
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── About ───────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-24 bg-[#170910] py-32">
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

      {/* ─── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-[#43203A] bg-[#170910] py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-lg font-bold text-[#D8A88E]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/wavlabs-logo.png"
                alt="Wav Labs"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              Wav Labs
            </div>
            <div className="flex gap-6 text-sm text-[#BCA5AF]">
              <a href={L8R_URL} className="transition hover:text-[#D8A88E]">l8r</a>
              <a href="https://flistr.com" className="transition hover:text-[#D8A88E]">Flistr</a>
              <a href="#about" className="transition hover:text-[#D8A88E]">About</a>
              <a href="/support" className="transition hover:text-[#D8A88E]">Support</a>
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
