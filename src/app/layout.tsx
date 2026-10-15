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
    default: "Wav Labs — consumer social products",
    template: "%s | Wav Labs",
  },
  description:
    "Wav Labs builds consumer social products — l8r and Flistr — with a simple philosophy: users first. No ads, no data selling, no engagement tricks.",
  keywords: [
    "wav labs",
    "wavlabs",
    "l8r",
    "flistr",
    "social discovery",
    "consumer social",
    "dating app",
    "meet people nearby",
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
    siteName: "Wav Labs",
    title: "Wav Labs — consumer social products",
    description:
      "Consumer social products that put people first — l8r and Flistr. No ads, no data selling, no engagement tricks.",
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
    title: "Wav Labs — consumer social products",
    description:
      "Consumer social products that put people first — l8r and Flistr.",
    images: ["/wavlabs-logo.png"],
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
