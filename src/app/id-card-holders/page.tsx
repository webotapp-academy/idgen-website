import Image from "next/image";
import Link from "next/link";
import { Layers } from "lucide-react";
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
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products/" }, { name: "ID Card Holders", path: "/id-card-holders/" }]} />

        {/* Product Photo Macro Showcase Banner */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/id-holders-hooks.jpg"
                  alt="Crystal Clear Hard Acrylic and Polycarbonate ID Card Badge Holders with Chrome Clips"
                  fill
                  priority
                  className="img-zoom object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                    Crystal Polycarbonate Range
                  </span>
                  <p className="text-sm font-bold mt-1">Vertical, Horizontal & Executive Crystal Holders</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Engineered Protection</span>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Optical Clarity with Anti-Yellowing UV Stabilization
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              Standard recycled plastic holders turn yellow, brittle, and crack within months of student use. IDGen holders are molded from 100% virgin optical-grade polycarbonate, delivering diamond clarity, high scratch resistance, and long-term durability.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-surface-border bg-surface p-3">
                <p className="font-bold text-foreground">Four-Side Snap Retention</p>
                <p className="text-muted text-[11px] mt-0.5">Locks cards firmly in place</p>
              </div>
              <div className="rounded-xl border border-surface-border bg-surface p-3">
                <p className="font-bold text-foreground">Barcode Scan Compatible</p>
                <p className="text-muted text-[11px] mt-0.5">Scans through case without removal</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/request-a-quote/?product=holders" className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 shadow transition hover:bg-accent-hover hover:text-white">
                Request a Bulk Quote
              </Link>
              <Link href="/id-card-hooks/" className="rounded-full border border-surface-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
                Explore Lanyard Hooks →
              </Link>
            </div>
          </div>
        </div>

        {/* Product Catalog Grid */}
        <div className="mt-16">
          <SectionHead eyebrow="Product Lineup" title="Complete Range of ID Card Badge Holders" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {holders.map((h) => (
              <div key={h.model} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm transition hover:border-accent/40 hover:shadow-md">
                <div>
                  <div className="border-b border-surface-border bg-background p-3">
                    <HolderShape variant={h.variant} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-accent">{h.model}</span>
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold text-accent">{h.tag}</span>
                    </div>
                    <h3 className="mt-2 font-bold text-foreground text-base">{h.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{h.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Selection Matrix */}
        <div className="mt-16">
          <SectionHead eyebrow="Selector" title="Match Your Card Orientation to the Right Holder" />
          <div className="mt-6">
            <CompareTable
              columns={["Identification Requirement", "Recommended Holder Model"]}
              highlightColumn={1}
              rows={[
                ["Standard vertical portrait student ID", "V-1 Virgin Polycarbonate"],
                ["Heavy-duty active campus wear with lock", "V-2 Four-Side-Lock Holder"],
                ["Executive corporate landscape badge", "H-1 / CV-1 Crystal Acrylic"],
                ["Industrial shopfloor badge with secure lock", "H-2 Horizontal Four-Side-Lock"],
                ["Executive boardroom & metal finish", "Anodized Aluminum Metal Holder"],
                ["Fast attachment to 20mm satin lanyards", "Chrome Swivel Dog Hook"],
              ]}
            />
          </div>
        </div>

        {/* Ordering Pipeline */}
        <div className="mt-16">
          <SectionHead eyebrow="Procurement" title="How to Order ID Card Holders in Bulk" />
          <div className="mt-6">
            <WorkflowSteps steps={orderingSteps} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About ID Card Holders" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need sample holders for your organization?"
            body="Contact our Guwahati office for physical samples of V-1, V-2, CV-1, and metal holders before placing a bulk order."
            links={[
              { label: "Request Specimen Kit", href: "/request-a-quote/", primary: true },
              { label: "Explore ID Card Printing", href: "/id-card-printing/" },
              { label: "Explore Lanyards", href: "/custom-printed-lanyard-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
