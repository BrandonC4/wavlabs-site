import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service — l8r by Wav Labs",
  description:
    "The terms governing use of l8r, a members-only social discovery app for gay men by Wav Labs.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-12 flex items-center gap-3">
          <FileText className="h-8 w-8 text-ocean-bright" />
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>

        <p className="mb-2 text-sm text-ink-soft">l8r — by Wav Labs</p>
        <p className="mb-8 text-sm text-ink-soft">Last updated: October 15, 2026</p>

        <div className="space-y-8 leading-relaxed text-ink-soft">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">1. Acceptance</h2>
            <p>
              By downloading, installing, or using l8r (&ldquo;the App&rdquo;), you agree
              to these Terms of Service (&ldquo;Terms&rdquo;), our{" "}
              <a href="/privacy" className="text-ocean-bright hover:underline">Privacy Policy</a>,
              and our{" "}
              <a href="/guidelines" className="text-ocean-bright hover:underline">Community Guidelines</a>.
              If you don&apos;t agree, don&apos;t use the App. These Terms are a legal
              agreement between you and Wav Labs (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">2. You Must Be 18 or Older</h2>
            <p>
              l8r is strictly for adults. You confirm you are at least 18 years old and
              legally able to enter this agreement. There are no exceptions. We remove
              accounts we believe belong to minors and report them where required by
              law. See our{" "}
              <a href="/child-safety" className="text-ocean-bright hover:underline">Child Safety Standards</a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">3. Your Account</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Keep your sign-in credentials private — you&apos;re responsible for everything under your account.</li>
              <li>One person, one account. No shared, sold, or farmed accounts.</li>
              <li>Provide honest profile information. No impersonation, no bait accounts.</li>
              <li>Tell us immediately if your account is compromised.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">4. Your Content</h2>
            <p className="mb-3">
              You own the photos, videos, audio, and text you post. You grant us a
              limited, non-exclusive license to store, process, and display that content
              to other members as needed to run the service. That license ends when you
              delete the content or your account.
            </p>
            <p className="mb-3">You may not post:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Content you don&apos;t have the right to share.</li>
              <li>Content of other people without their consent.</li>
              <li>Anything illegal, or content that violates our Community Guidelines.</li>
              <li>Child sexual abuse material — removed instantly and reported to NCMEC.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">5. Location</h2>
            <p>
              Discovery works by distance. You control whether your distance is visible
              in Settings. We only ever show approximate distance — never your exact
              position. Premium members can use virtual location (passport) to appear
              elsewhere; abuse of location features to deceive or harass is a violation.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">6. Conduct</h2>
            <p className="mb-3">
              The Community Guidelines are part of these Terms. In short: consent is the
              baseline, no hate, no minors, no marketplace. We use member reports and
              human review to enforce the rules and may remove content or accounts —
              with or without warning — that break them.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">7. Subscriptions</h2>
            <p>
              Premium features are sold as auto-renewing subscriptions through the App
              Store or Google Play. Billing, renewal, cancellation, and refunds are
              handled by the store under its own terms — we never see your payment
              details. If a subscription lapses, premium features turn off; nothing else
              about your account changes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">8. Safety Disclaimer</h2>
            <p>
              l8r facilitates introductions between adults. We cannot verify everything
              members say, and we are not responsible for member conduct on or off the
              app. Exercise ordinary caution: meet in public, tell a friend, and trust
              your instincts. Our Community Guidelines cover the basics.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">9. Ending Your Account</h2>
            <p>
              Delete your account any time in Settings. Deletion is permanent: your
              profile, photos, activity, and conversation participation are removed, and
              messages you sent are anonymized. We can suspend or terminate accounts
              that violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">10. The Service As-Is</h2>
            <p>
              l8r is provided &ldquo;as is&rdquo; without warranties of any kind, express
              or implied. We don&apos;t guarantee the service will be uninterrupted,
              error-free, or that you&apos;ll meet anyone.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">11. Liability</h2>
            <p>
              To the maximum extent the law allows, Wav Labs is not liable for indirect,
              incidental, or consequential damages arising from your use of the App —
              including interactions with other members, on or off the platform.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">12. Changes to These Terms</h2>
            <p>
              We may update these Terms as the product evolves. Material changes are
              announced in the app before they take effect; the date above reflects the
              current version. Continued use after changes take effect means you accept
              them.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">13. Contact</h2>
            <p>
              Questions about these Terms:{" "}
              <a href="mailto:support@wavlabs.dev" className="text-ocean-bright hover:underline">
                support@wavlabs.dev
              </a>
              .
            </p>
          </section>
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
