import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://wavlabs.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "l8r — meet someone, l8r",
    template: "%s | Wav Labs",
  },
  description:
    "l8r is a new kind of social discovery — real people, real nearby. No feeds, no noise, no data selling. Early access for iOS and Android.",
  keywords: [
    "social discovery",
    "dating app",
    "meet people nearby",
    "local dating",
    "gay dating app",
    "real people nearby",
    "private dating",
    "l8r",
    "wavlabs",
    "wav labs",
    "iOS dating app",
    "Android dating app",
  ],
  authors: [{ name: "Wav Labs", url: SITE_URL }],
  creator: "Wav Labs",
  publisher: "Wav Labs",
  applicationName: "l8r",
  category: "Social",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "l8r",
    title: "l8r — meet someone, l8r",
    description:
      "Real people. Real nearby. A new social discovery app — still early, still growing. iOS & Android.",
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
    creator: "@wavlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "l8r",
              applicationCategory: "SocialApplication",
              operatingSystem: "iOS, Android",
              description:
                "A new kind of social discovery — real people, real nearby. No feeds, no noise, no data selling.",
              url: `${SITE_URL}/l8r`,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              publisher: {
                "@type": "Organization",
                name: "Wav Labs",
                url: SITE_URL,
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Wav Labs",
              url: SITE_URL,
              description:
                "Wav Labs builds consumer social products that put people first. No ads. No data selling.",
              founders: [
                { "@type": "Person", name: "Brandon Currie", jobTitle: "Co-Founder & CEO" },
                { "@type": "Person", name: "Jonathan Snyder", jobTitle: "Co-Founder & COO" },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#170910] text-[#FFF4F7]">
        {children}
      </body>
    </html>
  );
}
