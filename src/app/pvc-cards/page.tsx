import Image from "next/image";
import Link from "next/link";
import { CreditCard, ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "30-Mil CR80 PVC Smart Cards | Virgin PVC Core Cards | IDGen",
  description: "Bank-grade 30-mil (0.76mm) CR80 virgin PVC smart cards manufactured for enterprise employee badges, student ID cards, RFID access cards, and membership programs across Northeast India.",
  path: "/pvc-cards/",
});

const pvcPhotos = [
  { title: "High-Definition Dye Sublimation PVC Card", code: "PVC-01", img: "/images/PVC Cards Samples/Sample 1.jpg" },
  { title: "Overlaminated Scratch-Proof Enterprise PVC Card", code: "PVC-02", img: "/images/PVC Cards Samples/Sample 3.jpg" },
];

const pvcSpecs = [
  { model: "CR80 30-Mil Standard PVC", material: "Virgin Polyvinyl Chloride", dimensions: "85.6mm × 54mm (0.76mm)", print: "Thermal Transfer & Dye Sublimation", durability: "5+ Years UV Resistance" },
  { model: "Mifare 1K RFID PVC Card", material: "PVC + Embedded 13.56MHz Chip", dimensions: "CR80 Standard (30-mil)", print: "Edge-to-Edge HD Print", durability: "100,000 Read/Write Cycles" },
  { model: "TK4100 Proximity Card", material: "PVC + 125kHz Low Frequency Chip", dimensions: "CR80 Standard (30-mil)", print: "High Gloss Protective Laminate", durability: "Contactless Access Control" },
  { model: "Magnetic Stripe PVC Card", material: "PVC + HiCo / LoCo MagStripe", dimensions: "CR80 ISO 7811 Standard", print: "Variable Barcode / QR / Mag", durability: "Bank / Loyalty Standard" },
];

const orderingSteps = [
  { title: "1. Select PVC Chip / Spec", body: "Choose standard plain PVC, 13.56MHz Mifare 1K smart card, or 125kHz TK4100 proximity card." },
  { title: "2. Provide Data & Student / Staff Roster", body: "Send data sheet along with individual photograph filenames for seamless automated batch printing." },
  { title: "3. Precision Thermal Sublimation", body: "300 DPI edge-to-edge printing with protective overlay lamination against wear and moisture." },
  { title: "4. Rapid Guwahati Dispatch", body: "Card batches packed in anti-static trays and dispatched in 24–48h across all 8 NE states." },
];

const faqs: Faq[] = [
  { q: "What is the difference between virgin PVC and recycled PVC cards?", a: "Virgin PVC cards feature pure white core plastic without imperfections, ensuring card printer printheads do not snag or cause white speckles. They also offer 3x higher resistance to snapping or delamination." },
  { q: "Can we print metallic foil, holographic overlays, or UV security text on PVC cards?", a: "Yes! IDGen offers security overlays including high-resolution 3D custom holograms, invisible UV microtext, and gold/silver foil stamping." },
];

export default function PvcCardsPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "30-Mil CR80 PVC Smart Cards",
          description: "Bank-grade 30-mil CR80 virgin PVC smart cards for ID badges and access control.",
          path: "/pvc-cards/",
        })}
      />

      <PageHero
        eyebrow="Core Media & Credentials"
        icon={CreditCard}
        title="30-Mil CR80 Virgin PVC Smart Cards"
        lede="The gold standard for identity credentials. IDGen supplies bank-grade 30-mil (0.76mm) CR80 virgin PVC cards with high-definition dye sublimation printing, protective overlaminate, and embedded RFID smart chips."
        stats={[
          { label: "Card Format", value: "CR80 (85.6x54mm)" },
          { label: "Thickness", value: "30-Mil (0.76mm)" },
          { label: "Core Quality", value: "100% Virgin PVC" },
          { label: "Dispatch", value: "24–48h Factory" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary PVC Card Sample */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/PVC Cards Samples/Sample 1.jpg"
                  alt="Virgin PVC Smart Card Printing Sample"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-cyan-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Virgin PVC</span>
                </div>
              </div>

              {/* Overlapping Secondary Card Sample */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/PVC Cards Samples/Sample 3.jpg"
                  alt="Overlaminated Scratch Proof PVC Card"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products/" }, { name: "PVC Cards", path: "/pvc-cards/" }]} />

        {/* Specimen Gallery */}
        <div className="mt-8">
          <SectionHead
            eyebrow="Specimen Gallery"
            title="Real Production Specimen Cards"
            lede="Vibrant dye sublimation colors, crisp barcodes, and edge-to-edge clarity."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl">
            {pvcPhotos.map((pp) => (
              <div key={pp.code} className="group overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm transition hover:shadow-xl hover:border-accent/40">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 img-shine">
                  <Image
                    src={pp.img}
                    alt={pp.title}
                    fill
                    className="img-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300 backdrop-blur-md">
                    {pp.code}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-sm">{pp.title}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Bank Grade PVC</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specs Table */}
        <div className="mt-20">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase">
            <ShieldCheck className="h-4 w-4" />
            <span>Industrial Specifications</span>
          </div>
          <h2 className="mt-1 text-2xl font-extrabold text-foreground sm:text-3xl">
            PVC Smart Card Options & Technical Specs
          </h2>
          <p className="mt-2 text-sm text-muted max-w-2xl">
            Built for enterprise attendance tracking, access control barriers, and university registration.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-surface-border bg-surface shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-surface-border bg-background/80 text-xs font-bold text-muted uppercase">
                <tr>
                  <th className="px-5 py-4">Card Type</th>
                  <th className="px-5 py-4">Material Structure</th>
                  <th className="px-5 py-4">Dimensions</th>
                  <th className="px-5 py-4">Printing Capability</th>
                  <th className="px-5 py-4">Durability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {pvcSpecs.map((spec) => (
                  <tr key={spec.model} className="hover:bg-background/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-foreground">{spec.model}</td>
                    <td className="px-5 py-4 text-muted">{spec.material}</td>
                    <td className="px-5 py-4 text-muted">{spec.dimensions}</td>
                    <td className="px-5 py-4 text-muted">{spec.print}</td>
                    <td className="px-5 py-4 font-mono text-xs font-semibold text-cyan-400">{spec.durability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-20">
          <SectionHead eyebrow="Ordering Workflow" title="How to Order PVC Cards in Bulk" />
          <div className="mt-8">
            <WorkflowSteps steps={orderingSteps} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About PVC Cards" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need printed PVC cards or blank smart card stock?"
            body="We supply both fully printed identity cards and blank virgin RFID card stock across Northeast India."
            links={[
              { label: "Request a Free Quote", href: "/request-a-quote/", primary: true },
              { label: "RFID Card Printing", href: "/rfid-card-printing/" },
              { label: "Explore Products Catalog", href: "/products/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
