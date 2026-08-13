import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "Terms governing orders placed with iDGen for ID card, RFID card, and lanyard printing.",
  path: "/terms-conditions",
});

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms & Conditions", path: "/terms-conditions" }]} />

        <div className="mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-foreground/90">
          <p className="rounded-lg border border-dashed border-surface-border bg-surface p-4 text-muted">
            Draft template — review with legal counsel before publishing, and fill in specific pricing,
            payment, and liability terms once finalized.
          </p>

          <section>
            <h2 className="text-base font-bold text-foreground">Orders & proofs</h2>
            <p className="mt-2">
              A sample card proof is generated for approval before a full batch prints. Production begins only
              after proof approval — changes requested after approval that require a reprint may incur
              additional cost.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground">Data accuracy</h2>
            <p className="mt-2">
              You are responsible for the accuracy of names, photos, and other data submitted for printing.
              iDGen checks data against the submitted file but is not liable for errors present in that file.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground">Turnaround times</h2>
            <p className="mt-2">
              Turnaround estimates given at quote stage are based on standard production capacity and finalized
              data. Delays in data submission or proof approval extend the delivery timeline accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground">Payment</h2>
            <p className="mt-2">Payment terms are confirmed at the time of quote and order confirmation.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground">Reissues & reprints</h2>
            <p className="mt-2">
              Reprints due to iDGen production error are replaced at no charge. Reprints due to data errors in
              the originally submitted file, or lost/damaged cards after delivery, are billed as a new order.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
