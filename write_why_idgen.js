const fs = require('fs');

const content = `import Image from "next/image";
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
  { icon: Lock, title: "Data Confidentiality & Responsible Handling", body: "Your identification data is treated as confidential project information and handled for the agreed identification-related purpose." },
];

const productionSteps = [
  { num: "01", icon: ClipboardCheck, title: "Requirement", body: "We understand the required: Product, Quantity, Specifications, Personalization, Accessories, Delivery requirements." },
  { num: "02", icon: Database, title: "Data", body: "For personalized projects, the required information and photographs are prepared. Where appropriate, IDGen Studio can support digital data collection and organization." },
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

const futureItems = [
  "Digital data collection", "Online workflows", "Faster approvals",
  "Better data organization", "ID card preview", "Batch-wise production",
  "Faster distribution", "Integrated identification products",
];

const projectItems = [
  "Personal information", "Photographs", "Card design", "Personalization",
  "Large quantities", "Data checking", "Product specifications", "Accessories",
  "Approval", "Production", "Assembly", "Quality checking", "Packaging", "Dispatch",
];

const qualityErrors = [
  "The name is incorrect", "The photograph is mismatched", "The ID number is wrong",
  "The department is incorrect", "The designation is incorrect", "Required information is missing",
  "The wrong specification is used", "The required accessory is missing",
];

const dataItems = [
  "Student names", "Employee names", "Photographs", "Student or employee ID numbers",
  "Classes / Courses", "Departments", "Designations", "Organization information",
  "QR-code information", "Barcode information", "Other personalization details",
];

const dashboardActions = [
  "View submitted forms", "Track how many people have completed the form",
  "Review information", "Edit information where required",
  "Approve individual records", "Approve batches", "Release all approved records together",
];

const responsiblePractices = [
  "Share only information required for the project",
  "Use authorized personnel for data submission and approval",
  "Review information before production",
  "Avoid unnecessary personal information",
  "Maintain appropriate access controls within their organization",
  "Follow their applicable privacy and data-handling policies",
];

export default function WhyIdgenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep py-20 lg:py-28 text-white">
        <div className="hero-grid-pattern absolute inset-0 opacity-10 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Identity Solutions Simplified</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Why Choose IDGen?
              </h1>
              <p className="text-lg font-semibold text-cyan-200">Built on Identification Experience Dating Back to 2014</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                IDGen is a Guwahati-based identity solutions company serving organizations across Assam and the wider Northeast India market. Our experience in ID card printing, identification products and organizational supply dates back to 2014. Over the years, we have worked with customers and organizations across Northeast India, gaining practical experience in personalized ID cards, bulk requirements, identification accessories and organizational supply.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                IDGen is the next stage of that experience — a dedicated identity-solutions brand focused on bringing products, digital workflows and production together into a more organized identification system.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300 mb-2">Our Approach</p>
                <div className="flex flex-wrap items-center gap-1 text-xs font-semibold text-white">
                  {["Requirement", "Data", "Design", "Preview", "Approval", "Production", "Quality Check", "Dispatch"].map((step, i, arr) => (
                    <span key={step} className="flex items-center gap-1">
                      <span className="rounded-full bg-white/10 px-2 py-0.5">{step}</span>
                      {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-cyan-400" />}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-400">Our goal is simple: make identification projects easier to plan, manage and complete.</p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="/request-a-quote/" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-bold text-navy-deep shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 hover:-translate-y-0.5">
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services/" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-cyan-400 hover:-translate-y-0.5">
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </div>
            <div className="relative h-[360px] lg:h-[440px]">
              <div className="absolute top-0 right-0 h-56 w-[74%] rounded-3xl overflow-hidden border border-white/15 shadow-2xl z-10">
                <Image src="/images/ID Card Full Set Samples/IMG20250321154119.jpg" alt="IDGen ID card production Guwahati Assam" fill className="object-cover object-center" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-deep/60" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">Live Production</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-0 h-44 w-[55%] rounded-2xl overflow-hidden border border-white/15 shadow-2xl z-20">
                <Image src="/images/Sample Photos/school-student-pvc-id-card-idgen.jpg.png" alt="IDGen student ID card sample" fill className="object-cover object-left-top" />
              </div>
              <div className="absolute bottom-0 right-8 h-28 w-28 rounded-full overflow-hidden border-[5px] border-navy-deep shadow-2xl z-30">
                <Image src="/images/Lanyard with Hook Samples/Sample 1.jpeg" alt="IDGen custom printed lanyards" fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Why IDGen", path: "/why-idgen/" }]} />

        {/* More Than a New Brand + Serving NE India + Journey */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Experience Since 2014</span>
            <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight leading-tight">More Than a New Brand</h2>
            <div className="mt-5 space-y-3 text-sm text-muted leading-relaxed">
              <p>While IDGen is the new identity-focused brand, our experience in ID card printing and identification-product supply dates back to 2014.</p>
              <p>For more than a decade, our work has involved identification requirements for organizations and customers across Northeast India.</p>
              <p>This experience has taught us that an identification project is rarely just about printing a card.</p>
              <p className="font-semibold text-foreground">It can involve:</p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {projectItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-muted">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted leading-relaxed">IDGen brings this practical experience into a more structured identity-solutions workflow.</p>
          </div>
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Serving Northeast India</span>
              <h2 className="mt-2 text-2xl font-extrabold text-foreground tracking-tight">Regional Identification Experience</h2>
              <p className="mt-3 text-sm text-muted leading-relaxed">Our identification-product experience has been developed through serving customers across the Northeast India market. IDGen is based in Guwahati, Assam, providing a central base for serving organizations across the region.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {neStates.map((state) => (
                  <span key={state} className="rounded-full bg-accent/10 text-accent border border-accent/20 px-3 py-1 text-[10px] font-bold">{state}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Our Journey</p>
              <div className="space-y-4">
                {journey.map((j) => (
                  <div key={j.year} className="flex gap-4 items-start">
                    <div className="flex h-10 w-20 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                      <span className="font-mono text-[9px] font-extrabold text-accent leading-tight text-center px-1">{j.year}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{j.label}</p>
                      <p className="text-xs text-muted mt-0.5">{j.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted">IDGen represents the next stage of that journey.</p>
            </div>
          </div>
        </div>

        {/* Why Choose IDGen — 8 pillars */}
        <div className="mt-20 lg:mt-28">
          <SectionHead
            eyebrow="Why Choose IDGen"
            title="Choosing an Identification Supplier Is Not Only About Finding Someone Who Can Print a Card"
            lede="For an organization, the real requirement may be: Data → Design → Personalization → Approval → Production → Accessories → Quality → Delivery. IDGen is built around this broader requirement."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} body={w.body} />
            ))}
          </div>
        </div>

        {/* Data Confidentiality */}
        <div className="mt-20 lg:mt-28 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Data Confidentiality &amp; Responsible Handling</span>
            <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight leading-tight">Your Identification Data Deserves Care</h2>
            <div className="mt-5 space-y-3 text-sm text-muted leading-relaxed">
              <p>ID card projects require organizations to share personal information such as student names, employee names, photographs, identification numbers, departments, designations and other information required for personalization.</p>
              <p>We understand that this information belongs to the organization and the individuals being identified.</p>
              <p>At IDGen, we treat customer-provided identification data as confidential project information and handle it for the agreed identification-related purpose.</p>
              <p>When you share student or employee information with IDGen, we understand the responsibility that comes with handling that information.</p>
            </div>
            <div className="mt-5 rounded-2xl border border-surface-border bg-surface p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What Information May Be Provided?</p>
              <div className="grid grid-cols-2 gap-2">
                {dataItems.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-muted">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted italic">Only information required for the identification project should be provided.</p>
            </div>
            <p className="mt-4 text-xs text-muted leading-relaxed">We do not need student or employee identification information for unrelated marketing purposes.</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-surface-border bg-surface p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">Data Confidentiality in IDGen Studio</h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">Data confidentiality becomes especially important when organizations use IDGen Studio for digital data collection. An organization can create a customized data-collection form according to its requirements and generate a link and QR code for sharing with students, parents, employees or other authorized persons.</p>
                  <div className="mt-3 rounded-xl border border-surface-border bg-background p-3">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-accent mb-2">The workflow can be:</p>
                    <div className="flex flex-wrap items-center gap-1 text-[9px] font-semibold text-foreground">
                      {["Customized Form", "Link / QR Code", "Data + Photo", "ID Card Preview", "Submission", "Organization Dashboard", "Review", "Approval", "Production"].map((s, i, arr) => (
                        <span key={s} className="flex items-center gap-1">
                          <span className="rounded bg-accent/10 text-accent px-1.5 py-0.5 border border-accent/10">{s}</span>
                          {i < arr.length - 1 && <ArrowRight className="h-2.5 w-2.5 text-muted" />}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted leading-relaxed">The organization&apos;s submitted information forms part of its identification project. Where applicable, authorized organization users can review and manage submissions before releasing them for production.</p>
                  <Link href="/idgen-studio/" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline">Explore IDGen Studio <ArrowRight className="h-3 w-3" /></Link>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-surface-border bg-surface p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Responsible Data Practices</p>
              <p className="text-xs text-muted mb-3">For projects involving large quantities of personal information, we encourage organizations to:</p>
              <ul className="space-y-2">
                {responsiblePractices.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted leading-relaxed">IDGen&apos;s role is to support the identification-production workflow while treating information provided for that workflow with confidentiality.</p>
            </div>
          </div>
        </div>

        {/* One Identity Partner */}
        <div className="mt-20 lg:mt-28 rounded-3xl border border-surface-border bg-surface p-8 sm:p-10">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">One Identity Partner</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">An Identification Project Can Require Several Connected Products</h2>
          <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl">Instead of treating every component as a completely separate requirement, IDGen can coordinate the relevant products according to the application. For example:</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Standard", flow: ["ID Card", "Holder", "Hook", "Lanyard"] },
              { label: "With Sealing", flow: ["ID Card", "Sealing", "Holder", "Hook", "Lanyard"] },
            ].map((cfg) => (
              <div key={cfg.label} className="rounded-2xl border border-surface-border bg-background p-4">
                <p className="text-xs font-bold text-accent mb-3">{cfg.label}</p>
                <div className="flex flex-wrap items-center gap-1">
                  {cfg.flow.map((s, i, arr) => (
                    <span key={s} className="flex items-center gap-1">
                      <span className="rounded-lg bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 text-xs font-semibold">{s}</span>
                      {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-muted" />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">The exact configuration depends on the application. For detailed specifications, visit the relevant service page.</p>
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
              <Link key={label} href={href} className="inline-flex items-center gap-1 rounded-full border border-surface-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground hover:border-accent/40 hover:text-accent transition-colors">
                {label} <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>

        {/* Production Approach — 9 steps */}
        <div className="mt-20 lg:mt-28 relative overflow-hidden rounded-3xl border border-surface-border bg-background p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <Workflow className="w-96 h-96 text-accent" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase mb-4">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Our Production Approach</span>
            </div>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight">From Requirement to Finished Identification Product</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">We use a structured approach to keep personalized and bulk projects organized.</p>
            <div className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {productionSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                      <span className="text-7xl font-black font-mono">{step.num}</span>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 transition-colors group-hover:bg-accent group-hover:text-navy-deep">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm relative z-10">{step.num} — {step.title}</h3>
                    <p className="mt-2 text-xs text-muted leading-relaxed relative z-10">{step.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-20 lg:mt-28 relative overflow-hidden rounded-3xl border border-surface-border bg-background p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <ShieldCheck className="w-96 h-96 text-accent" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase mb-4">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Quality Assurance</span>
            </div>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight">Quality Is More Than How a Card Looks</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">For personalized identification products, physical print quality is only one part of the result. A card can look visually good and still be unusable if:</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-3xl">
              {qualityErrors.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-muted">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">That is why our workflow gives importance to data, design, specification and approval checks.</p>
            <h3 className="mt-8 text-base font-bold text-foreground">Our Quality Checkpoints</h3>
            <div className="mt-4 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {qualityCheckpoints.map((qc) => {
                const Icon = qc.icon;
                return (
                  <div key={qc.title} className="group rounded-2xl border border-surface-border bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 transition-colors group-hover:bg-accent group-hover:text-navy-deep">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm">{qc.title}</h3>
                    <p className="mt-2 text-xs text-muted leading-relaxed">{qc.body}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">Preview Before Production</p>
              <p className="text-xs text-muted leading-relaxed">For large personalized orders, correcting a mistake after production can result in unnecessary rework. Where applicable, our workflow provides an opportunity to review: Names, Photographs, ID numbers, Classes, Courses, Departments, Designations, Other personalized information, Card artwork. This is particularly valuable for large batches where one data error can affect an individual card.</p>
              <Link href="/idgen-studio/" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline">Explore IDGen Studio <ArrowRight className="h-3 w-3" /></Link>
            </div>
          </div>
        </div>

        {/* IDGen Studio */}
        <div className="mt-20 lg:mt-28 rounded-3xl overflow-hidden border border-surface-border bg-surface shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">IDGen Studio</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">Connecting Digital Data With Physical Identification</h2>
              <p className="mt-4 text-sm text-muted leading-relaxed">IDGen Studio extends the identification workflow before physical production. Organizations can create a customized data-collection form according to their requirements and share it through a link or QR code.</p>
              <p className="mt-3 text-xs font-semibold text-foreground">A person can:</p>
              <div className="mt-2 flex flex-wrap items-center gap-1 text-xs font-semibold text-foreground">
                {["Open", "Fill Information", "Upload Photo", "Preview ID Card", "Submit"].map((s, i, arr) => (
                  <span key={s} className="flex items-center gap-1">
                    <span className="rounded-full bg-accent/10 text-accent border border-accent/20 px-2 py-0.5">{s}</span>
                    {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-muted" />}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted">The organization can then review submissions through its dashboard. Authorized organization users can:</p>
              <ul className="mt-2 space-y-1">
                {dashboardActions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
                <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">Batch-Wise Production</p>
                <p className="text-xs text-muted leading-relaxed">One of the key advantages is that an organization does not necessarily have to wait for every person to complete the form before beginning production.</p>
                <p className="mt-2 text-xs text-muted leading-relaxed">For example: 500 Forms Completed → Approved → Batch 1 Printed — while additional people continue submitting information. Then: 400 More Completed → Approved → Batch 2 Printed.</p>
                <p className="mt-2 text-xs text-muted leading-relaxed">This allows organizations to start distributing completed ID cards earlier instead of waiting for the entire population to complete the process.</p>
              </div>
              <Link href="/idgen-studio/" className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-xs font-bold text-navy-deep shadow transition hover:bg-accent-hover hover:-translate-y-0.5">
                <span>Explore IDGen Studio</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="relative min-h-[320px] lg:min-h-0">
              <Image src="/images/idgen-studio-id-card-data-collection.jpg" alt="IDGen Studio digital ID card data collection and preview workflow" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-navy-deep/70 lg:via-navy-deep/20 lg:to-transparent" />
            </div>
          </div>
        </div>

        {/* What Makes IDGen Different + We Focus on Actual Requirement */}
        <div className="mt-20 lg:mt-28 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-bold tracking-widest text-accent uppercase">What Makes IDGen Different</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">Experience + Technology + Production</h2>
            <p className="mt-3 text-sm text-muted">IDGen combines three important areas.</p>
            <div className="mt-5 space-y-4">
              {[
                { num: "01", title: "Identification Experience", body: "Experience dating back to 2014.", icon: Award },
                { num: "02", title: "Digital Workflow", body: "IDGen Studio.", icon: Database },
                { num: "03", title: "Physical Production", body: "Cards + Accessories + Customization + Assembly.", icon: Printer },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.num} className="group flex gap-4 items-start rounded-2xl border border-surface-border bg-surface p-5 hover:border-accent/30 transition-colors">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted">{item.num}</p>
                      <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                      <p className="mt-1 text-xs text-muted">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 rounded-2xl border border-surface-border bg-surface p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Together</p>
              <div className="flex flex-wrap items-center justify-center gap-1 text-sm font-semibold text-foreground">
                {["Experience", "Digital Workflow", "Production"].map((s, i, arr) => (
                  <span key={s} className="flex items-center gap-1">
                    <span className="rounded-full bg-accent/10 text-accent px-3 py-1 border border-accent/20">{s}</span>
                    {i < arr.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-muted" />}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted">This is the foundation of the IDGen approach.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-accent uppercase">We Focus on the Actual Requirement</span>
              <h2 className="mt-2 text-2xl font-extrabold text-foreground tracking-tight">Not Every Organization Needs the Same Identification Setup</h2>
              <div className="mt-4 space-y-3">
                {[
                  { label: "A school may need:", flow: ["Student ID Card", "Lanyard", "Holder"] },
                  { label: "An employee project may need:", flow: ["Employee ID Card", "Lanyard"] },
                  { label: "An event may need:", flow: ["Event Card", "Hook", "Lanyard"] },
                  { label: "An RFID project may need:", flow: ["RFID Card", "Required Identification Accessories"] },
                ].map(({ label, flow }) => (
                  <div key={label} className="rounded-xl border border-surface-border bg-surface p-4">
                    <p className="text-xs text-muted mb-2">{label}</p>
                    <div className="flex flex-wrap items-center gap-1">
                      {flow.map((s, i, arr) => (
                        <span key={s} className="flex items-center gap-1">
                          <span className="rounded-lg bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 text-xs font-semibold">{s}</span>
                          {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-muted" />}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted leading-relaxed">IDGen&apos;s role is to help determine the appropriate combination rather than forcing every customer into the same package.</p>
              <Link href="/services/" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline">Explore Services <ArrowRight className="h-3 w-3" /></Link>
            </div>

            <div className="rounded-3xl border border-surface-border bg-surface p-6">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Honest About Our Capabilities</span>
              <h3 className="mt-2 text-lg font-extrabold text-foreground">Trust Requires Accurate Claims</h3>
              <p className="mt-3 text-xs text-muted leading-relaxed">IDGen does not describe every product as being manufactured 100% in-house. Production methods can vary depending on the product and project. Our role is to manage the required identity-product customization, production workflow, assembly and quality requirements according to the agreed specification. This allows us to communicate our capabilities accurately and transparently.</p>
            </div>
          </div>
        </div>

        {/* Commitment + Who We Serve + NE India */}
        <div className="mt-20 lg:mt-28 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHead eyebrow="Our Commitment" title="What We Hold Ourselves To" />
            <div className="mt-6 space-y-2">
              {commitments.map(({ label, body }) => (
                <div key={label} className="group rounded-xl border border-surface-border bg-surface p-4 transition-all hover:border-accent/30 flex gap-3 items-start">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
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

          <div className="lg:col-span-2 space-y-8">
            <div>
              <SectionHead eyebrow="Who We Serve" title="Organizations Across Northeast India" lede="IDGen provides identification solutions for organizations including:" />
              <div className="mt-5 grid grid-cols-2 gap-2">
                {whoWeServe.map((org) => (
                  <div key={org} className="flex items-center gap-2.5 rounded-xl border border-surface-border bg-surface p-3 text-xs font-semibold text-foreground hover:border-accent/30 transition-colors">
                    <Building2 className="h-4 w-4 text-accent shrink-0" />
                    {org}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted">Detailed requirements are covered on the relevant service pages rather than repeated here.</p>
              <Link href="/services/" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline">Explore Services <ArrowRight className="h-3 w-3" /></Link>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Serving Assam &amp; Northeast India</p>
              <p className="text-xs text-muted leading-relaxed mb-3">IDGen is based in Guwahati, Assam and serves organizations across Assam and the wider Northeast India market.</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {neStates.map((state) => (
                  <span key={state} className="rounded-full bg-accent/10 text-accent border border-accent/20 px-3 py-1 text-[10px] font-bold">{state}</span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/service-areas/assam/" className="text-xs font-semibold text-accent hover:underline">ID Card Printing in Assam →</Link>
                <Link href="/service-areas/assam/guwahati/" className="text-xs font-semibold text-accent hover:underline">ID Card Printing in Guwahati →</Link>
              </div>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Building IDGen for the Future</p>
              <p className="text-xs text-muted leading-relaxed mb-3">Identification is changing. Organizations increasingly expect:</p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {futureItems.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted leading-relaxed">IDGen is building its systems around these changing requirements. The objective is not simply to print more cards. It is to make the entire identification process easier to manage.</p>
            </div>
          </div>
        </div>

        {/* IDGen in One Sentence */}
        <div className="mt-20 lg:mt-28">
          <div className="rounded-3xl border border-accent/20 bg-accent/5 p-8 sm:p-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">IDGen in One Sentence</p>
            <blockquote className="text-base sm:text-lg font-medium text-foreground leading-relaxed max-w-3xl mx-auto">
              &ldquo;IDGen is an identity-solutions brand built on identification experience dating back to 2014, helping organizations across Northeast India manage personalized identification through products, digital workflows and structured production — with responsible handling of customer-provided identification data.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 lg:mt-28">
          <SectionHead align="center" eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10 max-w-3xl mx-auto">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 lg:mt-28 mb-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#060D19] via-[#0E1E38] to-[#060D19] py-10 px-6 sm:py-12 sm:px-12 lg:px-16 text-white shadow-2xl border border-white/15">
            <div className="hero-grid-pattern absolute inset-0 opacity-10 pointer-events-none" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Need an Identity Solution?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">Tell Us What Your Organization Needs</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Whether you require student identification, employee cards, event badges, RFID cards, custom lanyards or a complete identification project, IDGen can help you determine the appropriate products and workflow.</p>
              <div className="pt-1">
                <p className="text-[10px] text-slate-400 mb-3">Start With Your Requirement: Requirement → Data → Design → Preview → Approval → Production → Quality Check → Dispatch</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link href="/request-a-quote/" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2.5 text-xs sm:text-sm font-bold text-navy-deep shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 hover:-translate-y-0.5">
                    <span>Request a Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/services/" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition hover:border-cyan-400 hover:-translate-y-0.5">
                    <span>Explore Services</span>
                  </Link>
                  <Link href="/idgen-studio/" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition hover:border-cyan-400 hover:-translate-y-0.5">
                    <span>Explore IDGen Studio</span>
                  </Link>
                  <Link href="/contact-us/" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition hover:border-cyan-400 hover:-translate-y-0.5">
                    <span>Contact IDGen</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
`;

fs.writeFileSync('src/app/why-idgen/page.tsx', content, 'utf8');
console.log('Done. Lines:', content.split('\n').length);
