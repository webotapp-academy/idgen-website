"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  CreditCard,
  Layers,
  Boxes,
  Ticket,
  Radio,
  BadgeCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import type { PricingItemData } from "@/lib/dynamic-pricing";

interface CategoryBreakdownProps {
  initialItems?: PricingItemData[];
}

const lanyardSuitableFor = [
  "Student identification",
  "Employee identification",
  "Institutional identification",
  "Events",
  "Conferences",
  "Membership identification",
];

const rfidChecklist = [
  "RFID frequency",
  "Chip/type",
  "Card format",
  "Reader/system compatibility",
  "Quantity",
];

export function CategoryBreakdownSection({ initialItems }: CategoryBreakdownProps) {
  const [items, setItems] = useState<PricingItemData[]>(initialItems || []);

  // Fetch live pricing on mount
  useEffect(() => {
    async function loadFreshPricing() {
      try {
        const res = await fetch("/api/pricing/");
        const data = await res.json();
        if (data.success && Array.isArray(data.items) && data.items.length > 0) {
          setItems(data.items);
        }
      } catch (e) {
        console.error("Failed to load live breakdown pricing:", e);
      }
    }
    loadFreshPricing();
  }, []);

  useEffect(() => {
    if (initialItems && initialItems.length > 0) {
      setItems(initialItems);
    }
  }, [initialItems]);

  // Quick lookup helper
  const getItem = (id: string) => items.find((i) => i.id === id);

  const pvcSingle = getItem("pvc-single")?.price || "₹15";
  const pvcSingleUnit = getItem("pvc-single")?.unit || "/ card";

  const pvcDouble = getItem("pvc-double")?.price || "₹16";
  const pvcDoubleUnit = getItem("pvc-double")?.unit || "/ card";

  const lanyardPrice = getItem("lanyard-20mm")?.price || "₹15";
  const lanyardUnit = getItem("lanyard-20mm")?.unit || "/ lanyard";

  const eventPrice = getItem("event-card")?.price || "₹35";
  const eventUnit = getItem("event-card")?.unit || "/ card";

  const rfidPrice = getItem("rfid-card")?.price || "₹45";
  const rfidUnit = getItem("rfid-card")?.unit || "/ card";

  const v1Price = getItem("holder-v1")?.price || "₹6";
  const v1Unit = getItem("holder-v1")?.unit || "/ pc";

  const v2Price = getItem("holder-v2")?.price || "₹7";
  const v2Unit = getItem("holder-v2")?.unit || "/ pc";

  const hookPrice = getItem("swivel-hook")?.price || "₹3";
  const hookUnit = getItem("swivel-hook")?.unit || "/ pc";

  const acrylicPrice = getItem("acrylic-badge")?.price || "₹45";
  const acrylicUnit = getItem("acrylic-badge")?.unit || "/ badge";

  const medalPrice = getItem("zinc-medal")?.price || "₹65";
  const medalUnit = getItem("zinc-medal")?.unit || "/ medal";

  return (
    <section className="mt-20">
      <SectionHead
        eyebrow="Category Breakdown"
        title="Product & Service Pricing Deep-Dives"
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* 1. PVC ID Card Printing Price */}
        <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5 transition hover:shadow-lg">
          <div className="space-y-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
              <CreditCard className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              PVC ID Card Printing Price
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              Standard PVC ID Cards. IDGen provides customized PVC ID card printing for organizational identification requirements.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3.5 space-y-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Single-Side Printing</span>
                <p className="text-lg font-black text-[#009fe3]">{pvcSingle} <span className="text-xs font-semibold">{pvcSingleUnit}</span></p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Printed on one side.</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3.5 space-y-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Double-Side Printing</span>
                <p className="text-lg font-black text-[#009fe3]">{pvcDouble} <span className="text-xs font-semibold">{pvcDoubleUnit}</span></p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Printed on both sides.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link href="/id-card-printing/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline">
              <span>Explore ID Card Printing</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 2. Custom Printed Lanyard Price */}
        <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5 transition hover:shadow-lg">
          <div className="space-y-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
              <Layers className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Custom Printed Lanyard Price
              </h3>
              <span className="text-lg font-black text-[#009fe3]">{lanyardPrice} <span className="text-xs font-semibold">{lanyardUnit}</span></span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              20 mm Custom Printed Lanyard. Produced with organization branding, names, logos, colours and repeating artwork according to approved design.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Suitable for:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {lanyardSuitableFor.map((item) => (
                  <span key={item} className="rounded-md border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link href="/custom-printed-lanyard-printing/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline">
              <span>Explore Custom Printed Lanyard Printing</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 3. Event Card Price */}
        <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5 transition hover:shadow-lg">
          <div className="space-y-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
              <Ticket className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Event Card Price
              </h3>
              <span className="text-lg font-black text-[#009fe3]">{eventPrice} <span className="text-xs font-semibold">{eventUnit}</span></span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              Customized Event Card. Customized for conferences, seminars, exhibitions, institutional programmes and other events.
            </p>

            <div className="pt-2 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3] block">
                Supported Formats:
              </span>
              <FlowChain steps={["Event Card", "One Hook", "Lanyard"]} />
              <FlowChain steps={["Event Card", "Two Hooks", "Lanyard"]} />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link href="/event-card-printing/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline">
              <span>Explore Event Card Printing</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 4. RFID ID Card Price */}
        <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5 transition hover:shadow-lg">
          <div className="space-y-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
              <Radio className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                RFID ID Card Price
              </h3>
              <span className="text-lg font-black text-[#009fe3]">{rfidPrice} <span className="text-xs font-semibold">{rfidUnit}</span></span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              Customized RFID ID Card. Pricing depends on selected RFID technology, card specification and system compatibility requirements.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Before confirming, verify:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {rfidChecklist.map((item) => (
                  <span key={item} className="rounded-md border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link href="/rfid-card-printing/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline">
              <span>Explore RFID Card Printing</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 5. ID Card Holder & Hook Price */}
        <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5 transition hover:shadow-lg">
          <div className="space-y-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
              <Boxes className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                ID Card Holders &amp; Hooks Price
              </h3>
              <span className="text-sm sm:text-base font-black text-[#009fe3]">
                V-1/H-1 {v1Price} • V-2 {v2Price} • Hooks {hookPrice}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              100% Virgin Polycarbonate hard holders (V-1, V-2, H-1, H-2) and anti-rust chrome swivel fish hook clips designed for CR80 cards.
            </p>

            <div className="grid gap-2.5 sm:grid-cols-3 pt-2">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase">V-1 / H-1 Standard</span>
                <p className="text-base font-black text-[#009fe3]">{v1Price} <span className="text-[10px]">{v1Unit}</span></p>
                <p className="text-[10px] text-slate-600 dark:text-slate-400">Portrait &amp; Landscape drop-in.</p>
              </div>
              <div className="rounded-2xl border border-sky-200/80 dark:border-cyan-800/60 bg-sky-50/50 dark:bg-cyan-950/30 p-3 space-y-1">
                <span className="text-[10px] font-bold text-[#009fe3] dark:text-cyan-400 uppercase">V-2 / H-2 4-Side Lock</span>
                <p className="text-base font-black text-[#009fe3] dark:text-cyan-400">{v2Price} <span className="text-[10px]">{v2Unit}</span></p>
                <p className="text-[10px] text-slate-600 dark:text-slate-400">Perimeter snap-lock frame.</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Swivel Hooks</span>
                <p className="text-base font-black text-slate-900 dark:text-white">{hookPrice} <span className="text-[10px]">{hookUnit}</span></p>
                <p className="text-[10px] text-slate-600 dark:text-slate-400">Chrome alloy 360° rotation.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <Link href="/id-card-holders/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline">
              <span>Explore ID Card Holders</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/id-card-hooks/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#009fe3]">
              <span>Explore Hooks</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 6. Custom Acrylic Badges Price */}
        <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5 transition hover:shadow-lg">
          <div className="space-y-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Custom Acrylic Badges &amp; Pins Price
              </h3>
              <span className="text-lg font-black text-[#009fe3]">{acrylicPrice} <span className="text-xs font-semibold">{acrylicUnit}</span></span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              Precision laser-cut PMMA optical crystal acrylic badges with triple neodymium magnetic backings or safety pins for doctors, staff, and VIP summits.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Feature Highlights:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Triple Neodymium Magnet", "Diamond-Polished Bevels", "1200 DPI High-Def Print", "Zero Garment Damage"].map((item) => (
                  <span key={item} className="rounded-md border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link href="/acrylic-badges/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline">
              <span>Explore Acrylic Badges</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 7. Die-Cast Zinc Medals Price */}
        <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5 transition hover:shadow-lg">
          <div className="space-y-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
              <Award className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Die-Cast Zinc Medals &amp; Ribbons Price
              </h3>
              <span className="text-lg font-black text-[#009fe3]">{medalPrice} <span className="text-xs font-semibold">{medalUnit}</span></span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              3D high-relief die-cast metal medals in antique gold, silver, and bronze finishes paired with full-color custom satin neck ribbons for tournaments and honors.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Feature Highlights:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["3D Sculpted Metal Alloy", "Antique Gold / Silver / Bronze", "Matching Satin V-Cut Ribbon", "Custom Crest Molding"].map((item) => (
                  <span key={item} className="rounded-md border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link href="/zinc-medals/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline">
              <span>Explore Die-Cast Zinc Medals</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
