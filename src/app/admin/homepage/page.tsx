"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  Trash2,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Layers,
  Building2,
  Boxes,
  Cpu,
  ShieldCheck,
  MapPin,
  HelpCircle,
  Flame,
  ArrowRight,
  Eye,
  Camera,
  Play,
  MessageCircle,
  FileText,
  Sliders,
  Check,
  ChevronRight,
  Globe,
  Package,
} from "lucide-react";
import type {
  DynamicHomePageData,
  InstitutionalClientLogo,
  SolutionItem,
  StudioPillar,
  WhyIdgenPillar,
  AtAGlanceMetric,
  RegionalPriorityCity,
  RegionalNortheastState,
  HomePageFaqItem,
  CityProductItem,
  ServiceCardItem,
} from "@/lib/dynamic-homepage-types";
import type { HeroSlide } from "@/components/home/HeroCarousel";

function AdminHomePageContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicHomePageData | null>(null);
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [uploadingField, setUploadingField] = useState<string | null>(null);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchHomePageData();
  }, []);

  const fetchHomePageData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/homepage");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load homepage data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error loading homepage data");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!data) return;
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/homepage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess("All home page sections updated and saved successfully!");
        setData(json.data);
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to save changes");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error while saving");
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if (!confirm("Are you sure you want to reset all home page content to system defaults? Any custom edits will be reverted.")) {
      return;
    }
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/homepage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess("Home page reset to system default content successfully!");
        setData(json.data);
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to reset");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error while resetting");
    } finally {
      setSaving(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, targetCallback: (url: string) => void, fieldId: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingField(fieldId);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      if (json.success && json.url) {
        targetCallback(json.url);
      } else {
        alert(json.error || "Failed to upload image");
      }
    } catch (err: any) {
      alert("Error uploading image: " + err.message);
    } finally {
      setUploadingField(null);
    }
  };

  if (loading || !data) {
    return (
      <div className="flex flex-col items-center justify-center py-24 space-y-4">
        <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-semibold text-slate-400">Loading Dynamic Home Page Controls...</p>
      </div>
    );
  }

  const navTabs = [
    { id: "hero", label: "1. Hero & Slides", icon: Sparkles },
    { id: "productCatalog", label: "2. Product Catalog", icon: Package },
    { id: "trust", label: "3. Clients & Trust", icon: Building2 },
    { id: "identityServices", label: "4. Identity Services", icon: Layers },
    { id: "solutions", label: "5. Modular 4 Sets", icon: Boxes },
    { id: "studio", label: "6. IDGen Studio", icon: Cpu },
    { id: "whyIdgen", label: "7. Why IDGen & KPIs", icon: ShieldCheck },
    { id: "regionalHub", label: "8. Assam & NE Hub", icon: MapPin },
    { id: "faq", label: "9. Home FAQs", icon: HelpCircle },
    { id: "closingCta", label: "10. Closing CTA", icon: Flame },
    { id: "metadata", label: "11. SEO & Tags", icon: Globe },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      {/* Top Header Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/60 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <span>100% Dynamic Home Page Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Home Page Dynamic Control Suite
            </h1>
            <p className="mt-1.5 text-sm text-slate-400 max-w-2xl">
              Control every point, text, image, client logo, carousel slide, assembly set, and FAQ on the official home page in real time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-xs hover:bg-slate-700 transition flex items-center gap-1.5 border border-slate-700"
            >
              <span>View Live Home</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </Link>

            <button
              type="button"
              onClick={handleReset}
              disabled={saving}
              className="px-3.5 py-2.5 rounded-xl bg-slate-800/80 text-amber-300 font-semibold text-xs hover:bg-slate-800 hover:text-amber-200 transition flex items-center gap-1.5 border border-amber-500/20 disabled:opacity-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 shadow-lg shadow-teal-500/20 transition flex items-center gap-2 disabled:opacity-50"
            >
              {saving ? (
                <>
                  <div className="h-3.5 w-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  <span>Save All Changes</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Status Alerts */}
        {saveSuccess && (
          <div className="mt-5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>{saveSuccess}</span>
          </div>
        )}

        {saveError && (
          <div className="mt-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
            <span>{saveError}</span>
          </div>
        )}
      </div>

      {/* Point-by-Point Section Navigation Tabs */}
      <div className="flex flex-wrap gap-2 p-2 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-md">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? "text-slate-950" : "text-teal-400"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ============================================================
          TAB 1: HERO & SHOWCASE SLIDES
          ============================================================ */}
      {activeTab === "hero" && (
        <div className="space-y-6">
          {/* Headline & Subhead Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-teal-400" />
              <span>Hero Headline & Operational Eyebrow</span>
            </h2>

            {/* Eyebrow Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">
                  Eyebrow (Left Text)
                </label>
                <input
                  type="text"
                  value={data.hero.eyebrowBadge.left}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        eyebrowBadge: { ...data.hero.eyebrowBadge, left: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-teal-500 outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">
                  Eyebrow (Middle Hub)
                </label>
                <input
                  type="text"
                  value={data.hero.eyebrowBadge.middle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        eyebrowBadge: { ...data.hero.eyebrowBadge, middle: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-teal-500 outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">
                  Eyebrow (Right Sub-text)
                </label>
                <input
                  type="text"
                  value={data.hero.eyebrowBadge.right}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        eyebrowBadge: { ...data.hero.eyebrowBadge, right: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-teal-500 outline-hidden"
                />
              </div>
            </div>

            {/* Headline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">
                  Main Headline (Line 1)
                </label>
                <input
                  type="text"
                  value={data.hero.headline.line1}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        headline: { ...data.hero.headline, line1: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-teal-500 outline-hidden font-bold"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">
                  Highlighted Gradient Word
                </label>
                <input
                  type="text"
                  value={data.hero.headline.highlight}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        headline: { ...data.hero.headline, highlight: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-teal-400 focus:border-teal-500 outline-hidden font-bold"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">
                Sub-Headline
              </label>
              <input
                type="text"
                value={data.hero.subhead}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, subhead: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-teal-500 outline-hidden"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">
                Main Hero Description
              </label>
              <textarea
                rows={3}
                value={data.hero.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:border-teal-500 outline-hidden leading-relaxed"
              />
            </div>
          </div>

          {/* Dual Feature Cards & CTA Buttons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="h-4 w-4 text-teal-400" />
                <span>Dual Feature Mini-Cards</span>
              </h3>

              {/* Card 1 */}
              <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <span className="text-[10px] font-bold uppercase text-teal-400">Card 1</span>
                <input
                  type="text"
                  value={data.hero.featureCards[0]?.title || ""}
                  onChange={(e) => {
                    const cards = [...data.hero.featureCards] as [any, any];
                    cards[0] = { ...cards[0], title: e.target.value };
                    setData({ ...data, hero: { ...data.hero, featureCards: cards } });
                  }}
                  placeholder="Card 1 Title"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  value={data.hero.featureCards[0]?.desc || ""}
                  onChange={(e) => {
                    const cards = [...data.hero.featureCards] as [any, any];
                    cards[0] = { ...cards[0], desc: e.target.value };
                    setData({ ...data, hero: { ...data.hero, featureCards: cards } });
                  }}
                  placeholder="Card 1 Description"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-400"
                />
              </div>

              {/* Card 2 */}
              <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <span className="text-[10px] font-bold uppercase text-emerald-400">Card 2</span>
                <input
                  type="text"
                  value={data.hero.featureCards[1]?.title || ""}
                  onChange={(e) => {
                    const cards = [...data.hero.featureCards] as [any, any];
                    cards[1] = { ...cards[1], title: e.target.value };
                    setData({ ...data, hero: { ...data.hero, featureCards: cards } });
                  }}
                  placeholder="Card 2 Title"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  value={data.hero.featureCards[1]?.desc || ""}
                  onChange={(e) => {
                    const cards = [...data.hero.featureCards] as [any, any];
                    cards[1] = { ...cards[1], desc: e.target.value };
                    setData({ ...data, hero: { ...data.hero, featureCards: cards } });
                  }}
                  placeholder="Card 2 Description"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-400"
                />
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-teal-400" />
                <span>Call to Action Buttons</span>
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1 block">Primary CTA Text</label>
                  <input
                    type="text"
                    value={data.hero.ctaButtons.primaryText}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          ctaButtons: { ...data.hero.ctaButtons, primaryText: e.target.value },
                        },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1 block">Primary CTA Link</label>
                  <input
                    type="text"
                    value={data.hero.ctaButtons.primaryHref}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          ctaButtons: { ...data.hero.ctaButtons, primaryHref: e.target.value },
                        },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1 block">WhatsApp Button Text</label>
                  <input
                    type="text"
                    value={data.hero.ctaButtons.whatsappText}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          ctaButtons: { ...data.hero.ctaButtons, whatsappText: e.target.value },
                        },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1 block">WhatsApp Phone Number</label>
                  <input
                    type="text"
                    value={data.hero.ctaButtons.whatsappPhone}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          ctaButtons: { ...data.hero.ctaButtons, whatsappPhone: e.target.value },
                        },
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">WhatsApp Default Message</label>
                <input
                  type="text"
                  value={data.hero.ctaButtons.whatsappMessage}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        ctaButtons: { ...data.hero.ctaButtons, whatsappMessage: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                />
              </div>
            </div>
          </div>

          {/* Hero Carousel Slides Editor */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Camera className="h-4 w-4 text-teal-400" />
                  <span>Interactive Hero Showcase Slides ({data.hero.slides.length})</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Manage the image slides that auto-rotate on the right side of the hero section.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const newSlide: HeroSlide = {
                    id: `slide-${Date.now()}`,
                    title: "New ID Showcase Slide",
                    category: "Credentials",
                    topBadge: "Custom Badge",
                    specPill: "Feature Highlight",
                    bottomSpec: "Detailed specification here",
                    hubTag: "GUWAHATI DIRECT",
                    imageSrc: "/images/idgen-hero-cards-showcase.jpg",
                    alt: "Custom ID Showcase",
                  };
                  setData({
                    ...data,
                    hero: { ...data.hero, slides: [...data.hero.slides, newSlide] },
                  });
                }}
                className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500 hover:text-slate-950 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Slide</span>
              </button>
            </div>

            <div className="space-y-4">
              {data.hero.slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className="p-4 bg-slate-950 border border-slate-800 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-4 items-start"
                >
                  {/* Slide Image Preview & Upload */}
                  <div className="lg:col-span-3 space-y-2">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                      <Image
                        src={slide.imageSrc}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <label className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-teal-400 cursor-pointer">
                      <UploadCloud className="h-3.5 w-3.5" />
                      <span>{uploadingField === `slide-${idx}` ? "Uploading..." : "Change Image"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleFileUpload(
                            e,
                            (url) => {
                              const updated = [...data.hero.slides];
                              updated[idx].imageSrc = url;
                              setData({ ...data, hero: { ...data.hero, slides: updated } });
                            },
                            `slide-${idx}`
                          )
                        }
                      />
                    </label>
                  </div>

                  {/* Slide Details */}
                  <div className="lg:col-span-9 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold text-teal-400 uppercase bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/40">
                        Slide #{idx + 1}
                      </span>
                      {data.hero.slides.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const updated = data.hero.slides.filter((_, i) => i !== idx);
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="text-red-400 hover:text-red-300 text-xs p-1"
                          title="Delete slide"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-0.5">Slide Title</label>
                        <input
                          type="text"
                          value={slide.title}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].title = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-0.5">Category</label>
                        <input
                          type="text"
                          value={slide.category}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].category = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-0.5">Top Left Badge</label>
                        <input
                          type="text"
                          value={slide.topBadge}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].topBadge = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-0.5">Top Right Pill</label>
                        <input
                          type="text"
                          value={slide.specPill}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].specPill = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-0.5">Bottom Hub Tag</label>
                        <input
                          type="text"
                          value={slide.hubTag}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].hubTag = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Bottom Spec Line</label>
                      <input
                        type="text"
                        value={slide.bottomSpec}
                        onChange={(e) => {
                          const updated = [...data.hero.slides];
                          updated[idx].bottomSpec = e.target.value;
                          setData({ ...data, hero: { ...data.hero, slides: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 2: PRODUCT CATALOG CAROUSEL ("Explore Our Complete Product Catalog")
          ============================================================ */}
      {activeTab === "productCatalog" && data.productCatalog && (
        <div className="space-y-6">
          {/* Section Headlines & CTA Button */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Package className="h-4 w-4 text-teal-400" />
              <span>Product Catalog Headlines &amp; CTA Button</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Eyebrow Badge</label>
                <input
                  type="text"
                  value={data.productCatalog.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      productCatalog: { ...data.productCatalog, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Headline Title</label>
                <input
                  type="text"
                  value={data.productCatalog.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      productCatalog: { ...data.productCatalog, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Subtitle / Description</label>
              <textarea
                rows={2}
                value={data.productCatalog.subtitle}
                onChange={(e) =>
                  setData({
                    ...data,
                    productCatalog: { ...data.productCatalog, subtitle: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Button Label</label>
                <input
                  type="text"
                  value={data.productCatalog.buttonText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      productCatalog: { ...data.productCatalog, buttonText: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Button Destination URL</label>
                <input
                  type="text"
                  value={data.productCatalog.buttonHref}
                  onChange={(e) =>
                    setData({
                      ...data,
                      productCatalog: { ...data.productCatalog, buttonHref: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>

          {/* Product Items List */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Boxes className="h-4 w-4 text-teal-400" />
                  <span>Product Catalog Showcase Items ({data.productCatalog.products.length})</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Manage the cards displayed in the rotating product carousel directly beneath the hero.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const newProduct: CityProductItem = {
                    id: `product-${Date.now()}`,
                    slug: "custom-product",
                    name: "New Product Item",
                    category: "holders",
                    categoryLabel: "Custom Category",
                    imageSrc: "/images/product-id-holders.jpg",
                    imageAlt: "Custom Product Item",
                    tag: "Direct Factory PMMA",
                    badge: "Direct Factory",
                    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-400/30",
                    shortDescription: "Custom product description goes here.",
                    spec: "Standard CR80 • Cleanroom Inspected",
                    highlights: ["High Optical Clarity", "Heavy Duty Construction"],
                  };
                  setData({
                    ...data,
                    productCatalog: {
                      ...data.productCatalog,
                      products: [...data.productCatalog.products, newProduct],
                    },
                  });
                }}
                className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500 hover:text-slate-950 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Product</span>
              </button>
            </div>

            <div className="space-y-4">
              {data.productCatalog.products.map((product, idx) => (
                <div
                  key={product.id || idx}
                  className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 relative group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-teal-500/10 text-teal-300 font-mono font-bold text-xs flex items-center justify-center border border-teal-500/20">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{product.name || "Untitled Product"}</h4>
                        <span className="text-[11px] text-teal-400 font-mono">{product.categoryLabel} · {product.category}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.productCatalog.products.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          productCatalog: { ...data.productCatalog, products: updated },
                        });
                      }}
                      className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
                      title="Delete Product"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Product Name</label>
                      <input
                        type="text"
                        value={product.name}
                        onChange={(e) => {
                          const updated = [...data.productCatalog.products];
                          updated[idx].name = e.target.value;
                          setData({
                            ...data,
                            productCatalog: { ...data.productCatalog, products: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Category (Slug / Filter)</label>
                      <input
                        type="text"
                        value={product.category}
                        onChange={(e) => {
                          const updated = [...data.productCatalog.products];
                          updated[idx].category = e.target.value;
                          setData({
                            ...data,
                            productCatalog: { ...data.productCatalog, products: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Category Label</label>
                      <input
                        type="text"
                        value={product.categoryLabel}
                        onChange={(e) => {
                          const updated = [...data.productCatalog.products];
                          updated[idx].categoryLabel = e.target.value;
                          setData({
                            ...data,
                            productCatalog: { ...data.productCatalog, products: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                  </div>

                  {/* Image & Alt */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400 block">Product Image</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={product.imageSrc}
                          onChange={(e) => {
                            const updated = [...data.productCatalog.products];
                            updated[idx].imageSrc = e.target.value;
                            setData({
                              ...data,
                              productCatalog: { ...data.productCatalog, products: updated },
                            });
                          }}
                          className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                        />
                        <label className="px-2.5 py-1 bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-300 text-xs font-bold rounded-lg border border-teal-500/30 cursor-pointer transition shrink-0 flex items-center gap-1">
                          <UploadCloud className="h-3.5 w-3.5" />
                          <span>{uploadingField === `prod-${idx}` ? "..." : "Upload"}</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleFileUpload(
                                e,
                                (url) => {
                                  const updated = [...data.productCatalog.products];
                                  updated[idx].imageSrc = url;
                                  setData({
                                    ...data,
                                    productCatalog: { ...data.productCatalog, products: updated },
                                  });
                                },
                                `prod-${idx}`
                              )
                            }
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Image Alt Text</label>
                      <input
                        type="text"
                        value={product.imageAlt || ""}
                        onChange={(e) => {
                          const updated = [...data.productCatalog.products];
                          updated[idx].imageAlt = e.target.value;
                          setData({
                            ...data,
                            productCatalog: { ...data.productCatalog, products: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                      />
                    </div>
                  </div>

                  {/* Badges, Tags & Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Corner Badge</label>
                      <input
                        type="text"
                        value={product.badge}
                        onChange={(e) => {
                          const updated = [...data.productCatalog.products];
                          updated[idx].badge = e.target.value;
                          setData({
                            ...data,
                            productCatalog: { ...data.productCatalog, products: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Material Tag (Top Right)</label>
                      <input
                        type="text"
                        value={product.tag}
                        onChange={(e) => {
                          const updated = [...data.productCatalog.products];
                          updated[idx].tag = e.target.value;
                          setData({
                            ...data,
                            productCatalog: { ...data.productCatalog, products: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Bottom Spec Pill</label>
                      <input
                        type="text"
                        value={product.spec}
                        onChange={(e) => {
                          const updated = [...data.productCatalog.products];
                          updated[idx].spec = e.target.value;
                          setData({
                            ...data,
                            productCatalog: { ...data.productCatalog, products: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-0.5">Short Description</label>
                    <textarea
                      rows={2}
                      value={product.shortDescription}
                      onChange={(e) => {
                        const updated = [...data.productCatalog.products];
                        updated[idx].shortDescription = e.target.value;
                        setData({
                          ...data,
                          productCatalog: { ...data.productCatalog, products: updated },
                        });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                    />
                  </div>

                  {/* Highlights */}
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1 font-semibold">
                      Key Highlights (comma-separated bullet points)
                    </label>
                    <input
                      type="text"
                      value={product.highlights?.join(", ") || ""}
                      onChange={(e) => {
                        const updated = [...data.productCatalog.products];
                        updated[idx].highlights = e.target.value.split(",").map((s) => s.trim());
                        setData({
                          ...data,
                          productCatalog: { ...data.productCatalog, products: updated },
                        });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-teal-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 3: TRUST & CLIENT LOGOS
          ============================================================ */}
      {activeTab === "trust" && (
        <div className="space-y-6">
          {/* Trust Header */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Building2 className="h-4 w-4 text-teal-400" />
              <span>Trust Section Headlines</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Eyebrow</label>
                <input
                  type="text"
                  value={data.trust.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      trust: { ...data.trust, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Ticker Eyebrow</label>
                <input
                  type="text"
                  value={data.trust.tickerEyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      trust: { ...data.trust, tickerEyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Section Title</label>
              <input
                type="text"
                value={data.trust.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    trust: { ...data.trust, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Subtitle</label>
              <input
                type="text"
                value={data.trust.subtitle}
                onChange={(e) =>
                  setData({
                    ...data,
                    trust: { ...data.trust, subtitle: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-teal-400"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Description</label>
              <textarea
                rows={2}
                value={data.trust.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    trust: { ...data.trust, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
              />
            </div>
          </div>

          {/* Institutional Client Logos List */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-teal-400" />
                  <span>Institutional Client Logos ({data.trust.clients.length})</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Manage the logos displayed in the auto-scrolling trust ticker.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const newClient: InstitutionalClientLogo = {
                    name: "New Institutional Client",
                    logo: "/images/clint logo/1.png",
                    location: "Guwahati, Assam",
                    tag: "Official Credentials",
                  };
                  setData({
                    ...data,
                    trust: { ...data.trust, clients: [...data.trust.clients, newClient] },
                  });
                }}
                className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500 hover:text-slate-950 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Client Logo</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {data.trust.clients.map((client, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-3 relative group"
                >
                  <button
                    type="button"
                    onClick={() => {
                      const updated = data.trust.clients.filter((_, i) => i !== idx);
                      setData({ ...data, trust: { ...data.trust, clients: updated } });
                    }}
                    className="absolute top-2 right-2 text-red-400 hover:text-red-300 p-1 opacity-60 group-hover:opacity-100"
                    title="Remove client"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>

                  <div className="relative h-16 w-full flex items-center justify-center bg-slate-900 rounded-lg p-2 border border-slate-800">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain p-1"
                      unoptimized
                    />
                  </div>

                  <label className="flex items-center justify-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300 hover:text-teal-400 cursor-pointer">
                    <UploadCloud className="h-3 w-3" />
                    <span>Change Logo</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleFileUpload(
                          e,
                          (url) => {
                            const updated = [...data.trust.clients];
                            updated[idx].logo = url;
                            setData({ ...data, trust: { ...data.trust, clients: updated } });
                          },
                          `client-${idx}`
                        )
                      }
                    />
                  </label>

                  <div className="space-y-1.5">
                    <input
                      type="text"
                      value={client.name}
                      onChange={(e) => {
                        const updated = [...data.trust.clients];
                        updated[idx].name = e.target.value;
                        setData({ ...data, trust: { ...data.trust, clients: updated } });
                      }}
                      placeholder="Organization Name"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white font-bold"
                    />
                    <input
                      type="text"
                      value={client.location}
                      onChange={(e) => {
                        const updated = [...data.trust.clients];
                        updated[idx].location = e.target.value;
                        setData({ ...data, trust: { ...data.trust, clients: updated } });
                      }}
                      placeholder="Location"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-400"
                    />
                    <input
                      type="text"
                      value={client.tag}
                      onChange={(e) => {
                        const updated = [...data.trust.clients];
                        updated[idx].tag = e.target.value;
                        setData({ ...data, trust: { ...data.trust, clients: updated } });
                      }}
                      placeholder="Service Tag (e.g. Student Smart Cards)"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-teal-400 font-medium"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Banner Callout */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Play className="h-4 w-4 text-teal-400" />
              <span>30–60s Workflow Video Callout Card</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Badge Eyebrow</label>
                <input
                  type="text"
                  value={data.trust.videoBanner.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      trust: {
                        ...data.trust,
                        videoBanner: { ...data.trust.videoBanner, eyebrow: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Button Text</label>
                <input
                  type="text"
                  value={data.trust.videoBanner.buttonText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      trust: {
                        ...data.trust,
                        videoBanner: { ...data.trust.videoBanner, buttonText: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Video Banner Title</label>
              <input
                type="text"
                value={data.trust.videoBanner.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    trust: {
                      ...data.trust,
                      videoBanner: { ...data.trust.videoBanner, title: e.target.value },
                    },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Video Banner Description</label>
              <textarea
                rows={2}
                value={data.trust.videoBanner.desc}
                onChange={(e) =>
                  setData({
                    ...data,
                    trust: {
                      ...data.trust,
                      videoBanner: { ...data.trust.videoBanner, desc: e.target.value },
                    },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
              />
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 4: OUR IDENTITY SERVICES ("Our Identity Services")
          ============================================================ */}
      {activeTab === "identityServices" && data.identityServices && (
        <div className="space-y-6">
          {/* Section Headlines & CTA Button */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="h-4 w-4 text-teal-400" />
              <span>Identity Services Headlines &amp; CTA Button</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Eyebrow Badge</label>
                <input
                  type="text"
                  value={data.identityServices.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      identityServices: { ...data.identityServices, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Headline Title</label>
                <input
                  type="text"
                  value={data.identityServices.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      identityServices: { ...data.identityServices, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Description</label>
              <textarea
                rows={2}
                value={data.identityServices.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    identityServices: { ...data.identityServices, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Button Label</label>
                <input
                  type="text"
                  value={data.identityServices.buttonText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      identityServices: { ...data.identityServices, buttonText: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Button Destination URL</label>
                <input
                  type="text"
                  value={data.identityServices.buttonHref}
                  onChange={(e) =>
                    setData({
                      ...data,
                      identityServices: { ...data.identityServices, buttonHref: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>

          {/* Service Items List */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-teal-400" />
                  <span>Identity Services Cards ({data.identityServices.services.length})</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Manage the institutional service cards displayed in the 3-per-row carousel.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const newService: ServiceCardItem = {
                    id: `srv-${Date.now()}`,
                    title: "New Identity Service",
                    slug: "new-service",
                    categoryLabel: "Specialized Service",
                    serviceCode: "SRV: IDG-NEW",
                    body: "Description of the specialized identification service.",
                    href: "/services/",
                    imageSrc: "/images/service-pvc-id-card-printing-v3.jpg",
                    imageAlt: "New Identity Service",
                    tag: "Direct Factory",
                    badge: "New",
                    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-400/30",
                    spec: "CR80 Solid Core • Factory Direct",
                    highlights: ["High Speed Delivery", "Quality Inspected"],
                  };
                  setData({
                    ...data,
                    identityServices: {
                      ...data.identityServices,
                      services: [...data.identityServices.services, newService],
                    },
                  });
                }}
                className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500 hover:text-slate-950 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Service</span>
              </button>
            </div>

            <div className="space-y-4">
              {data.identityServices.services.map((service, idx) => (
                <div
                  key={service.id || idx}
                  className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 relative group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-teal-500/10 text-teal-300 font-mono font-bold text-xs flex items-center justify-center border border-teal-500/20">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{service.title || "Untitled Service"}</h4>
                        <span className="text-[11px] text-teal-400 font-mono">{service.categoryLabel} · {service.serviceCode}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.identityServices.services.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          identityServices: { ...data.identityServices, services: updated },
                        });
                      }}
                      className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
                      title="Delete Service"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Service Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => {
                          const updated = [...data.identityServices.services];
                          updated[idx].title = e.target.value;
                          setData({
                            ...data,
                            identityServices: { ...data.identityServices, services: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Category Label</label>
                      <input
                        type="text"
                        value={service.categoryLabel}
                        onChange={(e) => {
                          const updated = [...data.identityServices.services];
                          updated[idx].categoryLabel = e.target.value;
                          setData({
                            ...data,
                            identityServices: { ...data.identityServices, services: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Service Code (Badge)</label>
                      <input
                        type="text"
                        value={service.serviceCode}
                        onChange={(e) => {
                          const updated = [...data.identityServices.services];
                          updated[idx].serviceCode = e.target.value;
                          setData({
                            ...data,
                            identityServices: { ...data.identityServices, services: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white font-mono"
                      />
                    </div>
                  </div>

                  {/* Image & Link */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400 block">Service Image</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={service.imageSrc}
                          onChange={(e) => {
                            const updated = [...data.identityServices.services];
                            updated[idx].imageSrc = e.target.value;
                            setData({
                              ...data,
                              identityServices: { ...data.identityServices, services: updated },
                            });
                          }}
                          className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                        />
                        <label className="px-2.5 py-1 bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-300 text-xs font-bold rounded-lg border border-teal-500/30 cursor-pointer transition shrink-0 flex items-center gap-1">
                          <UploadCloud className="h-3.5 w-3.5" />
                          <span>{uploadingField === `srv-${idx}` ? "..." : "Upload"}</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleFileUpload(
                                e,
                                (url) => {
                                  const updated = [...data.identityServices.services];
                                  updated[idx].imageSrc = url;
                                  setData({
                                    ...data,
                                    identityServices: { ...data.identityServices, services: updated },
                                  });
                                },
                                `srv-${idx}`
                              )
                            }
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Page Link (Href)</label>
                      <input
                        type="text"
                        value={service.href}
                        onChange={(e) => {
                          const updated = [...data.identityServices.services];
                          updated[idx].href = e.target.value;
                          setData({
                            ...data,
                            identityServices: { ...data.identityServices, services: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                  </div>

                  {/* Badges, Tags & Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Badge (e.g. Bestseller)</label>
                      <input
                        type="text"
                        value={service.badge}
                        onChange={(e) => {
                          const updated = [...data.identityServices.services];
                          updated[idx].badge = e.target.value;
                          setData({
                            ...data,
                            identityServices: { ...data.identityServices, services: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Tag (Top Right, e.g. 20 mm Satin)</label>
                      <input
                        type="text"
                        value={service.tag}
                        onChange={(e) => {
                          const updated = [...data.identityServices.services];
                          updated[idx].tag = e.target.value;
                          setData({
                            ...data,
                            identityServices: { ...data.identityServices, services: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-0.5">Bottom Spec Pill</label>
                      <input
                        type="text"
                        value={service.spec}
                        onChange={(e) => {
                          const updated = [...data.identityServices.services];
                          updated[idx].spec = e.target.value;
                          setData({
                            ...data,
                            identityServices: { ...data.identityServices, services: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-0.5">Body Description</label>
                    <textarea
                      rows={2}
                      value={service.body}
                      onChange={(e) => {
                        const updated = [...data.identityServices.services];
                        updated[idx].body = e.target.value;
                        setData({
                          ...data,
                          identityServices: { ...data.identityServices, services: updated },
                        });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                    />
                  </div>

                  {/* Highlights */}
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1 font-semibold">
                      Key Highlights (comma-separated bullet points)
                    </label>
                    <input
                      type="text"
                      value={service.highlights?.join(", ") || ""}
                      onChange={(e) => {
                        const updated = [...data.identityServices.services];
                        updated[idx].highlights = e.target.value.split(",").map((s) => s.trim());
                        setData({
                          ...data,
                          identityServices: { ...data.identityServices, services: updated },
                        });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-teal-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 5: MODULAR 4 SOLUTIONS
          ============================================================ */}
      {activeTab === "solutions" && (
        <div className="space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Boxes className="h-4 w-4 text-teal-400" />
              <span>Complete Identification Solutions (4 Modular Configurations)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Eyebrow</label>
                <input
                  type="text"
                  value={data.completeSolutions.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      completeSolutions: { ...data.completeSolutions, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Title</label>
                <input
                  type="text"
                  value={data.completeSolutions.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      completeSolutions: { ...data.completeSolutions, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Description</label>
              <textarea
                rows={2}
                value={data.completeSolutions.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    completeSolutions: { ...data.completeSolutions, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
              />
            </div>
          </div>

          {/* 4 Modular Configurations Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.completeSolutions.items.map((item, idx) => (
              <div key={item.num} className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500 text-slate-950 font-black text-xs">
                    {item.num}
                  </span>
                  <input
                    type="text"
                    value={item.tag}
                    onChange={(e) => {
                      const updated = [...data.completeSolutions.items];
                      updated[idx].tag = e.target.value;
                      setData({ ...data, completeSolutions: { ...data.completeSolutions, items: updated } });
                    }}
                    placeholder="Tag"
                    className="bg-slate-950 border border-slate-800 rounded-md px-2 py-0.5 text-[11px] text-teal-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Configuration Title</label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => {
                      const updated = [...data.completeSolutions.items];
                      updated[idx].title = e.target.value;
                      setData({ ...data, completeSolutions: { ...data.completeSolutions, items: updated } });
                    }}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white font-bold"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Description</label>
                  <textarea
                    rows={2}
                    value={item.desc}
                    onChange={(e) => {
                      const updated = [...data.completeSolutions.items];
                      updated[idx].desc = e.target.value;
                      setData({ ...data, completeSolutions: { ...data.completeSolutions, items: updated } });
                    }}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-0.5">Destination Link</label>
                  <input
                    type="text"
                    value={item.href}
                    onChange={(e) => {
                      const updated = [...data.completeSolutions.items];
                      updated[idx].href = e.target.value;
                      setData({ ...data, completeSolutions: { ...data.completeSolutions, items: updated } });
                    }}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-400 font-mono"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 4: IDGEN STUDIO WORKFLOW
          ============================================================ */}
      {activeTab === "studio" && (
        <div className="space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Cpu className="h-4 w-4 text-teal-400" />
              <span>IDGen Studio — Digital Identity Workflow</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Eyebrow</label>
                <input
                  type="text"
                  value={data.studio.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studio: { ...data.studio, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Section Title</label>
                <input
                  type="text"
                  value={data.studio.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studio: { ...data.studio, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Description</label>
              <textarea
                rows={2}
                value={data.studio.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    studio: { ...data.studio, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Slogan Quote</label>
                <input
                  type="text"
                  value={data.studio.slogan.quote}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studio: {
                        ...data.studio,
                        slogan: { ...data.studio.slogan, quote: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Slogan Badge Tag</label>
                <input
                  type="text"
                  value={data.studio.slogan.badge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studio: {
                        ...data.studio,
                        slogan: { ...data.studio.slogan, badge: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-teal-400"
                />
              </div>
            </div>
          </div>

          {/* 4 Studio Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.studio.pillars.map((pillar, idx) => (
              <div key={idx} className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
                <span className="text-[10px] font-bold text-teal-400 uppercase bg-teal-950 px-2 py-0.5 rounded border border-teal-800/40">
                  Studio Pillar #{idx + 1}
                </span>
                <input
                  type="text"
                  value={pillar.title}
                  onChange={(e) => {
                    const updated = [...data.studio.pillars];
                    updated[idx].title = e.target.value;
                    setData({ ...data, studio: { ...data.studio, pillars: updated } });
                  }}
                  placeholder="Pillar Title"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white font-bold"
                />
                <textarea
                  rows={2}
                  value={pillar.desc}
                  onChange={(e) => {
                    const updated = [...data.studio.pillars];
                    updated[idx].desc = e.target.value;
                    setData({ ...data, studio: { ...data.studio, pillars: updated } });
                  }}
                  placeholder="Pillar Description"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 5: WHY IDGEN & KPIS
          ============================================================ */}
      {activeTab === "whyIdgen" && (
        <div className="space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-teal-400" />
              <span>Why Organizations Choose IDGen</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Eyebrow</label>
                <input
                  type="text"
                  value={data.whyIdgen.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      whyIdgen: { ...data.whyIdgen, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Title</label>
                <input
                  type="text"
                  value={data.whyIdgen.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      whyIdgen: { ...data.whyIdgen, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Description</label>
              <textarea
                rows={2}
                value={data.whyIdgen.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    whyIdgen: { ...data.whyIdgen, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
              />
            </div>
          </div>

          {/* 6 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.whyIdgen.pillars.map((pillar, idx) => (
              <div key={pillar.num} className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono font-bold text-xs">
                  {pillar.num}
                </span>
                <input
                  type="text"
                  value={pillar.title}
                  onChange={(e) => {
                    const updated = [...data.whyIdgen.pillars];
                    updated[idx].title = e.target.value;
                    setData({ ...data, whyIdgen: { ...data.whyIdgen, pillars: updated } });
                  }}
                  placeholder="Pillar Title"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white font-bold"
                />
                <textarea
                  rows={2}
                  value={pillar.desc}
                  onChange={(e) => {
                    const updated = [...data.whyIdgen.pillars];
                    updated[idx].desc = e.target.value;
                    setData({ ...data, whyIdgen: { ...data.whyIdgen, pillars: updated } });
                  }}
                  placeholder="Pillar Description"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300"
                />
              </div>
            ))}
          </div>

          {/* IDGen at a Glance (4 KPIs) */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-teal-400" />
              <span>IDGen at a Glance (4 Metrics Cards)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.atAGlance.metrics.map((m, idx) => (
                <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                  <input
                    type="text"
                    value={m.highlight}
                    onChange={(e) => {
                      const updated = [...data.atAGlance.metrics];
                      updated[idx].highlight = e.target.value;
                      setData({ ...data, atAGlance: { ...data.atAGlance, metrics: updated } });
                    }}
                    placeholder="Highlight Badge"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-0.5 text-[10px] text-teal-400 uppercase font-bold"
                  />
                  <input
                    type="text"
                    value={m.metric}
                    onChange={(e) => {
                      const updated = [...data.atAGlance.metrics];
                      updated[idx].metric = e.target.value;
                      setData({ ...data, atAGlance: { ...data.atAGlance, metrics: updated } });
                    }}
                    placeholder="Main Metric Text"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white font-bold"
                  />
                  <textarea
                    rows={2}
                    value={m.label}
                    onChange={(e) => {
                      const updated = [...data.atAGlance.metrics];
                      updated[idx].label = e.target.value;
                      setData({ ...data, atAGlance: { ...data.atAGlance, metrics: updated } });
                    }}
                    placeholder="Metric Description"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 6: ASSAM & NORTHEAST HUB
          ============================================================ */}
      {activeTab === "regionalHub" && (
        <div className="space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-400" />
              <span>Serving Assam & Northeast India</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Eyebrow</label>
                <input
                  type="text"
                  value={data.regionalHub.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      regionalHub: { ...data.regionalHub, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Section Title</label>
                <input
                  type="text"
                  value={data.regionalHub.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      regionalHub: { ...data.regionalHub, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Description</label>
              <textarea
                rows={2}
                value={data.regionalHub.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    regionalHub: { ...data.regionalHub, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
              />
            </div>
          </div>

          {/* Priority Assam Cities List */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">
                  Priority Assam Service Cities ({data.regionalHub.priorityCities.length})
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Cities with fast direct links.</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const newCity: RegionalPriorityCity = { name: "New City", slug: "new-city" };
                  setData({
                    ...data,
                    regionalHub: {
                      ...data.regionalHub,
                      priorityCities: [...data.regionalHub.priorityCities, newCity],
                    },
                  });
                }}
                className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500 hover:text-slate-950 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add City</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {data.regionalHub.priorityCities.map((city, idx) => (
                <div key={idx} className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between gap-1.5">
                  <input
                    type="text"
                    value={city.name}
                    onChange={(e) => {
                      const updated = [...data.regionalHub.priorityCities];
                      updated[idx].name = e.target.value;
                      updated[idx].slug = e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                      setData({
                        ...data,
                        regionalHub: { ...data.regionalHub, priorityCities: updated },
                      });
                    }}
                    className="w-full bg-transparent text-xs text-white font-bold outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updated = data.regionalHub.priorityCities.filter((_, i) => i !== idx);
                      setData({
                        ...data,
                        regionalHub: { ...data.regionalHub, priorityCities: updated },
                      });
                    }}
                    className="text-red-400 hover:text-red-300 p-0.5"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 7: FREQUENTLY ASKED QUESTIONS
          ============================================================ */}
      {activeTab === "faq" && (
        <div className="space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-teal-400" />
              <span>Home Page FAQs</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Eyebrow</label>
                <input
                  type="text"
                  value={data.faq.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      faq: { ...data.faq, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Title</label>
                <input
                  type="text"
                  value={data.faq.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      faq: { ...data.faq, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Lede / Description</label>
              <textarea
                rows={2}
                value={data.faq.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    faq: { ...data.faq, lede: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
              />
            </div>
          </div>

          {/* FAQs List */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">
                Frequently Asked Questions ({data.faq.faqs.length})
              </h3>

              <button
                type="button"
                onClick={() => {
                  const newFaq: HomePageFaqItem = {
                    q: "New Question Title?",
                    a: "Detailed clear answer for this question.",
                  };
                  setData({
                    ...data,
                    faq: { ...data.faq, faqs: [...data.faq.faqs, newFaq] },
                  });
                }}
                className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500 hover:text-slate-950 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add FAQ</span>
              </button>
            </div>

            <div className="space-y-3">
              {data.faq.faqs.map((f, idx) => (
                <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 relative group">
                  <button
                    type="button"
                    onClick={() => {
                      const updated = data.faq.faqs.filter((_, i) => i !== idx);
                      setData({ ...data, faq: { ...data.faq, faqs: updated } });
                    }}
                    className="absolute top-3 right-3 text-red-400 hover:text-red-300 p-1"
                    title="Delete FAQ"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>

                  <span className="text-[10px] font-mono font-bold text-teal-400 uppercase bg-teal-950 px-2 py-0.5 rounded border border-teal-800/40">
                    Question #{idx + 1}
                  </span>

                  <input
                    type="text"
                    value={f.q}
                    onChange={(e) => {
                      const updated = [...data.faq.faqs];
                      updated[idx].q = e.target.value;
                      setData({ ...data, faq: { ...data.faq, faqs: updated } });
                    }}
                    placeholder="Question"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white font-bold"
                  />

                  <textarea
                    rows={2}
                    value={f.a}
                    onChange={(e) => {
                      const updated = [...data.faq.faqs];
                      updated[idx].a = e.target.value;
                      setData({ ...data, faq: { ...data.faq, faqs: updated } });
                    }}
                    placeholder="Answer"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 8: CLOSING CTA BANNER
          ============================================================ */}
      {activeTab === "closingCta" && (
        <div className="space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Flame className="h-4 w-4 text-teal-400" />
              <span>Ready to Build Your Identification System? (Bottom Banner)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Eyebrow</label>
                <input
                  type="text"
                  value={data.closingCta.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Main Title</label>
                <input
                  type="text"
                  value={data.closingCta.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Description</label>
              <textarea
                rows={2}
                value={data.closingCta.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    closingCta: { ...data.closingCta, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Note Label</label>
                <input
                  type="text"
                  value={data.closingCta.note.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: {
                        ...data.closingCta,
                        note: { ...data.closingCta.note, label: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Note Text</label>
                <input
                  type="text"
                  value={data.closingCta.note.text}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: {
                        ...data.closingCta,
                        note: { ...data.closingCta.note, text: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Quote Button Text</label>
                <input
                  type="text"
                  value={data.closingCta.ctaButtons.primaryText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: {
                        ...data.closingCta,
                        ctaButtons: {
                          ...data.closingCta.ctaButtons,
                          primaryText: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">WhatsApp Button Text</label>
                <input
                  type="text"
                  value={data.closingCta.ctaButtons.whatsappText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: {
                        ...data.closingCta,
                        ctaButtons: {
                          ...data.closingCta.ctaButtons,
                          whatsappText: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Contact Button Text</label>
                <input
                  type="text"
                  value={data.closingCta.ctaButtons.secondaryText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: {
                        ...data.closingCta,
                        ctaButtons: {
                          ...data.closingCta.ctaButtons,
                          secondaryText: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 9: SEO & METADATA
          ============================================================ */}
      {activeTab === "metadata" && (
        <div className="space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Globe className="h-4 w-4 text-teal-400" />
              <span>Home Page Meta Title, Description & Keywords</span>
            </h2>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Page Title (SEO)</label>
              <input
                type="text"
                value={data.metadata.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    metadata: { ...data.metadata, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-bold"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Meta Description</label>
              <textarea
                rows={3}
                value={data.metadata.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    metadata: { ...data.metadata, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Keywords (comma separated)</label>
              <input
                type="text"
                value={data.metadata.keywords.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    metadata: {
                      ...data.metadata,
                      keywords: e.target.value.split(",").map((k) => k.trim()).filter(Boolean),
                    },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300"
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Save Bar */}
      <div className="sticky bottom-6 z-30 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Editing active section: <strong className="text-white capitalize">{activeTab}</strong></span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs hover:text-white transition flex items-center gap-1.5"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>Preview Live</span>
          </Link>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 shadow-lg shadow-teal-500/20 transition flex items-center gap-2 disabled:opacity-50"
          >
            {saving ? (
              <>
                <div className="h-3.5 w-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                <span>Save All Changes</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminHomePageEditor() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto p-12 text-center text-slate-400 flex items-center justify-center gap-3">
          <div className="h-6 w-6 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-semibold">Loading IDGen Dynamic Home Page Controls...</span>
        </div>
      }
    >
      <AdminHomePageContent />
    </Suspense>
  );
}

