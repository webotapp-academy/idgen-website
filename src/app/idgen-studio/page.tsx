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
  Users,
  Ticket,
  Clock,
  Layers,
  FileEdit,
  RefreshCw,
  Boxes,
  Workflow,
  AlertTriangle,
  Play,
  ExternalLink,
  Laptop,
  CheckSquare,
  FileSpreadsheet,
  Tv,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

/* ── SEO Metadata (Strictly from Document) ── */
export const metadata = pageMetadata({
  title: "IDGen Studio | Digital ID Card Data Collection & Printing Workflow",
  description:
    "Collect student, employee and participant information digitally with IDGen Studio. Share forms by link or QR code, preview ID cards, review submissions and print approved records in batches.",
  path: "/idgen-studio/",
});

/* ── Document Data Arrays ── */

const studio9Steps = [
  {
    num: "01",
    title: "Create Your Form",
    desc: "The organization defines the information required for its ID cards.",
    schoolExamples: [
      "Student name",
      "Admission number",
      "Class",
      "Section",
      "Roll number",
      "Date of birth",
      "Blood group",
      "Parent information",
      "Photograph",
    ],
    companyExamples: [
      "Employee name",
      "Employee ID",
      "Department",
      "Designation",
      "Joining information",
      "Photograph",
    ],
    note: "The form can be planned according to the organization's identification requirements.",
    ctaText: "View IDGen Studio Form Planning Template →",
    ctaHref: "/templates/",
  },
  {
    num: "02",
    title: "Share the Form",
    desc: "Once the form is created, the organization can share it using a link or QR code.",
    channels: [
      "WhatsApp",
      "Email",
      "SMS",
      "School communication groups",
      "Parent communication",
      "Printed notices",
      "Website",
      "Other communication channels",
    ],
    note: "The intended user simply opens the link or scans the QR code.",
  },
  {
    num: "03",
    title: "User Enters Information",
    desc: "The student, parent, employee, participant or other authorized user enters the required information.",
    note: "They can provide their details directly rather than requiring the organization to manually enter every record.",
  },
  {
    num: "04",
    title: "Upload Photograph",
    desc: "Where required, the user uploads their identification photograph.",
    note: "This allows the photograph to be associated with the corresponding identification record.",
  },
  {
    num: "05",
    title: "Preview the ID Card",
    desc: "Before submitting the information, the user can see the personalized ID card preview.",
    previewItems: [
      "Name",
      "Photograph",
      "ID number",
      "Class",
      "Department",
      "Designation",
      "Other personalized information",
      "Card layout",
      "Organization branding",
    ],
    highlight: "The idea is simple: See your ID card before it goes for printing. This creates an opportunity to identify incorrect information before production.",
  },
  {
    num: "06",
    title: "Submit",
    desc: "After reviewing the information and preview, the user submits the completed form.",
    note: "The record then becomes available to the organization for review.",
  },
  {
    num: "07",
    title: "Organization Reviews",
    desc: "The organization can review submitted records through its IDGen Studio workflow.",
    checkItems: [
      "Personal details",
      "Identification number",
      "Photograph",
      "Class / department",
      "Designation",
      "Other required information",
    ],
    note: "Where editing is supported, corrections can be made before approval.",
  },
  {
    num: "08",
    title: "Approve",
    desc: "Once the organization is satisfied with a record, it can approve it for production.",
    flowTransition: "Submitted → Reviewed → Approved → Ready for Printing",
  },
  {
    num: "09",
    title: "Print in Batches",
    desc: "This is one of the key advantages of IDGen Studio. An organization does not necessarily have to wait until everyone has submitted their information.",
    batches: [
      { name: "Batch 1", detail: "500 submitted → reviewed → approved → printed" },
      { name: "Batch 2", detail: "400 submitted → reviewed → approved → printed" },
      { name: "Batch 3", detail: "600 submitted → reviewed → approved → printed" },
    ],
    principle: "The principle: Print what is ready instead of waiting for what is not ready.",
    note: "Meanwhile, remaining students, employees or participants can continue submitting their information. Organizations can also choose to process all approved records together when preferred.",
  },
];

const dashboardStatusData = [
  { status: "Total Required", count: "2,000" },
  { status: "Submitted", count: "1,650" },
  { status: "Pending", count: "350" },
  { status: "Reviewed", count: "1,500" },
  { status: "Approved", count: "1,350" },
  { status: "Ready for Printing", count: "1,350" },
  { status: "Printed", count: "1,200" },
];

const traditionalVsStudioRows = [
  { aspect: "Data Collection", traditional: "Manual / mixed data collection", studio: "Digital form" },
  { aspect: "Organization", traditional: "Multiple files and spreadsheets", studio: "Centralized workflow" },
  { aspect: "Photograph Collection", traditional: "Manual photograph collection", studio: "Digital photograph upload" },
  { aspect: "Preview Process", traditional: "Separate preview process", studio: "ID card preview" },
  { aspect: "Status Tracking", traditional: "Manual status tracking", studio: "Submission and approval workflow" },
  { aspect: "Batch Handling", traditional: "Often waits for complete data", studio: "Approved batches can move forward" },
  { aspect: "Corrections", traditional: "Corrections coordinated manually", studio: "Review before approval" },
  { aspect: "Production Timeline", traditional: "Printing starts after preparation", studio: "Printing can progress with approved records" },
];

const completeJourneySteps = [
  { title: "Scan", sub: "QR Code" },
  { title: "Fill", sub: "Personal Information" },
  { title: "Upload", sub: "Photograph" },
  { title: "Preview", sub: "Personalized ID Card" },
  { title: "Submit", sub: "Completed Record" },
  { title: "Review", sub: "Organization Checks Information" },
  { title: "Approve", sub: "Record Ready for Production" },
  { title: "Print", sub: "ID Card Production" },
  { title: "Distribute", sub: "Completed ID Card" },
];

const formPlanningFields = [
  { requirement: "Student Name", fieldType: "Short Text" },
  { requirement: "Admission Number", fieldType: "Alphanumeric" },
  { requirement: "Roll Number", fieldType: "Numeric" },
  { requirement: "Class", fieldType: "Dropdown" },
  { requirement: "Date of Birth", fieldType: "Date" },
  { requirement: "Mobile Number", fieldType: "Mobile Number" },
  { requirement: "Email", fieldType: "Email" },
  { requirement: "Photograph", fieldType: "Photo Upload" },
  { requirement: "QR Information", fieldType: "QR Code Data" },
  { requirement: "Organization-specific information", fieldType: "Custom Field" },
];

const studioFaqs: Faq[] = [
  {
    q: "What is IDGen Studio?",
    a: "IDGen Studio is a digital ID-card data collection and production workflow that helps organizations collect information and photographs, preview personalized ID cards, review submissions and approve records for printing.",
  },
  {
    q: "How does a user access the form?",
    a: "The organization can share a form through a link or QR code. The user opens the link or scans the QR code and completes the required information.",
  },
  {
    q: "Can parents submit student information?",
    a: "Yes, where the organization's workflow is configured for parent/student submission, parents can enter their child's required information and photograph.",
  },
  {
    q: "Can users see their ID card before submitting?",
    a: "Yes, the IDGen Studio workflow is designed to provide an ID card preview before submission.",
  },
  {
    q: "Can an organization review submissions?",
    a: "Yes, submitted records can be reviewed through the organization's IDGen Studio workflow.",
  },
  {
    q: "Can corrections be made?",
    a: "Corrections can be made where the configured workflow provides editing access.",
  },
  {
    q: "Can ID cards be printed in batches?",
    a: "Yes. Approved records can be processed progressively in batches where the production workflow supports it.",
  },
  {
    q: "Does the organization have to wait for everyone?",
    a: "Not necessarily. One of the main advantages of the workflow is that approved records can move toward production while other users continue submitting their information.",
  },
  {
    q: "Can an organization process all records together?",
    a: "Yes, where supported by the workflow, an organization can choose to process approved records together rather than progressively.",
  },
  {
    q: "Can IDGen Studio be used for employees?",
    a: "Yes. Companies can use the workflow to collect employee identification information and photographs.",
  },
  {
    q: "Can IDGen Studio be used for events?",
    a: "Yes. Event organizers can use the workflow for participant data collection and event-card production where the configured workflow supports it.",
  },
  {
    q: "Do I need a separate app?",
    a: "No separate app installation is required. Users can access the form through the shared link or QR code using a web browser.",
  },
];

export default function IdgenStudioPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "IDGen Studio",
          description:
            "Collect student, employee and participant information digitally with IDGen Studio. Share forms by link or QR code, preview ID cards, review submissions and print approved records in batches.",
          path: "/idgen-studio/",
        })}
      />

      {/* ── 1. HERO / BANNER WITH DUAL-COLOUR TITLE & VIDEO SECTION ── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.22),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#009fe3]/15 dark:bg-[#009fe3]/20 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-cyan-400/15 dark:bg-cyan-500/15 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "IDGen Studio", path: "/idgen-studio/" },
            ]}
          />

          <div className="mt-6 grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Dual Colour Title & Information */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>IDGen Studio</span>
                </div>

                {/* DUAL COLOUR TITLE */}
                <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black tracking-tight leading-[1.15]">
                  <span className="text-slate-950 dark:text-white">IDGen Studio — </span>
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    Digital ID Card Data Collection &amp; Printing Workflow
                  </span>
                </h1>

                {/* Subtitle Slogan */}
                <p className="text-base sm:text-lg font-extrabold text-[#009fe3] dark:text-cyan-400 tracking-tight">
                  Collect Data. Preview the ID Card. Approve. Print.
                </p>

                {/* Lead Descriptions */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  IDGen Studio is a digital ID-card data collection and production workflow that helps schools, colleges, universities, companies, institutions and organizations collect identification information and photographs, review submissions, preview personalized ID cards and move approved records toward printing.
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Instead of waiting for everyone to complete their information before starting production, organizations can review and approve completed records progressively and print in batches.
                </p>
              </div>

              {/* IDGen Studio Flow Chain */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  <Workflow className="h-4 w-4" />
                  <span>IDGen Studio Flow</span>
                </div>

                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  <span>Create Form</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Share Link / QR Code</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Submit Details</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Preview ID Card</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Review</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Approve</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Print</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Distribute</span>
                </div>
              </div>

              {/* Primary Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#try-demo"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Try IDGen Studio Yourself</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/request-a-quote/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>Request IDGen Studio</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: VIDEO SECTION IN BANNER */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/90 dark:border-cyan-500/30 bg-slate-900 shadow-2xl group flex flex-col">
                {/* Video Header Tag */}
                <div className="bg-slate-950/90 border-b border-white/10 px-4 py-2.5 flex items-center justify-between text-xs text-white z-10">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-bold uppercase tracking-wider text-[11px] text-cyan-300">
                      Demo Video In Banner
                    </span>
                  </div>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300">
                    Workflow Demo
                  </span>
                </div>

                {/* Video Embed Frame - Dummy Demo Video */}
                <div className="relative aspect-video w-full bg-black">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/idgen-studio-digital-id-card-data-collection-workflow.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support HTML5 video.
                  </video>
                </div>

                {/* Banner Video Meta Box */}
                <div className="p-4 bg-slate-950/90 text-white space-y-2 border-t border-white/10">
                  <p className="text-xs font-black text-cyan-400">
                    How IDGen Studio Works | Digital ID Card Data Collection &amp; Printing
                  </p>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Watch the actual user journey from digital form creation, photo upload, and instant ID card preview to approval and factory batch printing.
                  </p>
                  <div className="pt-1 flex items-center justify-between">
                    <a
                      href="https://www.youtube.com/@iDGenguwahati"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-red-400 hover:text-red-300 transition"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href="#see-in-action"
                      className="text-[11px] text-cyan-300 font-semibold hover:underline"
                    >
                      Learn More ↓
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-16 pt-10 sm:pt-14 space-y-20">
        {/* ── 2. 🎥 SEE IDGEN STUDIO IN ACTION ── */}
        <section id="see-in-action" className="scroll-mt-20">
          <SectionHead
            eyebrow="🎥 See IDGen Studio in Action"
            title="From Data Collection to Printed ID Card"
            lede="Watch how IDGen Studio can simplify the identification-card data collection process."
          />

          <div className="mt-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-xl space-y-8">
            {/* Dummy Demo Video Player */}
            <div className="relative mx-auto max-w-4xl aspect-video overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-slate-950 shadow-2xl">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/images/idgen-studio-interface.jpg"
                className="h-full w-full object-cover"
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </div>

            {/* Video Title & User Journey Description */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  Video Title: How IDGen Studio Works | Digital ID Card Data Collection &amp; Printing
                </h3>
                <a
                  href="https://www.youtube.com/@iDGenguwahati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 hover:text-red-600 dark:text-red-400"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The demonstration shows the actual user journey:
              </p>

              {/* Journey Pipeline */}
              <div className="rounded-xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4 text-xs font-bold text-slate-800 dark:text-cyan-300 flex flex-wrap items-center gap-2">
                <span>Create Form</span>
                <span className="text-[#009fe3]">→</span>
                <span>Share</span>
                <span className="text-[#009fe3]">→</span>
                <span>User Fills Form</span>
                <span className="text-[#009fe3]">→</span>
                <span>Upload Photo</span>
                <span className="text-[#009fe3]">→</span>
                <span>ID Card Preview</span>
                <span className="text-[#009fe3]">→</span>
                <span>Submit</span>
                <span className="text-[#009fe3]">→</span>
                <span>Organization Review</span>
                <span className="text-[#009fe3]">→</span>
                <span>Approval</span>
                <span className="text-[#009fe3]">→</span>
                <span>Printing</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. 🧪 TRY IDGEN STUDIO YOURSELF ── */}
        <section id="try-demo" className="scroll-mt-20">
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#009fe3]/40 bg-gradient-to-br from-white via-sky-50/40 to-white dark:from-[#0b1320] dark:via-[#0e1726] dark:to-[#070d18] p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 dark:border-cyan-500/40 bg-sky-100/70 dark:bg-cyan-950/60 px-3.5 py-1 text-xs font-extrabold text-[#009fe3] dark:text-cyan-400">
                <span>🧪 Interactive Live Demonstration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Try IDGen Studio Yourself — <span className="text-[#009fe3] dark:text-cyan-400">Experience the ID Card Data Collection Process</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Don't just read about IDGen Studio. Try the workflow yourself. We have created a live demonstration form so students, parents, employees, organizations and other visitors can experience how the IDGen Studio submission process works.
              </p>
            </div>

            {/* Try the Demo: 2 Option Columns */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Option 1: Scan QR Code */}
              <div className="flex flex-col items-center justify-center text-center rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-white/[0.03] p-6 sm:p-8 backdrop-blur-md shadow-lg space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#009fe3] dark:text-cyan-400">
                  Option 1
                </span>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  1. Scan the QR Code
                </h3>

                {/* Stylized QR Code Element */}
                <div className="relative p-4 rounded-2xl border-2 border-dashed border-[#009fe3]/50 bg-white dark:bg-slate-900 shadow-inner">
                  <div className="relative h-44 w-44 sm:h-48 sm:w-48 mx-auto flex items-center justify-center bg-slate-950 rounded-xl p-3 text-white">
                    <QrCode className="h-full w-full text-cyan-400" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="rounded bg-[#009fe3] px-2 py-0.5 text-[10px] font-black text-white shadow">
                        IDGen
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    [IDGEN STUDIO DEMO QR CODE]
                  </p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Scan using any smartphone camera or QR reader
                </p>
              </div>

              {/* Option 2: Open Live Form */}
              <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-white/[0.03] p-6 sm:p-8 backdrop-blur-md shadow-lg space-y-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#009fe3] dark:text-cyan-400">
                    Option 2
                  </span>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                    2. Open the Demo Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    Access the interactive submission form directly in your current browser tab and test the photo upload and preview capabilities.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href="/request-a-quote/"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#009fe3] px-6 py-4 text-sm font-black text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Try the Live ID Card Form</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-900/50 p-4 space-y-2">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      What you can experience:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                        <span>How simple the form is to complete</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                        <span>How information is entered</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                        <span>How photographs are uploaded</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                        <span>How the ID card preview works</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                        <span>How the completed information is submitted</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience the Process Steps */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 space-y-3">
              <p className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                Experience the Process
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg text-slate-800 dark:text-slate-200">Open Form</span>
                <span>↓</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg text-slate-800 dark:text-slate-200">Enter Information</span>
                <span>↓</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg text-slate-800 dark:text-slate-200">Upload Photograph</span>
                <span>↓</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg text-slate-800 dark:text-slate-200">Preview ID Card</span>
                <span>↓</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg text-slate-800 dark:text-slate-200">Check Details</span>
                <span>↓</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg text-slate-800 dark:text-slate-200">Submit</span>
              </div>
            </div>

            {/* Demo Form Safety Note & Conclusion */}
            <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/30 p-4 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2.5">
              <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Demo Form Notice: </span>
                Please use test information for demonstration purposes. Do not submit sensitive personal information or real identity documents unless specifically instructed.
              </div>
            </div>

            <div className="text-center pt-2">
              <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                One Link. One QR Code. One Simple Process.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Try it yourself and see how an end user experiences IDGen Studio.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. HOW IDGEN STUDIO WORKS (01 - 09) ── */}
        <section className="space-y-8">
          <SectionHead
            eyebrow="Workflow Breakdown"
            title="How IDGen Studio Works"
            lede="A progressive, 9-stage digital workflow from form definition to batch factory dispatch."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studio9Steps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition hover:border-[#009fe3] hover:shadow-xl space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#009fe3] dark:text-cyan-400">
                      {step.num}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#009fe3]" />
                  </div>

                  <h3 className="text-lg font-black text-slate-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                    {step.desc}
                  </p>

                  {/* School / Company fields */}
                  {step.schoolExamples && (
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        For example, a school may collect:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {step.schoolExamples.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {step.companyExamples && (
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        A company may collect:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {step.companyExamples.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Channels */}
                  {step.channels && (
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        The form can be distributed through:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {step.channels.map((ch) => (
                          <span
                            key={ch}
                            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Preview Items */}
                  {step.previewItems && (
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        They can check information such as:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {step.previewItems.map((pi) => (
                          <span
                            key={pi}
                            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {pi}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlight Slogan */}
                  {step.highlight && (
                    <div className="rounded-xl border border-sky-200 dark:border-slate-800 bg-sky-50 dark:bg-slate-950 p-3 text-xs font-bold text-[#009fe3] dark:text-cyan-300 leading-relaxed">
                      {step.highlight}
                    </div>
                  )}

                  {/* Check items */}
                  {step.checkItems && (
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        The organization can check information such as:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {step.checkItems.map((ci) => (
                          <span
                            key={ci}
                            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {ci}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Flow transition */}
                  {step.flowTransition && (
                    <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/30 p-2.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                      {step.flowTransition}
                    </div>
                  )}

                  {/* Batches breakdown */}
                  {step.batches && (
                    <div className="space-y-1.5 pt-1">
                      {step.batches.map((b) => (
                        <div
                          key={b.name}
                          className="flex items-center justify-between text-xs rounded-lg bg-slate-50 dark:bg-slate-950 p-2 border border-slate-200 dark:border-slate-800 font-semibold"
                        >
                          <span className="font-bold text-[#009fe3]">{b.name}</span>
                          <span className="text-[11px] text-slate-600 dark:text-slate-300">{b.detail}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.principle && (
                    <p className="text-xs font-black text-[#009fe3] dark:text-cyan-400 pt-1">
                      {step.principle}
                    </p>
                  )}

                  {step.note && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                      {step.note}
                    </p>
                  )}
                </div>

                {step.ctaHref && step.ctaText && (
                  <Link
                    href={step.ctaHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
                  >
                    <span>{step.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. IDGEN STUDIO FOR DIFFERENT ORGANIZATIONS ── */}
        <section className="space-y-8">
          <SectionHead
            eyebrow="Sector Adaptability"
            title="IDGen Studio for Different Organizations"
            lede="Customized digital onboarding workflows tailored to your sector's operational model."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {/* Schools */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md transition hover:border-[#009fe3] space-y-4">
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 dark:bg-sky-950/60 text-[#009fe3]">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Schools</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Schools can share a form with parents or students to collect student information and photographs.
                </p>

                <div className="rounded-xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-3 text-xs font-bold text-[#009fe3] dark:text-cyan-300">
                  <p className="text-[10px] text-slate-500 uppercase">Typical Flow:</p>
                  <p>School Creates Form → Parent/Student Submits → Preview → School Reviews → Approves → ID Card Printing</p>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  This can help reduce repetitive manual data entry and provide better visibility into pending submissions.
                </p>
              </div>

              <Link
                href="/student-id-card-printing/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
              >
                <span>Student ID Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Colleges & Universities */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md transition hover:border-[#009fe3] space-y-4">
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-500">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Colleges &amp; Universities</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Larger student populations can be organized according to requirements such as:
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {["Course", "Department", "Year", "Semester", "Batch", "Campus", "Faculty", "Student category"].map((req) => (
                    <span key={req} className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {req}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Records can then be reviewed and approved according to the organization's process.
                </p>
              </div>

              <Link
                href="/student-id-card-printing/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
              >
                <span>Student ID Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Companies */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md transition hover:border-[#009fe3] space-y-4">
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-500">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Companies</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Companies can use IDGen Studio for employee identification.
                </p>

                <div className="rounded-xl border border-blue-100 dark:border-slate-800 bg-blue-50/50 dark:bg-slate-950 p-3 text-xs font-bold text-blue-700 dark:text-blue-300">
                  <p className="text-[10px] text-slate-500 uppercase">Example:</p>
                  <p>HR Creates Form → Employee Submits → Preview → HR Reviews → Approval → ID Card Printing</p>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  This can be useful for employee onboarding and ongoing additions to the workforce.
                </p>
              </div>

              <Link
                href="/employee-id-card-printing/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
              >
                <span>Employee ID Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Events */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md transition hover:border-[#009fe3] space-y-4">
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 dark:bg-pink-950/60 text-pink-500">
                  <Ticket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Events</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Event organizers can collect participant information and photographs through a digital form.
                </p>

                <div className="rounded-xl border border-pink-100 dark:border-slate-800 bg-pink-50/50 dark:bg-slate-950 p-3 text-xs font-bold text-pink-700 dark:text-pink-300">
                  <p className="text-[10px] text-slate-500 uppercase">Example:</p>
                  <p>Registration → Data Collection → Preview → Review → Approval → Event Card Printing</p>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  This can be useful when registrations continue over several days or weeks.
                </p>
              </div>

              <Link
                href="/event-card-printing/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
              >
                <span>Event Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. TWO SIDES OF THE IDGEN STUDIO EXPERIENCE ── */}
        <section className="space-y-6">
          <SectionHead
            eyebrow="Integrated Ecosystem"
            title="Two Sides of the IDGen Studio Experience"
            lede="IDGen Studio connects the end user and the organization in one workflow."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {/* End User */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md space-y-4">
              <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <span>👤 End User</span>
              </h3>
              <div className="flex flex-col space-y-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">Open Link / Scan QR</div>
                <div className="text-center text-[#009fe3]">↓</div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">Fill Information</div>
                <div className="text-center text-[#009fe3]">↓</div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">Upload Photograph</div>
                <div className="text-center text-[#009fe3]">↓</div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">Preview ID Card</div>
                <div className="text-center text-[#009fe3]">↓</div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">Submit</div>
              </div>
            </div>

            {/* Organization */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md space-y-4">
              <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <span>🏢 Organization</span>
              </h3>
              <div className="flex flex-col space-y-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">Create Form</div>
                <div className="text-center text-[#009fe3]">↓</div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">Receive Submissions</div>
                <div className="text-center text-[#009fe3]">↓</div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">Review</div>
                <div className="text-center text-[#009fe3]">↓</div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">Correct Where Required</div>
                <div className="text-center text-[#009fe3]">↓</div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">Approve</div>
                <div className="text-center text-[#009fe3]">↓</div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">Print Approved Records</div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
            This connection is what makes IDGen Studio more than a basic online form.
          </p>
        </section>

        {/* ── 7. IDGEN STUDIO DASHBOARD ── */}
        <section className="space-y-6">
          <SectionHead
            eyebrow="Progress Visibility"
            title="IDGen Studio Dashboard"
            lede="The organization can use its IDGen Studio workflow to monitor the progress of its identification project."
          />

          <div className="max-w-2xl mx-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Status
              </span>
              <span className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Records
              </span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {dashboardStatusData.map((row) => (
                <div
                  key={row.status}
                  className="px-6 py-3.5 flex items-center justify-between text-xs sm:text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-950 transition"
                >
                  <span className="text-slate-700 dark:text-slate-300 font-bold">{row.status}</span>
                  <span className="font-mono font-bold text-[#009fe3] dark:text-cyan-400">{row.count}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 border-t border-slate-200 dark:border-slate-800 text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                Actual dashboard features and status labels depend on the IDGen Studio implementation and account configuration.
              </p>
            </div>
          </div>
        </section>

        {/* ── 8. WHY IDGEN STUDIO? ── */}
        <section className="space-y-8">
          <SectionHead
            eyebrow="Operational Value"
            title="Why IDGen Studio?"
            lede="Engineered to solve real-world organizational bottlenecking in ID data collection."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Reduce Manual Data Entry",
                desc: "Students, parents, employees or participants can enter their own information through the digital form.",
              },
              {
                title: "Centralize Submissions",
                desc: "Information can be managed through the organization's IDGen Studio workflow rather than scattered across multiple spreadsheets, messages or files.",
              },
              {
                title: "Give Users a Preview",
                desc: "Users can review their personalized ID card before submission.",
              },
              {
                title: "Improve Review",
                desc: "Organizations get an opportunity to check information before production.",
              },
              {
                title: "Print Progressively",
                desc: "Approved records can be processed in batches while remaining records continue to arrive.",
              },
              {
                title: "Manage Large Projects",
                desc: "The workflow is designed to make large identification projects easier to organize and monitor.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition hover:border-[#009fe3] space-y-2.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-950/60 text-[#009fe3]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. TRADITIONAL VS IDGEN STUDIO COMPARISON ── */}
        <section className="space-y-6">
          <SectionHead
            eyebrow="Process Transformation"
            title="Traditional ID Card Data Collection vs IDGen Studio"
            lede="A direct comparison between legacy collection methods and progressive batch workflows."
          />

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Aspect
                  </th>
                  <th className="px-6 py-4 font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Traditional Process
                  </th>
                  <th className="px-6 py-4 font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    IDGen Studio
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {traditionalVsStudioRows.map((row) => (
                  <tr key={row.aspect} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/50 transition">
                    <td className="px-6 py-3.5 font-bold text-slate-900 dark:text-white">
                      {row.aspect}
                    </td>
                    <td className="px-6 py-3.5 text-slate-500 dark:text-slate-400">
                      {row.traditional}
                    </td>
                    <td className="px-6 py-3.5 font-bold text-[#009fe3] dark:text-cyan-300">
                      {row.studio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 10. FROM QR CODE TO PRINTED ID CARD (THE COMPLETE JOURNEY) ── */}
        <section className="space-y-6">
          <SectionHead
            eyebrow="Lifecycle"
            title="From QR Code to Printed ID Card"
            lede="The Complete Journey: End-to-end trace from digital entry to physical card delivery."
          />

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-9">
            {completeJourneySteps.map((step, idx) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-1"
              >
                <span className="text-[10px] font-black uppercase tracking-wider text-[#009fe3]">
                  0{idx + 1}
                </span>
                <p className="text-xs font-black text-slate-900 dark:text-white">
                  {step.title}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  {step.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 11. IDGEN STUDIO FORM PLANNING ── */}
        <section className="space-y-6">
          <SectionHead
            eyebrow="Structure & Specifications"
            title="IDGen Studio Form Planning"
            lede="Plan Your Form Before Creating It. A good data-collection form starts with deciding what information to collect and how each field should be entered."
          />

          <div className="max-w-3xl mx-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-black uppercase tracking-wider text-slate-900 dark:text-white">
                    Requirement
                  </th>
                  <th className="px-6 py-4 font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    Example Field Type
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {formPlanningFields.map((f) => (
                  <tr key={f.requirement} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/50 transition">
                    <td className="px-6 py-3 font-semibold text-slate-800 dark:text-slate-200">
                      {f.requirement}
                    </td>
                    <td className="px-6 py-3 font-mono font-bold text-[#009fe3] dark:text-cyan-300">
                      {f.fieldType}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Need to plan your form?
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  The exact field types match the current IDGen Studio implementation.
                </p>
              </div>
              <Link
                href="/templates/"
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-[#008bc9] transition shrink-0"
              >
                <span>IDGen Studio Form Planning Template</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 12. IDGEN STUDIO FOR IDGEN CUSTOMERS ── */}
        <section className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            IDGen Studio for IDGen Customers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            IDGen Studio is particularly useful when an organization is also arranging physical identification products such as:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 pt-2">
            {[
              "Student ID cards",
              "College ID cards",
              "University ID cards",
              "Employee ID cards",
              "Event cards",
              "Membership cards",
            ].map((prod) => (
              <div
                key={prod}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-center text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
              >
                {prod}
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
            The digital workflow helps connect data collection and approval with the physical identification production process.
          </p>
        </section>

        {/* ── 13. IMPORTANT: ACTUAL FEATURES MAY VARY ── */}
        <section className="rounded-3xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/30 p-6 sm:p-8 text-amber-950 dark:text-amber-200 space-y-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <AlertTriangle className="h-4 w-4" />
            <span>Important: Actual Features May Vary</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed font-medium">
            IDGen Studio is continuously developed and configured according to the organization's requirements. Features such as available field types, dashboard statuses, editing permissions, QR code generation, barcode generation, preview functionality, batch selection, and printing workflow should only be presented as available when they are supported by the current implementation.
          </p>
          <p className="text-xs text-amber-800/80 dark:text-amber-300/80 italic">
            The website always reflects the actual live IDGen Studio functionality.
          </p>
        </section>

        {/* ── 14. FREQUENTLY ASKED QUESTIONS (12 FAQs) ── */}
        <section className="space-y-6">
          <SectionHead
            eyebrow="Help & Guidance"
            title="Frequently Asked Questions"
            lede="Common questions regarding links, parent submissions, ID card previews, editing and batch printing."
          />

          <div className="max-w-4xl mx-auto">
            <FaqList faqs={studioFaqs} />
          </div>
        </section>

        {/* ── 15. EXPERIENCE IDGEN STUDIO YOURSELF (CALLOUT) ── */}
        <section className="rounded-[2.5rem] border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 text-white shadow-2xl text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black">
              Experience IDGen Studio Yourself
            </h2>
            <p className="text-sm text-cyan-300 font-bold">
              Don't Just Read About It. Try It.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
              Use test information and experience the journey from Form → Photo Upload → ID Card Preview → Submission, then see how the same concept connects with Organization Review → Approval → Printing.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#try-demo"
              className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-xs font-extrabold text-white shadow-lg hover:bg-[#008bc9] transition"
            >
              <QrCode className="h-4 w-4" />
              <span>Scan the QR Code</span>
            </a>

            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-xs font-extrabold text-white hover:bg-white/20 transition"
            >
              <span>Try Live ID Card Form</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ── 16. WATCH THE FULL DEMONSTRATION ── */}
        <section className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6 text-center">
          <div className="max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Watch the Full Demonstration
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              See How IDGen Studio Connects Data Collection With ID Card Printing
            </p>
          </div>

          {/* Dummy Demo Video Player */}
          <div className="max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-slate-950 shadow-xl">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/idgen-studio-submission-dashboard.jpg"
              className="h-full w-full object-cover"
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
          </div>

          <div className="pt-2">
            <a
              href="https://www.youtube.com/@iDGenguwahati"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 text-xs font-bold text-white shadow-md hover:bg-red-700 transition"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* ── 17. READY TO USE IDGEN STUDIO? (CLOSING CTA) ── */}
        <section className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-sky-50/50 to-white dark:from-[#09111e] dark:via-[#0e1726] dark:to-[#070d18] p-8 sm:p-12 shadow-xl text-center space-y-6">
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
              Ready to Use IDGen Studio?
            </h2>
            <p className="text-base sm:text-lg font-extrabold text-[#009fe3] dark:text-cyan-400">
              Make ID Card Data Collection Simpler
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              If your school, college, university, company, institution or organization needs a more organized way to collect identification information and connect approved records with ID card printing, talk to IDGen about your requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-xs font-extrabold text-white shadow-lg hover:bg-[#008bc9] transition"
            >
              <span>Request IDGen Studio</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-xs font-extrabold text-slate-800 dark:text-slate-200 hover:border-[#009fe3] transition"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-xs font-extrabold text-slate-800 dark:text-slate-200 hover:border-[#009fe3] transition"
            >
              <span>Contact IDGen</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 max-w-xl mx-auto space-y-1">
            <p className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              IDGen Studio — Collect Smarter. Review Earlier. Print Progressively.
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Create → Share → Collect → Preview → Review → Approve → Print → Distribute
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500">
              IDGen — Identity Solutions Simplified
            </p>
          </div>
        </section>
      </Container>
    </>
  );
}
