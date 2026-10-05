import React from "react";
import Link from "next/link";
import { getAllStates, getAllCities } from "@/lib/dynamic-locations";
import { getAllPricingItems } from "@/lib/dynamic-pricing";
import { getAllDynamicProjects } from "@/lib/dynamic-projects";
import { getDynamicHomePage } from "@/lib/dynamic-homepage";
import { getDynamicWhyIdgen } from "@/lib/dynamic-why-idgen";
import { getDynamicServices } from "@/lib/dynamic-services";
import { getDynamicIdCardPrinting } from "@/lib/dynamic-id-card-printing";
import {
  MapPin,
  Building2,
  FileText,
  Users,
  ArrowRight,
  TrendingUp,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  IndianRupee,
  Boxes,
  Camera,
  Layers,
  HelpCircle,
  Cpu,
  Flame,
  Globe,
  CheckCircle2,
  Package,
  Award,
  Lock,
  Workflow,
  Target,
  ClipboardCheck,
  GraduationCap,
  Briefcase,
  Tag,
  Ticket,
  Radio,
  Waves,
  Link2,
  Shield,
  CreditCard,
  Laptop,
  FileSpreadsheet,
  BookOpen,
  Phone,
  Box,
} from "lucide-react";

export default async function AdminDashboardPage() {
  const states = getAllStates();
  const allCitiesList = getAllCities();
  const pricingItems = getAllPricingItems(true);
  const projects = getAllDynamicProjects();
  const homeData = getDynamicHomePage();
  const whyData = getDynamicWhyIdgen();
  const servicesData = getDynamicServices();
  const idCardData = getDynamicIdCardPrinting();

  const primaryCities = allCitiesList.filter((item) => item.city.isPrimary);
  const activePricingCount = pricingItems.filter((i) => i.isActive).length;

  const adminCategories = [
    {
      name: "Core Portals",
      desc: "Central dynamic engines & interactive previewer",
      color: "teal",
      portals: [
        {
          name: "Home Page CMS",
          href: "/admin/homepage/",
          publicHref: "/",
          icon: Sparkles,
          tag: "11 Points Dynamic",
          desc: "Hero slides, product catalog, trust bar, services, solutions, FAQs & SEO.",
        },
        {
          name: "Why IDGen CMS",
          href: "/admin/why-idgen/",
          publicHref: "/why-idgen/",
          icon: Award,
          tag: "13 Points Dynamic",
          desc: "Pillars, 2014 milestones, factory process, security & regional commitments.",
        },
        {
          name: "IDGen Studio CMS",
          href: "/admin/idgen-studio/",
          publicHref: "/idgen-studio/",
          icon: Laptop,
          tag: "Visual Suite",
          desc: "Workflow steps, interactive demo video, format templates & client sectors.",
        },
      ],
    },
    {
      name: "Services Dynamic CMS (8 Services)",
      desc: "Full identification product and specialized manufacturing pipelines",
      color: "cyan",
      portals: [
        {
          name: "Services & Dropdown",
          href: "/admin/services/",
          icon: Package,
          tag: "Manager",
          desc: "Navigation dropdown items, global services list & service catalog.",
        },
        {
          name: "ID Card Printing",
          href: "/admin/id-card-printing/",
          publicHref: "/id-card-printing/",
          icon: ShieldCheck,
          tag: "Service",
          desc: "PVC card printing, tech specs, pricing tiers & institutional security.",
        },
        {
          name: "Student ID Cards",
          href: "/admin/student-id-card-printing/",
          publicHref: "/student-id-card-printing/",
          icon: GraduationCap,
          tag: "Service",
          desc: "School & university bulk identity, barcode, RFID & safety compliance.",
        },
        {
          name: "Employee ID Cards",
          href: "/admin/employee-id-card-printing/",
          publicHref: "/employee-id-card-printing/",
          icon: Briefcase,
          tag: "Service",
          desc: "Corporate staff cards, magnetic stripe, smart chip & access control.",
        },
        {
          name: "Custom Printed Lanyards",
          href: "/admin/custom-printed-lanyard-printing/",
          publicHref: "/custom-printed-lanyard-printing/",
          icon: Tag,
          tag: "Service",
          desc: "Sublimation heat transfer satin lanyards, attachments & width sizing.",
        },
        {
          name: "Event Cards & Badges",
          href: "/admin/event-card-printing/",
          publicHref: "/event-card-printing/",
          icon: Ticket,
          tag: "Service",
          desc: "Conferences, summit badges, backstage passes & rapid dispatch.",
        },
        {
          name: "RFID & Smart Cards",
          href: "/admin/rfid-card-printing/",
          publicHref: "/rfid-card-printing/",
          icon: Radio,
          tag: "Service",
          desc: "13.56 MHz Mifare, 125 kHz EM proximity, contactless encoding & UHF.",
        },
        {
          name: "Ultrasonic Sealing",
          href: "/admin/ultrasonic-sealing/",
          publicHref: "/ultrasonic-sealing/",
          icon: Waves,
          tag: "Service",
          desc: "Weather-proof ultrasonic weld pouches, industrial sealing & tamper-proofing.",
        },
        {
          name: "Membership Cards",
          href: "/admin/membership-card-printing/",
          publicHref: "/membership-card-printing/",
          icon: Sparkles,
          tag: "Service",
          desc: "VIP club cards, loyalty barcode cards, embossing & foil stamping.",
        },
      ],
    },
    {
      name: "Products Dynamic CMS (5 Products)",
      desc: "Hardware accessories, credential attachments, medals and PVC substrates",
      color: "indigo",
      portals: [
        {
          name: "ID Card Holders",
          href: "/admin/id-card-holders/",
          publicHref: "/id-card-holders/",
          icon: Box,
          tag: "Product",
          desc: "Rigid plastic holders, silicone pouches, open-face frames & double-sided cases.",
        },
        {
          name: "ID Card Hooks & Clips",
          href: "/admin/id-card-hooks/",
          publicHref: "/id-card-hooks/",
          icon: Link2,
          tag: "Product",
          desc: "Metal dog hooks, alligator clips, swivel snap hooks & safety breakaway clasps.",
        },
        {
          name: "Acrylic Badges & Pins",
          href: "/admin/acrylic-badges/",
          publicHref: "/acrylic-badges/",
          icon: Shield,
          tag: "Product",
          desc: "Custom laser cut acrylic badges, magnetic backing, gold pin badges & nameplates.",
        },
        {
          name: "Custom Zinc Medals",
          href: "/admin/zinc-medals/",
          publicHref: "/zinc-medals/",
          icon: Award,
          tag: "Product",
          desc: "Die-cast zinc alloy medals, 3D relief, antique gold/silver finish & ribbons.",
        },
        {
          name: "30-Mil PVC Smart Cards",
          href: "/admin/pvc-cards/",
          publicHref: "/pvc-cards/",
          icon: CreditCard,
          tag: "Product",
          desc: "CR80 30-mil ISO blank cards, composite PET-PVC, magnetic stripe & smart cards.",
        },
      ],
    },
    {
      name: "Regional & Hubs (8 NE States)",
      desc: "Central Guwahati base and localized SEO landing pages for 8 Northeast States",
      color: "emerald",
      portals: [
        {
          name: "Service Areas CMS",
          href: "/admin/service-areas/",
          publicHref: "/service-areas/assam/",
          icon: MapPin,
          tag: "8 States · 28+ Cities",
          desc: "Assam, Arunachal, Meghalaya, Nagaland, Manipur, Mizoram, Tripura & Sikkim.",
        },
      ],
    },
    {
      name: "Content & Resources CMS",
      desc: "Knowledge base, guides, FAQs, case studies, templates and partner network",
      color: "purple",
      portals: [
        {
          name: "Blogs & Insights",
          href: "/admin/blogs/",
          publicHref: "/resources/blogs/",
          icon: FileText,
          tag: "Blog CMS",
          desc: "Identity tech insights, buyer guides, printing advice & SEO articles.",
        },
        {
          name: "Technical Guides",
          href: "/admin/guides/",
          publicHref: "/resources/guides/",
          icon: BookOpen,
          tag: "Guides CMS",
          desc: "Card design dimensions, DPI specifications, material comparisons & best practices.",
        },
        {
          name: "Institutional FAQs",
          href: "/admin/faq/",
          publicHref: "/faq/",
          icon: HelpCircle,
          tag: "FAQ CMS",
          desc: "Q&A matrix for corporate procurement, turnarounds, warranties & delivery.",
        },
        {
          name: "Case Studies / Projects",
          href: "/admin/case-studies/",
          publicHref: "/case-studies/",
          icon: Camera,
          tag: `${projects.length} Projects`,
          desc: "Delivered portfolio showcases, client project photos & deployment details.",
        },
        {
          name: "Templates CMS",
          href: "/admin/templates/",
          publicHref: "/templates/",
          icon: FileSpreadsheet,
          tag: "Templates",
          desc: "Downloadable Photoshop, Illustrator, CorelDraw and Excel batch spreadsheets.",
        },
        {
          name: "Partners CMS",
          href: "/admin/partners/",
          publicHref: "/partners/",
          icon: Users,
          tag: "Partners",
          desc: "Dealer network, wholesale reseller program, tier pricing & application forms.",
        },
        {
          name: "Contact Us CMS",
          href: "/admin/contact-us/",
          publicHref: "/contact-us/",
          icon: Phone,
          tag: "Contact",
          desc: "Factory address, direct phone hotline, WhatsApp links, Google map coordinates.",
        },
      ],
    },
    {
      name: "Operations & Leads",
      desc: "Rate calculator matrices, specifications and inbound customer quotes",
      color: "amber",
      portals: [
        {
          name: "Pricing Engine & Catalog",
          href: "/admin/pricing/",
          publicHref: "/pricing/",
          icon: IndianRupee,
          tag: `${activePricingCount} Rates Live`,
          desc: "V-1 vertical, H-1 horizontal, card holders, lanyards and bulk quantity discounts.",
        },
        {
          name: "CRM Lead Quotes",
          href: "/admin/quotes/",
          icon: FileText,
          tag: "CRM Leads",
          desc: "Live inbound customer quote requests, contact numbers, product selections & SLAs.",
        },
      ],
    },
  ];

  const homePoints = [
    {
      number: "01",
      id: "hero",
      title: "Hero Section & Slides",
      badge: "Point 1: Hero & Badges",
      description: "Headline copy, dual trust badges, fast quotation buttons, and rotating image carousel cards.",
      stats: `${homeData.hero.slides?.length || 0} Slides Active`,
      icon: Sparkles,
      color: "teal",
    },
    {
      number: "02",
      id: "productCatalog",
      title: "Product Catalog Carousel",
      badge: "Point 2: Product Showcase",
      description: "Explore Our Complete Product Catalog with protection cases, hardware clips, acrylic badges & cards.",
      stats: `${homeData.productCatalog?.products?.length || 0} Products Live`,
      icon: Package,
      color: "cyan",
    },
    {
      number: "03",
      id: "trust",
      title: "Clients & Trust Bar",
      badge: "Point 3: Trust & Brands",
      description: "Partner ticker logos, institution count badge, and multi-state credibility metrics.",
      stats: `${homeData.trust.clients?.length || 0} Logos Live`,
      icon: Building2,
      color: "emerald",
    },
    {
      number: "04",
      id: "identityServices",
      title: "Our Identity Services",
      badge: "Point 4: Specialized Services",
      description: "Our Identity Services carousel with Card Printing, Custom Lanyards, Event Badges & RFID cards.",
      stats: `${homeData.identityServices?.services?.length || 0} Services Active`,
      icon: Layers,
      color: "indigo",
    },
    {
      number: "05",
      id: "solutions",
      title: "4 Modular Solutions",
      badge: "Point 5: Product Grid",
      description: "PVC ID Cards, RFID & Smart Cards, Custom Satin Lanyards, and Heavy-duty Accessories.",
      stats: `${homeData.completeSolutions.items?.length || 0} Solutions Configured`,
      icon: Boxes,
      color: "cyan",
    },
    {
      number: "06",
      id: "studio",
      title: "IDGen Studio Flow",
      badge: "Point 6: Studio Workflow",
      description: "Interactive visual previewer, 3-step workflow (Design, Preview, Bulk Dispatch), and studio CTA.",
      stats: `${homeData.studio.pillars?.length || 0} Workflow Pillars`,
      icon: Cpu,
      color: "violet",
    },
    {
      number: "07",
      id: "whyIdgen",
      title: "Why IDGen & KPIs",
      badge: "Point 7: Quality & Metrics",
      description: "Direct manufacturing cleanroom advantages, replacement guarantee, and 4 KPI counters.",
      stats: `${homeData.whyIdgen.pillars?.length || 0} Pillars · ${homeData.atAGlance.metrics?.length || 0} KPIs`,
      icon: ShieldCheck,
      color: "amber",
    },
    {
      number: "08",
      id: "regionalHub",
      title: "Assam & NE Direct Hub",
      badge: "Point 8: Regional Dispatch",
      description: "Guwahati direct manufacturing factory hub, 24-48h transit, and express coverage across all 8 NE states.",
      stats: `${homeData.regionalHub.priorityCities?.length || 0} Priority Hubs · ${homeData.regionalHub.northeastStates?.length || 0} States`,
      icon: MapPin,
      color: "teal",
    },
    {
      number: "09",
      id: "faq",
      title: "Institutional FAQs",
      badge: "Point 9: Q&A Accordion",
      description: "Technical specifications, card durability, sample packs, RFID chip standards, and pricing FAQs.",
      stats: `${homeData.faq.faqs?.length || 0} Q&A Pairs`,
      icon: HelpCircle,
      color: "indigo",
    },
    {
      number: "10",
      id: "closingCta",
      title: "Closing Call To Action",
      badge: "Point 10: Closing Lead SLA",
      description: "Pre-closing consultation banner, institutional lead magnet, WhatsApp link, and direct factory hotline.",
      stats: "Lead Triggers Live",
      icon: Flame,
      color: "rose",
    },
    {
      number: "11",
      id: "metadata",
      title: "Home Page SEO & Tags",
      badge: "Point 11: Search Engine",
      description: "Page meta title, meta description, keywords, OpenGraph previews, and canonical URLs.",
      stats: "SEO Meta Verified",
      icon: Globe,
      color: "blue",
    },
  ];

  const whyPoints = [
    {
      number: "01",
      id: "hero",
      title: "Hero Section & Visuals",
      badge: "Point 1: Hero & Badges",
      description: "Eyebrow, title highlight, subhead, 3 descriptive paragraphs, turnaround pill, and showcase image.",
      stats: "Hero Active",
      icon: Sparkles,
    },
    {
      number: "02",
      id: "experience2014",
      title: "Experience Since 2014",
      badge: "Point 2: Experience & Tags",
      description: "14 project scope badges, vertical photo showcase, and historical operation highlights.",
      stats: `${whyData.experience2014.involvesItems?.length || 0} Scope Tags`,
      icon: Award,
    },
    {
      number: "03",
      id: "regional",
      title: "Regional Hub & 8 States",
      badge: "Point 3: Regional Hub",
      description: "Guwahati central base details, transit connectivity, and 8 state dispatch cards.",
      stats: `${whyData.regional.states?.length || 0} States Configured`,
      icon: MapPin,
    },
    {
      number: "04",
      id: "journey",
      title: "Our Journey Milestones",
      badge: "Point 4: Timeline",
      description: "Connected evolutionary timeline spanning 2014, 2014–2025, 2026 launch, and today.",
      stats: `${whyData.journey.milestones?.length || 0} Milestones`,
      icon: Workflow,
    },
    {
      number: "05",
      id: "sectorsAndTrust",
      title: "Sectors & Trust Philosophy",
      badge: "Point 5: Sectors & Trust",
      description: "5 institutional sectors, verifiable trust quote, and 8 credibility proof criteria.",
      stats: `${whyData.sectorsAndTrust.sectors?.length || 0} Sectors Active`,
      icon: Building2,
    },
    {
      number: "06",
      id: "pillars",
      title: "7 Core Pillars Carousel",
      badge: "Point 6: Pillars Carousel",
      description: "Slide titles, bodies, badges, images, and icons for the interactive 7 pillars carousel.",
      stats: `${whyData.pillars.carouselItems?.length || 0} Slides`,
      icon: Target,
    },
    {
      number: "07",
      id: "dataSecurity",
      title: "Data Confidentiality",
      badge: "Point 7: Privacy & Studio",
      description: "12 handled data types, 6 responsible practices, and IDGen Studio digital flow integration.",
      stats: `${whyData.dataSecurity.dataTypes?.length || 0} Data Types`,
      icon: Lock,
    },
    {
      number: "08",
      id: "ecosystem",
      title: "Connected Products Chain",
      badge: "Point 8: Connected Sourcing",
      description: "4-step unified ecosystem: ID Card, Holder, Hook, and Custom Printed Lanyard.",
      stats: `${whyData.ecosystem.products?.length || 0} Product Steps`,
      icon: Package,
    },
    {
      number: "09",
      id: "productionApproach",
      title: "9-Step Production Flow",
      badge: "Point 9: 9 Steps & QA",
      description: "9-step precision approach carousel and 6 multi-stage quality checkpoints.",
      stats: `${whyData.productionApproach.steps?.length || 0} Steps · ${whyData.productionApproach.checkpoints?.length || 0} Checkpoints`,
      icon: ClipboardCheck,
    },
    {
      number: "10",
      id: "institutionalScale",
      title: "Scale & Commitments",
      badge: "Point 10: Scale & Standards",
      description: "8 bulk project disciplines, 3 differentiators, 8 commitments, and client types.",
      stats: `${whyData.institutionalScale.commitments?.length || 0} Commitments`,
      icon: ShieldCheck,
    },
    {
      number: "11",
      id: "faqs",
      title: "Institutional FAQs",
      badge: "Point 11: FAQs",
      description: "Institutional questions and answers on turnaround, in-house capabilities, and data security.",
      stats: `${whyData.faqs.items?.length || 0} Q&A Pairs`,
      icon: HelpCircle,
    },
    {
      number: "12",
      id: "closingCta",
      title: "Closing Quote & CTAs",
      badge: "Point 12: CTAs",
      description: "IDGen in one sentence quote banner, 8-step workflow ribbon, and 4 CTA routing buttons.",
      stats: "Lead Triggers Live",
      icon: Flame,
    },
    {
      number: "13",
      id: "metadata",
      title: "SEO & Meta Settings",
      badge: "Point 13: SEO Meta",
      description: "Page meta title, meta description, and search engine optimization keywords.",
      stats: "SEO Meta Verified",
      icon: Globe,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Top Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/60 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>IDGen Secure System Connected</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Welcome back, Administrator
            </h1>
            <p className="mt-1.5 text-sm text-slate-400 max-w-2xl">
              Control the 100% dynamic home page, Why IDGen, IDGen Studio, all 8 services, 5 product lines, 8 Northeast state hubs, resource guides, pricing and live lead quotes in real time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/admin/homepage/"
              className="px-3 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 shadow-md transition flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Home Page (11)</span>
            </Link>
            <Link
              href="/admin/why-idgen/"
              className="px-3 py-2 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 font-bold text-xs hover:bg-teal-500/30 transition flex items-center gap-1.5"
            >
              <Award className="h-3.5 w-3.5" />
              <span>Why IDGen (13)</span>
            </Link>
            <Link
              href="/admin/idgen-studio/"
              className="px-3 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-xs hover:bg-cyan-500/30 transition flex items-center gap-1.5"
            >
              <Laptop className="h-3.5 w-3.5" />
              <span>IDGen Studio</span>
            </Link>
            <Link
              href="/admin/service-areas/"
              className="px-3 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-xs hover:bg-emerald-500/30 transition flex items-center gap-1.5"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span>Service Areas (8 States)</span>
            </Link>
            <Link
              href="/admin/pricing/"
              className="px-3 py-2 rounded-xl bg-slate-800 text-slate-200 font-semibold text-xs hover:bg-slate-700 transition flex items-center gap-1.5 border border-slate-700"
            >
              <IndianRupee className="h-3.5 w-3.5 text-teal-400" />
              <span>Pricing Catalog</span>
            </Link>
            <Link
              href="/admin/quotes/"
              className="px-3 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold text-xs hover:bg-amber-500/30 transition flex items-center gap-1.5"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>CRM Quotes</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Point-by-Point Home Page Metric */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-900 border border-teal-500/30 shadow-sm relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-teal-300">Home Page</span>
            <div className="h-8 w-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
              <Sparkles className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">11 Points</p>
          <Link href="/admin/homepage" className="mt-1 text-[11px] text-teal-300 hover:underline flex items-center gap-1">
            <span>100% Dynamic Suite →</span>
          </Link>
        </div>

        {/* Point-by-Point Why IDGen Metric */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-900 border border-teal-500/30 shadow-sm relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-teal-300">Why IDGen</span>
            <div className="h-8 w-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
              <Award className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">13 Points</p>
          <Link href="/admin/why-idgen" className="mt-1 text-[11px] text-teal-300 hover:underline flex items-center gap-1">
            <span>100% Dynamic CMS →</span>
          </Link>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-teal-800/40 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-teal-300">Delivered Projects</span>
            <div className="h-8 w-8 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
              <Camera className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{projects.length} Active</p>
          <Link href="/admin/case-studies" className="mt-1 text-[11px] text-teal-300 hover:underline flex items-center gap-1">
            <span>Case Studies →</span>
          </Link>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Pricing Rates</span>
            <div className="h-8 w-8 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
              <IndianRupee className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{activePricingCount} Live</p>
          <Link href="/admin/pricing" className="mt-1 text-[11px] text-teal-300 hover:underline flex items-center gap-1">
            <span>V-1, H-1, V-2 active →</span>
          </Link>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">State Hubs</span>
            <div className="h-8 w-8 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
              <MapPin className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{states.length}</p>
          <Link href="/admin/service-areas" className="mt-1 text-[11px] text-teal-400 hover:underline flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            <span>8 NE States →</span>
          </Link>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Dynamic Cities</span>
            <div className="h-8 w-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Building2 className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{allCitiesList.length}</p>
          <p className="mt-1 text-[11px] text-emerald-400">
            {primaryCities.length} Primary Base
          </p>
        </div>
      </div>

      {/* Complete All-Pages Admin Directory & Control Portals Hub */}
      <div className="rounded-3xl bg-slate-900/90 border border-teal-500/30 p-6 sm:p-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold mb-1.5 border border-teal-500/20">
              <Package className="h-3.5 w-3.5" />
              <span>Complete System Directory • 26+ Management Portals</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              All Admin Control Centers &amp; Dynamic Pages
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-3xl">
              Access every dynamic product line, custom studio workflow, service category, Northeast state hub, resource portal, and operational tool across the IDGen platform.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-1.5 border border-slate-700 transition"
            >
              <span>View Public Site</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Categorized Portals Grid */}
        <div className="space-y-8">
          {adminCategories.map((cat) => (
            <div key={cat.name} className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-teal-400" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-200">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    ({cat.portals.length} {cat.portals.length === 1 ? "page" : "pages"})
                  </span>
                </div>
                <p className="hidden md:block text-xs text-slate-500">{cat.desc}</p>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cat.portals.map((portal) => {
                  const Icon = portal.icon;
                  return (
                    <div
                      key={portal.href}
                      className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-teal-500/40 hover:bg-slate-950/90 transition-all duration-200 group flex flex-col justify-between space-y-3 shadow-sm"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="h-9 w-9 rounded-xl bg-teal-500/10 text-teal-300 border border-teal-500/20 flex items-center justify-center group-hover:scale-105 transition">
                            <Icon className="h-4 w-4" />
                          </div>
                          {portal.tag && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300">
                              {portal.tag}
                            </span>
                          )}
                        </div>

                        <div>
                          <h4 className="font-bold text-sm text-white group-hover:text-teal-300 transition">
                            {portal.name}
                          </h4>
                          <p className="text-[11px] text-slate-400 leading-relaxed mt-1 line-clamp-2">
                            {portal.desc}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
                        <Link
                          href={portal.href}
                          className="inline-flex items-center gap-1 text-xs font-bold text-teal-400 group-hover:text-teal-300 hover:underline"
                        >
                          <span>Open CMS</span>
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition" />
                        </Link>

                        {portal.publicHref && (
                          <Link
                            href={portal.publicHref}
                            target="_blank"
                            title="View public live page"
                            className="text-[10px] text-slate-400 hover:text-slate-200 flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-900 hover:bg-slate-800 transition"
                          >
                            <span>Live</span>
                            <ExternalLink className="h-2.5 w-2.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Point-by-Point Home Page Management Section */}
      <div className="rounded-3xl bg-slate-900/80 border border-teal-500/20 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold mb-1.5 border border-teal-500/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Point-by-Point Home Page Control</span>
            </div>
            <h2 className="text-xl font-bold text-white">Home Page Dynamic Points (1 through 11)</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Every section of the public home page is completely editable point-by-point. Click any point to edit its content directly.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              target="_blank"
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-1.5 border border-slate-700 transition"
            >
              <span>View Public Home</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
            <Link
              href="/admin/homepage"
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-teal-500/20 transition"
            >
              <span>Open Full Home Editor</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 9 Points Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homePoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.id}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-teal-500/40 transition group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="h-9 w-9 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center group-hover:scale-105 transition">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-teal-400 uppercase tracking-wider block">
                          Point {point.number}
                        </span>
                        <h3 className="font-bold text-sm text-white group-hover:text-teal-300 transition">
                          {point.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" />
                    <span>{point.stats}</span>
                  </span>
                  <Link
                    href={`/admin/homepage?tab=${point.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-400 group-hover:text-teal-300 hover:underline"
                  >
                    <span>Edit Point</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Why IDGen Page Point-by-Point Control Suite */}
      <div className="rounded-3xl bg-slate-900/80 border border-teal-500/20 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-2">
              <Award className="h-3.5 w-3.5" />
              <span>100% Dynamic Engine Active</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">Why IDGen: 13 CMS Points</h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Every section of the Why IDGen page is fully dynamic and editable point-by-point with immediate live synchronization.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/why-idgen/"
              target="_blank"
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-1.5 border border-slate-700 transition"
            >
              <span>View Public Why IDGen</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
            <Link
              href="/admin/why-idgen"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-teal-500/20 transition"
            >
              <span>Open Why IDGen Editor</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 13 Points Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.id}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-teal-500/40 transition group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="h-9 w-9 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center group-hover:scale-105 transition">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-teal-400 uppercase tracking-wider block">
                          Point {point.number}
                        </span>
                        <h3 className="font-bold text-sm text-white group-hover:text-teal-300 transition">
                          {point.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" />
                    <span>{point.stats}</span>
                  </span>
                  <Link
                    href={`/admin/why-idgen?tab=${point.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-400 group-hover:text-teal-300 hover:underline"
                  >
                    <span>Edit Point</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Service Area Highlights */}
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Operational Service Categories</h2>
            <p className="text-xs text-slate-400">
              State hubs and dynamic sub-category cities currently active across the platform.
            </p>
          </div>
          <Link
            href="/admin/service-areas"
            className="inline-flex items-center gap-1 text-xs font-bold text-teal-400 hover:underline"
          >
            <span>Open Category & City Editor</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((st) => (
            <div
              key={st.slug}
              className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-200">{st.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-teal-300 font-semibold">
                  {st.cities.length} Cities
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {st.cities.slice(0, 4).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${st.slug}/${c.slug}/`}
                    target="_blank"
                    className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 hover:text-teal-300 border border-slate-800 hover:border-teal-500/30 transition"
                  >
                    {c.name} {c.isPrimary && "★"}
                  </Link>
                ))}
                {st.cities.length > 4 && (
                  <span className="text-[10px] px-1.5 py-0.5 text-slate-500">
                    +{st.cities.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Guwahati Showcase Spotlight */}
      <div className="rounded-3xl bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-900 border border-teal-800/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20">
            <span>Primary Manufacturing Hub</span>
          </div>
          <h3 className="text-xl font-bold text-white">Guwahati City Dynamic Page</h3>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Loaded with the full specification from <code className="text-teal-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">guwahati.md</code>: Local Partner section, Organizations Served, Complete Setup Packages, Bulk Guidelines, 8-Stage Order Process, 10+ Guwahati FAQs, and local coverage areas.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            href="/admin/service-areas"
            className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 transition"
          >
            Edit Guwahati Content
          </Link>
          <Link
            href="/service-areas/assam/guwahati/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 font-semibold text-xs hover:bg-slate-700 transition flex items-center gap-1 border border-slate-700"
          >
            <span>View Public Page</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
