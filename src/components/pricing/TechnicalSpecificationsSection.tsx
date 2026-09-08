"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Copy, Check, Share2 } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import type { PricingItemData } from "@/lib/dynamic-pricing";
import type { TechnicalSpecItem, TechnicalSpecsSectionConfig } from "@/lib/dynamic-specifications-types";
import { defaultTechnicalSpecs, defaultSectionConfig } from "@/lib/dynamic-specifications-types";

interface TechnicalSpecificationsSectionProps {
  initialItems?: PricingItemData[];
  initialSpecs?: TechnicalSpecItem[];
  initialConfig?: TechnicalSpecsSectionConfig;
}

export function TechnicalSpecificationsSection({
  initialItems,
  initialSpecs,
  initialConfig,
}: TechnicalSpecificationsSectionProps) {
  const [items, setItems] = useState<PricingItemData[]>(initialItems || []);
  const [specsList, setSpecsList] = useState<TechnicalSpecItem[]>(initialSpecs || defaultTechnicalSpecs);
  const [config, setConfig] = useState<TechnicalSpecsSectionConfig>(initialConfig || defaultSectionConfig);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync live dynamic pricing data and dynamic specifications from APIs
  useEffect(() => {
    async function fetchLiveData() {
      try {
        const [pricingRes, specsRes] = await Promise.all([
          fetch("/api/pricing"),
          fetch("/api/specifications"),
        ]);

        const pricingData = await pricingRes.json();
        if (pricingData.success && Array.isArray(pricingData.items) && pricingData.items.length > 0) {
          setItems(pricingData.items);
        }

        const specsData = await specsRes.json();
        if (specsData.success && Array.isArray(specsData.specs) && specsData.specs.length > 0) {
          setSpecsList(specsData.specs);
        }
        if (specsData.success && specsData.sectionConfig) {
          setConfig(specsData.sectionConfig);
        }
      } catch (err) {
        console.error("Failed to fetch live technical specification data:", err);
      }
    }
    fetchLiveData();
  }, []);

  useEffect(() => {
    if (initialItems && initialItems.length > 0) {
      setItems(initialItems);
    }
  }, [initialItems]);

  useEffect(() => {
    if (initialSpecs && initialSpecs.length > 0) {
      setSpecsList(initialSpecs);
    }
  }, [initialSpecs]);

  useEffect(() => {
    if (initialConfig) {
      setConfig(initialConfig);
    }
  }, [initialConfig]);

  // Handle Copy Direct Link to Card
  const handleCopyLink = async (specId: string) => {
    try {
      const url =
        typeof window !== "undefined"
          ? `${window.location.origin}/pricing/#${specId}`
          : `https://idgen.in/pricing/#${specId}`;

      await navigator.clipboard.writeText(url);
      setCopiedId(specId);
      setTimeout(() => {
        setCopiedId((prev) => (prev === specId ? null : prev));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  // Compute dynamic price string for a technical spec item
  const getDynamicPrice = (spec: TechnicalSpecItem): string => {
    if (spec.priceFormula && spec.priceFormula !== "auto") {
      return spec.priceFormula;
    }

    if (!items || items.length === 0 || !spec.matchedPricingIds || spec.matchedPricingIds.length === 0) {
      return "₹15 – ₹16 / card";
    }

    const matched = items.filter(
      (item) => spec.matchedPricingIds?.includes(item.id) && item.isActive !== false
    );

    if (matched.length === 0) return "₹15 / unit";

    if (matched.length === 1) {
      const item = matched[0];
      return `${item.price} ${item.unit}`;
    }

    // Multiple matched items (e.g. PVC single & double, or Holder V-1 & V-2)
    const prices = matched.map((i) => i.price);
    const units = matched.map((i) => i.unit);
    const uniquePrices = Array.from(new Set(prices));

    if (uniquePrices.length === 1) {
      return `${uniquePrices[0]} ${units[0] || ""}`.trim();
    }

    const commonUnit = units[0] || "";
    return `${prices[0]} – ${prices[prices.length - 1]} ${commonUnit}`.trim();
  };

  const activeSpecs = specsList.filter((s) => s.isActive !== false);

  return (
    <section id="product-specifications" className="mt-20 scroll-mt-20">
      <SectionHead
        eyebrow={config.eyebrow || "Technical Specifications"}
        title={config.title || "Product Specifications & Engineering Details"}
        lede={
          config.lede ||
          "Comprehensive technical specifications, dimensions, materials, durability standards, and hardware compatibility for all IDGen products."
        }
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {activeSpecs.map((prod) => {
          const dynamicPrice = getDynamicPrice(prod);
          const imageTag = prod.imageTag || prod.category;
          const isCopied = copiedId === prod.id;

          return (
            <div
              key={prod.id}
              id={prod.id}
              className="group scroll-mt-24 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:border-[#009fe3]/60 hover:shadow-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                {/* Top Header: Image + Name + Price Badge & Quick Copy */}
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="relative h-36 w-full sm:w-36 shrink-0 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
                    <Image
                      src={prod.imageSrc || "/images/product-pvc-cards.jpg"}
                      alt={prod.alt || prod.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 150px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2 left-2 rounded bg-slate-950/80 backdrop-blur-xs px-2 py-0.5 text-[10px] font-black text-cyan-300 border border-white/10">
                      {imageTag}
                    </span>
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-sky-50 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/40 px-2.5 py-0.5 text-[11px] font-bold text-[#009fe3] dark:text-cyan-400">
                        {prod.category}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-sm font-black text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-sky-100 dark:border-slate-700">
                          {dynamicPrice}
                        </span>

                        {/* Top Header Quick Copy Button */}
                        <button
                          type="button"
                          onClick={() => handleCopyLink(prod.id)}
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                            isCopied
                              ? "bg-emerald-500 text-white border-emerald-600 shadow-xs"
                              : "bg-sky-50 dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 border-sky-200 dark:border-slate-700 hover:bg-[#009fe3] hover:text-white"
                          }`}
                          title="Copy Link to this card"
                        >
                          {isCopied ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {prod.description || "Direct factory manufactured & quality inspected at IDGen cleanrooms."}
                    </p>
                  </div>
                </div>

                {/* Specifications Table */}
                {prod.specs && prod.specs.length > 0 && (
                  <div className="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60">
                    <table className="w-full text-left text-xs">
                      <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60">
                        {prod.specs.map((spec, idx) => (
                          <tr
                            key={`${spec.label}-${idx}`}
                            className="hover:bg-white/60 dark:hover:bg-white/[0.02] transition"
                          >
                            <td className="px-3.5 py-2 font-bold text-slate-600 dark:text-slate-400 w-1/3">
                              {spec.label}
                            </td>
                            <td className="px-3.5 py-2 font-medium text-slate-900 dark:text-slate-100">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Key Highlights */}
                {prod.highlights && prod.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Key Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 shadow-2xs"
                        >
                          <CheckCircle2 className="h-3 w-3 text-[#009fe3] shrink-0" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Action Link & Primary Copy Link + Get Quote Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href={prod.pageHref || "/pricing/"}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] hover:underline"
                >
                  <span>View Full {prod.name} Page</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  {/* Primary Prominent Copy Link Button */}
                  <button
                    type="button"
                    onClick={() => handleCopyLink(prod.id)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 border cursor-pointer ${
                      isCopied
                        ? "bg-emerald-500 text-white border-emerald-600 shadow-md shadow-emerald-500/20"
                        : "bg-sky-50 dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 border-sky-200 dark:border-slate-700 hover:bg-[#009fe3] hover:text-white hover:border-[#009fe3] shadow-2xs"
                    }`}
                    title="Copy direct link to this technical specification card"
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>

                  <Link
                    href="/request-a-quote/"
                    className="rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3.5 py-1.5 text-xs font-bold shadow hover:opacity-90 transition"
                  >
                    {prod.buttonText || "Get Quote"}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
