import Link from "next/link";
import {
  Building2,
  Users,
  Factory,
  Hospital,
  HeartHandshake,
  Eye,
  Sparkles,
  ShieldCheck,
  Layers,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { IllustratedCard } from "@/components/ui/IllustratedCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SpecTable } from "@/components/ui/SpecTable";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Employee ID Card Printing | Custom Company & Staff ID Cards | IDGen",
  description:
    "Custom employee ID card printing for companies, offices, industries, hospitals and organizations. Personalized staff cards, bulk printing, QR/barcode options and complete ID card setups by IDGen.",
  path: "/employee-id-card-printing/",
});

const solutions = [
  { icon: Building2, title: "Corporate Employee ID Cards", body: "Employee Photo + Name + Employee ID + Designation + Department + Company Branding." },
  { icon: Users, title: "Staff ID Cards", body: "Suitable for staff in offices, institutions, hospitals, schools and colleges — designs can distinguish staff categories." },
  { icon: Factory, title: "Employee ID Cards for Industries", body: "Permanent employees, supervisors, technicians, production staff, administrative staff and contract workforce." },
  { icon: Hospital, title: "Hospital Employee ID Cards", body: "Doctors, nurses, administrative staff, technicians, support staff and other authorized personnel." },
  { icon: HeartHandshake, title: "NGO & Institutional Cards", body: "NGOs, trusts, institutions and other organizations, customized for their workforce." },
];

const orderSteps = [
  { title: "Share Your Requirement", body: "Tell us the approximate number of employee cards and required specifications." },
  { title: "Share Employee Data", body: "Provide the employee information and photographs." },
  { title: "Confirm Design", body: "Provide your existing design or discuss the required card layout." },
  { title: "Review", body: "Review the required information and design where applicable." },
  { title: "Approve", body: "Approve the final requirements." },
  { title: "Production", body: "The approved order moves into production." },
  { title: "Quality Check & Dispatch", body: "Completed cards are checked and prepared for dispatch." },
];

const whyChoose = [
  { icon: Users, title: "Employee-Focused Personalization", body: "Cards can be customized around employee data and organizational requirements." },
  { icon: Layers, title: "Structured Data Workflow", body: "Employee information and photographs can be organized for personalization." },
  { icon: Eye, title: "Preview Before Production", body: "Where applicable, important employee information can be reviewed before production." },
  { icon: ShieldCheck, title: "Complete Identification Options", body: "Cards can be combined with required accessories." },
  { icon: Building2, title: "Bulk Capability", body: "Suitable for workforce-wide and institutional requirements." },
  { icon: Sparkles, title: "Digital Workflow", body: "IDGen Studio can support suitable employee data-collection projects." },
];

const faqs: Faq[] = [
  { q: "What is an employee ID card?", a: "An employee ID card is a personalized identification card issued by an organization to identify its employees and display relevant employee and organizational information." },
  { q: "What information can be printed on an employee ID card?", a: "Common information includes the employee's photograph, name, employee ID, designation, department, company name and logo. QR codes, barcodes and other information can also be included where required." },
  { q: "Can employee ID cards be customized?", a: "Yes. The card design, information fields and organization branding can be customized according to the company's requirements." },
  { q: "Can you print employee ID cards in bulk?", a: "Yes. IDGen supports bulk personalized ID card requirements for organizations." },
  { q: "Can I order employee ID cards with lanyards?", a: "Yes. Employee cards can be combined with suitable holders, hooks and custom printed lanyards according to the required setup." },
  { q: "Can employee ID cards include QR codes or barcodes?", a: "Yes. QR codes and barcodes can be included where required and where the supplied information supports their generation." },
  { q: "Can employee ID cards use RFID?", a: "Yes. RFID cards are available for suitable identification requirements. The RFID technology should be selected according to the organization's compatible system." },
  { q: "Can employees collect their information digitally?", a: "For suitable projects, IDGen Studio can support digital information and photograph collection and card preview." },
  { q: "How much does an employee ID card cost?", a: "Pricing depends on the card specification, quantity and personalization requirements. Current pricing is maintained on the central IDGen pricing page." },
];

export default function EmployeeIdCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Employee ID Card Printing",
          description: "Custom employee ID card printing for companies, offices, institutions, hospitals, industries and organizations.",
          path: "/employee-id-card-printing/",
        })}
      />
      <PageHero
        eyebrow="Service"
        icon={Building2}
        title="Custom Employee ID Cards for Companies, Offices & Organizations"
        lede="IDGen provides custom employee ID card printing for companies, offices, institutions, hospitals, industries, NGOs, organizations and other workplaces."
        visual={
          <IllustratedCard
            org="YOUR COMPANY"
            subOrg="Employee Identification"
            holderName="Employee Name"
            holderRole="Designation / Dept."
            holderId="EMP: XXXX"
          />
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Employee ID Card Printing", path: "/employee-id-card-printing/" }]} />

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Employee ID cards can be personalized with employee name, photograph, employee ID, designation,
            department, company name and logo, joining information, contact information, QR codes, barcodes
            and other organization-required information. Whether you&apos;re onboarding new employees,
            replacing existing cards or producing ID cards for an entire workforce, IDGen can organize the
            printing requirement around your employee data and approved design.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request Employee ID Card Quote
          </Link>
          <Link href="/id-card-printing/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            See ID Card Printing Options
          </Link>
        </div>

        {/* Solutions */}
        <div className="mt-16">
          <SectionHead eyebrow="By Workplace" title="Employee ID Card Solutions" lede="Different organizations have different workforce structures — the major employee-identification requirements, in one place." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <FeatureCard key={s.title} icon={s.icon} title={s.title} body={s.body} />
            ))}
          </div>
        </div>

        {/* Card layout */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <SpecTable
            title="Front"
            specs={{ Layout: "Company logo, employee photograph, employee name, designation, employee ID" }}
          />
          <SpecTable
            title="Back"
            specs={{ Layout: "Company information, emergency/contact info, QR code or barcode, terms or instructions, verification info" }}
          />
        </div>

        {/* Personalization example */}
        <div className="mt-16">
          <SectionHead eyebrow="Personalization" title="Employee ID Card Personalization" lede="IDGen can personalize employee cards using organization-supplied employee data — fields can be customized according to the company's identification requirements." />
          <div className="mt-6">
            <SpecTable
              specs={{
                "Employee Name": "e.g. Rahul Sharma",
                "Employee ID": "e.g. EMP1024",
                Designation: "e.g. Sales Executive",
                Department: "e.g. Sales",
                Photograph: "Employee photo",
                "Joining Date": "Organization-defined",
                "QR Code": "Organization-defined",
              }}
            />
          </div>
        </div>

        {/* Onboarding / department-wise */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h2 className="text-lg font-bold text-foreground">New Employee Onboarding</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Employee ID printing is often connected with onboarding: Employee Data → Photograph → ID Card
              Design → Preview → Approval → Printing. This helps organizations maintain a consistent ID-card
              format as new employees join. For larger batches, IDGen Studio supports structured data and
              photograph collection.
            </p>
            <Link href="/idgen-studio/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
              Explore IDGen Studio →
            </Link>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h2 className="text-lg font-bold text-foreground">Department-Wise Identification</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Organizations with multiple departments — Management, HR, Finance, Sales, Operations, IT — can
              maintain a common card design while differentiating departments through approved design
              elements, especially useful for larger organizations with multiple departments or locations.
            </p>
          </div>
        </div>

        {/* Complete setup */}
        <div className="mt-16 rounded-2xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
          <h2 className="text-lg font-bold text-navy-deep">Employee ID Card Complete Setup</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-deep/80">
            Depending on the organization&apos;s requirements, the identification setup can include Employee ID
            Card + Holder + Hook + Custom Printed Lanyard, plus digital identification elements — QR codes,
            barcodes, or RFID technology matched to the organization&apos;s compatible system.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-navy-deep">
            <Link href="/custom-printed-lanyard-printing/" className="hover:underline">Custom Printed Lanyards →</Link>
            <Link href="/id-card-holders/" className="hover:underline">ID Card Holders →</Link>
            <Link href="/id-card-hooks/" className="hover:underline">ID Card Hooks →</Link>
            <Link href="/rfid-card-printing/" className="hover:underline">RFID Card Printing →</Link>
          </div>
        </div>

        {/* Preview & approval */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Employee ID Card Preview & Approval</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Before production, organizations can review the required design and employee information where
            applicable — an opportunity to catch an incorrect name, mismatched photograph, wrong employee ID,
            incorrect designation or department, missing information, or design errors before bulk production.
          </p>
        </div>

        {/* Who can order */}
        <div className="mt-16 rounded-2xl border border-dashed border-surface-border bg-surface p-6">
          <h2 className="text-lg font-bold text-foreground">Who Can Order Employee ID Cards?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Private companies, corporate offices, startups, factories, industries, hospitals, schools,
            colleges, universities, NGOs, government organizations, institutions, associations and other
            workplaces.
          </p>
        </div>

        {/* Location */}
        <div className="mt-16 flex items-start gap-3 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
          <div>
            <h2 className="text-lg font-bold text-foreground">Employee ID Card Printing in Assam</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              IDGen is based in Guwahati, Assam, serving organizations across Assam and the wider Northeast
              India market.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-accent">
              <Link href="/service-areas/assam/" className="hover:underline">ID Card Printing in Assam →</Link>
              <Link href="/service-areas/assam/guwahati/" className="hover:underline">ID Card Printing in Guwahati →</Link>
            </div>
          </div>
        </div>

        {/* Why choose */}
        <div className="mt-16">
          <SectionHead eyebrow="Why IDGen" title="Why Choose IDGen for Employee ID Cards?" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} body={w.body} />
            ))}
          </div>
          <Link href="/why-idgen/" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
            Why Choose IDGen →
          </Link>
        </div>

        {/* How to order */}
        <div className="mt-16">
          <SectionHead eyebrow="Get Started" title="How to Order Employee ID Cards" />
          <div className="mt-6">
            <WorkflowSteps steps={orderSteps} />
          </div>
        </div>

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
            title="Ready to print employee ID cards?"
            body="Whether you're onboarding a few employees or preparing identification for an entire workforce, start with your employee data, quantity and required card format."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "View Pricing", href: "/pricing/" },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
