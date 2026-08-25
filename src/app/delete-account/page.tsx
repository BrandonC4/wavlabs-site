import { Trash2, Mail, Shield } from "lucide-react";

export const metadata = {
  title: "Delete Your Account — Wav Labs",
  description: "Request deletion of your Wav Messenger account and all associated data.",
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="mx-auto max-w-2xl px-6 py-24">
        <div className="mb-12 flex items-center gap-3">
          <Trash2 className="h-8 w-8 text-ocean-bright" />
          <h1 className="text-3xl font-bold">Delete Your Account</h1>
        </div>

        <div className="space-y-8 leading-relaxed text-ink-soft">
          <p>
            You can delete your Wav Messenger account and all associated data at any time.
            There are two ways to do this:
          </p>

          {/* In-app */}
          <div className="rounded-2xl border border-ocean/10 bg-white/50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5 text-ocean-bright" />
              <h2 className="text-lg font-semibold text-ink">Option 1: In the App</h2>
            </div>
            <p className="text-sm">
              The fastest way to delete your account is directly in the Wav app:
            </p>
            <ol className="mt-3 space-y-2 text-sm">
              <li>1. Open Wav and go to <strong className="text-ink">Settings</strong></li>
              <li>2. Scroll to the bottom and tap <strong className="text-ink">Delete account</strong></li>
              <li>3. Confirm by tapping <strong className="text-ink">Delete permanently</strong></li>
            </ol>
            <p className="mt-3 text-sm">
              This immediately and permanently removes your account, profile, messages,
              and all associated data. This action cannot be undone.
            </p>
          </div>

          {/* Email request */}
          <div className="rounded-2xl border border-ocean/10 bg-white/50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <Mail className="h-5 w-5 text-ocean-bright" />
              <h2 className="text-lg font-semibold text-ink">Option 2: By Email</h2>
            </div>
            <p className="text-sm">
              If you can no longer access the app, you can request account deletion by
              emailing us:
            </p>
            <a
              href="mailto:support@wavlabs.dev?subject=Account%20Deletion%20Request"
              className="mt-3 inline-block rounded-full bg-ocean px-6 py-3 text-white font-medium transition hover:bg-ocean-bright"
            >
              support@wavlabs.dev
            </a>
            <p className="mt-3 text-sm">
              Include your username or the email address associated with your account.
              We will process your request within 48 hours and confirm once your data
              has been permanently deleted.
            </p>
          </div>

          {/* What gets deleted */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-ink">What Gets Deleted</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ocean-bright" />
                Your profile (username, display name, bio, avatar)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ocean-bright" />
                All messages you&apos;ve sent in conversations and groups
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ocean-bright" />
                Your friendships and friend requests
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ocean-bright" />
                Group memberships and any groups you own
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ocean-bright" />
                Your authentication credentials
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ocean-bright" />
                Any media you&apos;ve uploaded (photos, videos)
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-foam p-4 text-sm">
            <p>
              <strong className="text-ink">Note:</strong> Some data may remain in our
              backups for up to 30 days for security and fraud prevention purposes, after
              which it is permanently purged. This is in accordance with our{" "}
              <a href="/privacy" className="text-ocean-bright underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
