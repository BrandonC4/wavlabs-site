import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Wav Labs",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-12 flex items-center gap-3">
          <ShieldCheck className="h-8 w-8 text-ocean-bright" />
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>

        <p className="mb-8 text-sm text-ink-soft">Last updated: August 22, 2026</p>

        <div className="space-y-8 text-ink-soft leading-relaxed">
          <section>
            <p className="mb-3">
              At Wav Labs, we believe privacy is a fundamental right, not a feature. This
              Privacy Policy describes what information we collect, how we use it, and the
              choices you have. We built Wav Messenger (&ldquo;Wav&rdquo;) with a
              privacy-first philosophy: no ads, no data selling, no engagement
              manipulation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">1. Information We Collect</h2>

            <h3 className="font-medium text-ink mb-2">Information you provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Account information:</strong> Your email address and username.
                We use your email for authentication and account recovery. Your username
                is your public identity on Wav and is visible to other users.
              </li>
              <li>
                <strong>Profile information:</strong> Display name and avatar image if you
                choose to set them.
              </li>
              <li>
                <strong>Messages:</strong> Text messages, images, and audio recordings
                you send through the service. These are stored to deliver them to
                recipients and to provide conversation history.
              </li>
              <li>
                <strong>Friend requests:</strong> Records of friend requests you send and
                receive.
              </li>
            </ul>

            <h3 className="font-medium text-ink mb-2">Information collected automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Device tokens:</strong> A unique identifier for your device used
                to deliver push notifications. This token is associated with your account
                and is removed when you sign out or delete your account.
              </li>
              <li>
                <strong>Usage data:</strong> Basic analytics about how you use the App,
                such as session duration and feature usage. We use this to improve the
                product, not to profile you for advertising.
              </li>
              <li>
                <strong>Read receipts:</strong> Timestamps indicating when you have read
                messages, shared with other participants in a conversation.
              </li>
            </ul>

            <h3 className="font-medium text-ink mb-2">Information we do NOT collect</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not require or store your phone number.</li>
              <li>We do not track your location.</li>
              <li>We do not access your contacts or address book.</li>
              <li>We do not scan or read your messages for advertising purposes.</li>
              <li>We do not sell or share your data with advertisers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To create and manage your account and authenticate your identity.</li>
              <li>To deliver messages to your intended recipients in realtime.</li>
              <li>To send push notifications when you receive messages while the App is not open.</li>
              <li>To display your profile and username to other users you interact with.</li>
              <li>To show read receipts and typing indicators in conversations.</li>
              <li>To maintain conversation history so you can access past messages.</li>
              <li>To diagnose technical issues and improve the service.</li>
              <li>To prevent abuse, spam, and violations of our Terms of Service.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">3. How We Store and Protect Your Data</h2>
            <p className="mb-3">
              Your data is stored securely using industry-standard practices:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>
                <strong>Database:</strong> Messages, profiles, and account data are stored
                in a managed PostgreSQL database with row-level security policies that
                ensure users can only access data they are authorized to see.
              </li>
              <li>
                <strong>Realtime delivery:</strong> Messages are transmitted over an
                encrypted realtime channel. The realtime provider does not have access to
                your message content beyond what is needed to route messages.
              </li>
              <li>
                <strong>Push notifications:</strong> Push tokens are sent to Firebase
                Cloud Messaging to deliver notifications. Firebase processes these tokens
                to deliver notifications but does not use them for advertising.
              </li>
              <li>
                <strong>Encryption in transit:</strong> All communication between the App
                and our servers uses HTTPS/TLS encryption.
              </li>
              <li>
                <strong>Access controls:</strong> Internal access to production data is
                restricted and logged.
              </li>
            </ul>
            <p>
              No method of transmission or storage is 100% secure. While we strive to
              protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">4. Data Sharing</h2>
            <p className="mb-3">
              We do not sell your personal information. We do not share your data with
              advertisers. We share data only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service providers:</strong> We use third-party services to operate
                the App, including database hosting, realtime messaging, and push
                notification delivery. These providers have access to only the data
                necessary to perform their functions and are contractually bound to
                protect it.
              </li>
              <li>
                <strong>Other users:</strong> Your username, display name, avatar, and
                messages you send are visible to the recipients of those messages and to
                users you are connected with.
              </li>
              <li>
                <strong>Legal requirements:</strong> We may disclose information if
                required by law, court order, or government request, or if we believe in
                good faith that disclosure is necessary to protect our rights, users, or
                the public.
              </li>
              <li>
                <strong>Business transfers:</strong> If Wav Labs is acquired or merges
                with another company, your data may be transferred as part of that
                transaction. We would notify you before such a transfer.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">5. Your Privacy Choices</h2>
            <p className="mb-3">You have control over your information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Search visibility:</strong> You can control whether your username
                appears in search results from within the App&apos;s privacy settings.
              </li>
              <li>
                <strong>Push notifications:</strong> You can enable or disable
                notifications from your device&apos;s system settings.
              </li>
              <li>
                <strong>Account deletion:</strong> You can delete your account at any time
                from the App&apos;s settings. Deletion is permanent and removes your
                profile, messages, device tokens, and associated data from our servers.
              </li>
              <li>
                <strong>Sign out:</strong> Signing out removes your device token from our
                servers, stopping push notifications to that device.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">6. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active. When you delete
              your account, we permanently remove your profile, messages, friend
              connections, device tokens, and associated data from our servers within 30
              days. Some residual data may exist in backups for up to 60 days but is not
              accessible or restorable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">7. Children&apos;s Privacy</h2>
            <p>
              Wav is not directed to children under 13. We do not knowingly collect
              information from children under 13. If we learn that a child under 13 has
              registered, we will delete their account and information. If you believe a
              child has provided us with personal information, please contact us at{" "}
              <a href="mailto:support@wavlabs.dev" className="text-ocean-bright hover:underline">
                support@wavlabs.dev
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">8. International Users</h2>
            <p>
              Wav is operated from the United States. If you access the service from
              outside the United States, your information will be transferred to and
              processed in the United States. By using the service, you consent to this
              transfer. We comply with applicable data protection laws, including the EU
              General Data Protection Regulation (GDPR) and the California Consumer
              Privacy Act (CCPA) where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">9. Your Rights Under GDPR and CCPA</h2>
            <p className="mb-3">
              If you are located in the European Union or California, you have certain
              rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> You can request a copy of your personal data.</li>
              <li><strong>Deletion:</strong> You can request deletion of your personal data (also available in-app).</li>
              <li><strong>Correction:</strong> You can request correction of inaccurate data.</li>
              <li><strong>Portability:</strong> You can request your data in a machine-readable format.</li>
              <li><strong>Objection:</strong> You can object to certain processing of your data.</li>
              <li><strong>Withdrawal of consent:</strong> You can withdraw consent for data processing at any time by deleting your account.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a href="mailto:support@wavlabs.dev" className="text-ocean-bright hover:underline">
                support@wavlabs.dev
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">10. Third-Party Services</h2>
            <p className="mb-3">
              Wav uses the following third-party services to operate. Each has its own
              privacy policy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Supabase:</strong> Database hosting and authentication.</li>
              <li><strong>Ably:</strong> Realtime message delivery infrastructure.</li>
              <li><strong>Firebase Cloud Messaging:</strong> Push notification delivery.</li>
              <li><strong>Apple Sign In / Google Sign In:</strong> Authentication providers (we receive your email and a unique identifier, not your password).</li>
            </ul>
            <p className="mt-3">
              We do not use third-party analytics SDKs that profile users for advertising.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material
              changes, we will notify you through the App or by email. We will also update
              the &ldquo;Last updated&rdquo; date at the top of this page. Your continued
              use of the service after changes take effect constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">12. Contact</h2>
            <p>
              If you have questions about this Privacy Policy or your data, contact us at{" "}
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
