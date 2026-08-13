import Link from "next/link";
import { Ticket, Presentation, Store, Building2, Trophy, School, Link as LinkIcon } from "lucide-react";
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
  title: "Event Card Printing | Custom Event Badges & Lanyards | IDGen",
  description:
    "Custom event card printing for conferences, exhibitions, seminars, workshops and corporate events. Personalized event badges with lanyards, one or two hooks and ultrasonic sealing options.",
  path: "/event-card-printing/",
});

const eventTypes = [
  { icon: Presentation, title: "Conference Cards", body: "Business, industry, academic and professional conferences — Conference Card + Lanyard + Hook." },
  { icon: Store, title: "Exhibition & Trade Show Badges", body: "Different designs for Visitor, Exhibitor, Organizer, Speaker and VIP categories." },
  { icon: Building2, title: "Corporate Event Cards", body: "Corporate meetings, annual events, dealer meets and product launches, branded to the event." },
  { icon: School, title: "School & Institutional Events", body: "Annual functions, cultural programmes, sports events and institutional conferences." },
  { icon: Trophy, title: "Sports Event Cards", body: "Tournaments, competitions, marathons and institutional sporting events." },
];

const categories = ["Delegate", "Speaker", "Organizer", "Staff", "Exhibitor", "Sponsor", "VIP", "Media", "Volunteer", "Visitor"];

const process = [
  { title: "Event Requirement", body: "Event type, approximate quantity, event date, card requirement, personalization and attachment requirement." },
  { title: "Share Participant Data", body: "Provide participant information and photographs where personalization is required." },
  { title: "Share Artwork", body: "Provide the event logo, branding and design requirements." },
  { title: "Select Attachment", body: "Choose One Hook + Lanyard or Two Hooks + Lanyard — sealing configuration follows the attachment setup." },
  { title: "Preview", body: "The design and personalized information can be reviewed where applicable." },
  { title: "Approval", body: "Production begins after the required specifications and artwork are approved." },
  { title: "Production", body: "The event cards and required components move into production." },
  { title: "Quality Check", body: "Finished materials are checked against the approved requirements." },
  { title: "Dispatch", body: "The completed order is prepared for dispatch according to the applicable project timeline." },
];

const faqs: Faq[] = [
  { q: "What is an event card?", a: "An event card is a customized identification badge used to identify participants, delegates, speakers, organizers, exhibitors, staff, VIPs or other event attendees." },
  { q: "Can event cards include photographs?", a: "Yes. Personalized event cards can include photographs when required and supplied as part of the event data." },
  { q: "Can event cards include QR codes?", a: "Yes. QR codes can be included when required as part of the approved card design." },
  { q: "Can event cards include sponsor logos?", a: "Yes. Sponsor and partner branding can be incorporated into the approved event-card artwork." },
  { q: "Do event cards use holders?", a: "Event cards can use different attachment configurations — the required setup may use a lanyard and one or two hooks rather than a conventional card holder." },
  { q: "Can event cards use two hooks?", a: "Yes. A two-hook configuration can be used where the event-card design requires two attachment points." },
  { q: "How many ultrasonic sealing points are required?", a: "For the configurations used by IDGen, one-hook setups use one sealing point and two-hook setups use two sealing points." },
  { q: "Can I order event cards with lanyards?", a: "Yes. Event cards can be supplied with the required lanyard and hook configuration." },
  { q: "Can I order only event cards?", a: "Yes. Event cards can be ordered separately when the customer already has the required accessories." },
  { q: "Can event cards be personalized?", a: "Yes. Participant names, photographs, organizations, categories, registration numbers and other required information can be personalized." },
  { q: "Can IDGen handle bulk event cards?", a: "Yes. IDGen supports bulk event-card requirements, subject to quantity, specification, personalization and production requirements." },
  { q: "Can I review the event cards before production?", a: "Where applicable, the design and personalized information can be reviewed before production." },
];

export default function EventCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Event Card Printing",
          description: "Custom event cards and badges for conferences, exhibitions, seminars and events.",
          path: "/event-card-printing/",
        })}
      />
      <PageHero
        eyebrow="Service"
        icon={Ticket}
        title="Custom Event Cards & Badges for Conferences, Exhibitions, Seminars & Events"
        lede="IDGen provides custom printed event cards and badges for conferences, seminars, exhibitions, workshops, corporate events, institutional programmes, trade shows, cultural events, sports events and other organized gatherings."
        visual={
          <IllustratedCard
            org="YOUR EVENT"
            subOrg="Delegate Identification"
            holderName="Delegate Name"
            holderRole="Speaker / Attendee"
            holderId="PASS: VIP-000"
            accent="#c084fc"
          />
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Event Card Printing", path: "/event-card-printing/" }]} />

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Event cards can be personalized with participant information, event branding, organization logos,
            photographs, QR codes, barcodes, categories and other required information. Depending on the
            event format, the card can be supplied with the appropriate lanyard and hook configuration,
            including one-hook or two-hook arrangements.
          </p>
          <p>
            An event card can identify participants, delegates, speakers, organizers, staff, volunteers,
            exhibitors, sponsors, VIP guests, media representatives and visitors — designed according to the
            event&apos;s branding and identification requirements.
          </p>
        </div>
        <div className="mt-6">
          <FlowChain steps={["Event Data", "Card Design", "Preview", "Approval", "Printing", "Attachment", "Quality Check", "Dispatch"]} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request Event Card Quote
          </Link>
          <Link href="/pricing/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            View Event Card Pricing
          </Link>
        </div>

        {/* Event types */}
        <div className="mt-16">
          <SectionHead eyebrow="By Event Type" title="Event Card Types" lede="IDGen can produce event identification cards for different event categories." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((e) => (
              <FeatureCard key={e.title} icon={e.icon} title={e.title} body={e.body} />
            ))}
          </div>
        </div>

        {/* Attachment configuration */}
        <div className="mt-16">
          <SectionHead
            eyebrow="Configuration"
            title="Event Card + Lanyard + Hook"
            lede="Event cards are commonly designed as a wearable identification system — unlike standard employee or student ID cards, event badges may use different attachment configurations depending on the card format and lanyard design."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-surface-border bg-surface p-6">
              <h3 className="font-semibold text-foreground">One-Hook Configuration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Event Card + One Hook + Lanyard — suitable where the card has a single attachment point.</p>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-6">
              <h3 className="font-semibold text-foreground">Two-Hook Configuration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Event Card + Two Hooks + Lanyard — used where the event card requires attachment at two points.</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            Where ultrasonic sealing is required, the sealing arrangement corresponds to the attachment
            configuration: one-hook setups use one ultrasonic sealing point, two-hook setups use two.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-accent">
            <Link href="/custom-printed-lanyard-printing/" className="hover:underline">Explore Custom Printed Lanyard Printing →</Link>
            <Link href="/id-card-hooks/" className="hover:underline">Explore ID Card Hooks →</Link>
            <Link href="/ultrasonic-sealing/" className="hover:underline">Explore Ultrasonic Sealing →</Link>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Event Card Categories</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">Large events may require different identification categories, each with its own design, colour treatment or text.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span key={c} className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground">{c}</span>
            ))}
          </div>
        </div>

        {/* Event vs Student/Employee */}
        <div className="mt-16">
          <SectionHead eyebrow="Distinction" title="Event Card vs Student or Employee ID Card" lede="Event cards are generally created for a specific event or programme, whereas student and employee ID cards are normally used for ongoing organizational identification." />
          <div className="mt-6">
            <CompareTable
              columns={["Identification", "Flow"]}
              rows={[
                ["Event", "Event → Participant → Badge → Lanyard"],
                ["Student", "Student → Institution → ID Card → Holder/Lanyard"],
                ["Employee", "Employee → Company → ID Card → Holder/Lanyard"],
              ]}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-accent">
            <Link href="/student-id-card-printing/" className="hover:underline">Student ID Card Printing →</Link>
            <Link href="/employee-id-card-printing/" className="hover:underline">Employee ID Card Printing →</Link>
          </div>
        </div>

        {/* What we need */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Basic Information", "Event name, event date, quantity, event location, required delivery date."],
            ["Card Information", "Card size, single or double-sided printing, personalization, photograph and QR/barcode requirement."],
            ["Branding", "Event logo, organization logo, sponsor logos, artwork and brand colours."],
            ["Attachment", "One-hook or two-hook configuration, lanyard requirement, ultrasonic sealing requirement."],
          ].map(([label, body]) => (
            <div key={label} className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="font-semibold text-foreground">{label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-16">
          <SectionHead eyebrow="Process" title="Event Card Printing Process" />
          <div className="mt-6">
            <WorkflowSteps steps={process} />
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <LinkIcon className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-bold text-foreground">Event Card Pricing</h2>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Event-card pricing depends on the required configuration rather than only the printed card —
            quantity, card specification, printing, personalization, artwork, lanyard, hook configuration,
            ultrasonic sealing, packaging and delivery requirements.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-accent">
            <Link href="/pricing/" className="hover:underline">View Event Card Pricing →</Link>
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
            title="Need event cards?"
            body="Whether you're organizing a conference, exhibition, seminar, workshop, corporate event, sports programme or institutional event, IDGen can provide customized event cards according to the required identification configuration."
            links={[
              { label: "Request Event Card Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore Custom Lanyard Printing", href: "/custom-printed-lanyard-printing/" },
              { label: "Explore Ultrasonic Sealing", href: "/ultrasonic-sealing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
