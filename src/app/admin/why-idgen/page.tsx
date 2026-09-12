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
  Award,
  Lock,
  Workflow,
  Target,
  ClipboardCheck,
  Printer,
  Wrench,
  Truck,
  Quote,
} from "lucide-react";
import type {
  DynamicWhyIdgenData,
  WhyIdgenHero,
  WhyIdgenExperience2014,
  WhyIdgenRegional,
  WhyIdgenRegionalState,
  WhyIdgenJourney,
  WhyIdgenMilestone,
  WhyIdgenSectorsAndTrust,
  WhyIdgenSector,
  WhyIdgenPillars,
  WhyIdgenPillarItem,
  WhyIdgenDataSecurity,
  WhyIdgenEcosystem,
  WhyIdgenEcosystemProduct,
  WhyIdgenProjectConfig,
  WhyIdgenProductionApproach,
  WhyIdgenProductionStep,
  WhyIdgenQualityCheckpoint,
  WhyIdgenInstitutionalScale,
  WhyIdgenFaqs,
  WhyIdgenFaqItem,
  WhyIdgenClosingCta,
  WhyIdgenMetadata,
} from "@/lib/dynamic-why-idgen-types";

function AdminWhyIdgenContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicWhyIdgenData | null>(null);
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
    fetchWhyIdgenData();
  }, []);

  const fetchWhyIdgenData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/why-idgen");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Why IDGen data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error loading Why IDGen data");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (sectionKey?: keyof DynamicWhyIdgenData) => {
    if (!data) return;
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const payload = sectionKey
        ? { section: sectionKey, sectionData: data[sectionKey] }
        : { data };

      const res = await fetch("/api/admin/why-idgen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess(json.message || "Why IDGen changes saved and published live!");
        if (json.data) {
          setData(json.data);
        }
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
    if (
      !confirm(
        "Are you sure you want to restore the entire Why IDGen page to default content? All custom edits will be reverted."
      )
    ) {
      return;
    }

    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/why-idgen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess("Why IDGen page reset to default template successfully!");
        if (json.data) {
          setData(json.data);
        }
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

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    onUploaded: (url: string) => void,
    fieldId: string
  ) => {
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
        onUploaded(json.url);
        setSaveSuccess(`Uploaded ${file.name} successfully! Remember to Save.`);
        setTimeout(() => setSaveSuccess(null), 3000);
      } else {
        setSaveError(json.error || "Failed to upload file");
      }
    } catch (err: any) {
      setSaveError(err.message || "Error uploading image");
    } finally {
      setUploadingField(null);
    }
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[500px]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-9 w-9 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-slate-400 font-medium">Loading Why IDGen CMS Engine...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8">
        <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-800/60 text-rose-300">
          <p className="font-bold">Error loading Why IDGen data.</p>
          <button
            onClick={fetchWhyIdgenData}
            className="mt-3 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold"
          >
            Retry Loading
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "hero", label: "Point 1: Hero Section", icon: Sparkles },
    { id: "experience2014", label: "Point 2: Experience Since 2014", icon: Award },
    { id: "regional", label: "Point 3: Regional Hub & 8 States", icon: MapPin },
    { id: "journey", label: "Point 4: Our Journey Milestones", icon: Workflow },
    { id: "sectorsAndTrust", label: "Point 5: Sectors Served & Trust", icon: Building2 },
    { id: "pillars", label: "Point 6: 7 Core Pillars Carousel", icon: Target },
    { id: "dataSecurity", label: "Point 7: Data Confidentiality & Studio", icon: Lock },
    { id: "ecosystem", label: "Point 8: Connected Products Chain", icon: Package },
    { id: "productionApproach", label: "Point 9: 9-Step Production Approach", icon: ClipboardCheck },
    { id: "institutionalScale", label: "Point 10: Scale, Disciplines & Commitments", icon: ShieldCheck },
    { id: "faqs", label: "Point 11: Institutional FAQs", icon: HelpCircle },
    { id: "closingCta", label: "Point 12: Closing Quote & CTAs", icon: Flame },
    { id: "metadata", label: "Point 13: SEO & Meta Tags", icon: Globe },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Point-by-Point Dynamic CMS
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
            Why IDGen Page CMS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage every section, image, milestone, pillar, state card, quality checkpoint, and CTA of the Why IDGen page.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <Link
            href="/why-idgen/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-2 border border-slate-700 transition"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>View Live Page</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </Link>

          <button
            onClick={handleReset}
            disabled={saving}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition"
            title="Restore default page contents"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={() => handleSave()}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 text-xs font-black flex items-center gap-2 shadow-lg shadow-teal-500/20 transition active:scale-95 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Publishing..." : "Publish Entire Page"}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold flex items-center gap-2.5 animate-fadeIn">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>{saveSuccess}</span>
        </div>
      )}
      {saveError && (
        <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs font-semibold flex items-center gap-2.5 animate-fadeIn">
          <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Point-by-Point Tabs Nav */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 rounded-2xl text-left flex flex-col justify-between transition-all border ${
                isActive
                  ? "bg-teal-500/15 border-teal-500/50 text-teal-300 shadow-md shadow-teal-500/10"
                  : "bg-slate-900/70 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`h-4 w-4 ${isActive ? "text-teal-400" : "text-slate-500"}`} />
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />}
              </div>
              <span className="text-[11px] font-bold leading-tight line-clamp-2">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Point Editor Container */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8">
        {/* =========================================================================
            POINT 1: HERO SECTION
           ========================================================================= */}
        {activeTab === "hero" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 1
                </span>
                <h2 className="text-lg font-black text-white">Hero Section &amp; Showcase Visuals</h2>
              </div>
              <button
                onClick={() => handleSave("hero")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Hero Section</span>
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Eyebrow Badge Text
                </label>
                <input
                  type="text"
                  value={data.hero.badge}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, badge: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Heading Prefix
                </label>
                <input
                  type="text"
                  value={data.hero.headingPrefix}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, headingPrefix: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Heading Highlight (Gradient Text)
                </label>
                <input
                  type="text"
                  value={data.hero.headingHighlight}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, headingHighlight: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500 font-medium"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Subheading Under Title
                </label>
                <input
                  type="text"
                  value={data.hero.subheading}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, subheading: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500 font-medium"
                />
              </div>

              {/* 3 Paragraphs */}
              <div className="sm:col-span-2 space-y-3">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Description Paragraphs
                </label>
                {data.hero.paragraphs.map((para, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">
                      Paragraph {idx + 1}
                    </span>
                    <textarea
                      rows={3}
                      value={para}
                      onChange={(e) => {
                        const newParas = [...data.hero.paragraphs];
                        newParas[idx] = e.target.value;
                        setData({ ...data, hero: { ...data.hero, paragraphs: newParas } });
                      }}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-teal-500 font-medium leading-relaxed"
                    />
                  </div>
                ))}
              </div>

              {/* Approach Pill & Turnaround */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Approach Pill Label
                </label>
                <input
                  type="text"
                  value={data.hero.approachPillLabel}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, approachPillLabel: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Approach Pill Action
                </label>
                <input
                  type="text"
                  value={data.hero.approachPillAction}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, approachPillAction: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Quick Pill Label
                </label>
                <input
                  type="text"
                  value={data.hero.quickPillLabel}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, quickPillLabel: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Quick Pill Value
                </label>
                <input
                  type="text"
                  value={data.hero.quickPillValue}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, quickPillValue: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* CTAs */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Primary Button Text
                </label>
                <input
                  type="text"
                  value={data.hero.primaryCtaText}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, primaryCtaText: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Primary Button Link
                </label>
                <input
                  type="text"
                  value={data.hero.primaryCtaLink}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, primaryCtaLink: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Secondary Button Text
                </label>
                <input
                  type="text"
                  value={data.hero.secondaryCtaText}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, secondaryCtaText: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Secondary Button Link
                </label>
                <input
                  type="text"
                  value={data.hero.secondaryCtaLink}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, secondaryCtaLink: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Right Hero Image Card Details */}
              <div className="sm:col-span-2 pt-4 border-t border-slate-800">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400 mb-3">
                  Hero Showcase Card &amp; Image
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 items-start">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
                        Hero Image Path / URL
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={data.hero.heroImage}
                          onChange={(e) =>
                            setData({ ...data, hero: { ...data.hero, heroImage: e.target.value } })
                          }
                          className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500"
                        />
                        <label className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-bold rounded-xl cursor-pointer flex items-center gap-1 shrink-0 border border-slate-700">
                          <UploadCloud className="h-3.5 w-3.5" />
                          <span>{uploadingField === "heroImage" ? "..." : "Upload"}</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleFileUpload(
                                e,
                                (url) => setData({ ...data, hero: { ...data.hero, heroImage: url } }),
                                "heroImage"
                              )
                            }
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
                        Floating Card Tag
                      </label>
                      <input
                        type="text"
                        value={data.hero.floatingCardTag}
                        onChange={(e) =>
                          setData({ ...data, hero: { ...data.hero, floatingCardTag: e.target.value } })
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
                        Floating Location Badge
                      </label>
                      <input
                        type="text"
                        value={data.hero.floatingCardLocation}
                        onChange={(e) =>
                          setData({ ...data, hero: { ...data.hero, floatingCardLocation: e.target.value } })
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                    <Image
                      src={data.hero.heroImage || "/images/why-idgen-hero-branded.jpg"}
                      alt="Hero preview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                      <span className="text-[11px] font-bold text-white bg-slate-900/80 px-2 py-1 rounded-md backdrop-blur-sm">
                        {data.hero.floatingCardTag} • {data.hero.floatingCardLocation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            POINT 2: EXPERIENCE SINCE 2014
           ========================================================================= */}
        {activeTab === "experience2014" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 2
                </span>
                <h2 className="text-lg font-black text-white">Experience Since 2014 &amp; Project Involves</h2>
              </div>
              <button
                onClick={() => handleSave("experience2014")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Experience Section</span>
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Eyebrow
                </label>
                <input
                  type="text"
                  value={data.experience2014.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      experience2014: { ...data.experience2014, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Section Title
                </label>
                <input
                  type="text"
                  value={data.experience2014.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      experience2014: { ...data.experience2014, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500 font-medium"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Description Paragraph 1
                </label>
                <textarea
                  rows={2}
                  value={data.experience2014.desc1}
                  onChange={(e) =>
                    setData({
                      ...data,
                      experience2014: { ...data.experience2014, desc1: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-teal-500 font-medium leading-relaxed"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Description Paragraph 2
                </label>
                <textarea
                  rows={2}
                  value={data.experience2014.desc2}
                  onChange={(e) =>
                    setData({
                      ...data,
                      experience2014: { ...data.experience2014, desc2: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-teal-500 font-medium leading-relaxed"
                />
              </div>

              {/* Showcase Image & Badges */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Vertical Showcase Photo
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={data.experience2014.image}
                    onChange={(e) =>
                      setData({
                        ...data,
                        experience2014: { ...data.experience2014, image: e.target.value },
                      })
                    }
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500"
                  />
                  <label className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-bold rounded-xl cursor-pointer flex items-center gap-1 shrink-0 border border-slate-700">
                    <UploadCloud className="h-3.5 w-3.5" />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleFileUpload(
                          e,
                          (url) =>
                            setData({
                              ...data,
                              experience2014: { ...data.experience2014, image: url },
                            }),
                          "experienceImage"
                        )
                      }
                    />
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Badge Year</span>
                    <input
                      type="text"
                      value={data.experience2014.badgeYear}
                      onChange={(e) =>
                        setData({
                          ...data,
                          experience2014: { ...data.experience2014, badgeYear: e.target.value },
                        })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white mt-1"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Badge Footprint</span>
                    <input
                      type="text"
                      value={data.experience2014.badgeFootprint}
                      onChange={(e) =>
                        setData({
                          ...data,
                          experience2014: { ...data.experience2014, badgeFootprint: e.target.value },
                        })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Involves Items List */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {data.experience2014.involvesTitle} ({data.experience2014.involvesItems.length} items)
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...data.experience2014.involvesItems, "New Project Step"];
                      setData({
                        ...data,
                        experience2014: { ...data.experience2014, involvesItems: updated },
                      });
                    }}
                    className="text-[11px] font-bold text-teal-400 hover:underline flex items-center gap-1"
                  >
                    <Plus className="h-3 w-3" /> Add Item
                  </button>
                </div>

                <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
                  {data.experience2014.involvesItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const updated = [...data.experience2014.involvesItems];
                          updated[idx] = e.target.value;
                          setData({
                            ...data,
                            experience2014: { ...data.experience2014, involvesItems: updated },
                          });
                        }}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = data.experience2014.involvesItems.filter((_, i) => i !== idx);
                          setData({
                            ...data,
                            experience2014: { ...data.experience2014, involvesItems: updated },
                          });
                        }}
                        className="p-1.5 text-slate-500 hover:text-rose-400 transition"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            POINT 3: REGIONAL HUB & 8 STATES
           ========================================================================= */}
        {activeTab === "regional" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 3
                </span>
                <h2 className="text-lg font-black text-white">Regional Hub &amp; 8 Northeast States</h2>
              </div>
              <button
                onClick={() => handleSave("regional")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Regional Section</span>
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Eyebrow
                </label>
                <input
                  type="text"
                  value={data.regional.eyebrow}
                  onChange={(e) =>
                    setData({ ...data, regional: { ...data.regional, eyebrow: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Section Title
                </label>
                <input
                  type="text"
                  value={data.regional.title}
                  onChange={(e) =>
                    setData({ ...data, regional: { ...data.regional, title: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={data.regional.subtitle}
                  onChange={(e) =>
                    setData({ ...data, regional: { ...data.regional, subtitle: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              {/* Central Base Info */}
              <div className="sm:col-span-2 p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                  Guwahati Central Base Coordinates
                </h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={data.regional.centralBaseCity}
                      onChange={(e) =>
                        setData({
                          ...data,
                          regional: { ...data.regional, centralBaseCity: e.target.value },
                        })
                      }
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      value={data.regional.centralBaseState}
                      onChange={(e) =>
                        setData({
                          ...data,
                          regional: { ...data.regional, centralBaseState: e.target.value },
                        })
                      }
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
                      Badge
                    </label>
                    <input
                      type="text"
                      value={data.regional.centralBaseBadge}
                      onChange={(e) =>
                        setData({
                          ...data,
                          regional: { ...data.regional, centralBaseBadge: e.target.value },
                        })
                      }
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
                    Central Base Description
                  </label>
                  <textarea
                    rows={2}
                    value={data.regional.centralBaseDescription}
                    onChange={(e) =>
                      setData({
                        ...data,
                        regional: { ...data.regional, centralBaseDescription: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-200"
                  />
                </div>
              </div>

              {/* 8 States Matrix */}
              <div className="sm:col-span-2 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                    8 Northeast States Matrix ({data.regional.states.length} states)
                  </h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {data.regional.states.map((st, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-black text-teal-400">0{idx + 1}</span>
                        <input
                          type="text"
                          value={st.name}
                          onChange={(e) => {
                            const updated = [...data.regional.states];
                            updated[idx].name = e.target.value;
                            setData({ ...data, regional: { ...data.regional, states: updated } });
                          }}
                          className="font-bold text-xs bg-slate-900 border border-slate-700 px-2 py-1 rounded-lg text-white"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <span className="text-slate-500">Capital:</span>
                          <input
                            type="text"
                            value={st.capital}
                            onChange={(e) => {
                              const updated = [...data.regional.states];
                              updated[idx].capital = e.target.value;
                              setData({ ...data, regional: { ...data.regional, states: updated } });
                            }}
                            className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-200 mt-0.5"
                          />
                        </div>
                        <div>
                          <span className="text-slate-500">Transit:</span>
                          <input
                            type="text"
                            value={st.transit}
                            onChange={(e) => {
                              const updated = [...data.regional.states];
                              updated[idx].transit = e.target.value;
                              setData({ ...data, regional: { ...data.regional, states: updated } });
                            }}
                            className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-200 mt-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            POINT 4: OUR JOURNEY MILESTONES
           ========================================================================= */}
        {activeTab === "journey" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 4
                </span>
                <h2 className="text-lg font-black text-white">Our Journey Milestone Timeline</h2>
              </div>
              <button
                onClick={() => handleSave("journey")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Milestones</span>
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Eyebrow
                </label>
                <input
                  type="text"
                  value={data.journey.eyebrow}
                  onChange={(e) =>
                    setData({ ...data, journey: { ...data.journey, eyebrow: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Section Title
                </label>
                <input
                  type="text"
                  value={data.journey.title}
                  onChange={(e) =>
                    setData({ ...data, journey: { ...data.journey, title: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              {/* Milestones List */}
              <div className="sm:col-span-2 space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                    Timeline Milestones
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [
                        ...data.journey.milestones,
                        {
                          year: "2027",
                          label: "Next Chapter",
                          body: "Ongoing expansion of digital identification systems.",
                          badge: "Future",
                        },
                      ];
                      setData({ ...data, journey: { ...data.journey, milestones: updated } });
                    }}
                    className="text-[11px] font-bold text-teal-400 hover:underline flex items-center gap-1"
                  >
                    <Plus className="h-3 w-3" /> Add Milestone
                  </button>
                </div>

                <div className="space-y-3">
                  {data.journey.milestones.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={m.year}
                            onChange={(e) => {
                              const updated = [...data.journey.milestones];
                              updated[idx].year = e.target.value;
                              setData({
                                ...data,
                                journey: { ...data.journey, milestones: updated },
                              });
                            }}
                            className="w-28 bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-teal-400"
                            placeholder="Year"
                          />
                          <input
                            type="text"
                            value={m.label}
                            onChange={(e) => {
                              const updated = [...data.journey.milestones];
                              updated[idx].label = e.target.value;
                              setData({
                                ...data,
                                journey: { ...data.journey, milestones: updated },
                              });
                            }}
                            className="w-64 bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-white"
                            placeholder="Milestone Label"
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            const updated = data.journey.milestones.filter((_, i) => i !== idx);
                            setData({ ...data, journey: { ...data.journey, milestones: updated } });
                          }}
                          className="text-slate-500 hover:text-rose-400 p-1.5 transition"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <textarea
                        rows={2}
                        value={m.body}
                        onChange={(e) => {
                          const updated = [...data.journey.milestones];
                          updated[idx].body = e.target.value;
                          setData({ ...data, journey: { ...data.journey, milestones: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-300"
                        placeholder="Milestone description"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            POINT 5: SECTORS SERVED & TRUST EVIDENCE
           ========================================================================= */}
        {activeTab === "sectorsAndTrust" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 5
                </span>
                <h2 className="text-lg font-black text-white">Sectors Served &amp; Trust Philosophy</h2>
              </div>
              <button
                onClick={() => handleSave("sectorsAndTrust")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Sectors &amp; Trust</span>
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Eyebrow
                </label>
                <input
                  type="text"
                  value={data.sectorsAndTrust.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      sectorsAndTrust: { ...data.sectorsAndTrust, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Section Title
                </label>
                <input
                  type="text"
                  value={data.sectorsAndTrust.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      sectorsAndTrust: { ...data.sectorsAndTrust, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              {/* Trust Philosophy Quote */}
              <div className="sm:col-span-2 p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                  Trust Philosophy Quote
                </h3>
                <textarea
                  rows={2}
                  value={data.sectorsAndTrust.trustQuote}
                  onChange={(e) =>
                    setData({
                      ...data,
                      sectorsAndTrust: { ...data.sectorsAndTrust, trustQuote: e.target.value },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-white font-medium"
                />
              </div>

              {/* 5 Sectors List */}
              <div className="sm:col-span-2 space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                  5 Organizational Sectors
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {data.sectorsAndTrust.sectors.map((sec, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2"
                    >
                      <input
                        type="text"
                        value={sec.title}
                        onChange={(e) => {
                          const updated = [...data.sectorsAndTrust.sectors];
                          updated[idx].title = e.target.value;
                          setData({
                            ...data,
                            sectorsAndTrust: { ...data.sectorsAndTrust, sectors: updated },
                          });
                        }}
                        className="w-full font-bold text-xs bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-white"
                      />
                      <textarea
                        rows={2}
                        value={sec.description}
                        onChange={(e) => {
                          const updated = [...data.sectorsAndTrust.sectors];
                          updated[idx].description = e.target.value;
                          setData({
                            ...data,
                            sectorsAndTrust: { ...data.sectorsAndTrust, sectors: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-[11px] text-slate-300"
                      />
                      <input
                        type="text"
                        value={sec.tags.join(", ")}
                        onChange={(e) => {
                          const updated = [...data.sectorsAndTrust.sectors];
                          updated[idx].tags = e.target.value.split(",").map((t) => t.trim());
                          setData({
                            ...data,
                            sectorsAndTrust: { ...data.sectorsAndTrust, sectors: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-[10px] text-teal-400 font-mono"
                        placeholder="Comma-separated tags"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            POINT 6: 7 CORE PILLARS CAROUSEL
           ========================================================================= */}
        {activeTab === "pillars" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 6
                </span>
                <h2 className="text-lg font-black text-white">7 Core Pillars Carousel</h2>
              </div>
              <button
                onClick={() => handleSave("pillars")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Pillars</span>
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Eyebrow
                </label>
                <input
                  type="text"
                  value={data.pillars.eyebrow}
                  onChange={(e) =>
                    setData({ ...data, pillars: { ...data.pillars, eyebrow: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Section Title
                </label>
                <input
                  type="text"
                  value={data.pillars.title}
                  onChange={(e) =>
                    setData({ ...data, pillars: { ...data.pillars, title: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              {/* Carousel Slides */}
              <div className="sm:col-span-2 space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                    Carousel Slides ({data.pillars.carouselItems.length} slides)
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {data.pillars.carouselItems.map((pillar, idx) => (
                    <div
                      key={pillar.id || idx}
                      className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="relative h-32 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                          <Image
                            src={pillar.img || "/images/why-idgen-cards-showcase-branded.jpg"}
                            alt={pillar.title}
                            fill
                            className="object-cover"
                          />
                          <span className="absolute top-2 left-2 text-[10px] font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded-full border border-white/15">
                            {pillar.badge}
                          </span>
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-500 uppercase font-bold mb-1">
                            Title
                          </label>
                          <input
                            type="text"
                            value={pillar.title}
                            onChange={(e) => {
                              const updated = [...data.pillars.carouselItems];
                              updated[idx].title = e.target.value;
                              setData({
                                ...data,
                                pillars: { ...data.pillars, carouselItems: updated },
                              });
                            }}
                            className="w-full font-bold text-xs bg-slate-900 border border-slate-700 px-2.5 py-1.5 rounded-lg text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-500 uppercase font-bold mb-1">
                            Badge
                          </label>
                          <input
                            type="text"
                            value={pillar.badge}
                            onChange={(e) => {
                              const updated = [...data.pillars.carouselItems];
                              updated[idx].badge = e.target.value;
                              setData({
                                ...data,
                                pillars: { ...data.pillars, carouselItems: updated },
                              });
                            }}
                            className="w-full text-xs bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg text-teal-300"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-500 uppercase font-bold mb-1">
                            Body
                          </label>
                          <textarea
                            rows={3}
                            value={pillar.body}
                            onChange={(e) => {
                              const updated = [...data.pillars.carouselItems];
                              updated[idx].body = e.target.value;
                              setData({
                                ...data,
                                pillars: { ...data.pillars, carouselItems: updated },
                              });
                            }}
                            className="w-full text-xs bg-slate-900 border border-slate-700 p-2 rounded-lg text-slate-300"
                          />
                        </div>
                      </div>

                      {/* Image Upload Input */}
                      <div>
                        <label className="block text-[10px] text-slate-500 uppercase font-bold mb-1">
                          Slide Image
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={pillar.img}
                            onChange={(e) => {
                              const updated = [...data.pillars.carouselItems];
                              updated[idx].img = e.target.value;
                              setData({
                                ...data,
                                pillars: { ...data.pillars, carouselItems: updated },
                              });
                            }}
                            className="flex-1 text-[11px] bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-300"
                          />
                          <label className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-teal-300 text-[11px] font-bold rounded cursor-pointer border border-slate-700">
                            Upload
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) =>
                                handleFileUpload(
                                  e,
                                  (url) => {
                                    const updated = [...data.pillars.carouselItems];
                                    updated[idx].img = url;
                                    setData({
                                      ...data,
                                      pillars: { ...data.pillars, carouselItems: updated },
                                    });
                                  },
                                  `pillar-${idx}`
                                )
                              }
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            POINT 7: DATA CONFIDENTIALITY & STUDIO FLOW
           ========================================================================= */}
        {activeTab === "dataSecurity" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 7
                </span>
                <h2 className="text-lg font-black text-white">Data Confidentiality &amp; Studio Flow</h2>
              </div>
              <button
                onClick={() => handleSave("dataSecurity")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Data Security</span>
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Eyebrow
                </label>
                <input
                  type="text"
                  value={data.dataSecurity.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      dataSecurity: { ...data.dataSecurity, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Title
                </label>
                <input
                  type="text"
                  value={data.dataSecurity.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      dataSecurity: { ...data.dataSecurity, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Lead Statement
                </label>
                <textarea
                  rows={2}
                  value={data.dataSecurity.leadText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      dataSecurity: { ...data.dataSecurity, leadText: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200"
                />
              </div>

              {/* 12 Data Types */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                    Handled Data Types ({data.dataSecurity.dataTypes.length})
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...data.dataSecurity.dataTypes, "New Data Field"];
                      setData({
                        ...data,
                        dataSecurity: { ...data.dataSecurity, dataTypes: updated },
                      });
                    }}
                    className="text-[11px] font-bold text-teal-400 hover:underline flex items-center gap-1"
                  >
                    <Plus className="h-3 w-3" /> Add Type
                  </button>
                </div>

                <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
                  {data.dataSecurity.dataTypes.map((type, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={type}
                        onChange={(e) => {
                          const updated = [...data.dataSecurity.dataTypes];
                          updated[idx] = e.target.value;
                          setData({
                            ...data,
                            dataSecurity: { ...data.dataSecurity, dataTypes: updated },
                          });
                        }}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = data.dataSecurity.dataTypes.filter((_, i) => i !== idx);
                          setData({
                            ...data,
                            dataSecurity: { ...data.dataSecurity, dataTypes: updated },
                          });
                        }}
                        className="text-slate-500 hover:text-rose-400 p-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6 Responsible Practices */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                    Responsible Practices ({data.dataSecurity.responsiblePractices.length})
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [
                        ...data.dataSecurity.responsiblePractices,
                        "New Handling Principle",
                      ];
                      setData({
                        ...data,
                        dataSecurity: { ...data.dataSecurity, responsiblePractices: updated },
                      });
                    }}
                    className="text-[11px] font-bold text-teal-400 hover:underline flex items-center gap-1"
                  >
                    <Plus className="h-3 w-3" /> Add Practice
                  </button>
                </div>

                <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
                  {data.dataSecurity.responsiblePractices.map((practice, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={practice}
                        onChange={(e) => {
                          const updated = [...data.dataSecurity.responsiblePractices];
                          updated[idx] = e.target.value;
                          setData({
                            ...data,
                            dataSecurity: { ...data.dataSecurity, responsiblePractices: updated },
                          });
                        }}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = data.dataSecurity.responsiblePractices.filter(
                            (_, i) => i !== idx
                          );
                          setData({
                            ...data,
                            dataSecurity: { ...data.dataSecurity, responsiblePractices: updated },
                          });
                        }}
                        className="text-slate-500 hover:text-rose-400 p-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* IDGen Studio Callout */}
              <div className="sm:col-span-2 p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                  IDGen Studio Digital Flow Box
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] text-slate-500 uppercase font-bold mb-1">
                      Box Title
                    </label>
                    <input
                      type="text"
                      value={data.dataSecurity.studioCalloutTitle}
                      onChange={(e) =>
                        setData({
                          ...data,
                          dataSecurity: {
                            ...data.dataSecurity,
                            studioCalloutTitle: e.target.value,
                          },
                        })
                      }
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-500 uppercase font-bold mb-1">
                      Flow Steps (Comma Separated)
                    </label>
                    <input
                      type="text"
                      value={data.dataSecurity.studioSteps.join(", ")}
                      onChange={(e) =>
                        setData({
                          ...data,
                          dataSecurity: {
                            ...data.dataSecurity,
                            studioSteps: e.target.value.split(",").map((s) => s.trim()),
                          },
                        })
                      }
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-teal-300 font-mono"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] text-slate-500 uppercase font-bold mb-1">
                    Callout Body
                  </label>
                  <textarea
                    rows={2}
                    value={data.dataSecurity.studioCalloutBody}
                    onChange={(e) =>
                      setData({
                        ...data,
                        dataSecurity: { ...data.dataSecurity, studioCalloutBody: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-300"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            POINT 8: CONNECTED PRODUCTS CHAIN
           ========================================================================= */}
        {activeTab === "ecosystem" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 8
                </span>
                <h2 className="text-lg font-black text-white">One Identity Partner: Connected Products Chain</h2>
              </div>
              <button
                onClick={() => handleSave("ecosystem")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Ecosystem</span>
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Eyebrow
                </label>
                <input
                  type="text"
                  value={data.ecosystem.eyebrow}
                  onChange={(e) =>
                    setData({ ...data, ecosystem: { ...data.ecosystem, eyebrow: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Section Title
                </label>
                <input
                  type="text"
                  value={data.ecosystem.title}
                  onChange={(e) =>
                    setData({ ...data, ecosystem: { ...data.ecosystem, title: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              {/* 4 Connected Product Steps */}
              <div className="sm:col-span-2 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                  4 Connected Product Components
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {data.ecosystem.products.map((prod, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5"
                    >
                      <div className="relative h-28 w-full rounded-xl overflow-hidden bg-slate-900">
                        <Image src={prod.image} alt={prod.title} fill className="object-cover" />
                        <span className="absolute top-2 left-2 text-[10px] font-black text-slate-950 bg-teal-400 px-2 py-0.5 rounded-md font-mono">
                          Step {prod.step}
                        </span>
                      </div>
                      <input
                        type="text"
                        value={prod.title}
                        onChange={(e) => {
                          const updated = [...data.ecosystem.products];
                          updated[idx].title = e.target.value;
                          setData({ ...data, ecosystem: { ...data.ecosystem, products: updated } });
                        }}
                        className="w-full font-bold text-xs bg-slate-900 border border-slate-700 px-2.5 py-1.5 rounded-lg text-white"
                      />
                      <textarea
                        rows={2}
                        value={prod.description}
                        onChange={(e) => {
                          const updated = [...data.ecosystem.products];
                          updated[idx].description = e.target.value;
                          setData({ ...data, ecosystem: { ...data.ecosystem, products: updated } });
                        }}
                        className="w-full text-[11px] bg-slate-900 border border-slate-800 p-2 rounded-lg text-slate-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            POINT 9: 9-STEP PRODUCTION APPROACH & QUALITY CHECKPOINTS
           ========================================================================= */}
        {activeTab === "productionApproach" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 9
                </span>
                <h2 className="text-lg font-black text-white">9-Step Production Approach &amp; Quality Checkpoints</h2>
              </div>
              <button
                onClick={() => handleSave("productionApproach")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Production Flow</span>
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Eyebrow
                </label>
                <input
                  type="text"
                  value={data.productionApproach.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      productionApproach: { ...data.productionApproach, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Section Title
                </label>
                <input
                  type="text"
                  value={data.productionApproach.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      productionApproach: { ...data.productionApproach, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              {/* 9 Production Steps Carousel */}
              <div className="sm:col-span-2 space-y-3 pt-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                  9 Steps of Production Carousel ({data.productionApproach.steps.length} steps)
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {data.productionApproach.steps.map((step, idx) => (
                    <div
                      key={step.num || idx}
                      className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-black text-teal-400">
                          Step {step.num}
                        </span>
                        <input
                          type="text"
                          value={step.badge}
                          onChange={(e) => {
                            const updated = [...data.productionApproach.steps];
                            updated[idx].badge = e.target.value;
                            setData({
                              ...data,
                              productionApproach: { ...data.productionApproach, steps: updated },
                            });
                          }}
                          className="text-[10px] bg-slate-900 border border-slate-700 px-2 py-0.5 rounded text-teal-300 font-bold"
                        />
                      </div>
                      <input
                        type="text"
                        value={step.title}
                        onChange={(e) => {
                          const updated = [...data.productionApproach.steps];
                          updated[idx].title = e.target.value;
                          setData({
                            ...data,
                            productionApproach: { ...data.productionApproach, steps: updated },
                          });
                        }}
                        className="w-full font-bold text-xs bg-slate-900 border border-slate-700 px-2.5 py-1.5 rounded-lg text-white"
                      />
                      <textarea
                        rows={2}
                        value={step.body}
                        onChange={(e) => {
                          const updated = [...data.productionApproach.steps];
                          updated[idx].body = e.target.value;
                          setData({
                            ...data,
                            productionApproach: { ...data.productionApproach, steps: updated },
                          });
                        }}
                        className="w-full text-xs bg-slate-900 border border-slate-800 p-2 rounded-lg text-slate-300"
                      />
                      <div className="flex gap-2 items-center">
                        <input
                          type="text"
                          value={step.img}
                          onChange={(e) => {
                            const updated = [...data.productionApproach.steps];
                            updated[idx].img = e.target.value;
                            setData({
                              ...data,
                              productionApproach: { ...data.productionApproach, steps: updated },
                            });
                          }}
                          className="flex-1 text-[11px] bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-300"
                        />
                        <label className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-teal-300 text-[11px] font-bold rounded cursor-pointer border border-slate-700">
                          Upload
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleFileUpload(
                                e,
                                (url) => {
                                  const updated = [...data.productionApproach.steps];
                                  updated[idx].img = url;
                                  setData({
                                    ...data,
                                    productionApproach: { ...data.productionApproach, steps: updated },
                                  });
                                },
                                `step-${idx}`
                              )
                            }
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6 Quality Checkpoints */}
              <div className="sm:col-span-2 space-y-3 pt-4 border-t border-slate-800">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                  {data.productionApproach.checkpointsTitle}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {data.productionApproach.checkpoints.map((cp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2"
                    >
                      <input
                        type="text"
                        value={cp.title}
                        onChange={(e) => {
                          const updated = [...data.productionApproach.checkpoints];
                          updated[idx].title = e.target.value;
                          setData({
                            ...data,
                            productionApproach: {
                              ...data.productionApproach,
                              checkpoints: updated,
                            },
                          });
                        }}
                        className="w-full font-bold text-xs bg-slate-900 border border-slate-700 px-2.5 py-1.5 rounded-lg text-white"
                      />
                      <textarea
                        rows={2}
                        value={cp.body}
                        onChange={(e) => {
                          const updated = [...data.productionApproach.checkpoints];
                          updated[idx].body = e.target.value;
                          setData({
                            ...data,
                            productionApproach: {
                              ...data.productionApproach,
                              checkpoints: updated,
                            },
                          });
                        }}
                        className="w-full text-[11px] bg-slate-900 border border-slate-800 p-2 rounded-lg text-slate-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            POINT 10: INSTITUTIONAL SCALE, DISCIPLINES & COMMITMENTS
           ========================================================================= */}
        {activeTab === "institutionalScale" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 10
                </span>
                <h2 className="text-lg font-black text-white">Scale, Disciplines, Who We Serve &amp; Commitments</h2>
              </div>
              <button
                onClick={() => handleSave("institutionalScale")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Scale Section</span>
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Bulk Capability Title
                </label>
                <input
                  type="text"
                  value={data.institutionalScale.bulkTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      institutionalScale: {
                        ...data.institutionalScale,
                        bulkTitle: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Differentiator Title
                </label>
                <input
                  type="text"
                  value={data.institutionalScale.diffTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      institutionalScale: {
                        ...data.institutionalScale,
                        diffTitle: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              {/* 8 Commitments */}
              <div className="sm:col-span-2 space-y-3 pt-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                  Our 8 Operating Commitments
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {data.institutionalScale.commitments.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2"
                    >
                      <input
                        type="text"
                        value={c.label}
                        onChange={(e) => {
                          const updated = [...data.institutionalScale.commitments];
                          updated[idx].label = e.target.value;
                          setData({
                            ...data,
                            institutionalScale: {
                              ...data.institutionalScale,
                              commitments: updated,
                            },
                          });
                        }}
                        className="w-full font-bold text-xs bg-slate-900 border border-slate-700 px-2.5 py-1.5 rounded-lg text-white"
                      />
                      <textarea
                        rows={2}
                        value={c.body}
                        onChange={(e) => {
                          const updated = [...data.institutionalScale.commitments];
                          updated[idx].body = e.target.value;
                          setData({
                            ...data,
                            institutionalScale: {
                              ...data.institutionalScale,
                              commitments: updated,
                            },
                          });
                        }}
                        className="w-full text-[11px] bg-slate-900 border border-slate-800 p-2 rounded-lg text-slate-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Who We Serve List */}
              <div className="sm:col-span-2 p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                  Who We Serve Tags ({data.institutionalScale.whoWeServeList.length} items)
                </h3>
                <input
                  type="text"
                  value={data.institutionalScale.whoWeServeList.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      institutionalScale: {
                        ...data.institutionalScale,
                        whoWeServeList: e.target.value.split(",").map((s) => s.trim()),
                      },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-teal-300 font-medium leading-relaxed"
                  placeholder="Comma-separated list of organizations"
                />
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            POINT 11: INSTITUTIONAL FAQS
           ========================================================================= */}
        {activeTab === "faqs" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 11
                </span>
                <h2 className="text-lg font-black text-white">
                  Institutional FAQs ({data.faqs.items.length} Questions)
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const updated = [
                      ...data.faqs.items,
                      {
                        q: "New question here?",
                        a: "Detailed answer explaining IDGen capabilities and process.",
                      },
                    ];
                    setData({ ...data, faqs: { ...data.faqs, items: updated } });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-400 text-xs font-bold flex items-center gap-1 border border-slate-700 transition"
                >
                  <Plus className="h-3 w-3" /> Add FAQ
                </button>
                <button
                  onClick={() => handleSave("faqs")}
                  disabled={saving}
                  className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  <span>Save FAQs</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {data.faqs.items.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-black text-teal-400">
                      Q{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <input
                      type="text"
                      value={faq.q}
                      onChange={(e) => {
                        const updated = [...data.faqs.items];
                        updated[idx].q = e.target.value;
                        setData({ ...data, faqs: { ...data.faqs, items: updated } });
                      }}
                      className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs font-bold text-white focus:border-teal-500"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.faqs.items.filter((_, i) => i !== idx);
                        setData({ ...data, faqs: { ...data.faqs, items: updated } });
                      }}
                      className="p-2 text-slate-500 hover:text-rose-400 transition"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    value={faq.a}
                    onChange={(e) => {
                      const updated = [...data.faqs.items];
                      updated[idx].a = e.target.value;
                      setData({ ...data, faqs: { ...data.faqs, items: updated } });
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-300 focus:border-teal-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            POINT 12: CLOSING QUOTE & CTAS
           ========================================================================= */}
        {activeTab === "closingCta" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 12
                </span>
                <h2 className="text-lg font-black text-white">Closing Quote &amp; Action Banners</h2>
              </div>
              <button
                onClick={() => handleSave("closingCta")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Closing CTAs</span>
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2 p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                  &ldquo;IDGen in One Sentence&rdquo; Quote
                </h3>
                <textarea
                  rows={3}
                  value={data.closingCta.quoteText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, quoteText: e.target.value },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-white font-medium leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  CTA Heading
                </label>
                <input
                  type="text"
                  value={data.closingCta.ctaTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, ctaTitle: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  CTA Eyebrow
                </label>
                <input
                  type="text"
                  value={data.closingCta.ctaEyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, ctaEyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  CTA Subtitle
                </label>
                <textarea
                  rows={2}
                  value={data.closingCta.ctaSubtitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, ctaSubtitle: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Workflow Arrow Ribbon
                </label>
                <input
                  type="text"
                  value={data.closingCta.ctaWorkflow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, ctaWorkflow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-teal-300 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Primary CTA Text
                </label>
                <input
                  type="text"
                  value={data.closingCta.primaryCtaText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, primaryCtaText: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Primary CTA Link
                </label>
                <input
                  type="text"
                  value={data.closingCta.primaryCtaLink}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, primaryCtaLink: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            POINT 13: SEO & METADATA
           ========================================================================= */}
        {activeTab === "metadata" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Point 13
                </span>
                <h2 className="text-lg font-black text-white">SEO Title, Description &amp; Keywords</h2>
              </div>
              <button
                onClick={() => handleSave("metadata")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save SEO Settings</span>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Page Meta Title
                </label>
                <input
                  type="text"
                  value={data.metadata.metaTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      metadata: { ...data.metadata, metaTitle: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Page Meta Description
                </label>
                <textarea
                  rows={3}
                  value={data.metadata.metaDescription}
                  onChange={(e) =>
                    setData({
                      ...data,
                      metadata: { ...data.metadata, metaDescription: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  SEO Keywords (Comma Separated)
                </label>
                <input
                  type="text"
                  value={data.metadata.metaKeywords.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      metadata: {
                        ...data.metadata,
                        metaKeywords: e.target.value.split(",").map((k) => k.trim()),
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-teal-300 font-mono"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminWhyIdgenPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 flex items-center justify-center min-h-[400px]">
          <div className="h-8 w-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <AdminWhyIdgenContent />
    </Suspense>
  );
}
