import { LifeBuoy, Mail, Bug, MessageCircle, BookOpen } from "lucide-react";

export const metadata = {
  title: "Support — l8r by Wav Labs",
  description:
    "Get help with l8r. Contact us, report bugs, and find answers to common questions.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-12 flex items-center gap-3">
          <LifeBuoy className="h-8 w-8 text-ocean-bright" />
          <h1 className="text-3xl font-bold">Support</h1>
        </div>

        <p className="mb-12 leading-relaxed text-ink-soft">
          Need help with l8r? We&apos;re a small team but we read every message.
          Here&apos;s how to reach us and what to expect.
        </p>

        {/* Contact options */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2">
          <a
            href="mailto:support@wavlabs.dev"
            className="group rounded-2xl border border-ocean/10 bg-white/50 p-6 transition hover:border-ocean/30 hover:shadow-lg"
          >
            <Mail className="mb-4 h-7 w-7 text-ocean-bright" />
            <h2 className="mb-1 text-lg font-semibold">Email Us</h2>
            <p className="text-sm text-ink-soft">support@wavlabs.dev</p>
            <p className="mt-2 text-xs text-ink-soft/70">Response within 48 hours</p>
          </a>

          <a
            href="mailto:bugs@wavlabs.dev"
            className="group rounded-2xl border border-ocean/10 bg-white/50 p-6 transition hover:border-ocean/30 hover:shadow-lg"
          >
            <Bug className="mb-4 h-7 w-7 text-ocean-bright" />
            <h2 className="mb-1 text-lg font-semibold">Report a Bug</h2>
            <p className="text-sm text-ink-soft">bugs@wavlabs.dev</p>
            <p className="mt-2 text-xs text-ink-soft/70">Include steps to reproduce</p>
          </a>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-ocean-bright" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                Is l8r really 18+ only?
              </h3>
              <p className="leading-relaxed text-ink-soft">
                Yes, strictly. l8r is a members-only app for adult gay men. Age is
                verified at signup and we remove any account that belongs to a minor.
                See our{" "}
                <a href="/child-safety" className="text-ocean-bright underline">
                  Child Safety Standards
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                How does discovery work?
              </h3>
              <p className="leading-relaxed text-ink-soft">
                The grid shows members near you, sorted by distance. Free members get a
                generous daily allowance of profile views; premium members get
                unlimited browsing plus advanced filters.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                Can I hide my location or browse privately?
              </h3>
              <p className="leading-relaxed text-ink-soft">
                You can hide your distance in Settings, and premium members can browse
                incognito — invisible in grids and view counts until they choose to be
                seen. We never show your exact position to anyone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                What are sparks and views?
              </h3>
              <p className="leading-relaxed text-ink-soft">
                A spark is a lightweight &ldquo;I&apos;m interested&rdquo; — no message
                required. Views let you see who checked out your profile. Both live
                under the Interests tab, and each can be turned off in Settings &rarr;
                Notifications.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                Can I keep notifications private on my lock screen?
              </h3>
              <p className="leading-relaxed text-ink-soft">
                Yes — turn on Discreet notifications in Settings &rarr; Notifications
                and every banner becomes generic: &ldquo;You have a new message&rdquo;
                instead of names or previews. You can also blur the app in the
                multitasking switcher and change the app icon.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                How do I block or report someone?
              </h3>
              <p className="leading-relaxed text-ink-soft">
                From any profile or conversation — blocking is instant and total, and
                reports go straight to human review. See our{" "}
                <a href="/guidelines" className="text-ocean-bright underline">
                  Community Guidelines
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                How do I delete my account?
              </h3>
              <p className="leading-relaxed text-ink-soft">
                You tab &rarr; scroll to the bottom &rarr; Delete account. It&apos;s
                permanent — profile, photos, messages, and all associated data are
                removed. Full details on our{" "}
                <a href="/delete-account" className="text-ocean-bright underline">
                  account deletion page
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                What devices does l8r support?
              </h3>
              <p className="leading-relaxed text-ink-soft">
                l8r is available on iPhone and Android.
              </p>
            </div>
          </div>
        </div>

        {/* Still need help */}
        <div className="rounded-2xl border border-ocean/10 bg-foam p-8 text-center">
          <MessageCircle className="mx-auto mb-4 h-8 w-8 text-ocean-bright" />
          <h2 className="mb-2 text-xl font-bold">Still need help?</h2>
          <p className="mb-4 text-ink-soft">
            We&apos;re here for you. Drop us a line and we&apos;ll get back to you as
            soon as we can.
          </p>
          <a
            href="mailto:support@wavlabs.dev"
            className="inline-block rounded-full bg-ocean px-6 py-3 font-medium text-white transition hover:bg-ocean-bright"
          >
            Contact Support
          </a>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <a href="/" className="flex items-center gap-2 text-ocean-bright hover:underline">
            <img src="/wavlabs-logo.png" alt="" className="h-4 w-4" />
            Wav Labs
          </a>
        </div>
      </div>
    </div>
  );
}
