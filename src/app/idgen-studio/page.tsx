import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  QrCode,
  Eye,
  Send,
  LayoutDashboard,
  CheckCircle2,
  Printer,
  ArrowRight,
  ShieldCheck,
  Building2,
  GraduationCap,
  Hospital,
  Users,
  Ticket,
  Clock,
  Layers,
  FileEdit,
  PenLine,
  RefreshCw,
  Boxes,
  Workflow,
  AlertTriangle,
  MapPin,
  HelpCircle,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CompareTable } from "@/components/ui/CompareTable";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

/* ── SEO Metadata (Strictly from document) ── */
export const metadata = pageMetadata({
  title: "IDGen Studio | Digital ID Card Data Collection & Printing",
  description:
    "Collect ID card data and photos with customized forms, QR codes and shareable links. Let people preview their ID cards, review submissions and print approved records batch-wise with IDGen Studio.",
  path: "/idgen-studio/",
});

/* ── Document Data Arrays (ALL Strictly from Document) ── */

const studio8Steps = [
  {
    title: "01 - Create a Customized Data Collection Form",
    body: "The organization creates a data collection form according to its requirements. The form can be structured around student fields (name, admission number, class, section, roll number, DOB, blood group, parent info, photo) or employee fields (name, ID, department, designation, joining info, photo). The organization defines what information needs to be collected.",
  },
  {
    title: "02 - Generate a Unique Link & QR Code",
    body: "After the customized form is created, IDGen Studio generates a shareable link and QR code. The organization can distribute the form through WhatsApp, school communication groups, email, SMS, printed notices, website, parent communication, and other digital channels. One Form. One Link. One QR Code.",
  },
  {
    title: "03 - Person Fills the Form",
    body: "The individual enters the required information and uploads their photograph directly rather than requiring the organization to manually enter every record. This reduces repetitive data-entry work for the organization.",
  },
  {
    title: "04 - See the ID Card Before Submission",
    body: "One of the key parts of the IDGen Studio workflow is the ID card preview. After entering the required information, the person can see how their identification card is expected to look (Name, Photo, ID number, Class/Department, Designation, Layout, Branding). The principle: See your ID card before it goes for printing.",
  },
  {
    title: "05 - Submit the Completed Form",
    body: "After checking the information and preview, the person submits the completed form. The submission then becomes available to the organization through its IDGen Studio dashboard.",
  },
  {
    title: "06 - Organization Gets a Central Dashboard",
    body: "The organization can view submitted records from its IDGen Studio account with visibility into: Total Required → Submitted → Pending → Reviewed → Approved → Ready for Printing → Printed. This gives a clearer picture of the project's progress rather than relying on spreadsheets or manual counting.",
  },
  {
    title: "07 - Organization Can Review & Edit Records",
    body: "The organization can review submitted information through the dashboard and edit filled information where the workflow permits (incorrect spelling, wrong class, wrong department, designation, ID number, missing info, photo corrections). This provides an additional review layer before printing.",
  },
  {
    title: "08 - Approve Records for Printing",
    body: "Once a record has been checked, the organization approves it for production. Organizations can choose Option A: Batch-Wise Printing (print what is ready instead of waiting for what is not ready) or Option B: Print Everything Together (wait until all records are ready and approve all).",
  },
];

const compareRows1 = [
  ["Data collection", "Collect data manually", "Digital data collection"],
  ["Organization", "Multiple spreadsheets/files", "Central dashboard"],
  ["Integration", "Data collection and printing are often separate", "Data connects to printing workflow"],
  ["Batching", "Wait for everyone", "Print approved batches"],
  ["Status tracking", "Manual status tracking", "Dashboard visibility"],
  ["Entry burden", "Repeated data entry", "Person/parent enters their own information"],
  ["Errors", "Errors may be discovered late", "Preview before submission"],
  ["Pending records", "Difficult to track pending records", "Submitted/pending/approved status"],
  ["Distribution", "Large batch may delay distribution", "Ready records can move progressively"],
];

const compareRows2 = [
  ["Data collection", "Manual / mixed", "Digital form"],
  ["Sharing", "Individual communication", "Link + QR code"],
  ["Photograph collection", "Manual", "Digital upload"],
  ["Preview", "Often separate", "Integrated workflow"],
  ["Corrections", "Manual coordination", "Dashboard review"],
  ["Tracking", "Spreadsheet / manual", "Central dashboard"],
  ["Printing", "Often waits for full data", "Batch-wise or all together"],
  ["Distribution", "Often starts after complete batch", "Can progress as batches are ready"],
];

const schoolBenefits = [
  "Less manual data entry",
  "Centralized submissions",
  "Parent/student participation",
  "Preview before printing",
  "Easier correction",
  "Batch-wise printing",
  "Better visibility of pending submissions",
  "Faster distribution of completed cards",
];

const collegeParameters = [
  "Course",
  "Department",
  "Semester",
  "Year",
  "Batch",
  "Campus",
  "Faculty",
  "Student category",
];

const complete11Flow = [
  { step: "01", title: "Create", desc: "Organization creates a customized data collection form." },
  { step: "02", title: "Share", desc: "IDGen Studio generates a link and QR code." },
  { step: "03", title: "Collect", desc: "Parents, students, employees or participants submit their information." },
  { step: "04", title: "Preview", desc: "The person sees their ID card preview." },
  { step: "05", title: "Submit", desc: "The completed record is submitted." },
  { step: "06", title: "Review", desc: "Organization checks the information." },
  { step: "07", title: "Correct", desc: "Required corrections can be made." },
  { step: "08", title: "Approve", desc: "Organization approves the record." },
  { step: "09", title: "Batch", desc: "Approved records can be grouped for printing." },
  { step: "10", title: "Print", desc: "Approved records move into ID-card production." },
  { step: "11", title: "Distribute", desc: "Completed cards can be distributed progressively." },
];

const orgBenefits = [
  {
    icon: PenLine,
    title: "Reduce Manual Data Entry",
    body: "People can enter their own information through the customized form.",
  },
  {
    icon: LayoutDashboard,
    title: "Centralize Information",
    body: "Submissions can be managed from one account/dashboard.",
  },
  {
    icon: BadgeCheck,
    title: "Improve Data Accuracy",
    body: "Individuals can review their information and ID-card preview before submission.",
  },
  {
    icon: Clock,
    title: "Track Progress",
    body: "Organizations can see how many records have been submitted and approved.",
  },
  {
    icon: Printer,
    title: "Print in Batches",
    body: "There is no need to wait for every person before starting production.",
  },
  {
    icon: FileEdit,
    title: "Correct Before Printing",
    body: "Organizations can review and correct submitted information before approval.",
  },
  {
    icon: Boxes,
    title: "Start Distribution Earlier",
    body: "Approved records can be processed while remaining records are still being collected.",
  },
];

const targetSectors = [
  "Schools",
  "Colleges",
  "Universities",
  "Companies",
  "Institutions",
  "Hospitals",
  "Events",
  "Membership organizations",
  "Associations",
  "Other organizations requiring personalized identification",
];

const fivePillars = [
  { title: "Data Collection", desc: "Collect the information." },
  { title: "Identification", desc: "Generate the personalized card preview." },
  { title: "Organization Control", desc: "Review and approve." },
  { title: "Production", desc: "Print approved records." },
  { title: "Distribution", desc: "Provide completed cards progressively." },
];

const startSteps = [
  { step: "1", title: "Define Requirements", desc: "Tell us what information your organization needs to collect." },
  { step: "2", title: "Workflow Setup", desc: "We create the appropriate customized data collection workflow." },
  { step: "3", title: "Account Access", desc: "Your organization receives the form through its IDGen Studio account." },
  { step: "4", title: "Distribute Form", desc: "Share the generated link or QR code with users/parents." },
  { step: "5", title: "Submissions & Preview", desc: "People submit their information and preview their ID cards." },
  { step: "6", title: "Admin Review", desc: "Your organization reviews and approves the records." },
  { step: "7", title: "Print Schedule", desc: "Print approved records batch-wise or process them together." },
  { step: "8", title: "Card Distribution", desc: "Completed identification cards move toward distribution." },
];

const faqs: Faq[] = [
  {
    q: "What is IDGen Studio?",
    a: "IDGen Studio is a digital identity workflow that helps organizations collect personal information and photographs, preview personalized ID cards, review submissions and approve records for printing.",
  },
  {
    q: "How does IDGen Studio collect information?",
    a: "The organization creates a customized form according to its requirements. IDGen Studio then generates a shareable link and QR code that can be provided to the people who need to submit their information.",
  },
  {
    q: "Can parents fill out student ID card information?",
    a: "Yes. A school can share the IDGen Studio form link or QR code with parents or students so they can provide the required information and photograph.",
  },
  {
    q: "Can the person see their ID card before printing?",
    a: "Yes. The workflow is designed to allow the person to preview how their personalized ID card will look before submitting the form.",
  },
  {
    q: "Can the organization edit submitted information?",
    a: "The organization can review submitted records and make required corrections through the dashboard where the applicable workflow permits editing.",
  },
  {
    q: "Can ID cards be printed batch by batch?",
    a: "Yes. One of the key benefits is that organizations can approve completed records and process them in batches rather than waiting for every person to submit their information.",
  },
  {
    q: "Can an organization print all cards together?",
    a: "Yes. If the organization prefers a single production batch, it can wait until the required records are ready and approve them together.",
  },
  {
    q: "Can I track how many people have submitted their forms?",
    a: "Yes. IDGen Studio provides a dashboard for managing submissions and monitoring project progress, subject to the features enabled in the organization's account.",
  },
  {
    q: "Does IDGen Studio work with QR codes?",
    a: "Yes. A customized form can generate a QR code that the organization can share with the intended users.",
  },
  {
    q: "Why is batch-wise printing useful?",
    a: "Batch-wise printing can allow an organization to begin producing approved cards while other people are still completing their forms. This can help reduce delays in distributing identification cards.",
  },
  {
    q: "Can IDGen Studio help reduce manual data entry?",
    a: "Yes. Instead of the organization manually entering every person's information, the intended person or parent can submit the required information through the customized form.",
  },
  {
    q: "Who can use IDGen Studio?",
    a: "It can be used for schools, colleges, universities, companies, institutions, events and other organizations that need to collect and manage personalized identification information.",
  },
];

const internalLinks = [
  { topic: "ID card production", href: "/id-card-printing/" },
  { topic: "Student identification", href: "/student-id-card-printing/" },
  { topic: "Employee identification", href: "/employee-id-card-printing/" },
  { topic: "Event identification", href: "/event-card-printing/" },
  { topic: "Custom lanyards", href: "/custom-printed-lanyard-printing/" },
  { topic: "Why IDGen", href: "/why-idgen/" },
  { topic: "Pricing", href: "/pricing/" },
  { topic: "Request a Quote", href: "/request-a-quote/" },
];

export default function IdgenStudioPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "IDGen Studio",
          description:
            "Digital ID card data collection and printing workflow. Collect data, preview ID cards, review submissions, and print in batches.",
          path: "/idgen-studio/",
        })}
      />

      {/* ── 1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#009fe3]/10 dark:bg-[#009fe3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-400/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: Eyebrow + Heading + Sub-heading + Lede + Workflow Card + CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>IDGen Studio</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  IDGen Studio — Digital ID Card Data Collection &amp; Printing Workflow
                </h1>

                <p className="text-base sm:text-lg font-bold text-[#009fe3] dark:text-cyan-400">
                  Collect Data. Preview the ID Card. Approve. Print in Batches.
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  IDGen Studio is a digital workflow designed to help schools, colleges, universities, companies, institutions and organizations collect identification data and photographs, allow individuals to preview their ID cards, review submissions through a dashboard and release approved records for printing. Instead of waiting until every person's data is collected before starting production, organizations can collect and approve records continuously and print in batches as they become ready.
                </p>
              </div>

              {/* Integrated Structured Workflow Card */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>The IDGen Studio Flow</span>
                </div>

                {/* Flow Chain */}
                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  <span>Create Form</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Share Link / QR</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Fill Form</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>ID Card Preview</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Submit</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Review</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Approve</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Batch Print</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Dispatch</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Request IDGen Studio Access</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>See How It Works</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] w-full rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl group flex flex-col justify-between">
                <Image
                  src="/images/idgen-studio-digital-id-card-data-collection-workflow.jpg"
                  alt="IDGen Studio digital ID card data collection and printing workflow"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                    <QrCode className="h-3 w-3 text-cyan-400" />
                    <span>QR + Self-Service Form</span>
                  </span>
                  <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                    IDGen Studio
                  </span>
                </div>

                {/* Bottom Floating Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                        Batch-Wise Production
                      </p>
                      <p className="text-xs sm:text-sm font-black text-white">
                        Live Preview &amp; Central Dashboard
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                      Cloud Sync
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        {/* ── 2. WHY IDGEN STUDIO? (THE BIGGEST ADVANTAGE) ── */}
        <section className="mt-0">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                Workflow Transformation
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full">
              Why IDGen Studio?
            </h2>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-rose-200/60 dark:border-rose-900/40 bg-rose-50/40 dark:bg-rose-950/20 p-5 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  Traditional Approach
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Traditional ID card collection often works like this:
                </p>
                <FlowChain steps={["Collect Everyone's Data", "Wait", "Prepare Everything", "Print Everything", "Distribute"]} />
                <p className="text-xs text-rose-700 dark:text-rose-300 pt-1">
                  For a large organization, this can take considerable time.
                </p>
              </div>

              <div className="rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-5 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  IDGen Studio Approach
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  IDGen Studio changes the workflow to:
                </p>
                <FlowChain steps={["Collect", "Review", "Approve", "Print"]} />
                <p className="text-xs text-sky-800 dark:text-cyan-300 font-bold pt-1">
                  Print approved batches progressively!
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-sky-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 space-y-3 shadow-xs">
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                The biggest advantage: You don't have to wait for everyone to complete their form before starting production.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Organizations can approve completed records and print them batch by batch, while the remaining people continue submitting their information. This can make identification distribution much more practical when an organization needs cards ready progressively after opening, admission, onboarding or registration.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. HOW IDGEN STUDIO WORKS (8 DETAILED STEPS) ── */}
        <section id="how-it-works" className="mt-20 scroll-mt-20">
          <SectionHead
            eyebrow="Step-by-Step Architecture"
            title="How IDGen Studio Works"
            lede="From customized form creation and live preview to batch-wise approval and factory production."
          />

          <div className="mt-8">
            <WorkflowSteps steps={studio8Steps} />
          </div>
        </section>

        {/* ── 4. TRADITIONAL WORKFLOW VS IDGEN STUDIO (TABLE 1) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Comparative Matrix"
            title="Traditional Workflow vs IDGen Studio"
          />

          <div className="mt-8">
            <CompareTable
              columns={["Feature", "Traditional Approach", "IDGen Studio"]}
              rows={compareRows1}
              highlightColumn={2}
            />
          </div>
        </section>

        {/* ── 5. THE REAL ADVANTAGE: START PRINTING EARLIER ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Progressive Production
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                The Real Advantage: Start Printing Earlier
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Imagine a school is preparing ID cards for 2,000 students. In a traditional process, the school may wait until almost everyone has submitted information before preparing the final print batch. That can create a bottleneck.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-black text-[#009fe3]">Day 1 &amp; Day 2</span>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  First students submit their information. More records arrive continuously.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-black text-[#009fe3]">Day 3 — Batch 1</span>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  The school reviews and approves completed records. Batch 1 moves directly into printing.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-black text-[#009fe3]">Batch 2 &amp; Batch 3</span>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  Meanwhile, other students continue submitting. Remaining approved records are printed progressively.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 leading-relaxed font-medium">
              The result is a continuous collection-to-production workflow instead of one large dependency on a final data deadline.
            </p>
          </div>
        </section>

        {/* ── 6. USEFUL FOR NEW ACADEMIC SESSIONS & ORGANIZATIONAL OPENINGS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Practical Scenarios"
            title="Useful for New Academic Sessions &amp; Organizational Openings"
            lede="This workflow can be especially useful when an organization needs identification products around a fixed start date."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3]">
                School / College
              </span>
              <FlowChain steps={["Admission", "Data Collection", "Approval", "ID Printing", "Distribution"]} />
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3]">
                Company
              </span>
              <FlowChain steps={["Joining", "Employee Data", "Approval", "ID Printing", "Employee ID"]} />
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3]">
                Event
              </span>
              <FlowChain steps={["Registration", "Participant Data", "Approval", "Badge Printing", "Event"]} />
            </div>
          </div>
        </section>

        {/* ── 7. SECTORS: SCHOOLS, COLLEGES, COMPANIES, EVENTS ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Schools */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  IDGen Studio for Schools
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Schools can use IDGen Studio to collect student information directly from parents or students.
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Why this helps schools:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                    {schoolBenefits.map((b) => (
                      <span key={b}>• {b}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/student-id-card-printing/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                  <span>Explore Student ID Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Colleges & Universities */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  IDGen Studio for Colleges &amp; Universities
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  For larger student populations, batch processing can become particularly useful. Organizations can organize records according to operational requirements:
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {collegeParameters.map((p) => (
                    <span key={p} className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/student-id-card-printing/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                  <span>Explore Student ID Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Companies */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  IDGen Studio for Companies
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Companies can use the workflow for employee identification. This can be useful for ongoing employee onboarding because new employees do not necessarily have to wait for a single annual ID-card batch.
                </p>
                <FlowChain steps={["HR Creates Form", "Employee Receives Link", "Submits Details", "Previews ID", "HR Reviews", "HR Approves", "Production"]} />
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/employee-id-card-printing/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                  <span>Explore Employee ID Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Events */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Ticket className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  IDGen Studio for Events
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Event organizers can collect participant information digitally. This can be useful when registrations continue over several days or weeks, allowing approved participant records to be processed progressively.
                </p>
                <FlowChain steps={["Registration", "Data Collection", "Badge Preview", "Review", "Approval", "Printing"]} />
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/event-card-printing/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                  <span>Explore Event Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. ORGANIZATION DASHBOARD SPECIMEN ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4 text-[#009fe3]" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Central Visibility
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Organization Dashboard
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                The dashboard is designed around the question: <span className="font-bold text-slate-900 dark:text-white">How many people have completed their ID information and how many cards are ready for printing?</span>
              </p>
            </div>

            {/* Dashboard Specimen Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3.5 text-center">
                <span className="text-[10px] font-extrabold uppercase text-slate-500 block">Total Required</span>
                <span className="text-xl font-black text-slate-900 dark:text-white mt-1 block">2,000</span>
              </div>
              <div className="rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-3.5 text-center">
                <span className="text-[10px] font-extrabold uppercase text-[#009fe3] block">Submitted</span>
                <span className="text-xl font-black text-slate-900 dark:text-white mt-1 block">1,650</span>
              </div>
              <div className="rounded-2xl border border-amber-200 dark:border-slate-800 bg-amber-50/50 dark:bg-slate-950 p-3.5 text-center">
                <span className="text-[10px] font-extrabold uppercase text-amber-600 block">Pending</span>
                <span className="text-xl font-black text-slate-900 dark:text-white mt-1 block">350</span>
              </div>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3.5 text-center">
                <span className="text-[10px] font-extrabold uppercase text-slate-500 block">Reviewed</span>
                <span className="text-xl font-black text-slate-900 dark:text-white mt-1 block">1,500</span>
              </div>
              <div className="rounded-2xl border border-emerald-200 dark:border-slate-800 bg-emerald-50/50 dark:bg-slate-950 p-3.5 text-center">
                <span className="text-[10px] font-extrabold uppercase text-emerald-600 block">Approved</span>
                <span className="text-xl font-black text-slate-900 dark:text-white mt-1 block">1,350</span>
              </div>
              <div className="rounded-2xl border border-cyan-200 dark:border-slate-800 bg-cyan-50/50 dark:bg-slate-950 p-3.5 text-center">
                <span className="text-[10px] font-extrabold uppercase text-cyan-600 block">Ready to Print</span>
                <span className="text-xl font-black text-slate-900 dark:text-white mt-1 block">1,350</span>
              </div>
              <div className="rounded-2xl border border-blue-200 dark:border-slate-800 bg-blue-50/50 dark:bg-slate-950 p-3.5 text-center">
                <span className="text-[10px] font-extrabold uppercase text-blue-600 block">Printed</span>
                <span className="text-xl font-black text-slate-900 dark:text-white mt-1 block">1,200</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              Actual dashboard features and status labels may depend on the IDGen Studio implementation.
            </p>

            {/* Control Your Printing Schedule & Corrections */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
                  Control Your Printing Schedule
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  Choose between <span className="font-bold text-slate-900 dark:text-white">Print Approved Batch</span> (select ready records: Approve → Batch → Print) or <span className="font-bold text-slate-900 dark:text-white">Print All Approved Records</span> (process all records together: Approve All → Print).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
                  Corrections Before Printing
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  A common problem with large ID-card projects is discovering incorrect information after printing. IDGen Studio creates opportunities for correction:
                </p>
                <FlowChain steps={["Wrong Name", "Organization Edits", "Corrected Preview", "Approval", "Printing"]} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. CONNECTING DIGITAL DATA WITH PHYSICAL PRODUCTION ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <Workflow className="h-4 w-4 text-[#009fe3]" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  End-to-End Pipeline
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                IDGen Studio Connects Digital Data With Physical Production
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Most data collection tools stop after collecting information. IDGen Studio is designed around what happens after the form is submitted.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Normal Form</span>
                <FlowChain steps={["Form", "Submission", "End"]} />
              </div>

              <div className="rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">IDGen Studio</span>
                <FlowChain steps={["Form", "Submission", "Preview", "Review", "Approval", "Printing", "Physical ID Card"]} />
              </div>
            </div>

            <p className="text-xs font-bold text-[#009fe3] dark:text-cyan-400">
              That connection is the central concept behind IDGen Studio.
            </p>
          </div>
        </section>

        {/* ── 10. COMPLETE 11-STEP WORKFLOW & FROM QR CODE TO PRINTED ID CARD ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Full Lifecycle"
            title="Complete IDGen Studio Workflow (11 Steps)"
          />

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {complete11Flow.map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-1">
                <span className="text-xs font-mono font-bold text-[#009fe3]">{item.step}</span>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              From QR Code to Printed ID Card:
            </h3>
            <FlowChain steps={["Scan QR", "Fill Info + Photo", "Preview Card", "Submit to Org", "Review", "Approve", "Print", "Distribute"]} />
          </div>
        </section>

        {/* ── 11. IDGEN STUDIO BENEFITS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Value Proposition"
            title="IDGen Studio Benefits"
            lede="Engineered to save administrative hours for organizations while simplifying submissions for parents, students, and employees."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {orgBenefits.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-2">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              For Parents, Students &amp; Employees:
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              IDGen Studio makes submission easy: Open Link / Scan QR → Fill Information → Upload Photo → Preview ID → Submit. They do not necessarily need to visit the organization's office simply to provide basic identification information.
            </p>
          </div>
        </section>

        {/* ── 12. WHO CAN USE IDGEN STUDIO & NOT JUST A FORM ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Target Audiences
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Who Can Use IDGen Studio?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                IDGen Studio can support identification projects for:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {targetSectors.map((sector) => (
                <div
                  key={sector}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{sector}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                IDGen Studio Is Not Just a Form
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                A form collects information. IDGen Studio is designed to connect information with identification production across five key pillars:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {fivePillars.map((p) => (
                  <div key={p.title} className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{p.title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. TRADITIONAL VS IDGEN STUDIO (TABLE 2) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Detailed Summary"
            title="IDGen Studio vs Traditional ID Card Data Collection"
            lede="A better way to manage large ID card projects by removing the dependency between 'everyone must submit first' and 'printing can begin.'"
          />

          <div className="mt-8">
            <CompareTable
              columns={["Workflow Parameter", "Traditional Workflow", "IDGen Studio"]}
              rows={compareRows2}
              highlightColumn={2}
            />
          </div>
        </section>

        {/* ── 14. 8-STEP ONBOARDING GUIDE ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Getting Started"
            title="Start Your IDGen Studio Workflow"
          />

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {startSteps.map((s) => (
              <div key={s.step} className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-1">
                <span className="text-xs font-mono font-bold text-[#009fe3]">Step {s.step}</span>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm">{s.title}</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 15. FREQUENTLY ASKED QUESTIONS (Strictly 12 FAQs from Document) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Questions &amp; Answers"
            title="Frequently Asked Questions"
          />

          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* ── 16. CLOSING CTA BAND ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-[#071322] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#009fe3]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Digital Identity Workflow</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                IDGen Studio — Digital Identity Workflow
              </h2>

              <p className="text-base sm:text-lg font-bold text-cyan-300">
                Collect Smarter. Review Earlier. Print Progressively.
              </p>

              <div className="rounded-xl border border-white/15 bg-white/5 p-3.5 text-xs text-slate-300">
                Form → Link / QR → Data → Preview → Submit → Review → Approve → Batch → Print → Distribute
              </div>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <Link
                  href="/request-a-quote/"
                  className="rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                >
                  Request IDGen Studio
                </Link>
                <Link
                  href="/contact/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Contact IDGen
                </Link>
                <Link
                  href="/pricing/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 17. GEOGRAPHIC / INTERNAL LINKING REFERENCE DIRECTORY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-[#009fe3] dark:text-cyan-400 mb-3">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Assam &amp; Northeast India Hub
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              IDGen Studio — Identity Solutions Simplified Across Northeast India
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              IDGen Studio connects digital self-service student, employee, and event data collection with direct factory card printing and delivery across Guwahati, Assam, and all Northeast regions.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Related IDGen Solutions &amp; Directories:
              </p>
              <div className="flex flex-wrap gap-2">
                {internalLinks.map((item) => (
                  <Link
                    key={item.topic}
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 transition hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400"
                  >
                    <span>{item.topic}</span>
                    <ArrowRight className="h-3 w-3 opacity-60" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
