"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Radio,
  Sliders,
  Box,
} from "lucide-react";
import type { DynamicPvcCardsRangeMaster } from "@/lib/dynamic-pvc-cards-types";

export interface MasterPvcSection {
  code: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  setup: string;
  suitable: string[];
  specs: { k: string; v: string }[];
  conclusion: string;
}

export const masterPvcSections: MasterPvcSection[] = [
  {
    code: "Standard 30-Mil CR80",
    badge: "Bank Grade Core",
    title: "30-Mil Standard CR80 Virgin PVC Cards",
    tagline: "The gold standard substrate for enterprise identity and academic credentials.",
    description:
      "Engineered with 100% virgin polyvinyl chloride core plastic, free of recycled impurities. Provides a mirror-smooth print surface for thermal transfer printers and 5+ years of anti-delamination durability.",
    image: "/images/PVC Cards Samples/Sample 1.jpg",
    alt: "30-Mil Virgin PVC Smart Card Sample",
    setup: "CR80 (85.6 × 54.0 mm) + 0.76 mm 30-Mil + Thermal Sublimation + UV Seal",
    suitable: [
      "School & University Student ID Cards",
      "Corporate Staff & Executive Badges",
      "Hospital & Medical Personnel Passes",
      "Government Department Credentials",
      "Visitor & Contractor Badges",
    ],
    specs: [
      { k: "Dimensions", v: "85.6 mm × 54.0 mm (CR80)" },
      { k: "Thickness", v: "30-Mil (0.76 mm Bank Standard)" },
      { k: "Core Material", v: "100% Virgin White PVC" },
      { k: "Print Quality", v: "300 DPI Edge-to-Edge Color" },
    ],
    conclusion: "Flawless optical whiteness prevents card printer printhead snags and color banding.",
  },
  {
    code: "13.56MHz Mifare 1K",
    badge: "Smart Contactless",
    title: "13.56MHz Mifare 1K High-Frequency Smart Cards",
    tagline: "Secure contactless microchip embedded inside standard 30-mil virgin PVC.",
    description:
      "The premier credential for integrated smart campuses and corporate attendance networks. Features 1KB EEPROM memory organized into 16 sectors with individual cryptographic keys for multi-application security.",
    image: "/images/custom-rfid-id-card-printing.png",
    alt: "13.56MHz Mifare RFID Smart PVC Card",
    setup: "Virgin PVC + Embedded Mifare S50 Inlay + Full-Color Personalization",
    suitable: [
      "Smart University Campus Access",
      "Cashless Canteen & Cafeteria Payments",
      "Automated Library Book Checkout",
      "Corporate Access Turnstiles",
      "Biometric Time & Attendance Terminals",
    ],
    specs: [
      { k: "Frequency", v: "13.56 MHz (High Frequency)" },
      { k: "Protocol", v: "ISO/IEC 14443 Type A" },
      { k: "Memory", v: "1KB EEPROM (16 Sectors)" },
      { k: "Read Distance", v: "Up to 10 cm (Contactless)" },
    ],
    conclusion: "100,000 read/write endurance cycles with 10-year encrypted data retention.",
  },
  {
    code: "125kHz TK4100 Prox",
    badge: "Low Frequency",
    title: "125kHz TK4100 Contactless Proximity Cards",
    tagline: "Universal access control credential for parking boom barriers and door gates.",
    description:
      "Reliable low-frequency contactless card embedded with a tuned copper coil antenna and TK4100 microchip. Pre-programmed with a factory unique 64-bit ID for plug-and-play compatibility with standard proximity readers.",
    image: "/images/bulk-rfid-card-printing.jpg",
    alt: "125kHz TK4100 Contactless Proximity Card",
    setup: "Virgin PVC + 125kHz Copper Coil + Laser Engraved Serial ID",
    suitable: [
      "Office Security Door Turnstiles",
      "Parking Boom Barrier Gates",
      "Commercial Building Elevators",
      "Gym & Fitness Club Entry",
      "Factory Staff Time Clocks",
    ],
    specs: [
      { k: "Frequency", v: "125 kHz (Low Frequency)" },
      { k: "Chip Model", v: "TK4100 / EM4100 Compatible" },
      { k: "Encoding", v: "64-Bit Read-Only Serial ID" },
      { k: "Read Range", v: "5 cm – 12 cm" },
    ],
    conclusion: "Cost-effective, highly durable contactless technology for large enterprise workforces.",
  },
  {
    code: "Overlaminated & Mag",
    badge: "HiCo 2750 Oe",
    title: "Overlaminated Magnetic Stripe & Barcode Cards",
    tagline: "Anti-scratch protective thermal laminate with high-coercivity magnetic stripe.",
    description:
      "Engineered for high-friction swipe environments such as hotel room keycards, POS loyalty terminals, and membership check-in desks. The protective overlay shields print against constant abrasion and chemical cleaners.",
    image: "/images/PVC Cards Samples/Sample 3.jpg",
    alt: "Overlaminated Scratch Proof PVC Card Sample",
    setup: "Virgin PVC + 2750 Oe HiCo MagStripe + 1-Mil Clear Thermal Overlaminate",
    suitable: [
      "Hotel Room Access Keycards",
      "Retail Loyalty & Discount Cards",
      "Club & Association Membership Cards",
      "High-Wear Industrial Environment IDs",
      "POS Terminal Magnetic Swipes",
    ],
    specs: [
      { k: "MagStripe Type", v: "HiCo (2750 Oersted)" },
      { k: "Tracks", v: "Track 1, 2, 3 (ISO 7811)" },
      { k: "Protection", v: "1-Mil Clear Protective Film" },
      { k: "Barcode Support", v: "Code 128, QR Code, PDF417" },
    ],
    conclusion: "Resistant to stray magnetic fields from smartphones and metal accessories.",
  },
];

export function PvcRangeMasterShowcase({ data }: { data?: DynamicPvcCardsRangeMaster }) {
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const activeSections = (data?.sections && data.sections.length > 0) ? data.sections : masterPvcSections;
  const activeModel = activeSections[activeModelIndex] || activeSections[0];

  return (
    <section className="mt-16 sm:mt-20">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Box className="h-3.5 w-3.5" />
            <span>{data?.badge || "Master Hardware Showcase"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            {data?.title || "PVC Card Variants & Chip Formats"}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {data?.lede || "Explore our specialized PVC card substrates engineered for standard photo IDs, RFID smart campus systems, and heavy-wear magnetic access."}
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Showing Variant {activeModelIndex + 1} of {activeSections.length}
        </div>
      </div>

      {/* ── Navigation Strip ── */}
      <div className="mt-6 overflow-x-auto pb-2">
        <div className="flex items-center gap-2 min-w-max">
          {activeSections.map((model, idx) => (
            <button
              key={model.code}
              onClick={() => setActiveModelIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all duration-200 ${
                activeModelIndex === idx
                  ? "bg-[#009fe3] text-white shadow-lg shadow-[#009fe3]/25 scale-[1.02]"
                  : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#009fe3]/60 hover:bg-sky-50/40 dark:hover:bg-slate-800"
              }`}
            >
              <span>{model.code}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  activeModelIndex === idx
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                }`}
              >
                {model.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Active Detail Stage ── */}
      <div className="mt-6 relative overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-2xl">
        <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#009fe3]/10 blur-3xl" />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative h-72 sm:h-80 w-full rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-slate-950 p-2 shadow-inner flex items-center justify-center">
              <Image
                src={activeModel.image}
                alt={activeModel.alt}
                fill
                className="object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-4 w-full rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-200/80 dark:border-slate-700/60 text-center">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">
                Production Setup
              </span>
              <p className="text-xs font-black text-slate-800 dark:text-slate-200 mt-0.5">
                {activeModel.setup}
              </p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black uppercase text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                  {activeModel.code}
                </span>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {activeModel.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1.5">
                {activeModel.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2 font-normal">
                {activeModel.description}
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              {activeModel.specs.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-2.5"
                >
                  <span className="text-[10px] text-slate-400 uppercase block">{s.k}</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{s.v}</span>
                </div>
              ))}
            </div>

            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                Recommended For
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {activeModel.suitable.map((st, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-sky-50/80 dark:bg-sky-950/40 border border-sky-200/70 dark:border-cyan-900/40 p-4 text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">
              <strong>Quality Standard: </strong>
              {activeModel.conclusion}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-6 py-3 text-xs font-extrabold shadow-md transition"
              >
                <span>Request a Quote for {activeModel.code}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing/"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                <span>View Pricing Tiers</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
