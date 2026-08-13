import Link from "next/link";
import { Handshake, Store, Megaphone, Laptop2, Cable, CheckCircle2, XCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FlowChain } from "@/components/ui/FlowChain";
import { FaqList } from "@/components/ui/FaqList";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "ID Card Reseller & Partner Program | IDGen Northeast India",
  description:
    "Become an IDGen reseller, referral, printing or School ERP partner. Build your local ID card business with IDGen production support across Northeast India.",
  path: "/partners/",
});

const strengths = [
  "Local Customers — you know schools, businesses, institutions or organizations in your area.",
  "Local Market Knowledge — you understand how customers in your city or state purchase identification products.",
  "Sales Network — you already sell printing, stationery, technology, school or corporate products.",
  "Existing Business — you may already operate a printing, IT, advertising, stationery, ERP or related business.",
  "Technology Platform — you may operate software that already serves schools or organizations.",
];

const models = [
  {
    icon: Store,
    title: "Reseller Partner",
    tagline: "Sell identification products in your market.",
    body: "Acquire customers and sell IDGen products under an agreed reseller arrangement. Flow: Customer → Partner → IDGen → Production → Dispatch → Customer. Suitable for printing businesses, stationery businesses, IT companies, advertising agencies, local distributors, school suppliers and entrepreneurs.",
  },
  {
    icon: Megaphone,
    title: "Referral Partner",
    tagline: "Refer customers to IDGen.",
    body: "If you don't want to manage the complete sales and order process, refer potential customers to IDGen. Flow: Partner → Customer Lead → IDGen → Requirement → Production → Dispatch. Suitable for people with relevant customer connections who don't want to maintain inventory.",
  },
  {
    icon: Laptop2,
    title: "School ERP Printing Partner",
    tagline: "Your school software. Our ID card production.",
    body: "If you operate a School ERP, student management platform or education technology solution, offer printed student and staff ID cards to your existing school customers. Model: Your Software → School Data → IDGen → Card Preview → Approval → Production → Quality Check → Dispatch.",
  },
  {
    icon: Cable,
    title: "Technology Integration Partner",
    tagline: "Connect software with physical identification.",
    body: "Technology companies managing organizational or educational data may explore future integration opportunities — connecting Software Data → Identification Workflow → Card Production. Integration requirements are evaluated individually.",
  },
];

const faqs: Faq[] = [
  { q: "What is the IDGen reseller program?", a: "The IDGen reseller program allows suitable businesses to acquire customers and offer IDGen identity products under an agreed reseller arrangement while IDGen supports the applicable production workflow." },
  { q: "Do I need my own ID card printing machine?", a: "Not necessarily. The partner model is designed so suitable partners can focus on sales and customer relationships while IDGen supports production." },
  { q: "Can I become an IDGen reseller in my city?", a: "Yes. IDGen is developing local partnerships across Northeast India and is interested in partners with local market knowledge and customer relationships." },
  { q: "Can a printing company become an IDGen partner?", a: "Yes. Printing and related businesses can be considered where they have relevant customers and want to add identity products to their offering." },
  { q: "Can an IT company become an IDGen partner?", a: "Yes. IT companies with relevant organizational or education-sector customers can explore reseller, referral or technology partnership models." },
  { q: "Can a School ERP company partner with IDGen?", a: "Yes. A School ERP company can explore a printing partnership in which the ERP company serves the software requirement while IDGen supports physical student and staff ID-card production." },
  { q: "Can I become a referral partner?", a: "Yes. Suitable businesses or individuals can explore a referral arrangement with IDGen." },
  { q: "Can partners sell multiple IDGen products?", a: "Yes. The partner network can offer a range of identification products, including cards, RFID cards, event cards, membership cards, lanyards, holders and other identity products." },
  { q: "Does IDGen offer exclusive city territories?", a: "Do not assume exclusivity. Territory arrangements, if available, should be discussed and agreed separately with IDGen." },
  { q: "Does IDGen provide fixed reseller margins?", a: "IDGen does not publish a universal margin. Commercial terms can vary according to the partnership model and business arrangement." },
];

export default function PartnersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Partners", path: "/partners/" }])} />
      <PageHero
        eyebrow="Partner Program"
        icon={Handshake}
        title="Become an IDGen Partner"
        lede="Build your local identity-products business with IDGen. You focus on customers — IDGen supports the production."
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Partners", path: "/partners/" }]} />

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            IDGen is developing a network of resellers, referral partners, printing partners and technology
            partners across Northeast India. If you already have relationships with schools, colleges,
            companies, hospitals, institutions or other businesses, you can offer professional identification
            products without necessarily building your own complete ID-card production setup.
          </p>
        </div>
        <div className="mt-6">
          <FlowChain steps={["Find Customers", "Collect Requirements", "Send Order to IDGen", "Production", "Dispatch", "Customer Delivery"]} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#apply" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Apply to Become a Partner
          </a>
          <Link href="/contact-us/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            Talk to IDGen
          </Link>
        </div>

        {/* Why partner */}
        <div className="mt-16">
          <SectionHead
            eyebrow="Why Partner"
            title="Why partner with IDGen?"
            lede="Starting an ID-card business can require investment in printing, fusing and cutting equipment, materials, accessories, production staff and quality-control processes. An IDGen partnership lets a local business focus more on sales, customer relationships and local market development, while IDGen supports the required production."
          />
        </div>

        {/* Strengths */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">A partnership built around your strengths</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">You may already have something IDGen needs:</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {strengths.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Partnership models */}
        <div className="mt-16">
          <SectionHead eyebrow="Choose Your Model" title="Choose your partnership model" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {models.map((m) => (
              <div key={m.title} className="rounded-2xl border border-surface-border bg-surface p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <m.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{m.title}</h3>
                <p className="mt-1 text-xs font-bold tracking-wide text-accent uppercase">{m.tagline}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Local + centralized */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-surface-border bg-surface p-5">
            <h3 className="font-semibold text-foreground">Local Partner</h3>
            <p className="mt-1.5 text-sm text-muted">Sales + Customer Relationship + Local Support</p>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-5">
            <h3 className="font-semibold text-foreground">IDGen</h3>
            <p className="mt-1.5 text-sm text-muted">Production + Quality Control + Product Support</p>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-5">
            <h3 className="font-semibold text-foreground">Customer</h3>
            <p className="mt-1.5 text-sm text-muted">Professional Identity Products</p>
          </div>
        </div>

        {/* Not a franchise */}
        <div className="mt-16 rounded-2xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <XCircle className="mt-1 h-5 w-5 shrink-0 text-navy-deep" />
            <div>
              <h2 className="text-lg font-bold text-navy-deep">Is this a franchise? No.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-deep/80">
                The IDGen partner model should not automatically be presented as a franchise. It is a business
                partnership / reseller / referral / printing relationship, with exact commercial
                responsibilities and terms agreed between IDGen and the partner. This distinction is important
                for both customer clarity and legal accuracy.
              </p>
            </div>
          </div>
        </div>

        {/* City-wise opportunities */}
        <div className="mt-16">
          <SectionHead
            eyebrow="Territory"
            title="City-wise partner opportunities"
            lede="IDGen is interested in developing local partnerships across Assam, Meghalaya, Nagaland, Manipur, Mizoram, Tripura, Arunachal Pradesh and Sikkim. Territory arrangements, if available, should be discussed and agreed separately — don't assume exclusivity."
          />
          <div className="mt-4">
            <FlowChain steps={["Your City", "Your Customers", "Your Market", "IDGen Production Support"]} />
          </div>
        </div>

        {/* What we expect */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <FeatureCard
            title="What IDGen provides to partners"
            body="Production, product range (cards, lanyards, RFID products, holders, hooks), customization, quality workflow, dispatch and product knowledge."
          />
          <FeatureCard
            title="What we expect from partners"
            body="Build customer relationships, collect accurate requirements, communicate professionally, manage customers, protect customer information, and develop the market for long-term business."
          />
        </div>

        {/* Apply */}
        <div id="apply" className="mt-16 scroll-mt-24">
          <SectionHead eyebrow="Apply" title="Ready to partner with IDGen?" lede="Tell us about your business — we'll follow up with the applicable partnership details." />
          <div className="mt-6 max-w-2xl">
            <PartnerForm />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </Container>
    </>
  );
}
