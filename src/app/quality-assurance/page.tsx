import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Quality Assurance",
  description: "How iDGen checks every ID card batch before it ships — print, lamination, and data accuracy.",
  path: "/quality-assurance",
});

const checks = [
  { name: "Data accuracy", detail: "Names, classes, and IDs are cross-checked against your submitted file before printing starts — catching mismatches before a full batch is wasted." },
  { name: "Print alignment", detail: "Photo, text, and logo placement checked against the approved template on a sample card before the full batch runs." },
  { name: "Color consistency", detail: "Color calibration checked across the run so card 1 and card 500 in the same batch match." },
  { name: "Lamination seal", detail: "Edge seal checked for lift or bubbling — a card that fails this doesn't ship." },
  { name: "RFID function test", detail: "Where a chip is embedded, cards are scan-tested against the target reader frequency before dispatch." },
];

export default function QualityAssurancePage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="What gets checked before a batch ships"
        lede="Five checks every order runs through — not a sample spot-check, the full batch."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Quality Assurance", path: "/quality-assurance" }]} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {checks.map((c) => (
            <div key={c.name} className="rounded-2xl border border-surface-border bg-surface p-6">
              <h2 className="font-semibold">{c.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
