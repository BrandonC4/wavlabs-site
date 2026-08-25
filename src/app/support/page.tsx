import { LifeBuoy, Mail, Bug, MessageCircle, BookOpen } from "lucide-react";

export const metadata = {
  title: "Support — Wav Labs",
  description: "Get help with Wav Messenger. Contact us, report bugs, and find answers to common questions.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-12 flex items-center gap-3">
          <LifeBuoy className="h-8 w-8 text-ocean-bright" />
          <h1 className="text-3xl font-bold">Support</h1>
        </div>

        <p className="mb-12 text-ink-soft leading-relaxed">
          Need help with Wav Messenger? We&apos;re a small team but we read every message.
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
                Do I need a phone number to sign up?
              </h3>
              <p className="text-ink-soft leading-relaxed">
                No. Wav is username-first — you pick a unique username and that&apos;s how
                people find you. No phone number required, ever.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                How do I find someone on Wav?
              </h3>
              <p className="text-ink-soft leading-relaxed">
                Go to the Discover tab and search by username. You can also browse groups
                by category. Once you find someone, send them a friend request or start a
                conversation directly.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                Are my messages private?
              </h3>
              <p className="text-ink-soft leading-relaxed">
                Yes. Your messages are stored securely and are only visible to you and the
                people in the conversation. We don&apos;t read your messages, sell your
                data, or show ads. See our{" "}
                <a href="/privacy" className="text-ocean-bright underline">
                  Privacy Policy
                </a>{" "}
                for details.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                Can I block someone?
              </h3>
              <p className="text-ink-soft leading-relaxed">
                Yes. Tap the person&apos;s name in a conversation to open their profile,
                then tap &ldquo;Block.&rdquo; You can manage blocked users in Settings.
                Blocked users can&apos;t send you messages or friend requests.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                How do I delete my account?
              </h3>
              <p className="text-ink-soft leading-relaxed">
                Go to Settings &rarr; Delete account. This permanently removes your
                account, messages, and profile. This action cannot be undone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                What devices does Wav support?
              </h3>
              <p className="text-ink-soft leading-relaxed">
                Wav Messenger is currently available on iPhone (iOS 16+). An Android
                version is in development.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                I forgot my password — how do I reset it?
              </h3>
              <p className="text-ink-soft leading-relaxed">
                On the sign-in screen, tap &ldquo;Forgot password&rdquo; and enter your
                email. We&apos;ll send you a link to set a new password. If you&apos;re
                already signed in, you can change your password in Settings.
              </p>
            </div>
          </div>
        </div>

        {/* Still need help */}
        <div className="rounded-2xl border border-ocean/10 bg-foam p-8 text-center">
          <MessageCircle className="mx-auto mb-4 h-8 w-8 text-ocean-bright" />
          <h2 className="mb-2 text-xl font-bold">Still need help?</h2>
          <p className="mb-4 text-ink-soft">
            We&apos;re here for you. Drop us a line and we&apos;ll get back to you as soon
            as we can.
          </p>
          <a
            href="mailto:support@wavlabs.dev"
            className="inline-block rounded-full bg-ocean px-6 py-3 text-white font-medium transition hover:bg-ocean-bright"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
