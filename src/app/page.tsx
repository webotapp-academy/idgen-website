import Link from "next/link";
import {
  IdCard,
  Tag,
  Ticket,
  Radio,
  GraduationCap,
  Building2,
  CalendarDays,
  Landmark,
  Camera,
  Eye,
  CheckCircle2,
  Sparkles,
  Workflow,
  Layers,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema-org";
import { HeroSection } from "@/components/home/HeroSection";
import { SITE } from "@/data/site";
import type { Faq } from "@/data/types";

const services = [
  { icon: IdCard, title: "ID Card Printing", body: "PVC ID cards for schools, colleges, companies, hospitals and institutions.", href: "/id-card-printing/" },
  { icon: Tag, title: "Custom Printed Lanyards", body: "Branded 20 mm lanyards with logos, colors and custom artwork.", href: "/custom-printed-lanyard-printing/" },
  { icon: Ticket, title: "Event Card Printing", body: "Conference badges, delegate cards and event identification solutions.", href: "/event-card-printing/" },
  { icon: Radio, title: "RFID Card Printing", body: "Customized RFID cards compatible with attendance and access systems.", href: "/rfid-card-printing/" },
];

const completeIdSolutions = [
  { title: "Card Only", body: "Suitable when your organization already has holders and lanyards." },
  { title: "Card + Holder", body: "Protects the card while keeping it professional and durable." },
  { title: "Wearable Identification", body: "Card + Holder + Hook + Lanyard for daily student and employee use." },
  { title: "Complete Ready-to-Use Set", body: "Ultrasonic sealing + holder + hook + lanyard for a finished wearable solution." },
];

const orgSolutions = [
  { icon: GraduationCap, title: "Students", body: "School, college and university identification with bulk personalization.", href: "/student-id-card-printing/" },
  { icon: Building2, title: "Companies", body: "Employee, staff and visitor identification with branded accessories.", href: "/employee-id-card-printing/" },
  { icon: CalendarDays, title: "Events", body: "Conference badges, delegate cards and one- or two-hook lanyard configurations.", href: "/event-card-printing/" },
  { icon: Landmark, title: "Institutions", body: "Hospitals, NGOs, government organizations and membership programmes.", href: "/why-idgen/" },
];

const studioSteps = [
  { icon: Layers, title: "Digital Data Collection", body: "Collect names, photographs and ID information in one workflow." },
  { icon: Camera, title: "Photo Management", body: "Keep photographs connected to the correct student or employee record." },
  { icon: Eye, title: "Card Preview", body: "Review personalized cards before production begins." },
  { icon: CheckCircle2, title: "Approval Workflow", body: "Approve records before printing to reduce costly reprints." },
];

const whyChoose = [
  { icon: Sparkles, title: "Identity-Focused Business", body: "Specialized in organizational identification systems." },
  { icon: Workflow, title: "Structured Workflow", body: "Requirement → Preview → Production → Quality → Dispatch." },
  { icon: Building2, title: "Bulk Capability", body: "Designed for institutional and high-volume projects." },
  { icon: IdCard, title: "Complete ID Solutions", body: "Cards, lanyards, holders, hooks and RFID in one workflow." },
  { icon: Eye, title: "Preview Before Printing", body: "Reduce data and personalization errors before production." },
  { icon: MapPin, title: `${SITE.hqCity}-Based Service`, body: `Serving ${SITE.hqState} and the wider Northeast India market.` },
];

const priorityAreas = ["Guwahati", "Jorhat", "Dibrugarh", "Silchar", "Tezpur", "Nagaon", "Tinsukia", "Sivasagar", "Golaghat", "Barpeta"];

const faqs: Faq[] = [
  { q: "What does IDGen do?", a: "IDGen provides customized ID cards, printed lanyards, RFID cards, event badges, ID card accessories and digital identity workflows for organizations." },
  { q: "Where is IDGen located?", a: "IDGen is based in Guwahati, Assam, and serves customers across Northeast India." },
  { q: "Can IDGen handle bulk ID card printing?", a: "Yes. Bulk ID card printing is supported for schools, colleges, companies, institutions and events through the main ID card printing service." },
  { q: "Can I order a complete ID card set?", a: "Yes. You can combine ID cards, holders, hooks, ultrasonic sealing and custom printed lanyards into one complete wearable identification solution." },
  { q: "Does IDGen provide data collection?", a: "Yes. IDGen Studio supports digital data collection, photograph management, card preview and approval before printing." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <HeroSection />

      {/* Trusted by */}
      <section className="border-b border-surface-border bg-surface py-16">
        <Container>
          <SectionHead
            eyebrow="More Than a Card"
            title="Trusted by organizations that need more than just an ID card"
            lede="Most organizations don't simply need a card — they need a complete identification system. Whether you're onboarding 2,000 students, issuing employee ID cards, organizing a conference, or replacing annual ID cards, IDGen helps coordinate the entire workflow from data collection to finished wearable identification."
          />
          <p className="mt-4 text-sm font-bold tracking-widest text-accent uppercase">One workflow. One partner.</p>
        </Container>
      </section>

      {/* Services */}
      <section className="py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead eyebrow="What We Provide" title="Our Identity Services" lede="IDGen provides specialized identification services designed for institutions and organizations." />
            <Link href="/services/" className="text-sm font-semibold text-accent hover:underline">
              View all services →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <FeatureCard key={s.title} icon={s.icon} title={s.title} body={s.body} href={s.href} />
            ))}
          </div>
        </Container>
      </section>

      {/* Complete identification solutions */}
      <section className="border-y border-surface-border bg-surface py-16">
        <Container>
          <SectionHead eyebrow="Build the Full Set" title="Complete Identification Solutions" lede="Most customers don't order individual products — they order a complete wearable identification system." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {completeIdSolutions.map((c) => (
              <div key={c.title} className="rounded-2xl border border-surface-border bg-background p-5">
                <h3 className="font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions for every organization */}
      <section className="py-16">
        <Container>
          <SectionHead eyebrow="By Organization" title="Solutions for Every Organization" lede="Instead of creating separate product pages for every customer type, IDGen builds solutions around how organizations actually use identification." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {orgSolutions.map((o) => (
              <FeatureCard key={o.title} icon={o.icon} title={o.title} body={o.body} href={o.href} />
            ))}
          </div>
        </Container>
      </section>

      {/* IDGen Studio */}
      <section className="border-y border-surface-border bg-surface py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <SectionHead
                eyebrow="Digital Workflow"
                title="IDGen Studio — Digital Identity Workflow"
                lede="Collecting photographs and personal information is often the most difficult part of an ID card project. IDGen Studio connects digital data collection with physical ID card production."
              />
              <p className="mt-4 text-lg font-bold text-foreground">See It Before We Print It.</p>
              <Link
                href="/idgen-studio/"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-deep"
              >
                Explore IDGen Studio
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {studioSteps.map((s) => (
                <FeatureCard key={s.title} icon={s.icon} title={s.title} body={s.body} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="py-16">
        <Container>
          <SectionHead eyebrow="Why IDGen" title="Why Organizations Choose IDGen" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} body={w.body} />
            ))}
          </div>
          <Link href="/why-idgen/" className="mt-6 inline-block text-sm font-semibold text-accent hover:underline">
            Read our full story →
          </Link>
        </Container>
      </section>

      {/* At a glance */}
      <section className="border-y border-surface-border bg-navy py-16 text-white">
        <Container>
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-bold tracking-widest text-accent uppercase">Based In</dt>
              <dd className="mt-1 text-lg font-extrabold">{SITE.hqCity}</dd>
              <p className="mt-1 text-xs text-white/60">Serving Assam & Northeast India</p>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-widest text-accent uppercase">Up To</dt>
              <dd className="mt-1 text-lg font-extrabold">{SITE.dailyCapacity}</dd>
              <p className="mt-1 text-xs text-white/60">Varies by product & project</p>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-widest text-accent uppercase">Dispatch</dt>
              <dd className="mt-1 text-lg font-extrabold">{SITE.dispatchTime}</dd>
              <p className="mt-1 text-xs text-white/60">After approval and payment</p>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-widest text-accent uppercase">Focus</dt>
              <dd className="mt-1 text-lg font-extrabold">Institutional</dd>
              <p className="mt-1 text-xs text-white/60">Schools, companies, hospitals, events</p>
            </div>
          </dl>
        </Container>
      </section>

      {/* Service area teaser */}
      <section className="py-16">
        <Container>
          <SectionHead eyebrow="Coverage" title="Serving Assam & Northeast India" lede={`IDGen is based in ${SITE.hqCity}, ${SITE.hqState} and provides identification solutions across Assam and the wider Northeast India region.`} />
          <p className="mt-4 text-xs font-bold tracking-widest text-muted uppercase">Priority Service Areas</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {priorityAreas.map((city) => (
              <span key={city} className="rounded-full bg-surface border border-surface-border px-3.5 py-1.5 text-sm text-foreground">
                {city}
              </span>
            ))}
          </div>
          <Link href="/service-areas/assam/" className="mt-5 inline-block text-sm font-semibold text-accent hover:underline">
            Explore Service Area →
          </Link>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-y border-surface-border bg-surface py-16">
        <Container>
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-8 max-w-3xl">
            <FaqList faqs={faqs} />
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="py-16">
        <Container>
          <CtaBand
            title="Ready to build your identification system?"
            body="Whether you need student ID cards, employee identification, RFID cards, event badges or complete wearable ID solutions, IDGen helps you coordinate the entire workflow from data to dispatch."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore Services", href: "/services/" },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
