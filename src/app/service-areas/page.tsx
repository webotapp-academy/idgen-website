import Link from "next/link";
import { MapPin, Search } from "lucide-react";
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
    "IDGen provides ID card printing and identity solutions across Assam and Northeast India. Find IDGen service areas by state and city, including Guwahati and other regional markets.",
  path: "/service-areas/",
});

const plannedStates = [
  { name: "Arunachal Pradesh", note: "Potential city pages developed according to actual customer demand and service coverage." },
  { name: "Nagaland", note: "Priority cities: Kohima, Dimapur." },
  { name: "Manipur", note: "Primary city opportunity: Imphal." },
  { name: "Mizoram", note: "Primary city opportunity: Aizawl." },
  { name: "Tripura", note: "Primary city opportunity: Agartala." },
  { name: "Sikkim", note: "Primary city opportunity: Gangtok." },
];

const faqs: Faq[] = [
  { q: "Where does IDGen provide ID card printing?", a: "IDGen is based in Guwahati, Assam and serves organizations across Assam and the wider Northeast India market." },
  { q: "Does IDGen serve cities outside Guwahati?", a: "Yes. IDGen's service strategy covers cities and locations across Assam and the wider Northeast India market." },
  { q: "Does IDGen provide ID card printing in Assam?", a: "Yes. IDGen serves organizations across Assam, with Guwahati as its base." },
  { q: "Does IDGen serve Northeast India?", a: "Yes. Northeast India is the broader regional service market for IDGen." },
  { q: "Can I order from a city that does not have a dedicated IDGen page?", a: "Yes. A dedicated city page is not required to request service. Contact IDGen with your location and requirement." },
  { q: "Does every city have a separate IDGen office?", a: "No. A city appearing in the service-area architecture should not automatically be interpreted as an IDGen physical office location. The website says \"serving,\" \"providing services in,\" or \"service area\" rather than implying a physical branch where none exists." },
  { q: "Where is IDGen based?", a: "IDGen is based in Guwahati, Assam, India." },
  { q: "Can IDGen handle bulk orders from Northeast India?", a: "Yes. IDGen supports organizational and high-volume identification requirements, with actual production capability depending on the product and project specifications." },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        icon={MapPin}
        title="ID Card Printing & Identity Solutions Across Northeast India"
        lede="IDGen is based in Guwahati, Assam and serves organizations across Assam and the wider Northeast India market — schools, colleges, universities, companies, hospitals, institutions, government organizations, NGOs, events and associations."
        visual={<NortheastNetworkMap />}
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Areas", path: "/service-areas/" }]} />

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            IDGen&apos;s identification-product experience dates back to 2014, and the business has supplied
            identification products to customers and organizations across the Northeast India market. Our
            location architecture is organized so customers can find information at three levels:
          </p>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-muted">
            <li><strong className="text-foreground">Northeast India</strong> — Regional service coverage.</li>
            <li><strong className="text-foreground">State</strong> — State-specific identification requirements and service information.</li>
            <li><strong className="text-foreground">City</strong> — Local ID card printing and identification requirements.</li>
          </ol>
          <p className="text-sm text-muted">
            Example: Northeast India → Assam → Guwahati / Northeast India → Meghalaya → Shillong. This
            structure allows each local page to contain genuinely relevant information instead of creating
            hundreds of nearly identical pages.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request a Quote
          </Link>
        </div>

        {/* Built-out states */}
        <div className="mt-16">
          <SectionHead eyebrow="Our Service Network" title="Find IDGen near you" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {states.map((st) => (
              <div key={st.slug} className="rounded-2xl border border-surface-border bg-surface p-6">
                <h3 className="font-bold text-foreground">
                  <Link href={`/service-areas/${st.slug}/`} className="hover:text-accent">
                    {st.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{st.heroIntro}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {st.cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/service-areas/${st.slug}/${c.slug}/`}
                      className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground hover:text-accent"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Planned states */}
        <div className="mt-10">
          <p className="text-xs font-bold tracking-widest text-muted uppercase">Other Northeast India States — Coming Soon</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {plannedStates.map((s) => (
              <div key={s.name} className="rounded-xl border border-dashed border-surface-border p-4">
                <h4 className="text-sm font-semibold text-foreground">{s.name}</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">{s.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What IDGen provides */}
        <div className="mt-16">
          <SectionHead eyebrow="Across Every Service Area" title="What IDGen provides" />
          <div className="mt-6 flex flex-wrap gap-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                className="rounded-full border border-surface-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Architecture note */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <Search className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h2 className="text-lg font-bold text-foreground">Local service. Centralized production support.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                Location pages explain where IDGen serves. Service pages explain what IDGen provides.{" "}
                <Link href="/idgen-studio/" className="font-semibold text-accent hover:underline">IDGen Studio</Link>{" "}
                explains the digital workflow. <Link href="/pricing/" className="font-semibold text-accent hover:underline">Pricing</Link>{" "}
                explains cost. This separation keeps the website useful instead of repeating the same product
                information across dozens of location pages.
              </p>
            </div>
          </div>
        </div>

        {/* Can't find */}
        <div className="mt-16 rounded-2xl border border-dashed border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Can&apos;t find your city?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            IDGen&apos;s service network is not limited to the cities listed above. If your organization is
            located elsewhere in Assam or Northeast India, contact us with your city, state, organization type,
            required products, approximate quantity and delivery requirement — we can evaluate the requirement
            and provide the appropriate service information.
          </p>
          <Link href="/request-a-quote/" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
            Request a Quote →
          </Link>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6 max-w-3xl">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need ID cards in your city?"
            body="Whether your organization is in Guwahati, Jorhat, Dibrugarh, Silchar, Shillong or another Northeast Indian location, start with your requirement."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Contact IDGen", href: "/contact-us/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
