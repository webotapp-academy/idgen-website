import Link from "next/link";
import { Briefcase, GraduationCap, Building2, Ticket, Radio, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ID Card Printing Case Studies & Projects | IDGen",
  description:
    "Explore IDGen identification projects covering student ID cards, employee cards, event badges, lanyards and complete identification solutions.",
  path: "/case-studies/",
});

const categories = [
  { icon: GraduationCap, title: "Student ID Card Projects", body: "School, college or university identification. Typical requirement: student data + photographs + PVC ID cards + lanyards + holders." },
  { icon: Building2, title: "Employee Identification Projects", body: "Employee and staff identification for companies, offices, hospitals, industries and institutions." },
  { icon: Ticket, title: "Event Identification Projects", body: "Event cards, delegate badges, organizer badges, VIP identification and lanyard configurations." },
  { icon: Radio, title: "RFID Identification Projects", body: "Projects requiring printed RFID cards according to a compatible RFID system." },
  { icon: Layers, title: "Complete Wearable Identification", body: "Projects combining ID Card + Holder + Hook + Custom Printed Lanyard or applicable complete configurations." },
];

const format = [
  { title: "Organization", body: "Who the project was for." },
  { title: "Location", body: "City and state." },
  { title: "Requirement", body: "What the organization needed." },
  { title: "Product", body: "Cards, lanyards, holders, hooks, RFID or other products." },
  { title: "Workflow", body: "Data → Design → Preview → Approval → Production → Quality Check → Dispatch." },
  { title: "Finished Project", body: "Real photographs of the completed products." },
  { title: "Project Notes", body: "Important specifications or lessons from the project." },
  { title: "Customer Feedback", body: "Only published with permission." },
];

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies/" }])} />
      <PageHero
        eyebrow="Case Studies"
        icon={Briefcase}
        title="IDGen Case Studies & Identification Projects"
        lede="A real identification project involves more than the finished card — data preparation, photographs, design, personalization, approval, production, accessories, quality checking, packaging and dispatch."
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies/" }]} />

        <div className="mt-8 rounded-2xl border border-dashed border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Real projects, published with permission</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            This page is being built out with genuine IDGen customer projects. Only real, completed projects
            are published here — with organization name, location, requirement and photographs shown only
            where customer permission is confirmed. Where a customer prefers not to be named, a project is
            described neutrally instead, for example: &ldquo;Educational Institution — Assam. Student ID cards
            supplied for institutional use.&rdquo; We don&apos;t publish fabricated client names, logos or
            testimonials — check back as real projects are added, or{" "}
            <Link href="/contact-us/" className="font-semibold text-accent hover:underline">
              get in touch
            </Link>{" "}
            if you&apos;d like to be featured.
          </p>
        </div>

        <div className="mt-16">
          <SectionHead eyebrow="Categories" title="Case study categories" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <FeatureCard key={c.title} icon={c.icon} title={c.title} body={c.body} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionHead eyebrow="Format" title="How a case study is structured" lede="Every published case study follows the same 8-part structure." />
          <div className="mt-6">
            <WorkflowSteps steps={format} />
          </div>
        </div>

        <div className="mt-16">
          <CtaBand
            title="Have a similar identification requirement?"
            body="Tell IDGen about your organization, location, quantity and required products."
            links={[{ label: "Start Your Project", href: "/request-a-quote/", primary: true }]}
          />
        </div>
      </Container>
    </>
  );
}
