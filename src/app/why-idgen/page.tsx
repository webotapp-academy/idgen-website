import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  Award,
  Eye,
  PackageCheck,
  CheckCircle2,
  Zap,
  MapPin,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema-org";
import { SITE } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Why Choose IDGen | Direct ID Card Factory Experience Since 2014",
  description:
    "Discover IDGen, a Guwahati-based identity solutions company built on ID card printing experience since 2014, serving organizations across Assam and Northeast India.",
  path: "/why-idgen/",
});

const journey = [
  { year: "2014", label: "Identification Hub Founded", body: "Our operations in institutional ID card printing and identification accessory supply began in Guwahati." },
  { year: "2018", label: "RFID & Sublimation Line", body: "Expanded into direct dye-sublimation lanyard printing and 13.56 MHz RFID/NFC encoding equipment." },
  { year: "2023", label: "Ultrasonic Sealing Integration", body: "Added precision acoustic bonding to manufacture hermetically sealed, tear-proof lanyard loops." },
  { year: "Today", label: "IDGen Cloud + Factory Ecosystem", body: "Uniting cloud data collection (IDGen Studio), direct thermal printing, and 48-hour Northeast dispatch." },
];

const whyChoose = [
  { icon: Award, title: "Identity-Focused Specialization", body: "We don't print generic brochures or signage — 100% of our equipment is dedicated to cards, lanyards, and credentials." },
  { icon: Layers, title: "12+ Years Manufacturing Experience", body: "Over a decade of practical experience supplying schools, universities, hospitals, and corporate clients across Northeast India." },
  { icon: MapPin, title: "Guwahati Production Facility", body: "Direct factory hub in Assam guarantees rapid transit and local technical support without Delhi/Mumbai delays." },
  { icon: Workflow, title: "Zero-Error Digital Flow", body: "IDGen Studio catches data typos, missing images, and misalignment before any physical card is printed." },
  { icon: Zap, title: "10,000+ IDs / Day Scalability", body: "High-capacity automated thermal retransfer and ultrasonic welding lines designed for massive institutional intakes." },
  { icon: PackageCheck, title: "Complete Ready-to-Wear Sets", body: "Pre-assembled in sequence: cards inserted into holders, hooks attached, and lanyards sealed for instant handover." },
];

const qualityCheckpoints = [
  { icon: Eye, title: "1. Color & Resolution Calibration", body: "300 DPI edge-to-edge thermal retransfer checked against Pantone brand guidelines." },
  { icon: CheckCircle2, title: "2. Biometric Data Verification", body: "Names, admission/employee IDs, and blood groups verified against approved roster logs." },
  { icon: ShieldCheck, title: "3. RFID Frequency & Sector Test", body: "100% contactless chip ping test to ensure zero dead chips before packaging." },
  { icon: PackageCheck, title: "4. Ultrasonic Seam Tension Test", body: "Lanyard ribbon loops tested to withstand 18 kg of continuous pull resistance." },
  { icon: Layers, title: "5. Sequential Sorting & Packaging", body: "Cards sorted by class, roll number, or department for effortless institutional distribution." },
  { icon: Award, title: "6. Final Dispatch Audit", body: "Quality assurance manager sign-off accompanying every shipped dispatch box." },
];

const commitments = [
  ["Direct Pricing", "Factory-direct rates without middleman or agency markups."],
  ["Rigorous Quality", "Every single RFID chip and barcode is electronically tested."],
  ["Digital Proofing", "Free digital sample PDF proofs provided before physical production."],
  ["Data Privacy", "Student and employee records treated with strict NDA-level confidentiality."],
  ["Reliable Turnaround", "48 to 72-hour standard dispatch commitments honoured."],
  ["Zero Minimum Reorders", "Easily reorder replacement cards for new joiners at existing contract rates."],
];

const faqs: Faq[] = [
  { q: "What makes IDGen different from a local commercial printing shop?", a: "Standard printing shops use simple paper lamination or desktop inkjet printers. IDGen operates high-capacity thermal retransfer ID presses, automated ultrasonic lanyard welders, and RFID encoding machines with dedicated cloud software." },
  { q: "Where is IDGen's direct factory located?", a: "Our production facility is located in Guwahati, Assam, providing direct supply lines to all 8 Northeast Indian states." },
  { q: "Can we order sample kits before committing to a bulk contract?", a: "Yes. We ship physical specimen packages including printed PVC cards, RFID samples, satin lanyards, and crystal holders to institutional procurement officers." },
  { q: "How does IDGen protect student and employee data?", a: "We operate on strict data protection protocols: customer rosters are encrypted, utilized solely for the approved print batch, and permanently expunged upon project completion." },
];

export default function WhyIdgenPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Why IDGen", path: "/why-idgen/" },
        ])}
      />
      <PageHero
        eyebrow="Factory Direct Standards"
        icon={ShieldCheck}
        title="Northeast India's Trusted Identity Infrastructure Partner"
        lede="Built on over a decade of dedicated identification manufacturing experience — combining cloud data management, precision retransfer printing, and automated ultrasonic assembly."
        stats={[
          { label: "Experience", value: `Since ${SITE.foundedYear}` },
          { label: "Daily Output", value: SITE.dailyCapacity },
          { label: "Factory Hub", value: "Guwahati, Assam" },
          { label: "Regional Reach", value: "All 8 NE States" },
        ]}
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Why IDGen", path: "/why-idgen/" }]} />

        {/* Factory Facility Showcase Banner */}
        <div className="mt-8">
          <div className="group relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 sm:p-4 shadow-2xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/factory-production.jpg"
                alt="IDGen Guwahati Production Facility - High-Throughput Card Retransfer & Laser Encoding"
                fill
                priority
                className="img-zoom object-cover object-center"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
                <div>
                  <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950">
                    Guwahati Manufacturing Facility
                  </span>
                  <h2 className="mt-2 text-xl font-extrabold sm:text-2xl text-white">
                    Direct-From-Manufacturer Quality & 10,000+ IDs Daily Output
                  </h2>
                </div>
                <Link
                  href="/request-a-quote/"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-accent-hover hover:text-white"
                >
                  Request Factory Direct Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="mt-16">
          <SectionHead
            eyebrow="The IDGen Difference"
            title="Why Institutional Leaders Choose IDGen"
            lede="From K-12 school boards and universities to high-security corporate tech hubs, we deliver unmatched speed, accuracy, and durability."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} body={w.body} />
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mt-20">
          <SectionHead eyebrow="Our Track Record" title="More Than a Decade of Identity Engineering" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j) => (
              <div key={j.year} className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm">
                <span className="font-mono text-sm font-extrabold text-accent">{j.year}</span>
                <h3 className="mt-3 font-bold text-foreground text-base">{j.label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{j.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6-Point Quality Assurance Pipeline */}
        <div className="mt-20 rounded-3xl border border-surface-border bg-surface p-8 sm:p-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase">
            <ShieldCheck className="h-4 w-4" />
            <span>Quality Assurance</span>
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl">
            Our 6-Stage Zero-Defect Inspection Pipeline
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            Every production batch undergoes strict electronic and optical validation before packing:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qualityCheckpoints.map((qc) => {
              const Icon = qc.icon;
              return (
                <div key={qc.title} className="rounded-2xl border border-surface-border bg-background p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-sm mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{qc.title}</h3>
                  <p className="mt-1 text-xs text-muted leading-relaxed">{qc.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitments Matrix */}
        <div className="mt-20">
          <SectionHead eyebrow="Our Promise" title="What We Hold Ourselves Accountable To" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map(([label, body]) => (
              <div key={label} className="rounded-2xl border border-surface-border bg-surface p-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <h3 className="font-bold text-foreground text-sm">{label}</h3>
                </div>
                <p className="mt-2 text-xs text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About IDGen" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Partner with Northeast India's premier identity manufacturer"
            body="Get in touch with our Guwahati production facility today for custom samples, price estimates, or IDGen Studio onboarding."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "Contact Engineering", href: "/contact-us/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
