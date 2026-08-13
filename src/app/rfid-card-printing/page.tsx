import Link from "next/link";
import { Radio, GraduationCap, Building2, Hospital, Users, AlertTriangle, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { IllustratedCard } from "@/components/ui/IllustratedCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CompareTable } from "@/components/ui/CompareTable";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "RFID Card Printing | Custom RFID ID Cards for Organizations | IDGen",
  description:
    "Custom RFID card printing for schools, companies, institutions and organizations. Personalized RFID ID cards matched to compatible readers and systems, with bulk printing and accessory options.",
  path: "/rfid-card-printing/",
});

const applications = [
  { icon: GraduationCap, title: "Educational Institutions", body: "Student, faculty and staff identification, campus access, library and attendance systems — where the institution's system supports RFID." },
  { icon: Building2, title: "Companies", body: "Employee identification, access-control, attendance, internal identification and visitor-management systems." },
  { icon: Hospital, title: "Hospitals & Institutions", body: "Staff identification, employee access, visitor identification and internal identification systems." },
  { icon: Users, title: "Clubs & Membership Organizations", body: "Membership identification that needs to work with a compatible RFID reader or system." },
];

const process = [
  { title: "Understand the Requirement", body: "Application, quantity, card format, printing requirement, existing RFID system, reader/system compatibility, encoding requirements." },
  { title: "Confirm RFID Specification", body: "The required RFID technology is confirmed against the customer's system information, existing card or other available specifications." },
  { title: "Prepare Card Design", body: "The visual card design is prepared according to the organization's requirements." },
  { title: "Data Preparation", body: "Personalized information and photographs are organized where required." },
  { title: "Preview & Approval", body: "The design and relevant information are reviewed before production where applicable." },
  { title: "Production", body: "The approved RFID cards are produced according to the confirmed specifications." },
  { title: "Quality Check", body: "Cards are checked against the approved requirements and project specifications." },
  { title: "Dispatch", body: "Completed cards are packaged and dispatched according to the applicable order timeline." },
];

const requiredInfo = ["Existing RFID card sample", "Reader model", "System details", "Chip/frequency information", "Existing card photograph", "Required card dimensions", "Required printing", "Required quantity"];

const compareRows = [
  ["Printed identification", "Yes", "Yes"],
  ["Photograph", "Yes", "Yes"],
  ["Organization branding", "Yes", "Yes"],
  ["ID number", "Yes", "Yes"],
  ["RFID functionality", "—", "Yes"],
  ["Requires compatible RFID system", "—", "Yes"],
  ["Custom artwork", "Yes", "Yes"],
];

const faqs: Faq[] = [
  { q: "What is an RFID ID card?", a: "An RFID ID card is a printed identification card containing an RFID component that can communicate with a compatible RFID reader or system." },
  { q: "Can RFID cards be customized?", a: "Yes. RFID cards can be printed with organization branding, photographs, names, identification numbers, departments and other required information." },
  { q: "Can an RFID card be used as an employee ID card?", a: "Yes, where the organization's existing employee access, attendance or identification system supports the selected RFID technology." },
  { q: "Can students use RFID ID cards?", a: "Yes. Educational institutions can use RFID-enabled student cards where their existing RFID system supports the required card technology." },
  { q: "Does every RFID card work with every RFID reader?", a: "No. RFID cards must be compatible with the reader and system being used. Frequency, chip technology and system specifications need to be considered." },
  { q: "Can I send my existing RFID card?", a: "Yes. Providing an existing card sample can help determine the required specification for a replacement or customized card project." },
  { q: "Can IDGen print photographs and names on RFID cards?", a: "Yes. RFID cards can be customized with photographs, names, ID numbers, organization branding and other approved information." },
  { q: "Can RFID cards be supplied with lanyards?", a: "Yes. Depending on the requirement, RFID cards can be combined with holders, hooks and custom printed lanyards." },
  { q: "Can IDGen handle bulk RFID card orders?", a: "Yes. IDGen supports bulk identification projects. The required RFID specification should be confirmed before production." },
  { q: "Does IDGen encode RFID cards?", a: "Encoding requirements depend on the project and RFID system. The required encoding specification should be confirmed before quotation and production." },
];

export default function RfidCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "RFID Card Printing",
          description: "Customized RFID ID cards for organizations, matched to compatible readers and systems.",
          path: "/rfid-card-printing/",
        })}
      />
      <PageHero
        eyebrow="Service"
        icon={Radio}
        title="Customized RFID ID Cards for Organizations, Access & Identification"
        lede="IDGen provides customized RFID card printing for organizations that need identification cards with RFID functionality — combining printed visual identification with an embedded RFID component for use with a compatible RFID-based system."
        visual={
          <IllustratedCard
            org="YOUR ORGANIZATION"
            subOrg="RFID-Enabled Identification"
            holderName="Full Name"
            holderRole="Access Level"
            holderId="ID: XXXX-0000"
            showChip
          />
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "RFID Card Printing", path: "/rfid-card-printing/" }]} />

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Customized for schools and educational institutions, colleges and universities, companies,
            corporate offices, hospitals, industries, government organizations, membership organizations,
            clubs and associations. The RFID technology and card specification should always be selected
            according to the reader, system and application in which the card will be used.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request an RFID Card Quote
          </Link>
          <Link href="/id-card-printing/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            Explore ID Card Printing
          </Link>
        </div>

        {/* Critical compatibility notice */}
        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-amber-400/40 bg-amber-50 p-6 dark:bg-amber-950/20">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <div>
            <h2 className="font-bold text-foreground">RFID Technology Must Match Your System</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              This is one of the most important things to understand before ordering RFID cards —{" "}
              <strong className="text-foreground">not every RFID card works with every RFID reader</strong>. The
              required card depends on RFID frequency, chip technology, reader compatibility, your existing
              access-control or attendance system, software, required read range, encoding requirements and
              existing card infrastructure. Before production, share the relevant reader/card specification,
              an existing card sample, chip details or system information where available, and IDGen can
              determine the required card specification for the project.
            </p>
          </div>
        </div>

        {/* Two purposes */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">1. Identification</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">People can visually identify the cardholder from the printed information.</p>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">2. RFID Interaction</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">The RFID component can interact with a compatible reader or system.</p>
          </div>
        </div>

        {/* Applications */}
        <div className="mt-16">
          <SectionHead eyebrow="By Application" title="RFID Card Applications" lede="RFID cards can be used for different applications depending on the RFID technology and the customer's system." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((a) => (
              <FeatureCard key={a.title} icon={a.icon} title={a.title} body={a.body} />
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-accent">
            <Link href="/student-id-card-printing/" className="hover:underline">Explore Student ID Card Printing →</Link>
            <Link href="/employee-id-card-printing/" className="hover:underline">Explore Employee ID Card Printing →</Link>
          </div>
        </div>

        {/* Existing systems */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">RFID Cards for Existing Systems</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            If your organization already has an RFID system, the most important information is the existing
            system specification. Before requesting a quotation, ideally provide:
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted sm:grid-cols-4">
            {requiredInfo.map((item) => (
              <li key={item} className="rounded-lg bg-background px-3 py-2">{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">This helps reduce the risk of supplying a card that is physically correct but incompatible with your RFID system.</p>
        </div>

        {/* Compare */}
        <div className="mt-16">
          <SectionHead eyebrow="Comparison" title="RFID Card Printing vs Standard ID Card" lede="An RFID card should be selected when the organization actually requires RFID functionality supported by its existing or planned system." />
          <div className="mt-6">
            <CompareTable columns={["Feature", "Standard ID Card", "RFID ID Card"]} rows={compareRows} highlightColumn={2} />
          </div>
        </div>

        {/* Process */}
        <div className="mt-16">
          <SectionHead eyebrow="Process" title="RFID Card Printing Process" />
          <div className="mt-6">
            <WorkflowSteps steps={process} />
          </div>
        </div>

        {/* Complete setup */}
        <div className="mt-16 rounded-2xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <Layers className="h-5 w-5 text-navy-deep" />
            <h2 className="text-lg font-bold text-navy-deep">RFID Card + Lanyard + Holder</h2>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-deep/80">
            An RFID card can be supplied as part of a larger identification setup — RFID Card only, RFID Card +
            Holder, or wearable RFID Card + Holder + Hook + Custom Printed Lanyard, depending on how the card
            will be used.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-navy-deep">
            <Link href="/id-card-holders/" className="hover:underline">Explore ID Card Holders →</Link>
            <Link href="/custom-printed-lanyard-printing/" className="hover:underline">Explore Custom Printed Lanyards →</Link>
          </div>
        </div>

        {/* Digital workflow */}
        <p className="mt-16 max-w-3xl text-sm leading-relaxed text-muted">
          For large personalized RFID projects, IDGen Studio can support the data-collection and card-preview
          side of suitable identification projects.{" "}
          <Link href="/idgen-studio/" className="font-semibold text-accent hover:underline">Explore IDGen Studio →</Link>
        </p>

        {/* FAQ */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need RFID card printing?"
            body="Tell us what RFID system you're using, what quantity you need and what information should be printed on the card. For the fastest specification check, share an existing RFID card or the relevant reader/system details."
            links={[
              { label: "Request an RFID Card Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore ID Card Printing", href: "/id-card-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
