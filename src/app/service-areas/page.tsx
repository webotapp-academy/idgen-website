// A10 SEO fix: Create /service-areas/ hub page (was returning 404)
// This page links to all 8 state hubs so visitors and crawlers can find them from the nav
export const dynamic = "force-dynamic";
export const revalidate = 0;

import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema-org";
import { getAllStates } from "@/lib/dynamic-locations";
import { SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "ID Card Printing Service Areas | Northeast India | IDGen" },
  description:
    "IDGen provides professional ID card printing, custom lanyards, RFID cards and identity solutions across all 8 states of Northeast India — Assam, Arunachal Pradesh, Meghalaya, Nagaland, Manipur, Mizoram, Tripura and Sikkim.",
  alternates: { canonical: `${SITE_URL}/service-areas/` },
  openGraph: {
    title: "ID Card Printing Service Areas | Northeast India | IDGen",
    description:
      "IDGen serves all 8 Northeast India states with factory-direct ID card printing dispatched from Guwahati, Assam.",
    url: `${SITE_URL}/service-areas/`,
  },
};

const STATE_INTROS: Record<string, string> = {
  assam: "Assam is IDGen's home state. Our production facility is based in Guwahati, providing the fastest local turnaround and direct pickup options for organizations across the state.",
  "arunachal-pradesh": "IDGen serves educational institutions, government offices, and enterprises in Arunachal Pradesh with factory-direct ID card printing dispatched from Guwahati.",
  meghalaya: "From Shillong to Tura and Jowai, IDGen delivers professional ID card solutions to organizations across Meghalaya.",
  nagaland: "IDGen provides ID card printing and custom lanyard services to organizations in Kohima, Dimapur, Mokokchung and across Nagaland.",
  manipur: "IDGen serves Imphal and organizations across Manipur with bulk ID card printing, RFID credentials, and custom lanyards.",
  mizoram: "From Aizawl, IDGen delivers professional identity solutions to institutions and enterprises across Mizoram.",
  tripura: "IDGen serves Agartala, Dharmanagar, Udaipur and organizations across Tripura with factory-direct identity products.",
  sikkim: "IDGen provides ID card printing and identity solutions to schools, colleges, and government bodies across Sikkim, including Gangtok.",
};

export default function ServiceAreasPage() {
  const states = getAllStates().filter((s) => s.indexed !== false);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-10 pb-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.10),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.18),rgba(7,13,24,0))] pointer-events-none" />
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Service Areas", path: "/service-areas/" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Northeast India Coverage</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              ID Card Printing{" "}
              <span className="text-accent">Service Areas</span>
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
              IDGen manufactures and dispatches professional identity products — ID cards, lanyards, RFID credentials and accessories — from our production facility in Guwahati, Assam, serving organizations across all 8 states of Northeast India.
            </p>
          </div>
        </Container>
      </section>

      {/* States Grid */}
      <section className="py-12 bg-slate-50/50 dark:bg-[#0a1020]">
        <Container>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-foreground">All Service Areas</h2>
            <p className="text-sm text-muted mt-1">Select a state to view cities and detailed service information.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/service-areas/${state.slug}/`}
                className="group flex flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1726] p-5 shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 dark:bg-accent/20">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-1">{state.name}</h3>
                <p className="text-xs text-muted leading-relaxed flex-1">
                  {STATE_INTROS[state.slug] ||
                    `IDGen serves organizations across ${state.name} with factory-direct identity products dispatched from Guwahati.`}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/5">
                  <span className="text-xs font-medium text-accent flex items-center gap-1">
                    View {state.cities.length} cities
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Production Hub Info */}
      <section className="py-10 bg-white dark:bg-[#070d18] border-t border-slate-200/50 dark:border-slate-800/50">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-foreground mb-3">How IDGen Serves Northeast India</h2>
            <p className="text-sm text-muted leading-relaxed">
              All IDGen identity products are manufactured at our centralized production facility in Guwahati, Assam. 
              Orders from any state are processed digitally through IDGen Studio, with physical pre-production sample proofs 
              available before full batch printing, and express doorstep dispatch to your location.
            </p>
            <Link
              href="/request-a-quote/"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
