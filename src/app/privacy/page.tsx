import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — l8r by Wav Labs",
  description:
    "How l8r collects, uses, and protects your information. l8r is a members-only social discovery app for gay men.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-12 flex items-center gap-3">
          <ShieldCheck className="h-8 w-8 text-ocean-bright" />
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>

        <p className="mb-2 text-sm text-ink-soft">l8r — by Wav Labs</p>
        <p className="mb-8 text-sm text-ink-soft">Last updated: October 15, 2026</p>

        <div className="space-y-8 text-ink-soft leading-relaxed">
          <section>
            <p className="mb-3">
              l8r (&ldquo;the App&rdquo;) is a members-only social discovery app for gay
              men operated by Wav Labs (&ldquo;we&rdquo;, &ldquo;us&rdquo;). Privacy is not
              a feature here — it is a requirement of the product. This policy describes
              what we collect, why, and the controls you have over it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">1. Information We Collect</h2>

            <h3 className="mb-2 font-medium text-ink">Information you provide</h3>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Account information:</strong> Your email address and date of
                birth. Email is used for authentication and account recovery. Date of
                birth is used only to enforce the 18+ requirement and to display your
                age — it is never shared in raw form.
              </li>
              <li>
                <strong>Profile information:</strong> Display name, photos, bio,
                interests, body type, position, height, weight, ethnicity,
                relationship status, tribes, and what you&apos;re looking for — all
                optional beyond a display name and age.
              </li>
              <li>
                <strong>Location:</strong> Your approximate location when you grant
                permission, used to power distance-based discovery. Other members see a
                distance figure — never your exact position.
              </li>
              <li>
                <strong>Messages and media:</strong> Text, photos, videos, and audio
                you send through the service, stored to deliver them to recipients and
                provide conversation history.
              </li>
              <li>
                <strong>Interactions:</strong> Taps, profile views, blocks, reports,
                and conversations you participate in.
              </li>
            </ul>

            <h3 className="mb-2 font-medium text-ink">Information collected automatically</h3>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Device tokens:</strong> A push-notification token associated
                with your account, removed when you sign out or delete your account.
              </li>
              <li>
                <strong>Activity timestamps:</strong> When you were last active and
                when you last saw your activity feed — used to drive presence
                indicators and unread badges.
              </li>
              <li>
                <strong>Crash reports:</strong> Technical diagnostics if the app fails,
                used to fix bugs. No message content is included.
              </li>
            </ul>

            <h3 className="mb-2 font-medium text-ink">Information we do NOT collect</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>We do not require or store your phone number.</li>
              <li>We do not access your contacts or address book.</li>
              <li>We do not track your precise location or store a location history.</li>
              <li>We do not sell or share your data with advertisers.</li>
              <li>We do not scan your messages for advertising purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">2. How We Use Your Information</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>To show you nearby members and place you in their grids.</li>
              <li>To deliver your messages and media to the people you send them to.</li>
              <li>To send push notifications you&apos;ve opted into — messages, sparks,
                profile views, and nearby activity.</li>
              <li>To enforce our Community Guidelines and Terms of Service.</li>
              <li>To process subscriptions through the app stores.</li>
              <li>To prevent abuse, spam, and underage accounts.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">3. Location</h2>
            <p className="mb-3">
              Discovery on l8r works by distance. If you allow location access, we use
              your approximate location to sort the grid and compute distances. You can
              hide your distance from others in Settings, and premium members can browse
              incognito — invisible until they choose to be seen.
            </p>
            <p>
              We never show your exact position to other members and we do not retain a
              history of where you&apos;ve been.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">4. Your Media</h2>
            <p>
              Photos you upload are stripped of EXIF metadata — including GPS
              coordinates — before storage. Videos are re-encoded through a process that
              drops source metadata. Media lives on authenticated, access-controlled
              storage and is served only to members who can legitimately see it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">5. Messages</h2>
            <p className="mb-3">
              Messages are delivered over encrypted connections (TLS). They are stored
              so recipients can read them and so conversation history survives across
              your devices. Blocking someone cuts off contact entirely — they can no
              longer see or message you.
            </p>
            <p>
              Premium members can unsend messages, which removes them from both sides of
              the conversation, and can send expiring media that disappears after
              viewing.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">6. Discreet Mode</h2>
            <p>
              We built l8r knowing not everyone can be out on their lock screen.
              Discreet notifications replace names and message previews with generic
              text before the push leaves our servers — so PII never reaches your device.
              You can also disguise the app icon and blur the app in the multitasking
              switcher from Settings.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">7. Data Sharing</h2>
            <p className="mb-3">
              We do not sell your personal information. We share data only in these
              limited circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Service providers:</strong> Supabase (database and
                authentication), Ably (realtime delivery), Firebase Cloud Messaging
                (push notifications), and the app stores (subscription billing). Each
                receives only what it needs to do its job.
              </li>
              <li>
                <strong>Other members:</strong> The profile fields you choose to show,
                and the messages and media you send, are visible to the members you
                interact with — subject to your privacy settings.
              </li>
              <li>
                <strong>Legal requirements:</strong> If required by law or court order,
                or in good faith to protect the safety of our members — for example,
                credible reports of minors on the platform.
              </li>
              <li>
                <strong>Business transfers:</strong> If Wav Labs is acquired or merges,
                your data may transfer with the business. We would notify you first.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">8. Your Controls</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Visibility:</strong> Control age, position, tribes, distance,
                and online status display in Settings.
              </li>
              <li>
                <strong>Incognito:</strong> Premium members can browse without appearing
                in grids or view counts.
              </li>
              <li>
                <strong>Notifications:</strong> Per-category opt-outs plus full discreet
                masking in Settings &rarr; Notifications.
              </li>
              <li>
                <strong>Blocking:</strong> Instant, total, and reversible from your side.
              </li>
              <li>
                <strong>Deletion:</strong> Delete your account in Settings — permanent
                removal of your profile, photos, activity, and conversation
                participation. Sent messages are anonymized so threads survive for the
                other member.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">9. Data Retention</h2>
            <p>
              We keep your data while your account is active. Deletion removes your
              profile, photos, activity, and associations within 30 days; limited
              security logs may persist briefly for abuse prevention, and backups expire
              within 60 days.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">10. Children</h2>
            <p>
              l8r is strictly 18+. We do not knowingly collect information from minors,
              and any account found to belong to one is removed on sight and reported to
              the relevant authorities. See our{" "}
              <a href="/child-safety" className="text-ocean-bright hover:underline">
                Child Safety Standards
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">11. Your Rights</h2>
            <p className="mb-3">
              Depending on your jurisdiction — including under GDPR and CCPA — you may
              have the right to access, correct, port, or delete your personal data, and
              to object to or restrict certain processing. Most of these are built into
              the app itself; for anything else, contact us.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">12. International Users</h2>
            <p>
              l8r is operated from the United States. If you use the service from
              elsewhere, your data is transferred to and processed in the United States.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">13. Changes</h2>
            <p>
              If this policy changes materially, we&apos;ll say so in the app before it
              takes effect and update the date above. Continued use after changes take
              effect constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">14. Contact</h2>
            <p>
              Privacy questions or requests:{" "}
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
