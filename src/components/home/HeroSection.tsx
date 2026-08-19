"use client";

import { useState, useEffect } from "react";
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
  Flame,
  MessageSquare,
  Check
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/data/site";

/* ============================================================
   REAL PRODUCT SHOWCASE CURATED COLLECTION
   ============================================================ */

interface ShowcaseItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  specs: string[];
  href: string;
}

const SHOWCASE_PRODUCTS: ShowcaseItem[] = [
  {
    id: "full-set",
    tabLabel: "Full ID Set",
    badge: "Complete Wearable Package",
    title: "Complete Institutional ID Package",
    subtitle: "30-Mil CR80 PVC Card + 20mm Custom Printed Satin Lanyard + Rigid Crystal Case + Chrome Swivel Hook.",
    imageSrc: "/images/ID Card Full Set Samples/Sample 1.jpeg",
    specs: ["Factory Pre-Assembled", "Ultrasonic Welded Loop", "Zero-Staple Guarantee"],
    href: "/products/",
  },
  {
    id: "pvc-cards",
    tabLabel: "CR80 PVC Cards",
    badge: "Industrial Retransfer",
    title: "High-Definition 300+ DPI PVC Cards",
    subtitle: "Solid 30-mil polyvinyl chloride core with scratch-resistant dual-sided thermal gloss overlay and crisp edge-to-edge printing.",
    imageSrc: "/images/ID Card Full Set Samples/Customized Student ID Cards supplied to educational institutions in Guwahati with premium PVC quality and professional design..jpg",
    specs: ["Credit-Card Thickness (30 Mil)", "UV Fading Protection", "Micro-Text & Barcode Sharpness"],
    href: "/id-card-printing/",
  },
  {
    id: "lanyards",
    tabLabel: "Satin Lanyards",
    badge: "Dye-Sublimation",
    title: "Custom Printed 20mm Satin Lanyards",
    subtitle: "Silky skin-friendly satin ribbons with double-sided continuous brand graphics, safety breakaway buckles, and heavy-duty chrome hooks.",
    imageSrc: "/images/Lanyard with Holder Samples/Sample 26.jpg",
    specs: ["Full-Color CMYK Print", "Acoustic Molecular Weld", "Anti-Fray Edge Weave"],
    href: "/custom-printed-lanyard-printing/",
  },
  {
    id: "rfid-smart",
    tabLabel: "RFID & NFC",
    badge: "Smart Contactless",
    title: "Encrypted 13.56 MHz RFID Access Cards",
    subtitle: "Embedded Mifare Classic 1K, DESFire EV2 & NTAG213 chips calibrated for university turnstiles, attendance machines & biometric gates.",
    imageSrc: "/images/ID Card Full Set Samples/High-quality Employee ID Cards and Staff Identity Cards delivered to clients in Guwahati and Assam.jpg",
    specs: ["100% Tested Read Range", "UID Laser Engraved", "Anti-Collision Protocol"],
    href: "/rfid-card-printing/",
  },
  {
    id: "event-passes",
    tabLabel: "Event Badges",
    badge: "Conferences & Summits",
    title: "Large-Format VIP Delegate Passes",
    subtitle: "Over-sized event credentials with double-slot dual-hook lanyards preventing badge flipping during summits and expos.",
    imageSrc: "/images/ID Card Full Set Samples/Sample 16.jpg",
    specs: ["Dual-Clip Anti-Spin", "QR Scanning Ready", "Express 48h Turnaround"],
    href: "/event-card-printing/",
  },
  {
    id: "medals-badges",
    tabLabel: "Zinc Medals",
    badge: "Sports & Honors",
    title: "Custom Die-Cast Zinc Alloy Medals",
    subtitle: "Heavy-weight embossed medals with 3D relief detailing, gold/silver/bronze antique plating, and matching custom printed neck ribbons.",
    imageSrc: "/images/Zinc Medal/madl.png",
    specs: ["Solid Die-Cast Metal", "3D Embossed Relief", "Custom Ribbon Included"],
    href: "/products/",
  },
];

/* ============================================================
   INTERACTIVE CARD PRESETS FOR INTERACTIVE TAB
   ============================================================ */

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
  const [activeTab, setActiveTab] = useState<string>("full-set");
  const [selectedPreset, setSelectedPreset] = useState<CardPreset>(CARD_PRESETS[0]);
  const [isSpecimenMode, setIsSpecimenMode] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const activeProduct = SHOWCASE_PRODUCTS.find((p) => p.id === activeTab) || SHOWCASE_PRODUCTS[0];

  // Auto rotation timer when not in specimen mode
  useEffect(() => {
    if (isSpecimenMode || !autoRotate) return;
    const interval = setInterval(() => {
      setActiveTab((curr) => {
        const idx = SHOWCASE_PRODUCTS.findIndex((p) => p.id === curr);
        const nextIdx = (idx + 1) % SHOWCASE_PRODUCTS.length;
        return SHOWCASE_PRODUCTS[nextIdx].id;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isSpecimenMode, autoRotate]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060D19] via-[#0B1527] to-[#060D19] text-white pt-6 pb-20 lg:pt-10 lg:pb-28">
      {/* Dynamic Background Glows & Patterns */}
      <div className="hero-grid-pattern absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-cyan-500/15 blur-[160px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[180px]" />
      <div className="pointer-events-none absolute -bottom-32 left-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[150px]" />

      <Container className="relative z-10">
        {/* Top Facility Live Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs font-semibold backdrop-blur-md shadow-lg shadow-black/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            </span>
            <span className="text-white font-medium">Guwahati Factory Direct Production</span>
            <span className="text-white/30">•</span>
            <span className="text-cyan-300 font-semibold">{SITE.dailyCapacity}</span>
          </div>

          <div className="hidden items-center gap-2 text-xs text-slate-300 md:inline-flex">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            <span>ISO Compliant Retransfer Printing & Ultrasonic Sealing</span>
          </div>
        </div>

        {/* Hero Main Content Split */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Value Proposition & CTAs (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/15 px-3.5 py-1.5 text-xs font-bold text-cyan-300 border border-cyan-500/30 mb-5 backdrop-blur-md">
              <Flame className="h-3.5 w-3.5" />
              <span>Northeast India&apos;s Dedicated Identity Manufacturing Hub</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.12] lg:text-[3.5rem]">
              Precision-Engineered{" "}
              <span className="gradient-text">
                ID Cards, Smart RFID
              </span>{" "}
              & Custom Lanyards
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Direct factory manufacturing in Guwahati for schools, universities, hospitals, and corporate workforces across Assam and Northeast India. Zero middleman markup, free AI photo collection via IDGen Studio, and 48–72h express regional dispatch.
            </p>

            {/* Spec Highlights Grid */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
                  <Layers className="h-4 w-4" />
                  <span>30-Mil CR80 PVC</span>
                </div>
                <span className="mt-1 text-[11px] text-slate-300">Solid Core Retransfer</span>
              </div>

              <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
                  <Flame className="h-4 w-4" />
                  <span>Ultrasonic Loop</span>
                </div>
                <span className="mt-1 text-[11px] text-slate-300">Zero Staples or Rivets</span>
              </div>

              <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
                  <Radio className="h-4 w-4" />
                  <span>13.56 MHz RFID</span>
                </div>
                <span className="mt-1 text-[11px] text-slate-300">NFC & Mifare Smart Chips</span>
              </div>

              <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
                  <Zap className="h-4 w-4" />
                  <span>48–72h Dispatch</span>
                </div>
                <span className="mt-1 text-[11px] text-slate-300">Guwahati Direct Hub</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-a-quote/"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_35px_rgba(2,132,199,0.5)] transition-all duration-300 hover:bg-accent-hover hover:text-white hover:shadow-[0_0_50px_rgba(2,132,199,0.8)] btn-glow"
              >
                <Sparkles className="h-4 w-4" />
                <span>Calculate Instant Wholesale Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20would%20like%20to%20request%20samples%20and%20pricing%20for%20ID%20cards."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/40 px-6 py-4 text-sm font-semibold text-emerald-300 backdrop-blur-md transition-all duration-300 hover:bg-emerald-900/60 hover:border-emerald-400 hover:text-emerald-200"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Micro Trust Proof */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Zero Setup or Plate Charges</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Free Digital Sample PDF Proofs</span>
              </div>
              <Link 
                href="/contact-us/" 
                className="flex items-center gap-1.5 text-cyan-300 hover:underline transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Direct Production Support</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive 3D Product & Specimen Showcase (5 Cols) */}
          <div className="lg:col-span-5">
            {/* Top View Selector Bar */}
            <div className="flex items-center justify-between gap-2 p-1 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-xl mb-4">
              <button
                type="button"
                onClick={() => {
                  setIsSpecimenMode(false);
                  setAutoRotate(false);
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  !isSpecimenMode 
                    ? "bg-accent text-slate-950 shadow-lg shadow-cyan-500/30" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Physical Products</span>
              </button>

              <button
                type="button"
                onClick={() => setIsSpecimenMode(true)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  isSpecimenMode 
                    ? "bg-accent text-slate-950 shadow-lg shadow-cyan-500/30" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                <span>Interactive Badge</span>
              </button>
            </div>

            {!isSpecimenMode ? (
              /* REAL PHYSICAL PRODUCT SHOWCASE CONTAINER */
              <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-4 sm:p-5 backdrop-blur-2xl shadow-2xl">
                
                {/* Horizontal Product Category Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                  {SHOWCASE_PRODUCTS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(item.id);
                        setAutoRotate(false);
                      }}
                      className={`whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-accent text-slate-950 shadow-md font-bold"
                          : "bg-white/[0.05] text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item.tabLabel}
                    </button>
                  ))}
                </div>

                {/* Main Hero Product Photo Frame */}
                <div className="relative mt-3 aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/15 bg-slate-950 group">
                  <Image
                    src={activeProduct.imageSrc}
                    alt={activeProduct.title}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold text-cyan-300 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{activeProduct.badge}</span>
                  </div>

                  {/* Bottom Product Info */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5">
                    <h3 className="text-base font-bold text-white leading-snug">
                      {activeProduct.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      {activeProduct.subtitle}
                    </p>
                  </div>
                </div>

                {/* Specs List & View Link */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                    {activeProduct.specs.map((spec) => (
                      <span key={spec} className="inline-flex items-center gap-1 rounded-md bg-white/[0.06] px-2 py-0.5 text-cyan-300 font-medium">
                        <Check className="h-3 w-3 text-emerald-400" />
                        {spec}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={activeProduct.href}
                    className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-white hover:bg-accent hover:text-slate-950 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ) : (
              /* INTERACTIVE CARD SIMULATION SPECIMEN */
              <div>
                <div className="grid grid-cols-2 gap-2 mb-3">
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

                {/* 3D Physical Mockup */}
                <div className="relative mt-2">
                  <div className="mx-auto mb-[-8px] flex w-24 flex-col items-center">
                    <div className="h-4 w-12 rounded-t-sm bg-gradient-to-r from-sky-600 via-blue-500 to-sky-600 shadow-md">
                      <div className="flex h-full items-center justify-center text-[7px] font-black tracking-widest text-white/90 uppercase">
                        IDGen Satin
                      </div>
                    </div>
                    <div className="h-2.5 w-4 rounded-b-md bg-gradient-to-b from-slate-400 to-slate-200 shadow-inner" />
                    <div className="h-1.5 w-6 rounded-full bg-slate-800 border border-white/30" />
                  </div>

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

        {/* Bottom Social Proof & Metrics Glass Strip */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:-translate-y-0.5">
            <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">{SITE.foundedYear}</p>
            <p className="mt-1 text-xs font-bold text-cyan-300 uppercase tracking-wider">Experience Since</p>
            <p className="mt-0.5 text-[11px] text-slate-400">12+ Years Manufacturing</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:-translate-y-0.5">
            <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">{SITE.regionalFocus.length} States</p>
            <p className="mt-1 text-xs font-bold text-cyan-300 uppercase tracking-wider">Northeast Coverage</p>
            <p className="mt-0.5 text-[11px] text-slate-400">Direct Express Logistics</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:-translate-y-0.5">
            <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">10,000+</p>
            <p className="mt-1 text-xs font-bold text-cyan-300 uppercase tracking-wider">Daily Factory Capacity</p>
            <p className="mt-0.5 text-[11px] text-slate-400">Cards, Lanyards & Sealing</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:-translate-y-0.5">
            <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">24–48h</p>
            <p className="mt-1 text-xs font-bold text-cyan-300 uppercase tracking-wider">Fast Turnaround</p>
            <p className="mt-0.5 text-[11px] text-slate-400">Direct from Guwahati Hub</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
