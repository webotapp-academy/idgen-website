"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Zap, 
  Radio, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  GraduationCap, 
  Hospital, 
  Ticket,
  ChevronRight,
  PhoneCall
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/data/site";

interface CardPreset {
  id: string;
  name: string;
  category: string;
  icon: typeof GraduationCap;
  theme: {
    bgGradient: string;
    accentColor: string;
    badgeBg: string;
    borderGlow: string;
  };
  sample: {
    org: string;
    subOrg: string;
    holderName: string;
    holderRole: string;
    holderId: string;
    validity: string;
    securityType: string;
    chipSpec: string;
    bloodGroup?: string;
  };
}

const CARD_PRESETS: CardPreset[] = [
  {
    id: "campus",
    name: "Campus Smart Card",
    category: "Universities & Schools",
    icon: GraduationCap,
    theme: {
      bgGradient: "from-[#0a2540] via-[#103b66] to-[#0c1f38]",
      accentColor: "#1b9fde",
      badgeBg: "bg-sky-500/20 text-sky-300 border-sky-400/30",
      borderGlow: "rgba(27, 159, 222, 0.4)",
    },
    sample: {
      org: "ASSAM CENTRAL UNIVERSITY",
      subOrg: "School of Engineering & Technology",
      holderName: "Ananya Sharma",
      holderRole: "B.Tech Computer Science",
      holderId: "ID: ACU-2026-CS842",
      validity: "VAL: 2026 - 2030",
      securityType: "Encrypted QR + 13.56 MHz RFID",
      chipSpec: "Mifare Classic 1K Contactless",
      bloodGroup: "O+",
    },
  },
  {
    id: "corporate",
    name: "Corporate RFID Access",
    category: "Enterprises & Tech Hubs",
    icon: Building2,
    theme: {
      bgGradient: "from-[#0f172a] via-[#1e293b] to-[#090d16]",
      accentColor: "#38bdf8",
      badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
      borderGlow: "rgba(56, 189, 248, 0.4)",
    },
    sample: {
      org: "NEXUS FINTECH CORP",
      subOrg: "Guwahati Regional Headquarters",
      holderName: "Rahul Borgohain",
      holderRole: "Senior Cloud Architect",
      holderId: "EMP: NFC-882109",
      validity: "ACCESS: Level 4 • Executive",
      securityType: "Dual-Frequency RFID + NFC",
      chipSpec: "DESFire EV2 4K + 125kHz EM4100",
      bloodGroup: "B+",
    },
  },
  {
    id: "healthcare",
    name: "Hospital & Medical ID",
    category: "Healthcare & Labs",
    icon: Hospital,
    theme: {
      bgGradient: "from-[#06242e] via-[#0d3f50] to-[#04161c]",
      accentColor: "#2dd4bf",
      badgeBg: "bg-teal-500/20 text-teal-300 border-teal-400/30",
      borderGlow: "rgba(45, 212, 191, 0.4)",
    },
    sample: {
      org: "APOLLO REGIONAL HEALTHCARE",
      subOrg: "Department of Critical Care",
      holderName: "Dr. Priyam Deka",
      holderRole: "Senior Consultant Surgeon",
      holderId: "REG: MED-NE-4512",
      validity: "SECURITY: All Zones Authorized",
      securityType: "Antimicrobial Coating + RFID",
      chipSpec: "13.56 MHz ISO 14443A Smart Chip",
      bloodGroup: "A+",
    },
  },
  {
    id: "events",
    name: "VIP Conference & Expo",
    category: "Summits & Venues",
    icon: Ticket,
    theme: {
      bgGradient: "from-[#201335] via-[#371b58] to-[#120824]",
      accentColor: "#c084fc",
      badgeBg: "bg-purple-500/20 text-purple-300 border-purple-400/30",
      borderGlow: "rgba(192, 132, 252, 0.4)",
    },
    sample: {
      org: "NORTHEAST GLOBAL SUMMIT",
      subOrg: "Advantage Assam 2026",
      holderName: "David K. Zoram",
      holderRole: "Keynote Speaker & Delegate",
      holderId: "PASS: NGS-VIP-0092",
      validity: "ALL ACCESS • VIP LOUNGE",
      securityType: "Holographic Foil + Dynamic QR",
      chipSpec: "NTAG213 High-Speed NFC Tap",
      bloodGroup: "AB+",
    },
  },
];

export function HeroSection() {
  const [selectedPreset, setSelectedPreset] = useState<CardPreset>(CARD_PRESETS[0]);

  return (
    <section className="relative overflow-hidden border-b border-surface-border bg-[#071626] text-white">
      {/* Background Decorative Grid & Glowing Orbs */}
      <div className="hero-grid-pattern absolute inset-0 opacity-40" />
      
      {/* Dynamic Ambient Glowing Blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/2 -right-20 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

      <Container className="relative z-10 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        {/* Top Facility Live Tag */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            <span className="text-white/90">Direct Factory Production Hub</span>
            <span className="text-white/40">•</span>
            <span className="text-accent font-medium">Guwahati, Northeast India</span>
          </div>

          <div className="hidden items-center gap-1.5 text-xs text-white/60 sm:inline-flex">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            <span>Identification Experience Since {SITE.foundedYear}</span>
          </div>
        </div>

        {/* Main Grid: Left Column Copy & CTAs | Right Column Interactive 3D Card Showcase */}
        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column (7 cols on lg) */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.12] lg:text-[3.25rem]">
              Precision-Engineered{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
                ID Cards, RFID Credentials
              </span>{" "}
              & Custom Lanyards
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              IDGen is a {SITE.hqCity}-based identity solutions company helping schools, universities,
              hospitals and corporate enterprises across Northeast India create professional identification
              systems — from ID card printing and custom lanyards to RFID cards, event badges and digital
              data collection through IDGen Studio.
            </p>

            {/* Quick Spec Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 backdrop-blur-sm">
                <Radio className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-xs font-medium text-slate-200">RFID Matched to Your Reader</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 backdrop-blur-sm">
                <Layers className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-xs font-medium text-slate-200">{SITE.dailyCapacity}</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 backdrop-blur-sm">
                <Zap className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-xs font-medium text-slate-200">{SITE.dispatchTime}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-a-quote/"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(27,159,222,0.45)] transition duration-200 hover:bg-accent-hover hover:text-white hover:shadow-[0_0_40px_rgba(27,159,222,0.7)]"
              >
                <span>Request an Instant Bulk Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/idgen-studio/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-accent hover:bg-white/10 hover:text-accent"
              >
                <Sparkles className="h-4 w-4 text-accent" />
                <span>Launch iDGen Studio</span>
              </Link>
            </div>

            {/* Micro Trust & Phone Support */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Free Digital Sample Proof</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Zero Minimum for Reorders</span>
              </div>
              <Link 
                href="/contact-us/" 
                className="flex items-center gap-1.5 text-accent hover:underline"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Talk to Production Engineer</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Card Showcase (5 cols on lg) */}
          <div className="lg:col-span-5">
            {/* Interactive Preset Selector Tabs */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">
                Interactive Specimen Preview
              </span>
              <span className="text-[11px] text-slate-400">Click to switch archetype</span>
            </div>

            {/* Archetype Buttons */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
              {CARD_PRESETS.map((preset) => {
                const Icon = preset.icon;
                const isSelected = selectedPreset.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setSelectedPreset(preset)}
                    className={`flex items-center gap-2 rounded-xl border p-2.5 text-left text-xs transition duration-200 ${
                      isSelected
                        ? "border-accent bg-accent/15 text-white shadow-[0_0_15px_rgba(27,159,222,0.2)]"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-accent" : "text-slate-400"}`} />
                    <div className="min-w-0">
                      <p className="truncate font-semibold">{preset.name}</p>
                      <p className="truncate text-[10px] text-slate-400">{preset.category}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* The 3D ID Card Mockup Box */}
            <div className="relative mt-5">
              {/* Floating Specification Chip: Top Right */}
              <div className="animate-float-slow absolute -top-4 -right-3 z-20 hidden rounded-xl border border-white/20 bg-slate-900/90 px-3 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{selectedPreset.sample.chipSpec}</span>
              </div>

              {/* Floating Feature Chip: Bottom Left */}
              <div className="animate-float-delayed absolute -bottom-4 -left-3 z-20 hidden rounded-xl border border-white/20 bg-slate-900/90 px-3 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>Preview Before Printing</span>
              </div>

              {/* Physical Lanyard Strap Representation */}
              <div className="mx-auto mb-[-8px] flex w-24 flex-col items-center">
                <div className="h-5 w-12 rounded-t-sm bg-gradient-to-r from-sky-600 via-blue-500 to-sky-600 shadow-md">
                  <div className="flex h-full items-center justify-center text-[7px] font-black tracking-widest text-white/90 uppercase">
                    iDGen Satin
                  </div>
                </div>
                <div className="h-3 w-4 rounded-b-md bg-gradient-to-b from-slate-400 to-slate-200 shadow-inner" />
                <div className="h-2 w-6 rounded-full bg-slate-800 border border-white/30" />
              </div>

              {/* Main Card Component */}
              <div
                className={`relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br ${selectedPreset.theme.bgGradient} p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300`}
                style={{
                  boxShadow: `0 10px 40px -10px ${selectedPreset.theme.borderGlow}`,
                }}
              >
                {/* Holographic Sheen Overlay */}
                <div className="hologram-effect pointer-events-none absolute inset-0 opacity-25" />

                {/* Card Header */}
                <div className="relative z-10 flex items-start justify-between gap-3 border-b border-white/15 pb-3">
                  <div>
                    <span className="text-[10px] font-black tracking-wider text-accent uppercase">
                      {selectedPreset.sample.org}
                    </span>
                    <p className="text-[11px] font-medium text-slate-300">
                      {selectedPreset.sample.subOrg}
                    </p>
                  </div>
                  {/* Smart RFID Chip Indicator */}
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 rounded border border-amber-400/40 bg-gradient-to-tr from-amber-600/30 to-amber-300/30 px-1.5 py-0.5 text-[9px] font-bold text-amber-200">
                      <div className="h-2 w-2 rounded-sm bg-amber-400/80" />
                      <span>RFID CHIP</span>
                    </div>
                    <span className="mt-0.5 text-[8px] text-slate-400 tracking-wider">SECURE ISO</span>
                  </div>
                </div>

                {/* Card Body: Photo Badge + Holder Credentials */}
                <div className="relative z-10 mt-4 flex gap-4">
                  {/* Photo Frame with Security Watermark */}
                  <div className="relative flex h-24 w-20 shrink-0 flex-col items-center justify-center overflow-hidden rounded-lg border border-white/25 bg-slate-800/80 shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
                    {/* Stylized Avatar Silhouette */}
                    <div className="h-10 w-10 rounded-full border border-white/30 bg-slate-700/80 flex items-center justify-center">
                      <span className="font-bold text-xs text-white/90">
                        {selectedPreset.sample.holderName.charAt(0)}
                      </span>
                    </div>
                    <span className="mt-1 text-[8px] font-semibold text-white/60 tracking-wider">PHOTO ID</span>
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-accent" />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between min-w-0">
                    <div>
                      <h4 className="text-base font-bold text-white truncate">
                        {selectedPreset.sample.holderName}
                      </h4>
                      <p className="text-xs font-semibold text-accent">
                        {selectedPreset.sample.holderRole}
                      </p>
                      <p className="mt-1 text-[11px] font-mono text-slate-300">
                        {selectedPreset.sample.holderId}
                      </p>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-200">
                        {selectedPreset.sample.validity}
                      </span>
                      {selectedPreset.sample.bloodGroup && (
                        <span className="rounded bg-rose-500/20 px-1.5 py-0.5 text-[10px] font-bold text-rose-300 border border-rose-500/30">
                          BG: {selectedPreset.sample.bloodGroup}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Barcode + Security Hologram Stamp */}
                <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/15 pt-3">
                  {/* Simulated Security Barcode */}
                  <div className="flex items-center gap-1">
                    <div className="h-6 w-28 bg-[repeating-linear-gradient(90deg,#fff,#fff_2px,transparent_2px,transparent_4px)] opacity-70" />
                  </div>

                  {/* Hologram Badge Stamp */}
                  <div className="flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-950/60 px-2.5 py-1 text-[9px] font-bold text-cyan-200 shadow-sm backdrop-blur-sm">
                    <Sparkles className="h-3 w-3 text-cyan-300" />
                    <span>GENUINE IDGEN SECURE</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Link */}
              <div className="mt-3 flex items-center justify-between px-1 text-xs text-slate-400">
                <span>Direct PVC Printing & RFID Embedding</span>
                <Link
                  href="/why-idgen/"
                  className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                >
                  <span>See Manufacturing Specs</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics / Social Proof Glass Banner */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">{SITE.foundedYear}</p>
            <p className="mt-1 text-xs font-semibold text-accent uppercase tracking-wider">Experience Since</p>
            <p className="mt-0.5 text-[11px] text-slate-400">Identification-product supply</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">{SITE.regionalFocus.length} States</p>
            <p className="mt-1 text-xs font-semibold text-accent uppercase tracking-wider">Northeast Coverage</p>
            <p className="mt-0.5 text-[11px] text-slate-400">Direct regional dispatch</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">10,000+</p>
            <p className="mt-1 text-xs font-semibold text-accent uppercase tracking-wider">IDs / Day Capacity*</p>
            <p className="mt-0.5 text-[11px] text-slate-400">Varies by product & project</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">72h</p>
            <p className="mt-1 text-xs font-semibold text-accent uppercase tracking-wider">Dispatch Commitment</p>
            <p className="mt-0.5 text-[11px] text-slate-400">After approval & payment</p>
          </div>
        </div>
        <p className="mt-3 text-center text-[11px] text-slate-500 sm:text-right">
          *{SITE.capacityFootnote}
        </p>
      </Container>
    </section>
  );
}
