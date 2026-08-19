import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Users,
  Factory,
  Hospital,
  HeartHandshake,
  Eye,
  Sparkles,
  ShieldCheck,
  Layers,
  MapPin,
  CheckCircle2,
  Lock,
  ArrowRight
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SpecTable } from "@/components/ui/SpecTable";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Employee ID Card Printing | Custom Company & Staff ID Cards | IDGen",
  description:
    "Custom employee ID card printing for companies, offices, industries, hospitals and organizations. Personalized staff cards, bulk printing, QR/barcode options and complete ID card setups by IDGen.",
  path: "/employee-id-card-printing/",
});

const solutions = [
  { icon: Building2, title: "Corporate Workforces & Tech Parks", body: "Executive access credentials with employee photos, designation, department color banners, and smart RFID turnstile integration." },
  { icon: Hospital, title: "Hospitals & Healthcare Networks", body: "Sterile, anti-microbial card holders with high-contrast blood group markers, doctor accreditations, and staff access tiers." },
  { icon: Factory, title: "Manufacturing & Industrial Plants", body: "Heavy-duty 30-mil PVC cards with ultrasonic welded lanyard ribbons built to resist grease, moisture, and high tensile pull." },
  { icon: Users, title: "Government & Public Sector", body: "High-security departmental credentials featuring microtext, guilloche patterns, and tamper-evident holographic overlays." },
  { icon: HeartHandshake, title: "NGOs, Trusts & Field Teams", body: "Durable identification for distributed field personnel, volunteers, and multi-branch organizational staff." },
];

const corporateDeliveries = [
  { name: "Government of Assam Nagaon", sector: "Public Sector", img: "/images/Order Deliver/Government of assam,nagoan 1.jpeg" },
  { name: "Non Stop GHY", sector: "Commercial Enterprise", img: "/images/Order Deliver/NON STOP 1.png" },
  { name: "My Sarah Healthcare", sector: "Healthcare & Clinics", img: "/images/Order Deliver/MY SARAH,JORHAT 1.png" },
  { name: "TMPK Dhemaji Staff", sector: "Regional Organization", img: "/images/Order Deliver/Takam Mising Porin Kebang(TMPK),           Dhemaji 1.png" },
];

const orderSteps = [
  { title: "Consultation & Spec Selection", body: "Define card thickness, RFID frequency, lanyard width (16/20mm), and holder type." },
  { title: "Staff Roster Data Ingestion", body: "Upload employee names, employee IDs, designations, and blood groups via Excel or IDGen Studio." },
  { title: "Corporate Branding Proofs", body: "Our design team aligns exact Pantone corporate brand colors and renders digital sample cards." },
  { title: "HR Administrator Approval", body: "Authorized administrator signs off on the digital roster proof before factory printing starts." },
  { title: "Retransfer Printing & Encoding", body: "300 DPI edge-to-edge thermal retransfer printing and contactless chip programming." },
  { title: "Hardware Assembly & Quality Inspection", body: "Cards matched with custom corporate lanyards and checked against optical scan standards." },
  { title: "Secure Direct Dispatch", body: "Department-sorted packages dispatched with trackable regional express transit." },
];

const whyChoose = [
  { icon: Users, title: "Executive-Grade Finish", body: "Available in ultra-gloss, velvet matte, and frosted surfaces for a prestigious corporate identity." },
  { icon: Layers, title: "Smart Access Integration", body: "Compatible with HID, Mifare, and standard 125 kHz door access turnstiles and biometric time clocks." },
  { icon: Eye, title: "Zero Minimum Reorder", body: "Easily order 1 to 5 replacement cards for new hires at existing bulk contract rates." },
  { icon: ShieldCheck, title: "Data Privacy & NDA Protection", body: "Employee personal data is treated with strict confidentiality and purged post-production." },
  { icon: Building2, title: "Complete Wearable Sets", body: "Cards arrive pre-assembled inside holders with matching satin lanyards attached." },
  { icon: Sparkles, title: "IDGen Studio HR Portal", body: "Self-service onboarding portal for new employee photo submission and ID approvals." },
];

const faqs: Faq[] = [
  { q: "Can our employee ID cards integrate with our office door access system?", a: "Yes. We supply and encode standard 13.56 MHz (Mifare 1k/4k, DESFire, NTAG) and 125 kHz EM4100 RFID proximity cards compatible with leading biometric access turnstiles." },
  { q: "How do we handle new joiners throughout the year?", a: "With IDGen's Zero-Minimum Reorder program, your HR team can order single replacement or new joiner cards anytime without paying small-batch penalty fees." },
  { q: "What security features can be added to prevent forgery?", a: "We provide custom holographic hot-stamping foils, UV watermarks, QR verification codes, and guilloche security patterns." },
  { q: "Can lanyards be printed with our custom corporate logo?", a: "Yes. We manufacture full-color dye-sublimated satin lanyards in 16mm and 20mm widths with crisp, edge-to-edge logo printing." },
];

export default function EmployeeIdCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Employee ID Card Printing",
          description: "Custom employee ID card printing for companies, offices, institutions, hospitals, industries and organizations.",
          path: "/employee-id-card-printing/",
        })}
      />
      
      <PageHero
        eyebrow="Corporate & Enterprise Identity"
        icon={Building2}
        title="Custom Employee ID Cards & Corporate Access Credentials"
        lede="Elevate your corporate brand and secure your workplace with high-definition thermal retransfer employee badges, RFID smart cards, and custom satin lanyards manufactured in Guwahati."
        stats={[
          { label: "Durability", value: "5+ Years Anti-Fade" },
          { label: "RFID Options", value: "13.56MHz & 125kHz" },
          { label: "Reorders", value: "Zero Minimum" },
          { label: "Delivery", value: "Guwahati Hub Dispatch" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Corporate Staff ID Delivery */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/High-quality Employee ID Cards and Staff Identity Cards delivered to clients in Guwahati and Assam.jpg"
                  alt="High-quality Employee ID Cards and Staff Identity Cards delivered in Assam"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Corporate Specimen</span>
                </div>
              </div>

              {/* Overlapping Staff Card */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Order Deliver/Government of assam,nagoan 1.jpeg"
                  alt="Government and Public Sector ID Credential"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Lanyard Hardware Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 17 .jpg"
                  alt="Executive Lanyard Swivel Hook"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Employee ID Card Printing", path: "/employee-id-card-printing/" }]} />

        {/* Corporate Delivered Showcase Gallery */}
        <div className="mt-8">
          <SectionHead
            eyebrow="Enterprise Proof"
            title="Trusted by Corporate Hubs, Hospitals & Government Bodies"
            lede="From Assam state departments to private clinics and industrial tech centers, IDGen delivers flawless credentials with prompt turnarounds."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {corporateDeliveries.map((c) => (
              <div key={c.name} className="group overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm transition hover:shadow-xl hover:border-accent/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 img-shine">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    className="img-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-bold text-slate-200 backdrop-blur-md">
                    {c.sector}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-sm">{c.name}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-500 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Delivered Order</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sector Solutions */}
        <div className="mt-20">
          <SectionHead eyebrow="Workforce Verticals" title="Custom ID Frameworks for Every Industry" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <FeatureCard key={s.title} icon={s.icon} title={s.title} body={s.body} />
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-20">
          <SectionHead eyebrow="Seamless Ordering" title="How We Handle Corporate Card Production" />
          <div className="mt-8">
            <WorkflowSteps steps={orderSteps} />
          </div>
        </div>

        {/* Why Choose IDGen */}
        <div className="mt-20">
          <SectionHead eyebrow="The IDGen Advantage" title="Enterprise-Grade Reliability & Security" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} body={w.body} />
            ))}
          </div>
        </div>

        {/* Security & Access Feature Callout */}
        <div className="mt-20 rounded-3xl border border-surface-border bg-surface p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase mb-2">
                <Lock className="h-4 w-4" />
                <span>Turnstile & Door Access Ready</span>
              </span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
                RFID & NFC Chip Integration for Automated Attendance
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted max-w-2xl">
                We embed standard 13.56 MHz (Mifare 1k/4k, DESFire EV2/EV3, NTAG) and 125 kHz contactless microchips directly beneath the solid PVC layer, pre-tested to guarantee 100% read rates on your access readers.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/rfid-card-printing/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-slate-950 shadow transition hover:bg-accent-hover hover:text-white"
              >
                <span>Explore RFID Smart Cards</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About Corporate ID Cards" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Upgrade your organization's employee credentials"
            body="Submit your staff volume for an instant formal quote, free sample kit, and dedicated onboarding with an IDGen account manager."
            links={[
              { label: "Request Employee ID Quote", href: "/request-a-quote/", primary: true },
              { label: "Custom Printed Lanyards", href: "/custom-printed-lanyard-printing/" },
              { label: "View Pricing Tiers", href: "/pricing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
