import Link from "next/link";
import { Layers, Fish } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { HolderShape, type HolderVariant } from "@/components/ui/HolderShape";
import { CompareTable } from "@/components/ui/CompareTable";
import { SpecTable } from "@/components/ui/SpecTable";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "ID Card Holders | Vertical, Horizontal & Lock Holders | IDGen",
  description: "ID card holders for schools, companies, institutions and events. Choose vertical, horizontal, four-side-lock, metal, crystal and chemical sticker holders from IDGen.",
  path: "/id-card-holders/",
});

const holders: { model: string; title: string; body: string; variant: HolderVariant }[] = [
  { model: "V-1", title: "Vertical ID Card Holder", body: "Standard vertical holder for one ID card — the default choice for a portrait-oriented 86 × 54 mm card.", variant: "v1" },
  { model: "V-2", title: "Vertical Four-Side-Lock Holder", body: "Transparent vertical holder with four-side locking, for stronger card retention.", variant: "v2" },
  { model: "V-3", title: "Chemical Sticker Holder", body: "Vertical holder for applications requiring a chemical sticker holder format.", variant: "v3" },
  { model: "H-1", title: "Horizontal ID Card Holder", body: "Standard holder for landscape-oriented identification cards.", variant: "h1" },
  { model: "H-2", title: "Horizontal Four-Side-Lock Holder", body: "Landscape holder with four-side locking, for additional retention.", variant: "h2" },
  { model: "Metal", title: "Metal ID Card Holder", body: "A premium holder option with a different appearance from standard plastic holders.", variant: "metal" },
  { model: "CV-1", title: "Crystal ID Card Holder", body: "A more distinctive, premium-style presentation for corporate and membership identification.", variant: "crystal" },
  { model: "Fish Hook", title: "Holder Attachment", body: "Connects a suitable ID card holder or badge to a lanyard.", variant: "hook" },
];

const orderingSteps = [
  { title: "Tell Us Your Requirement", body: "Holder type (if known), quantity, card dimensions, card orientation, application." },
  { title: "Select the Holder", body: "Choose the suitable model based on your card and retention requirement." },
  { title: "Add Attachment", body: "Add a fish hook or another compatible attachment if required." },
  { title: "Add Lanyard", body: "Add a custom printed lanyard if required." },
  { title: "Confirm", body: "Confirm the product combination and quantity." },
  { title: "Dispatch", body: "After confirmation and payment, approved orders are prepared for dispatch." },
];

const faqs: Faq[] = [
  { q: "What is an ID card holder?", a: "An ID card holder is an accessory used to carry and display an identification card while helping protect the card during use." },
  { q: "Which ID card holder is suitable for a vertical card?", a: "V-1 is the standard vertical option. V-2 is the vertical four-side-lock option when additional retention is preferred." },
  { q: "Which holder is suitable for a horizontal card?", a: "H-1 is the standard horizontal option, while H-2 provides four-side locking." },
  { q: "What is a four-side-lock ID card holder?", a: "A holder designed to retain an ID card from four sides. IDGen offers V-2 and H-2 in this configuration." },
  { q: "Can an ID card holder be connected to a lanyard?", a: "Yes. A compatible holder can be connected to a lanyard using an attachment such as a fish hook." },
  { q: "What size card fits V-1 and V-2?", a: "The specified card format is 86 × 54 mm. Always confirm the actual card and holder dimensions before bulk ordering." },
  { q: "Does IDGen provide metal or crystal ID card holders?", a: "Yes — a Metal ID Card Holder and the CV-1 Crystal ID Card Holder are both available as premium options." },
  { q: "Can I order holders with custom printed lanyards?", a: "Yes. Compatible holders can be combined with custom printed lanyards." },
  { q: "How quickly are orders dispatched?", a: "Eligible approved orders are dispatched within 72 hours after confirmation and payment, excluding courier transit time." },
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
        eyebrow="Product"
        icon={Layers}
        title="ID Card Holders"
        lede="Accessories for organizations that need a practical way to carry, protect and display identification cards — vertical, horizontal, four-side-lock, chemical sticker, metal, crystal holders and fish hooks."
        visual={
          <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
            {(["v1", "v2", "h1", "h2"] as const).map((v) => (
              <div key={v} className="rounded-2xl bg-white/5 p-2">
                <HolderShape variant={v} />
                <p className="mt-1 text-center font-mono text-[10px] font-bold text-accent uppercase">{v}</p>
              </div>
            ))}
          </div>
        }
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products/" }, { name: "ID Card Holders", path: "/id-card-holders/" }]} />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request a Quote
          </Link>
          <Link href="/id-card-printing/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            Explore ID Card Printing
          </Link>
        </div>

        {/* Quick selection */}
        <div className="mt-12">
          <SectionHead eyebrow="Quick Guide" title="Quick Holder Selection" lede="Portrait card → Vertical holder. Landscape card → Horizontal holder. If you're unsure, provide your card dimensions and a photo, and the appropriate holder can be identified." />
          <div className="mt-6">
            <CompareTable
              columns={["Your requirement", "Recommended option"]}
              highlightColumn={1}
              rows={[
                ["Standard vertical card", "V-1"],
                ["Vertical card with four-side locking", "V-2"],
                ["Chemical sticker holder", "V-3"],
                ["Standard horizontal card", "H-1"],
                ["Horizontal card with four-side locking", "H-2"],
                ["Premium metal appearance", "Metal Holder"],
                ["Premium crystal appearance", "CV-1 Crystal Holder"],
                ["Connect holder to lanyard", "Fish Hook"],
              ]}
            />
          </div>
        </div>

        {/* What is a holder */}
        <div className="mt-12 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            A typical wearable identification arrangement is ID Card → Holder → Attachment → Lanyard — for example,
            PVC ID Card → Holder → Fish Hook → Lanyard. IDGen supplies holders separately or can coordinate them
            with the other components required for an identification setup.
          </p>
        </div>
        <div className="mt-4">
          <FlowChain steps={["ID Card", "Holder", "Fish Hook", "Lanyard"]} />
        </div>

        {/* Range */}
        <div className="mt-12">
          <SectionHead eyebrow="Range" title="ID Card Holder Range" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {holders.map((h) => (
              <div key={h.model} className="overflow-hidden rounded-2xl border border-surface-border bg-surface">
                <div className="border-b border-surface-border bg-background">
                  <HolderShape variant={h.variant} />
                </div>
                <div className="p-5">
                  <span className="font-mono text-xs font-bold text-accent">{h.model}</span>
                  <h3 className="mt-1 font-semibold text-foreground">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <SpecTable
            title="V-1 — Vertical Holder"
            specs={{ Capacity: "1 card", Orientation: "Vertical", Material: "Plastic", Finish: "Gloss", "Card format": "86 × 54 mm", "Lanyard hole": "20 mm", Construction: "100% virgin plastic" }}
          />
          <SpecTable
            title="V-2 — Vertical Four-Side-Lock"
            specs={{ Orientation: "Vertical", Type: "Transparent", Material: "Plastic", "Card format": "86 × 54 mm", "Lanyard hole": "20 mm", Locking: "Four-side lock", Construction: "100% virgin plastic" }}
          />
        </div>

        {/* Standard vs four-side-lock */}
        <div className="mt-12">
          <SectionHead eyebrow="Comparison" title="Standard vs Four-Side-Lock Holders" lede="The main difference between the standard and four-side-lock configurations is how the card is retained. The best option depends on the card format and intended application." />
          <div className="mt-6">
            <CompareTable
              columns={["Configuration", "Models", "Suitable for"]}
              rows={[
                ["Standard", "V-1 / H-1", "Standard everyday identification requirements"],
                ["Four-Side Lock", "V-2 / H-2", "Where additional card retention is preferred"],
              ]}
            />
          </div>
        </div>

        {/* Applications */}
        <div className="mt-12">
          <SectionHead eyebrow="Applications" title="ID Card Holder Applications" lede="The holder selection should always be based on the actual card format and application, rather than simply the organization type." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="font-semibold text-foreground">Schools & Educational Institutions</h3>
              <p className="mt-1.5 text-sm text-muted">For student, teacher, staff and visitor identification.</p>
              <Link href="/student-id-card-printing/" className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">Student ID Card Printing →</Link>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="font-semibold text-foreground">Companies & Offices</h3>
              <p className="mt-1.5 text-sm text-muted">For employees, staff, contractors and visitors.</p>
              <Link href="/employee-id-card-printing/" className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">Employee ID Card Printing →</Link>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="font-semibold text-foreground">Events</h3>
              <p className="mt-1.5 text-sm text-muted">For delegates, speakers, organizers, exhibitors and participants.</p>
              <Link href="/event-card-printing/" className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">Event Card Printing →</Link>
            </div>
          </div>
        </div>

        {/* Ordering */}
        <div className="mt-12">
          <SectionHead eyebrow="Process" title="Ordering ID Card Holders" />
          <div className="mt-6">
            <WorkflowSteps steps={orderingSteps} />
          </div>
          <div className="mt-6 rounded-2xl border border-accent/30 bg-accent-soft p-5 flex items-center gap-3">
            <Fish className="h-5 w-5 shrink-0 text-navy-deep" />
            <p className="text-sm text-navy-deep">
              <strong>72-Hour Dispatch:</strong> for eligible approved orders — approval + payment → preparation →
              quality check → dispatch within 72 hours. This refers to dispatch from IDGen; courier transit time
              is additional.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        <div className="mt-12">
          <CtaBand
            title="Need the right ID card holder?"
            body="Tell us your card size, orientation, quantity and application, and we'll help you select the appropriate holder."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore ID Card Printing", href: "/id-card-printing/" },
              { label: "Explore Lanyards", href: "/custom-printed-lanyard-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
