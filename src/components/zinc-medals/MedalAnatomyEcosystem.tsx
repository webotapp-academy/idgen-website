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
  Award,
  Box,
  Flame,
  Shirt,
} from "lucide-react";

interface MedalStackLayer {
  step: string;
  title: string;
  subtitle: string;
  badge: string;
  material: string;
  benefit: string;
  icon?: React.ElementType;
  iconName?: string;
  img: string;
  details: string[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Box,
  Sparkles,
  Flame,
  Shirt,
  Layers,
  Award,
  ShieldCheck,
};

const medalLayers: MedalStackLayer[] = [
  {
    step: "01",
    title: "High-Density Eco Zinc Alloy Core",
    subtitle: "Heavyweight 45g – 90g Solid Metal",
    badge: "Eco-Friendly Metal",
    material: "High-purity zinc alloy (lead & nickel free)",
    benefit: "Delivers a heavy, substantial premium feel around the winner's neck with zero risk of rust or oxidation.",
    icon: Box,
    iconName: "Box",
    img: "/images/Zinc Medal/IMG_20260213_100040.jpg.jpeg",
    details: [
      "Substantial 45g–90g solid heft compared to light stamped iron",
      "Lead-free, eco-friendly certified metallurgical formulation",
      "High fluidity allows intricate 3D contours and negative space cutouts",
    ],
  },
  {
    step: "02",
    title: "3D High-Relief CNC Mold Sculpting",
    subtitle: "Multi-Level Vector Relief",
    badge: "Multi-Level 3D",
    material: "Precision hardened steel tooling die",
    benefit: "Creates tactile dimensional depth, raised laurel wreaths, and razor-sharp institutional typography.",
    icon: Sparkles,
    iconName: "Sparkles",
    img: "/images/Zinc Medal/madl.png",
    details: [
      "True 3D sculpted bevels rather than basic flat 2D lines",
      "Micro-level texturing and background stippling",
      "Precise negative-space pierced cutouts for athletic crests",
    ],
  },
  {
    step: "03",
    title: "Electroplating & Antique Hand-Buffing",
    subtitle: "Gold, Silver, Bronze & Copper",
    badge: "Electroplate Finish",
    material: "Multi-stage electroplating + protective clear lacquer",
    benefit: "Creates high-contrast antique shading in recesses while polishing raised areas for maximum visual brilliance.",
    icon: Flame,
    iconName: "Flame",
    img: "/images/Zinc Medal/IMG_20260213_100059.jpg.jpeg",
    details: [
      "Electro-deposited copper, nickel and real gold / silver micro-layers",
      "Manual dark wash buffing brings out deep shadow details in relief zones",
      "Transparent baked lacquer preserves brilliance against finger sweat and moisture",
    ],
  },
  {
    step: "04",
    title: "Sublimated Satin Neck Ribbon Assembly",
    subtitle: "High-Definition 300 DPI Heat-Transfer",
    badge: "Custom Satin Ribbon",
    material: "High-density silky polyester satin + heavy-duty jump ring",
    benefit: "Full-bleed photographic colors with event dates, sponsor logos, and smooth non-chafing neck wear.",
    icon: Shirt,
    iconName: "Shirt",
    img: "/images/Zinc Medal/IMG20260213095826.jpg.jpeg",
    details: [
      "Dye-sublimation printing with zero color fading or bleeding",
      "Reinforced heavy-duty jump ring attachment",
      "Comfortable silky texture designed for all-day victory ceremonies",
    ],
  },
];

export function MedalAnatomyEcosystem({
  data,
}: {
  data?: {
    badge?: string;
    title?: string;
    lede?: string;
    layers?: MedalStackLayer[];
  };
} = {}) {
  const badgeTitle = data?.badge || "Manufacturing Ecosystem";
  const sectionTitle = data?.title || "Die-Cast Zinc Medal Anatomy";
  const sectionLede =
    data?.lede ||
    "Discover the 4 engineering stages that transform raw zinc alloy ingots into prestigious championship medals and tournament awards.";
  const activeLayers =
    data?.layers && data.layers.length > 0 ? data.layers : medalLayers;

  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const activeLayer = activeLayers[activeLayerIndex] || activeLayers[0];

  return (
    <section className="mt-16 sm:mt-20">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Layers className="h-3.5 w-3.5" />
            <span>{badgeTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            {sectionTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {sectionLede}
          </p>
        </div>
      </div>

      {/* ── Main Interactive Split ── */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-stretch">
        {/* Left Column: Stack Layers */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {activeLayers.map((layer, idx) => {
            const isSelected = activeLayerIndex === idx;
            const Icon =
              layer.icon ||
              ((layer as any).iconName && ICON_MAP[(layer as any).iconName]) ||
              Layers;

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
              Complete Medal Manufacturing Flow
            </span>
            <div className="flex items-center justify-center gap-1.5 text-xs font-black text-slate-800 dark:text-slate-200">
              <span>Eco Zinc Alloy</span>
              <span className="text-[#009fe3]">→</span>
              <span>3D Die Mold</span>
              <span className="text-[#009fe3]">→</span>
              <span>Electroplate</span>
              <span className="text-[#009fe3]">→</span>
              <span className="text-emerald-500 font-extrabold">Satin Ribbon Stitch</span>
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
                Supplied directly across sports associations, schools, and corporate leagues in all 8 NE states.
              </p>
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>Request 3D Medal Proof</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
