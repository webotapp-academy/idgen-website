// A1 SEO fix: ISR - revalidate every hour for CDN caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

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
  Globe2,
  Truck,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
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
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-white">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66z" />
        </svg>
      );
    case "threads":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-white">
          <path d="M12.186 24C5.503 24 0 18.618 0 12.083 0 5.485 5.433 0 12.083 0 18.665 0 24 5.38 24 12.083c0 2.923-.974 5.627-2.792 7.749l-2.02-1.729c1.439-1.669 2.212-3.805 2.212-6.02 0-5.234-4.25-9.483-9.483-9.483-5.234 0-9.483 4.25-9.483 9.483 0 5.234 4.25 9.483 9.483 9.483 2.502 0 4.887-.974 6.697-2.735l1.828 1.83C17.766 22.868 15.068 24 12.186 24z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-white">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
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
      return "bg-[#0b6e63] text-white hover:opacity-90";
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
  const addressText = data.hero?.address || data.facility?.address || SITE.address;
  const landmarkText = data.hero?.landmark || data.facility?.landmark || "Landmark: Opposite Police Reserve, Assam Trunk Rd, Tokobari Satra, Guwahati, Assam 781001";
  const operatingHoursText = data.hero?.operatingHours || data.facility?.operatingHours || "Mon – Sat: 9:30 AM – 7:00 PM";
  const addressCardTitleText = data.hero?.addressCardTitle || "Guwahati Factory & Office Address:";
  const mapQuery = encodeURIComponent(`IDGen ${addressText}`);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <>
      <JsonLd data={localBusinessSchema({ areaServed: SITE.regionalFocus })} />

      {/* ─────────────────────────────────────────────────────────────
          1. UNIFIED MODERN HERO SECTION (Matching Why IDGen & Service Pages)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.2),rgba(7,13,24,0))]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #009fe3 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: Heading, Address Quick-Card, and Action CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#009fe3]/30 bg-gradient-to-r from-[#009fe3]/10 via-sky-50 to-white dark:from-cyan-950/60 dark:via-slate-900 dark:to-slate-800 px-4 py-1.5 shadow-2xs">
                  <span className="flex h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
                  <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                    {data.hero?.eyebrow || "Direct Factory Communications | Guwahati, Assam"}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.1]">
                  {data.hero?.title?.includes("IDGen") ? (
                    <>
                      {data.hero.title.split("IDGen")[0]}
                      <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                        IDGen{data.hero.title.split("IDGen")[1]}
                      </span>
                    </>
                  ) : (
                    data.hero?.title || "Get in Touch with IDGen Guwahati"
                  )}
                </h1>

                <div className="flex items-center gap-2.5 pt-0.5">
                  <span className="h-1 w-8 rounded-full bg-[#009fe3]" />
                  <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                    {data.hero?.subtitle || "Direct Manufacturing Facility & Identification Engineering Desk"}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
                  {data.hero?.lede ||
                    "Connect with our identity engineering desk, request factory visit appointments, or order complimentary physical specimen kits for your institutional procurement committee."}
                </p>
              </div>

              {/* Physical Factory Address Hero Highlight Card */}
              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 p-4 sm:p-5 space-y-3.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                    <Building2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                    <span>{addressCardTitleText}</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/50">
                    {operatingHoursText.startsWith("Open ") || operatingHoursText.startsWith("open ") ? operatingHoursText : `Open ${operatingHoursText}`}
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  <MapPin className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-950 dark:text-white">{addressText}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {landmarkText.startsWith("Landmark:") ? landmarkText : `Landmark: ${landmarkText}`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href={`tel:${(data.channels?.hotline?.phone || SITE.phone).replace(/[^0-9+]/g, "")}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#009fe3] to-[#0084be] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call {data.channels?.hotline?.phone || SITE.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${(data.channels?.whatsapp?.number || SITE.whatsapp).replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-50/70 dark:bg-emerald-950/50 px-6 py-3.5 text-sm font-bold text-emerald-700 dark:text-emerald-300 shadow-2xs transition-all hover:border-emerald-500 hover:bg-emerald-100/70 dark:hover:bg-emerald-900/60 hover:-translate-y-0.5"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{data.channels?.whatsapp?.ctaText || "WhatsApp Chat"}</span>
                </a>
                <Link
                  href={data.facility?.primaryCta?.href || "/request-a-quote/"}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>{data.facility?.primaryCta?.label || "Request a Quote"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Sleek Visual Showcase Card (Matching Other Pages) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl flex-1 min-h-[380px] sm:min-h-[420px] flex flex-col">
                <div className="relative flex-1 w-full overflow-hidden bg-slate-900 min-h-[300px] p-2 sm:p-4 flex items-center justify-center">
                  <Image
                    src={
                      data.hero?.visual?.primaryImage?.src ||
                      "/images/idgen-identity-products-production-guwahati.jpg"
                    }
                    alt={data.hero?.visual?.primaryImage?.alt || "IDGen Guwahati Production Facility"}
                    fill
                    className="object-contain object-center p-2 transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>

                {/* Sub-Card Trust Indicators */}
                <div className="p-3 bg-white dark:bg-slate-900 grid grid-cols-2 gap-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700/80">
                    <div className="h-7 w-7 rounded-lg bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">
                        {data.hero?.stats?.[0]?.label || "Guwahati Hub"}
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        {data.hero?.stats?.[0]?.value || "Assam Trunk Rd Facility"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700/80">
                    <div className="h-7 w-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Truck className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">
                        {data.hero?.stats?.[3]?.label || "Fast Dispatch"}
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        {data.hero?.stats?.[3]?.value || "All 8 NE States"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Symmetrical Bottom Summary Micro-Bar */}
              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 shadow-2xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      {data.formSection?.badge || "Direct Factory Desk SLA"}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      {data.formSection?.slaBadge || "< 2 Hours Review & Quotation"}
                    </p>
                  </div>
                </div>
                <a
                  href="#contact-form"
                  className="shrink-0 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  Send Message <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Trust Indicators Strip (4 Dynamic Columns) */}
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
            {(data.hero?.stats || [
              { label: "Factory Hub", value: "Guwahati, Assam" },
              { label: "Response SLA", value: "< 2 Hours" },
              { label: "WhatsApp Support", value: "Instant Desk" },
              { label: "Dispatch", value: "All 8 NE States" },
            ]).map((stat, idx) => {
              const Icon =
                idx === 0
                  ? Building2
                  : idx === 1
                  ? Clock
                  : idx === 2
                  ? MessageSquare
                  : Globe2;
              return (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 dark:border-cyan-800/50">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-950 dark:text-white">{stat.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{stat.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact-us/" },
          ]}
        />

        {/* ─────────────────────────────────────────────────────────────
            2. CONTACT CHANNELS GRID (4 CARDS)
        ───────────────────────────────────────────────────────────── */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Phone / Hotline */}
          {data.channels?.hotline && (
            <div className="group rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition hover:border-[#009fe3] hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400">
                  <Phone className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-bold text-slate-950 dark:text-white text-lg">
                  {data.channels.hotline.title}
                </h2>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {data.channels.hotline.desc}
                </p>
              </div>
              {data.channels.hotline.phone && (
                <a
                  href={`tel:${data.channels.hotline.phone.replace(/[^0-9+]/g, "")}`}
                  className="mt-4 inline-flex items-center gap-2 font-mono text-sm font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
                >
                  <span>{data.channels.hotline.phone}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          )}

          {/* WhatsApp Support Desk */}
          {data.channels?.whatsapp && (
            <div className="group rounded-3xl border border-emerald-500/25 bg-emerald-500/5 p-6 shadow-sm transition hover:border-emerald-500/50 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-bold text-slate-950 dark:text-white text-lg">
                  {data.channels.whatsapp.title}
                </h2>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
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
            <div className="group rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition hover:border-[#009fe3] hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400">
                  <Mail className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-bold text-slate-950 dark:text-white text-lg">
                  {data.channels.email.title}
                </h2>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {data.channels.email.desc}
                </p>
              </div>
              {data.channels.email.address && (
                <a
                  href={`mailto:${data.channels.email.address}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#009fe3] dark:text-cyan-400 hover:underline break-all"
                >
                  <span>{data.channels.email.address}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              )}
            </div>
          )}

          {/* Official Social Channels & Reviews */}
          {data.channels?.socialAndReviews && (
            <div className="group rounded-3xl border border-amber-500/25 bg-amber-500/5 p-6 shadow-sm transition hover:border-amber-500/50 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-500">
                  <Star className="h-6 w-6 fill-amber-500 text-amber-500" />
                </div>
                <h2 className="mt-4 font-bold text-slate-950 dark:text-white text-lg">
                  {data.channels.socialAndReviews.title}
                </h2>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
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

        {/* ─────────────────────────────────────────────────────────────
            4. DIRECT FACTORY MESSAGE DESK
        ───────────────────────────────────────────────────────────── */}
        {data.formSection?.enabled && (
          <div id="contact-form" className="mt-14 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-xl scroll-mt-24">
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
