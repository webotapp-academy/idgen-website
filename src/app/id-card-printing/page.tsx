import Image from "next/image";
import Link from "next/link";
import {
  IdCard,
  GraduationCap,
  Building2,
  Ticket,
  Radio,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CompareTable } from "@/components/ui/CompareTable";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "ID Card Printing | Custom PVC & Bulk ID Cards | IDGen",
  description:
    "IDGen provides custom PVC ID card printing and bulk personalized ID cards for schools, colleges, companies, hospitals, institutions and events across Assam and Northeast India.",
  path: "/id-card-printing/",
});

const audiences = [
  { icon: GraduationCap, title: "Student ID Cards", body: "High-volume batch identification for schools, colleges, and university campuses.", href: "/student-id-card-printing/" },
  { icon: Building2, title: "Employee & Staff ID Cards", body: "Executive access credentials for corporate enterprises, tech parks, and factories.", href: "/employee-id-card-printing/" },
  { icon: Ticket, title: "VIP Event Credentials", body: "Conferences, exhibitions, workshops, and sports tournament passes.", href: "/event-card-printing/" },
  { icon: Radio, title: "RFID / Smart Cards", body: "13.56 MHz / 125 kHz contactless credentials for door access & turnstiles.", href: "/rfid-card-printing/" },
];

const cardSpecs = [
  { feature: "Standard Dimensions", value: "CR80 85.60 × 53.98 mm (3.370 × 2.125 in)" },
  { feature: "Thickness Grade", value: "30-Mil (0.76 mm) Solid Virgin PVC Core" },
  { feature: "Print Resolution", value: "300 DPI Dye-Sublimation / Thermal Retransfer" },
  { feature: "Surface Finish", value: "Ultra-High Gloss, Matte Satin, or Frosted Velvet" },
  { feature: "Security Overlays", value: "Custom Holographic Foil, UV Watermark, Guilloche Microtext" },
  { feature: "Data Encoding", value: "1D/2D Barcodes, Magnetic Stripe (HiCo), Contactless RFID" },
];

const workflow = [
  { title: "Requirement & Quantity", body: "Card specifications, thickness, orientation, and hardware attachments confirmed." },
  { title: "Data Collection / Import", body: "Rosters and photos uploaded manually or synchronized via IDGen Studio." },
  { title: "Automated Proof Generation", body: "Digital card proofs rendered with exact crop boundaries and font kerning." },
  { title: "Institutional Sign-Off", body: "Client administrator approves the digital proofs before press start." },
  { title: "Thermal Retransfer Printing", body: "Edge-to-edge high-definition color lamination executed on factory presses." },
  { title: "Hardware Assembly & Quality Audit", body: "Cards inserted into holders, paired with lanyards, and electronically scanned." },
  { title: "Guwahati Regional Dispatch", body: "Organized by class/department and dispatched with real-time tracking." },
];

const configRows = [
  ["Basic identification", "CR80 PVC Card Only"],
  ["Protected card", "PVC Card + Hard Acrylic Holder"],
  ["Wearable identification", "PVC Card + Holder + Hook + Printed Lanyard"],
  ["Complete wearable setup", "PVC Card + Ultrasonic Welded Lanyard + Holder + Hook"],
  ["Smart turnstile integration", "Mifare / DESFire RFID Smart Card + Branded Lanyard"],
  ["VIP Summit delegate pass", "Large Format Event Card + Dual-Hook Lanyard"],
];

const deliveredShowcase = [
  { name: "Don Bosco Hr Sec School", state: "Meghalaya & Assam", img: "/images/Order Deliver/Don Bosco Hr Sec School, gojapara 1.png" },
  { name: "CKB College Jorhat", state: "Assam", img: "/images/Order Deliver/CKB COLLAGE,JORHAT 1.png" },
  { name: "DBS Itanagar", state: "Arunachal Pradesh", img: "/images/Order Deliver/DBS ITANAGAR 1.png" },
  { name: "Jorhat Kendriya Vidyalaya", state: "Assam", img: "/images/Order Deliver/Jorhat kendra vidyalaya 1.png" },
];

const faqs: Faq[] = [
  { q: "What printing technology does IDGen use for PVC ID cards?", a: "We use high-definition thermal retransfer and dye-sublimation presses. Unlike cheaper desktop printers, retransfer bonds color beneath a protective clear lamination layer, preventing fading and scratching." },
  { q: "What is the standard size and thickness of an ID card?", a: "We manufacture standard ISO CR80 cards measuring 85.6 × 54 mm with a 30-mil (0.76 mm) thickness — identical to bank credit cards." },
  { q: "Can we order replacement cards for single new joiners throughout the year?", a: "Yes. Our Zero-Minimum Reorder program ensures schools and companies can print 1 to 5 replacement cards at their established contract rate." },
  { q: "How are student photos managed?", a: "Through IDGen Studio, parents or HR staff can upload photos from mobile phones. Our automated system crops and centers portraits to uniform specifications." },
];

export default function IdCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "ID Card Printing",
          description: "Custom PVC ID card printing and bulk personalized ID cards for schools, colleges, companies, hospitals, institutions and events.",
          path: "/id-card-printing/",
        })}
      />
      
      <PageHero
        eyebrow="Direct Factory Production"
        icon={IdCard}
        title="Custom PVC ID Card Printing & Bulk Credential Manufacturing"
        lede="Engineered for universities, hospitals, corporate workforces, and government agencies across Assam and Northeast India. High-definition thermal retransfer printing on premium 30-mil virgin PVC."
        stats={[
          { label: "Card Grade", value: "CR80 30-Mil" },
          { label: "Resolution", value: "300 DPI Retransfer" },
          { label: "Daily Output", value: "10,000+ IDs" },
          { label: "Dispatch", value: "48–72h Turnaround" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary PVC Card Sample */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/PVC Cards Samples/Sample 1.jpg"
                  alt="High Definition 30-Mil CR80 PVC ID Card by IDGen"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">CR80 Solid Core</span>
                </div>
              </div>

              {/* Overlapping Institutional Card */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Order Deliver/CKB COLLAGE,JORHAT 1.png"
                  alt="Delivered Institutional College ID Card"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Factory Press Badge */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/IMG20250321154119.jpg"
                  alt="Live Factory Retransfer Press"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "ID Card Printing", path: "/id-card-printing/" }]} />

        {/* Product Macro Showcase Banner */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl img-shine">
                <Image
                  src="/images/PVC Cards Samples/Sample 3.jpg"
                  alt="High-Definition 30-Mil CR80 PVC ID Card Specimen with Smart Chip and Hologram"
                  fill
                  priority
                  className="img-zoom object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                    Macro Specimen
                  </span>
                  <p className="text-sm font-bold mt-1">High-Definition Edge-to-Edge Thermal Retransfer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Material Excellence</span>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Solid Virgin PVC Core with Scratch-Resistant Overlaminate
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              Cheap ID cards peel, crack at the edges, and fade under sunlight within months. IDGen cards are manufactured with multi-layer fused PVC sheets, ensuring razor-sharp text, vivid photographic color fidelity, and high resistance to bending and moisture.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-surface-border bg-surface p-3">
                <p className="font-bold text-foreground">Anti-Fade UV Coat</p>
                <p className="text-muted text-[11px] mt-0.5">Retains saturation for 5+ years</p>
              </div>
              <div className="rounded-xl border border-surface-border bg-surface p-3">
                <p className="font-bold text-foreground">Barcodes & QR Codes</p>
                <p className="text-muted text-[11px] mt-0.5">High-contrast optical scanning</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/request-a-quote/" className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 shadow transition hover:bg-accent-hover hover:text-white">
                Request an ID Card Quote
              </Link>
              <Link href="/pricing/" className="rounded-full border border-surface-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
                View Price Calculator
              </Link>
            </div>
          </div>
        </div>

        {/* Real Delivered Client Showcase Gallery */}
        <div className="mt-20">
          <SectionHead
            eyebrow="Proven Deliveries"
            title="Real Cards Dispatched to Institutions Across Northeast India"
            lede="Every year, hundreds of educational institutions and corporate clients trust IDGen for accurate, flaw-free ID printing."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliveredShowcase.map((c) => (
              <div key={c.name} className="group overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm transition hover:shadow-lg hover:border-accent/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    className="img-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-bold text-slate-300 backdrop-blur-md">
                    {c.state}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-sm">{c.name}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-500 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Delivered Batch</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs Table */}
        <div className="mt-20">
          <SectionHead eyebrow="Technical Sheet" title="CR80 PVC ID Card Specifications" />
          <div className="mt-6 overflow-x-auto rounded-2xl border border-surface-border bg-surface shadow-sm">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-surface-border">
                {cardSpecs.map((spec) => (
                  <tr key={spec.feature} className="hover:bg-background/50 transition">
                    <td className="px-6 py-4 font-bold text-foreground w-1/3">{spec.feature}</td>
                    <td className="px-6 py-4 text-muted font-medium">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sector Applications */}
        <div className="mt-20">
          <SectionHead eyebrow="Applications" title="Specialized ID Solutions for Every Organization" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <FeatureCard key={a.title} icon={a.icon} title={a.title} body={a.body} href={a.href} />
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-20">
          <SectionHead eyebrow="Production Process" title="From Approved Roster to Dispatched Batch" />
          <div className="mt-6">
            <WorkflowSteps steps={workflow} />
          </div>
        </div>

        {/* Configurations Comparison */}
        <div className="mt-20">
          <SectionHead eyebrow="Setup Options" title="Choose Your Ideal Package Configuration" />
          <div className="mt-6">
            <CompareTable columns={["Organization Requirement", "Recommended Package Setup"]} rows={configRows} highlightColumn={1} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About ID Card Printing" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Ready to order your ID card batch?"
            body="Submit your approximate volume and artwork requirements to receive a formal quotation and digital PDF sample within 2 business hours."
            links={[
              { label: "Request an ID Card Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore Student ID Cards", href: "/student-id-card-printing/" },
              { label: "Explore Employee ID Cards", href: "/employee-id-card-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
