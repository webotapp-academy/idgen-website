import Link from "next/link";
import { IndianRupee, Layers, Package } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { CompareTable } from "@/components/ui/CompareTable";
import { FlowChain } from "@/components/ui/FlowChain";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "ID Card Printing Price & Lanyard Pricing | IDGen",
  description:
    "Check IDGen reference pricing for PVC ID cards, custom printed lanyards, event cards and RFID cards. Get a customized quote for bulk identity requirements.",
  path: "/pricing/",
});

const quickPricing: string[][] = [
  ["PVC ID Card — Single Side", "₹15 / card"],
  ["PVC ID Card — Double Side", "₹16 / card"],
  ["20 mm Custom Printed Lanyard", "₹15 / piece"],
  ["Event Card", "₹35 / card"],
  ["RFID ID Card", "₹45 / card"],
];

const priceFactors = [
  ["Quantity", "Larger quantities may have different commercial pricing."],
  ["Printing", "Single-side and double-side printing have different pricing."],
  ["Card Specification", "Material, thickness, format and other specs can affect final price."],
  ["Personalization", "Individual names, photographs, ID numbers, QR codes and barcodes may affect the production workflow."],
  ["Accessories", "The final setup may include Holder, Hook, Lanyard, Ultrasonic sealing."],
  ["Data Preparation", "Projects requiring structured data and photograph preparation may have different workflow requirements."],
  ["Design", "Existing print-ready artwork and design preparation can have different requirements."],
  ["Delivery", "Courier or transportation charges may depend on destination, shipment size and applicable delivery terms."],
];

const setupTiers = [
  { name: "Card Only", combo: "ID Card", note: "For organizations that already have their accessories." },
  { name: "Card + Holder", combo: "ID Card + Holder", note: "For organizations requiring card protection." },
  { name: "Wearable Setup", combo: "ID Card + Holder + Hook + Lanyard", note: "For everyday student, employee or institutional identification." },
  { name: "Complete Wearable Setup", combo: "ID Card + Ultrasonic Sealing + Holder + Hook + Lanyard", note: "Where the lanyard attachment and finishing are part of the final identification assembly." },
];

const pricingByRequirement: [string, string][] = [
  ["PVC ID Card Printing", "/id-card-printing/"],
  ["Student ID Cards", "/student-id-card-printing/"],
  ["Employee ID Cards", "/employee-id-card-printing/"],
  ["Custom Printed Lanyards", "/custom-printed-lanyard-printing/"],
  ["Event Cards", "/event-card-printing/"],
  ["RFID Cards", "/rfid-card-printing/"],
  ["Ultrasonic Sealing", "/ultrasonic-sealing/"],
  ["ID Card Holders", "/id-card-holders/"],
  ["ID Card Hooks", "/id-card-hooks/"],
  ["Digital Data Collection", "/idgen-studio/"],
];

const faqs: Faq[] = [
  { q: "How much does an ID card cost at IDGen?", a: "Reference pricing starts at ₹15 per PVC ID card for single-side printing and ₹16 per card for double-side printing, subject to the applicable specifications and order conditions." },
  { q: "How much does a custom printed lanyard cost?", a: "The reference price for a 20 mm custom printed lanyard is ₹15 per piece." },
  { q: "How much does an event card cost?", a: "The reference price for an event card is ₹35 per card. The complete event identification setup may cost more depending on lanyards, hooks and sealing requirements." },
  { q: "How much does an RFID ID card cost?", a: "The reference price for an RFID ID card is ₹45 per card, subject to RFID type, specifications and compatibility requirements." },
  { q: "Do ID card prices include lanyards?", a: "Not necessarily. Card printing and accessories such as lanyards, holders and hooks should be considered according to the selected configuration." },
  { q: "Do bulk orders have different pricing?", a: "Bulk project pricing can vary according to quantity, specifications, personalization, accessories and production requirements. Request a quotation for the exact project." },
  { q: "Is the listed price the final price?", a: "The prices shown are reference prices. The final quotation depends on the confirmed product specifications, quantity, customization, accessories and applicable delivery conditions." },
  { q: "Can I order only ID cards?", a: "Yes. Customers can order ID cards without accessories where required." },
  { q: "Can I order a complete ID card set?", a: "Yes. Depending on the requirement, a complete setup can include the ID card, holder, hook, lanyard and applicable ultrasonic sealing." },
  { q: "Does delivery come under the listed price?", a: "Delivery conditions depend on the order and destination. Confirm applicable delivery charges and terms when requesting the quotation." },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing/" }])} />
      <PageHero
        eyebrow="Pricing"
        icon={IndianRupee}
        title="ID Card, Lanyard & Identity Product Pricing"
        lede="IDGen provides customized identity products and related services for schools, colleges, universities, companies, institutions, events and organizations. Pricing depends on the product, quantity, customization, data requirements, accessories and finishing configuration."
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing/" }]} />

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/90">
          Use the pricing below as a reference for common requirements. For bulk or customized projects,
          request a quotation based on your exact specifications.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request a Bulk Quote
          </Link>
          <Link href="/contact-us/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            Contact IDGen
          </Link>
        </div>

        {/* Quick pricing guide */}
        <div className="mt-16">
          <SectionHead eyebrow="Reference Pricing" title="Quick Pricing Guide" />
          <div className="mt-6">
            <CompareTable columns={["Service / Product", "Reference Price"]} rows={quickPricing} highlightColumn={1} />
          </div>
          <p className="mt-3 text-xs text-muted">
            Prices shown are reference prices and may vary according to quantity, specifications, customization,
            data requirements and applicable order conditions.
          </p>
        </div>

        {/* Per-product breakdown */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">PVC ID Card Printing</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Single-Side Printing: <strong className="text-foreground">₹15 / card</strong> — suitable where
              identification information is printed on one side. Double-Side Printing:{" "}
              <strong className="text-foreground">₹16 / card</strong> — suitable when information, branding,
              QR codes, barcodes or other details are required on both sides.
            </p>
            <Link href="/id-card-printing/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
              Explore ID Card Printing →
            </Link>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">Custom Printed Lanyard</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              <strong className="text-foreground">₹15 / lanyard.</strong> Custom printed lanyards can be
              produced with organization branding, names, logos, colours and repeating artwork according to
              the approved design.
            </p>
            <Link href="/custom-printed-lanyard-printing/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
              Explore Custom Printed Lanyards →
            </Link>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">Event Card</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              <strong className="text-foreground">₹35 / card.</strong> Depending on setup: Event Card + One
              Hook + Lanyard, or Event Card + Two Hooks + Lanyard. Where ultrasonic sealing is required, the
              number of sealing operations depends on the selected attachment configuration.
            </p>
            <Link href="/event-card-printing/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
              Explore Event Card Printing →
            </Link>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">RFID ID Card</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              <strong className="text-foreground">₹45 / card.</strong> Pricing depends on the selected RFID
              technology, card specification and compatibility requirements — confirm frequency, chip/type,
              card format and reader/system compatibility before ordering.
            </p>
            <Link href="/rfid-card-printing/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
              Explore RFID Card Printing →
            </Link>
          </div>
        </div>

        {/* What affects pricing */}
        <div className="mt-16">
          <SectionHead eyebrow="Factors" title="What affects ID card pricing?" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {priceFactors.map(([label, body]) => (
              <div key={label} className="rounded-2xl border border-surface-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Complete setup tiers */}
        <div className="mt-16">
          <SectionHead eyebrow="Configurations" title="Complete ID Card Setup" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {setupTiers.map((tier) => (
              <div key={tier.name} className="rounded-2xl border border-surface-border bg-surface p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Layers className="h-4.5 w-4.5" />
                </div>
                <h3 className="mt-3 font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-1 font-mono text-xs text-accent">{tier.combo}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tier.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-accent">
            <Link href="/id-card-holders/" className="hover:underline">Explore ID Card Holders →</Link>
            <Link href="/id-card-hooks/" className="hover:underline">Explore ID Card Hooks →</Link>
            <Link href="/ultrasonic-sealing/" className="hover:underline">Explore Ultrasonic Sealing →</Link>
          </div>
        </div>

        {/* Student / Employee pricing */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">Student ID Card Pricing</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Student identification projects can include: Student ID Card + Lanyard + Holder + Hook. Final
              price depends on selected components, quantity, card specification and personalization
              requirements. Applies to schools, colleges, universities, coaching and training institutes.
            </p>
            <Link href="/student-id-card-printing/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
              Explore Student ID Card Printing →
            </Link>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">Employee ID Card Pricing</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Employee identification requirements can include: Employee ID Card + Holder + Hook + Custom
              Printed Lanyard. Pricing depends on required card specification, quantity, personalization and
              accessories.
            </p>
            <Link href="/employee-id-card-printing/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
              Explore Employee ID Card Printing →
            </Link>
          </div>
        </div>

        {/* Bulk pricing */}
        <div className="mt-16">
          <SectionHead eyebrow="Bulk Projects" title="Bulk ID card pricing" lede="For large institutional orders, the best approach is to calculate pricing based on the complete project requirement rather than simply multiplying a retail-looking unit price." />
          <div className="mt-6 flex flex-wrap gap-3">
            {["1,000+ cards", "5,000+ cards", "10,000+ cards"].map((tier) => (
              <span key={tier} className="rounded-full border border-surface-border bg-surface px-4 py-2 text-sm font-semibold text-foreground">
                {tier}
              </span>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            A bulk quotation can consider total quantity, card type, single/double-side printing, data
            personalization, photograph processing, lanyards, holders, hooks, ultrasonic sealing, packaging and
            dispatch requirements. For larger projects, send quantity and complete specification for a
            project-specific quotation.
          </p>
        </div>

        {/* Print-ready vs customized */}
        <div className="mt-16">
          <SectionHead eyebrow="Order Types" title="Print-ready vs customized orders" />
          <div className="mt-6">
            <CompareTable
              columns={["", "Print-Ready Order", "Customized Order"]}
              rows={[
                ["What you provide", "Final artwork, correct production data, required specifications", "IDGen coordinates data, design, personalization and preview with you"],
                ["Path to production", "Moves directly into production after confirmation", "Data → Design → Personalization → Preview → Approval → Production"],
              ]}
              highlightColumn={1}
            />
          </div>
          <Link href="/why-idgen/" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
            Explore Our Process →
          </Link>
        </div>

        {/* Pricing by requirement */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <Package className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h2 className="text-lg font-bold text-foreground">IDGen pricing by requirement</h2>
              <p className="mt-2 text-sm text-muted">Full specifications live on each product/service page.</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-accent">
                {pricingByRequirement.map(([label, href]) => (
                  <Link key={href} href={href} className="hover:underline">
                    {label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Need a custom quote */}
        <div className="mt-16">
          <SectionHead eyebrow="Custom Quote" title="Need a custom quote?" lede="If your requirement includes multiple products, don't calculate everything separately — send IDGen a single combined requirement." />
          <div className="mt-4">
            <FlowChain steps={["Quantity", "Product", "Card Specification", "Printing", "Accessories", "Delivery Location"]} />
          </div>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Example: 2,500 student ID cards + 20 mm lanyards + holders + hooks. IDGen can then determine the
            appropriate configuration and provide a project-specific quotation.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Get your exact IDGen quote"
            body="Send us: Product → Quantity → Specification → Accessories → Delivery Location."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Contact IDGen", href: "/contact-us/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
