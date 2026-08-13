import Link from "next/link";
import { Tag, GraduationCap, Building2, Ticket, Palette, Repeat, Award, Layers } from "lucide-react";
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
  title: "Custom Printed Lanyard Printing | 20mm ID Card Lanyards | IDGen",
  description:
    "Custom printed 20mm lanyards for ID cards, students, employees, organizations and events. Add your logo, branding and artwork. Bulk lanyard printing by IDGen.",
  path: "/custom-printed-lanyard-printing/",
});

const applications = [
  { icon: GraduationCap, title: "Student Identification", body: "Custom lanyards can complement student ID cards with school or institutional branding.", href: "/student-id-card-printing/" },
  { icon: Building2, title: "Employee Identification", body: "Companies can use branded lanyards to create a consistent employee identification system.", href: "/employee-id-card-printing/" },
  { icon: Ticket, title: "Events", body: "Event organizers can use branded lanyards alongside event cards and the required attachment configuration.", href: "/event-card-printing/" },
  { icon: Award, title: "General Organizations", body: "Institutions, hospitals, associations and clubs requiring wearable identification." },
];

const brandingOptions = [
  { icon: Tag, title: "Organization Branding", body: "LOGO → ORGANIZATION NAME → LOGO → ORGANIZATION NAME, repeated along the strap." },
  { icon: Repeat, title: "Repeating Brand Pattern", body: "A repeating logo or graphic used across the length of the lanyard." },
  { icon: Ticket, title: "Event Branding", body: "Event name, logo, sponsor branding or approved event artwork." },
  { icon: Palette, title: "Department Branding", body: "Different designs for departments, categories or organizational groups where required." },
];

const artworkProcess = [
  { title: "Share Your Branding", body: "Provide your logo, artwork or branding requirements." },
  { title: "Select the Lanyard", body: "Confirm the required lanyard width and specification." },
  { title: "Artwork Preparation", body: "The artwork is prepared according to the selected lanyard format." },
  { title: "Preview", body: "Review the proposed design before production." },
  { title: "Approval", body: "Production begins after the required artwork and specifications are approved." },
  { title: "Production", body: "The approved lanyards move into production." },
  { title: "Quality Check", body: "Finished lanyards are checked against the approved requirements." },
  { title: "Dispatch", body: "The completed order is prepared for dispatch." },
];

const faqs: Faq[] = [
  { q: "What is a custom printed lanyard?", a: "A custom printed lanyard is a wearable strap customized with an organization's logo, name, colours, text or artwork and used to carry an ID card or badge." },
  { q: "What size lanyard does IDGen provide?", a: "The standard lanyard featured by IDGen is a 20 mm custom printed lanyard." },
  { q: "Can I print my company logo on the lanyard?", a: "Yes. Organization logos, names, colours, text and approved artwork can be incorporated into the lanyard design." },
  { q: "Can schools order custom printed lanyards?", a: "Yes. Custom lanyards can be used with student and staff identification systems." },
  { q: "Can I order lanyards for employees?", a: "Yes. Companies can order branded lanyards for employee and staff identification." },
  { q: "Can I order lanyards for an event?", a: "Yes. Custom printed lanyards can be produced for conferences, seminars, exhibitions and other events." },
  { q: "Can I order only lanyards?", a: "Yes. You can order custom printed lanyards separately if you already have your ID cards and other accessories." },
  { q: "Can I order lanyards with ID cards?", a: "Yes. Lanyards can be included as part of a broader identification order." },
  { q: "Can ultrasonic sealing be added?", a: "Yes. Ultrasonic sealing can be included for suitable lanyard attachment configurations." },
  { q: "Can I order custom lanyards in bulk?", a: "Yes. Bulk quantities can be quoted according to quantity, artwork and specification." },
  { q: "Can I use my existing design?", a: "Yes. Customer-supplied artwork can be used where it meets the required production specifications." },
];

export default function CustomPrintedLanyardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Custom Printed Lanyard Printing",
          description: "Custom 20mm printed lanyards for ID cards, organizations and events.",
          path: "/custom-printed-lanyard-printing/",
        })}
      />
      <PageHero
        eyebrow="Service"
        icon={Tag}
        title="Custom 20 mm Printed Lanyards for ID Cards, Organizations & Events"
        lede="IDGen provides custom printed lanyard printing for organizations that need branded, professional and consistent identification accessories."
        visual={
          <IllustratedCard
            org="YOUR BRAND"
            subOrg="Custom Printed Lanyard"
            holderName="Full Name"
            holderRole="Organization Role"
            holderId="ID: XXXX-0000"
            accent="#2dd4bf"
          />
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Custom Printed Lanyards", path: "/custom-printed-lanyard-printing/" }]} />

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Our standard offering is <strong>20 mm custom printed lanyards</strong>, suitable for student ID
            cards, employee identification, institutional programs, events, conferences, memberships and
            other organizational applications. Lanyards can be customized with your organization logo, name,
            brand colours, text, repeating logo pattern, event branding, department branding and approved
            artwork.
          </p>
          <p>
            A custom printed lanyard is a branded neck strap used to carry an ID card, badge or other
            identification credential — instead of a plain lanyard, print your logo, name, colours or
            repeating branding directly onto the strap.
          </p>
        </div>
        <div className="mt-6">
          <FlowChain steps={["ID Card", "Holder / Attachment", "Hook", "Custom Printed Lanyard"]} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request a Lanyard Quote
          </Link>
          <Link href="/pricing/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            View Lanyard Pricing
          </Link>
        </div>

        {/* Branding options */}
        <div className="mt-16">
          <SectionHead eyebrow="Design" title="Custom Lanyard Printing Options" lede="Your lanyard can be designed around your organization's existing branding." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brandingOptions.map((b) => (
              <FeatureCard key={b.title} icon={b.icon} title={b.title} body={b.body} />
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Can include: company/school/college/university logo, organization name, event name, brand colours,
            department name, short text, repeating patterns, sponsor logos and other approved graphics — final
            artwork is checked and approved before production.
          </p>
        </div>

        {/* Applications */}
        <div className="mt-16">
          <SectionHead eyebrow="By Application" title="Lanyard Printing for Different Applications" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((a) => (
              <FeatureCard key={a.title} icon={a.icon} title={a.title} body={a.body} href={a.href} />
            ))}
          </div>
        </div>

        {/* Complete configuration */}
        <div className="mt-16 rounded-2xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <Layers className="h-5 w-5 text-navy-deep" />
            <h2 className="text-lg font-bold text-navy-deep">Lanyard + ID Card Setup</h2>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-deep/80">
            A lanyard is normally only one part of the final wearable identification setup — combine it with
            ID Card + Holder + Hook + Lanyard, or where applicable, ID Card + Ultrasonic Sealing + Holder +
            Hook + Lanyard. The correct configuration depends on the type of card, holder, attachment and
            intended use.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-navy-deep">
            <Link href="/id-card-printing/" className="hover:underline">Explore ID Card Printing →</Link>
            <Link href="/id-card-holders/" className="hover:underline">Explore ID Card Holders →</Link>
            <Link href="/id-card-hooks/" className="hover:underline">Explore ID Card Hooks →</Link>
            <Link href="/ultrasonic-sealing/" className="hover:underline">Explore Ultrasonic Sealing →</Link>
          </div>
        </div>

        {/* Why use */}
        <div className="mt-16">
          <SectionHead eyebrow="Why Lanyards" title="Why Use Custom Printed Lanyards?" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Consistent Branding", "A branded lanyard helps maintain a consistent visual identity across students, employees, staff, members or event participants."],
              ["Easy Identification", "A common lanyard design can make organizational identification easier to recognize."],
              ["Professional Appearance", "Matching lanyards create a more organized appearance than unrelated or plain accessories."],
              ["Bulk Customization", "One design can be reproduced across large quantities for institutional requirements."],
              ["Works With Existing Cards", "If you already have ID cards, custom printed lanyards can be ordered as an accessory without replacing the cards."],
            ].map(([label, body]) => (
              <div key={label} className="rounded-2xl border border-surface-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-16">
          <SectionHead eyebrow="Process" title="Lanyard Artwork Process" />
          <div className="mt-6">
            <WorkflowSteps steps={artworkProcess} />
          </div>
        </div>

        {/* Pricing note */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Custom Printed Lanyard Price</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Standard product: <strong className="text-foreground">20 mm Custom Printed Lanyard — ₹15/piece</strong> — subject
            to current quotation, quantity and applicable specifications.
          </p>
          <Link href="/pricing/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
            View Current Lanyard Pricing →
          </Link>
        </div>

        {/* Location */}
        <p className="mt-16 text-sm text-muted">
          IDGen is based in Guwahati, Assam, serving organizations across Assam and Northeast India — see{" "}
          <Link href="/service-areas/assam/guwahati/" className="font-semibold text-accent hover:underline">Guwahati Services →</Link>{" "}
          and <Link href="/service-areas/assam/" className="font-semibold text-accent hover:underline">Assam Services →</Link>.
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
            title="Need custom printed lanyards?"
            body="Whether you need branded lanyards for students, employees, organizations, members or events, IDGen can provide custom printed lanyards according to your approved branding and application requirements."
            links={[
              { label: "Request a Lanyard Quote", href: "/request-a-quote/", primary: true },
              { label: "View Pricing", href: "/pricing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
