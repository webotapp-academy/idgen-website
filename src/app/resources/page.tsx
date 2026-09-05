import Image from "next/image";
import Link from "next/link";
import { BookOpen, HelpCircle, Briefcase, FileText, CheckCircle2, ArrowRight, ShieldCheck, Newspaper } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ID Card & Identity Solutions Resources | IDGen",
  description:
    "Guides, blogs, FAQs, templates and case studies covering ID card printing, student ID cards, employee ID cards, lanyards, RFID and identity workflows by IDGen.",
  path: "/resources/",
});

const categories = [
  { icon: Newspaper, title: "Blogs & Technical Insights", body: "Deep dives on 30-mil virgin PVC security, ultrasonic lanyard welding, RFID chip architectures, and event badging.", href: "/resources/blogs/" },
  { icon: BookOpen, title: "Technical Guides", body: "Practical guides covering CR80 PVC specs, Pantone lanyard sublimation, and RFID frequency protocols.", href: "/resources/guides/" },
  { icon: HelpCircle, title: "Frequently Asked Questions", body: "Direct answers about volume pricing, sample kits, IDGen Studio, and Northeast delivery turnaround.", href: "/faq/" },
  { icon: Briefcase, title: "Delivered Case Studies", body: "Real identification projects for schools, colleges, and enterprise workforces across Assam and the Northeast.", href: "/case-studies/" },
  { icon: FileText, title: "Production Templates", body: "Excel roster spreadsheets, biometric photo guidelines, and pre-flight print checklists.", href: "/templates/" },
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
      
      <PageHero
        eyebrow="Knowledge & Planning Center"
        icon={BookOpen}
        title="ID Card & Identity Solutions Resources"
        lede="Everything you need to successfully execute an institutional identification rollout — technical material sheets, digital roster templates, delivered case studies, and engineering FAQs."
        stats={[
          { label: "Guides & Docs", value: "Comprehensive" },
          { label: "Templates", value: "Excel / CSV Ready" },
          { label: "Case Studies", value: "Real Deliveries" },
          { label: "Support", value: "Guwahati Desk" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Real Case Study Image */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/Sample 1.jpeg"
                  alt="Complete ID Card Resource Specimen"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">IDGen Knowledge Hub</span>
                </div>
              </div>

              {/* Overlapping Specimen */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/PVC Cards Samples/Sample 1.jpg"
                  alt="30-Mil CR80 PVC ID Card"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Hardware Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 1.jpeg"
                  alt="Satin Lanyard Sample"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources/" }]} />

        {/* 5 Core Resource Pillars */}
        <div className="mt-8">
          <SectionHead eyebrow="Resource Pillars" title="Explore IDGen Knowledge Hub" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {categories.map((c) => (
              <FeatureCard key={c.title} icon={c.icon} title={c.title} body={c.body} href={c.href} />
            ))}
          </div>
        </div>

        {/* By Requirement Matrix */}
        <div className="mt-20">
          <SectionHead eyebrow="Planning Matrix" title="Resources by Identification Requirement" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {byRequirement.map(([label, body]) => (
              <div key={label} className="rounded-2xl border border-surface-border bg-surface p-6 hover:border-accent/40 transition">
                <h3 className="font-bold text-foreground text-base">{label}</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Ready to begin your identification project?"
            body="Submit your organization details to receive a factory direct proposal and digital proof."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "View Pricing Tiers", href: "/pricing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
