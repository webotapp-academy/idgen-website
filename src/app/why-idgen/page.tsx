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
  ArrowRight,
  Factory,
  Camera,
  Cpu
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
      
      {/* 
        HERO SECTION 
        Adding a rich visual right side using real factory images.
      */}
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
        visual={
          <div className="relative h-[450px] w-full mt-8 lg:mt-0">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full mix-blend-screen" />
            
            {/* Image Composition */}
            <div className="relative h-full w-full">
              {/* Main Image: Factory Equipment */}
              <div className="absolute top-0 right-4 h-64 w-[70%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:z-30 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/IMG20250321154119.jpg"
                  alt="IDGen High-Speed Retransfer Card Printing Equipment"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/60" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">Live Production</span>
                </div>
              </div>

              {/* Overlapping Image 1: ID Card Specimen */}
              <div className="absolute bottom-10 left-0 h-56 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Sample Photos/school-student-pvc-id-card-idgen.jpg.png"
                  alt="High Definition 300 DPI PVC ID Card by IDGen"
                  fill
                  className="object-cover object-left-top"
                />
              </div>

              {/* Overlapping Image 2: Lanyards & Accessories */}
              <div className="absolute bottom-0 right-8 h-40 w-40 rounded-full overflow-hidden border-[6px] border-[#0B1320] shadow-2xl z-30 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 1.jpeg"
                  alt="Custom Satin Dye-Sublimation Lanyards"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Why IDGen", path: "/why-idgen/" }]} />

        {/* Factory Facility Showcase Banner - Upgraded Design */}
        <div className="mt-8">
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-surface-border bg-slate-950 p-2 sm:p-3 shadow-2xl">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] img-shine">
              <Image
                src="/images/ID Card Full Set Samples/IMG20250321153934.jpg"
                alt="IDGen Guwahati Production Facility - Precision Identity Manufacturing"
                fill
                priority
                className="img-zoom object-cover object-center"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-emerald-300 backdrop-blur-md mb-4">
                    <Factory className="h-3.5 w-3.5" />
                    <span>Guwahati Central Facility</span>
                  </span>
                  <h2 className="text-2xl font-black sm:text-4xl lg:text-5xl text-white leading-tight">
                    Direct-From-Manufacturer Quality.<br />Zero Middleman Delays.
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl">
                    Located in Assam, our automated facility cuts delivery times across the Northeast from weeks to just 48 hours, operating with industrial precision.
                  </p>
                </div>
                
                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href="/request-a-quote/"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-accent-hover hover:text-white hover:-translate-y-0.5"
                  >
                    <span>Request Factory Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="mt-20 lg:mt-28">
          <SectionHead
            eyebrow="The IDGen Difference"
            title="Why Institutional Leaders Choose IDGen"
            lede="From K-12 school boards and universities to high-security corporate tech hubs, we deliver unmatched speed, accuracy, and durability."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} body={w.body} />
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mt-20 lg:mt-28 rounded-3xl border border-surface-border bg-surface py-12 sm:py-16 px-6 sm:px-10 shadow-sm">
          <div className="mx-auto max-w-6xl">
            <SectionHead align="center" eyebrow="Our Track Record" title="More Than a Decade of Identity Engineering" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-[1.65rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" />
              
              {journey.map((j, idx) => (
                <div key={j.year} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-surface bg-background shadow-lg shadow-black/5 transition-transform duration-300 group-hover:scale-110 group-hover:border-accent">
                    <span className="font-mono text-sm font-extrabold text-accent">{j.year}</span>
                  </div>
                  <h3 className="mt-5 font-bold text-foreground text-base">{j.label}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted max-w-[200px]">{j.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6-Point Quality Assurance Pipeline */}
        <div className="mt-20 lg:mt-28 relative overflow-hidden rounded-[2.5rem] border border-surface-border bg-background p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <ShieldCheck className="w-96 h-96 text-accent" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase mb-4">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Quality Assurance</span>
            </div>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight">
              Our 6-Stage Zero-Defect Inspection Pipeline
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Every production batch undergoes strict electronic and optical validation before packing. We don't just print — we verify.
            </p>

            <div className="mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {qualityCheckpoints.map((qc, i) => {
                const Icon = qc.icon;
                return (
                  <div key={qc.title} className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-10">
                      <span className="text-8xl font-black font-mono">{i + 1}</span>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 transition-colors group-hover:bg-accent group-hover:text-slate-950">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm relative z-10">{qc.title}</h3>
                    <p className="mt-2 text-xs text-muted leading-relaxed relative z-10">{qc.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Commitments Matrix & Visual Mix */}
        <div className="mt-20 lg:mt-28 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHead eyebrow="Our Promise" title="What We Hold Ourselves Accountable To" />
            <div className="mt-8 space-y-3">
              {commitments.map(([label, body]) => (
                <div key={label} className="group rounded-2xl border border-surface-border bg-surface p-4 transition-all hover:border-accent/30 flex gap-4 items-start">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{label}</h3>
                    <p className="mt-1 text-xs text-muted leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-[2rem] border border-surface-border overflow-hidden bg-slate-900 img-shine">
            <Image
              src="/images/ID Card Full Set Samples/Sample 1.jpeg"
              alt="IDGen High Quality Deliverables"
              fill
              className="object-cover img-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-bold text-white mb-3">
                <Camera className="h-3.5 w-3.5" />
                <span>Real Delivered Product</span>
              </div>
              <h3 className="text-xl font-bold text-white">Guaranteed Durability & Vivid Colors</h3>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 lg:mt-28">
          <SectionHead align="center" eyebrow="FAQ" title="Frequently Asked Questions About IDGen" />
          <div className="mt-10 max-w-3xl mx-auto">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-20 lg:mt-28">
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
