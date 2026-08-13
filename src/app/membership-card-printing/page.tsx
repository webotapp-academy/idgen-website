import Link from "next/link";
import { Award, Dumbbell, HeartHandshake, Building2, Hotel, Users, QrCode, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { IllustratedCard } from "@/components/ui/IllustratedCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Membership Card Printing | Custom PVC Membership Cards | IDGen",
  description:
    "Custom membership card printing for clubs, gyms, associations, hotels, NGOs and organizations. Personalized PVC membership cards with photos, QR codes, barcodes and branding by IDGen.",
  path: "/membership-card-printing/",
});

const orgTypes = [
  { icon: Award, title: "Clubs", body: "Sports, social, cultural, recreation, country and hobby clubs." },
  { icon: HeartHandshake, title: "Associations", body: "Professional, trade, business, industry and community associations." },
  { icon: Dumbbell, title: "Gyms & Fitness Centres", body: "Member Name + Photograph + Membership Number + Membership Plan + Validity." },
  { icon: Hotel, title: "Hotels & Resorts", body: "Suitable membership, loyalty or guest programmes." },
  { icon: Users, title: "NGOs & Community Organizations", body: "Members, volunteers, coordinators, field teams and registered participants." },
  { icon: Building2, title: "Professional Organizations", body: "Registered members with membership category, number and validity." },
];

const process = [
  { title: "Requirement", body: "Share your membership-card requirements and approximate quantity." },
  { title: "Member Data", body: "Provide member information and photographs, or use IDGen Studio where applicable." },
  { title: "Design", body: "Finalize the card artwork and required information." },
  { title: "Preview", body: "Review the design and personalized member information." },
  { title: "Approval", body: "Approve the final records and design." },
  { title: "Production", body: "Approved cards move into production." },
  { title: "Quality Check", body: "Finished cards are checked against the approved requirements." },
  { title: "Assembly", body: "Where required, cards can be combined with suitable holders, hooks and lanyards." },
  { title: "Dispatch", body: "Completed and approved materials are prepared for dispatch according to the applicable order timeline." },
];

const setups = [
  { title: "Card Only", body: "Membership Card." },
  { title: "Wearable", body: "Membership Card + Holder + Hook + Lanyard." },
  { title: "Technology-Enabled", body: "RFID Membership Card + Compatible Identification System." },
  { title: "Digital Workflow", body: "IDGen Studio → Member Data → Preview → Approval → Production." },
];

const faqs: Faq[] = [
  { q: "What is a membership ID card?", a: "A membership ID card is a personalized card issued to a registered member of an organization, club, business or membership programme." },
  { q: "Can IDGen print custom membership cards?", a: "Yes. IDGen provides customized membership card printing with member information, photographs, branding, membership numbers, validity and other required details." },
  { q: "Can membership cards include photographs?", a: "Yes. Member photographs can be included where required." },
  { q: "Can membership cards have QR codes?", a: "Yes. QR codes can be printed on membership cards where required. Their actual functionality depends on the organization's supporting system." },
  { q: "Can membership cards have barcodes?", a: "Yes. Barcodes can be included for compatible identification and verification systems." },
  { q: "Can you print RFID membership cards?", a: "RFID membership cards can be considered where the required RFID technology, chip, frequency, reader and software system are compatible." },
  { q: "Can membership cards be printed in bulk?", a: "Yes. IDGen supports bulk membership-card requirements according to quantity, data readiness, design and specifications." },
  { q: "Can membership cards be supplied with lanyards?", a: "Yes. A suitable membership card can be combined with an ID card holder, hook and 20 mm custom printed lanyard where a wearable setup is required." },
  { q: "Can IDGen collect member information digitally?", a: "Yes. IDGen Studio can support customized data collection and card preview for suitable projects." },
  { q: "Can membership cards be printed batch-wise?", a: "Where the configured IDGen Studio workflow supports it, organizations can review and approve suitable records in batches rather than waiting for all member records to be completed." },
  { q: "How much does membership card printing cost?", a: "The price depends on quantity, card specification, personalization, printing requirements, accessories and other project requirements. A quotation should be requested for the exact specification." },
];

export default function MembershipCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Membership Card Printing",
          description: "Custom membership card printing for clubs, associations, gyms, hotels and organizations.",
          path: "/membership-card-printing/",
        })}
      />
      <PageHero
        eyebrow="Service"
        icon={Award}
        title="Custom Membership ID Card Printing for Clubs, Gyms, Associations, Hotels, Resorts & Organizations"
        lede="IDGen provides custom membership card printing for clubs, associations, NGOs, gyms, sports clubs, hotels, resorts, recreational organizations, professional bodies, institutions and other membership-based organizations."
        visual={
          <IllustratedCard
            org="YOUR ORGANIZATION"
            subOrg="Membership Card"
            holderName="Member Name"
            holderRole="Gold / Standard Tier"
            holderId="MEM: XXXX"
            accent="#f59e0b"
          />
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Membership Card Printing", path: "/membership-card-printing/" }]} />

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            We produce personalized membership cards with member photograph, name, membership number,
            category, plan, joining date, validity date, organization name and logo, QR code, barcode and
            other organization-approved information. Membership cards can be used for member identification,
            membership verification, loyalty programmes, check-in and compatible identification or access
            systems, depending on the organization&apos;s requirements.
          </p>
        </div>
        <div className="mt-6">
          <FlowChain steps={["Member Data", "Design", "Preview", "Approval", "Production", "Quality Check", "Dispatch"]} />
        </div>
        <div className="mt-6">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request a Membership Card Quote
          </Link>
        </div>

        {/* Org types */}
        <div className="mt-16">
          <SectionHead eyebrow="By Organization" title="Membership Cards for Different Organizations" lede="One membership-card service can support different types of organizations without creating a separate page for every industry." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {orgTypes.map((o) => (
              <FeatureCard key={o.title} icon={o.icon} title={o.title} body={o.body} />
            ))}
          </div>
        </div>

        {/* QR / barcode / RFID */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <div className="flex items-center gap-2.5">
              <QrCode className="h-5 w-5 text-accent" />
              <h3 className="font-semibold text-foreground">QR Codes</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Can be used to identify a member, retrieve information, support verification or check-in — the
              actual function depends on the organization&apos;s system. IDGen does not claim a QR code
              automatically provides membership management or access control.
            </p>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">Barcodes</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              For member identification, check-in, verification and internal record lookup — format and
              implementation confirmed against the customer&apos;s existing system.
            </p>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">RFID Membership Cards</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Considered where compatible hardware and software systems are available — Card → Chip →
              Frequency → Reader → Software/System.
            </p>
            <Link href="/rfid-card-printing/" className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">
              Explore RFID Card Printing →
            </Link>
          </div>
        </div>

        {/* Lanyards/holders */}
        <div className="mt-16 rounded-2xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <Layers className="h-5 w-5 text-navy-deep" />
            <h2 className="text-lg font-bold text-navy-deep">Membership Cards With Lanyards & Holders</h2>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-deep/80">
            Where members should visibly wear their membership cards: Membership Card → Holder → Hook →
            Custom Printed Lanyard, with 20 mm custom printed lanyards customizable to your branding.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-navy-deep">
            <Link href="/custom-printed-lanyard-printing/" className="hover:underline">Explore Custom Printed Lanyard Printing →</Link>
            <Link href="/id-card-holders/" className="hover:underline">Explore ID Card Holders →</Link>
          </div>
        </div>

        {/* Digital workflow */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">IDGen Studio for Membership Cards</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Organizations collecting information from many members can use IDGen Studio, where applicable —
            a customized form, shared via link or QR code, lets members fill their details, upload a
            photograph and preview their card before submitting. The organization can then review, correct,
            and approve records batch-wise, particularly useful when members join at different times.
          </p>
          <Link href="/idgen-studio/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
            Explore IDGen Studio →
          </Link>
        </div>

        {/* Setups */}
        <div className="mt-16">
          <SectionHead eyebrow="Configuration" title="Membership Cards + Complete Identification Setup" lede="Organizations can choose only the components they require." />
          <div className="mt-6">
            <WorkflowSteps steps={setups} />
          </div>
        </div>

        {/* Process */}
        <div className="mt-16">
          <SectionHead eyebrow="Process" title="Membership Card Production Process" />
          <div className="mt-6">
            <WorkflowSteps steps={process} />
          </div>
        </div>

        {/* Who can use */}
        <div className="mt-16 rounded-2xl border border-dashed border-surface-border bg-surface p-6">
          <h2 className="text-lg font-bold text-foreground">Who Can Use Custom Membership Cards?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Clubs, associations, NGOs, gyms, fitness centres, sports clubs, games zones, entertainment
            centres, hotels, resorts, spas, restaurants, cafés, food parks, recreation centres, professional
            organizations, community organizations, alumni organizations and other membership programmes.
          </p>
        </div>

        {/* Pricing */}
        <p className="mt-16 max-w-3xl text-sm leading-relaxed text-muted">
          Membership card pricing depends on quantity, card specification, single/double-side printing,
          personalization, QR/barcode and RFID requirements, holder and lanyard requirements, packaging and
          delivery. <Link href="/pricing/" className="font-semibold text-accent hover:underline">View IDGen Pricing →</Link>
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
            title="Need custom membership cards?"
            body="Whether you need membership cards for a club, gym, association, hotel, resort, NGO, sports organization or other membership programme, IDGen can help you plan the required card and identification setup."
            links={[
              { label: "Request a Membership Card Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "View Pricing", href: "/pricing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
