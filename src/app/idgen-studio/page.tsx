import Image from "next/image";
import Link from "next/link";
import { Sparkles, FileEdit, QrCode, Eye, Send, LayoutDashboard, PenLine, CheckCircle2, Layers, Printer, Zap } from "lucide-react";
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

const useCases = [
  { title: "Schools & K-12 Institutions", body: "School generates a class-wise QR code → Parents upload student photo and details from home → Admin approves batch → 500 cards printed and delivered in 48 hours." },
  { title: "Colleges & Universities", body: "Organize thousands of student records across engineering, medical, and arts departments with roll-number validation and automated RFID UID mapping." },
  { title: "Corporate Enterprises", body: "Continuous employee onboarding: new hires submit their photo during week 1, HR clicks approve, and their access badge arrives ready-to-wear." },
  { title: "Conferences & Summits", body: "Delegate self-registration portal generates high-resolution VIP passes with personalized QR ticketing, printed progressively before the event." },
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
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "IDGen Studio", path: "/idgen-studio/" }]} />

        {/* Studio Dashboard Visual Showcase Banner */}
        <div className="mt-8">
          <div className="group relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 sm:p-4 shadow-2xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/idgen-studio-interface.jpg"
                alt="IDGen Studio Enterprise Identity Management & Batch Card Preview Console"
                fill
                priority
                className="img-zoom object-cover object-top"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
                <div>
                  <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950">
                    Live Platform Preview
                  </span>
                  <h2 className="mt-2 text-xl font-extrabold sm:text-2xl text-white">
                    Self-Service Data Collection → Automated Biometric Proofs → Factory Queue
                  </h2>
                </div>
                <Link
                  href="/request-a-quote/?service=idgen-studio"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-cyan-300"
                >
                  Request Studio Onboarding
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 8-Step Flow Chain */}
        <div className="mt-14">
          <SectionHead
            eyebrow="Workflow"
            title="The 8-Step Zero-Friction Workflow"
            lede="How IDGen Studio transforms weeks of manual data collection into a streamlined 48-hour print-ready pipeline."
          />
          <div className="mt-6">
            <FlowChain steps={["1. Create Form", "2. Share Link / QR", "3. Fill & Preview", "4. User Submits", "5. Admin Reviews", "6. Batch Sign-Off", "7. Factory Print", "8. Direct Dispatch"]} />
          </div>
        </div>

        {/* How It Works Detailed Steps */}
        <div className="mt-16">
          <WorkflowSteps steps={howItWorks} />
        </div>

        {/* Progressive Batching Advantage */}
        <div className="mt-16 rounded-3xl border border-surface-border bg-surface p-8 sm:p-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase">
            <Zap className="h-4 w-4" />
            <span>Operational Advantage</span>
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl">
            Why Wait for Missing Records? Print Incrementally.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            In an institution with 2,500 students or employees, 20% of submissions are always delayed. Traditional vendors make you wait for 100% submission before starting the press. With IDGen Studio, you can print in batches as records approve:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-surface-border bg-background p-5">
              <span className="rounded bg-sky-500/20 px-2 py-0.5 text-xs font-bold text-accent">Batch 1 (Day 3)</span>
              <h3 className="mt-3 font-bold text-foreground">1,200 Submissions Approved</h3>
              <p className="mt-1 text-xs text-muted">Manufactured and dispatched immediately. Students wear badges during week 1.</p>
            </div>

            <div className="rounded-2xl border border-surface-border bg-background p-5">
              <span className="rounded bg-sky-500/20 px-2 py-0.5 text-xs font-bold text-accent">Batch 2 (Day 7)</span>
              <h3 className="mt-3 font-bold text-foreground">800 Late Submissions</h3>
              <p className="mt-1 text-xs text-muted">Second wave automatically queued without starting a new contract or setup fees.</p>
            </div>

            <div className="rounded-2xl border border-surface-border bg-background p-5">
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-600">Batch 3 (Day 12)</span>
              <h3 className="mt-3 font-bold text-foreground">Final Stragglers & Transfers</h3>
              <p className="mt-1 text-xs text-muted">Last intake finalized with identical color consistency and RFID formatting.</p>
            </div>
          </div>
        </div>

        {/* Traditional vs IDGen Studio Comparison Table */}
        <div className="mt-16">
          <SectionHead eyebrow="Direct Comparison" title="Traditional ID Collection vs IDGen Studio" />
          <div className="mt-8">
            <CompareTable columns={["Operational Factor", "Traditional ID Vendor", "IDGen Studio Platform"]} highlightColumn={2} rows={traditionalVsStudio} />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16">
          <SectionHead eyebrow="Platform Benefits" title="Engineered to Save Weeks of Administrative Effort" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <FeatureCard key={b.title} icon={Layers} title={b.title} body={b.body} />
            ))}
          </div>
        </div>

        {/* Sector Use Cases */}
        <div className="mt-16">
          <SectionHead eyebrow="Deployments" title="Proven Across Every Institutional Sector" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-2xl border border-surface-border bg-surface p-6">
                <h3 className="font-bold text-foreground text-lg">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{u.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About IDGen Studio" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Ready to automate your next ID card collection?"
            body="We will set up your branded data collection form, QR codes, and dashboard within 24 hours. Contact our team to begin."
            links={[
              { label: "Request Studio Access", href: "/request-a-quote/", primary: true },
              { label: "Browse Card Templates", href: "/templates/" },
              { label: "Contact Engineering", href: "/contact-us/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
