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

export const metadata: Metadata = {
  title: "Wav Labs",
  description:
    "Wav is a username-first social messenger. Find people by username, start conversations, and ride the wave. Join the private beta.",
  keywords: ["messaging", "chat", "social", "username", "beta", "wav", "wavlabs"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Wav — Username-first messaging",
    description: "Find people by username, start conversations, and ride the wave. Join the private beta.",
    type: "website",
    url: "https://wavlabs.dev",
  },
  metadataBase: new URL("https://wavlabs.dev"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand text-ink">
        {children}
      </body>
    </html>
  );
}
