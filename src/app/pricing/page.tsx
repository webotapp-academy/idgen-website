import Image from "next/image";
import Link from "next/link";
import { IndianRupee, Check, ArrowRight, ShieldCheck, CheckCircle2, Calculator } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { pageMetadata } from "@/lib/metadata";
import { QuoteCalculator } from "@/components/ui/QuoteCalculator";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "ID Card Printing Price & Lanyard Pricing Calculator | IDGen",
  description:
    "Simulate live institutional batch pricing for PVC ID cards, custom printed satin lanyards, RFID cards, and complete wearable ID packages with IDGen's interactive price engine.",
  path: "/pricing/",
});

const quickPricing: string[][] = [
  ["PVC ID Card — Single Side", "₹15 / card"],
  ["PVC ID Card — Double Side", "₹16 / card"],
  ["20 mm Custom Printed Satin Lanyard", "₹14 – ₹15 / piece"],
  ["Complete Wearable ID Kit (Card + Lanyard + Holder + Sealing)", "₹38 – ₹45 / set"],
  ["VIP Large Format Event Pass (with Dual Hooks)", "₹35 – ₹42 / card"],
  ["13.56 MHz Mifare / NFC Smart Access Card", "₹32 – ₹45 / card"],
  ["100% Virgin Polycarbonate Holder (V-1 / H-1)", "₹6 – ₹9 / holder"],
];

const priceFactors = [
  ["Batch Volume", "Tier discounts scale automatically from 500 up to 10,000+ units."],
  ["Thermal Retransfer vs DTC", "Retransfer provides edge-to-edge glossy lamination with zero white borders."],
  ["Smart Chip Protocol", "Standard 125 kHz EM vs 13.56 MHz Mifare Classic/DESFire encryption."],
  ["Hardware Finishing", "Single-hook, dual-hook anti-twist, and 20 kHz ultrasonic welded ribbon loops."],
  ["Data Processing Mode", "Manual Excel import vs automated IDGen Studio biometric photo cropping."],
  ["Guwahati Dispatch", "Standard 48–72h turnaround or expedited 24h express emergency dispatch."],
];

const setupTiers = [
  { name: "CR80 Card Only", price: "From ₹15 / unit", combo: "30-Mil PVC Card", note: "For schools and enterprises that already own lanyards and holders." },
  { name: "Card + Hard Case", price: "From ₹22 / unit", combo: "PVC Card + Polycarbonate Case", note: "Protects magnetic stripes, barcodes, and photos from physical scuffing." },
  { name: "Wearable ID Kit", price: "From ₹35 / unit", combo: "Card + Holder + Hook + Satin Lanyard", note: "The standard complete setup for students, employees, and clinic staff." },
  { name: "Ultrasonic Sealed Set", price: "From ₹42 / unit", combo: "Card + Ultrasonic Sealing + Holder + Hook + Lanyard", note: "Heavy-duty permanent acoustic weld with 18.5 kg pull strength and zero staples." },
];

const faqs: Faq[] = [
  { q: "Are there any hidden plate or artwork setup charges?", a: "No. IDGen charges zero plate, screen, or setup fees on all standard custom lanyard and ID card orders." },
  { q: "Do we get a sample proof before paying for the whole batch?", a: "Yes. Every client receives a complimentary 100% scale digital PDF specimen proof and 3D mockup before production begins." },
  { q: "How do volume tier discounts work?", a: "Batches of 1,000+ units receive ~20% off base pricing, while 5,000+ unit institutional orders receive up to 35% discount with dedicated account management." },
  { q: "What is the turnaround time after approving artwork?", a: "Standard batches of 100 to 2,000 units are manufactured, inspected, and dispatched from Guwahati within 48 to 72 hours." },
];

export default function PricingPage() {
  return (
    <>
      
      <PageHero
        eyebrow="Transparent Pricing"
        icon={IndianRupee}
        title="Direct Factory Pricing & Instant Cost Calculator"
        lede="No guesswork or surprise vendor markups. Calculate dynamic quantity tier discounts, hardware options, and dispatch timelines in real-time."
        stats={[
          { label: "Setup Fee", value: "₹0 (Zero Setup)" },
          { label: "Sample Proof", value: "Complimentary" },
          { label: "Dispatch Window", value: "48–72 Hours" },
          { label: "Volume Discount", value: "Up to 35% OFF" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-emerald-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Pricing Specimen Set */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/Sample 1.jpeg"
                  alt="Complete Wearable ID Card Package Setup"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-emerald-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Factory Direct Tiers</span>
                </div>
              </div>

              {/* Overlapping Lanyard Set */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 1.jpeg"
                  alt="Custom Sublimated 20mm Satin Lanyard"
                  fill
                  className="object-cover"
                />
              </div>

              {/* PVC Card Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/PVC Cards Samples/Sample 1.jpg"
                  alt="30-Mil CR80 Card Specimen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing/" }]} />

        {/* Embedded Interactive Live Quote Calculator */}
        <div className="mt-8">
          <QuoteCalculator />
        </div>

        {/* Standard Package Tiers Grid */}
        <div className="mt-20">
          <SectionHead
            eyebrow="Package Tiers"
            title="Complete Wearable Identification Tiers"
            lede="Choose between individual component supply or fully assembled, ready-to-distribute wearable kits."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {setupTiers.map((tier) => (
              <div key={tier.name} className="flex flex-col justify-between rounded-3xl border border-surface-border bg-surface p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md">
                <div>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
                    {tier.price}
                  </span>
                  <h3 className="mt-4 font-bold text-foreground text-lg">{tier.name}</h3>
                  <p className="mt-1 font-mono text-xs text-accent font-semibold">{tier.combo}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{tier.note}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-border">
                  <Link
                    href="/request-a-quote/"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
                  >
                    <span>Request Tier Quote</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Rate Reference Table */}
        <div className="mt-20">
          <SectionHead eyebrow="Wholesale Matrix" title="Reference Unit Pricing (1,000+ Volume)" />
          <div className="mt-6 overflow-x-auto rounded-2xl border border-surface-border bg-surface shadow-sm">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-surface-border">
                {quickPricing.map(([item, rate]) => (
                  <tr key={item} className="hover:bg-background/50 transition">
                    <td className="px-6 py-4 font-bold text-foreground w-2/3">{item}</td>
                    <td className="px-6 py-4 font-mono font-bold text-emerald-500 text-right">{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Factors Grid */}
        <div className="mt-20">
          <SectionHead eyebrow="Cost Structure" title="Key Factors Influencing Your Quotation" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {priceFactors.map(([label, body]) => (
              <div key={label} className="rounded-2xl border border-surface-border bg-surface p-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <h3 className="font-bold text-foreground text-sm">{label}</h3>
                </div>
                <p className="mt-2 text-xs text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About Pricing & Invoicing" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need an official GST quotation with institutional terms?"
            body="Submit your bill-to entity details for a stamped proforma invoice and specimen kit dispatched in 2 hours."
            links={[
              { label: "Request Formal Quotation", href: "/request-a-quote/", primary: true },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "View Card Products", href: "/products/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
