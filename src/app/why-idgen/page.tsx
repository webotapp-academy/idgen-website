import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Why iDGen",
  description: "What makes iDGen different from a generic ID card printing vendor.",
  path: "/why-idgen",
});

const reasons = [
  {
    title: "In-house production, not outsourced",
    body: "Every card is printed and laminated in our own facility. Nothing gets sent to a third-party press and re-badged — which is how quality stays consistent across a full batch.",
  },
  {
    title: "Regional dispatch, not a distant courier chain",
    body: "Orders across Assam, Meghalaya, Nagaland, Manipur, Mizoram, Tripura, and Arunachal Pradesh ship from within the region, not from a printer three states away guessing at delivery timelines.",
  },
  {
    title: "One vendor for the whole card program",
    body: "Cards, RFID embedding, holders, hooks, and lanyards from a single order — no separate vendor for the plastic and another for the hardware.",
  },
  {
    title: "Built for the whole lifecycle",
    body: "Bulk onboarding batches, late-admission reprints, lost-card reissues, and annual renewal runs are all standard order types, not special cases.",
  },
];

export default function WhyIdgenPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Why organizations choose iDGen"
        lede="Four things that actually change the outcome of a bulk ID card order."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Why iDGen", path: "/why-idgen" }]} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-surface-border bg-surface p-6">
              <h2 className="font-semibold">{r.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
