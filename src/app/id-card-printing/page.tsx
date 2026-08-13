import Link from "next/link";
import {
  IdCard,
  GraduationCap,
  Building2,
  Ticket,
  Radio,
  Users,
  Layers,
  Eye,
  ShieldCheck,
  Sparkles,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { IllustratedCard } from "@/components/ui/IllustratedCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CompareTable } from "@/components/ui/CompareTable";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "ID Card Printing | Custom PVC & Bulk ID Cards | IDGen",
  description:
    "IDGen provides custom PVC ID card printing and bulk personalized ID cards for schools, colleges, companies, hospitals, institutions and events across Assam and Northeast India.",
  path: "/id-card-printing/",
});

const audiences = [
  { icon: GraduationCap, title: "Student ID Cards", body: "For student identification in educational institutions.", href: "/student-id-card-printing/" },
  { icon: Building2, title: "Employee & Staff ID Cards", body: "For companies, offices, institutions and organizations.", href: "/employee-id-card-printing/" },
  { icon: Ticket, title: "Event Cards", body: "For conferences, exhibitions, seminars, workshops and other events.", href: "/event-card-printing/" },
  { icon: Radio, title: "RFID Cards", body: "For applications requiring compatible RFID technology.", href: "/rfid-card-printing/" },
];

const workflow = [
  { title: "Requirement", body: "Card type, quantity, organization, required information, design requirements and card specification." },
  { title: "Data Preparation", body: "Customer information and photographs are prepared for production — supplied by the organization or collected through IDGen Studio." },
  { title: "Design Preparation", body: "Card artwork is prepared according to the organization's branding and specifications." },
  { title: "Data & Design Preview", body: "Where applicable, the customer can review the personalized information and card design before production." },
  { title: "Approval", body: "Production proceeds after the required information, artwork and specifications are approved." },
  { title: "Card Printing", body: "Approved cards move into the production process." },
  { title: "Quality Check", body: "Finished cards are checked against the applicable approved requirements." },
  { title: "Accessories & Assembly", body: "If required, cards are combined with the appropriate identification accessories — e.g. Card → Holder → Hook → Lanyard." },
  { title: "Packaging & Dispatch", body: "Completed orders are prepared for dispatch according to the applicable order timeline." },
];

const configRows = [
  ["Basic identification", "ID Card"],
  ["Protected card", "ID Card + Holder"],
  ["Wearable identification", "ID Card + Holder + Hook + Lanyard"],
  ["Complete wearable setup", "ID Card + Sealing + Holder + Hook + Lanyard"],
  ["RFID application", "Compatible RFID Card"],
  ["Event identification", "Event Card + required attachment configuration"],
];

const institutions = [
  ["Educational Institutions", "Student, faculty and staff identification."],
  ["Companies", "Employee and staff identification."],
  ["Hospitals", "Staff and institutional identification."],
  ["Industries", "Employee and workforce identification."],
  ["Government Organizations", "Official institutional identification requirements."],
  ["NGOs & Associations", "Member, staff and organizational identification."],
];

const orderSteps = [
  { title: "Tell Us Your Requirement", body: "Card type, approximate quantity and application." },
  { title: "Share Data", body: "Provide the required information and photographs." },
  { title: "Share Design", body: "Provide your existing artwork or discuss the required design." },
  { title: "Review", body: "Review the applicable design and personalized information." },
  { title: "Approve", body: "Approve the final requirements." },
  { title: "Production", body: "The approved project moves into production." },
  { title: "Quality Check", body: "The finished cards are checked against the applicable requirements." },
  { title: "Dispatch", body: "The completed order is prepared and dispatched." },
];

const faqs: Faq[] = [
  { q: "What type of ID cards does IDGen print?", a: "IDGen provides customized identification cards for students, employees, staff, institutions, visitors, members, events and other organizational applications." },
  { q: "Does IDGen provide PVC ID card printing?", a: "Yes. IDGen provides customized PVC ID card printing for organizational identification requirements." },
  { q: "Does IDGen handle bulk ID card printing?", a: "Yes. Bulk and institutional ID card printing is an important part of the service, including large personalized batches." },
  { q: "Can I print photographs and names on the cards?", a: "Yes. Personalized information such as photographs, names, identification numbers and organizational details can be included according to the approved design." },
  { q: "Can I order only the ID card?", a: "Yes. Organizations can order ID cards without accessories if they already have their own holders, hooks or lanyards." },
  { q: "Can I order ID cards with lanyards?", a: "Yes. ID cards can be combined with suitable holders, hooks and custom printed lanyards." },
  { q: "Can I get a complete ID card set?", a: "Yes. Depending on the application, a complete setup can include ID Card + Ultrasonic Sealing + Holder + Hook + Custom Printed Lanyard." },
  { q: "Can IDGen collect student or employee data?", a: "IDGen Studio can support digital data and photograph collection for suitable projects." },
  { q: "Can I check the card before printing?", a: "Where applicable, the workflow includes a preview and approval stage before production." },
  { q: "How many ID cards can IDGen print?", a: "IDGen supports high-volume production requirements. Actual capacity depends on product type, quantity, personalization, data readiness and project specifications." },
  { q: "How long does ID card printing take?", a: "The production and dispatch timeline depends on the quantity, personalization, artwork approval and project requirements. A specific timeline should be confirmed when requesting a quotation." },
];

export default function IdCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "ID Card Printing",
          description: "Custom PVC ID card printing and bulk personalized ID cards for schools, colleges, companies, hospitals, institutions and events.",
          path: "/id-card-printing/",
        })}
      />
      <PageHero
        eyebrow="Service"
        icon={IdCard}
        title="Custom PVC ID Card Printing for Organizations"
        lede="IDGen provides custom PVC ID card printing for schools, colleges, universities, companies, hospitals, institutions, organizations and events across Assam and Northeast India."
        visual={
          <IllustratedCard
            org="YOUR ORGANIZATION"
            subOrg="Institutional ID Card"
            holderName="Full Name"
            holderRole="Designation / Class"
            holderId="ID: XXXX-0000"
          />
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "ID Card Printing", path: "/id-card-printing/" }]} />

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            We help organizations turn their approved information and designs into professionally personalized
            identification cards through a structured process. Whether you need a small organizational batch
            or a large institutional order, IDGen can help you plan the appropriate card specification,
            personalization and production workflow.
          </p>
        </div>
        <div className="mt-6">
          <FlowChain steps={["Requirement", "Data", "Design", "Preview", "Approval", "Printing", "Quality Check", "Dispatch"]} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request an ID Card Quote
          </Link>
          <Link href="/pricing/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            View ID Card Pricing
          </Link>
        </div>

        {/* What a card can carry */}
        <div className="mt-16">
          <SectionHead
            eyebrow="What We Print"
            title="Custom PVC ID Card Printing"
            lede="A professional ID card does more than display a person's name — it can combine a photograph, name, identification number, organization name, department, designation, class or course, contact information, QR code, barcode and other required identification information. IDGen produces customized cards according to the approved design, supplied data and required specifications."
          />
        </div>

        {/* Audiences */}
        <div className="mt-16">
          <SectionHead eyebrow="By Application" title="ID Cards for Different Organizations" lede="The same core ID card printing service can support different identification requirements." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <FeatureCard key={a.title} icon={a.icon} title={a.title} body={a.body} href={a.href} />
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Also suitable for visitor, contractor, member and other institutional identification — the appropriate
            card configuration depends on the application.
          </p>
        </div>

        {/* Bulk */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Large-Volume ID Card Printing for Institutions</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            IDGen supports bulk personalized ID card printing for organizations that need hundreds or thousands
            of cards in a single project — new academic-year batches, employee onboarding, university batches,
            institutional renewals, event participants, membership cards, visitor identification and large
            replacement projects. For bulk orders, the challenge is not simply printing a large number of
            cards — it is maintaining consistency across data, photographs, design, identification numbers,
            card layout, production and quality.
          </p>
          <Link href="/request-a-quote/" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
            Request Bulk ID Card Quote →
          </Link>
        </div>

        {/* Workflow */}
        <div className="mt-16">
          <SectionHead eyebrow="Process" title="One ID Card Printing Workflow" lede="From data to finished card." />
          <div className="mt-6">
            <WorkflowSteps steps={workflow} />
          </div>
        </div>

        {/* Data collection */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <div className="flex items-center gap-2.5">
              <Layers className="h-5 w-5 text-accent" />
              <h2 className="text-lg font-bold text-foreground">Bulk Personalized Data</h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Consider an organization producing 2,000 personalized cards — every card may contain a different
              name, photograph, ID number, department and designation. A single data error can affect an
              individual card, so IDGen places importance on the relationship between data, design, preview,
              approval and production, identifying avoidable errors before large-volume production wherever
              possible.
            </p>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <div className="flex items-center gap-2.5">
              <Eye className="h-5 w-5 text-accent" />
              <h2 className="text-lg font-bold text-foreground">IDGen Studio for Data Collection</h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Organizations that need to collect information and photographs from large numbers of people can
              use IDGen Studio, where applicable — connecting data collection, photograph, card data, preview
              and approval before printing. Useful for student batches, employee onboarding, institutional
              renewals, university identification, event participants and membership organizations.
            </p>
            <Link href="/idgen-studio/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
              Explore IDGen Studio →
            </Link>
          </div>
        </div>

        {/* Configuration table */}
        <div className="mt-16">
          <SectionHead eyebrow="Configuration" title="Choosing the Right ID Card Configuration" lede="Different organizations have different requirements — the appropriate combination should be selected according to the intended use." />
          <div className="mt-6">
            <CompareTable columns={["Requirement", "Typical Configuration"]} rows={configRows} highlightColumn={1} />
          </div>
          <Link href="/id-card-holders/" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
            Explore Complete ID Card Setup →
          </Link>
        </div>

        {/* Institutions */}
        <div className="mt-16">
          <SectionHead eyebrow="For Institutions" title="ID Card Printing for Institutions" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {institutions.map(([label, body]) => (
              <div key={label} className="rounded-2xl border border-surface-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* New vs Renewal */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">New ID Cards</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">For new students, new employees, new members, new staff, new institutions and new organizations.</p>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">Renewal Projects</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">For new academic years, employee renewals, expired cards, damaged cards, lost-card replacement and updated organizational information.</p>
          </div>
        </div>

        {/* Order components you need */}
        <div className="mt-16 rounded-2xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <Sparkles className="h-5 w-5 text-navy-deep" />
            <h2 className="text-lg font-bold text-navy-deep">Order Only What You Need</h2>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-deep/80">
            If your organization already has holders and lanyards, order ID Card Printing alone. For a complete
            wearable setup, combine ID Card + Holder + Hook + Lanyard, or where sealing is required, ID Card +
            Ultrasonic Sealing + Holder + Hook + Lanyard — you order the components you actually need rather
            than automatically purchasing a complete set.
          </p>
        </div>

        {/* Location */}
        <div className="mt-16 flex items-start gap-3 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
          <div>
            <h2 className="text-lg font-bold text-foreground">ID Card Printing Across Assam & Northeast India</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              IDGen is based in Guwahati, Assam, and serves organizational identification requirements across
              Assam and the wider Northeast India market.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-accent">
              <Link href="/service-areas/assam/" className="hover:underline">ID Card Printing in Assam →</Link>
              <Link href="/service-areas/assam/guwahati/" className="hover:underline">ID Card Printing in Guwahati →</Link>
            </div>
          </div>
        </div>

        {/* Why choose */}
        <div className="mt-16">
          <SectionHead eyebrow="Why IDGen" title="Why Choose IDGen for ID Card Printing?" lede="IDGen's approach is built around the complete identification workflow." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={Layers} title="Structured Process" body="Requirement → Data → Design → Preview → Approval → Production → Quality Check → Dispatch." />
            <FeatureCard icon={Users} title="Bulk Capability" body="Suitable for institutional and high-volume personalized requirements." />
            <FeatureCard icon={Eye} title="Preview Before Production" body="Where applicable, customers can review the design and personalized information before production." />
            <FeatureCard icon={ShieldCheck} title="Complete Identification Options" body="Cards can be combined with holders, hooks, lanyards and suitable sealing configurations." />
            <FeatureCard icon={Sparkles} title="Digital Workflow" body="IDGen Studio can support data collection and preview for suitable projects." />
            <FeatureCard icon={MapPin} title="Guwahati-Based" body="IDGen is based in Guwahati and serves organizations across Assam and Northeast India." />
          </div>
          <Link href="/why-idgen/" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
            Why IDGen? →
          </Link>
        </div>

        {/* How to order */}
        <div className="mt-16">
          <SectionHead eyebrow="Get Started" title="How to Order ID Cards" />
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
            title="Need ID card printing?"
            body="Tell us what type of card you need, how many, and whether you already have the data and design — IDGen can help you determine the appropriate configuration."
            links={[
              { label: "Request an ID Card Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore Student ID Cards", href: "/student-id-card-printing/" },
              { label: "Explore Employee ID Cards", href: "/employee-id-card-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
