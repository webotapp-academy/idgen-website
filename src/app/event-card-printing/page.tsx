import Image from "next/image";
import Link from "next/link";
import { Ticket, Presentation, Store, Building2, Trophy, School, Link as LinkIcon, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
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
  { icon: Presentation, title: "Conferences & Summits", body: "High-visibility large format delegate badges with sponsor logos, speaker ribbons, and anti-flip dual hooks." },
  { icon: Store, title: "Exhibitions & Trade Expos", body: "Color-coded category passes for Visitors, Exhibitors, Organizers, Media, and VIP buyers with instant scan QR codes." },
  { icon: Building2, title: "Corporate Summits & Dealer Meets", body: "Executive satin lanyard sets with personalized delegate names, agenda timetables, and RFID access zones." },
  { icon: School, title: "Academic & Institutional Fests", body: "Durable PVC badge passes for university symposiums, inter-college cultural events, and youth festivals." },
  { icon: Trophy, title: "Sports Tournaments & Marathons", body: "Waterproof, tear-proof accreditation badges for athletes, referees, official marshals, and VIP guests." },
];

const categories = ["Delegate", "Speaker", "Organizer", "Staff", "Exhibitor", "Sponsor", "VIP", "Media", "Volunteer", "Visitor"];

const eventGallery = [
  { title: "Dual-Hook Anti-Flip Event Pass", type: "Conference Pass", img: "/images/Event Card/Events Card with 2 hook.png" },
  { title: "Single-Hook VIP Summit Badge", type: "Executive Summit", img: "/images/Event Card/Events card with 1 hook.png" },
  { title: "Deluxe Acrylic Lanyard Pass", type: "Expo & Trade Show", img: "/images/Event Card/Event card.jpeg" },
  { title: "Sponsor-Branded Credential", type: "Institutional Fest", img: "/images/Event Card/1.jpeg" },
  { title: "Press & Media VIP Accreditation Pass", type: "Media Pass", img: "/images/Event Card/2.jpeg" },
  { title: "Organizer & Crew Event Badge", type: "Crew Pass", img: "/images/Event Card/3.jpeg" },
  { title: "Summit Speaker & Delegate Badge", type: "Delegate Pass", img: "/images/Event Card/4.jpeg" },
  { title: "Over-Sized Convention Badge with Satin Lanyard", type: "Convention", img: "/images/Event Card/5.jpeg" },
];

const process = [
  { title: "1. Event Scope & Timeline", body: "Confirm attendee volume, date of event, card format (standard CR80 or large format), and hook configuration." },
  { title: "2. Participant Data Ingestion", body: "Upload attendee roster, designations, companies, and category types (VIP, Speaker, Delegate)." },
  { title: "3. Sponsor Branding Artwork", body: "Our design team positions title sponsors, co-hosts, and schedule QR codes with high-contrast typography." },
  { title: "4. Single or Dual Hook Assembly", body: "Select anti-twist two-hook lanyard ribbons or single swivel clips depending on pass size." },
  { title: "5. Automated Proof Sign-Off", body: "Event organizers review high-resolution digital print sheets before mass press run." },
  { title: "6. Express Production & Dispatch", body: "High-capacity printing with guaranteed express delivery to your event venue across Northeast India." },
];

const faqs: Faq[] = [
  { q: "Why choose dual-hook lanyards for event badges?", a: "Dual-hook lanyards attach to both top corners of an oversized event pass, preventing the badge from flipping backwards so delegate names and sponsor logos remain visible 100% of the time." },
  { q: "Can we print last-minute badges for on-spot registrations?", a: "Yes. We can provide pre-printed blank branded event card shells that your registration desk can personalize on-site using thermal label printers or marker overlays." },
  { q: "Can event cards include dynamic QR codes for access scanning?", a: "Yes. Every badge can feature a unique encrypted QR code or barcode matched to your event app (Townscript, Eventbrite, or custom scanners) for fast turnstile check-in." },
  { q: "What sizes are available for event cards?", a: "We produce standard ISO CR80 (85.6 × 54 mm), large convention badges (100 × 70 mm), and oversized VIP credentials (140 × 90 mm)." },
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
        eyebrow="Conferences & Accreditation"
        icon={Ticket}
        title="Custom Event Badges, VIP Passes & Dual-Hook Lanyards"
        lede="Turn attendees into brand ambassadors with high-definition delegate credentials, sponsor-branded satin lanyards, and anti-flip double-hook badges manufactured for seamless event management."
        stats={[
          { label: "Format", value: "Standard & Large" },
          { label: "Lanyard Setup", value: "Single & Dual Hook" },
          { label: "Rush Dispatch", value: "24–48h Available" },
          { label: "Branding", value: "Full-Color Sublimation" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-purple-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Dual Hook Event Card */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Event Card/Events Card with 2 hook.png"
                  alt="Events Card with 2 Hook Anti-Flip Lanyard"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-purple-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Dual-Hook Anti-Flip</span>
                </div>
              </div>

              {/* Overlapping Single Hook Pass */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Event Card/Events card with 1 hook.png"
                  alt="Single Hook VIP Delegate Badge"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Event Badge Sample */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Event Card/Event card.jpeg"
                  alt="Event Accreditation Pass"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Event Card Printing", path: "/event-card-printing/" }]} />

        {/* Real Event Badges Showcase */}
        <div className="mt-8">
          <SectionHead
            eyebrow="Accreditation Showcase"
            title="Real Event Passes & Badges Produced by IDGen"
            lede="Engineered for maximum sponsor visibility and attendee comfort at conferences across Guwahati, Shillong, and the Northeast."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventGallery.map((eg) => (
              <div key={eg.title} className="group overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm transition hover:shadow-xl hover:border-accent/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 img-shine">
                  <Image
                    src={eg.img}
                    alt={eg.title}
                    fill
                    className="img-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-bold text-slate-200 backdrop-blur-md">
                    {eg.type}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-sm">{eg.title}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-500 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Live Sample</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Banner */}
        <div className="mt-20 rounded-3xl border border-surface-border bg-surface p-8 sm:p-10">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">Attendee Segmentation</span>
          <h2 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl">
            Color-Coded Badge Ribbons for Instant Identification
          </h2>
          <p className="mt-3 text-sm text-muted max-w-2xl">
            Eliminate registration bottlenecks and security confusion by assigning custom badge colors to each participant tier:
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {categories.map((c) => (
              <span key={c} className="rounded-xl border border-surface-border bg-background px-4 py-2 text-xs font-bold text-foreground shadow-sm">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Event Types */}
        <div className="mt-20">
          <SectionHead eyebrow="Event Types" title="Tailored Badging for Every Type of Gathering" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((t) => (
              <FeatureCard key={t.title} icon={t.icon} title={t.title} body={t.body} />
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-20">
          <SectionHead eyebrow="Production Pipeline" title="From Agenda Finalization to Event-Ready Badges" />
          <div className="mt-8">
            <WorkflowSteps steps={process} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About Event Badges" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Organizing an upcoming conference or summit?"
            body="Submit your event date and estimated attendee count for priority fast-track scheduling and custom 3D digital mockups."
            links={[
              { label: "Request Event Badge Quote", href: "/request-a-quote/", primary: true },
              { label: "Custom Satin Lanyards", href: "/custom-printed-lanyard-printing/" },
              { label: "View Pricing Tiers", href: "/pricing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
