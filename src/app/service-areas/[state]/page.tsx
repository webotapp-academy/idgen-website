import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { states, getState } from "@/data/locations";
import { services } from "@/data/services";
import { SITE, SITE_URL } from "@/data/site";
import type { Faq } from "@/data/types";

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) return {};
  const url = `${SITE_URL}/service-areas/${state.slug}/`;
  return {
    title: state.metaTitle,
    description: state.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: state.metaTitle, description: state.metaDescription, url },
    ...(state.indexed === false ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) notFound();

  const faqs: Faq[] = [
    { q: `Does IDGen provide ID card printing in ${state.name}?`, a: `Yes. IDGen provides customized and bulk ID card printing and identity solutions across ${state.name}.` },
    { q: "Where is IDGen based?", a: `IDGen is based in ${SITE.hqCity}, ${SITE.hqState}, India.` },
    { q: `Which ${state.name} cities does IDGen serve?`, a: `Priority markets include ${state.cities.map((c) => c.name).join(", ")}. IDGen can also evaluate requirements from other locations in ${state.name} on request.` },
    { q: "Can schools order student ID cards?", a: "Yes. Schools, colleges and universities can request customized student ID cards." },
    { q: "Can companies order employee ID cards?", a: "Yes. Companies, offices, hospitals and institutions can request customized employee and staff ID cards." },
    { q: "Does IDGen provide bulk ID card printing?", a: "Yes, subject to product and project specifications." },
    { q: "Can organizations collect student or employee information online?", a: "Yes, via IDGen Studio for suitable projects." },
    { q: "Is customer identification data handled confidentially?", a: "Yes. IDGen treats customer-provided identification information as confidential project information and uses it for the agreed identification-related purpose." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Service Area"
        icon={MapPin}
        title={`ID Card Printing & Identity Solutions in ${state.name}`}
        lede={state.heroIntro}
        stats={[
          { label: "Based In", value: `${SITE.hqCity}, ${SITE.hqState}` },
          { label: "Experience", value: `Since ${SITE.foundedYear}` },
          { label: "Digital Workflow", value: "IDGen Studio" },
        ]}
      />
      <Container className="py-14">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas/" },
            { name: state.name, path: `/service-areas/${state.slug}/` },
          ]}
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request a {state.name} Quote
          </Link>
          <Link href="/id-card-printing/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            Explore ID Card Printing
          </Link>
        </div>

        {/* Cities */}
        <div className="mt-16">
          <SectionHead
            eyebrow="Major & Priority Markets"
            title={`${state.name} service network`}
            lede="These locations represent priority service markets rather than a claim that IDGen maintains a physical office or branch in every location."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {state.cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${state.slug}/${c.slug}/`}
                className="rounded-2xl border border-surface-border bg-surface p-5 transition hover:border-accent hover:shadow-sm"
              >
                <h3 className="font-semibold text-foreground">{c.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.heroIntro}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Organizations we serve — honest placeholder */}
        <div className="mt-16 rounded-2xl border border-dashed border-surface-border bg-surface p-6">
          <h2 className="text-lg font-bold text-foreground">Organizations we serve across {state.name}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Real customer logos, organization names and project photographs will be added here once customer
            permission is confirmed for {state.name} projects — we don&apos;t display placeholder evidence as
            if it were real.
          </p>
        </div>

        {/* Complete identification products */}
        <div className="mt-16">
          <SectionHead eyebrow="Configurations" title="Complete identification products" />
          <div className="mt-6 flex flex-wrap gap-3">
            <FlowChain steps={["Card Only", "Card + Holder", "Card + Holder + Hook + Lanyard"]} />
          </div>
          <p className="mt-3 text-sm text-muted">
            A complete wearable setup can also include ultrasonic sealing, or an RFID card with the required
            identification accessories. See{" "}
            <Link href="/id-card-holders/" className="font-semibold text-accent hover:underline">ID Card Holders</Link>,{" "}
            <Link href="/id-card-hooks/" className="font-semibold text-accent hover:underline">ID Card Hooks</Link> and{" "}
            <Link href="/ultrasonic-sealing/" className="font-semibold text-accent hover:underline">Ultrasonic Sealing</Link>.
          </p>
        </div>

        {/* What we provide */}
        <div className="mt-16">
          <SectionHead eyebrow="Services" title={`What IDGen provides in ${state.name}`} />
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

        {/* Why choose — short */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Why {state.name} organizations choose IDGen</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Experience since {SITE.foundedYear}, {SITE.hqCity}-based, regional reach, organizational focus, a
            complete identification ecosystem, and a digital workflow through IDGen Studio. The full story is
            on{" "}
            <Link href="/why-idgen/" className="font-semibold text-accent hover:underline">Why IDGen</Link>.
          </p>
        </div>

        {/* Data confidentiality */}
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          ID card projects in {state.name} can involve personal information such as names, photographs, ID
          numbers, departments, designations, classes, courses and membership information. IDGen treats
          customer-provided identification information as confidential project information and uses it for
          the agreed identification-related purpose.
        </p>

        {/* How to start */}
        <div className="mt-16">
          <SectionHead eyebrow="Process" title={`How to start a ${state.name} ID card project`} />
          <div className="mt-6">
            <FlowChain steps={["Requirement", "Specification", "Data", "Review", "Approval", "Production", "Quality Check", "Dispatch"]} />
          </div>
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
            title={`Ready to order identification products in ${state.name}?`}
            body="Tell IDGen your organization, product, quantity and location."
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
