import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ShieldCheck,
  Building2,
  Users,
  CreditCard,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Phone,
  MessageSquare,
  FileSpreadsheet,
  Award,
  Truck,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { HeroShowcaseVisual } from "@/components/ui/HeroShowcaseVisual";
import { CityServicesCarousel } from "@/components/ui/CityServicesCarousel";
import { CityLocalPresence } from "@/components/ui/CityLocalPresence";
import { CityBulkPrinting } from "@/components/ui/CityBulkPrinting";
import { CityWhyChooseCarousel } from "@/components/ui/CityWhyChooseCarousel";
import { CityWorkflowSection } from "@/components/ui/CityWorkflowSection";
import { ProductShowcaseCarousel } from "@/components/home/ProductShowcaseCarousel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema-org";
import { getState, getCity, getAllCities, getDefaultCityServices } from "@/lib/dynamic-locations";
import { services } from "@/data/services";
import { SITE, SITE_URL } from "@/data/site";
import type { Faq } from "@/data/types";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getState(stateSlug);
  const city = getCity(stateSlug, citySlug);
  if (!state || !city) return {};
  const url = `${SITE_URL}/service-areas/${state.slug}/${city.slug}/`;
  return {
    title: city.metaTitle || `ID Card Printing in ${city.name} | IDGen Identity Solutions`,
    description:
      city.metaDescription ||
      `IDGen provides ID card printing and identity solutions in ${city.name}, ${state.name}, including student, employee, event and RFID cards, lanyards and accessories.`,
    alternates: { canonical: url },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url,
      type: "website",
    },
    ...(state.indexed === false || city.indexed === false ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function CityPage({ params }: { params: Promise<{ state: string; city: string }> }) {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getState(stateSlug);
  const city = getCity(stateSlug, citySlug);
  if (!state || !city) notFound();

  const isGuwahati = city.slug === "guwahati";

  const verifiedClients = [
    { name: "Don Bosco Hr Sec School", logo: "/images/clint logo/1.png", location: "Gojapara, Assam", tag: "Guwahati" },
    { name: "Jorhat Kendriya Vidyalaya", logo: "/images/clint logo/2.png", location: "Jorhat, Assam", tag: "Jorhat" },
    { name: "CKB College", logo: "/images/clint logo/3.png", location: "Jorhat, Assam", tag: "Dibrugarh" },
    { name: "DBS Itanagar", logo: "/images/clint logo/4.png", location: "Arunachal Pradesh", tag: "Silchar" },
    { name: "Rayburn College", logo: "/images/clint logo/5.png", location: "Churachandpur, Manipur", tag: "Tezpur" },
    { name: "Nathan Brown Academy", logo: "/images/clint logo/6.png", location: "Namrup, Assam", tag: "Nagaon" },
    { name: "Ardalivia English School", logo: "/images/clint logo/7.png", location: "Assam", tag: "Tinsukia" },
    { name: "Assam Govt Departments", logo: "/images/clint logo/8.png", location: "Guwahati Hub", tag: "Sivasagar" },
  ];

  // Build FAQs
  const defaultFaqs: Faq[] = [
    { q: "Where is IDGen located?", a: `${SITE.hqCity}, ${SITE.hqState}, India.` },
    {
      q: `Does IDGen provide ID card printing in ${city.name}?`,
      a: `Yes. IDGen provides customized and bulk identification products for organizations in ${city.name}.`,
    },
    { q: `Does IDGen print student ID cards in ${city.name}?`, a: "Yes, for schools, colleges and universities." },
    { q: `Does IDGen print employee ID cards in ${city.name}?`, a: "Yes, for companies, offices, hospitals and institutions." },
    { q: `Can I order bulk ID cards in ${city.name}?`, a: "Yes, subject to product and project specifications." },
    { q: "Can ID cards be supplied with lanyards, holders and hooks?", a: "Yes, as part of a complete identification setup." },
    { q: "Does IDGen provide RFID cards?", a: "Yes, matched to the required RFID technology and reader/system compatibility." },
    {
      q: `Does IDGen have an office in ${city.name}?`,
      a: city.isPrimary
        ? `Yes. ${SITE.hqCity} is IDGen's primary business base and manufacturing cleanroom.`
        : `IDGen's primary business base is in ${SITE.hqCity}, ${SITE.hqState}. The ${city.name} page represents direct institutional service coverage and doorstep express logistics across ${state.name}.`,
    },
  ];

  const displayFaqs = city.faqs && city.faqs.length > 0 ? city.faqs : defaultFaqs;

  const defaultOrganizations = [
    "Schools",
    "Colleges",
    "Universities",
    "Companies",
    "Corporate offices",
    "Hospitals",
    "Hotels",
    "Institutions",
    "Government organizations",
    "NGOs",
    "Industries",
    "Events",
    "Clubs",
    "Associations",
  ];
  const organizations = city.organizationsServed || defaultOrganizations;

  const defaultOrderSteps = [
    { step: "01", title: "Tell Us Your Requirement", description: "Share: Organization + Product + Quantity + Delivery Requirement." },
    { step: "02", title: "Share Your Data", description: "Provide the required records and photos (or use IDGen Studio)." },
    { step: "03", title: "Confirm the Design", description: "Use your existing design or discuss a custom template." },
    { step: "04", title: "Review & Proofing", description: "Review digital PDF proofs or request physical pre-production sample." },
    { step: "05", title: "Approval", description: "Formal sign-off on design, data, and accessory specs." },
    { step: "06", title: "Production", description: "Thermal printing, RFID encoding, and ultrasonic lamination." },
    { step: "07", title: "Quality Check", description: "100% optical inspection before dispatch." },
    { step: "08", title: "Dispatch", description: `Prepared for dispatch and delivered directly to your doorstep in ${city.name}.` },
  ];
  const orderSteps = city.orderSteps || defaultOrderSteps;

  const defaultSetups = [
    {
      title: "Card Only",
      subtitle: "For organizations that already have their own accessories.",
      items: ["CR80 Standard PVC Card", "High-Resolution Front & Back Print", "Standard Lamination"],
    },
    {
      title: "Card + Holder",
      subtitle: "For protected and professional card presentation.",
      items: ["CR80 PVC Card", "Crystal / Matte Rigid Card Holder", "Thumb Slot Release"],
    },
    {
      title: "Card + Holder + Hook + Lanyard",
      subtitle: "For everyday wearable identification.",
      items: ["CR80 PVC Card", "Rigid Card Holder", "Metal Dog / Swivel Hook", "Custom Satin Lanyard"],
      recommended: true,
    },
    {
      title: "Complete Identification Setup",
      subtitle: "Full tamper-evident organizational protection.",
      items: [
        "CR80 PVC Card",
        "Ultrasonic Sealing Lamination",
        "Rigid / Soft ID Holder",
        "Custom Breakaway Hook",
        "Multi-Color Sublimation Lanyard",
      ],
    },
  ];
  const completeSetups = city.completeSetups || defaultSetups;

  return (
    <>
      <JsonLd data={localBusinessSchema({ areaServed: [state.name, city.name] })} />

      {/* Unified Hero Section */}
      <PageHero
        eyebrow={city.heroEyebrow || `${state.name} Service Area`}
        icon={MapPin}
        title={
          city.heroHeadline ? (
            <span>{city.heroHeadline}</span>
          ) : (
            <>
              <span>ID Card Printing &amp; </span>
              <span className="gradient-text">Identity Solutions</span>
              <span> in {city.name}</span>
            </>
          )
        }
        lede={city.heroIntro}
        visual={
          <HeroShowcaseVisual
            cityName={city.name}
            stateName={state.name}
            imagePath={city.heroImage}
            topBadgeText={city.heroShowcaseBadge}
            chip1Text={city.heroShowcaseChip1}
            chip2Text={city.heroShowcaseChip2}
          />
        }
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Service Areas", path: "/service-areas/assam/" },
              { name: state.name, path: `/service-areas/${state.slug}/` },
              { name: city.name, path: `/service-areas/${state.slug}/${city.slug}/` },
            ]}
          />
        }
      >
        {/* Hero Subtext, Workflow Bar & CTAs */}
        <div className="mt-5 space-y-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
          <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-3.5 sm:p-4 backdrop-blur-sm shadow-2xs border-l-3 border-l-accent">
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
              {city.heroSubtext ||
                `From a simple card requirement to a complete institutional identification setup, IDGen helps organizations in ${city.name} coordinate the exact products and production workflow they need.`}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-accent">
                Standard Factory Production Workflow
              </p>
            </div>
            <FlowChain
              steps={
                city.heroWorkflowSteps && city.heroWorkflowSteps.length > 0
                  ? city.heroWorkflowSteps
                  : ["Requirement", "Design", "Approval", "Production", "Quality Check", "Dispatch"]
              }
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/request-a-quote/"
              className="rounded-full bg-accent px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-accent-hover btn-glow flex items-center gap-2"
            >
              <span>{city.heroCtaText || `Request a ${city.name} Quote`}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact-us/"
              className="rounded-full border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white transition hover:border-accent hover:text-accent flex items-center gap-2 shadow-2xs"
            >
              <Phone className="h-4 w-4 text-accent" />
              <span>{city.heroSecondaryCtaText || "Call / WhatsApp IDGen"}</span>
            </Link>
          </div>

          {/* Micro trust indicators */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted pt-1">
            {(city.heroTrustBadges && city.heroTrustBadges.length > 0
              ? city.heroTrustBadges
              : [
                  "Free Pre-Production Physical Sample",
                  "100% Optical Inspection",
                  "Direct Cleanroom Manufacturing",
                ]
            ).map((badge, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      {/* Complete Product Catalog Showcase */}
      <ProductShowcaseCarousel />

      <Container className="py-12 md:py-16 space-y-16">

        {/* IDGen in [City]: Premium Local Identity Solutions Partner */}
        <CityLocalPresence city={city} state={state} organizations={organizations} />

        {/* Dedicated Identification Products Available in [City] (Dynamic Carousel) */}
        <div>
          <CityServicesCarousel
            cityName={city.name}
            services={city.services && city.services.length > 0 ? city.services : getDefaultCityServices(city.name)}
          />
        </div>

        {/* Complete Identification Setup Options */}
        <div>
          <SectionHead
            eyebrow={city.setupsEyebrow || "Configurations"}
            title={city.setupsTitle || `Complete ID Card Solutions & Packages in ${city.name}`}
            lede={
              city.setupsSubtitle ||
              "Not every organization needs the same identification setup. Select the exact packaging that matches your project requirements."
            }
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {completeSetups.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-3xl p-6 border transition ${
                  pkg.recommended
                    ? "border-accent bg-surface shadow-lg shadow-accent/5 ring-2 ring-accent/20"
                    : "border-surface-border bg-surface shadow-sm"
                }`}
              >
                {pkg.recommended && (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                    Most Popular Setup
                  </span>
                )}
                <div>
                  <h3 className="text-base font-bold text-foreground">{pkg.title}</h3>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed">{pkg.subtitle}</p>

                  <div className="mt-4 space-y-2 pt-3 border-t border-surface-border">
                    {pkg.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-surface-border">
                  <Link
                    href="/request-a-quote/"
                    className={`block w-full text-center rounded-xl py-2 text-xs font-bold transition ${
                      pkg.recommended
                        ? "bg-accent text-white hover:bg-accent-hover shadow-sm"
                        : "bg-background border border-surface-border text-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    Select {pkg.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold justify-center">
            <Link href="/id-card-holders/" className="text-accent hover:underline flex items-center gap-1">
              <span>Explore ID Card Holders</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
            <span className="text-muted">•</span>
            <Link href="/id-card-hooks/" className="text-accent hover:underline flex items-center gap-1">
              <span>Explore ID Card Hooks & Attachments</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Bulk ID Card Printing in [City] */}
        <CityBulkPrinting
          cityName={city.name}
          stateName={state.name}
          isGuwahati={isGuwahati}
          bulkEyebrow={city.bulkEyebrow}
          bulkSubBadge={city.bulkSubBadge}
          bulkTitle={city.bulkTitle}
          bulkDesc={city.bulkDesc}
          bulkHighlights={city.bulkHighlights}
          bulkInputsTitle={city.bulkInputsTitle}
          bulkInputsDesc={city.bulkInputsDesc}
          bulkInputsStepTag={city.bulkInputsStepTag}
          customBulkInputs={city.bulkInputs}
          bulkBottomNote={city.bulkBottomNote}
          bulkCta1Text={city.bulkCta1Text}
          bulkCta2Text={city.bulkCta2Text}
        />
      </Container>

      {/* Real Organizations & Projects Showcase (Container Fluid / Full Viewport Width) */}
      <div className="my-14 relative z-10 w-full">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>{city.projectsBadge || "Verified Institutional Deployments"}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
              {city.projectsTitle || `Organizations & Projects in ${city.name}`}
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              {city.projectsDesc ||
                `IDGen partners with leading academic institutions, corporate offices, and government departments across ${city.name} and ${state.name}. Every identification setup is manufactured with direct factory calibration and rigorous data confidentiality.`}
            </p>
          </div>
        </Container>

        {/* Clean Seamless Colorful Infinite Auto-Sliding Logo Ticker (Fluid Width) */}
        <div className="relative w-full overflow-hidden py-8 bg-surface/30 dark:bg-white/[0.01] border-y border-surface-border/80 dark:border-white/10 backdrop-blur-md transition-colors duration-300">
          {/* Fade masks for smooth left/right edges */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-background dark:from-[#0A1628] via-background/90 dark:via-[#0A1628]/90 to-transparent z-10 pointer-events-none transition-colors duration-300" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-background dark:from-[#0A1628] via-background/90 dark:via-[#0A1628]/90 to-transparent z-10 pointer-events-none transition-colors duration-300" />

          <div className="animate-marquee flex items-center gap-10 sm:gap-14">
            {[
              ...(city.verifiedClients && city.verifiedClients.length > 0 ? city.verifiedClients : verifiedClients),
              ...(city.verifiedClients && city.verifiedClients.length > 0 ? city.verifiedClients : verifiedClients),
            ].map((client, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center shrink-0 w-36 sm:w-44 transition-all duration-300 hover:scale-105"
              >
                {/* Clean Large Floating Logo without Box */}
                <div className="relative h-20 sm:h-24 w-full flex items-center justify-center overflow-hidden mb-2">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain drop-shadow-sm filter dark:brightness-105 group-hover:drop-shadow-md transition-all duration-300"
                    sizes="(max-width: 640px) 144px, 176px"
                  />
                </div>

                {/* Bottom Client Name & Category Tag */}
                <div className="text-center w-full min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-extrabold text-foreground dark:text-white group-hover:text-accent dark:group-hover:text-cyan-300 transition-colors truncate">
                    {client.name}
                  </h4>
                  <p className="text-[10px] font-bold text-accent dark:text-cyan-400 truncate mt-0.5">
                    {client.tag || client.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Container className="pb-12 md:pb-16 space-y-16">

        {/* Geographic Service Coverage */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/90 dark:border-white/10 bg-gradient-to-br from-white via-slate-50/60 to-white dark:from-[#0b1320] dark:via-[#0e1726] dark:to-[#070d18] p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-xl space-y-6">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-accent" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-accent uppercase">
                  {city.coverageEyebrow || `${city.name} Service Coverage`}
                </p>
                <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl tracking-tight">
                {city.coverageTitle || `${city.name} Service Coverage`}
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {city.coverageIntro ||
                  `IDGen is based in ${city.name} and can serve organizations across the city and surrounding areas according to the applicable order and delivery arrangements.`}
              </p>
            </div>

            <div className="inline-flex items-center gap-3 rounded-2xl border border-accent/20 bg-accent-soft/40 dark:bg-accent/10 p-3.5 shrink-0 shadow-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white shadow-xs">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">
                  {city.coverageHubTitle || (isGuwahati ? "Guwahati Direct Hub" : "Direct City Hub")}
                </p>
                <p className="text-[10px] text-muted">
                  {city.coverageHubSubtitle || `Full ${city.name} & Regional Reach`}
                </p>
              </div>
            </div>
          </div>

          {/* Active Serviced Localities & Commercial Belts */}
          {city.nearbyAreas && city.nearbyAreas.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-slate-200/60 dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                  {city.name} Serviced Localities &amp; Fulfillment Zones:
                </span>
                <span className="text-[11px] text-muted">
                  ({city.nearbyAreas.length} active delivery zones covered)
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {city.nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="group inline-flex items-center gap-1.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 px-3.5 py-1.5 text-xs font-semibold text-foreground hover:border-accent hover:text-accent hover:bg-accent-soft/30 dark:hover:bg-accent/20 transition-all cursor-default shadow-2xs"
                  >
                    <MapPin className="h-3 w-3 text-accent/70 group-hover:text-accent shrink-0" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Why Choose IDGen in [City] (Dynamic Carousel) */}
        <div className="space-y-8">
          <SectionHead
            eyebrow={city.whyChooseEyebrow || "Why Choose Us"}
            title={city.whyChooseTitle || `Why Choose IDGen in ${city.name}?`}
            lede={
              city.whyChooseSubtitle ||
              `${isGuwahati ? "Guwahati-based manufacturing cleanroom" : "Direct regional manufacturing"}, experience dating back to 2014, organizational focus, and an integrated digital workflow.`
            }
          />

          <CityWhyChooseCarousel city={city} state={state} />

          <div className="text-center pt-2">
            <Link
              href="/why-idgen/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-6 py-2.5 text-xs font-bold text-accent hover:border-accent hover:bg-accent-soft/30 transition shadow-xs"
            >
              <span>Read the full story on Why IDGen</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Identification Data & Confidentiality */}
        <div className="rounded-3xl border border-surface-border bg-surface p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">
                {city.confidentialityTitle || "Identification Data & Confidentiality"}
              </h3>
              <p className="mt-1.5 max-w-3xl text-xs text-muted leading-relaxed">
                {city.confidentialityDesc ||
                  "Personalized ID card projects contain student/employee names, biometrics, and photos. IDGen treats all customer-provided identification data as strictly confidential project information and uses it solely for the authorized printing scope."}
              </p>
            </div>
          </div>
          <Link
            href="/idgen-studio/"
            className="rounded-xl border border-surface-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:border-accent hover:text-accent shrink-0 transition"
          >
            {city.confidentialityCta || "Explore IDGen Studio →"}
          </Link>
        </div>

        {/* How to Order ID Cards in [City] (Premium 8-Stage Workflow) */}
        <CityWorkflowSection
          cityName={city.name}
          stateName={state.name}
          isGuwahati={isGuwahati}
          workflowEyebrow={city.workflowEyebrow}
          workflowBadge={city.workflowBadge}
          workflowTitle={city.workflowTitle}
          workflowSubtitle={city.workflowSubtitle}
          workflowNote={city.workflowNote}
          workflowCta1Text={city.workflowCta1Text}
          workflowCta2Text={city.workflowCta2Text}
          customSteps={city.orderSteps}
        />

        {/* FAQ Section */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/90 dark:border-white/10 bg-gradient-to-br from-white via-slate-50/60 to-white dark:from-[#0b1320] dark:via-[#0e1726] dark:to-[#070d18] p-6 sm:p-9 lg:p-10 shadow-2xl shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-xl space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div className="lg:w-1/3 space-y-4">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="h-px w-6 bg-accent" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-accent uppercase">FAQ &amp; Knowledge Base</p>
                <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {city.faqsTitle || `Frequently Asked Questions in ${city.name}`}
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                {city.faqsSubtitle ||
                  `Key answers regarding ID card printing, batch timelines, accessories, and delivery in ${city.name}.`}
              </p>

              {/* Help Callout Card */}
              <div className="rounded-2xl border border-accent/20 bg-accent-soft/30 dark:bg-accent/10 p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider">
                  <MessageSquare className="h-4 w-4" />
                  <span>{city.faqsHelpTitle || "Have Specific Questions?"}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {city.faqsHelpText ||
                    `Need guidance on custom RFID chip frequencies, lanyard branding, or batch approvals? Our ${city.name} production desk is here to help.`}
                </p>
                <div className="pt-1 flex flex-col gap-2">
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2 text-xs font-bold text-white hover:bg-accent-hover transition shadow-xs"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Talk to Production Team</span>
                  </Link>
                  <Link
                    href="/request-a-quote/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 px-4 py-2 text-xs font-semibold text-foreground hover:border-accent hover:text-accent transition"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <FaqList faqs={displayFaqs} />
            </div>
          </div>
        </div>

        {/* Quick Answer Summary Box (AI Overviews & Search Snippets) */}
        {city.quickAnswer && (
          <div className="relative overflow-hidden rounded-[2.5rem] border border-accent/30 bg-gradient-to-br from-accent-soft/40 via-white to-cyan-500/5 dark:from-[#0b1320] dark:via-[#0e1726] dark:to-[#070d18] p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-xl space-y-5">
            <div className="absolute inset-0 hero-grid-pattern opacity-30 dark:opacity-15 pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/60 dark:bg-accent/15 px-3.5 py-1 text-xs font-bold text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                <span>AI Overview &amp; Executive Summary</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full self-start sm:self-auto flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                <span>Factory Verified Overview</span>
              </span>
            </div>

            <p className="relative z-10 text-sm sm:text-base text-foreground leading-relaxed font-normal">
              {city.quickAnswer}
            </p>

            {/* Quick Fact Badges */}
            <div className="relative z-10 pt-3 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap gap-2 sm:gap-3 text-xs">
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1.5 font-semibold text-foreground shadow-2xs">
                <Building2 className="h-3.5 w-3.5 text-accent" />
                <span>Hub: {isGuwahati ? "Guwahati Cleanroom" : `${city.name} Direct`}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1.5 font-semibold text-foreground shadow-2xs">
                <Award className="h-3.5 w-3.5 text-accent" />
                <span>Experience: Since 2014</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1.5 font-semibold text-foreground shadow-2xs">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                <span>ISO/IEC 7810 Certified Quality</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1.5 font-semibold text-foreground shadow-2xs">
                <Truck className="h-3.5 w-3.5 text-accent" />
                <span>Fulfillment: {isGuwahati ? "24–48h Local" : "Express Doorstep"}</span>
              </div>
            </div>
          </div>
        )}

        {/* Other Cities in this State Category */}
        {state.cities.length > 1 && (
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/90 dark:border-white/10 bg-gradient-to-br from-white via-slate-50/60 to-white dark:from-[#0b1320] dark:via-[#0e1726] dark:to-[#070d18] p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="h-px w-6 bg-accent" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-accent uppercase">Regional Logistics Network</p>
                  <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Other Cities We Serve in <span className="gradient-text">{state.name}</span>
                </h2>
                <p className="mt-2 text-sm text-muted max-w-2xl leading-relaxed">
                  Direct institutional identity support, sample dispatch, and door-to-door fulfillment across all primary districts of {state.name}.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-2xl border border-accent/20 bg-accent-soft/40 dark:bg-accent/10 p-3 shrink-0">
                <MapPin className="h-5 w-5 text-accent" />
                <div className="text-left">
                  <p className="text-xs font-bold text-foreground">Active Daily Routes</p>
                  <p className="text-[10px] text-muted">48–72h Doorstep Dispatch</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
              {state.cities
                .filter((c) => c.slug !== city.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${state.slug}/${c.slug}/`}
                    className="group relative flex items-center justify-between rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-accent hover:bg-white dark:hover:bg-white/[0.07] hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-soft/60 dark:bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-foreground group-hover:text-accent transition-colors truncate">
                          {c.name} {c.isPrimary && "★"}
                        </p>
                        <span className="text-[10px] text-muted truncate block">
                          {c.isPrimary ? "Central Hub" : "Express Route"}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                  </Link>
                ))}
            </div>

            <p className="pt-3 border-t border-slate-200/60 dark:border-white/10 text-xs text-muted flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>All regional shipments are factory-calibrated and dispatched directly from our primary manufacturing hub with door-to-door tracking.</span>
            </p>
          </div>
        )}

        {/* Closing CTA */}
        <div className="mt-8">
          <CtaBand
            title={`Need ID cards for your organization in ${city.name}?`}
            body={`Tell IDGen your organization name, target card quantity, and required accessories for an immediate proposal.`}
            links={[
              { label: `Request a ${city.name} Quote`, href: "/request-a-quote/", primary: true },
              { label: "Contact IDGen Engineering Desk", href: "/contact-us/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
