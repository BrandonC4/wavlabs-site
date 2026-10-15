import { Trash2, Mail, Shield } from "lucide-react";

export const metadata = {
  title: "Delete Your Account — l8r by Wav Labs",
  description:
    "Request deletion of your l8r account and all associated data.",
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="mx-auto max-w-2xl px-6 py-24">
        <div className="mb-12 flex items-center gap-3">
          <Trash2 className="h-8 w-8 text-ocean-bright" />
          <h1 className="text-3xl font-bold">Delete Your Account</h1>
        </div>

        <p className="mb-8 text-sm text-ink-soft">l8r — by Wav Labs</p>

        <div className="space-y-8 leading-relaxed text-ink-soft">
          <p>
            You can delete your l8r account and all associated data at any time.
            There are two ways to do this:
          </p>

          {/* In-app */}
          <div className="rounded-2xl border border-ocean/10 bg-white/50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5 text-ocean-bright" />
              <h2 className="text-lg font-semibold text-ink">Option 1: In the App</h2>
            </div>
            <p className="text-sm">
              The fastest way to delete your account is directly in l8r:
            </p>
            <ol className="mt-3 space-y-2 text-sm">
              <li>1. Open l8r and go to the <strong className="text-ink">You</strong> tab</li>
              <li>2. Scroll to the bottom and tap <strong className="text-ink">Delete account</strong></li>
              <li>3. Read the confirmation and tap <strong className="text-ink">Delete</strong></li>
            </ol>
            <p className="mt-3 text-sm">
              This immediately and permanently removes your account, profile, photos,
              messages, and all associated data. This action cannot be undone.
            </p>
          </div>

          {/* Email request */}
          <div className="rounded-2xl border border-ocean/10 bg-white/50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <Mail className="h-5 w-5 text-ocean-bright" />
              <h2 className="text-lg font-semibold text-ink">Option 2: By Email</h2>
            </div>
            <p className="text-sm">
              If you can no longer access the app, request account deletion by
              emailing us:
            </p>
            <a
              href="mailto:support@wavlabs.dev?subject=l8r%20Account%20Deletion%20Request"
              className="mt-3 inline-block rounded-full bg-ocean px-6 py-3 font-medium text-white transition hover:bg-ocean-bright"
            >
              support@wavlabs.dev
            </a>
            <p className="mt-3 text-sm">
              Include the email address associated with your account. We will process
              your request within 48 hours and confirm once your data has been
              permanently deleted.
            </p>
          </div>

          {/* What gets deleted */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-ink">What Gets Deleted</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ocean-bright" />
                Your profile (display name, photos, bio, stats, interests)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ocean-bright" />
                Your conversations and presence in other members&apos; inboxes
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ocean-bright" />
                Your taps, views, blocks, and activity history
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ocean-bright" />
                Your location data and discovery presence
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ocean-bright" />
                Your authentication credentials and device tokens
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ocean-bright" />
                Any media you&apos;ve uploaded (photos, videos, audio)
              </li>
            </ul>
            <p className="mt-3 text-sm">
              Messages you sent to other members are anonymized — the conversation
              survives on their side, but your identity is removed from it.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-foam p-4 text-sm">
            <p>
              <strong className="text-ink">Note:</strong> Some data may remain in our
              backups for up to 60 days for security and fraud prevention purposes,
              after which it is permanently purged. This is in accordance with our{" "}
              <a href="/privacy" className="text-ocean-bright underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
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
