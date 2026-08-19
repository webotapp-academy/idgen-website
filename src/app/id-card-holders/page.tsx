import Image from "next/image";
import Link from "next/link";
import { Layers, ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { HolderShape, type HolderVariant } from "@/components/ui/HolderShape";
import { CompareTable } from "@/components/ui/CompareTable";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "ID Card Holders | Vertical, Horizontal & Crystal Lock Holders | IDGen",
  description: "ID card holders for schools, companies, institutions and events. Choose vertical, horizontal, four-side-lock, metal, crystal and chemical sticker holders from IDGen.",
  path: "/id-card-holders/",
});

const holders: { model: string; title: string; body: string; variant: HolderVariant; tag: string }[] = [
  { model: "V-1", title: "Vertical Hard ID Card Holder", body: "Standard vertical polycarbonate holder for one CR80 portrait card with 20mm lanyard loop slot.", variant: "v1", tag: "Standard Portrait" },
  { model: "V-2", title: "Vertical Four-Side-Lock Holder", body: "Transparent heavy-duty holder with 4-side perimeter snap locks for maximum card retention.", variant: "v2", tag: "Four-Side Lock" },
  { model: "CV-1", title: "Crystal Cast Acrylic Holder", body: "Executive glass-clear cast PMMA acrylic holder with polished chamfered edges.", variant: "crystal", tag: "Executive Crystal" },
  { model: "H-1", title: "Horizontal ID Card Holder", body: "Standard landscape orientation holder designed for landscape company & event credentials.", variant: "h1", tag: "Standard Landscape" },
  { model: "H-2", title: "Horizontal Four-Side-Lock Holder", body: "Landscape heavy-duty casing with four-side locking tabs to prevent card loss in active environments.", variant: "h2", tag: "Four-Side Lock" },
  { model: "Metal", title: "Anodized Aluminum Metal Holder", body: "Sleek metallic frame with frosted polycarbonate backplate for executive badge presentation.", variant: "metal", tag: "Metal Armor" },
];

const holderPhotos = [
  { title: "Crystal Clear Hard Acrylic Holder", code: "CV-1 Series", img: "/images/ID card holder/IMG_20250117_172305.jpg" },
  { title: "Four-Side Snap Lock Enclosure", code: "V-2 Heavy Duty", img: "/images/ID card holder/IMG_20250117_172700.jpg" },
  { title: "Landscape Hard Case Enclosure", code: "H-1 / H-2 Series", img: "/images/ID card holder/IMG_20250117_172831.jpg" },
  { title: "Integrated Holder & Satin Lanyard Set", code: "Full Assembly", img: "/images/Lanyard with Holder Samples/Sample 26.jpg" },
];

const orderingSteps = [
  { title: "1. Select Orientation & Model", body: "Choose vertical (portrait) or horizontal (landscape), standard or 4-side-lock." },
  { title: "2. Specify Quantity & Material", body: "Select virgin polycarbonate, crystal acrylic, or anodized metal frames." },
  { title: "3. Choose Lanyard & Hook Pair", body: "Pair with 20mm satin lanyards and anti-rust chrome swivel dog hooks." },
  { title: "4. Direct Guwahati Dispatch", body: "Shipped in bulk cartons of 100 with 48–72h turnaround across Northeast India." },
];

const faqs: Faq[] = [
  { q: "What card dimensions fit inside IDGen holders?", a: "All our standard holders (V-1, V-2, H-1, H-2, CV-1) fit ISO CR80 standard cards (85.6 × 54 mm) with thickness from 0.76 mm (30 mil) up to 1.0 mm." },
  { q: "What is the benefit of a four-side-lock holder?", a: "Four-side-lock holders enclose the card completely around all edges, preventing unauthorized card extraction, physical scratching, and moisture penetration during active student or factory work." },
  { q: "Can we order pre-assembled kits with cards already inside the holders?", a: "Yes! Our factory assembly line can insert cards into holders, attach hooks, and ultrasonically weld the lanyards so you receive ready-to-distribute sets." },
];

export default function IdCardHoldersPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "ID Card Holders",
          description: "Vertical, horizontal, four-side-lock, metal and crystal ID card holders.",
          path: "/id-card-holders/",
        })}
      />
      
      <PageHero
        eyebrow="Hardware & Protection"
        icon={Layers}
        title="Crystal-Clear & Four-Side-Lock ID Card Holders"
        lede="Protect and showcase your credentials with high-impact virgin polycarbonate cases, four-side-lock retention casings, and luxury cast acrylic holders engineered for daily institutional use."
        stats={[
          { label: "Material Grade", value: "Virgin Polycarbonate" },
          { label: "Compatibility", value: "Universal CR80" },
          { label: "Dispatch Time", value: "48–72h Factory" },
          { label: "Durability", value: "UV & Shatter Proof" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Holder Product Photo */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID card holder/IMG_20250117_172305.jpg"
                  alt="Crystal Clear Hard Acrylic and Polycarbonate ID Card Badge Holders"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Crystal PMMA</span>
                </div>
              </div>

              {/* Overlapping Four-Side Lock Case */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID card holder/IMG_20250117_172700.jpg"
                  alt="Four-Side Lock Heavy Duty ID Card Holder"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Assembly Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Holder Samples/Sample 26.jpg"
                  alt="Pre-assembled Lanyard and Card Holder Kit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products/" }, { name: "ID Card Holders", path: "/id-card-holders/" }]} />

        {/* Real Product Photography Gallery */}
        <div className="mt-8">
          <SectionHead
            eyebrow="Specimen Gallery"
            title="Real ID Card Holder Models & Enclosures"
            lede="High-transparency materials, drop-tested structural ribs, and universal CR80 compatibility."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {holderPhotos.map((hp) => (
              <div key={hp.title} className="group overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm transition hover:shadow-xl hover:border-accent/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 img-shine">
                  <Image
                    src={hp.img}
                    alt={hp.title}
                    fill
                    className="img-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-bold text-slate-200 backdrop-blur-md">
                    {hp.code}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-sm">{hp.title}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-500 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>In Stock • Guwahati Hub</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Holder Shape Matrix */}
        <div className="mt-20">
          <SectionHead eyebrow="Interactive Catalog" title="Select Your Organization's Card Holder Model" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {holders.map((h) => (
              <div key={h.model} className="group rounded-2xl border border-surface-border bg-surface p-6 transition-all hover:border-accent/40 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-extrabold text-accent">{h.model}</span>
                  <span className="rounded-full bg-surface-border px-2.5 py-0.5 text-[10px] font-bold text-muted uppercase tracking-wider">{h.tag}</span>
                </div>
                <h3 className="mt-3 font-bold text-foreground text-base">{h.title}</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">{h.body}</p>
                <div className="mt-6 flex items-center justify-center p-4 bg-background rounded-xl border border-surface-border">
                  <HolderShape variant={h.variant} className="h-28 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-20">
          <SectionHead eyebrow="Ordering Guide" title="How to Order ID Card Holders in Bulk" />
          <div className="mt-8">
            <WorkflowSteps steps={orderingSteps} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About ID Card Holders" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need physical holder samples for your committee to inspect?"
            body="We supply free sample kits of our V-1, V-2, CV-1, and metal holders to schools and companies."
            links={[
              { label: "Request Sample Kit", href: "/request-a-quote/", primary: true },
              { label: "Custom Printed Lanyards", href: "/custom-printed-lanyard-printing/" },
              { label: "View Pricing Tiers", href: "/pricing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
