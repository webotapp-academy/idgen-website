import Link from "next/link";
import { BookOpen, HelpCircle, Briefcase, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ID Card & Identity Solutions Resources | IDGen",
  description:
    "Guides, FAQs, templates and case studies covering ID card printing, student ID cards, employee ID cards, lanyards, RFID and identity workflows by IDGen.",
  path: "/resources/",
});

const categories = [
  { icon: BookOpen, title: "Guides", body: "Practical guides covering ID card planning, personalization, bulk projects, lanyards, accessories, RFID requirements and identification workflows.", href: "/resources/guides/" },
  { icon: HelpCircle, title: "Frequently Asked Questions", body: "Direct answers about ID card printing, pricing, bulk orders, lanyards, holders, RFID cards, IDGen Studio and service coverage.", href: "/faq/" },
  { icon: Briefcase, title: "Case Studies", body: "Real identification projects demonstrating how organizations use IDGen products and workflows. Only completed, shareable projects are published here.", href: "/case-studies/" },
  { icon: FileText, title: "Templates", body: "Useful templates to help organizations prepare data, card requirements, specifications and project information before contacting IDGen.", href: "/templates/" },
];

const byRequirement = [
  ["Student ID Cards", "Planning student photographs, names, admission numbers, classes, courses and other identification information."],
  ["Employee ID Cards", "Planning employee photographs, employee IDs, departments, designations and organizational branding."],
  ["Bulk ID Card Projects", "Managing large quantities of personalized cards requires accurate data, approved designs and structured production."],
  ["Custom Printed Lanyards", "Understanding lanyard widths, artwork, branding and attachment requirements."],
  ["Event Identification", "Planning delegate, speaker, organizer, VIP, exhibitor and staff badges."],
  ["RFID Identification", "Understanding the information required before ordering RFID-enabled cards."],
  ["Digital ID Card Data Collection", "Understanding how IDGen Studio connects information collection, card preview, organization review and production."],
];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources/" }])} />
      <PageHero
        eyebrow="Resources"
        icon={BookOpen}
        title="ID Card & Identity Solutions Resources"
        lede="ID card projects involve more than printing cards. The IDGen Resources section brings together practical information to help organizations plan and manage identification projects more effectively."
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources/" }]} />

        <div className="mt-8">
          <SectionHead eyebrow="Explore" title="Explore IDGen Resources" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <FeatureCard key={c.title} icon={c.icon} title={c.title} body={c.body} href={c.href} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionHead eyebrow="By Requirement" title="Resources by requirement" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {byRequirement.map(([label, body]) => (
              <div key={label} className="rounded-2xl border border-surface-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">How to use these resources</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Start with the guide that matches your requirement. Then review the relevant product/service page
            for detailed specifications. If you already know your quantity and requirements, use the{" "}
            <Link href="/pricing/" className="font-semibold text-accent hover:underline">
              pricing page
            </Link>{" "}
            for reference pricing and request a project-specific quotation. For large projects involving
            personalized data, explore{" "}
            <Link href="/idgen-studio/" className="font-semibold text-accent hover:underline">
              IDGen Studio
            </Link>
            .
          </p>
        </div>

        <div className="mt-16">
          <CtaBand
            title="Planning an ID card project?"
            body="Tell IDGen your organization type, location, products, approximate quantity and requirements."
            links={[{ label: "Request a Quote", href: "/request-a-quote/", primary: true }]}
          />
        </div>
      </Container>
    </>
  );
}
