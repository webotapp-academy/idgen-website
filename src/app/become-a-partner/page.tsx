import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Become a Partner",
  description: "Partner with iDGen to resell or distribute ID card and identity solutions across Northeast India.",
  path: "/become-a-partner",
});

const benefits = [
  { title: "Regional manufacturing", body: "Sell a product manufactured in the region you're selling into — no long-distance dependency for stock or turnaround." },
  { title: "Full catalogue access", body: "Every service line — ID cards, RFID, lanyards, and hardware — available to resell under a single partner account." },
  { title: "Direct production support", body: "Design and quality-check support from iDGen Studio and our production team backs every partner order." },
];

export default function BecomeAPartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership"
        title="Become an iDGen partner"
        lede="Resellers, print shops, and distributors across the Northeast — partner with a regional manufacturer instead of a distant vendor."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Become a Partner", path: "/become-a-partner" }]} />

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-surface-border bg-surface p-5">
              <h2 className="font-semibold">{b.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl">
          <h2 className="text-lg font-bold">Apply to partner</h2>
          <p className="mt-1 text-sm text-muted">Tell us about your business — we&apos;ll follow up with partner terms.</p>
          <div className="mt-4">
            <PartnerForm />
          </div>
        </div>
      </Container>
    </>
  );
}
