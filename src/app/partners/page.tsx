import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  Store,
  Megaphone,
  Laptop2,
  Cable,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MapPin,
  Building2,
  Boxes,
  Workflow,
  HelpCircle,
  FileText,
  BadgeCheck,
  Layers,
  AlertTriangle,
  Send,
  Users,
  Target,
  Clock,
  Printer,
  Wrench,
  Award,
  Globe2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { FaqList } from "@/components/ui/FaqList";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

/* ── SEO Metadata (Strictly from document) ── */
export const metadata = pageMetadata({
  title: "ID Card Reseller & Partner Program | IDGen Northeast India",
  description:
    "Become an IDGen reseller, referral, printing or School ERP partner. Build your local ID card business with IDGen production support across Northeast India.",
  path: "/partners/",
});

/* ── Document Data Arrays ── */

const requiredEquipment = [
  "Printing equipment",
  "Fusing equipment",
  "Cutting equipment",
  "Materials",
  "Accessories",
  "Production staff",
  "Quality-control processes",
  "Order management",
  "Production experience",
];

const partnerStrengths = [
  {
    title: "Local Customers",
    desc: "You know schools, businesses, institutions or organizations in your area.",
  },
  {
    title: "Local Market Knowledge",
    desc: "You understand how customers in your city or state purchase identification products.",
  },
  {
    title: "Sales Network",
    desc: "You already sell printing, stationery, technology, school or corporate products.",
  },
  {
    title: "Existing Business",
    desc: "You may already operate a printing, IT, advertising, stationery, ERP or related business.",
  },
  {
    title: "Technology Platform",
    desc: "You may operate software that already serves schools or organizations.",
  },
];

const resellerSuitableFor = [
  "Printing businesses",
  "Stationery businesses",
  "IT companies",
  "Advertising agencies",
  "Local distributors",
  "School suppliers",
  "Business-service providers",
  "Entrepreneurs",
  "Local sales representatives",
];

const offerCategories = {
  identification: [
    "Student ID cards",
    "Employee ID cards",
    "Staff ID cards",
    "Visitor cards",
    "Event cards",
    "Membership cards",
    "RFID cards",
  ],
  accessories: [
    "Custom printed lanyards",
    "ID card holders",
    "ID card hooks",
    "Other identification accessories",
  ],
};

const targetOrganizations = [
  "Schools",
  "Colleges",
  "Universities",
  "Companies",
  "Hospitals",
  "Government organizations",
  "NGOs",
  "Industries",
  "Events",
  "Clubs",
  "Associations",
  "Institutions",
];

const partnerStates = [
  "Assam",
  "Meghalaya",
  "Nagaland",
  "Manipur",
  "Mizoram",
  "Tripura",
  "Arunachal Pradesh",
  "Sikkim",
];

const idealPartnerTraits = [
  "Existing school relationships",
  "Local business networks",
  "Education-sector customers",
  "Sales capability",
  "Customer-support capability",
  "Local market knowledge",
  "Professional communication",
  "Long-term business interest",
];

const resellerOrderWorkflow = [
  { step: "01", title: "Find Customer", desc: "Identify a school, company, institution or organization." },
  { step: "02", title: "Understand Requirement", desc: "Collect product, quantity and customization requirements." },
  { step: "03", title: "Send Requirement", desc: "Share requirement with IDGen according to agreed process." },
  { step: "04", title: "Quotation", desc: "IDGen provides applicable pricing/quotation according to agreed partner arrangement." },
  { step: "05", title: "Order", desc: "Confirm order and required specifications." },
  { step: "06", title: "Production", desc: "IDGen handles the applicable production workflow." },
  { step: "07", title: "Quality Check", desc: "Finished products are checked according to agreed requirements." },
  { step: "08", title: "Dispatch", desc: "Completed order is prepared for dispatch." },
  { step: "09", title: "Customer Delivery", desc: "Partner manages customer delivery/support according to agreed arrangement." },
];

const idgenProvides = [
  "Physical identification-product production.",
  "Cards, lanyards, RFID products, holders, hooks and related identification products.",
  "Organization-specific personalization and approved artwork.",
  "Production and quality checks according to agreed specifications.",
  "Preparation and dispatch of completed orders.",
  "Support regarding suitable identification-product configurations.",
];

const partnerExpectations = [
  "Develop and maintain relationships within their market.",
  "Provide correct customer requirements and information.",
  "Maintain clear communication with customers and IDGen.",
  "Handle customer communication according to agreed arrangement.",
  "Handle customer-provided information responsibly and follow applicable data-handling requirements.",
  "Focus on long-term business rather than one-time orders.",
];

const resellerApplicationFields = [
  "Name",
  "Business name",
  "City",
  "State",
  "Contact details",
  "Existing customer base",
  "Products/services currently offered",
  "Experience in school or institutional sales",
  "Target market",
];

const erpApplicationFields = [
  "Company name",
  "ERP/software name",
  "Website",
  "Number of schools served",
  "Operating states/cities",
  "Approximate annual ID-card requirements",
  "Current ID-card printing arrangement",
  "Technical integration requirements",
];

const faqs: Faq[] = [
  {
    q: "What is the IDGen reseller program?",
    a: "The IDGen reseller program allows suitable businesses to acquire customers and offer IDGen identity products under an agreed reseller arrangement while IDGen supports the applicable production workflow.",
  },
  {
    q: "Do I need my own ID card printing machine?",
    a: "Not necessarily. The partner model is designed so suitable partners can focus on sales and customer relationships while IDGen supports production.",
  },
  {
    q: "Can I become an IDGen reseller in my city?",
    a: "Yes. IDGen is developing local partnerships across Northeast India and is interested in partners with local market knowledge and customer relationships.",
  },
  {
    q: "Can a printing company become an IDGen partner?",
    a: "Yes. Printing and related businesses can be considered where they have relevant customers and want to add identity products to their offering.",
  },
  {
    q: "Can an IT company become an IDGen partner?",
    a: "Yes. IT companies with relevant organizational or education-sector customers can explore reseller, referral or technology partnership models.",
  },
  {
    q: "Can a School ERP company partner with IDGen?",
    a: "Yes. A School ERP company can explore a printing partnership in which the ERP company serves the software requirement while IDGen supports physical student and staff ID-card production.",
  },
  {
    q: "Can I become a referral partner?",
    a: "Yes. Suitable businesses or individuals can explore a referral arrangement with IDGen.",
  },
  {
    q: "Can partners sell multiple IDGen products?",
    a: "Yes. The partner network can offer a range of identification products, including cards, RFID cards, event cards, membership cards, lanyards, holders and other identity products.",
  },
  {
    q: "Does IDGen offer exclusive city territories?",
    a: "Do not assume exclusivity. Territory arrangements, if available, should be discussed and agreed separately with IDGen.",
  },
  {
    q: "Does IDGen provide fixed reseller margins?",
    a: "Do not publish a universal margin unless IDGen has formally established one. Commercial terms can vary according to the partnership model and business arrangement.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "IDGen Partner & Reseller Program",
          description:
            "Become an IDGen reseller, referral, printing or School ERP partner. Build your local ID card business with IDGen production support across Northeast India.",
          path: "/partners/",
        })}
      />

      {/* ── 1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#009fe3]/10 dark:bg-[#009fe3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-400/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: Eyebrow + Heading + Paragraph + Workflow Card + CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <Handshake className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>IDGen Partner &amp; Reseller Program</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  Become an IDGen Partner
                </h1>

                <p className="text-base sm:text-lg font-bold text-[#009fe3] dark:text-cyan-400">
                  Build Your Local Identity-Products Business With IDGen
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  IDGen is developing a network of resellers, referral partners, printing partners and technology partners across Northeast India. If you already have relationships with schools, colleges, companies, hospitals, institutions, organizations or other businesses, you can offer professional identification products without necessarily building your own complete ID-card production setup.
                </p>
              </div>

              {/* Integrated Value Callout & Local Partner Model */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Division of Responsibilities</span>
                  </span>
                  <span className="rounded-full bg-[#009fe3] px-3 py-0.5 text-[10px] font-black text-white">
                    You Focus on Customers • IDGen Supports Production
                  </span>
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Local Partner Model:
                </p>

                <FlowChain steps={["Find Customers", "Collect Requirements", "Send Order to IDGen", "Production", "Dispatch", "Customer Delivery"]} />
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#apply"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Apply to Become an IDGen Partner</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>Talk to IDGen</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] w-full rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl group flex flex-col justify-between">
                <Image
                  src="/images/idgen-partner-reseller-program.jpg"
                  alt="IDGen B2B Partner & Reseller network production"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                    <Sparkles className="h-3 w-3 text-cyan-400" />
                    <span>Northeast India Reseller Network</span>
                  </span>
                  <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                    IDGen
                  </span>
                </div>

                {/* Bottom Floating Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                        Zero Production CapEx
                      </p>
                      <p className="text-xs sm:text-sm font-black text-white">
                        Local Sales + Central Production
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                      All 8 NE States
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Partners", path: "/partners/" }]} />

        {/* ── 2. WHY PARTNER WITH IDGEN? (CAPEX BARRIER vs PARTNER MODEL) ── */}
        <section className="mt-8">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Market Entry Strategy
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Why Partner With IDGen?
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Starting an ID-card business can require investment in:
              </p>
            </div>

            {/* 9 Equipment Investments */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2">
              {requiredEquipment.map((eq) => (
                <div key={eq} className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-center">
                  <Wrench className="h-4 w-4 text-[#009fe3] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-tight block">{eq}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50/70 dark:bg-slate-950 p-5 space-y-2">
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-cyan-300 leading-relaxed">
                An IDGen partnership can allow a local business to focus more on sales, customer relationships and local market development, while IDGen supports the required identity-product production according to the agreed partnership model.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. A PARTNERSHIP BUILT AROUND YOUR STRENGTHS (5 PILLARS) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Core Synergies"
            title="A Partnership Built Around Your Strengths"
            lede="You may already have something IDGen needs:"
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerStrengths.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}

            <div className="rounded-3xl border border-sky-200 dark:border-cyan-800 bg-sky-50 dark:bg-cyan-950/40 p-6 shadow-md flex flex-col justify-center space-y-2 sm:col-span-2 lg:col-span-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">The Synergy</span>
              <p className="text-sm font-black text-slate-900 dark:text-white leading-relaxed">
                IDGen can provide the production side while you build the customer relationship.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. CHOOSE YOUR PARTNERSHIP MODEL (4 DETAILED MODELS) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Partnership Options"
            title="Choose Your Partnership Model"
            lede="IDGen can work with different partner types depending on the business relationship."
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Model 1: IDGen Reseller Partner */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950 px-3 py-1 text-xs font-black text-[#009fe3] dark:text-cyan-400">
                    Model 1
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    1. IDGen Reseller Partner
                  </h3>
                </div>
                <p className="text-xs font-bold text-[#009fe3]">
                  Sell Identification Products in Your Market
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  As a reseller, you acquire customers and sell IDGen products under an agreed reseller arrangement.
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Typical Flow:</span>
                  <FlowChain steps={["Customer", "Partner", "IDGen", "Production", "Dispatch", "Customer"]} />
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  You can develop your own customer relationships while using IDGen as your production partner.
                </p>

                <div className="pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Suitable for:</span>
                  <div className="flex flex-wrap gap-1">
                    {resellerSuitableFor.map((s) => (
                      <span key={s} className="rounded border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <a href="#apply" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                  <span>Become a Reseller</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Model 2: Referral Partner */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950 px-3 py-1 text-xs font-black text-[#009fe3] dark:text-cyan-400">
                    Model 2
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    2. Referral Partner
                  </h3>
                </div>
                <p className="text-xs font-bold text-[#009fe3]">
                  Refer Customers to IDGen
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  If you do not want to manage the complete sales and order process, you can refer potential customers to IDGen.
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Typical Flow:</span>
                  <FlowChain steps={["Partner", "Customer Lead", "IDGen", "Requirement", "Production", "Dispatch"]} />
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  The commercial benefits and responsibilities can be agreed according to the referral arrangement. Suitable for people or businesses with relevant connections who don't want inventory or production management.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <a href="#apply" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                  <span>Become a Referral Partner</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Model 3: School ERP Printing Partner */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950 px-3 py-1 text-xs font-black text-[#009fe3] dark:text-cyan-400">
                    Model 3
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    3. School ERP Printing Partner
                  </h3>
                </div>
                <p className="text-xs font-bold text-[#009fe3]">
                  Your School Software. Our ID Card Production.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  If you operate a School ERP, School management software, Student management platform, Attendance system, SIS, or EdTech solution, offer printed student and staff ID cards without building production infrastructure.
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Simple Model:</span>
                  <FlowChain steps={["Your Software", "School Data", "IDGen", "Card Preview", "Approval", "Production", "Quality Check", "Dispatch"]} />
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  Your company can continue focusing on software while IDGen supports the physical identification requirement.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <a href="#apply" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                  <span>Discuss ERP Printing Partnership</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Model 4: Technology Integration Partner */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950 px-3 py-1 text-xs font-black text-[#009fe3] dark:text-cyan-400">
                    Model 4
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    4. Technology Integration Partner
                  </h3>
                </div>
                <p className="text-xs font-bold text-[#009fe3]">
                  Connect Software With Physical Identification
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  Technology companies managing organizational data can explore future integration opportunities with IDGen to connect:
                </p>

                <FlowChain steps={["Software Data", "Identification Workflow", "Card Production"]} />

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  Reduces manual data transfer and makes production easier for organizations using compatible systems. Evaluated based on software, data structure, security and technical workflow.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <a href="#apply" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                  <span>Discuss Technology Partnership</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. WHAT CAN IDGEN PARTNERS OFFER? ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Product Portfolio"
            title="What Can IDGen Partners Offer?"
            lede="Partners can potentially offer a broad identity-product portfolio instead of selling only one product."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-[#009fe3]">
                <BadgeCheck className="h-5 w-5" />
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Identification Cards</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {offerCategories.identification.map((item) => (
                  <span key={item} className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-[#009fe3]">
                <Layers className="h-5 w-5" />
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Identification Accessories</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {offerCategories.accessories.map((item) => (
                  <span key={item} className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/products/" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]">
              <span>Explore IDGen Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* ── 6. WHY THIS MODEL CAN WORK (ADVANTAGES, DIVISION, TARGET SECTORS & CITIES) ── */}
        <section className="mt-20 space-y-12">
          <SectionHead
            eyebrow="Business Rationale"
            title="Why This Model Can Work"
          />

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-2">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">You Don't Need to Build Everything</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                A local partner does not necessarily need to establish a complete production facility before entering the identification-products market. IDGen supports production while you develop the local customer base.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-2">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Focus on Sales &amp; Relationships</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Your key activities: <span className="font-bold text-[#009fe3]">Customer → Requirement → Order</span>. IDGen supports production. Spend more time finding customers, building relationships, generating repeat business, and expanding territory.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-2">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Local Partner + Central Production</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                <span className="font-bold">Local Partner:</span> Sales + Relationship + Local Support.<br />
                <span className="font-bold">IDGen:</span> Production + Quality + Product Support.<br />
                <span className="font-bold">Customer:</span> Professional Identity Products.
              </p>
            </div>
          </div>

          {/* Build Your Customer Base & City Opportunities */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Build Your Customer Base</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                Approach diverse organizations requiring identification products at different times of year:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {targetOrganizations.map((org) => (
                  <span key={org} className="rounded-md border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {org}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">City-Wise Partner Opportunities</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                IDGen is developing local partnerships across Northeast India. Position city-level local knowledge as your competitive advantage:
              </p>
              <FlowChain steps={["Your City", "Your Customers", "Your Market", "IDGen Production Support"]} />
              <div className="flex flex-wrap gap-1.5 pt-1">
                {partnerStates.map((st) => (
                  <span key={st} className="rounded-md border border-sky-200 dark:border-cyan-800 bg-sky-50 dark:bg-cyan-950 px-2.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                    {st}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. WHO IS A GOOD IDGEN PARTNER? & RESELLER / ERP PROFILES ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Partner Profiles"
            title="Who Is a Good IDGen Partner?"
            lede="We are particularly interested in partners with existing school relationships, local business networks, sales capability, and long-term commitment."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {idealPartnerTraits.map((trait) => (
              <div key={trait} className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{trait}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Become a Reseller If...</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                You want to sell ID cards in your city, have local customers and sales capability, want recurring business, and don't want to build production.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="font-bold text-[#009fe3]">Your Role: </span>Acquisition → Requirement → Order → Relationship<br />
                <span className="font-bold text-[#009fe3]">IDGen Role: </span>Production → Quality → Dispatch Support
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Become a Printing Partner If...</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                You already provide services to schools, institutions, companies, or events and want to add identity products without building infrastructure.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Become an ERP Partner If...</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Your software company serves schools. Offer student &amp; staff cards directly from your platform.
              </p>
              <FlowChain steps={["School ERP", "Student Data", "IDGen", "Card Preview", "Approval", "Printing", "Quality Check", "Dispatch"]} />
            </div>
          </div>
        </section>

        {/* ── 8. IDGEN EXPERIENCE BEHIND THE PARTNERSHIP & DIGITAL WORKFLOW ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-[#009fe3]">
                <Award className="h-5 w-5" />
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  IDGen Experience Behind the Partnership
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                IDGen is a newer identity-focused brand built on identification-product experience dating back to 2014 across Northeast India.
              </p>
              <FlowChain steps={["Personalized Data", "ID Cards", "Accessories", "Bulk Requirements", "Production Workflows"]} />
              <p className="text-xs text-slate-700 dark:text-slate-300 font-bold">
                Instead of starting from zero, connect your local customer network with IDGen's established production experience.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-[#009fe3]">
                <Workflow className="h-5 w-5" />
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Digital Workflow Support
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                For suitable projects, IDGen Studio supports digital data collection and card-preview workflows for large schools and organizations.
              </p>
              <FlowChain steps={["Customized Form", "Link/QR Code", "Data Collection", "Card Preview", "Organization Review", "Approval", "Production"]} />
              <div className="pt-2">
                <Link href="/idgen-studio/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                  <span>Explore IDGen Studio</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. WORKFLOWS (RESELLER & ERP) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Detailed Operations"
            title="Partner Order Workflows"
          />

          <div className="mt-8 space-y-6">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Reseller Order Workflow (9 Steps)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3">
              {resellerOrderWorkflow.map((w) => (
                <div key={w.step} className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-sm space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#009fe3]">{w.step}</span>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-xs">{w.title}</h4>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight font-medium">{w.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">ERP Partner Workflow</h3>
              <div className="mt-3">
                <FlowChain steps={["School ERP", "Student/Staff Data", "IDGen", "Preview", "School Approval", "Production", "Quality Check", "Dispatch"]} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. WHAT IDGEN PROVIDES vs WHAT WE EXPECT ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-md space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">What IDGen Provides to Partners</h3>
              <div className="space-y-2">
                {idgenProvides.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-md space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">What We Expect From Partners</h3>
              <div className="space-y-2">
                {partnerExpectations.map((e, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. PARTNER TERRITORY, LEGAL FRANCHISE CLARIFICATION & COMMERCIAL TERMS ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Partner Territory</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Focus on a city or market where you have genuine customer relationships:
              </p>
              <div className="text-xs font-bold text-[#009fe3] space-y-1">
                <p>• Guwahati Partner → Guwahati Customers → IDGen</p>
                <p>• Jorhat Partner → Jorhat Customers → IDGen</p>
                <p>• Shillong Partner → Shillong Customers → IDGen</p>
              </div>
              <p className="text-[11px] text-slate-500 italic">Territory exclusivity discussed separately.</p>
            </div>

            <div className="rounded-3xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/30 p-7 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="h-5 w-5" />
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Is This a Franchise?</h3>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                <span className="font-black text-amber-900 dark:text-amber-300">No.</span> The IDGen partner model is a business partnership / reseller / referral / printing relationship with exact commercial terms agreed individually. Not automatically presented as a franchise.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Partner Commercial Terms</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Margins, minimum order requirements, payment and delivery terms are evaluated individually based on partner type, volume, product mix, and responsibilities rather than publishing one universal public margin.
              </p>
            </div>
          </div>
        </section>

        {/* ── 12. INTERACTIVE PARTNER APPLICATION FORM ── */}
        <section id="apply" className="mt-20 scroll-mt-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-lg space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#009fe3]">
                  Apply to Become an IDGen Partner
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                  Partner Onboarding Application
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                  Submit your business details and target territory. We evaluate applications within 24 business hours.
                </p>
                <PartnerForm />
              </div>
            </div>

            <div className="space-y-6 lg:col-span-4 flex flex-col justify-between">
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-slate-900 p-7 text-white shadow-xl space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider">What You Need to Apply</h3>

                <div className="space-y-2 text-xs">
                  <span className="font-extrabold text-cyan-400 block">For Resellers:</span>
                  <div className="flex flex-wrap gap-1">
                    {resellerApplicationFields.map((f) => (
                      <span key={f} className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-slate-300">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-xs pt-2 border-t border-white/10">
                  <span className="font-extrabold text-cyan-400 block">For School ERP Companies:</span>
                  <div className="flex flex-wrap gap-1">
                    {erpApplicationFields.map((f) => (
                      <span key={f} className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-slate-300">{f}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-[4/3] shadow-md group">
                <Image
                  src="/images/idgen-partner-specimen-kit.jpg"
                  alt="Complete IDGen partner sample kit"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="rounded-full bg-[#009fe3] px-2.5 py-0.5 text-[10px] font-bold uppercase">
                    Partner Specimen Pack Included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. FREQUENTLY ASKED QUESTIONS (Strictly 10 FAQs from Document) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Questions &amp; Answers"
            title="Frequently Asked Questions"
          />

          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* ── 14. READY TO PARTNER WITH IDGEN? (CLOSING SUMMARY & CTAs) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-[#071322] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#009fe3]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Partner Opportunity</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Ready to Partner With IDGen?
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                If you already have customers, market access, school relationships, software customers or a strong local business network, IDGen can help you explore a partnership around professional identification products.
              </p>

              <div className="rounded-2xl border border-cyan-800/50 bg-slate-900/90 p-4 text-xs font-bold text-cyan-300">
                Your Market (Customers + Relationships + Sales) + IDGen (Products + Production + Quality + Dispatch Support) = Together (A Complete Identification Business Opportunity)
              </div>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <a
                  href="#apply"
                  className="rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                >
                  Apply to Become an IDGen Partner
                </a>
                <a
                  href="#apply"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Become a Reseller
                </a>
                <a
                  href="#apply"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Discuss ERP Partnership
                </a>
                <Link
                  href="/contact/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Contact IDGen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 15. REGIONAL HUB DIRECTORY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-[#009fe3] dark:text-cyan-400 mb-3">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                IDGen Partner Network • Northeast India
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              Local Relationships. Centralized Identity-Product Support.
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
              Your Customers → Your Market → IDGen Production → Professional Identity Products
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Explore Related Identity Solutions:
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/id-card-printing/" className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-[#009fe3]">
                  <span>ID Card Printing</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <Link href="/student-id-card-printing/" className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-[#009fe3]">
                  <span>Student ID Cards</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <Link href="/employee-id-card-printing/" className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-[#009fe3]">
                  <span>Employee ID Cards</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <Link href="/custom-printed-lanyard-printing/" className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-[#009fe3]">
                  <span>Custom Lanyards</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <Link href="/idgen-studio/" className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-[#009fe3]">
                  <span>IDGen Studio</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <Link href="/pricing/" className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-[#009fe3]">
                  <span>Pricing</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
