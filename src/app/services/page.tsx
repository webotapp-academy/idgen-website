import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IdCard, ArrowRight, ShieldCheck, Sparkles, Layers, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { pageMetadata } from "@/lib/metadata";
import { getDynamicServices } from "@/lib/dynamic-services";

export async function generateMetadata(): Promise<Metadata> {
  const data = getDynamicServices();
  const base = pageMetadata({
    title: data.metadata?.metaTitle || "Identity Printing & Manufacturing Services | IDGen",
    description:
      data.metadata?.metaDescription ||
      "Explore IDGen's specialized identity services: PVC ID card printing, RFID/NFC credentials, custom satin lanyards, ultrasonic sealing, and cloud identity management.",
    path: "/services/",
  });

  return {
    ...base,
    keywords: data.metadata?.metaKeywords,
  };
}

export default function ServicesPage() {
  const data = getDynamicServices();
  const { hero, cardSection, lanyardSection, accessoriesTeaser, ctaBand, services } = data;

  const cardServices = (services || []).filter(
    (s) => s.category === "cards" && s.isActive !== false
  );
  const lanyardServices = (services || []).filter(
    (s) => (s.category === "lanyards" || s.category === "finishing") && s.isActive !== false
  );
  const otherServices = (services || []).filter(
    (s) => s.category !== "cards" && s.category !== "lanyards" && s.category !== "finishing" && s.isActive !== false
  );

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        icon={IdCard}
        title={hero.title}
        lede={hero.lede}
        stats={hero.stats}
        visual={
          <div className="relative h-[420px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Top Image */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src={hero.primaryImage || "/images/ID Card Full Set Samples/Sample 1.jpeg"}
                  alt="Complete ID Card and Satin Lanyard Kit by IDGen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                    Guwahati Factory
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src={hero.secondaryImage || "/images/Event Card/Events Card with 2 hook.png"}
                  alt="High-Visibility VIP Event Badge"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tertiary Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src={hero.accentImage || "/images/Lanyard with Hook Samples/Sample 12.jpg"}
                  alt="Dye-Sublimated Lanyard with Swivel Hook"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]} />

        {/* Section 1: ID Card Printing Solutions */}
        <div className="mt-8">
          <SectionHead
            eyebrow={cardSection.eyebrow}
            title={cardSection.title}
            lede={cardSection.lede}
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cardServices.map((service) => (
              <FeatureCard
                key={service.id || service.slug}
                title={service.title}
                body={service.shortDescription}
                href={service.path || `/${service.slug}/`}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                tag={service.tag}
                badge={service.badge}
              />
            ))}
          </div>
        </div>

        {/* Section 2: Lanyards & Finishing Solutions */}
        <div className="mt-20">
          <SectionHead
            eyebrow={lanyardSection.eyebrow}
            title={lanyardSection.title}
            lede={lanyardSection.lede}
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {lanyardServices.map((service) => (
              <FeatureCard
                key={service.id || service.slug}
                title={service.title}
                body={service.shortDescription}
                href={service.path || `/${service.slug}/`}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                tag={service.tag}
                badge={service.badge}
              />
            ))}
          </div>
        </div>

        {/* Section 2.5: Additional / Specialty Services (if added) */}
        {otherServices.length > 0 && (
          <div className="mt-20">
            <SectionHead
              eyebrow="Specialized Operations"
              title="Additional Identification Services"
              lede="Custom credentials and tailored identification capabilities manufactured to your exact requirements."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((service) => (
                <FeatureCard
                  key={service.id || service.slug}
                  title={service.title}
                  body={service.shortDescription}
                  href={service.path || `/${service.slug}/`}
                  imageSrc={service.imageSrc}
                  imageAlt={service.imageAlt}
                  tag={service.tag}
                  badge={service.badge}
                />
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Hardware Accessories Teaser */}
        <div className="mt-20 rounded-3xl border border-surface-border bg-gradient-to-br from-surface to-background p-8 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-accent uppercase mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{accessoriesTeaser.eyebrow}</span>
              </span>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
                {accessoriesTeaser.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted max-w-2xl">
                {accessoriesTeaser.lede}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href={accessoriesTeaser.primaryButtonLink}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-accent-hover hover:text-white"
              >
                <span>{accessoriesTeaser.primaryButtonText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={accessoriesTeaser.secondaryButtonLink}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                <span>{accessoriesTeaser.secondaryButtonText}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 4: Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title={ctaBand.title}
            body={ctaBand.body}
            links={[
              { label: ctaBand.primaryButtonText, href: ctaBand.primaryButtonLink, primary: true },
              { label: ctaBand.secondaryButtonText, href: ctaBand.secondaryButtonLink },
              { label: ctaBand.pricingButtonText, href: ctaBand.pricingButtonLink },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
