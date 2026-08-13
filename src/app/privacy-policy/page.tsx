import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How iDGen collects, uses, and protects data submitted for ID card printing and quote requests.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]} />

        <div className="mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-foreground/90">
          <p className="rounded-lg border border-dashed border-surface-border bg-surface p-4 text-muted">
            Draft template — review with legal counsel before publishing. Update once real contact details and
            data-handling practices (retention period, hosting location, sub-processors) are confirmed.
          </p>

          <section>
            <h2 className="text-base font-bold text-foreground">What we collect</h2>
            <p className="mt-2">
              To print ID cards, we collect the data you submit for that purpose — names, photos, class/role,
              and any custom fields you request on the card (blood group, emergency contact, etc.). Through
              our contact and quote forms, we collect your name, email, phone, and message.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground">How we use it</h2>
            <p className="mt-2">
              Card-batch data (names, photos, class/role) is used solely to print the cards you&apos;ve
              ordered. Contact-form data is used to respond to your inquiry and, if you proceed, to fulfill
              your order.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground">Retention</h2>
            <p className="mt-2">
              Card-batch data is retained only as long as needed to fulfill and support reissues for your
              order, then deleted on request. Contact-form submissions are retained for standard business
              record-keeping.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground">Sharing</h2>
            <p className="mt-2">
              We do not sell submitted data. It is not shared outside iDGen except where required to fulfill
              your order (e.g., a delivery courier) or where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground">Contact</h2>
            <p className="mt-2">
              For questions about data we hold or to request deletion, use the{" "}
              <Link href="/contact-us" className="text-accent underline">Contact Us</Link> page.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
