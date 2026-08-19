import Image from "next/image";
import Link from "next/link";
import { Sparkles, FileEdit, QrCode, Eye, Send, LayoutDashboard, PenLine, CheckCircle2, Layers, Printer, Zap, ArrowRight, ShieldCheck, Database } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CompareTable } from "@/components/ui/CompareTable";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "IDGen Studio | Digital ID Card Data Collection & Printing",
  description: "Collect ID card data and photos with customized forms, QR codes and shareable links. Let people preview their ID cards, review submissions and print approved records batch-wise with IDGen Studio.",
  path: "/idgen-studio/",
});

const howItWorks = [
  { icon: FileEdit, title: "Create a Customized Data Collection Form", body: "The organization creates a form matched to its requirements — student fields (name, admission number, class, section, blood group) or employee fields (name, ID, department, designation)." },
  { icon: QrCode, title: "Generate a Unique Link & QR Code", body: "One form. One link. One QR code. Share it via WhatsApp, school groups, email, SMS, printed notices or your website." },
  { icon: PenLine, title: "Person Fills the Form", body: "The individual enters their information and uploads their photograph directly — reducing repetitive data-entry work for the organization." },
  { icon: Eye, title: "See the ID Card Before Submission", body: "The person can preview how their identification card is expected to look before submitting — catching incorrect information before production." },
  { icon: Send, title: "Submit the Completed Form", body: "The submission becomes available to the organization through its IDGen Studio dashboard." },
  { icon: LayoutDashboard, title: "Organization Gets a Central Dashboard", body: "Visibility into Total Required → Submitted → Pending → Reviewed → Approved → Ready for Printing → Printed." },
  { icon: CheckCircle2, title: "Review & Edit Records", body: "The organization can review submitted information and edit where the workflow permits — an additional review layer before printing." },
  { icon: Printer, title: "Approve Records for Printing", body: "Approve batch-wise as records become ready, or wait and approve everything together — the organization controls the schedule." },
];

const traditionalVsStudio = [
  ["Data collection", "Collect manually via unorganized sheets", "Digital self-service web forms & QR codes"],
  ["Photo management", "Loose image files named randomly", "Automatic biometric face crop & centering"],
  ["Error detection", "Found only after physical printing", "Live digital proof preview before submission"],
  ["Production batching", "Wait weeks for final missing person", "Progressive batch printing as records approve"],
  ["Turnaround speed", "Slow with costly reprint cycles", "Instant sync with Guwahati factory line"],
  ["Administrative load", "Heavy repetitive manual entry", "Automated roster mapping & status tracking"],
];

const benefits = [
  { title: "Zero Manual Data Re-Entry", body: "Parents and employees enter their exact names and details, preventing transcription typos." },
  { title: "AI Biometric Photo Cropping", body: "Automatically levels, crops, and enhances photos to strict institutional aspect ratios." },
  { title: "Visual Proof Sign-Off", body: "Users see their exact simulated badge layout before clicking submit." },
  { title: "Progressive Batch Printing", body: "Print and distribute approved batches immediately instead of waiting for stragglers." },
  { title: "Centralized Audit Trail", body: "Track every submission, edit timestamp, and print status in one cloud console." },
  { title: "Direct Factory Production Sync", body: "Approved batches flow straight into our thermal retransfer queue without manual file transfers." },
];

const faqs: Faq[] = [
  { q: "What is IDGen Studio?", a: "IDGen Studio is a cloud-based digital identity workflow that enables organizations to collect personal information and photographs, preview rendered ID cards, review submissions, and approve records for direct factory printing." },
  { q: "How does IDGen Studio collect information?", a: "The organization creates a customized form according to its requirements. IDGen Studio generates a shareable web link and QR code that can be distributed via WhatsApp, email, or school circulars." },
  { q: "Can parents fill out student ID card information on their phones?", a: "Yes! IDGen Studio is 100% mobile-friendly. Parents can take a portrait photo with their smartphone camera, preview the student card, and submit in under 60 seconds." },
  { q: "Can an administrator edit submitted details?", a: "Yes. Authorized administrators can review submissions, crop photos, modify spelling, and batch-approve records directly from the secure management console." },
  { q: "Can ID cards be printed in incremental batches?", a: "Yes. You do not need to wait for all 2,000 students to submit. You can approve and print in batches of 200–500 cards, getting IDs to students weeks ahead of schedule." },
];

export default function IdgenStudioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "IDGen Studio", path: "/idgen-studio/" }])} />
      
      <PageHero
        eyebrow="Cloud Identity Platform"
        icon={Sparkles}
        title="IDGen Studio — Digital Data Collection & Production Portal"
        lede="Collect photos. Preview rendered badges. Approve online. Print progressively. IDGen Studio connects digital self-service collection with physical factory printing, eliminating delays and costly reprint errors."
        stats={[
          { label: "Data Accuracy", value: "99.8%" },
          { label: "Photo Processing", value: "Auto-Crop AI" },
          { label: "Batch Approvals", value: "Real-time" },
          { label: "Reprint Waste", value: "Reduced by 95%" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Studio App Interface */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/idgen-studio-interface.jpg"
                  alt="IDGen Studio Cloud Software Interface"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-cyan-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Cloud Web Console</span>
                </div>
              </div>

              {/* Overlapping Factory Production Sync */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/IMG20250321154119.jpg"
                  alt="Guwahati Factory Retransfer Press Sync"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Delivered Sample Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Order Deliver/DBS ITANAGAR 1.png"
                  alt="Approved Card Dispatched Directly"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "IDGen Studio", path: "/idgen-studio/" }]} />

        {/* Studio Dashboard Visual Showcase Banner */}
        <div className="mt-8">
          <div className="group relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 sm:p-4 shadow-2xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl img-shine">
              <Image
                src="/images/idgen-studio-interface.jpg"
                alt="IDGen Studio Enterprise Identity Management & Batch Card Preview Console"
                fill
                priority
                className="img-zoom object-cover object-top"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
                <div>
                  <span className="rounded-full bg-cyan-400 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950">
                    Self-Service Cloud Portal
                  </span>
                  <h2 className="mt-2 text-xl font-extrabold sm:text-2xl text-white">
                    Live Photo Uploads, Automated Proofs & Factory Production Sync
                  </h2>
                </div>
                <Link
                  href="/request-a-quote/"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-accent-hover hover:text-white"
                >
                  Onboard Your Institution
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Grid */}
        <div className="mt-20">
          <SectionHead
            eyebrow="Workflow Breakdown"
            title="8 Steps from Link Sharing to Physical Card Delivery"
            lede="Eliminate paperwork, missing photos, and spreadsheet errors with our streamlined digital-to-physical pipeline."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="group rounded-2xl border border-surface-border bg-surface p-6 transition-all hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-slate-950 font-bold shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-accent">0{idx + 1}</span>
                  </div>
                  <h3 className="mt-4 font-bold text-foreground text-sm">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Traditional vs Studio Comparison */}
        <div className="mt-20">
          <SectionHead
            eyebrow="Comparative Efficiency"
            title="Traditional Manual Spreadsheets vs. IDGen Studio"
            lede="See how digital automation cuts onboarding time from weeks to hours."
          />
          <div className="mt-8">
            <CompareTable
              columns={["Workflow Parameter", "Manual Spreadsheet Method", "IDGen Studio Digital Flow"]}
              rows={traditionalVsStudio}
              highlightColumn={2}
            />
          </div>
        </div>

        {/* Core Platform Benefits Grid */}
        <div className="mt-20">
          <SectionHead eyebrow="Platform Benefits" title="Why Administrators & HR Leaders Love IDGen Studio" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm hover:border-accent/30 transition">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <h3 className="font-bold text-foreground text-sm">{b.title}</h3>
                </div>
                <p className="mt-2 text-xs text-muted leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About IDGen Studio" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Ready to automate your institution's ID card workflow?"
            body="Schedule a live 10-minute demo of IDGen Studio and see how simple ID card data collection can be."
            links={[
              { label: "Request Studio Onboarding", href: "/request-a-quote/", primary: true },
              { label: "Explore Student ID Cards", href: "/student-id-card-printing/" },
              { label: "View Pricing Calculator", href: "/pricing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
