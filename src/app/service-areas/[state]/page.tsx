import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Building2,
  ShieldCheck,
  Sparkles,
  Phone,
  MessageSquare,
  CheckCircle2,
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { HeroShowcaseVisual } from "@/components/ui/HeroShowcaseVisual";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { getState, getAllStates } from "@/lib/dynamic-locations";
import { ProductShowcaseCarousel } from "@/components/home/ProductShowcaseCarousel";
import { SITE, SITE_URL } from "@/data/site";
import type { Faq } from "@/data/types";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) return {};
  const url = `${SITE_URL}/service-areas/${state.slug}/`;
  return {
    title: state.metaTitle || `ID Card Printing & Identity Solutions in ${state.name} | IDGen`,
    description: state.metaDescription || `IDGen provides ID card printing and identity solutions across ${state.name}.`,
    alternates: { canonical: url },
    openGraph: { title: state.metaTitle, description: state.metaDescription, url },
    ...(state.indexed === false ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) notFound();

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

  const faqs: Faq[] = [
    {
      q: `Does IDGen provide ID card printing in ${state.name}?`,
      a: `Yes. IDGen provides customized and bulk ID card printing and identity solutions across ${state.name}.`,
    },
    { q: "Where is IDGen based?", a: `IDGen is based in ${SITE.hqCity}, ${SITE.hqState}, India.` },
    {
      q: `Which ${state.name} cities does IDGen serve?`,
      a: `Priority markets include ${state.cities.map((c) => c.name).join(", ")}. IDGen also delivers door-to-door to institutions across all districts in ${state.name}.`,
    },
    { q: "Can schools order student ID cards?", a: "Yes. Schools, colleges and universities can request customized student ID cards with lanyards and crystal holders." },
    { q: "Can companies order employee ID cards?", a: "Yes. Companies, offices, hospitals and institutions can request customized employee and staff ID cards with RFID chips." },
    { q: "Does IDGen provide bulk ID card printing?", a: "Yes, supporting institutional batches from 50 to 50,000+ units." },
    { q: "Can organizations collect student or employee information online?", a: "Yes, via IDGen Studio digital portal for photo and data verification." },
    { q: "Is customer identification data handled confidentially?", a: "Yes. IDGen treats customer-provided identification information as confidential project information under strict data protection protocols." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Regional Service Area"
        icon={MapPin}
        title={
          <>
            <span>ID Card Printing &amp; </span>
            <span className="gradient-text">Identity Solutions</span>
            <span> in {state.name}</span>
          </>
        }
        lede={state.heroIntro}
        visual={<HeroShowcaseVisual cityName={state.cities[0]?.name || state.name} stateName={state.name} />}
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Service Areas", path: "/service-areas/assam/" },
              { name: state.name, path: `/service-areas/${state.slug}/` },
            ]}
          />
        }
      >
        <div className="mt-5 space-y-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
          <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-3.5 sm:p-4 backdrop-blur-sm shadow-2xs border-l-3 border-l-accent">
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
              Direct factory printing, RFID smart credentials, and custom printed lanyards engineered for institutions across {state.name} with insured door-to-door dispatch.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/request-a-quote/"
              className="rounded-full bg-accent px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-accent-hover btn-glow flex items-center gap-2"
            >
              <span>Request a {state.name} Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact-us/"
              className="rounded-full border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white transition hover:border-accent hover:text-accent flex items-center gap-2 shadow-2xs"
            >
              <Phone className="h-4 w-4 text-accent" />
              <span>Call / WhatsApp IDGen</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              <span>Free Pre-Production Physical Sample</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              <span>100% Optical Quality Check</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              <span>Doorstep Dispatch Across {state.name}</span>
            </span>
          </div>
        </div>
      </PageHero>

      {/* Complete Product Catalog Showcase */}
      <ProductShowcaseCarousel />

      <Container className="py-14 space-y-16">
        {/* Dynamic Sub-Category Cities Grid */}
        <div>
          <SectionHead
            eyebrow="Operational Network"
            title={`${state.name} Priority Service Hubs`}
            lede={`Explore local identity solutions, institutional delivery timelines, and nearby coverage areas across ${state.name}.`}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {state.cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${state.slug}/${c.slug}/`}
                className="group relative rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-[#0e1726]/80 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-soft/60 dark:bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <h3 className="font-bold text-base text-foreground group-hover:text-accent transition">
                        {c.name}
                      </h3>
                    </div>
                    {c.isPrimary && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-accent-soft text-accent border border-accent/20">
                        Primary Base
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-2">{c.heroIntro}</p>

                  {c.nearbyAreas && c.nearbyAreas.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.nearbyAreas.slice(0, 4).map((area) => (
                        <span
                          key={area}
                          className="text-[10px] font-medium px-2.5 py-0.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground"
                        >
                          {area}
                        </span>
                      ))}
                      {c.nearbyAreas.length > 4 && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 text-accent">
                          +{c.nearbyAreas.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs font-bold text-accent">
                  <span>Explore {c.name} Solutions</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Configurations Overview */}
        <div>
          <SectionHead eyebrow="Configurations" title="Complete Identification Products" />
          <div className="mt-6 flex flex-wrap gap-3">
            <FlowChain
              steps={[
                "Card Only",
                "Card + Holder",
                "Card + Holder + Hook + Lanyard",
                "Ultrasonic Sealed Setup",
              ]}
            />
          </div>
        </div>
      </Container>

      {/* Real Organizations & Projects Showcase (Container Fluid / Full Viewport Width) */}
      <div className="my-14 relative z-10 w-full">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Verified Institutional Deployments</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
              Organizations &amp; Projects in {state.name}
            </h2>
            <p className="text-sm text-muted max-w-3xl leading-relaxed">
              IDGen partners with leading academic institutions, corporate offices, and government departments across {state.name} and Northeast India. Every identification setup is manufactured with direct factory calibration and rigorous data confidentiality.
            </p>
          </div>
        </Container>

        {/* Clean Seamless Colorful Infinite Auto-Sliding Logo Ticker (Fluid Width) */}
        <div className="relative w-full overflow-hidden py-8 bg-surface/30 dark:bg-white/[0.01] border-y border-surface-border/80 dark:border-white/10 backdrop-blur-md transition-colors duration-300">
          {/* Fade masks for smooth left/right edges */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-background dark:from-[#0A1628] via-background/90 dark:via-[#0A1628]/90 to-transparent z-10 pointer-events-none transition-colors duration-300" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-background dark:from-[#0A1628] via-background/90 dark:via-[#0A1628]/90 to-transparent z-10 pointer-events-none transition-colors duration-300" />

          <div className="animate-marquee flex items-center gap-10 sm:gap-14">
            {[...verifiedClients, ...verifiedClients].map((client, idx) => (
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

      <Container className="pb-14 space-y-16">

        {/* Elevated FAQ Section */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/90 dark:border-white/10 bg-gradient-to-br from-white via-slate-50/60 to-white dark:from-[#0b1320] dark:via-[#0e1726] dark:to-[#070d18] p-6 sm:p-9 lg:p-10 shadow-2xl shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-xl space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div className="lg:w-1/3 space-y-4">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="h-px w-6 bg-accent" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-accent uppercase">
                  FAQ &amp; Knowledge Base
                </p>
                <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Frequently Asked Questions in {state.name}
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Key answers regarding ID card printing, batch timelines, accessories, and delivery across {state.name}.
              </p>

              <div className="rounded-2xl border border-accent/20 bg-accent-soft/30 dark:bg-accent/10 p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider">
                  <MessageSquare className="h-4 w-4" />
                  <span>Have Specific Questions?</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Need help with volume pricing or RFID frequencies for {state.name} institutions? Our production engineers are ready to assist.
                </p>
                <div className="pt-1 flex flex-col gap-2">
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2 text-xs font-bold text-white hover:bg-accent-hover transition shadow-xs"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Talk to Production Team</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <FaqList faqs={faqs} />
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-8">
          <CtaBand
            title={`Need ID cards for your organization in ${state.name}?`}
            body="Tell IDGen your organization name, target card quantity, and required accessories for an immediate proposal."
            links={[
              { label: `Request a ${state.name} Quote`, href: "/request-a-quote/", primary: true },
              { label: "Contact IDGen Engineering Desk", href: "/contact-us/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
