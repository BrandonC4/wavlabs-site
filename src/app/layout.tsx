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
    default: "Wav — Username-first messaging. No phone number. No ads.",
    template: "%s | Wav Labs",
  },
  description:
    "Wav is a username-first social messenger. Find people by @username, start conversations, create groups, and chat in realtime. No phone number, no ads, no data selling. Join the beta for iOS and Android.",
  keywords: [
    "messaging app",
    "chat app",
    "social messenger",
    "username messaging",
    "no phone number messaging",
    "private chat",
    "group chat",
    "realtime messaging",
    "beta app",
    "wav",
    "wavlabs",
    "wav messenger",
    "alternative to kik",
    "alternative to whatsapp",
    "anonymous messaging",
    "username chat",
  ],
  authors: [{ name: "Wav Labs", url: SITE_URL }],
  creator: "Wav Labs",
  publisher: "Wav Labs",
  applicationName: "Wav",
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
    title: "Wav — Username-first messaging. No phone number. No ads.",
    description:
      "Find people by @username, start conversations, and chat in realtime. No phone number, no ads, no data selling. Join the beta for iOS and Android.",
    images: [
      {
        url: "/screenshots/chats.jpeg",
        width: 1200,
        height: 630,
        alt: "Wav Messenger — chats list",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wav — Username-first messaging. No phone number. No ads.",
    description:
      "Find people by @username, start conversations, and chat in realtime. Join the beta for iOS and Android.",
    images: ["/screenshots/chats.jpeg"],
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
              name: "Wav Messenger",
              applicationCategory: "SocialApplication",
              operatingSystem: "iOS, Android",
              description:
                "Username-first social messenger. Find people by @username, start conversations, and chat in realtime. No phone number, no ads, no data selling.",
              url: SITE_URL,
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
                "Wav Labs builds username-first social products that put people first. No ads. No data selling.",
              founders: [
                { "@type": "Person", name: "Brandon Currie", jobTitle: "Co-Founder & CEO" },
                { "@type": "Person", name: "Jonathan Snyder", jobTitle: "Co-Founder & COO" },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-sand text-ink">
        {children}
      </body>
    </html>
  );
}
