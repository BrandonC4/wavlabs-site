import type { Metadata } from "next";

const SITE_URL = "https://wavlabs.dev";

export const metadata: Metadata = {
  title: "l8r — meet someone, l8r",
  description:
    "A new kind of social discovery. Real people, real nearby — no feeds, no noise. Still early, still growing. iOS & Android.",
  openGraph: {
    title: "l8r — meet someone, l8r",
    description:
      "Real people. Real nearby. A new social discovery app — still early, still growing.",
    url: `${SITE_URL}/l8r`,
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
    <div className="min-h-screen bg-[#170910] text-[#FFF4F7]">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
        {/* lantern */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/l8r-lantern.png"
          alt="The l8r lantern"
          className="h-40 w-40 drop-shadow-[0_0_60px_rgba(214,50,66,0.45)]"
        />

        <h1 className="mt-10 font-serif text-6xl tracking-tight">l8r</h1>
        <p className="mt-4 font-serif text-2xl text-[#D8A88E]">
          meet someone, l8r
        </p>

        <p className="mt-8 max-w-md leading-relaxed text-[#BCA5AF]">
          A new kind of social discovery — real people, real nearby.
          No feeds, no noise. We&apos;re still early and still growing,
          and every profile you&apos;ll ever see is a real person.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <span className="rounded-full border border-[#43203A] bg-[#240D19] px-6 py-3 text-sm text-[#BCA5AF]">
            iOS — coming soon
          </span>
          <span className="rounded-full border border-[#43203A] bg-[#240D19] px-6 py-3 text-sm text-[#BCA5AF]">
            Android — coming soon
          </span>
        </div>

        <div className="mt-16 border-t border-[#43203A] pt-8">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-[#7A5F6B] transition-colors hover:text-[#D8A88E]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wavlabs-logo.png" alt="" className="h-4 w-4" />
            Wav Labs
          </a>
        </div>
      </div>
    </div>
  );
}
