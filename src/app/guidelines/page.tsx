import { HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Community Guidelines — l8r by Wav Labs",
  description:
    "The rules that keep l8r a community worth being part of: consent, honesty, safety, and zero tolerance for hate.",
};

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-12 flex items-center gap-3">
          <HeartHandshake className="h-8 w-8 text-ocean-bright" />
          <h1 className="text-3xl font-bold">Community Guidelines</h1>
        </div>

        <p className="mb-2 text-sm text-ink-soft">l8r — by Wav Labs</p>
        <p className="mb-8 text-sm text-ink-soft">Last updated: October 15, 2026</p>

        <div className="space-y-8 leading-relaxed text-ink-soft">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">The short version</h2>
            <p>
              Be real, be kind, get consent. l8r is a community for gay men to meet on
              their own terms — protect it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">Be yourself</h2>
            <p>
              Use your own photos and honest profile information. No catfishing,
              impersonation, or bait accounts. What you put on your grid is who members
              meet — make it true.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">Consent is the baseline</h2>
            <p>
              No means no. Don&apos;t send explicit content, repeated messages, or
              advances to anyone who hasn&apos;t welcomed them. If someone blocks you or
              stops replying, that&apos;s the answer. Expiring media and unsend exist —
              but consent comes first, always.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">Keep each other safe</h2>
            <p>
              Don&apos;t share anyone&apos;s private photos, location, HIV status, or
              identity without their permission. Never pressure someone to disclose more
              than they want to. Meet in public first and tell a friend — standard,
              sensible stuff.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">No hate</h2>
            <p>
              Racism, transphobia, body-shaming, fem-shaming, HIV stigma, and harassment
              have no place here. &ldquo;No fems / no fats / no Asians&rdquo;-style
              profiles are not a preference — they&apos;re a violation.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">No minors. Ever.</h2>
            <p>
              Anyone under 18 is removed on sight and reported to the relevant
              authorities. If you suspect a member is underage, report them
              immediately — we treat these reports with the highest priority.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">Not a marketplace</h2>
            <p>
              No escorting, soliciting money, selling goods or services, drug dealing,
              or recruiting for external platforms. Genuine connections only.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">Content rules</h2>
            <p>
              Profile photos should represent you. No illegal content, no violence or
              gore, and no content featuring anyone who hasn&apos;t consented to being
              in it. Explicit material belongs in private conversation — and only when
              it&apos;s wanted.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">Enforcement</h2>
            <p>
              Every report is reviewed by a human. We act fast on safety issues and
              don&apos;t tolerate retaliation for reporting. Violations lead to content
              removal, warnings, or permanent bans depending on severity.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-ink">See something?</h2>
            <p>
              Report it from any profile or chat — it&apos;s confidential, takes
              seconds, and genuinely keeps people safe. For anything urgent, email{" "}
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
