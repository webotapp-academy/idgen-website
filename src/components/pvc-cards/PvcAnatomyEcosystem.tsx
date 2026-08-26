"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  CreditCard,
  Radio,
  Maximize2,
  Box,
  Flame,
} from "lucide-react";

interface PvcStackLayer {
  step: string;
  title: string;
  subtitle: string;
  badge: string;
  material: string;
  benefit: string;
  icon: React.ElementType;
  img: string;
  details: string[];
}

const pvcLayers: PvcStackLayer[] = [
  {
    step: "01",
    title: "100% Virgin PVC Solid Core",
    subtitle: "Pure White Non-Recycled Core",
    badge: "Virgin Substrate",
    material: "High-density virgin polyvinyl chloride polymer",
    benefit: "Flawless optical whiteness ensures smooth printhead travel without snagging and prevents card snapping.",
    icon: Box,
    img: "/images/PVC Cards Samples/Sample 1.jpg",
    details: [
      "Pure white core without recycled grey fillers or impurities",
      "Standard CR80 dimensions: 85.6 mm × 54.0 mm × 0.76 mm",
      "ISO 7810 dimensional and bend-resistance compliance",
    ],
  },
  {
    step: "02",
    title: "Embedded RFID Smart Inlay (Optional)",
    subtitle: "13.56MHz / 125kHz Microchip",
    badge: "Smart Contactless",
    material: "Ultrathin silicon chip + laminated copper wire antenna",
    benefit: "Seamless contactless communication for campus attendance, cashless payments, and door access.",
    icon: Radio,
    img: "/images/custom-rfid-id-card-printing.png",
    details: [
      "Mifare 1K (13.56MHz) or TK4100 (125kHz) protocols",
      "Embedded between core PVC layers with zero surface bump",
      "100,000 read/write cycles with 10-year EEPROM retention",
    ],
  },
  {
    step: "03",
    title: "300 DPI Dye-Sublimation Printing",
    subtitle: "Edge-to-Edge Full Color",
    badge: "HD Color Sublimation",
    material: "YMCKO thermal transfer dye-diffusion ribbons",
    benefit: "Photorealistic portraits, crisp QR codes, sharp barcodes, and corporate brand Pantone colors.",
    icon: Sparkles,
    img: "/images/PVC-ID-Card-Printing-for-Organizations.png",
    details: [
      "True 300 × 300 DPI high-definition continuous tone",
      "Zero border bleed with full edge-to-edge coverage",
      "Supports dynamic barcodes (Code 128, Code 39) and QR codes",
    ],
  },
  {
    step: "04",
    title: "Protective Thermal Overlaminate",
    subtitle: "Scratch & UV Barrier Seal",
    badge: "Protective Overcoat",
    material: "Clear thermal varnish / 1-Mil polyester overlay",
    benefit: "Shields card graphics from daily wallet friction, moisture, chemicals, and sunlight fading.",
    icon: ShieldCheck,
    img: "/images/PVC Cards Samples/Sample 3.jpg",
    details: [
      "Extends functional card lifespan beyond 5+ years of active use",
      "Protects printed surface against acetone and sanitizers",
      "Optional holographic security watermark overlays",
    ],
  },
];

export function PvcAnatomyEcosystem() {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const activeLayer = pvcLayers[activeLayerIndex];

  return (
    <section className="mt-16 sm:mt-20">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Layers className="h-3.5 w-3.5" />
            <span>Manufacturing Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            CR80 PVC Card Anatomy &amp; Engineering
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Explore the 4-layer construction engineered for optical whiteness, smart chip integration, and 5+ year physical durability.
          </p>
        </div>
      </div>

      {/* ── Main Interactive Split ── */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-stretch">
        {/* Left Column: Stack Layers */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {pvcLayers.map((layer, idx) => {
            const isSelected = activeLayerIndex === idx;
            const Icon = layer.icon;

            return (
              <div
                key={layer.step}
                onClick={() => setActiveLayerIndex(idx)}
                className={`group relative flex items-center justify-between p-4 sm:p-4.5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-[#009fe3] bg-gradient-to-r from-sky-50 via-white to-sky-50/50 dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-800 shadow-xl shadow-sky-500/10 scale-[1.02]"
                    : "border-slate-200/90 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl font-mono text-sm font-black transition-all ${
                      isSelected
                        ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/30"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Layer {layer.step}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-[#009fe3]/15 text-[#009fe3] dark:text-cyan-300"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                        }`}
                      >
                        {layer.badge}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight mt-0.5">
                      {layer.title}
                    </h3>
                  </div>
                </div>

                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full transition-transform ${
                    isSelected
                      ? "bg-[#009fe3] text-white rotate-90"
                      : "text-slate-400 group-hover:translate-x-1"
                  }`}
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            );
          })}

          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 p-3 text-center">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
              Complete PVC Card Ecosystem
            </span>
            <div className="flex items-center justify-center gap-1.5 text-xs font-black text-slate-800 dark:text-slate-200">
              <span>Virgin Core</span>
              <span className="text-[#009fe3]">→</span>
              <span>RFID Inlay</span>
              <span className="text-[#009fe3]">→</span>
              <span>Dye Sublimation</span>
              <span className="text-[#009fe3]">→</span>
              <span className="text-emerald-500 font-extrabold">Thermal Overcoat</span>
            </div>
          </div>
        </div>

        {/* Right Column: Active Layer Detail */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative h-full overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[11px] font-mono font-black uppercase text-[#009fe3] dark:text-cyan-400">
                    Layer {activeLayer.step} • {activeLayer.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-0.5">
                    {activeLayer.title}
                  </h3>
                </div>

                <span className="rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {activeLayer.badge}
                </span>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-12 items-center">
                <div className="sm:col-span-5 relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 p-2 shadow-inner">
                  <Image
                    src={activeLayer.img}
                    alt={activeLayer.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <div className="sm:col-span-7 space-y-3.5">
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-3.5 border border-slate-200/70 dark:border-slate-700/60">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block mb-0.5">
                      Substrate &amp; Material
                    </span>
                    <p className="text-xs font-extrabold text-slate-900 dark:text-white">
                      {activeLayer.material}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-sky-50/60 dark:bg-sky-950/30 p-3.5 border border-sky-200/60 dark:border-cyan-900/40">
                    <span className="text-[10px] font-bold text-sky-600 dark:text-cyan-400 uppercase block mb-0.5">
                      Functional Performance
                    </span>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      {activeLayer.benefit}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2 border-t border-slate-100 dark:border-slate-800 pt-5">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                  Key Technical Characteristics
                </span>
                {activeLayer.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                Manufactured at our Guwahati facility with direct factory dispatch across all 8 NE states.
              </p>
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>Request Sample Batch</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
