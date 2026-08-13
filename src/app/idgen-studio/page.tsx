import Link from "next/link";
import { Sparkles, FileEdit, QrCode, Eye, Send, LayoutDashboard, PenLine, CheckCircle2, Layers, Printer } from "lucide-react";
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
  ["Data collection", "Collect manually", "Digital data collection"],
  ["Records", "Multiple spreadsheets/files", "Central dashboard"],
  ["Data → Printing", "Often kept separate", "Data connects to printing workflow"],
  ["Timing", "Wait for everyone", "Print approved batches"],
  ["Status tracking", "Manual", "Dashboard visibility"],
  ["Data entry", "Repeated by organization", "Person/parent enters their own information"],
  ["Errors", "Often discovered late", "Preview before submission"],
  ["Distribution", "Large batch may delay distribution", "Ready records can move progressively"],
];

const useCases = [
  { title: "Schools", body: "School creates form → parent/student fills information → preview → submit → school reviews and approves → batch printing → cards distributed." },
  { title: "Colleges & Universities", body: "Organize records by course, department, semester, year, batch or campus, then review and approve the appropriate records for printing." },
  { title: "Companies", body: "HR creates the employee form → employee submits and previews → HR reviews and approves → card enters production — useful for ongoing onboarding." },
  { title: "Events", body: "Registration → data collection → badge preview → review → approval → printing, processed progressively as registrations continue." },
];

const benefits = [
  { title: "Reduce Manual Data Entry", body: "People enter their own information through the customized form." },
  { title: "Centralize Information", body: "Submissions are managed from one account/dashboard." },
  { title: "Improve Data Accuracy", body: "Individuals review their information and ID-card preview before submission." },
  { title: "Track Progress", body: "See how many records have been submitted and approved." },
  { title: "Print in Batches", body: "No need to wait for every person before starting production." },
  { title: "Correct Before Printing", body: "Review and correct submitted information before approval." },
];

const faqs: Faq[] = [
  { q: "What is IDGen Studio?", a: "IDGen Studio is a digital identity workflow that helps organizations collect personal information and photographs, preview personalized ID cards, review submissions and approve records for printing." },
  { q: "How does IDGen Studio collect information?", a: "The organization creates a customized form according to its requirements. IDGen Studio then generates a shareable link and QR code that can be provided to the people who need to submit their information." },
  { q: "Can parents fill out student ID card information?", a: "Yes. A school can share the IDGen Studio form link or QR code with parents or students so they can provide the required information and photograph." },
  { q: "Can the person see their ID card before printing?", a: "Yes. The workflow is designed to allow the person to preview how their personalized ID card will look before submitting the form." },
  { q: "Can the organization edit submitted information?", a: "The organization can review submitted records and make required corrections through the dashboard where the applicable workflow permits editing." },
  { q: "Can ID cards be printed batch by batch?", a: "Yes. One of the key benefits is that organizations can approve completed records and process them in batches rather than waiting for every person to submit their information." },
  { q: "Can an organization print all cards together?", a: "Yes. If the organization prefers a single production batch, it can wait until the required records are ready and approve them together." },
  { q: "Does IDGen Studio work with QR codes?", a: "Yes. A customized form can generate a QR code that the organization can share with the intended users." },
  { q: "Who can use IDGen Studio?", a: "Schools, colleges, universities, companies, institutions, events and other organizations that need to collect and manage personalized identification information." },
];

export default function IdgenStudioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "IDGen Studio", path: "/idgen-studio/" }])} />
      <PageHero
        eyebrow="Digital Workflow"
        icon={Sparkles}
        title="IDGen Studio — Digital ID Card Data Collection & Printing Workflow"
        lede="Collect data. Preview the ID card. Approve. Print in batches. IDGen Studio connects digital data collection with physical ID card production, so you don't have to wait for everyone before you start printing."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "IDGen Studio", path: "/idgen-studio/" }]} />

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Instead of waiting until every person&apos;s data is collected before starting production,
            organizations can collect and approve records continuously and print in batches as they become
            ready. Feature availability can depend on your organization&apos;s account and configured
            workflow — talk to us about what&apos;s enabled for your project.
          </p>
        </div>
        <div className="mt-6">
          <FlowChain steps={["Create Form", "Share Link / QR", "Fill & Preview", "Submit", "Organization Reviews", "Approve", "Batch Print", "Dispatch"]} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request IDGen Studio Access
          </Link>
        </div>

        {/* Why studio */}
        <div className="mt-16">
          <SectionHead
            eyebrow="Why It Matters"
            title="Print what's ready — instead of waiting for what isn't"
            lede="Traditional ID card collection often works like: collect everyone's data → wait → prepare everything → print everything → distribute. For a large organization, that can take considerable time. IDGen Studio changes it to: collect → review → approve → print."
          />
        </div>

        {/* How it works */}
        <div className="mt-16">
          <SectionHead eyebrow="How It Works" title="From QR code to printed ID card" />
          <div className="mt-6">
            <WorkflowSteps steps={howItWorks} />
          </div>
        </div>

        {/* Batch example */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">The real advantage: start printing earlier</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            A school preparing ID cards for 2,000 students doesn&apos;t need to wait until almost everyone has
            submitted before printing:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-background p-4">
              <p className="text-xs font-bold text-accent uppercase">Batch 1</p>
              <p className="mt-1 text-sm text-foreground">500 submitted → reviewed → approved → printed</p>
            </div>
            <div className="rounded-xl bg-background p-4">
              <p className="text-xs font-bold text-accent uppercase">Batch 2</p>
              <p className="mt-1 text-sm text-foreground">400 more submitted → reviewed → approved → printed</p>
            </div>
            <div className="rounded-xl bg-background p-4">
              <p className="text-xs font-bold text-accent uppercase">Batch 3</p>
              <p className="mt-1 text-sm text-foreground">Remaining approved records printed</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            Meanwhile, other students continue submitting their forms — a continuous collection-to-production
            workflow instead of one large dependency on a final data deadline.
          </p>
        </div>

        {/* Traditional vs Studio */}
        <div className="mt-16">
          <SectionHead eyebrow="Comparison" title="Traditional workflow vs IDGen Studio" />
          <div className="mt-6">
            <CompareTable columns={["Aspect", "Traditional Approach", "IDGen Studio"]} highlightColumn={2} rows={traditionalVsStudio} />
          </div>
        </div>

        {/* Use cases */}
        <div className="mt-16">
          <SectionHead eyebrow="By Organization" title="IDGen Studio for every organization type" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-2xl border border-surface-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">{u.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{u.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard example */}
        <div className="mt-16">
          <SectionHead eyebrow="Visibility" title="Organization dashboard" lede="Designed around one question: how many people have completed their ID information, and how many cards are ready for printing?" />
          <div className="mt-6 overflow-x-auto rounded-2xl border border-surface-border">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <tbody>
                {[
                  ["Total Required", "2,000"],
                  ["Submitted", "1,650"],
                  ["Pending", "350"],
                  ["Reviewed", "1,500"],
                  ["Approved", "1,350"],
                  ["Ready for Printing", "1,350"],
                  ["Printed", "1,200"],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 1 ? "bg-background/60" : "bg-surface"}>
                    <td className="border-b border-surface-border px-4 py-3 text-muted last:border-0">{label}</td>
                    <td className="border-b border-surface-border px-4 py-3 text-right font-mono font-semibold text-foreground last:border-0">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">Example only — actual dashboard features and status labels may depend on the IDGen Studio implementation for your account.</p>
        </div>

        {/* Benefits */}
        <div className="mt-16">
          <SectionHead eyebrow="Benefits" title="What IDGen Studio changes for organizations" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <FeatureCard key={b.title} icon={Layers} title={b.title} body={b.body} />
            ))}
          </div>
        </div>

        {/* Not just a form */}
        <div className="mt-16 rounded-2xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
          <h2 className="text-lg font-bold text-navy-deep">IDGen Studio is not just a form</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-deep/80">
            A form collects information. IDGen Studio is designed to connect information with identification
            production — Form → Submission → Preview → Review → Approval → Printing → Physical ID Card, rather
            than Form → Submission → End.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        <div className="mt-16">
          <CtaBand
            title="Start your IDGen Studio workflow"
            body="Tell us what information your organization needs to collect — we'll set up the right form, link and QR code for your team."
            links={[
              { label: "Request IDGen Studio", href: "/request-a-quote/", primary: true },
              { label: "Contact IDGen", href: "/contact-us/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
