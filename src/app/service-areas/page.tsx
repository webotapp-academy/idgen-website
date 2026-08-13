import Link from "next/link";
import { MapPin, Search, ArrowRight, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { NortheastNetworkMap } from "@/components/ui/NortheastNetworkMap";
import { states } from "@/data/locations";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "ID Card Printing & Identity Solutions Across Northeast India | IDGen",
  description:
    "IDGen provides factory-direct ID card printing and identity solutions across all 8 Northeast India states. Find service areas across Assam, Arunachal Pradesh, Meghalaya, Nagaland, Manipur, Mizoram, Tripura, and Sikkim.",
  path: "/service-areas/",
});

const networkMetrics = [
  { label: "Regional Hub", value: "Guwahati, Assam" },
  { label: "State Coverage", value: "All 8 NE States" },
  { label: "Dispatch SLA", value: "48–72h Regional" },
  { label: "Institutions Served", value: "500+ Campus Hubs" },
];

const faqs: Faq[] = [
  { q: "Where does IDGen provide ID card printing?", a: "IDGen is based in Guwahati, Assam and serves organizations across Assam and all 8 Northeast Indian states (Arunachal Pradesh, Meghalaya, Nagaland, Manipur, Mizoram, Tripura, and Sikkim)." },
  { q: "How are orders dispatched to other Northeast states?", a: "All orders are manufactured in our central Guwahati production cleanroom and dispatched via priority courier (Speed Post, BlueDart, DTDC) with door-step delivery in 24–48 hours across state capitals." },
  { q: "Can we order student ID cards from remote hill districts?", a: "Yes. Our digital data collection tool, IDGen Studio, allows schools and universities in any district to collect student photos and data online without physical paperwork." },
  { q: "Do we get free physical samples before ordering in bulk?", a: "Yes. We courier complimentary specimen sample kits containing PVC cards, custom lanyards, RFID credentials, and crystal holders to institutions across the Northeast." },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Regional Coverage"
        icon={MapPin}
        title="ID Card Printing & Identity Solutions Across Northeast India"
        lede="From our centralized automated manufacturing facility in Guwahati, IDGen supplies custom PVC ID cards, high-density satin lanyards, RFID credentials, and ultrasonic sealing across all 8 Northeast states."
        stats={networkMetrics}
        visual={<NortheastNetworkMap />}
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Areas", path: "/service-areas/" }]} />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-surface-border bg-surface p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <Truck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-bold text-foreground text-base">Direct Guwahati Dispatch</h3>
            <p className="mt-1.5 text-xs text-muted leading-relaxed">
              Air and overland express logistics connecting all 8 state capitals within 24 to 48 hours.
            </p>
          </div>

          <div className="rounded-3xl border border-surface-border bg-surface p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-bold text-foreground text-base">IDGen Studio Digital Portal</h3>
            <p className="mt-1.5 text-xs text-muted leading-relaxed">
              Zero geographical friction — collect student photos, crop biometrics, and approve proofs online.
            </p>
          </div>

          <div className="rounded-3xl border border-surface-border bg-surface p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-bold text-foreground text-base">Zero Intermediary Markup</h3>
            <p className="mt-1.5 text-xs text-muted leading-relaxed">
              Deal directly with the manufacturer for true bulk institutional rates and custom engineering.
            </p>
          </div>
        </div>

        {/* 8 State Coverage Grid */}
        <div className="mt-16">
          <SectionHead
            eyebrow="State Directories"
            title="Operational State Hubs Across Northeast India"
            lede="Select a state to explore local education hubs, enterprise service coverage, and priority city networks."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {states.map((st) => (
              <div
                key={st.slug}
                className="group relative flex flex-col justify-between rounded-3xl border border-surface-border bg-surface p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                      {st.cities.length} {st.cities.length === 1 ? "Major Hub" : "Major Hubs"}
                    </span>
                    <Link
                      href={`/service-areas/${st.slug}/`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-accent group-hover:underline"
                    >
                      <span>Explore State</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold text-foreground">
                    <Link href={`/service-areas/${st.slug}/`} className="hover:text-accent">
                      {st.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3">
                    {st.heroIntro}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-surface-border">
                    {st.cities.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/service-areas/${st.slug}/${c.slug}/`}
                        className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-foreground hover:bg-accent hover:text-white transition"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Identification Services Available Regionally */}
        <div className="mt-16">
          <SectionHead
            eyebrow="Capabilities"
            title="Identification Services Available Across All Service Areas"
            lede="Every product and finishing option is available for dispatch to any location in the Northeast."
          />
          <div className="mt-6 flex flex-wrap gap-2.5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                className="rounded-full border border-surface-border bg-surface px-5 py-2.5 text-xs font-semibold text-foreground transition hover:border-accent hover:text-accent hover:shadow-sm"
              >
                {s.name} →
              </Link>
            ))}
          </div>
        </div>

        {/* Centralized Hub Architecture Info */}
        <div className="mt-16 rounded-3xl border border-surface-border bg-surface p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <Search className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Centralized Production & Digital Operations</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                To maintain strict quality control, color calibration, and data security, all card printing, RFID encoding, and ultrasonic lanyard welding are performed in IDGen&apos;s centralized Guwahati cleanroom. Our regional service pages represent established institutional delivery routes and dedicated logistics pipelines.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
                <Link href="/idgen-studio/" className="text-accent hover:underline">
                  Learn about IDGen Studio Portal →
                </Link>
                <Link href="/pricing/" className="text-accent hover:underline">
                  View Transparent Pricing →
                </Link>
                <Link href="/why-idgen/" className="text-accent hover:underline">
                  Explore Quality Assurance Pipeline →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions on Regional Service" />
          <div className="mt-6 max-w-3xl">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Start your institution's ID card project anywhere in Northeast India"
            body="Whether your campus is in Guwahati, Shillong, Itanagar, Kohima, Imphal, Aizawl, Agartala, or Gangtok, submit your requirements for an immediate factory proposal."
            links={[
              { label: "Request a Formal Quote", href: "/request-a-quote/", primary: true },
              { label: "Contact Engineering Desk", href: "/contact-us/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
