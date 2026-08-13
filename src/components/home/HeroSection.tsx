"use client";

import { useState } from "react";
import Image from "next/image";
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
  PhoneCall,
  Flame
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
      accentColor: "#0284c7",
      badgeBg: "bg-sky-500/20 text-sky-300 border-sky-400/30",
      borderGlow: "rgba(2, 132, 199, 0.4)",
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
  const [viewMode, setViewMode] = useState<"specimen" | "photo">("photo");

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0B1320] text-white">
      {/* Ambient Grid & Lighting Orbs */}
      <div className="hero-grid-pattern absolute inset-0 opacity-40" />
      
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-accent/25 blur-[140px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-blue-600/15 blur-[130px]" />

      <Container className="relative z-10 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        {/* Top Facility Live Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            </span>
            <span className="text-white/95">Direct Factory Production Line Active</span>
            <span className="text-white/40">•</span>
            <span className="text-cyan-300 font-medium">{SITE.hqCity}, Assam</span>
          </div>

          <div className="hidden items-center gap-2 text-xs text-slate-300 sm:inline-flex">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            <span>ISO Compliant Thermal Retransfer & Ultrasonic Sealing</span>
          </div>
        </div>

        {/* Main Grid: Left Column Copy & CTAs | Right Column Interactive 3D Card Showcase */}
        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-lg bg-accent/20 px-3 py-1 text-xs font-bold text-cyan-300 border border-accent/30 mb-4">
              <Flame className="h-3.5 w-3.5" />
              <span>Northeast India&apos;s Dedicated Identity Manufacturing Hub</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.12] lg:text-[3.35rem]">
              Precision-Engineered{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
                ID Cards, RFID Chips
              </span>{" "}
              & Custom Lanyards
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Empowering schools, universities, healthcare systems, and enterprises across Assam and Northeast India with end-to-end identification solutions — from high-resolution PVC ID cards and custom satin lanyards to contactless RFID cards, crystal holders, and cloud data workflows through IDGen Studio.
            </p>

            {/* Quick Spec Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm">
                <Radio className="h-4 w-4 shrink-0 text-cyan-400" />
                <span className="text-xs font-medium text-slate-200">13.56 MHz RFID / NFC</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm">
                <Layers className="h-4 w-4 shrink-0 text-cyan-400" />
                <span className="text-xs font-medium text-slate-200">{SITE.dailyCapacity}</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm">
                <Zap className="h-4 w-4 shrink-0 text-cyan-400" />
                <span className="text-xs font-medium text-slate-200">{SITE.dispatchTime} Dispatch</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-a-quote/"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_35px_rgba(2,132,199,0.5)] transition duration-200 hover:bg-accent-hover hover:text-white hover:shadow-[0_0_45px_rgba(2,132,199,0.8)]"
              >
                <span>Request Instant Bulk Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/idgen-studio/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-400 hover:bg-white/10 hover:text-cyan-300"
              >
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <span>Explore IDGen Studio</span>
              </Link>
            </div>

            {/* Micro Trust & Phone Support */}
            <div className="mt-7 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Zero Plate / Setup Charges</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Free Digital Sample Proof</span>
              </div>
              <Link 
                href="/contact-us/" 
                className="flex items-center gap-1.5 text-cyan-300 hover:underline"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Direct Production Support</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Card & Visual Showcase (5 cols on lg) */}
          <div className="lg:col-span-5">
            {/* View Mode Toggle Bar */}
            <div className="mb-4 flex items-center justify-between rounded-xl bg-white/5 p-1 border border-white/10">
              <button
                type="button"
                onClick={() => setViewMode("photo")}
                className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition ${viewMode === "photo" ? "bg-accent text-slate-950 shadow" : "text-slate-300 hover:text-white"}`}
              >
                3D Studio Render
              </button>
              <button
                type="button"
                onClick={() => setViewMode("specimen")}
                className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition ${viewMode === "specimen" ? "bg-accent text-slate-950 shadow" : "text-slate-300 hover:text-white"}`}
              >
                Interactive Specimen
              </button>
            </div>

            {viewMode === "photo" ? (
              /* High-Res Studio Render Display */
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src="/images/hero-cards-showcase.jpg"
                    alt="IDGen Premium ID Cards, Lanyards & RFID Specimen Showcase"
                    fill
                    priority
                    className="img-zoom object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040f1d] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Tech Pill */}
                  <div className="absolute top-4 left-4 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold text-cyan-300 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>30-Mil CR80 PVC + 20mm Satin</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white text-sm">Industrial Grade Wearable IDs</p>
                      <p className="text-slate-300 text-[11px]">Direct sublimation + Ultrasonic welded loop</p>
                    </div>
                    <Link
                      href="/products/"
                      className="rounded-full bg-white/15 px-3 py-1.5 font-bold text-white backdrop-blur-md transition hover:bg-white/25"
                    >
                      View Specs →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              /* Interactive Preset Selector & Specimen */
              <div>
                {/* Archetype Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  {CARD_PRESETS.map((preset) => {
                    const Icon = preset.icon;
                    const isSelected = selectedPreset.id === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setSelectedPreset(preset)}
                        className={`flex items-center gap-2 rounded-xl border p-2 text-left text-xs transition duration-200 ${
                          isSelected
                            ? "border-accent bg-accent/15 text-white shadow-[0_0_15px_rgba(2,132,199,0.3)]"
                            : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
                        }`}
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-cyan-300" : "text-slate-400"}`} />
                        <div className="min-w-0">
                          <p className="truncate font-semibold">{preset.name}</p>
                          <p className="truncate text-[10px] text-slate-400">{preset.category}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* The 3D ID Card Mockup Box */}
                <div className="relative mt-4">
                  {/* Floating Chip */}
                  <div className="animate-float-slow absolute -top-3 -right-2 z-20 hidden rounded-xl border border-white/20 bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{selectedPreset.sample.chipSpec}</span>
                  </div>

                  {/* Physical Lanyard Strap */}
                  <div className="mx-auto mb-[-8px] flex w-24 flex-col items-center">
                    <div className="h-4 w-12 rounded-t-sm bg-gradient-to-r from-sky-600 via-blue-500 to-sky-600 shadow-md">
                      <div className="flex h-full items-center justify-center text-[7px] font-black tracking-widest text-white/90 uppercase">
                        IDGen Satin
                      </div>
                    </div>
                    <div className="h-2.5 w-4 rounded-b-md bg-gradient-to-b from-slate-400 to-slate-200 shadow-inner" />
                    <div className="h-1.5 w-6 rounded-full bg-slate-800 border border-white/30" />
                  </div>

                  {/* Main Card Component */}
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br ${selectedPreset.theme.bgGradient} p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300`}
                    style={{
                      boxShadow: `0 10px 40px -10px ${selectedPreset.theme.borderGlow}`,
                    }}
                  >
                    <div className="hologram-effect pointer-events-none absolute inset-0 opacity-25" />

                    <div className="relative z-10 flex items-start justify-between gap-3 border-b border-white/15 pb-3">
                      <div>
                        <span className="text-[10px] font-black tracking-wider text-cyan-300 uppercase">
                          {selectedPreset.sample.org}
                        </span>
                        <p className="text-[11px] font-medium text-slate-300">
                          {selectedPreset.sample.subOrg}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1 rounded border border-amber-400/40 bg-gradient-to-tr from-amber-600/30 to-amber-300/30 px-1.5 py-0.5 text-[9px] font-bold text-amber-200">
                          <div className="h-2 w-2 rounded-sm bg-amber-400/80" />
                          <span>RFID CHIP</span>
                        </div>
                        <span className="mt-0.5 text-[8px] text-slate-400 tracking-wider">SECURE ISO</span>
                      </div>
                    </div>

                    <div className="relative z-10 mt-4 flex gap-4">
                      <div className="relative flex h-24 w-20 shrink-0 flex-col items-center justify-center overflow-hidden rounded-lg border border-white/25 bg-slate-800/80 shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
                        <div className="h-10 w-10 rounded-full border border-white/30 bg-slate-700/80 flex items-center justify-center">
                          <span className="font-bold text-xs text-white/90">
                            {selectedPreset.sample.holderName.charAt(0)}
                          </span>
                        </div>
                        <span className="mt-1 text-[8px] font-semibold text-white/60 tracking-wider">PHOTO ID</span>
                        <div className="absolute bottom-0 inset-x-0 h-1 bg-cyan-400" />
                      </div>

                      <div className="flex flex-col justify-between min-w-0">
                        <div>
                          <h4 className="text-base font-bold text-white truncate">
                            {selectedPreset.sample.holderName}
                          </h4>
                          <p className="text-xs font-semibold text-cyan-300">
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

                    <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/15 pt-3">
                      <div className="h-6 w-28 bg-[repeating-linear-gradient(90deg,#fff,#fff_2px,transparent_2px,transparent_4px)] opacity-70" />
                      <div className="flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-950/60 px-2.5 py-1 text-[9px] font-bold text-cyan-200 shadow-sm">
                        <Sparkles className="h-3 w-3 text-cyan-300" />
                        <span>GENUINE IDGEN SECURE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Metrics / Social Proof Glass Banner */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">{SITE.foundedYear}</p>
            <p className="mt-1 text-xs font-semibold text-cyan-300 uppercase tracking-wider">Experience Since</p>
            <p className="mt-0.5 text-[11px] text-slate-400">Identification product supply</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">{SITE.regionalFocus.length} States</p>
            <p className="mt-1 text-xs font-semibold text-cyan-300 uppercase tracking-wider">Northeast Coverage</p>
            <p className="mt-0.5 text-[11px] text-slate-400">Direct regional dispatch</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">10,000+</p>
            <p className="mt-1 text-xs font-semibold text-cyan-300 uppercase tracking-wider">Daily Factory Capacity*</p>
            <p className="mt-0.5 text-[11px] text-slate-400">Cards, lanyards & sealing</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">72 Hours</p>
            <p className="mt-1 text-xs font-semibold text-cyan-300 uppercase tracking-wider">Standard Dispatch</p>
            <p className="mt-0.5 text-[11px] text-slate-400">After approval & payment</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
