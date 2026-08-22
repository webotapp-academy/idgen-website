"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Layers,
  Zap,
  MapPin,
  Clock,
  Radio
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HeroCarousel } from "@/components/home/HeroCarousel";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground pt-6 pb-12 lg:pt-10 lg:pb-16 transition-colors duration-300">
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-24 right-0 h-[550px] w-[550px] rounded-full bg-accent/15 blur-[160px] dark:bg-accent/20" />
      <div className="pointer-events-none absolute top-1/3 -left-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px] dark:bg-cyan-500/15" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px] dark:bg-blue-600/15" />

      {/* Background Dot Matrix Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "28px 28px"
        }}
      />

      <Container className="relative z-10">

        {/* Top 2-Column Hero Grid: Left Content + Right Showcase Image */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-center">

          {/* Left Column: Headline, Description, Features & CTA Buttons */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6">

            {/* Live Operational Status Eyebrow Badge */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 dark:bg-accent/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md transition-all hover:border-accent/40">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-bold text-foreground">Direct Identity Manufacturer</span>
                <span className="text-muted/60">•</span>
                <span className="font-semibold text-accent dark:text-cyan-400">Guwahati Hub</span>
                <span className="text-muted/60 hidden sm:inline">•</span>
                <span className="text-muted hidden sm:inline text-[11px]">Serving All 8 Northeast States</span>
              </div>
            </div>

            {/* Primary Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.5rem] font-black tracking-normal leading-[1.15] text-foreground">
                Identity Solutions{" "}
                <span className="bg-gradient-to-r from-accent via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Simplified
                </span>
              </h1>

              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-accent dark:text-cyan-400 leading-snug">
                Custom ID Cards, Printed Lanyards &amp; Complete Identification Solutions for Schools, Companies, Institutions &amp; Events
              </h2>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-muted leading-relaxed max-w-xl">
              IDGen is a Guwahati-based identity solutions company helping organizations across Assam and Northeast India create professional identification systems—from ID card printing and custom lanyards to RFID cards, event badges, ID card accessories, and digital data collection through IDGen Studio.
            </p>

            {/* Dual Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="group flex items-start gap-3 rounded-2xl border border-surface-border/80 bg-surface/70 dark:bg-surface/50 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-surface hover:shadow-md hover:shadow-accent/5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0 font-bold transition-transform group-hover:scale-110">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-foreground">Complete ID Solutions</h3>
                  <p className="text-[11px] sm:text-xs text-muted leading-tight mt-0.5">Cards, lanyards, holders &amp; RFID sets</p>
                </div>
              </div>

              <div className="group flex items-start gap-3 rounded-2xl border border-surface-border/80 bg-surface/70 dark:bg-surface/50 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-surface hover:shadow-md hover:shadow-emerald-500/5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0 font-bold transition-transform group-hover:scale-110">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-foreground">Preview Before Printing</h3>
                  <p className="text-[11px] sm:text-xs text-muted leading-tight mt-0.5">Zero photo &amp; data error workflow</p>
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/request-a-quote/"
                className="group relative inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-blue-600 px-6 sm:px-7 py-3.5 text-sm font-extrabold text-white shadow-xl shadow-accent/25 transition-all duration-300 hover:shadow-accent/40 hover:-translate-y-0.5 hover:brightness-110"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services/"
                className="inline-flex items-center gap-2 rounded-2xl border border-surface-border bg-surface/80 dark:bg-surface/60 backdrop-blur-sm px-5 sm:px-6 py-3.5 text-sm font-bold text-foreground shadow-sm transition-all duration-300 hover:border-accent/40 hover:bg-surface hover:-translate-y-0.5"
              >
                <span>Explore Solutions</span>
              </Link>

              <a
                href="https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20would%20like%20to%20inquire%20about%20ID%20card%20and%20lanyard%20printing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 sm:px-5 py-3.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive ID Suite Carousel */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            <HeroCarousel />
          </div>

        </div>

        {/* Dedicated Separate Full-Width Section at Bottom of Hero Section (Spans Under Both Left Text & Right Image) */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-surface-border/60">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            <div className="flex items-center gap-3.5 rounded-2xl bg-surface/60 dark:bg-surface/40 border border-surface-border/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-surface">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent shrink-0 font-bold">
                <Zap className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-base sm:text-lg font-extrabold text-foreground tracking-tight">10,000+ IDs</p>
                <p className="text-xs font-medium text-muted">Daily Capacity*</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl bg-surface/60 dark:bg-surface/40 border border-surface-border/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-surface">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-500 shrink-0 font-bold">
                <Clock className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-base sm:text-lg font-extrabold text-foreground tracking-tight">72 Hours</p>
                <p className="text-xs font-medium text-muted">Express Dispatch</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl bg-surface/60 dark:bg-surface/40 border border-surface-border/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-surface">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-500 shrink-0 font-bold">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-base sm:text-lg font-extrabold text-foreground tracking-tight">Guwahati</p>
                <p className="text-xs font-medium text-muted">Direct Assam Hub</p>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-muted/70 italic mt-3 text-center sm:text-left">
            *Production capacity depends on product type, personalization, quantity and project requirements.
          </p>
        </div>

      </Container>
    </section>
  );
}
