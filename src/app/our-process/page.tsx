import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our Process",
  description: "From quote to dispatch — how an iDGen order actually runs, start to finish.",
  path: "/our-process",
});

const stages = [
  { name: "1. Quote", detail: "Send your card type, quantity, and city through Get a Quote — you'll get pricing and a realistic turnaround before committing." },
  { name: "2. Data collection", detail: "Submit your data file (names, photos, and any custom fields) in the format we specify — this is the single biggest factor in how fast a batch turns around." },
  { name: "3. Proof", detail: "A sample card is generated for approval before the full batch prints, catching layout or data issues early." },
  { name: "4. Production", detail: "The approved batch runs through print, RFID embedding (if applicable), and lamination — see Manufacturing for detail." },
  { name: "5. Quality check", detail: "Every card in the batch is checked before packing — see Quality Assurance." },
  { name: "6. Dispatch", detail: "Cards ship to your city across our Service Area, with tracking shared once the batch leaves our facility." },
];

export default function OurProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="From quote to delivered batch"
        lede="Six stages, the same for a 50-card order and a 5,000-card order."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Our Process", path: "/our-process" }]} />
        <ol className="mt-8 grid gap-3">
          {stages.map((s) => (
            <li key={s.name} className="rounded-2xl border border-surface-border bg-surface p-5">
              <h2 className="font-semibold">{s.name}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">{s.detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-muted">
          Ready to start? <Link href="/get-a-quote" className="text-accent underline">Get a Quote</Link>.
        </p>
      </Container>
    </>
  );
}
