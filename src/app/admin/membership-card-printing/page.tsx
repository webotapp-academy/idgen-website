"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Award,
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
  QrCode,
  Barcode,
  Radio,
  Lock,
  Gamepad2,
  Eye,
  Sliders,
  FileText,
  DollarSign,
  Palette,
  MapPin,
  CheckSquare,
} from "lucide-react";
import type {
  DynamicMembershipCardPrintingPageData,
  DynamicMembershipHero,
  DynamicMembershipPersonalizedData,
  DynamicMembershipWhatIs,
  DynamicMembershipCustomDesign,
  DynamicMembershipPvcPrinting,
  DynamicMembershipSectorsSection,
  DynamicMembershipGameszoneSpotlight,
  DynamicMembershipScannableCredentials,
  DynamicMembershipWearableAccessories,
  DynamicMembershipBulkPrinting,
  DynamicMembershipStudioWorkflow,
  DynamicMembershipDataPrivacy,
  DynamicMembershipSpecimenReplacement,
  DynamicMembershipPricingFactors,
  DynamicMembershipProductionProcess,
  DynamicMembershipPackagesSection,
  DynamicMembershipWhyChoose,
  DynamicMembershipEligibleSectors,
  DynamicMembershipFaqSection,
  DynamicMembershipClosingCta,
  DynamicMembershipHubDirectory,
  DynamicMembershipMeta,
} from "@/lib/dynamic-membership-card-printing-types";
import type { MembershipSlide } from "@/components/membership-card-printing/MembershipHeroCarousel";

function AdminMembershipCardPrintingContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicMembershipCardPrintingPageData | null>(null);
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
      const res = await fetch("/api/admin/membership-card-printing");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Membership Card Printing data");
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
      setSaveError(null);
      const res = await fetch("/api/admin/membership-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const json = await res.json();
      if (json.success) {
        setSaveSuccess("All Membership Card Printing settings saved and published live!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to save data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error saving data");
    } finally {
      setSaving(false);
    }
  };

  const saveSection = async (sectionKey: keyof DynamicMembershipCardPrintingPageData) => {
    if (!data) return;
    try {
      setSavingSection(sectionKey);
      setSaveError(null);
      const res = await fetch("/api/admin/membership-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: sectionKey,
          sectionData: data[sectionKey],
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSaveSuccess(`Section '${sectionKey}' saved and updated!`);
        setTimeout(() => setSaveSuccess(null), 3500);
      } else {
        setSaveError(json.error || `Failed to save section ${sectionKey}`);
      }
    } catch (e: any) {
      setSaveError(e.message || `Network error saving ${sectionKey}`);
    } finally {
      setSavingSection(null);
    }
  };

  const handleResetDefaults = async () => {
    if (
      !confirm(
        "Are you sure you want to reset all Membership Card Printing content back to factory defaults? All custom edits will be replaced."
      )
    ) {
      return;
    }
    try {
      setSaving(true);
      const res = await fetch("/api/admin/membership-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
        setSaveSuccess("Page reset to original factory defaults!");
        setTimeout(() => setSaveSuccess(null), 4000);
      }
    } catch (e: any) {
      setSaveError(e.message || "Failed to reset");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center space-y-4">
        <RefreshCw className="h-9 w-9 animate-spin text-[#009fe3]" />
        <p className="text-sm font-semibold text-slate-400">
          Loading Membership Card Printing CMS...
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center text-rose-400">
        Failed to load content. Please check API connection.
      </div>
    );
  }

  const tabs = [
    { id: "hero", label: "Hero & Showcase", icon: Award },
    { id: "personalized", label: "Personalized Info", icon: CheckSquare },
    { id: "whatis", label: "What Is & Custom", icon: FileText },
    { id: "sectors", label: "PVC & Sectors", icon: Building2 },
    { id: "gameszone", label: "Gameszone Spotlight", icon: Gamepad2 },
    { id: "credentials", label: "QR, Barcode & RFID", icon: QrCode },
    { id: "bulk", label: "Bulk & Studio", icon: Boxes },
    { id: "pricing", label: "Specimen & Pricing", icon: DollarSign },
    { id: "process", label: "Pipeline & Packages", icon: Workflow },
    { id: "faqs", label: "Why IDGen & FAQs", icon: HelpCircle },
    { id: "seo", label: "SEO, CTA & Hub", icon: Globe },
  ];

  return (
    <div className="space-y-8 pb-20 text-slate-100">
      {/* ── TOP ACTION BAR ── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3]">
            <Award className="h-4 w-4 text-cyan-400" />
            <span>Product Page CMS Suite</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <h1 className="text-2xl font-black text-white sm:text-3xl">
              Membership Card Printing CMS
            </h1>
            <span className="rounded-full bg-cyan-950 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-cyan-400 border border-cyan-800/60">
              Live Dynamic
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Edit copy, hero slider visuals, QR/barcode specs, gameszone features, and FAQs in real time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/membership-card-printing/"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-3.5 py-2 text-xs font-bold text-slate-200 hover:border-cyan-400 hover:text-white transition shadow-sm"
          >
            <span>Live Preview</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          <button
            onClick={handleResetDefaults}
            disabled={saving}
            className="inline-flex items-center gap-1.5 rounded-xl border border-rose-900/60 bg-rose-950/40 px-3.5 py-2 text-xs font-bold text-rose-300 hover:bg-rose-900/60 hover:text-white transition"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={saveWholePage}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#009fe3] to-cyan-500 px-5 py-2 text-xs font-black text-white shadow-lg shadow-[#009fe3]/25 hover:opacity-95 transition disabled:opacity-50"
          >
            {saving ? (
              <RefreshCw className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Save className="h-3.5 w-3.5" />
            )}
            <span>{saving ? "Publishing..." : "Save All Changes"}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/70 p-4 text-xs sm:text-sm font-bold text-emerald-300 shadow-xl flex items-center gap-2.5">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <span>{saveSuccess}</span>
        </div>
      )}
      {saveError && (
        <div className="rounded-2xl border border-rose-500/40 bg-rose-950/70 p-4 text-xs sm:text-sm font-bold text-rose-300 shadow-xl flex items-center gap-2.5">
          <AlertCircle className="h-5 w-5 text-rose-400 shrink-0" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex flex-wrap rounded-2xl border border-slate-800/80 bg-[#09111e] p-2 gap-2">
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

      {/* ── 1. HERO & SHOWCASE TAB ── */}
      {activeTab === "hero" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Hero Header &amp; Advisory Workflow</h2>
                <p className="text-xs text-slate-400">Configure hero badges, titles, lead paragraph, and step chain</p>
              </div>
              <button
                onClick={() => saveSection("hero")}
                disabled={savingSection === "hero"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] hover:border-[#009fe3] transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>{savingSection === "hero" ? "Saving..." : "Save Hero"}</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Top Pill Badge</label>
                <input
                  type="text"
                  value={data.hero.badge}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, badge: e.target.value } })}
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">H1 Prefix</label>
                <input
                  type="text"
                  value={data.hero.h1}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, h1: e.target.value } })}
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">H1 Highlight (Gradient Text)</label>
              <input
                type="text"
                value={data.hero.h1Gradient}
                onChange={(e) => setData({ ...data, hero: { ...data.hero, h1Gradient: e.target.value } })}
                className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Hero Lead Description</label>
              <textarea
                rows={3}
                value={data.hero.description}
                onChange={(e) => setData({ ...data, hero: { ...data.hero, description: e.target.value } })}
                className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-medium text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-slate-800">
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
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
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
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>

            {/* Workflow Card in Hero */}
            <div className="rounded-2xl border border-slate-800/80 bg-[#070e1a] p-4 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold text-slate-300">Workflow Badge</label>
                  <input
                    type="text"
                    value={data.hero.workflowBadge}
                    onChange={(e) => setData({ ...data, hero: { ...data.hero, workflowBadge: e.target.value } })}
                    className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#0c1424] px-3 py-1.5 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300">Workflow Title</label>
                  <input
                    type="text"
                    value={data.hero.workflowTitle}
                    onChange={(e) => setData({ ...data, hero: { ...data.hero, workflowTitle: e.target.value } })}
                    className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#0c1424] px-3 py-1.5 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Workflow Steps (comma separated)</label>
                <input
                  type="text"
                  value={(data.hero.workflowSteps || []).join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        workflowSteps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#0c1424] px-3 py-1.5 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Hero Carousel Slides Editor */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  Hero Showcase Slider ({data.hero.slides?.length || 0} Slides)
                </h3>
                <p className="text-xs text-slate-400">
                  Manage the interactive image showcase displayed on the right side of the hero.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const newSlide: MembershipSlide = {
                    id: `slide-${Date.now()}`,
                    imageSrc: "/images/idgen-custom-membership-card-printing.jpg",
                    alt: "New custom membership card specimen",
                    title: "Custom Membership Card",
                    category: "Premium Membership",
                    topBadge: "PVC Membership Card",
                    specPill: "CR80 30-Mil Standard",
                    bottomSpec: "High-Gloss PVC • Vibrant Color • Member Photo & ID",
                    hubTag: "GUWAHATI HUB",
                  };
                  setData({
                    ...data,
                    hero: {
                      ...data.hero,
                      slides: [...(data.hero.slides || []), newSlide],
                    },
                  });
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-950 text-cyan-300 border border-cyan-800/60 px-3 py-1.5 text-xs font-bold hover:bg-cyan-900 transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Slide</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {(data.hero.slides || []).map((slide, index) => (
                <div
                  key={slide.id || index}
                  className="relative rounded-2xl border border-slate-800/80 bg-[#070e1a] p-4 space-y-3"
                >
                  <button
                    type="button"
                    onClick={() => {
                      const updated = (data.hero.slides || []).filter((_, idx) => idx !== index);
                      setData({ ...data, hero: { ...data.hero, slides: updated } });
                    }}
                    className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 transition"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#009fe3]/20 text-xs font-black text-cyan-400">
                      {index + 1}
                    </span>
                    <input
                      type="text"
                      value={slide.title}
                      placeholder="Slide Title"
                      onChange={(e) => {
                        const updated = [...(data.hero.slides || [])];
                        updated[index] = { ...updated[index], title: e.target.value };
                        setData({ ...data, hero: { ...data.hero, slides: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2.5 py-1 text-xs font-bold text-white focus:border-[#009fe3] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-400">Image URL</label>
                    <div className="flex gap-2 mt-0.5">
                      <input
                        type="text"
                        value={slide.imageSrc}
                        onChange={(e) => {
                          const updated = [...(data.hero.slides || [])];
                          updated[index] = { ...updated[index], imageSrc: e.target.value };
                          setData({ ...data, hero: { ...data.hero, slides: updated } });
                        }}
                        className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2.5 py-1 text-xs font-medium text-white focus:border-[#009fe3] focus:outline-hidden"
                      />
                      <label className="cursor-pointer inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-[11px] font-bold text-slate-200 hover:bg-slate-700 transition shrink-0">
                        <UploadCloud className="h-3.5 w-3.5 text-cyan-400" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleFileUpload(
                              e,
                              (url) => {
                                const updated = [...(data.hero.slides || [])];
                                updated[index] = { ...updated[index], imageSrc: url };
                                setData({ ...data, hero: { ...data.hero, slides: updated } });
                              },
                              `slide-${index}`
                            )
                          }
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400">Top Badge</label>
                      <input
                        type="text"
                        value={slide.topBadge}
                        onChange={(e) => {
                          const updated = [...(data.hero.slides || [])];
                          updated[index] = { ...updated[index], topBadge: e.target.value };
                          setData({ ...data, hero: { ...data.hero, slides: updated } });
                        }}
                        className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2 py-1 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-400">Spec Pill</label>
                      <input
                        type="text"
                        value={slide.specPill}
                        onChange={(e) => {
                          const updated = [...(data.hero.slides || [])];
                          updated[index] = { ...updated[index], specPill: e.target.value };
                          setData({ ...data, hero: { ...data.hero, slides: updated } });
                        }}
                        className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2 py-1 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-400">Bottom Spec Bar</label>
                    <input
                      type="text"
                      value={slide.bottomSpec}
                      onChange={(e) => {
                        const updated = [...(data.hero.slides || [])];
                        updated[index] = { ...updated[index], bottomSpec: e.target.value };
                        setData({ ...data, hero: { ...data.hero, slides: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2.5 py-1 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── 2. PERSONALIZED DATA TAB ── */}
      {activeTab === "personalized" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Personalized Data Printing Checklist</h2>
                <p className="text-xs text-slate-400">Manage checkable member data fields displayed on the page</p>
              </div>
              <button
                onClick={() => saveSection("personalizedData")}
                disabled={savingSection === "personalizedData"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] hover:border-[#009fe3] transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>{savingSection === "personalizedData" ? "Saving..." : "Save Section"}</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Eyebrow</label>
                <input
                  type="text"
                  value={data.personalizedData.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      personalizedData: { ...data.personalizedData, eyebrow: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Section Title</label>
                <input
                  type="text"
                  value={data.personalizedData.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      personalizedData: { ...data.personalizedData, title: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-300">
                  Data Field Items ({(data.personalizedData.items || []).length})
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      personalizedData: {
                        ...data.personalizedData,
                        items: [...(data.personalizedData.items || []), "New Member Field"],
                      },
                    });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Field</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {(data.personalizedData.items || []).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-xl border border-slate-800 bg-[#070e1a] p-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const updated = [...(data.personalizedData.items || [])];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          personalizedData: { ...data.personalizedData, items: updated },
                        });
                      }}
                      className="w-full bg-transparent text-xs font-bold text-white focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = (data.personalizedData.items || []).filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          personalizedData: { ...data.personalizedData, items: updated },
                        });
                      }}
                      className="text-slate-500 hover:text-rose-400 transition"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <label className="text-xs font-bold text-slate-300">Footnote Text</label>
              <textarea
                rows={2}
                value={data.personalizedData.footnote}
                onChange={(e) =>
                  setData({
                    ...data,
                    personalizedData: { ...data.personalizedData, footnote: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-medium text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── 3. WHAT IS & CUSTOM TAB ── */}
      {activeTab === "whatis" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  What Is a Membership ID Card? Section
                </h3>
                <p className="text-xs text-slate-400">Definition, specimen graphic and functions list</p>
              </div>
              <button
                onClick={() => saveSection("whatIs")}
                disabled={savingSection === "whatIs"}
                className="rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
              >
                Save 'What Is'
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.whatIs.title}
                  onChange={(e) => setData({ ...data, whatIs: { ...data.whatIs, title: e.target.value } })}
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300">Functions Header</label>
                <input
                  type="text"
                  value={data.whatIs.functionsTitle}
                  onChange={(e) =>
                    setData({ ...data, whatIs: { ...data.whatIs, functionsTitle: e.target.value } })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Description</label>
              <textarea
                rows={2}
                value={data.whatIs.description}
                onChange={(e) =>
                  setData({ ...data, whatIs: { ...data.whatIs, description: e.target.value } })
                }
                className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-medium text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>

            {/* Specimen image */}
            <div className="rounded-2xl border border-slate-800/80 bg-[#070e1a] p-4 space-y-3">
              <label className="text-xs font-bold text-slate-300">Specimen Showcase Image</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={data.whatIs.image.src}
                  onChange={(e) =>
                    setData({
                      ...data,
                      whatIs: {
                        ...data.whatIs,
                        image: { ...data.whatIs.image, src: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-[#0c1424] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
                <label className="cursor-pointer inline-flex items-center gap-1 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-bold text-slate-200 hover:bg-slate-700 transition shrink-0">
                  <UploadCloud className="h-4 w-4 text-cyan-400" />
                  <span>Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      handleFileUpload(e, (url) => {
                        setData({
                          ...data,
                          whatIs: {
                            ...data.whatIs,
                            image: { ...data.whatIs.image, src: url },
                          },
                        });
                      })
                    }
                  />
                </label>
              </div>
            </div>

            {/* Functions list */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-300">
                  Card Functions ({(data.whatIs.functions || []).length})
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      whatIs: {
                        ...data.whatIs,
                        functions: [...(data.whatIs.functions || []), "New Function"],
                      },
                    });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Function</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(data.whatIs.functions || []).map((fn, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-xl border border-slate-800 bg-[#070e1a] p-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                    <input
                      type="text"
                      value={fn}
                      onChange={(e) => {
                        const updated = [...(data.whatIs.functions || [])];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          whatIs: { ...data.whatIs, functions: updated },
                        });
                      }}
                      className="w-full bg-transparent text-xs font-bold text-white focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = (data.whatIs.functions || []).filter((_, i) => i !== idx);
                        setData({ ...data, whatIs: { ...data.whatIs, functions: updated } });
                      }}
                      className="text-slate-500 hover:text-rose-400 transition"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Design */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  Custom Membership Cards Elements
                </h3>
                <p className="text-xs text-slate-400">Customizable card element chips</p>
              </div>
              <button
                onClick={() => saveSection("customDesign")}
                disabled={savingSection === "customDesign"}
                className="rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
              >
                Save 'Custom Design'
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.customDesign.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      customDesign: { ...data.customDesign, title: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300">Subtitle / Lede</label>
                <input
                  type="text"
                  value={data.customDesign.lede}
                  onChange={(e) =>
                    setData({
                      ...data,
                      customDesign: { ...data.customDesign, lede: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-300">
                  Customizable Elements ({(data.customDesign.elements || []).length})
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      customDesign: {
                        ...data.customDesign,
                        elements: [...(data.customDesign.elements || []), "New Element"],
                      },
                    });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Element</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {(data.customDesign.elements || []).map((elem, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-[#070e1a] p-2"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    <input
                      type="text"
                      value={elem}
                      onChange={(e) => {
                        const updated = [...(data.customDesign.elements || [])];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          customDesign: { ...data.customDesign, elements: updated },
                        });
                      }}
                      className="w-full bg-transparent text-xs font-bold text-white focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = (data.customDesign.elements || []).filter((_, i) => i !== idx);
                        setData({ ...data, customDesign: { ...data.customDesign, elements: updated } });
                      }}
                      className="text-slate-500 hover:text-rose-400 transition"
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

      {/* ── 4. PVC & SECTORS TAB ── */}
      {activeTab === "sectors" && (
        <div className="space-y-6">
          {/* PVC Section */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  PVC Membership Card Printing
                </h3>
                <p className="text-xs text-slate-400">Durable PVC specification and flow chain</p>
              </div>
              <button
                onClick={() => saveSection("pvcPrinting")}
                disabled={savingSection === "pvcPrinting"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>{savingSection === "pvcPrinting" ? "Saving..." : "Save PVC"}</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.pvcPrinting.title}
                  onChange={(e) =>
                    setData({ ...data, pvcPrinting: { ...data.pvcPrinting, title: e.target.value } })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300">
                  Flow Steps (comma separated)
                </label>
                <input
                  type="text"
                  value={(data.pvcPrinting.flowSteps || []).join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      pvcPrinting: {
                        ...data.pvcPrinting,
                        flowSteps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* 6 Sectors */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  Organization Types &amp; Sectors ({(data.sectorsSection.sectors || []).length})
                </h3>
                <p className="text-xs text-slate-400">
                  Clubs, Associations, Gyms, Gameszones, Hotels, NGOs cards.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      sectorsSection: {
                        ...data.sectorsSection,
                        sectors: [
                          ...(data.sectorsSection.sectors || []),
                          {
                            title: "New Sector",
                            desc: "Sector description for custom membership cards.",
                            items: ["Badge 1", "Badge 2"],
                          },
                        ],
                      },
                    });
                  }}
                  className="inline-flex items-center gap-1 rounded-xl bg-cyan-950 text-cyan-300 border border-cyan-800/60 px-3 py-1.5 text-xs font-bold hover:bg-cyan-900 transition"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Sector</span>
                </button>

                <button
                  onClick={() => saveSection("sectorsSection")}
                  disabled={savingSection === "sectorsSection"}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  <span>{savingSection === "sectorsSection" ? "Saving..." : "Save Sectors"}</span>
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(data.sectorsSection.sectors || []).map((sec, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl border border-slate-800/80 bg-[#070e1a] p-4 space-y-3"
                >
                  <button
                    type="button"
                    onClick={() => {
                      const updated = (data.sectorsSection.sectors || []).filter((_, i) => i !== idx);
                      setData({
                        ...data,
                        sectorsSection: { ...data.sectorsSection, sectors: updated },
                      });
                    }}
                    className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 transition"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <input
                    type="text"
                    value={sec.title}
                    onChange={(e) => {
                      const updated = [...(data.sectorsSection.sectors || [])];
                      updated[idx] = { ...updated[idx], title: e.target.value };
                      setData({
                        ...data,
                        sectorsSection: { ...data.sectorsSection, sectors: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2.5 py-1 text-xs font-extrabold text-white focus:border-[#009fe3] focus:outline-hidden"
                  />

                  <textarea
                    rows={2}
                    value={sec.desc}
                    onChange={(e) => {
                      const updated = [...(data.sectorsSection.sectors || [])];
                      updated[idx] = { ...updated[idx], desc: e.target.value };
                      setData({
                        ...data,
                        sectorsSection: { ...data.sectorsSection, sectors: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2.5 py-1 text-xs text-slate-300 focus:border-[#009fe3] focus:outline-hidden"
                  />

                  <div>
                    <label className="text-[11px] font-bold text-slate-400">Badge Tags (comma separated)</label>
                    <input
                      type="text"
                      value={(sec.items || []).join(", ")}
                      onChange={(e) => {
                        const updated = [...(data.sectorsSection.sectors || [])];
                        updated[idx] = {
                          ...updated[idx],
                          items: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        };
                        setData({
                          ...data,
                          sectorsSection: { ...data.sectorsSection, sectors: updated },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2.5 py-1 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── 5. GAMESZONE SPOTLIGHT TAB ── */}
      {activeTab === "gameszone" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-cyan-500/30 bg-[#071322] p-6 text-white shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Dedicated Gameszone &amp; Gaming Arena Section</h2>
                <p className="text-xs text-cyan-300">Highlight cards for arcade, esports, VR arena and amusement parks</p>
              </div>
              <button
                onClick={() => saveSection("gameszoneSpotlight")}
                disabled={savingSection === "gameszoneSpotlight"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 text-slate-950 px-4 py-1.5 text-xs font-extrabold hover:bg-cyan-400 transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>{savingSection === "gameszoneSpotlight" ? "Saving..." : "Save Gameszone"}</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-xs font-bold text-cyan-300">Pill Badge</label>
                <input
                  type="text"
                  value={data.gameszoneSpotlight.badge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      gameszoneSpotlight: { ...data.gameszoneSpotlight, badge: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-cyan-500/30 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white focus:border-cyan-400 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-cyan-300">Main Title</label>
                <input
                  type="text"
                  value={data.gameszoneSpotlight.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      gameszoneSpotlight: { ...data.gameszoneSpotlight, title: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-cyan-500/30 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white focus:border-cyan-400 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-cyan-300">Title Gradient</label>
                <input
                  type="text"
                  value={data.gameszoneSpotlight.titleGradient}
                  onChange={(e) =>
                    setData({
                      ...data,
                      gameszoneSpotlight: {
                        ...data.gameszoneSpotlight,
                        titleGradient: e.target.value,
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-cyan-500/30 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white focus:border-cyan-400 focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-cyan-300">Description</label>
              <textarea
                rows={2}
                value={data.gameszoneSpotlight.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    gameszoneSpotlight: { ...data.gameszoneSpotlight, description: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-cyan-500/30 bg-slate-900 px-3.5 py-2 text-xs font-medium text-slate-200 focus:border-cyan-400 focus:outline-hidden"
              />
            </div>

            {/* 4 Features */}
            <div className="pt-2">
              <label className="text-xs font-bold text-cyan-300 mb-2 block">
                Gameszone 4 Feature Pillars
              </label>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {(data.gameszoneSpotlight.features || []).map((feat, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 space-y-2 backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-cyan-400">Card #{idx + 1}</span>
                      <input
                        type="text"
                        placeholder="Icon Name"
                        value={feat.iconName}
                        onChange={(e) => {
                          const updated = [...(data.gameszoneSpotlight.features || [])];
                          updated[idx] = { ...updated[idx], iconName: e.target.value };
                          setData({
                            ...data,
                            gameszoneSpotlight: {
                              ...data.gameszoneSpotlight,
                              features: updated,
                            },
                          });
                        }}
                        className="rounded bg-slate-900 px-1.5 py-0.5 text-[10px] font-mono text-cyan-300 border border-white/10"
                      />
                    </div>
                    <input
                      type="text"
                      value={feat.title}
                      onChange={(e) => {
                        const updated = [...(data.gameszoneSpotlight.features || [])];
                        updated[idx] = { ...updated[idx], title: e.target.value };
                        setData({
                          ...data,
                          gameszoneSpotlight: {
                            ...data.gameszoneSpotlight,
                            features: updated,
                          },
                        });
                      }}
                      className="w-full rounded bg-slate-900 px-2 py-1 text-xs font-bold text-white border border-white/10"
                    />
                    <textarea
                      rows={2}
                      value={feat.desc}
                      onChange={(e) => {
                        const updated = [...(data.gameszoneSpotlight.features || [])];
                        updated[idx] = { ...updated[idx], desc: e.target.value };
                        setData({
                          ...data,
                          gameszoneSpotlight: {
                            ...data.gameszoneSpotlight,
                            features: updated,
                          },
                        });
                      }}
                      className="w-full rounded bg-slate-900 px-2 py-1 text-xs text-slate-300 border border-white/10"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 6. CREDENTIALS: QR, BARCODE & RFID TAB ── */}
      {activeTab === "credentials" && (
        <div className="space-y-6">
          {/* QR Code Section */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  Membership Cards With QR Codes &amp; Barcodes
                </h3>
                <p className="text-xs text-slate-400">Scannable digital identifiers and scanning systems</p>
              </div>
              <button
                onClick={() => saveSection("scannableCredentials")}
                disabled={savingSection === "scannableCredentials"}
                className="rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
              >
                Save Scannable
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">QR Section Title</label>
                <input
                  type="text"
                  value={data.scannableCredentials.qrSection.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      scannableCredentials: {
                        ...data.scannableCredentials,
                        qrSection: { ...data.scannableCredentials.qrSection, title: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Barcode Section Title</label>
                <input
                  type="text"
                  value={data.scannableCredentials.barcodeSection.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      scannableCredentials: {
                        ...data.scannableCredentials,
                        barcodeSection: {
                          ...data.scannableCredentials.barcodeSection,
                          title: e.target.value,
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">
                QR Functions (comma separated)
              </label>
              <input
                type="text"
                value={(data.scannableCredentials.qrSection.functions || []).join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    scannableCredentials: {
                      ...data.scannableCredentials,
                      qrSection: {
                        ...data.scannableCredentials.qrSection,
                        functions: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">
                Barcode Applications (comma separated)
              </label>
              <input
                type="text"
                value={(data.scannableCredentials.barcodeSection.applications || []).join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    scannableCredentials: {
                      ...data.scannableCredentials,
                      barcodeSection: {
                        ...data.scannableCredentials.barcodeSection,
                        applications: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>
          </div>

          {/* 3 Wearable Accessories */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  Technology-Enabled &amp; Wearable Accessories (RFID, Lanyards, Holders)
                </h3>
                <p className="text-xs text-slate-400">Integrated identification card bundles</p>
              </div>
              <button
                onClick={() => saveSection("wearableAccessories")}
                disabled={savingSection === "wearableAccessories"}
                className="rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
              >
                Save Wearable
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {(data.wearableAccessories.items || []).map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-[#070e1a] p-4 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-cyan-400">Card #{idx + 1}</span>
                    <input
                      type="text"
                      placeholder="Icon Name"
                      value={item.iconName}
                      onChange={(e) => {
                        const updated = [...(data.wearableAccessories.items || [])];
                        updated[idx] = { ...updated[idx], iconName: e.target.value };
                        setData({
                          ...data,
                          wearableAccessories: { ...data.wearableAccessories, items: updated },
                        });
                      }}
                      className="rounded bg-[#0c1424] px-1.5 py-0.5 text-[10px] font-mono border border-slate-700 text-slate-200"
                    />
                  </div>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => {
                      const updated = [...(data.wearableAccessories.items || [])];
                      updated[idx] = { ...updated[idx], title: e.target.value };
                      setData({
                        ...data,
                        wearableAccessories: { ...data.wearableAccessories, items: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2 py-1 text-xs font-bold text-white focus:border-[#009fe3] focus:outline-hidden"
                  />
                  <textarea
                    rows={3}
                    value={item.description}
                    onChange={(e) => {
                      const updated = [...(data.wearableAccessories.items || [])];
                      updated[idx] = { ...updated[idx], description: e.target.value };
                      setData({
                        ...data,
                        wearableAccessories: { ...data.wearableAccessories, items: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2 py-1 text-xs text-slate-300 focus:border-[#009fe3] focus:outline-hidden"
                  />
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Chain Steps (comma separated)</label>
                    <input
                      type="text"
                      value={(item.steps || []).join(", ")}
                      onChange={(e) => {
                        const updated = [...(data.wearableAccessories.items || [])];
                        updated[idx] = {
                          ...updated[idx],
                          steps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        };
                        setData({
                          ...data,
                          wearableAccessories: { ...data.wearableAccessories, items: updated },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2 py-1 text-xs text-white focus:border-[#009fe3] focus:outline-hidden"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── 7. BULK & STUDIO TAB ── */}
      {activeTab === "bulk" && (
        <div className="space-y-6">
          {/* Bulk Printing */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  Bulk Membership Card Printing
                </h3>
                <p className="text-xs text-slate-400">Large-batch production scenarios and verification pipeline</p>
              </div>
              <button
                onClick={() => saveSection("bulkPrinting")}
                disabled={savingSection === "bulkPrinting"}
                className="rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
              >
                Save Bulk
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.bulkPrinting.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      bulkPrinting: { ...data.bulkPrinting, title: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300">
                  Bulk Workflow Steps (comma separated)
                </label>
                <input
                  type="text"
                  value={(data.bulkPrinting.workflowSteps || []).join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      bulkPrinting: {
                        ...data.bulkPrinting,
                        workflowSteps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">
                Bulk Scenarios (comma separated)
              </label>
              <input
                type="text"
                value={(data.bulkPrinting.scenarios || []).join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkPrinting: {
                      ...data.bulkPrinting,
                      scenarios: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>
          </div>

          {/* IDGen Studio */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  IDGen Studio Workflow &amp; Batch-Wise Printing
                </h3>
                <p className="text-xs text-slate-400">Self-onboarding member forms and batch-wise approvals</p>
              </div>
              <button
                onClick={() => saveSection("studioWorkflow")}
                disabled={savingSection === "studioWorkflow"}
                className="rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
              >
                Save Studio
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.studioWorkflow.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studioWorkflow: { ...data.studioWorkflow, title: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">
                  Batch-Wise Boxes (comma separated)
                </label>
                <input
                  type="text"
                  value={(data.studioWorkflow.batches || []).join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studioWorkflow: {
                        ...data.studioWorkflow,
                        batches: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Description</label>
              <textarea
                rows={2}
                value={data.studioWorkflow.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    studioWorkflow: { ...data.studioWorkflow, description: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-medium text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── 8. SPECIMEN & PRICING TAB ── */}
      {activeTab === "pricing" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  Pricing Factors (Transparent Calculation)
                </h3>
                <p className="text-xs text-slate-400">Specifications impacting custom quotation</p>
              </div>
              <button
                onClick={() => saveSection("pricingFactors")}
                disabled={savingSection === "pricingFactors"}
                className="rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
              >
                Save Pricing
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.pricingFactors.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      pricingFactors: { ...data.pricingFactors, title: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300">Note</label>
                <input
                  type="text"
                  value={data.pricingFactors.note}
                  onChange={(e) =>
                    setData({
                      ...data,
                      pricingFactors: { ...data.pricingFactors, note: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">
                Factors (comma separated)
              </label>
              <input
                type="text"
                value={(data.pricingFactors.factors || []).join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    pricingFactors: {
                      ...data.pricingFactors,
                      factors: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── 9. PIPELINE & PACKAGES TAB ── */}
      {activeTab === "process" && (
        <div className="space-y-6">
          {/* 9 Steps */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  9-Step Production Process
                </h3>
                <p className="text-xs text-slate-400">Institutional workflow from requirement to dispatch</p>
              </div>
              <button
                onClick={() => saveSection("productionProcess")}
                disabled={savingSection === "productionProcess"}
                className="rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
              >
                Save Pipeline
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(data.productionProcess.steps || []).map((st, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-[#070e1a] p-3.5 space-y-2"
                >
                  <span className="text-[10px] font-black text-cyan-400">Step {idx + 1}</span>
                  <input
                    type="text"
                    value={st.title}
                    onChange={(e) => {
                      const updated = [...(data.productionProcess.steps || [])];
                      updated[idx] = { ...updated[idx], title: e.target.value };
                      setData({
                        ...data,
                        productionProcess: { ...data.productionProcess, steps: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2.5 py-1 text-xs font-bold text-white focus:border-[#009fe3] focus:outline-hidden"
                  />
                  <textarea
                    rows={2}
                    value={st.body}
                    onChange={(e) => {
                      const updated = [...(data.productionProcess.steps || [])];
                      updated[idx] = { ...updated[idx], body: e.target.value };
                      setData({
                        ...data,
                        productionProcess: { ...data.productionProcess, steps: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2.5 py-1 text-xs text-slate-300 focus:border-[#009fe3] focus:outline-hidden"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 4 Packages */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  Complete Setup Packages
                </h3>
                <p className="text-xs text-slate-400">Card Only, Wearable, Technology-Enabled, Digital Workflow</p>
              </div>
              <button
                onClick={() => saveSection("setupPackages")}
                disabled={savingSection === "setupPackages"}
                className="rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
              >
                Save Packages
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(data.setupPackages.packages || []).map((pkg, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-[#070e1a] p-4 space-y-2.5"
                >
                  <input
                    type="text"
                    value={pkg.badge}
                    placeholder="Pill Badge"
                    onChange={(e) => {
                      const updated = [...(data.setupPackages.packages || [])];
                      updated[idx] = { ...updated[idx], badge: e.target.value };
                      setData({
                        ...data,
                        setupPackages: { ...data.setupPackages, packages: updated },
                      });
                    }}
                    className="w-full rounded bg-[#0c1424] px-2 py-0.5 text-[10px] font-extrabold uppercase text-cyan-400 border border-slate-700"
                  />
                  <input
                    type="text"
                    value={pkg.title}
                    placeholder="Package Title"
                    onChange={(e) => {
                      const updated = [...(data.setupPackages.packages || [])];
                      updated[idx] = { ...updated[idx], title: e.target.value };
                      setData({
                        ...data,
                        setupPackages: { ...data.setupPackages, packages: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2 py-1 text-xs font-black text-white"
                  />
                  <textarea
                    rows={2}
                    value={pkg.desc}
                    placeholder="Description"
                    onChange={(e) => {
                      const updated = [...(data.setupPackages.packages || [])];
                      updated[idx] = { ...updated[idx], desc: e.target.value };
                      setData({
                        ...data,
                        setupPackages: { ...data.setupPackages, packages: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2 py-1 text-xs text-slate-300"
                  />
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Formula (comma separated)</label>
                    <input
                      type="text"
                      value={(pkg.formula || []).join(", ")}
                      onChange={(e) => {
                        const updated = [...(data.setupPackages.packages || [])];
                        updated[idx] = {
                          ...updated[idx],
                          formula: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        };
                        setData({
                          ...data,
                          setupPackages: { ...data.setupPackages, packages: updated },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-2 py-1 text-xs font-semibold text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── 10. WHY IDGEN & FAQS TAB ── */}
      {activeTab === "faqs" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  Frequently Asked Questions ({(data.faqsSection.faqs || []).length})
                </h3>
                <p className="text-xs text-slate-400">Add, edit, or remove FAQs displayed on the page.</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      faqsSection: {
                        ...data.faqsSection,
                        faqs: [
                          ...(data.faqsSection.faqs || []),
                          {
                            q: "New Question regarding membership cards?",
                            a: "Detailed answer explaining the specifications and workflow.",
                          },
                        ],
                      },
                    });
                  }}
                  className="inline-flex items-center gap-1 rounded-xl bg-cyan-950 text-cyan-300 border border-cyan-800/60 px-3 py-1.5 text-xs font-bold hover:bg-cyan-900 transition"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Question</span>
                </button>

                <button
                  onClick={() => saveSection("faqsSection")}
                  disabled={savingSection === "faqsSection"}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  <span>Save FAQs</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {(data.faqsSection.faqs || []).map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-[#070e1a] p-4 space-y-2 relative"
                >
                  <button
                    type="button"
                    onClick={() => {
                      const updated = (data.faqsSection.faqs || []).filter((_, i) => i !== idx);
                      setData({
                        ...data,
                        faqsSection: { ...data.faqsSection, faqs: updated },
                      });
                    }}
                    className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 transition"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <div className="pr-8">
                    <label className="text-[11px] font-bold text-slate-400">Question #{idx + 1}</label>
                    <input
                      type="text"
                      value={faq.q}
                      onChange={(e) => {
                        const updated = [...(data.faqsSection.faqs || [])];
                        updated[idx] = { ...updated[idx], q: e.target.value };
                        setData({
                          ...data,
                          faqsSection: { ...data.faqsSection, faqs: updated },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-3 py-1.5 text-xs font-bold text-white focus:border-[#009fe3] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-400">Answer</label>
                    <textarea
                      rows={2}
                      value={faq.a}
                      onChange={(e) => {
                        const updated = [...(data.faqsSection.faqs || [])];
                        updated[idx] = { ...updated[idx], a: e.target.value };
                        setData({
                          ...data,
                          faqsSection: { ...data.faqsSection, faqs: updated },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-700/80 bg-[#0c1424] px-3 py-1.5 text-xs text-slate-300 focus:border-[#009fe3] focus:outline-hidden"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── 11. SEO, CTA & HUB TAB ── */}
      {activeTab === "seo" && (
        <div className="space-y-6">
          {/* SEO Meta */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  SEO Metadata Configuration
                </h3>
                <p className="text-xs text-slate-400">Search engine title, description, and canonical path</p>
              </div>
              <button
                onClick={() => saveSection("meta")}
                disabled={savingSection === "meta"}
                className="rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
              >
                Save SEO
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Page Meta Title</label>
                <input
                  type="text"
                  value={data.meta.title}
                  onChange={(e) => setData({ ...data, meta: { ...data.meta, title: e.target.value } })}
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300">Canonical Path</label>
                <input
                  type="text"
                  value={data.meta.path}
                  onChange={(e) => setData({ ...data, meta: { ...data.meta, path: e.target.value } })}
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Meta Description</label>
              <textarea
                rows={2}
                value={data.meta.description}
                onChange={(e) => setData({ ...data, meta: { ...data.meta, description: e.target.value } })}
                className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-medium text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Closing CTA */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-extrabold text-white text-base">
                  Closing CTA Band
                </h3>
                <p className="text-xs text-slate-400">Pre-footer lead generation action band</p>
              </div>
              <button
                onClick={() => saveSection("closingCta")}
                disabled={savingSection === "closingCta"}
                className="rounded-xl bg-slate-800 border border-slate-700 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#009fe3] transition"
              >
                Save CTA
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
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300">CTA Badge</label>
                <input
                  type="text"
                  value={data.closingCta.badge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, badge: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">CTA Body Copy</label>
              <textarea
                rows={2}
                value={data.closingCta.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    closingCta: { ...data.closingCta, description: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700/80 bg-[#070e1a] px-3.5 py-2 text-xs font-medium text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminMembershipCardPrintingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[400px] items-center justify-center">
          <RefreshCw className="h-8 w-8 animate-spin text-[#009fe3]" />
        </div>
      }
    >
      <AdminMembershipCardPrintingContent />
    </Suspense>
  );
}
