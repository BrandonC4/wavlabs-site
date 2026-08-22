import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service — Wav Labs",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-12 flex items-center gap-3">
          <FileText className="h-8 w-8 text-ocean-bright" />
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>

        <p className="mb-8 text-sm text-ink-soft">Last updated: August 22, 2026</p>

        <div className="space-y-8 text-ink-soft leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Wav Messenger (&ldquo;Wav&rdquo;,
              &ldquo;the App&rdquo;), you agree to be bound by these Terms of Service
              (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the App.
              These Terms are a legal agreement between you and Wav Labs
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use Wav. If you are between 13 and 18,
              you represent that your parent or legal guardian has reviewed and agreed to
              these Terms on your behalf. Users under 13 are not permitted and will be
              removed from the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">3. Your Account</h2>
            <p className="mb-3">
              To use Wav, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and truthful information when registering.</li>
              <li>Choose a username that is not offensive, misleading, or impersonating another person.</li>
              <li>Keep your account credentials secure and confidential.</li>
              <li>Notify us immediately if you believe your account has been compromised.</li>
              <li>Be responsible for all activity that occurs under your account.</li>
            </ul>
            <p className="mt-3">
              You may delete your account at any time from within the App&apos;s settings.
              Account deletion is permanent and will remove your profile, messages, and
              associated data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">4. Acceptable Use</h2>
            <p className="mb-3">You agree not to use Wav to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Harass, bully, threaten, or intimidate any person.</li>
              <li>Send spam, unsolicited messages, or promotional content without consent.</li>
              <li>Share content that is illegal, harmful, defamatory, or infringes on intellectual property rights.</li>
              <li>Distribute malware, viruses, or any other malicious code.</li>
              <li>Impersonate another person or misrepresent your identity.</li>
              <li>Use the service for any unlawful or fraudulent purpose.</li>
              <li>Attempt to gain unauthorized access to our systems, accounts, or data.</li>
              <li>Reverse engineer, decompile, or disassemble the App.</li>
              <li>Use automated scripts, bots, or scrapers to access the service.</li>
              <li>Interfere with or disrupt the service or servers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">5. Content</h2>
            <p className="mb-3">
              You retain ownership of all content you create and share through Wav,
              including text messages, images, and audio recordings. By sharing content
              through the service, you grant us a limited license to transmit, store, and
              display that content solely for the purpose of operating the service.
            </p>
            <p className="mb-3">
              You are solely responsible for the content you share. We do not pre-screen
              content, but we reserve the right to remove any content that violates these
              Terms or is otherwise objectionable.
            </p>
            <p>
              Messages are stored on our servers to deliver them to recipients and to
              allow you to access your conversation history. When you delete your account,
              your messages and content are permanently deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">6. Privacy</h2>
            <p>
              Your use of Wav is also governed by our{" "}
              <a href="/privacy" className="text-ocean-bright hover:underline">
                Privacy Policy
              </a>
              , which describes how we collect, use, and protect your information. Please
              review it carefully.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">7. No Advertisements</h2>
            <p>
              Wav does not display advertisements. We do not sell your data to
              advertisers or third parties. We are committed to a user-first experience
              free from ad-driven engagement manipulation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">8. Service Availability</h2>
            <p>
              We strive to maintain reliable service but do not guarantee uninterrupted
              access. The service may be temporarily unavailable due to maintenance,
              updates, or factors beyond our control. We may modify, suspend, or
              discontinue any feature of the service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">9. Disclaimers</h2>
            <p>
              The service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
              without warranties of any kind, whether express or implied. We do not
              warrant that the service will be error-free, secure, or available at all
              times. You use the service at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Wav Labs shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any
              loss of data, profits, or goodwill, arising from your use of or inability to
              use the service. Our total liability for any claim shall not exceed the
              amount you have paid us, if any, to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Wav Labs and its affiliates from
              any claims, damages, losses, or expenses (including legal fees) arising from
              your use of the service or your violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">12. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. If we make material changes, we
              will notify you through the App or by email. Your continued use of the
              service after changes take effect constitutes acceptance of the updated
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">13. Termination</h2>
            <p>
              We may suspend or terminate your account at any time if we believe you have
              violated these Terms or for any other reason at our discretion. You may stop
              using the service and delete your account at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws
              of the State of Nevada, without regard to its conflict of law provisions.
              Any disputes arising from these Terms or your use of the service shall be
              resolved in the courts located in Clark County, Nevada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">15. Contact</h2>
            <p>
              If you have questions about these Terms, you can contact us at{" "}
              <a href="mailto:support@wavlabs.dev" className="text-ocean-bright hover:underline">
                support@wavlabs.dev
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <a href="/" className="text-ocean-bright hover:underline">Back to home</a>
        </div>
      </div>
    </div>
  );
}
