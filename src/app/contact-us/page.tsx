import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Send,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Building2,
  Star,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema-org";
import { SITE } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { getDynamicContactUs } from "@/lib/dynamic-contact-us";
import { ContactDirectForm } from "@/components/forms/ContactDirectForm";

export async function generateMetadata() {
  const data = getDynamicContactUs();
  return pageMetadata({
    title:
      data.meta?.title ||
      "Contact IDGen | Guwahati Manufacturing Facility & Sales Desk",
    description:
      data.meta?.description ||
      "Get in touch with IDGen's Guwahati direct manufacturing facility for bulk ID card printing, custom lanyards, RFID credentials, and institutional specimen kits.",
    path: data.meta?.path || "/contact-us/",
  });
}

function renderSocialIcon(platform: string) {
  switch (platform) {
    case "gbp":
      return <Star className="h-3.5 w-3.5 fill-slate-950 text-slate-950" />;
    case "whatsapp":
      return <MessageSquare className="h-3.5 w-3.5 text-white" />;
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-white">
          <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.71-.14-2.85 0-4.79 1.74-4.79 4.93v2.57H7v4h3V22h4v-8.5z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-white">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return <ArrowRight className="h-3.5 w-3.5" />;
  }
}

function getPlatformBadgeClasses(platform: string) {
  switch (platform) {
    case "gbp":
      return "bg-amber-500 text-slate-950 hover:bg-amber-400";
    case "whatsapp":
      return "bg-[#128C7E] text-white hover:opacity-90";
    case "linkedin":
      return "bg-[#0A66C2] text-white hover:opacity-90";
    case "threads":
      return "bg-slate-900 border border-slate-700 text-white hover:bg-black";
    case "pinterest":
      return "bg-[#E60023] text-white hover:opacity-90";
    case "twitter":
      return "bg-black border border-slate-700 text-white hover:bg-slate-900";
    case "instagram":
      return "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white hover:opacity-90";
    case "facebook":
      return "bg-[#1877F2] text-white hover:opacity-90";
    case "youtube":
      return "bg-[#FF0000] text-white hover:opacity-90";
    default:
      return "bg-slate-800 text-white hover:bg-slate-700";
  }
}

export default function ContactUsPage() {
  const data = getDynamicContactUs();

  return (
    <>
      <JsonLd data={localBusinessSchema({ areaServed: SITE.regionalFocus })} />

      <PageHero
        eyebrow={data.hero?.eyebrow || "Direct Factory Communications"}
        icon={Send}
        title={data.hero?.title || "Get in Touch with IDGen Guwahati"}
        lede={
          data.hero?.lede ||
          "Connect with our identity engineering desk, request factory visit appointments, or order complimentary physical specimen kits for your institutional procurement committee."
        }
        stats={data.hero?.stats || []}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Factory Production Photo */}
              {data.hero?.visual?.primaryImage?.src && (
                <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                  <Image
                    src={data.hero.visual.primaryImage.src}
                    alt={data.hero.visual.primaryImage.alt || "IDGen Guwahati Production Facility"}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  {data.hero.visual.primaryImage.badge && (
                    <div className="absolute bottom-3 left-4">
                      <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                        {data.hero.visual.primaryImage.badge}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Overlapping Card Specimen */}
              {data.hero?.visual?.secondaryImage?.src && (
                <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                  <Image
                    src={data.hero.visual.secondaryImage.src}
                    alt={
                      data.hero.visual.secondaryImage.alt ||
                      "Complete ID Card and Lanyard Specimen Package"
                    }
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Machinery Accent */}
              {data.hero?.visual?.tertiaryImage?.src && (
                <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                  <Image
                    src={data.hero.visual.tertiaryImage.src}
                    alt={
                      data.hero.visual.tertiaryImage.alt ||
                      "Retransfer Machine Assembly"
                    }
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact-us/" },
          ]}
        />

        {/* Contact Channels Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Phone / Hotline */}
          {data.channels?.hotline && (
            <div className="group rounded-3xl border border-surface-border bg-surface p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-foreground text-lg">
                  {data.channels.hotline.title}
                </h3>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  {data.channels.hotline.desc}
                </p>
              </div>
              {data.channels.hotline.phone && (
                <a
                  href={`tel:${data.channels.hotline.phone.replace(/[^0-9+]/g, "")}`}
                  className="mt-4 inline-flex items-center gap-2 font-mono text-sm font-bold text-accent hover:underline"
                >
                  <span>{data.channels.hotline.phone}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          )}

          {/* WhatsApp Support Desk */}
          {data.channels?.whatsapp && (
            <div className="group rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-6 shadow-sm transition hover:border-emerald-500/40 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-foreground text-lg">
                  {data.channels.whatsapp.title}
                </h3>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  {data.channels.whatsapp.desc}
                </p>
              </div>
              {data.channels.whatsapp.number && (
                <a
                  href={`https://wa.me/${data.channels.whatsapp.number.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <span>{data.channels.whatsapp.ctaText || "Start WhatsApp Chat"}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          )}

          {/* Email Support */}
          {data.channels?.email && (
            <div className="group rounded-3xl border border-surface-border bg-surface p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-foreground text-lg">
                  {data.channels.email.title}
                </h3>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  {data.channels.email.desc}
                </p>
              </div>
              {data.channels.email.address && (
                <a
                  href={`mailto:${data.channels.email.address}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline break-all"
                >
                  <span>{data.channels.email.address}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              )}
            </div>
          )}

          {/* Official Social Channels & Reviews */}
          {data.channels?.socialAndReviews && (
            <div className="group rounded-3xl border border-amber-500/20 bg-amber-500/5 p-6 shadow-sm transition hover:border-amber-500/40 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-500">
                  <Star className="h-6 w-6 fill-amber-500 text-amber-500" />
                </div>
                <h3 className="mt-4 font-bold text-foreground text-lg">
                  {data.channels.socialAndReviews.title}
                </h3>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  {data.channels.socialAndReviews.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-500/20 flex flex-wrap gap-2 text-xs">
                {data.channels.socialAndReviews.links.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold transition text-xs ${getPlatformBadgeClasses(
                      item.platform
                    )}`}
                  >
                    {renderSocialIcon(item.platform)}
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Direct Factory Message Desk */}
        {data.formSection?.enabled && (
          <div className="mt-14 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-widest">
                  <Sparkles className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400" />
                  <span>{data.formSection.badge || "Direct Factory Desk"}</span>
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                  {data.formSection.title || "Send Direct Factory Message"}
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {data.formSection.description ||
                    "Share your requirements or questions below. Our team in Guwahati reviews messages and replies within 2 hours."}
                </p>
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span>{data.formSection.slaBadge || "Guwahati Response SLA: < 2 Hours"}</span>
                </div>
              </div>

              <div className="lg:col-span-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/60 p-6 sm:p-8">
                <ContactDirectForm
                  whatsappNumber={data.channels?.whatsapp?.number}
                />
              </div>
            </div>
          </div>
        )}

        {/* Factory Location & Visit Info */}
        {data.facility && (
          <div className="mt-12 rounded-3xl border border-surface-border bg-gradient-to-br from-surface to-background p-8 sm:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase">
                  <Building2 className="h-4 w-4" />
                  <span>{data.facility.eyebrow}</span>
                </span>
                <h2 className="text-2xl font-black text-foreground sm:text-3xl">
                  {data.facility.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed max-w-2xl">
                  {data.facility.description}
                </p>
                <div className="pt-2 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-foreground">
                  <div className="flex items-start gap-2 max-w-lg">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{data.facility.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>{data.facility.operatingHours}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                {data.facility.primaryCta && (
                  <Link
                    href={data.facility.primaryCta.href || "/request-a-quote/"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-slate-950 shadow transition hover:bg-accent-hover hover:text-white"
                  >
                    <span>{data.facility.primaryCta.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                {data.facility.secondaryCta && (
                  <Link
                    href={data.facility.secondaryCta.href || "/service-areas/assam/"}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
                  >
                    <span>{data.facility.secondaryCta.label}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Closing CTA */}
        {data.closingCta && (
          <div className="mt-16">
            <CtaBand
              title={data.closingCta.title}
              body={data.closingCta.body}
              links={data.closingCta.links}
            />
          </div>
        )}
      </Container>
    </>
  );
}
