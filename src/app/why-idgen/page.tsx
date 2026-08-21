import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  Award,
  Eye,
  PackageCheck,
  CheckCircle2,
  MapPin,
  Workflow,
  ArrowRight,
  Building2,
  Database,
  Lock,
  Zap,
  Target,
  ClipboardCheck,
  Printer,
  Wrench,
  Truck,
  LayoutGrid,
  MessageSquare,
  Sparkles,
  Globe2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FaqList } from "@/components/ui/FaqList";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Why Choose IDGen | ID Card Printing Experience Since 2014",
  description:
    "Discover IDGen, a Guwahati-based identity solutions company built on ID card printing experience since 2014, serving organizations across Assam and Northeast India.",
  path: "/why-idgen/",
});

const journey = [
  { year: "2014", label: "Identification Experience Begins", body: "Identification-product experience begins." },
  { year: "2014–2025", label: "Regional Experience", body: "ID card printing and identification-product supply across Northeast India." },
  { year: "2026", label: "IDGen Identity Solutions", body: "IDGen Identity Solutions." },
  { year: "Today", label: "Products + Digital Workflow + Structured Production", body: "IDGen represents the next stage of that journey." },
];

const whyChoose = [
  { icon: Target, title: "Identity-Focused", body: "IDGen is focused specifically on identification products and identification workflows." },
  { icon: Award, title: "Experience Since 2014", body: "Our identification-product experience dates back to 2014, giving us more than a decade of practical experience in this field." },
  { icon: MapPin, title: "Northeast India Experience", body: "We have experience supplying identification products to customers across the Northeast India market." },
  { icon: Workflow, title: "Structured Workflow", body: "Projects can follow a defined process from requirement through dispatch." },
  { icon: Layers, title: "Digital + Physical Workflow", body: "IDGen Studio connects digital data collection and approval with physical identification production." },
  { icon: Zap, title: "Bulk Capability", body: "Our production operation supports institutional and high-volume requirements." },
  { icon: PackageCheck, title: "Complete Identification Ecosystem", body: "Organizations can coordinate the relevant identification products and accessories required for their application." },
  { icon: Lock, title: "Data Confidentiality", body: "Your identification data is treated as confidential project information and handled for the agreed identification-related purpose." },
];

const productionSteps = [
  { num: "01", icon: ClipboardCheck, title: "Requirement", body: "We understand the required: Product, Quantity, Specifications, Personalization, Accessories, Delivery requirements." },
  { num: "02", icon: Database, title: "Data", body: "For personalized projects, the required information and photographs are prepared. IDGen Studio can support digital data collection." },
  { num: "03", icon: LayoutGrid, title: "Design", body: "Artwork and personalization are prepared according to the project requirements." },
  { num: "04", icon: Eye, title: "Preview", body: "Where applicable, the customer or organization can review the design and personalized information before production." },
  { num: "05", icon: CheckCircle2, title: "Approval", body: "Approved information and specifications are released for production." },
  { num: "06", icon: Printer, title: "Production", body: "The project moves into production according to the confirmed specifications." },
  { num: "07", icon: Wrench, title: "Assembly", body: "Where required, relevant components are assembled according to the selected configuration." },
  { num: "08", icon: ShieldCheck, title: "Quality Check", body: "Completed products are checked against the approved requirements." },
  { num: "09", icon: Truck, title: "Dispatch", body: "Completed and approved products are prepared for dispatch according to the applicable order timeline." },
];

const qualityCheckpoints = [
  { icon: LayoutGrid, title: "Design Check", body: "Artwork is checked against the approved requirements." },
  { icon: Database, title: "Data Check", body: "Personalized information is processed according to the supplied or approved data." },
  { icon: ClipboardCheck, title: "Specification Check", body: "Product specifications and required components are checked against the order." },
  { icon: Printer, title: "Production Check", body: "Completed products are checked during the production workflow." },
  { icon: Wrench, title: "Assembly Check", body: "Where applicable, the required combination of components is checked." },
  { icon: PackageCheck, title: "Final Check", body: "Completed materials are checked before dispatch. Our objective is to identify avoidable errors before the finished products reach the customer." },
];

const commitments = [
  { label: "Clear", body: "Customers should understand what they are ordering." },
  { label: "Organized", body: "Large projects should follow a structured workflow." },
  { label: "Reviewable", body: "Important information should be reviewed before production where applicable." },
  { label: "Accurate", body: "Products should follow approved information and specifications." },
  { label: "Scalable", body: "The workflow should support organizational and bulk requirements." },
  { label: "Practical", body: "The solution should match the actual application." },
  { label: "Confidential", body: "Customer-provided identification information should be treated as confidential project information." },
  { label: "Transparent", body: "Capabilities and timelines should be communicated realistically." },
];

const whoWeServe = [
  "Schools", "Colleges", "Universities", "Companies", "Corporate Offices",
  "Hospitals", "Industries", "Government Organizations", "NGOs",
  "Institutions", "Clubs", "Associations", "Events", "Membership Organizations",
];

const faqs: Faq[] = [
  { q: "What is IDGen?", a: "IDGen is a Guwahati-based identity solutions company providing identification products, customization and related digital and production workflows for organizations." },
  { q: "How long has IDGen been in the ID card business?", a: "The identification-product experience behind IDGen dates back to 2014. IDGen is the newer identity-focused brand built on that experience." },
  { q: "Has IDGen served customers across Northeast India?", a: "Yes. Our identification-product business has experience supplying customers and organizations across the Northeast India market." },
  { q: "Where is IDGen based?", a: "IDGen is based in Guwahati, Assam, India." },
  { q: "What does IDGen provide?", a: "IDGen provides identification products and services including ID card printing, student and employee identification, event cards, RFID cards, custom printed lanyards, holders, hooks, ultrasonic sealing and related workflows. Detailed product information is available on the relevant service pages." },
  { q: "Can IDGen handle bulk orders?", a: "Yes. IDGen supports organizational and high-volume identification requirements. Actual capacity depends on the product and project specifications." },
  { q: "Does IDGen provide digital data collection?", a: "Yes. IDGen Studio provides a digital workflow for suitable projects, including customized forms, link and QR-code sharing, data collection, ID card preview, organization review and approval." },
  { q: "Can ID cards be printed batch-wise?", a: "Yes. Suitable IDGen Studio projects can release approved records for batch-wise production." },
  { q: "How does IDGen handle student and employee data?", a: "IDGen treats customer-provided identification information as confidential project information and uses it for the agreed identification-related purpose. Organizations should provide only the information required for their project and follow their applicable privacy and data-handling policies." },
  { q: "Does IDGen manufacture every product in-house?", a: "No blanket in-house manufacturing claim is made for every product. Production methods vary by product and project. IDGen manages the required customization, production workflow, assembly and quality requirements according to the agreed specification." },
  { q: "What areas does IDGen serve?", a: "IDGen is based in Guwahati and serves organizations across Assam and the wider Northeast India market." },
];

const neStates = ["Assam", "Arunachal Pradesh", "Meghalaya", "Nagaland", "Manipur", "Mizoram", "Tripura", "Sikkim"];
const futureItems = ["Digital data collection", "Online workflows", "Faster approvals", "Better data organization", "ID card preview", "Batch-wise production", "Faster distribution", "Integrated identification products"];
const projectItems = ["Personal information", "Photographs", "Card design", "Personalization", "Large quantities", "Data checking", "Product specifications", "Accessories", "Approval", "Production", "Assembly", "Quality checking", "Packaging", "Dispatch"];
const qualityErrors = ["The name is incorrect", "The photograph is mismatched", "The ID number is wrong", "The department is incorrect", "The designation is incorrect", "Required information is missing", "The wrong specification is used", "The required accessory is missing"];
const dataItems = ["Student names", "Employee names", "Photographs", "Student or employee ID numbers", "Classes / Courses", "Departments", "Designations", "Organization information", "QR-code information", "Barcode information", "Other personalization details"];
const dashboardActions = ["View submitted forms", "Track how many people have completed the form", "Review information", "Edit information where required", "Approve individual records", "Approve batches", "Release all approved records together"];
const responsiblePractices = ["Share only information required for the project", "Use authorized personnel for data submission and approval", "Review information before production", "Avoid unnecessary personal information", "Maintain appropriate access controls within their organization", "Follow their applicable privacy and data-handling policies"];

export default function WhyIdgenPage() {
  const approachSteps = ["Requirement", "Data", "Design", "Preview", "Approval", "Production", "Quality Check", "Dispatch"];
  return (
    <>
      {/* ─── PREMIUM HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#020A18]">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/why-idgen-hero-premium.jpg"
            alt="IDGen premium ID cards and lanyards"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020A18] via-[#020A18]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020A18] via-transparent to-[#020A18]/60" />
        </div>

        {/* Animated grid + glow */}
        <div className="hero-grid-pattern absolute inset-0 opacity-[0.07] z-0 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/8 blur-[140px] rounded-full z-0 pointer-events-none" />

        <Container className="relative z-10 py-28 lg:py-36">
          <div className="max-w-3xl space-y-7">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-500/10 backdrop-blur-md px-5 py-2 text-xs font-bold text-cyan-300 uppercase tracking-[0.2em]">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Identity Solutions Simplified</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                IDGen?
              </span>
            </h1>

            <p className="text-xl font-semibold text-cyan-200/90">Built on Identification Experience Dating Back to 2014</p>

            <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed max-w-2xl">
              IDGen is a Guwahati-based identity solutions company serving organizations across Assam and the wider Northeast India market. Our experience in ID card printing, identification products and organizational supply dates back to 2014.
            </p>

            {/* Approach flow */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3">Our Approach</p>
              <div className="flex flex-wrap items-center gap-1.5">
                {approachSteps.map((step, i, arr) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <span className="rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm">
                      {step}
                    </span>
                    {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-cyan-600" />}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-400/80 italic">Our goal is simple: make identification projects easier to plan, manage and complete.</p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/request-a-quote/"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-3.5 text-sm font-bold text-white shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-500/50 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-cyan-400/50 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </Container>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </section>

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Why IDGen", path: "/why-idgen/" }]} />

        {/* ─── MORE THAN A NEW BRAND + SERVING NE INDIA ─── */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left — experience text */}
          <div className="relative">
            <div className="sticky top-8">
              <span className="inline-block text-xs font-bold tracking-[0.18em] text-accent uppercase mb-3">Experience Since 2014</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                More Than a New Brand
              </h2>
              <div className="mt-5 space-y-3 text-sm text-muted leading-relaxed">
                <p>While IDGen is the new identity-focused brand, our experience in ID card printing and identification-product supply dates back to 2014.</p>
                <p>For more than a decade, our work has involved identification requirements for organizations and customers across Northeast India.</p>
                <p>This experience has taught us that an identification project is rarely just about printing a card.</p>
                <p className="font-bold text-foreground text-sm pt-1">It can involve:</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {projectItems.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted leading-relaxed">IDGen brings this practical experience into a more structured identity-solutions workflow.</p>
            </div>
          </div>

          {/* Right — NE India + Journey */}
          <div className="space-y-5">
            {/* NE India */}
            <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-surface p-7 shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <span className="text-xs font-bold tracking-[0.18em] text-accent uppercase">Serving Northeast India</span>
              <h3 className="mt-2 text-xl font-extrabold text-foreground">Regional Identification Experience</h3>
              <p className="mt-3 text-xs text-muted leading-relaxed">Our identification-product experience has been developed through serving customers across the Northeast India market. IDGen is based in Guwahati, Assam, providing a central base for serving organizations across the region.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {neStates.map((state) => (
                  <span key={state} className="rounded-full bg-accent/10 text-accent border border-accent/20 px-3 py-1 text-[10px] font-bold">
                    {state}
                  </span>
                ))}
              </div>
            </div>

            {/* Journey Timeline — premium card */}
            <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-surface p-7 shadow-xl">
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-6">Our Journey</p>
              <div className="relative space-y-0">
                {/* vertical line */}
                <div className="absolute left-[1.65rem] top-8 bottom-8 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />
                {journey.map((j, idx) => (
                  <div key={j.year} className="relative flex gap-5 pb-7 last:pb-0">
                    <div className="flex h-[3.3rem] w-[3.3rem] shrink-0 items-center justify-center rounded-2xl border-2 border-accent/30 bg-accent/10 backdrop-blur-sm z-10">
                      <span className="font-mono text-[8px] font-black text-accent leading-tight text-center px-0.5">{j.year}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-bold text-foreground leading-snug">{j.label}</p>
                      <p className="text-xs text-muted mt-0.5">{j.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted pl-[4.3rem] italic">IDGen represents the next stage of that journey.</p>
            </div>
          </div>
        </div>

        {/* ─── WHY CHOOSE IDGEN — 8 PILLARS ─── */}
        <div className="mt-24 lg:mt-32">
          <SectionHead
            eyebrow="Why Choose IDGen"
            title="Choosing an Identification Supplier Is Not Only About Finding Someone Who Can Print a Card"
            lede="For an organization, the real requirement may be: Data → Design → Personalization → Approval → Production → Accessories → Quality → Delivery. IDGen is built around this broader requirement."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} body={w.body} />
            ))}
          </div>
        </div>

        {/* ─── DATA CONFIDENTIALITY ─── */}
        <div className="mt-24 lg:mt-32">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-surface-border bg-surface shadow-2xl">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-0">
              <div className="p-8 sm:p-12 lg:p-14">
                <span className="text-xs font-bold tracking-[0.18em] text-accent uppercase">Data Confidentiality &amp; Responsible Handling</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">Your Identification Data Deserves Care</h2>
                <div className="mt-5 space-y-3 text-sm text-muted leading-relaxed">
                  <p>ID card projects require organizations to share personal information such as student names, employee names, photographs, identification numbers, departments, designations and other information required for personalization.</p>
                  <p>We understand that this information belongs to the organization and the individuals being identified.</p>
                  <p>At IDGen, we treat customer-provided identification data as confidential project information and handle it for the agreed identification-related purpose.</p>
                </div>
                <div className="mt-6 rounded-2xl border border-surface-border bg-background/50 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-4">What Information May Be Provided?</p>
                  <div className="grid grid-cols-2 gap-2">
                    {dataItems.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-muted">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-muted/70 italic">Only information required for the identification project should be provided.</p>
                </div>
                <p className="mt-4 text-xs text-muted leading-relaxed">We do not need student or employee identification information for unrelated marketing purposes.</p>
              </div>

              <div className="p-8 sm:p-10 lg:p-14 flex flex-col gap-5 border-t lg:border-t-0 lg:border-l border-surface-border">
                {/* IDGen Studio data section */}
                <div className="rounded-2xl border border-surface-border bg-background/60 p-5 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-cyan-500/20 text-accent border border-accent/20">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">Data Confidentiality in IDGen Studio</h3>
                      <p className="mt-2 text-xs text-muted leading-relaxed">When organizations use IDGen Studio, authorized users create a customized form and generate a link or QR code. Submitted information forms part of the organization&apos;s identification project, and authorized users can review and manage submissions before releasing for production.</p>
                      <div className="mt-3 flex flex-wrap items-center gap-1">
                        {["Customized Form", "Link / QR Code", "Data + Photo", "Preview", "Submission", "Review", "Approval", "Production"].map((s, i, arr) => (
                          <span key={s} className="flex items-center gap-1">
                            <span className="rounded bg-accent/10 text-accent px-1.5 py-0.5 text-[9px] font-bold border border-accent/15">{s}</span>
                            {i < arr.length - 1 && <ArrowRight className="h-2.5 w-2.5 text-muted" />}
                          </span>
                        ))}
                      </div>
                      <Link href="/idgen-studio/" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline">Explore IDGen Studio <ArrowRight className="h-3 w-3" /></Link>
                    </div>
                  </div>
                </div>

                {/* Responsible practices */}
                <div className="rounded-2xl border border-surface-border bg-background/60 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">Responsible Data Practices</p>
                  <ul className="space-y-2">
                    {responsiblePractices.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-muted/70 leading-relaxed">IDGen&apos;s role is to support the identification-production workflow while treating information provided for that workflow with confidentiality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── ONE IDENTITY PARTNER ─── */}
        <div className="mt-24 lg:mt-32 rounded-3xl border border-surface-border bg-surface p-8 sm:p-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.18em] text-accent uppercase">One Identity Partner</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">An Identification Project Can Require Several Connected Products</h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">Instead of treating every component as a completely separate requirement, IDGen can coordinate the relevant products according to the application.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Standard Configuration", flow: ["ID Card", "Holder", "Hook", "Lanyard"] },
              { label: "With Sealing", flow: ["ID Card", "Sealing", "Holder", "Hook", "Lanyard"] },
            ].map((cfg) => (
              <div key={cfg.label} className="group rounded-2xl border border-surface-border bg-background p-5 hover:border-accent/30 transition-colors">
                <p className="text-xs font-bold text-accent mb-4">{cfg.label}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {cfg.flow.map((s, i, arr) => (
                    <span key={s} className="flex items-center gap-2">
                      <span className="rounded-xl bg-accent/10 text-accent border border-accent/20 px-3 py-1.5 text-xs font-semibold">{s}</span>
                      {i < arr.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-muted" />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted">The exact configuration depends on the application. For detailed specifications, visit the relevant service page.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { label: "ID Card Printing", href: "/id-card-printing/" },
              { label: "Custom Printed Lanyards", href: "/custom-printed-lanyard-printing/" },
              { label: "Event Card Printing", href: "/event-card-printing/" },
              { label: "RFID Card Printing", href: "/rfid-card-printing/" },
              { label: "ID Card Holders", href: "/id-card-holders/" },
              { label: "ID Card Hooks", href: "/id-card-hooks/" },
              { label: "Ultrasonic Sealing", href: "/ultrasonic-sealing/" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="inline-flex items-center gap-1 rounded-full border border-surface-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground hover:border-accent/40 hover:text-accent transition-colors">
                {label} <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>

        {/* ─── PRODUCTION APPROACH — full-bleed image + 9 steps ─── */}
        <div className="mt-24 lg:mt-32">
          {/* Image banner */}
          <div className="relative overflow-hidden rounded-3xl h-56 sm:h-72 lg:h-80 mb-10 border border-surface-border shadow-2xl">
            <Image
              src="/images/why-idgen-production-quality.jpg"
              alt="IDGen ID card production and quality checking in batches"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020A18]/90 via-[#020A18]/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12">
              <span className="text-xs font-bold tracking-[0.18em] text-cyan-400 uppercase mb-2">Our Production Approach</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-lg">
                From Requirement to Finished Identification Product
              </h2>
              <p className="mt-3 text-sm text-slate-300 max-w-md">We use a structured approach to keep personalized and bulk projects organized.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productionSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/5">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.04] group-hover:opacity-[0.09] transition-opacity duration-300">
                    <span className="text-7xl font-black font-mono leading-none">{step.num}</span>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-cyan-500/15 text-accent mb-5 border border-accent/20 transition-all group-hover:from-accent group-hover:to-cyan-500 group-hover:text-white group-hover:border-transparent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-extrabold text-foreground text-sm relative z-10">{step.num} — {step.title}</h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed relative z-10">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── QUALITY ASSURANCE ─── */}
        <div className="mt-24 lg:mt-32 relative overflow-hidden rounded-[2.5rem] border border-surface-border bg-background p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <ShieldCheck className="w-[28rem] h-[28rem] text-accent" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-bold text-accent uppercase tracking-[0.15em] mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>Quality Assurance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Quality Is More Than How a Card Looks</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">For personalized identification products, physical print quality is only one part of the result. A card can look visually good and still be unusable if:</p>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-3xl">
              {qualityErrors.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-muted bg-red-500/5 border border-red-500/10 rounded-xl p-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted leading-relaxed">That is why our workflow gives importance to data, design, specification and approval checks.</p>

            <h3 className="mt-10 text-lg font-bold text-foreground">Our Quality Checkpoints</h3>
            <div className="mt-5 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {qualityCheckpoints.map((qc) => {
                const Icon = qc.icon;
                return (
                  <div key={qc.title} className="group rounded-2xl border border-surface-border bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-cyan-500/15 text-accent mb-4 border border-accent/20 transition-all group-hover:from-accent group-hover:to-cyan-500 group-hover:text-white group-hover:border-transparent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm">{qc.title}</h3>
                    <p className="mt-2 text-xs text-muted leading-relaxed">{qc.body}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-orange-500/5 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500">
                  <Eye className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-500 mb-1">Preview Before Production</p>
                  <p className="text-xs text-muted leading-relaxed">For large personalized orders, correcting a mistake after production can result in unnecessary rework. Where applicable, our workflow provides an opportunity to review names, photographs, ID numbers, classes, courses, departments, designations, other personalized information and card artwork. This is particularly valuable for large batches where one data error can affect an individual card.</p>
                  <Link href="/idgen-studio/" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline">Explore IDGen Studio <ArrowRight className="h-3 w-3" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── IDGEN STUDIO — premium full-bleed ─── */}
        <div className="mt-24 lg:mt-32 overflow-hidden rounded-[2.5rem] border border-surface-border shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-14 bg-surface">
              <span className="text-xs font-bold tracking-[0.18em] text-accent uppercase">IDGen Studio</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">Connecting Digital Data With Physical Identification</h2>
              <p className="mt-4 text-sm text-muted leading-relaxed">IDGen Studio extends the identification workflow before physical production. Organizations can create a customized data-collection form according to their requirements and share it through a link or QR code.</p>

              <p className="mt-5 text-xs font-bold text-foreground">A person can:</p>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                {["Open", "Fill Information", "Upload Photo", "Preview ID Card", "Submit"].map((s, i, arr) => (
                  <span key={s} className="flex items-center gap-1.5">
                    <span className="rounded-full bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 text-xs font-semibold">{s}</span>
                    {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-muted" />}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-xs text-muted">The organization can then review submissions through its dashboard. Authorized organization users can:</p>
              <ul className="mt-2 space-y-1.5">
                {dashboardActions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                <p className="text-xs font-bold text-amber-500 mb-2">Batch-Wise Production</p>
                <p className="text-xs text-muted leading-relaxed">One of the key advantages is that an organization does not necessarily have to wait for every person to complete the form before beginning production. 500 Forms Completed → Approved → Batch 1 Printed — while additional people continue submitting. Then: 400 More Completed → Approved → Batch 2 Printed. This allows organizations to start distributing completed ID cards earlier.</p>
              </div>

              <Link href="/idgen-studio/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-cyan-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:shadow-accent/40">
                <span>Explore IDGen Studio</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative min-h-[400px] lg:min-h-0">
              <Image
                src="/images/why-idgen-studio-digital.jpg"
                alt="IDGen Studio digital ID card data collection and preview workflow"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-surface/80 lg:via-surface/30 lg:to-transparent" />
            </div>
          </div>
        </div>

        {/* ─── WHAT MAKES IDGEN DIFFERENT + FOCUS ON ACTUAL REQUIREMENT ─── */}
        <div className="mt-24 lg:mt-32 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-bold tracking-[0.18em] text-accent uppercase">What Makes IDGen Different</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">Experience + Technology + Production</h2>
            <p className="mt-3 text-sm text-muted">IDGen combines three important areas.</p>
            <div className="mt-6 space-y-4">
              {[
                { num: "01", title: "Identification Experience", body: "Experience dating back to 2014.", icon: Award },
                { num: "02", title: "Digital Workflow", body: "IDGen Studio.", icon: Database },
                { num: "03", title: "Physical Production", body: "Cards + Accessories + Customization + Assembly.", icon: Printer },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.num} className="group flex gap-4 items-start rounded-2xl border border-surface-border bg-surface p-5 hover:border-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-cyan-500/15 text-accent border border-accent/20 transition-all group-hover:from-accent group-hover:to-cyan-500 group-hover:text-white group-hover:border-transparent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted tracking-widest">{item.num}</p>
                      <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                      <p className="mt-1 text-xs text-muted">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 rounded-2xl border border-surface-border bg-surface/60 p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">Together</p>
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {["Experience", "Digital Workflow", "Production"].map((s, i, arr) => (
                  <span key={s} className="flex items-center gap-1.5">
                    <span className="rounded-full bg-accent/10 text-accent px-4 py-1.5 text-sm font-bold border border-accent/20">{s}</span>
                    {i < arr.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-muted" />}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted">This is the foundation of the IDGen approach.</p>
            </div>

            {/* Honest about capabilities */}
            <div className="mt-5 rounded-2xl border border-surface-border bg-surface p-5">
              <span className="text-xs font-bold tracking-[0.15em] text-accent uppercase">Honest About Our Capabilities</span>
              <h3 className="mt-1.5 text-base font-extrabold text-foreground">Trust Requires Accurate Claims</h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">IDGen does not describe every product as being manufactured 100% in-house. Production methods can vary depending on the product and project. Our role is to manage the required identity-product customization, production workflow, assembly and quality requirements according to the agreed specification. This allows us to communicate our capabilities accurately and transparently.</p>
            </div>
          </div>

          {/* We Focus on the Actual Requirement */}
          <div>
            <span className="text-xs font-bold tracking-[0.18em] text-accent uppercase">We Focus on the Actual Requirement</span>
            <h2 className="mt-2 text-2xl font-extrabold text-foreground tracking-tight leading-tight">Not Every Organization Needs the Same Identification Setup</h2>
            <div className="mt-5 space-y-3">
              {[
                { label: "A school may need:", flow: ["Student ID Card", "Lanyard", "Holder"], color: "from-blue-500/10 to-cyan-500/10", border: "border-blue-500/20" },
                { label: "An employee project may need:", flow: ["Employee ID Card", "Lanyard"], color: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-500/20" },
                { label: "An event may need:", flow: ["Event Card", "Hook", "Lanyard"], color: "from-purple-500/10 to-violet-500/10", border: "border-purple-500/20" },
                { label: "An RFID project may need:", flow: ["RFID Card", "Required Identification Accessories"], color: "from-amber-500/10 to-orange-500/10", border: "border-amber-500/20" },
              ].map(({ label, flow, color, border }) => (
                <div key={label} className={`rounded-2xl border ${border} bg-gradient-to-br ${color} p-5`}>
                  <p className="text-xs font-bold text-muted mb-3">{label}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {flow.map((s, i, arr) => (
                      <span key={s} className="flex items-center gap-2">
                        <span className="rounded-xl bg-white/10 dark:bg-black/10 text-foreground border border-foreground/10 px-3 py-1.5 text-xs font-semibold">{s}</span>
                        {i < arr.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-muted" />}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted leading-relaxed">IDGen&apos;s role is to help determine the appropriate combination rather than forcing every customer into the same package.</p>
            <Link href="/services/" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline">Explore Services <ArrowRight className="h-3 w-3" /></Link>
          </div>
        </div>

        {/* ─── COMMITMENT + WHO WE SERVE + NE INDIA + FUTURE ─── */}
        <div className="mt-24 lg:mt-32 grid gap-10 lg:grid-cols-3">
          {/* Commitments */}
          <div className="lg:col-span-1">
            <SectionHead eyebrow="Our Commitment" title="What We Hold Ourselves To" />
            <div className="mt-6 space-y-2.5">
              {commitments.map(({ label, body }) => (
                <div key={label} className="group rounded-2xl border border-surface-border bg-surface p-4 transition-all hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-md flex gap-3 items-start">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground text-xs">{label}: </span>
                    <span className="text-xs text-muted">{body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who we serve + regions + future */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <SectionHead eyebrow="Who We Serve" title="Organizations Across Northeast India" lede="IDGen provides identification solutions for organizations including:" />
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {whoWeServe.map((org) => (
                  <div key={org} className="flex items-center gap-2.5 rounded-2xl border border-surface-border bg-surface p-3.5 text-xs font-semibold text-foreground hover:border-accent/30 hover:-translate-y-0.5 transition-all cursor-default shadow-sm">
                    <Building2 className="h-4 w-4 text-accent shrink-0" />
                    {org}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted">Detailed requirements are covered on the relevant service pages rather than repeated here.</p>
              <Link href="/services/" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline">Explore Services <ArrowRight className="h-3 w-3" /></Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-surface-border bg-surface p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe2 className="h-4 w-4 text-accent" />
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">Serving Assam &amp; Northeast India</p>
                </div>
                <p className="text-xs text-muted leading-relaxed mb-3">IDGen is based in Guwahati, Assam and serves organizations across Assam and the wider Northeast India market.</p>
                <div className="flex flex-wrap gap-1.5">
                  {neStates.map((state) => (
                    <span key={state} className="rounded-full bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 text-[9px] font-bold">{state}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4 flex-wrap">
                  <Link href="/service-areas/assam/" className="text-xs font-semibold text-accent hover:underline">ID Card Printing in Assam →</Link>
                  <Link href="/service-areas/assam/guwahati/" className="text-xs font-semibold text-accent hover:underline">Guwahati →</Link>
                </div>
              </div>

              <div className="rounded-2xl border border-surface-border bg-surface p-5">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">Building IDGen for the Future</p>
                <p className="text-xs text-muted leading-relaxed mb-3">Identification is changing. Organizations increasingly expect:</p>
                <div className="space-y-1.5">
                  {futureItems.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted leading-relaxed">IDGen is building its systems around these changing requirements. The objective is to make the entire identification process easier to manage.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── IDGEN IN ONE SENTENCE ─── */}
        <div className="mt-24 lg:mt-32">
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/5 via-cyan-500/5 to-blue-500/5 p-10 sm:p-14 text-center">
            <div className="absolute inset-0 hero-grid-pattern opacity-[0.04] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-xs font-bold text-accent uppercase tracking-[0.15em] mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                <span>IDGen in One Sentence</span>
              </div>
              <blockquote className="text-base sm:text-xl font-semibold text-foreground leading-relaxed max-w-3xl mx-auto">
                &ldquo;IDGen is an identity-solutions brand built on identification experience dating back to 2014, helping organizations across Northeast India manage personalized identification through products, digital workflows and structured production — with responsible handling of customer-provided identification data.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

        {/* ─── FAQ ─── */}
        <div className="mt-24 lg:mt-32">
          <SectionHead align="center" eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10 max-w-3xl mx-auto">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* ─── CTA ─── */}
        <div className="mt-24 lg:mt-32 mb-4">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#020A18] py-14 px-6 sm:py-16 sm:px-12 lg:px-20 text-white shadow-2xl border border-white/10">
            <div className="hero-grid-pattern absolute inset-0 opacity-[0.06] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/8 blur-[100px] pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-cyan-300 uppercase tracking-[0.18em]">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Need an Identity Solution?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Tell Us What Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Organization Needs
                </span>
              </h2>
              <p className="text-sm text-slate-300/80 leading-relaxed">
                Whether you require student identification, employee cards, event badges, RFID cards, custom lanyards or a complete identification project, IDGen can help you determine the appropriate products and workflow.
              </p>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-3 text-[10px] text-slate-400 font-medium">
                Requirement → Data → Design → Preview → Approval → Production → Quality Check → Dispatch
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                <Link href="/request-a-quote/" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-3.5 text-sm font-bold text-white shadow-2xl shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 hover:-translate-y-0.5">
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/services/" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/10 hover:-translate-y-0.5">
                  <span>Explore Services</span>
                </Link>
                <Link href="/idgen-studio/" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/10 hover:-translate-y-0.5">
                  <span>IDGen Studio</span>
                </Link>
                <Link href="/contact-us/" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/10 hover:-translate-y-0.5">
                  <span>Contact IDGen</span>
                </Link>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          </div>
        </div>
      </Container>
    </>
  );
}
