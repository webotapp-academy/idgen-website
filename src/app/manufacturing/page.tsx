import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Manufacturing",
  description: "How iDGen manufactures ID cards — materials, lamination, RFID embedding, and batch printing.",
  path: "/manufacturing",
});

const steps = [
  { name: "Card stock", detail: "0.76mm PVC — the industry-standard thickness for ID cards, thick enough to resist bending in a bag or wallet." },
  { name: "Print", detail: "Full-color dye-sublimation printing direct to the card, from your submitted data and photos." },
  { name: "RFID embedding", detail: "For access-control or library cards, the chip is embedded before lamination — no visible seam or added bulk." },
  { name: "Lamination", detail: "Edge-to-edge lamination seals the print layer so it can't be scratched or peeled off." },
  { name: "Quality check", detail: "Every batch is checked for print alignment, color consistency, and lamination seal before packing." },
  { name: "Dispatch", detail: "Bulk batches ship directly to your city — see Service Area for coverage across the Northeast." },
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="How a card gets made"
        lede="Six steps between your data file and a finished, laminated ID card in a student's or employee's hand."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Manufacturing", path: "/manufacturing" }]} />
        <ol className="mt-8 grid gap-3">
          {steps.map((s, i) => (
            <li key={s.name} className="flex gap-4 rounded-2xl border border-surface-border bg-surface p-5">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-navy font-mono text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h2 className="font-semibold">{s.name}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
