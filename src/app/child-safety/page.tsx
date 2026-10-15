import { Shield, AlertTriangle, Mail, Ban, Flag } from "lucide-react";

export const metadata = {
  title: "Child Safety Standards — l8r by Wav Labs",
  description:
    "l8r's safety standards against child sexual abuse and exploitation (CSAE). l8r is strictly 18+.",
};

export default function ChildSafetyPage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-12 flex items-center gap-3">
          <Shield className="h-8 w-8 text-ocean-bright" />
          <h1 className="text-3xl font-bold">Child Safety Standards</h1>
        </div>

        <p className="mb-2 text-sm text-ink-soft">l8r — by Wav Labs</p>
        <p className="mb-8 text-sm text-ink-soft">Last updated: October 15, 2026</p>

        <div className="space-y-8 leading-relaxed text-ink-soft">
          <section>
            <p>
              Wav Labs is committed to protecting children and has a zero-tolerance
              policy for child sexual abuse and exploitation (CSAE) across our
              products, including l8r. This page outlines our safety standards,
              prevention practices, and reporting procedures in compliance with
              applicable child safety laws.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">Minimum Age Requirement</h2>
            <p>
              l8r requires users to be at least 18 years old — strictly, with no
              exceptions. Age verification is enforced at signup through a
              date-of-birth requirement, and any account found or reasonably believed
              to belong to a minor is removed immediately.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">Prohibited Content</h2>
            <p className="mb-3">The following content is strictly prohibited on l8r:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Ban className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                Child sexual abuse material (CSAM) of any kind
              </li>
              <li className="flex items-start gap-2">
                <Ban className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                Sexualized content involving minors
              </li>
              <li className="flex items-start gap-2">
                <Ban className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                Grooming, exploitation, or solicitation of minors
              </li>
              <li className="flex items-start gap-2">
                <Ban className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                Any content that promotes or facilitates harm to children
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">In-App Reporting</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-ocean/10 bg-white/50 p-4">
                <Flag className="mt-0.5 h-5 w-5 shrink-0 text-ocean-bright" />
                <div>
                  <p className="font-medium text-ink">Report Profiles</p>
                  <p className="text-sm">
                    Any profile can be reported directly from its profile card or
                    detail view. Reports are confidential and reviewed by a human.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-ocean/10 bg-white/50 p-4">
                <Flag className="mt-0.5 h-5 w-5 shrink-0 text-ocean-bright" />
                <div>
                  <p className="font-medium text-ink">Report Messages &amp; Media</p>
                  <p className="text-sm">
                    Messages and media can be reported from inside any conversation.
                    Reported content is sent to moderation for review.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-ocean/10 bg-white/50 p-4">
                <Ban className="mt-0.5 h-5 w-5 shrink-0 text-ocean-bright" />
                <div>
                  <p className="font-medium text-ink">Block Users</p>
                  <p className="text-sm">
                    Blocking is instant and total — a blocked member cannot see your
                    profile, message you, or interact with you anywhere in the app.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">Enforcement Actions</h2>
            <p className="mb-3">
              Upon confirming a violation of these standards, Wav Labs will take
              immediate action, which may include:
            </p>
            <ul className="space-y-2">
              <li>• Permanent account termination</li>
              <li>• Removal of all prohibited content</li>
              <li>• Reporting to the National Center for Missing &amp; Exploited Children (NCMEC)</li>
              <li>• Reporting to relevant law enforcement authorities</li>
              <li>• Cooperation with legal investigations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">Reporting to Authorities</h2>
            <p>
              Wav Labs complies with all applicable child safety laws, including the
              reporting requirements under 18 U.S.C. § 2258A. We report suspected child
              sexual abuse material to the National Center for Missing &amp; Exploited
              Children (NCMEC) via the CyberTipline at{" "}
              <a href="https://report.cybertip.org" className="text-ocean-bright underline">
                report.cybertip.org
              </a>{" "}
              and to relevant regional and national authorities as required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">Contact</h2>
            <p className="mb-3">
              For child safety concerns, reports, or questions about our safety
              practices, contact our designated safety contact:
            </p>
            <div className="rounded-xl border border-ocean/10 bg-white/50 p-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-ocean-bright" />
                <a href="mailto:support@wavlabs.dev" className="font-medium text-ocean-bright">
                  support@wavlabs.dev
                </a>
              </div>
              <p className="mt-2 text-sm">
                We respond to child safety reports within 24 hours. For immediate
                danger, contact your local emergency services.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-foam p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-ocean-bright" />
              <p className="text-sm">
                <strong className="text-ink">Emergency:</strong> If you believe a child
                is in immediate danger, contact your local emergency services (911 in
                the U.S.) or report to NCMEC at 1-800-843-5678.
              </p>
            </div>
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
