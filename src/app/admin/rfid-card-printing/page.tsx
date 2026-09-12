"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Radio,
  Sparkles,
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Layers,
  Building2,
  Boxes,
  ShieldCheck,
  HelpCircle,
  Camera,
  Check,
  Globe,
  Workflow,
  UploadCloud,
  Tag,
  RefreshCw,
  Cpu,
  GraduationCap,
  Hospital,
  Users,
  MapPin,
  ClipboardList,
  Sliders,
  Settings2,
} from "lucide-react";
import type {
  DynamicRfidCardPrintingData,
  DynamicRfidHero,
  DynamicRfidOrgSuitability,
  DynamicRfidWhatIs,
  DynamicRfidSectorApplications,
  DynamicRfidSystemCompatibility,
  DynamicRfidCustomization,
  DynamicRfidStudentAndEmployee,
  DynamicRfidWorkflowProcess,
  DynamicRfidBulkOrders,
  DynamicRfidConfigurations,
  DynamicRfidExistingSystemsChecklist,
  DynamicRfidComparisonTable,
  DynamicRfidQualityVerification,
  DynamicRfidDigitalWorkflow,
  DynamicRfidWhyChooseIdgen,
  DynamicRfidEligibleSectors,
  DynamicRfidFaqs,
  DynamicRfidClosingCta,
  DynamicRfidRegionalDirectory,
  DynamicRfidCardPrintingMeta,
} from "@/lib/dynamic-rfid-card-printing-types";
import type { RfidSlide } from "@/components/rfid-card-printing/RfidHeroCarousel";

function AdminRfidCardPrintingContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicRfidCardPrintingData | null>(null);
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingSection, setSavingSection] = useState<string | null>(null);
  const [uploadingField, setUploadingField] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchPageData();
  }, []);

  const fetchPageData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/rfid-card-printing");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load RFID Card Printing data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error loading data");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (url: string) => void,
    fieldId?: string
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      if (fieldId) setUploadingField(fieldId);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();

      if (json.success && json.url) {
        callback(json.url);
        setSaveSuccess("Image uploaded successfully!");
        setTimeout(() => setSaveSuccess(null), 3000);
      } else {
        setSaveError(json.error || "Image upload failed");
        setTimeout(() => setSaveError(null), 4000);
      }
    } catch (err: any) {
      setSaveError(err.message || "Upload network failure");
      setTimeout(() => setSaveError(null), 4000);
    } finally {
      if (fieldId) setUploadingField(null);
    }
  };

  const saveWholePage = async () => {
    if (!data) return;
    try {
      setSaving(true);
      const res = await fetch("/api/admin/rfid-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const json = await res.json();
      if (json.success) {
        setSaveSuccess("RFID Card Printing page saved and published successfully!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to save page");
        setTimeout(() => setSaveError(null), 4000);
      }
    } catch (err: any) {
      setSaveError(err.message || "Save network error");
      setTimeout(() => setSaveError(null), 4000);
    } finally {
      setSaving(false);
    }
  };

  const saveSection = async (sectionName: keyof DynamicRfidCardPrintingData, sectionData: any) => {
    try {
      setSavingSection(sectionName);
      const res = await fetch("/api/admin/rfid-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: sectionName,
          sectionData,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSaveSuccess(`Section '${sectionName}' saved and published!`);
        setTimeout(() => setSaveSuccess(null), 3500);
      } else {
        setSaveError(json.error || `Failed to save ${sectionName}`);
        setTimeout(() => setSaveError(null), 4000);
      }
    } catch (err: any) {
      setSaveError(err.message || "Network error");
      setTimeout(() => setSaveError(null), 4000);
    } finally {
      setSavingSection(null);
    }
  };

  const handleReset = async () => {
    if (
      !window.confirm(
        "Are you sure you want to reset all RFID Card Printing content to original factory defaults? Any unsaved edits will be replaced."
      )
    ) {
      return;
    }

    try {
      setSaving(true);
      const res = await fetch("/api/admin/rfid-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
        setSaveSuccess("Page reset to factory defaults successfully!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to reset page");
        setTimeout(() => setSaveError(null), 4000);
      }
    } catch (err: any) {
      setSaveError(err.message || "Reset failed");
      setTimeout(() => setSaveError(null), 4000);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <RefreshCw className="h-8 w-8 animate-spin text-[#009fe3]" />
        <p className="text-sm font-semibold text-slate-400">Loading RFID Card Printing CMS...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <AlertCircle className="h-10 w-10 text-rose-500" />
        <p className="text-slate-300">Failed to load RFID Card Printing data</p>
        <button
          onClick={fetchPageData}
          className="rounded-xl bg-[#009fe3] px-4 py-2 text-sm font-bold text-white hover:bg-[#008bc9]"
        >
          Retry
        </button>
      </div>
    );
  }

  const tabs = [
    { id: "hero", label: "Hero & Slides", icon: Sparkles },
    { id: "orgSuitability", label: "Organizations", icon: Building2 },
    { id: "whatIsRfid", label: "What is RFID", icon: Cpu },
    { id: "sectorApplications", label: "Applications", icon: Radio },
    { id: "systemCompatibility", label: "Compatibility", icon: ShieldCheck },
    { id: "customization", label: "Customization", icon: Sliders },
    { id: "studentAndEmployee", label: "Student & Staff", icon: GraduationCap },
    { id: "workflowProcess", label: "Workflow Steps", icon: Workflow },
    { id: "bulkOrders", label: "Bulk Orders", icon: Boxes },
    { id: "configurations", label: "Configurations", icon: Layers },
    { id: "existingSystemsChecklist", label: "System Checklist", icon: ClipboardList },
    { id: "comparisonTable", label: "Comparison Table", icon: Settings2 },
    { id: "moreSections", label: "QA, FAQ & Hub", icon: HelpCircle },
    { id: "meta", label: "SEO Meta", icon: Globe },
  ];

  return (
    <div className="mx-auto max-w-7xl pb-20 pt-2 text-slate-100">
      {/* Header Bar */}
      <div className="sticky top-0 z-30 mb-8 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-[#09111e]/90 p-5 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#009fe3] to-cyan-400 text-white shadow-lg shadow-[#009fe3]/25">
            <Radio className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                RFID Card Printing CMS
              </h1>
              <span className="rounded-full bg-cyan-950 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-cyan-400 border border-cyan-800/60">
                Live Dynamic
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Customize RFID hero slides, sector use cases, compatibility checks, and workflow steps
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/rfid-card-printing/"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-3.5 py-2 text-xs font-bold text-slate-200 hover:border-cyan-400 hover:text-white"
          >
            <span>Live Page</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          <button
            onClick={handleReset}
            disabled={saving}
            className="inline-flex items-center gap-1.5 rounded-xl border border-rose-900/60 bg-rose-950/40 px-3.5 py-2 text-xs font-bold text-rose-300 hover:bg-rose-900/60 hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={saveWholePage}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#009fe3] to-cyan-500 px-5 py-2 text-xs font-extrabold text-white shadow-lg shadow-[#009fe3]/30 hover:opacity-95 disabled:opacity-50"
          >
            {saving ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            <span>Save Whole Page</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-950/70 p-4 text-sm font-semibold text-emerald-300 shadow-xl">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
          <span>{saveSuccess}</span>
        </div>
      )}
      {saveError && (
        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-rose-500/40 bg-rose-950/70 p-4 text-sm font-semibold text-rose-300 shadow-xl">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-400" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-slate-800/80 bg-[#09111e] p-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/30"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: HERO & SLIDES */}
      {/* ========================================================================= */}
      {activeTab === "hero" && (
        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Hero Header & Advisory Chain</h2>
                <p className="text-xs text-slate-400">Headlines, descriptions, and workflow steps</p>
              </div>
              <button
                onClick={() => saveSection("hero", data.hero)}
                disabled={savingSection === "hero"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
              >
                {savingSection === "hero" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Hero</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Top Eyebrow Badge</label>
                <input
                  type="text"
                  value={data.hero.badge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, badge: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Advisory Top Badge</label>
                <input
                  type="text"
                  value={data.hero.advisoryBadge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, advisoryBadge: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">H1 Heading (Primary)</label>
                <input
                  type="text"
                  value={data.hero.h1}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, h1: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">H1 Heading (Gradient Highlight)</label>
                <input
                  type="text"
                  value={data.hero.h1Gradient}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, h1Gradient: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">Description Paragraph</label>
                <textarea
                  rows={3}
                  value={data.hero.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, description: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">Advisory Title</label>
                <input
                  type="text"
                  value={data.hero.advisoryTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, advisoryTitle: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">
                  Advisory Workflow Steps (comma-separated)
                </label>
                <input
                  type="text"
                  value={data.hero.advisorySteps.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        advisorySteps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Primary CTA Label</label>
                <input
                  type="text"
                  value={data.hero.primaryCta.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        primaryCta: { ...data.hero.primaryCta, label: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Primary CTA Link</label>
                <input
                  type="text"
                  value={data.hero.primaryCta.href}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        primaryCta: { ...data.hero.primaryCta, href: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Secondary CTA Label</label>
                <input
                  type="text"
                  value={data.hero.secondaryCta.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        secondaryCta: { ...data.hero.secondaryCta, label: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Secondary CTA Link</label>
                <input
                  type="text"
                  value={data.hero.secondaryCta.href}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        secondaryCta: { ...data.hero.secondaryCta, href: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Hero Carousel Slides Editor with Direct Image Upload */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">
                  Interactive Hero Slides ({data.hero.slides.length})
                </h2>
                <p className="text-xs text-slate-400">
                  Upload images, customize badges, specifications, and hub tags
                </p>
              </div>
              <button
                onClick={() => {
                  const newSlide: RfidSlide = {
                    id: `rfid-slide-${Date.now()}`,
                    imageSrc: "/images/rfid-hero-slide-smart-access.jpg",
                    alt: "Custom RFID Card Specimen",
                    title: "New RFID Smart Solution",
                    category: "RFID Category",
                    topBadge: "Smart Contactless",
                    specPill: "Frequency / Chip",
                    bottomSpec: "Specimen Details",
                    hubTag: "GUWAHATI HUB",
                  };
                  setData({
                    ...data,
                    hero: {
                      ...data.hero,
                      slides: [...data.hero.slides, newSlide],
                    },
                  });
                }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#009fe3] bg-[#009fe3]/10 px-3.5 py-1.5 text-xs font-bold text-cyan-300 hover:bg-[#009fe3] hover:text-white"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Slide</span>
              </button>
            </div>

            <div className="space-y-6">
              {data.hero.slides.map((slide, idx) => (
                <div
                  key={slide.id || idx}
                  className="rounded-2xl border border-slate-800/90 bg-slate-900/80 p-5 shadow-lg space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-400">
                      <Radio className="h-4 w-4 text-[#009fe3]" />
                      <span>Slide #{idx + 1} &mdash; {slide.title}</span>
                    </span>
                    {data.hero.slides.length > 1 && (
                      <button
                        onClick={() => {
                          const updated = data.hero.slides.filter((_, i) => i !== idx);
                          setData({
                            ...data,
                            hero: { ...data.hero, slides: updated },
                          });
                        }}
                        className="rounded-lg p-1.5 text-slate-500 hover:bg-rose-950/60 hover:text-rose-400"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-12">
                    {/* Image Preview & Upload */}
                    <div className="sm:col-span-4 flex flex-col items-center gap-3">
                      <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl border-2 border-slate-700 bg-black/40">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={slide.imageSrc}
                          alt={slide.alt}
                          className="h-full w-full object-cover"
                        />
                        {uploadingField === `slide-${idx}` && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-xs">
                            <RefreshCw className="h-6 w-6 animate-spin text-[#009fe3]" />
                          </div>
                        )}
                      </div>

                      <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-cyan-950/40 px-3 py-1.5 text-[11px] font-bold text-cyan-300 hover:bg-cyan-900/60">
                        <UploadCloud className="h-3.5 w-3.5" />
                        <span>Upload Slide Image</span>
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
                                setData({
                                  ...data,
                                  hero: { ...data.hero, slides: updated },
                                });
                              },
                              `slide-${idx}`
                            )
                          }
                        />
                      </label>
                      <input
                        type="text"
                        placeholder="Image URL"
                        value={slide.imageSrc}
                        onChange={(e) => {
                          const updated = [...data.hero.slides];
                          updated[idx].imageSrc = e.target.value;
                          setData({
                            ...data,
                            hero: { ...data.hero, slides: updated },
                          });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-[11px] text-slate-300"
                      />
                    </div>

                    {/* Metadata Fields */}
                    <div className="sm:col-span-8 grid gap-3 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="text-[11px] font-bold text-slate-400">Slide Title</label>
                        <input
                          type="text"
                          value={slide.title}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].title = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-[#009fe3]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400">Top Badge</label>
                        <input
                          type="text"
                          value={slide.topBadge}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].topBadge = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-[#009fe3]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400">Spec Pill Badge</label>
                        <input
                          type="text"
                          value={slide.specPill}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].specPill = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-[#009fe3]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-[11px] font-bold text-slate-400">Bottom Spec Bar</label>
                        <input
                          type="text"
                          value={slide.bottomSpec}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].bottomSpec = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-[#009fe3]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400">Hub / Status Tag</label>
                        <input
                          type="text"
                          value={slide.hubTag}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].hubTag = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-[#009fe3]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400">Alt Description</label>
                        <input
                          type="text"
                          value={slide.alt}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].alt = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-[#009fe3]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: ORGANIZATIONAL SUITABILITY */}
      {/* ========================================================================= */}
      {activeTab === "orgSuitability" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Organizational Suitability</h2>
              <p className="text-xs text-slate-400">Supported organizations and institutions</p>
            </div>
            <button
              onClick={() => saveSection("orgSuitability", data.orgSuitability)}
              disabled={savingSection === "orgSuitability"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "orgSuitability" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Organizations</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.orgSuitability.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    orgSuitability: { ...data.orgSuitability, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Subhead Label</label>
              <input
                type="text"
                value={data.orgSuitability.subhead}
                onChange={(e) =>
                  setData({
                    ...data,
                    orgSuitability: { ...data.orgSuitability, subhead: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Main Section Title</label>
              <input
                type="text"
                value={data.orgSuitability.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    orgSuitability: { ...data.orgSuitability, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-300">
                  Eligible Organization Types ({data.orgSuitability.items.length})
                </label>
                <button
                  onClick={() =>
                    setData({
                      ...data,
                      orgSuitability: {
                        ...data.orgSuitability,
                        items: [...data.orgSuitability.items, "New Organization Type"],
                      },
                    })
                  }
                  className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/40 px-2 py-1 text-[11px] font-bold text-cyan-300 hover:bg-cyan-900/40"
                >
                  <Plus className="h-3 w-3" />
                  <span>Add Item</span>
                </button>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {data.orgSuitability.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const updated = [...data.orgSuitability.items];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          orgSuitability: { ...data.orgSuitability, items: updated },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                    />
                    <button
                      onClick={() => {
                        const updated = data.orgSuitability.items.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          orgSuitability: { ...data.orgSuitability, items: updated },
                        });
                      }}
                      className="p-1 text-slate-500 hover:text-rose-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: WHAT IS RFID & DUAL IDENTIFICATION */}
      {/* ========================================================================= */}
      {activeTab === "whatIsRfid" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">What is an RFID ID Card?</h2>
              <p className="text-xs text-slate-400">
                Technology concept, reader interaction image, and card composition
              </p>
            </div>
            <button
              onClick={() => saveSection("whatIsRfid", data.whatIsRfid)}
              disabled={savingSection === "whatIsRfid"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "whatIsRfid" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Section</span>
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-12">
            {/* Left Image Setting */}
            <div className="sm:col-span-5 flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Reader Interaction Specimen Image
              </h3>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-700 bg-black/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.whatIsRfid.image.src}
                  alt={data.whatIsRfid.image.alt}
                  className="h-full w-full object-cover"
                />
                {uploadingField === "whatIsRfid" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-xs">
                    <RefreshCw className="h-6 w-6 animate-spin text-[#009fe3]" />
                  </div>
                )}
              </div>

              <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-cyan-950/40 px-3 py-1.5 text-[11px] font-bold text-cyan-300 hover:bg-cyan-900/60">
                <UploadCloud className="h-3.5 w-3.5" />
                <span>Upload New Specimen</span>
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
                          whatIsRfid: {
                            ...data.whatIsRfid,
                            image: { ...data.whatIsRfid.image, src: url },
                          },
                        }),
                      "whatIsRfid"
                    )
                  }
                />
              </label>

              <div className="w-full space-y-2">
                <div>
                  <label className="text-[10px] font-bold text-slate-400">Image Badge</label>
                  <input
                    type="text"
                    value={data.whatIsRfid.image.badge}
                    onChange={(e) =>
                      setData({
                        ...data,
                        whatIsRfid: {
                          ...data.whatIsRfid,
                          image: { ...data.whatIsRfid.image, badge: e.target.value },
                        },
                      })
                    }
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400">Caption Title</label>
                  <input
                    type="text"
                    value={data.whatIsRfid.image.caption}
                    onChange={(e) =>
                      setData({
                        ...data,
                        whatIsRfid: {
                          ...data.whatIsRfid,
                          image: { ...data.whatIsRfid.image, caption: e.target.value },
                        },
                      })
                    }
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400">Status Badge</label>
                  <input
                    type="text"
                    value={data.whatIsRfid.image.statusBadge}
                    onChange={(e) =>
                      setData({
                        ...data,
                        whatIsRfid: {
                          ...data.whatIsRfid,
                          image: { ...data.whatIsRfid.image, statusBadge: e.target.value },
                        },
                      })
                    }
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                  />
                </div>
              </div>
            </div>

            {/* Right Text Fields */}
            <div className="sm:col-span-7 space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold text-slate-300">Eyebrow</label>
                  <input
                    type="text"
                    value={data.whatIsRfid.eyebrow}
                    onChange={(e) =>
                      setData({
                        ...data,
                        whatIsRfid: { ...data.whatIsRfid, eyebrow: e.target.value },
                      })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300">Title</label>
                  <input
                    type="text"
                    value={data.whatIsRfid.title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        whatIsRfid: { ...data.whatIsRfid, title: e.target.value },
                      })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Description</label>
                <textarea
                  rows={2}
                  value={data.whatIsRfid.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      whatIsRfid: { ...data.whatIsRfid, description: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>

              {/* Dual Purpose Boxes */}
              <div className="grid gap-3 sm:grid-cols-2">
                {data.whatIsRfid.purposes.map((p, pIdx) => (
                  <div key={pIdx} className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-2">
                    <input
                      type="text"
                      value={p.purposeNumber}
                      onChange={(e) => {
                        const updated = [...data.whatIsRfid.purposes];
                        updated[pIdx].purposeNumber = e.target.value;
                        setData({ ...data, whatIsRfid: { ...data.whatIsRfid, purposes: updated } });
                      }}
                      className="w-full text-[11px] font-black uppercase text-[#009fe3] bg-transparent border-b border-slate-800 pb-1"
                    />
                    <input
                      type="text"
                      value={p.title}
                      onChange={(e) => {
                        const updated = [...data.whatIsRfid.purposes];
                        updated[pIdx].title = e.target.value;
                        setData({ ...data, whatIsRfid: { ...data.whatIsRfid, purposes: updated } });
                      }}
                      className="w-full text-xs font-bold text-white bg-transparent"
                    />
                    <textarea
                      rows={2}
                      value={p.desc}
                      onChange={(e) => {
                        const updated = [...data.whatIsRfid.purposes];
                        updated[pIdx].desc = e.target.value;
                        setData({ ...data, whatIsRfid: { ...data.whatIsRfid, purposes: updated } });
                      }}
                      className="w-full text-[11px] text-slate-400 bg-transparent"
                    />
                  </div>
                ))}
              </div>

              {/* Typical Card Items */}
              <div>
                <label className="text-xs font-bold text-slate-300">
                  Typical Card Items (comma-separated)
                </label>
                <textarea
                  rows={2}
                  value={data.whatIsRfid.typicalCardItems.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      whatIsRfid: {
                        ...data.whatIsRfid,
                        typicalCardItems: e.target.value
                          .split(",")
                          .map((s) => s.trim())
                          .filter(Boolean),
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Footnote Text</label>
                <input
                  type="text"
                  value={data.whatIsRfid.footnote}
                  onChange={(e) =>
                    setData({
                      ...data,
                      whatIsRfid: { ...data.whatIsRfid, footnote: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: SECTOR APPLICATIONS */}
      {/* ========================================================================= */}
      {activeTab === "sectorApplications" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">RFID Card Applications (Sectors)</h2>
              <p className="text-xs text-slate-400">5 Sector cards and crucial warning disclaimer</p>
            </div>
            <button
              onClick={() => saveSection("sectorApplications", data.sectorApplications)}
              disabled={savingSection === "sectorApplications"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "sectorApplications" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Sectors</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.sectorApplications.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    sectorApplications: { ...data.sectorApplications, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.sectorApplications.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    sectorApplications: { ...data.sectorApplications, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Lede</label>
              <input
                type="text"
                value={data.sectorApplications.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    sectorApplications: { ...data.sectorApplications, lede: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Sector Cards
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.sectorApplications.items.map((app, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-3"
                >
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Icon Name</label>
                    <input
                      type="text"
                      value={app.iconName}
                      onChange={(e) => {
                        const updated = [...data.sectorApplications.items];
                        updated[idx].iconName = e.target.value;
                        setData({
                          ...data,
                          sectorApplications: { ...data.sectorApplications, items: updated },
                        });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-cyan-300"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Title</label>
                    <input
                      type="text"
                      value={app.title}
                      onChange={(e) => {
                        const updated = [...data.sectorApplications.items];
                        updated[idx].title = e.target.value;
                        setData({
                          ...data,
                          sectorApplications: { ...data.sectorApplications, items: updated },
                        });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Body</label>
                    <textarea
                      rows={3}
                      value={app.body}
                      onChange={(e) => {
                        const updated = [...data.sectorApplications.items];
                        updated[idx].body = e.target.value;
                        setData({
                          ...data,
                          sectorApplications: { ...data.sectorApplications, items: updated },
                        });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-[11px] text-slate-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warning Box */}
          <div className="rounded-2xl border border-amber-900/50 bg-amber-950/20 p-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Important Callout Box
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <label className="text-[10px] font-bold text-amber-200">Highlight Prefix</label>
                <input
                  type="text"
                  value={data.sectorApplications.warningBox.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      sectorApplications: {
                        ...data.sectorApplications,
                        warningBox: {
                          ...data.sectorApplications.warningBox,
                          title: e.target.value,
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-lg border border-amber-800/80 bg-slate-950 px-2.5 py-1 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-[10px] font-bold text-amber-200">Warning Text</label>
                <textarea
                  rows={2}
                  value={data.sectorApplications.warningBox.text}
                  onChange={(e) =>
                    setData({
                      ...data,
                      sectorApplications: {
                        ...data.sectorApplications,
                        warningBox: {
                          ...data.sectorApplications.warningBox,
                          text: e.target.value,
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-lg border border-amber-800/80 bg-slate-950 px-2.5 py-1 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: SYSTEM COMPATIBILITY */}
      {/* ========================================================================= */}
      {activeTab === "systemCompatibility" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">System Compatibility</h2>
              <p className="text-xs text-slate-400">
                Frequency, chip technology, and reader compatibility requirements
              </p>
            </div>
            <button
              onClick={() => saveSection("systemCompatibility", data.systemCompatibility)}
              disabled={savingSection === "systemCompatibility"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "systemCompatibility" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Compatibility</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.systemCompatibility.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    systemCompatibility: {
                      ...data.systemCompatibility,
                      eyebrow: e.target.value,
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.systemCompatibility.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    systemCompatibility: {
                      ...data.systemCompatibility,
                      title: e.target.value,
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Description</label>
              <textarea
                rows={2}
                value={data.systemCompatibility.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    systemCompatibility: {
                      ...data.systemCompatibility,
                      description: e.target.value,
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Subhead</label>
              <input
                type="text"
                value={data.systemCompatibility.subhead}
                onChange={(e) =>
                  setData({
                    ...data,
                    systemCompatibility: {
                      ...data.systemCompatibility,
                      subhead: e.target.value,
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">
                Compatibility Factors (comma-separated)
              </label>
              <textarea
                rows={2}
                value={data.systemCompatibility.factors.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    systemCompatibility: {
                      ...data.systemCompatibility,
                      factors: e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2 space-y-3 rounded-2xl border border-sky-800/60 bg-sky-950/20 p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Advisory Notice Box
              </h3>
              <div>
                <label className="text-[10px] font-bold text-slate-300">Notice Paragraph</label>
                <textarea
                  rows={2}
                  value={data.systemCompatibility.noticeBox.text}
                  onChange={(e) =>
                    setData({
                      ...data,
                      systemCompatibility: {
                        ...data.systemCompatibility,
                        noticeBox: {
                          ...data.systemCompatibility.noticeBox,
                          text: e.target.value,
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-300">Highlight Text</label>
                <input
                  type="text"
                  value={data.systemCompatibility.noticeBox.highlightText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      systemCompatibility: {
                        ...data.systemCompatibility,
                        noticeBox: {
                          ...data.systemCompatibility.noticeBox,
                          highlightText: e.target.value,
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-cyan-400 font-bold"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: CUSTOMIZATION & ELEMENTS */}
      {/* ========================================================================= */}
      {activeTab === "customization" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Card Customization</h2>
              <p className="text-xs text-slate-400">
                All customizable cardholder information and fields
              </p>
            </div>
            <button
              onClick={() => saveSection("customization", data.customization)}
              disabled={savingSection === "customization"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "customization" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Customization</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.customization.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    customization: { ...data.customization, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.customization.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    customization: { ...data.customization, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Lede</label>
              <input
                type="text"
                value={data.customization.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    customization: { ...data.customization, lede: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Subhead</label>
              <input
                type="text"
                value={data.customization.subhead}
                onChange={(e) =>
                  setData({
                    ...data,
                    customization: { ...data.customization, subhead: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">
                Card Information Fields (comma-separated)
              </label>
              <textarea
                rows={3}
                value={data.customization.fields.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    customization: {
                      ...data.customization,
                      fields: e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Footnote Text</label>
              <input
                type="text"
                value={data.customization.footnote}
                onChange={(e) =>
                  setData({
                    ...data,
                    customization: { ...data.customization, footnote: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 7: STUDENT & EMPLOYEE DEEP DIVES */}
      {/* ========================================================================= */}
      {activeTab === "studentAndEmployee" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Student & Employee ID Cards</h2>
              <p className="text-xs text-slate-400">
                Institutional student credentials and corporate employee badge deep dives
              </p>
            </div>
            <button
              onClick={() => saveSection("studentAndEmployee", data.studentAndEmployee)}
              disabled={savingSection === "studentAndEmployee"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "studentAndEmployee" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Deep Dives</span>
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Student Card Block */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2">
                <GraduationCap className="h-5 w-5 text-[#009fe3]" />
                <h3 className="font-black text-white text-sm">Student ID Card Configuration</h3>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.studentAndEmployee.studentCard.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studentAndEmployee: {
                        ...data.studentAndEmployee,
                        studentCard: {
                          ...data.studentAndEmployee.studentCard,
                          title: e.target.value,
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Description</label>
                <textarea
                  rows={2}
                  value={data.studentAndEmployee.studentCard.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studentAndEmployee: {
                        ...data.studentAndEmployee,
                        studentCard: {
                          ...data.studentAndEmployee.studentCard,
                          description: e.target.value,
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">
                  Card Composition Steps (comma-separated)
                </label>
                <input
                  type="text"
                  value={data.studentAndEmployee.studentCard.steps.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studentAndEmployee: {
                        ...data.studentAndEmployee,
                        studentCard: {
                          ...data.studentAndEmployee.studentCard,
                          steps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Applications Header</label>
                <input
                  type="text"
                  value={data.studentAndEmployee.studentCard.applicationsTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studentAndEmployee: {
                        ...data.studentAndEmployee,
                        studentCard: {
                          ...data.studentAndEmployee.studentCard,
                          applicationsTitle: e.target.value,
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">
                  Applications List (comma-separated)
                </label>
                <textarea
                  rows={2}
                  value={data.studentAndEmployee.studentCard.applications.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studentAndEmployee: {
                        ...data.studentAndEmployee,
                        studentCard: {
                          ...data.studentAndEmployee.studentCard,
                          applications: e.target.value
                            .split(",")
                            .map((s) => s.trim())
                            .filter(Boolean),
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Note</label>
                <input
                  type="text"
                  value={data.studentAndEmployee.studentCard.note}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studentAndEmployee: {
                        ...data.studentAndEmployee,
                        studentCard: {
                          ...data.studentAndEmployee.studentCard,
                          note: e.target.value,
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <div>
                  <label className="text-[10px] font-bold text-slate-400">Link Text</label>
                  <input
                    type="text"
                    value={data.studentAndEmployee.studentCard.linkText}
                    onChange={(e) =>
                      setData({
                        ...data,
                        studentAndEmployee: {
                          ...data.studentAndEmployee,
                          studentCard: {
                            ...data.studentAndEmployee.studentCard,
                            linkText: e.target.value,
                          },
                        },
                      })
                    }
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400">Link URL</label>
                  <input
                    type="text"
                    value={data.studentAndEmployee.studentCard.linkHref}
                    onChange={(e) =>
                      setData({
                        ...data,
                        studentAndEmployee: {
                          ...data.studentAndEmployee,
                          studentCard: {
                            ...data.studentAndEmployee.studentCard,
                            linkHref: e.target.value,
                          },
                        },
                      })
                    }
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                  />
                </div>
              </div>
            </div>

            {/* Employee Card Block */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2">
                <Building2 className="h-5 w-5 text-[#009fe3]" />
                <h3 className="font-black text-white text-sm">Employee ID Card Configuration</h3>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.studentAndEmployee.employeeCard.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studentAndEmployee: {
                        ...data.studentAndEmployee,
                        employeeCard: {
                          ...data.studentAndEmployee.employeeCard,
                          title: e.target.value,
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Description</label>
                <textarea
                  rows={2}
                  value={data.studentAndEmployee.employeeCard.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studentAndEmployee: {
                        ...data.studentAndEmployee,
                        employeeCard: {
                          ...data.studentAndEmployee.employeeCard,
                          description: e.target.value,
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">
                  Card Composition Steps (comma-separated)
                </label>
                <input
                  type="text"
                  value={data.studentAndEmployee.employeeCard.steps.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studentAndEmployee: {
                        ...data.studentAndEmployee,
                        employeeCard: {
                          ...data.studentAndEmployee.employeeCard,
                          steps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Subtext Description</label>
                <textarea
                  rows={2}
                  value={data.studentAndEmployee.employeeCard.subtext}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studentAndEmployee: {
                        ...data.studentAndEmployee,
                        employeeCard: {
                          ...data.studentAndEmployee.employeeCard,
                          subtext: e.target.value,
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <div>
                  <label className="text-[10px] font-bold text-slate-400">Link Text</label>
                  <input
                    type="text"
                    value={data.studentAndEmployee.employeeCard.linkText}
                    onChange={(e) =>
                      setData({
                        ...data,
                        studentAndEmployee: {
                          ...data.studentAndEmployee,
                          employeeCard: {
                            ...data.studentAndEmployee.employeeCard,
                            linkText: e.target.value,
                          },
                        },
                      })
                    }
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400">Link URL</label>
                  <input
                    type="text"
                    value={data.studentAndEmployee.employeeCard.linkHref}
                    onChange={(e) =>
                      setData({
                        ...data,
                        studentAndEmployee: {
                          ...data.studentAndEmployee,
                          employeeCard: {
                            ...data.studentAndEmployee.employeeCard,
                            linkHref: e.target.value,
                          },
                        },
                      })
                    }
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 8: WORKFLOW PROCESS */}
      {/* ========================================================================= */}
      {activeTab === "workflowProcess" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">
                RFID Card Printing Process ({data.workflowProcess.steps.length} Steps)
              </h2>
              <p className="text-xs text-slate-400">
                End-to-end production workflow from requirement to dispatch
              </p>
            </div>
            <button
              onClick={() => saveSection("workflowProcess", data.workflowProcess)}
              disabled={savingSection === "workflowProcess"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "workflowProcess" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Workflow</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.workflowProcess.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    workflowProcess: { ...data.workflowProcess, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.workflowProcess.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    workflowProcess: { ...data.workflowProcess, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Lede</label>
              <input
                type="text"
                value={data.workflowProcess.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    workflowProcess: { ...data.workflowProcess, lede: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-3">
            {data.workflowProcess.steps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-cyan-400">
                    Step {idx + 1}
                  </span>
                </div>
                <input
                  type="text"
                  value={step.title}
                  onChange={(e) => {
                    const updated = [...data.workflowProcess.steps];
                    updated[idx].title = e.target.value;
                    setData({
                      ...data,
                      workflowProcess: { ...data.workflowProcess, steps: updated },
                    });
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-bold text-white"
                />
                <textarea
                  rows={2}
                  value={step.body}
                  onChange={(e) => {
                    const updated = [...data.workflowProcess.steps];
                    updated[idx].body = e.target.value;
                    setData({
                      ...data,
                      workflowProcess: { ...data.workflowProcess, steps: updated },
                    });
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 9: BULK ORDERS */}
      {/* ========================================================================= */}
      {activeTab === "bulkOrders" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">RFID Card Printing for Bulk Orders</h2>
              <p className="text-xs text-slate-400">High-volume deployment sectors and notices</p>
            </div>
            <button
              onClick={() => saveSection("bulkOrders", data.bulkOrders)}
              disabled={savingSection === "bulkOrders"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "bulkOrders" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Bulk Section</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.bulkOrders.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkOrders: { ...data.bulkOrders, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.bulkOrders.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkOrders: { ...data.bulkOrders, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Lede</label>
              <input
                type="text"
                value={data.bulkOrders.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkOrders: { ...data.bulkOrders, lede: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Subhead</label>
              <input
                type="text"
                value={data.bulkOrders.subhead}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkOrders: { ...data.bulkOrders, subhead: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">
                Bulk Eligible Sectors (comma-separated)
              </label>
              <textarea
                rows={2}
                value={data.bulkOrders.sectors.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkOrders: {
                      ...data.bulkOrders,
                      sectors: e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Bulk Advisory Info</label>
              <textarea
                rows={3}
                value={data.bulkOrders.infoText}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkOrders: { ...data.bulkOrders, infoText: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Link Text</label>
              <input
                type="text"
                value={data.bulkOrders.linkText}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkOrders: { ...data.bulkOrders, linkText: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Link URL</label>
              <input
                type="text"
                value={data.bulkOrders.linkHref}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkOrders: { ...data.bulkOrders, linkHref: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 10: CONFIGURATIONS */}
      {/* ========================================================================= */}
      {activeTab === "configurations" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">RFID Card + Lanyard + Holder</h2>
              <p className="text-xs text-slate-400">
                Setup configurations and accessory combination tiers
              </p>
            </div>
            <button
              onClick={() => saveSection("configurations", data.configurations)}
              disabled={savingSection === "configurations"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "configurations" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Configurations</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.configurations.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    configurations: { ...data.configurations, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.configurations.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    configurations: { ...data.configurations, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Lede</label>
              <input
                type="text"
                value={data.configurations.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    configurations: { ...data.configurations, lede: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Configuration Tiers
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {data.configurations.items.map((cfg, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-3"
                >
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Badge</label>
                    <input
                      type="text"
                      value={cfg.badge}
                      onChange={(e) => {
                        const updated = [...data.configurations.items];
                        updated[idx].badge = e.target.value;
                        setData({
                          ...data,
                          configurations: { ...data.configurations, items: updated },
                        });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-cyan-300"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Title</label>
                    <input
                      type="text"
                      value={cfg.title}
                      onChange={(e) => {
                        const updated = [...data.configurations.items];
                        updated[idx].title = e.target.value;
                        setData({
                          ...data,
                          configurations: { ...data.configurations, items: updated },
                        });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400">
                      Formula Steps (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={cfg.formula.join(", ")}
                      onChange={(e) => {
                        const updated = [...data.configurations.items];
                        updated[idx].formula = e.target.value
                          .split(",")
                          .map((s) => s.trim())
                          .filter(Boolean);
                        setData({
                          ...data,
                          configurations: { ...data.configurations, items: updated },
                        });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Description</label>
                    <textarea
                      rows={2}
                      value={cfg.desc}
                      onChange={(e) => {
                        const updated = [...data.configurations.items];
                        updated[idx].desc = e.target.value;
                        setData({
                          ...data,
                          configurations: { ...data.configurations, items: updated },
                        });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 11: SYSTEM CHECKLIST */}
      {/* ========================================================================= */}
      {activeTab === "existingSystemsChecklist" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">RFID Cards for Existing Systems</h2>
              <p className="text-xs text-slate-400">
                Customer checklist before requesting quotations or replacement cards
              </p>
            </div>
            <button
              onClick={() => saveSection("existingSystemsChecklist", data.existingSystemsChecklist)}
              disabled={savingSection === "existingSystemsChecklist"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "existingSystemsChecklist" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Checklist</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.existingSystemsChecklist.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    existingSystemsChecklist: {
                      ...data.existingSystemsChecklist,
                      eyebrow: e.target.value,
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.existingSystemsChecklist.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    existingSystemsChecklist: {
                      ...data.existingSystemsChecklist,
                      title: e.target.value,
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Description</label>
              <textarea
                rows={2}
                value={data.existingSystemsChecklist.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    existingSystemsChecklist: {
                      ...data.existingSystemsChecklist,
                      description: e.target.value,
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">
                Checklist Items (comma-separated)
              </label>
              <textarea
                rows={3}
                value={data.existingSystemsChecklist.checklist.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    existingSystemsChecklist: {
                      ...data.existingSystemsChecklist,
                      checklist: e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Footnote Disclaimer</label>
              <input
                type="text"
                value={data.existingSystemsChecklist.footnote}
                onChange={(e) =>
                  setData({
                    ...data,
                    existingSystemsChecklist: {
                      ...data.existingSystemsChecklist,
                      footnote: e.target.value,
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 12: COMPARISON TABLE */}
      {/* ========================================================================= */}
      {activeTab === "comparisonTable" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">
                Comparison: Standard vs RFID ID Card
              </h2>
              <p className="text-xs text-slate-400">
                Comparative matrix rows and concluding guidance
              </p>
            </div>
            <button
              onClick={() => saveSection("comparisonTable", data.comparisonTable)}
              disabled={savingSection === "comparisonTable"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "comparisonTable" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Table</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.comparisonTable.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    comparisonTable: { ...data.comparisonTable, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.comparisonTable.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    comparisonTable: { ...data.comparisonTable, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Conclusion Text</label>
              <textarea
                rows={2}
                value={data.comparisonTable.conclusionText}
                onChange={(e) =>
                  setData({
                    ...data,
                    comparisonTable: { ...data.comparisonTable, conclusionText: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Rows Editor */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Table Rows ({data.comparisonTable.rows.length})
            </h3>
            <div className="space-y-2">
              {data.comparisonTable.rows.map((row, rIdx) => (
                <div
                  key={rIdx}
                  className="grid gap-2 sm:grid-cols-12 rounded-xl border border-slate-800/80 bg-slate-950 p-3 items-center"
                >
                  <div className="sm:col-span-6">
                    <label className="text-[10px] text-slate-500 font-bold">Feature Name</label>
                    <input
                      type="text"
                      value={row[0] || ""}
                      onChange={(e) => {
                        const updated = [...data.comparisonTable.rows];
                        updated[rIdx][0] = e.target.value;
                        setData({
                          ...data,
                          comparisonTable: { ...data.comparisonTable, rows: updated },
                        });
                      }}
                      className="mt-0.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-[10px] text-slate-500 font-bold">Standard ID Card</label>
                    <input
                      type="text"
                      value={row[1] || ""}
                      onChange={(e) => {
                        const updated = [...data.comparisonTable.rows];
                        updated[rIdx][1] = e.target.value;
                        setData({
                          ...data,
                          comparisonTable: { ...data.comparisonTable, rows: updated },
                        });
                      }}
                      className="mt-0.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-[10px] text-slate-500 font-bold">RFID ID Card</label>
                    <input
                      type="text"
                      value={row[2] || ""}
                      onChange={(e) => {
                        const updated = [...data.comparisonTable.rows];
                        updated[rIdx][2] = e.target.value;
                        setData({
                          ...data,
                          comparisonTable: { ...data.comparisonTable, rows: updated },
                        });
                      }}
                      className="mt-0.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-cyan-300 font-bold"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 13: QA, FAQ & HUB */}
      {/* ========================================================================= */}
      {activeTab === "moreSections" && (
        <div className="space-y-8">
          {/* Quality Verification */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Quality Assurance & Verification</h2>
                <p className="text-xs text-slate-400">5 QA checkpoints for customized RFID</p>
              </div>
              <button
                onClick={() => saveSection("qualityVerification", data.qualityVerification)}
                disabled={savingSection === "qualityVerification"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
              >
                {savingSection === "qualityVerification" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save QA</span>
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {data.qualityVerification.aspects.map((aspect, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-1.5">
                  <input
                    type="text"
                    value={aspect.title}
                    onChange={(e) => {
                      const updated = [...data.qualityVerification.aspects];
                      updated[idx].title = e.target.value;
                      setData({
                        ...data,
                        qualityVerification: { ...data.qualityVerification, aspects: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs font-bold text-white"
                  />
                  <textarea
                    rows={2}
                    value={aspect.desc}
                    onChange={(e) => {
                      const updated = [...data.qualityVerification.aspects];
                      updated[idx].desc = e.target.value;
                      setData({
                        ...data,
                        qualityVerification: { ...data.qualityVerification, aspects: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-[11px] text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Editor */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">
                  Frequently Asked Questions ({data.faqs.items.length})
                </h2>
                <p className="text-xs text-slate-400">Manage client questions and expert answers</p>
              </div>
              <button
                onClick={() => saveSection("faqs", data.faqs)}
                disabled={savingSection === "faqs"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
              >
                {savingSection === "faqs" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save FAQs</span>
              </button>
            </div>

            <div className="space-y-4">
              {data.faqs.items.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                      FAQ #{idx + 1}
                    </span>
                  </div>
                  <input
                    type="text"
                    value={faq.q}
                    onChange={(e) => {
                      const updated = [...data.faqs.items];
                      updated[idx].q = e.target.value;
                      setData({ ...data, faqs: { ...data.faqs, items: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-bold text-white"
                  />
                  <textarea
                    rows={2}
                    value={faq.a}
                    onChange={(e) => {
                      const updated = [...data.faqs.items];
                      updated[idx].a = e.target.value;
                      setData({ ...data, faqs: { ...data.faqs, items: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Regional Hub & Closing CTA */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Closing Call to Action & Regional Hub</h2>
                <p className="text-xs text-slate-400">Quote inquiry band and Northeast directory</p>
              </div>
              <button
                onClick={() => {
                  saveSection("closingCta", data.closingCta);
                  saveSection("regionalDirectory", data.regionalDirectory);
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9]"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save CTAs & Hub</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">CTA Title</label>
                <input
                  type="text"
                  value={data.closingCta.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, title: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Regional Hub Tag</label>
                <input
                  type="text"
                  value={data.regionalDirectory.hubTag}
                  onChange={(e) =>
                    setData({
                      ...data,
                      regionalDirectory: { ...data.regionalDirectory, hubTag: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">CTA Description</label>
                <textarea
                  rows={2}
                  value={data.closingCta.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, description: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">Regional Directory Title</label>
                <input
                  type="text"
                  value={data.regionalDirectory.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      regionalDirectory: { ...data.regionalDirectory, title: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 14: SEO META */}
      {/* ========================================================================= */}
      {activeTab === "meta" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">SEO & Search Metadata</h2>
              <p className="text-xs text-slate-400">Page title and search engine description</p>
            </div>
            <button
              onClick={() => saveSection("meta", data.meta)}
              disabled={savingSection === "meta"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "meta" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Meta</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Page Meta Title</label>
              <input
                type="text"
                value={data.meta.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    meta: { ...data.meta, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Meta Description</label>
              <textarea
                rows={3}
                value={data.meta.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    meta: { ...data.meta, description: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Canonical Path</label>
              <input
                type="text"
                value={data.meta.path}
                onChange={(e) =>
                  setData({
                    ...data,
                    meta: { ...data.meta, path: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminRfidCardPrintingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <RefreshCw className="h-8 w-8 animate-spin text-[#009fe3]" />
        </div>
      }
    >
      <AdminRfidCardPrintingContent />
    </Suspense>
  );
}
