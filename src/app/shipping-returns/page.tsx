import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Shipping & Returns",
  description: "How iDGen dispatches bulk ID card orders and handles reprints for production errors.",
  path: "/shipping-returns/",
});

export default function ShippingReturnsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Shipping & Returns" />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Shipping & Returns", path: "/shipping-returns/" }]} />

        <div className="mt-8 max-w-3xl space-y-6 text-sm leading-relaxed text-foreground/90">
          <p className="rounded-lg border border-dashed border-surface-border bg-surface p-4 text-muted">
            Draft template — confirm actual courier partners, dispatch timelines per state, and specific
            reprint policy before publishing.
          </p>

          <section>
            <h2 className="text-base font-bold text-foreground">Dispatch</h2>
            <p className="mt-2">
              Orders ship directly from our production facility once the batch passes quality checks. See{" "}
              <Link href="/service-area" className="text-accent underline">Service Area</Link> for coverage and
              typical timelines per state.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground">Tracking</h2>
            <p className="mt-2">Tracking details are shared once a batch leaves our facility.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground">Damaged or incorrect orders</h2>
            <p className="mt-2">
              If cards arrive damaged or don&apos;t match the approved proof, contact us within 7 days of
              delivery — verified production errors are reprinted at no charge.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground">Returns</h2>
            <p className="mt-2">
              Because cards are printed to order with individual names and photos, completed batches are not
              eligible for return except in the case of a verified production error.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
