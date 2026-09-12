"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
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
  Cpu,
  ShieldCheck,
  MapPin,
  HelpCircle,
  ArrowRight,
  Eye,
  Camera,
  Sliders,
  Check,
  Globe,
  Package,
  Award,
  Lock,
  Workflow,
  ClipboardCheck,
  Printer,
  Truck,
  CreditCard,
  QrCode,
  Users,
  UploadCloud,
  FileSpreadsheet,
  Briefcase,
  RefreshCw,
} from "lucide-react";
import type {
  DynamicEmployeeIdCardPrintingData,
  EmployeeHeroSlide,
  EmployeeSolutionItem,
  CardAnatomyField,
  SamplePersonalizationField,
  ModernWorkplaceUseItem,
  DigitalIdTechItem,
  WhyChoosePillarItem,
  HowToOrderStepItem,
  EmployeeFaqItem,
} from "@/lib/dynamic-employee-id-card-printing-types";

function AdminEmployeeIdCardPrintingContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicEmployeeIdCardPrintingData | null>(null);
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
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
      const res = await fetch("/api/admin/employee-id-card-printing");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Employee ID Card Printing data");
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
      setUploadingField(fieldId || "uploading");
      const form = new FormData();
      form.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: form,
      });
      const json = await res.json();

      if (json.success && json.url) {
        callback(json.url);
        setSaveSuccess("Image uploaded successfully!");
        setTimeout(() => setSaveSuccess(null), 3000);
      } else {
        setSaveError(json.error || "Failed to upload image");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error uploading image");
    } finally {
      setUploadingField(null);
    }
  };

  const handleSaveWholePage = async () => {
    if (!data) return;
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/employee-id-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess("All page changes published successfully!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Save failed");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error during save");
    } finally {
      setSaving(false);
    }
  };

  const handleSaveSection = async (sectionKey: string, sectionData: any) => {
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/employee-id-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section: sectionKey, sectionData }),
      });

      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess(`Section '${sectionKey}' saved and updated!`);
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Section save failed");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error during section save");
    } finally {
      setSaving(false);
    }
  };

  const handleResetToDefaults = async () => {
    if (
      !confirm(
        "Are you sure you want to reset the Employee ID Card Printing page to factory defaults? All custom changes will be overwritten."
      )
    ) {
      return;
    }

    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/employee-id-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });

      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess("Restored factory defaults successfully!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Reset failed");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error during reset");
    } finally {
      setSaving(false);
    }
  };

  // Reusable Image Upload & Preview Row
  const renderImageUploadField = (
    label: string,
    value: string | undefined,
    onChange: (val: string) => void,
    fieldId: string
  ) => {
    const isUploading = uploadingField === fieldId;
    return (
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-slate-300">{label}</label>
        <div className="flex items-center gap-3">
          {/* Live Thumbnail Preview */}
          <div className="relative h-12 w-16 shrink-0 rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-inner flex items-center justify-center">
            {value ? (
              <img
                src={value}
                alt="Preview"
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            ) : (
              <Camera className="h-4 w-4 text-slate-600" />
            )}
            {isUploading && (
              <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
              </div>
            )}
          </div>

          {/* URL Input */}
          <input
            type="text"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/images/example.jpg or /uploads/..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
          />

          {/* Direct File Upload Button */}
          <label
            className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
              isUploading
                ? "bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed"
                : "bg-cyan-950/80 text-cyan-300 border-cyan-700/60 hover:bg-cyan-900 hover:text-white"
            }`}
          >
            <UploadCloud className="h-4 w-4" />
            <span>{isUploading ? "Uploading..." : "Upload"}</span>
            <input
              type="file"
              accept="image/*"
              disabled={isUploading}
              className="hidden"
              onChange={(e) => {
                handleFileUpload(e, onChange, fieldId);
              }}
            />
          </label>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
        <p className="text-slate-400 text-sm font-medium">
          Loading Employee ID Card Printing CMS...
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center space-y-4">
        <p className="text-rose-400 font-bold">Failed to load CMS data.</p>
        <button
          onClick={fetchPageData}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-xl text-xs font-bold text-white"
        >
          Retry
        </button>
      </div>
    );
  }

  const tabs = [
    { id: "hero", label: "Hero & Copy", icon: Sparkles },
    { id: "hero_slides", label: "Hero 1:1 Showcase", icon: Camera },
    { id: "solutions", label: "Workforce Solutions", icon: Briefcase },
    { id: "modern_workplaces", label: "Modern Workplaces", icon: Building2 },
    { id: "card_anatomy", label: "Card Anatomy & Proofs", icon: CreditCard },
    { id: "personalization", label: "Personalization Table", icon: FileSpreadsheet },
    { id: "onboarding_replacement", label: "Onboarding & Reissue", icon: RefreshCw },
    { id: "departments_digital", label: "Depts & Digital ID", icon: Cpu },
    { id: "complete_setup_bulk", label: "Wearable Kit & Bulk", icon: Boxes },
    { id: "data_preview", label: "Data & Verification", icon: ShieldCheck },
    { id: "pricing_clients_coverage", label: "Pricing & Coverage", icon: MapPin },
    { id: "why_how_faq", label: "Why, Process & FAQs", icon: HelpCircle },
    { id: "cta_seo", label: "Bottom CTA & SEO", icon: Globe },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
              Employee ID Card Printing CMS
            </h1>
            <span className="text-[10px] font-black uppercase bg-cyan-950 text-cyan-300 border border-cyan-800/60 px-2.5 py-0.5 rounded-full">
              Full Suite Dynamic
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Customize all 22 sections of the{" "}
            <code className="text-cyan-400">/employee-id-card-printing/</code> page in real time with direct image upload support.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/employee-id-card-printing/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
            <span>View Public Page</span>
          </Link>

          <button
            onClick={handleResetToDefaults}
            disabled={saving}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-rose-950/60 hover:text-rose-300 text-slate-300 border border-slate-700 transition-colors disabled:opacity-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Factory Reset</span>
          </button>

          <button
            onClick={handleSaveWholePage}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Publishing..." : "Save All Changes"}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-3 animate-in fade-in">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
          <span>{saveSuccess}</span>
        </div>
      )}

      {saveError && (
        <div className="p-4 rounded-2xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-3 animate-in fade-in">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-400" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Tabs Navigation Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-800">
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 scale-105"
                  : "bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              <TabIcon className={`h-3.5 w-3.5 ${isActive ? "text-slate-950" : "text-cyan-400"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: HERO & MAIN COPY */}
      {activeTab === "hero" && (
        <div className="space-y-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                <span>Hero Section &amp; Headlines</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Primary banners, highlights, and custom fields badge
              </p>
            </div>
            <button
              onClick={() => handleSaveSection("hero", data.hero)}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Hero</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
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
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Badge Subtitle</label>
              <input
                type="text"
                value={data.hero.badgeSub}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, badgeSub: e.target.value },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Main Title (White text)</label>
              <input
                type="text"
                value={data.hero.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, title: e.target.value },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Title Highlight (Cyan Gradient text)</label>
              <input
                type="text"
                value={data.hero.titleHighlight}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, titleHighlight: e.target.value },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Hero Description Paragraph</label>
            <textarea
              rows={3}
              value={data.hero.description}
              onChange={(e) =>
                setData({
                  ...data,
                  hero: { ...data.hero, description: e.target.value },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div className="space-y-3 border-t border-slate-800 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-xs font-bold text-slate-300">
                  Personalization Pill Title &amp; Items
                </label>
                <p className="text-[11px] text-slate-400">
                  The tags displayed inside the hero box (e.g. Employee name, Employee photo)
                </p>
              </div>
              <input
                type="text"
                value={data.hero.personalizationTitle}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, personalizationTitle: e.target.value },
                  })
                }
                className="w-72 bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {data.hero.personalizationItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 bg-slate-800 border border-slate-700 rounded-xl px-3 py-1 text-xs text-slate-200"
                >
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const updated = [...data.hero.personalizationItems];
                      updated[idx] = e.target.value;
                      setData({
                        ...data,
                        hero: { ...data.hero, personalizationItems: updated },
                      });
                    }}
                    className="bg-transparent border-none focus:outline-none text-xs text-cyan-300 w-36"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updated = data.hero.personalizationItems.filter(
                        (_, i) => i !== idx
                      );
                      setData({
                        ...data,
                        hero: { ...data.hero, personalizationItems: updated },
                      });
                    }}
                    className="text-slate-500 hover:text-rose-400"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setData({
                    ...data,
                    hero: {
                      ...data.hero,
                      personalizationItems: [
                        ...data.hero.personalizationItems,
                        "New custom field",
                      ],
                    },
                  })
                }
                className="inline-flex items-center gap-1 bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800/60 rounded-xl px-3 py-1 text-xs font-bold"
              >
                <Plus className="h-3 w-3" />
                <span>Add Field</span>
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Hero Secondary Note Paragraph</label>
            <textarea
              rows={2}
              value={data.hero.note}
              onChange={(e) =>
                setData({
                  ...data,
                  hero: { ...data.hero, note: e.target.value },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 border-t border-slate-800 pt-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300">Primary CTA Button</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Button Label"
                  value={data.hero.primaryCtaText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, primaryCtaText: e.target.value },
                    })
                  }
                  className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="URL"
                  value={data.hero.primaryCtaLink}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, primaryCtaLink: e.target.value },
                    })
                  }
                  className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300">Secondary CTA Button</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Button Label"
                  value={data.hero.secondaryCtaText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, secondaryCtaText: e.target.value },
                    })
                  }
                  className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="URL"
                  value={data.hero.secondaryCtaLink}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, secondaryCtaLink: e.target.value },
                    })
                  }
                  className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: HERO SLIDES SHOWCASE */}
      {activeTab === "hero_slides" && (
        <div className="space-y-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Camera className="h-5 w-5 text-cyan-400" />
                <span>Hero 1:1 Sliding Showcase Cards</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Manage the high-res 1:1 aspect visual carousel on the right side of the hero
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  const newSlide: EmployeeHeroSlide = {
                    id: `slide-${Date.now()}`,
                    imageSrc: "/images/sol-companies-idgen-v2.jpg",
                    alt: "Custom corporate employee ID card badge",
                    title: "Corporate Staff ID Badge",
                    category: "Staff",
                    topBadge: "Corporate Badge",
                    specPill: "30-Mil Gloss PVC",
                    bottomSpec: "Employee Name • Designation",
                    hubTag: "GUWAHATI HUB",
                  };
                  setData({
                    ...data,
                    heroSlides: [...data.heroSlides, newSlide],
                  });
                }}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 flex items-center gap-1.5"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Slide</span>
              </button>
              <button
                onClick={() => handleSaveSection("heroSlides", data.heroSlides)}
                disabled={saving}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Slides</span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {data.heroSlides.map((slide, idx) => (
              <div
                key={slide.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 space-y-4 relative group"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-black text-cyan-400 font-mono">
                    Slide #{idx + 1}: {slide.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = data.heroSlides.filter((_, i) => i !== idx);
                      setData({ ...data, heroSlides: updated });
                    }}
                    className="text-slate-500 hover:text-rose-400 p-1"
                    title="Remove Slide"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {renderImageUploadField(
                  "Slide Image (Direct Upload or URL)",
                  slide.imageSrc,
                  (url) => {
                    const updated = [...data.heroSlides];
                    updated[idx].imageSrc = url;
                    setData({ ...data, heroSlides: updated });
                  },
                  `slide-${idx}`
                )}

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400">Slide Title</label>
                    <input
                      type="text"
                      value={slide.title}
                      onChange={(e) => {
                        const updated = [...data.heroSlides];
                        updated[idx].title = e.target.value;
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400">Top Left Floating Badge</label>
                    <input
                      type="text"
                      value={slide.topBadge}
                      onChange={(e) => {
                        const updated = [...data.heroSlides];
                        updated[idx].topBadge = e.target.value;
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400">Top Right Spec Pill</label>
                    <input
                      type="text"
                      value={slide.specPill}
                      onChange={(e) => {
                        const updated = [...data.heroSlides];
                        updated[idx].specPill = e.target.value;
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1 lg:col-span-2">
                    <label className="text-[11px] font-bold text-slate-400">Bottom Floating Spec Bar Text</label>
                    <input
                      type="text"
                      value={slide.bottomSpec}
                      onChange={(e) => {
                        const updated = [...data.heroSlides];
                        updated[idx].bottomSpec = e.target.value;
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400">Hub Tag (e.g. GUWAHATI HUB)</label>
                    <input
                      type="text"
                      value={slide.hubTag}
                      onChange={(e) => {
                        const updated = [...data.heroSlides];
                        updated[idx].hubTag = e.target.value;
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: WORKFORCE SOLUTIONS */}
      {activeTab === "solutions" && (
        <div className="space-y-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-cyan-400" />
                <span>Employee ID Card Solutions Carousel</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Categories like Corporate, Staff, Industries, Hospitals, NGOs with images and items
              </p>
            </div>
            <button
              onClick={async () => {
                await handleSaveSection("solutionsSection", data.solutionsSection);
                await handleSaveSection("solutions", data.solutions);
              }}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Solutions</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Section Badge</label>
              <input
                type="text"
                value={data.solutionsSection.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    solutionsSection: {
                      ...data.solutionsSection,
                      badge: e.target.value,
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Section Title</label>
              <input
                type="text"
                value={data.solutionsSection.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    solutionsSection: {
                      ...data.solutionsSection,
                      title: e.target.value,
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Section Description</label>
            <textarea
              rows={2}
              value={data.solutionsSection.description}
              onChange={(e) =>
                setData({
                  ...data,
                  solutionsSection: {
                    ...data.solutionsSection,
                    description: e.target.value,
                  },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>

          {/* Solutions List */}
          <div className="space-y-6 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-200">Solutions Slides</h3>
              <button
                type="button"
                onClick={() => {
                  const newSol: EmployeeSolutionItem = {
                    id: `sol-${Date.now()}`,
                    title: "New Employee Category",
                    badge: "Workplace",
                    description: "Category description for this organization type.",
                    typicalItems: ["Photo", "Name", "ID", "Department"],
                    iconName: "Building2",
                    image: "/images/sol-companies-idgen-v2.jpg",
                    accent: "from-blue-600 to-cyan-500",
                  };
                  setData({
                    ...data,
                    solutions: [...data.solutions, newSol],
                  });
                }}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800/60 flex items-center gap-1"
              >
                <Plus className="h-3 w-3" />
                <span>Add Category</span>
              </button>
            </div>

            {data.solutions.map((sol, idx) => (
              <div
                key={sol.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-black text-cyan-400 font-mono">
                    Category #{idx + 1}: {sol.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = data.solutions.filter((_, i) => i !== idx);
                      setData({ ...data, solutions: updated });
                    }}
                    className="text-slate-500 hover:text-rose-400"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {renderImageUploadField(
                  "Solution Visual Image",
                  sol.image,
                  (url) => {
                    const updated = [...data.solutions];
                    updated[idx].image = url;
                    setData({ ...data, solutions: updated });
                  },
                  `sol-${idx}`
                )}

                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400">Title</label>
                    <input
                      type="text"
                      value={sol.title}
                      onChange={(e) => {
                        const updated = [...data.solutions];
                        updated[idx].title = e.target.value;
                        setData({ ...data, solutions: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400">Badge</label>
                    <input
                      type="text"
                      value={sol.badge}
                      onChange={(e) => {
                        const updated = [...data.solutions];
                        updated[idx].badge = e.target.value;
                        setData({ ...data, solutions: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400">Lucide Icon Name</label>
                    <input
                      type="text"
                      value={sol.iconName || "Building2"}
                      onChange={(e) => {
                        const updated = [...data.solutions];
                        updated[idx].iconName = e.target.value;
                        setData({ ...data, solutions: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400">Description</label>
                  <textarea
                    rows={2}
                    value={sol.description}
                    onChange={(e) => {
                      const updated = [...data.solutions];
                      updated[idx].description = e.target.value;
                      setData({ ...data, solutions: updated });
                    }}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400">
                    Typical Items (comma separated)
                  </label>
                  <input
                    type="text"
                    value={(sol.typicalItems || []).join(", ")}
                    onChange={(e) => {
                      const updated = [...data.solutions];
                      updated[idx].typicalItems = e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean);
                      setData({ ...data, solutions: updated });
                    }}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: MODERN WORKPLACES */}
      {activeTab === "modern_workplaces" && (
        <div className="space-y-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Building2 className="h-5 w-5 text-cyan-400" />
                <span>Employee Identification for Modern Workplaces</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                8 workplace identity use-cases, grid cards, and footer note
              </p>
            </div>
            <button
              onClick={() => handleSaveSection("modernWorkplaces", data.modernWorkplaces)}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Workplaces</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Section Badge</label>
              <input
                type="text"
                value={data.modernWorkplaces.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    modernWorkplaces: {
                      ...data.modernWorkplaces,
                      badge: e.target.value,
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Section Title</label>
              <input
                type="text"
                value={data.modernWorkplaces.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    modernWorkplaces: {
                      ...data.modernWorkplaces,
                      title: e.target.value,
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Section Description</label>
            <textarea
              rows={2}
              value={data.modernWorkplaces.description}
              onChange={(e) =>
                setData({
                  ...data,
                  modernWorkplaces: {
                    ...data.modernWorkplaces,
                    description: e.target.value,
                  },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-bold text-slate-200">Workplace Use Cards</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.modernWorkplaces.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-2"
                >
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Title"
                      value={item.title}
                      onChange={(e) => {
                        const updated = [...data.modernWorkplaces.items];
                        updated[idx].title = e.target.value;
                        setData({
                          ...data,
                          modernWorkplaces: {
                            ...data.modernWorkplaces,
                            items: updated,
                          },
                        });
                      }}
                      className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white font-bold"
                    />
                    <input
                      type="text"
                      placeholder="Icon Name (e.g. Award, Building2)"
                      value={item.iconName || ""}
                      onChange={(e) => {
                        const updated = [...data.modernWorkplaces.items];
                        updated[idx].iconName = e.target.value;
                        setData({
                          ...data,
                          modernWorkplaces: {
                            ...data.modernWorkplaces,
                            items: updated,
                          },
                        });
                      }}
                      className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-cyan-300"
                    />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Short description"
                    value={item.desc}
                    onChange={(e) => {
                      const updated = [...data.modernWorkplaces.items];
                      updated[idx].desc = e.target.value;
                      setData({
                        ...data,
                        modernWorkplaces: {
                          ...data.modernWorkplaces,
                          items: updated,
                        },
                      });
                    }}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1 border-t border-slate-800 pt-4">
            <label className="text-xs font-bold text-slate-300">Footer Callout Note</label>
            <input
              type="text"
              value={data.modernWorkplaces.footerNote}
              onChange={(e) =>
                setData({
                  ...data,
                  modernWorkplaces: {
                    ...data.modernWorkplaces,
                    footerNote: e.target.value,
                  },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>
        </div>
      )}

      {/* TAB 5: CARD ANATOMY & PROOF IMAGES */}
      {activeTab === "card_anatomy" && (
        <div className="space-y-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-cyan-400" />
                <span>Employee ID Card Design &amp; Graphic Proofs</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Upload real front/back proof graphics or configure the front and back field breakdown
              </p>
            </div>
            <button
              onClick={() => handleSaveSection("cardAnatomy", data.cardAnatomy)}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Anatomy</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Section Badge</label>
              <input
                type="text"
                value={data.cardAnatomy.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    cardAnatomy: {
                      ...data.cardAnatomy,
                      badge: e.target.value,
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Section Title</label>
              <input
                type="text"
                value={data.cardAnatomy.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    cardAnatomy: {
                      ...data.cardAnatomy,
                      title: e.target.value,
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Section Description</label>
            <textarea
              rows={2}
              value={data.cardAnatomy.description}
              onChange={(e) =>
                setData({
                  ...data,
                  cardAnatomy: {
                    ...data.cardAnatomy,
                    description: e.target.value,
                  },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>

          {/* Upload Front and Back Proof Graphics */}
          <div className="grid sm:grid-cols-2 gap-6 border-t border-slate-800 pt-6">
            <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950/60 space-y-3">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Front Card Proof Graphic (Optional)
              </h3>
              {renderImageUploadField(
                "Front Proof Image",
                data.cardAnatomy.frontCardImage,
                (url) =>
                  setData({
                    ...data,
                    cardAnatomy: {
                      ...data.cardAnatomy,
                      frontCardImage: url,
                    },
                  }),
                "front-proof"
              )}
              <p className="text-[11px] text-slate-400">
                When an image is provided, visitors can toggle between the interactive layout wireframe and your real high-resolution front card proof.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950/60 space-y-3">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Back Card Proof Graphic (Optional)
              </h3>
              {renderImageUploadField(
                "Back Proof Image",
                data.cardAnatomy.backCardImage,
                (url) =>
                  setData({
                    ...data,
                    cardAnatomy: {
                      ...data.cardAnatomy,
                      backCardImage: url,
                    },
                  }),
                "back-proof"
              )}
              <p className="text-[11px] text-slate-400">
                When an image is provided, visitors can toggle between the terms wireframe and your real back card proof.
              </p>
            </div>
          </div>

          {/* Front Fields */}
          <div className="space-y-3 border-t border-slate-800 pt-4">
            <h3 className="text-xs font-bold text-slate-200">Front Side Fields Breakdown</h3>
            <div className="space-y-2">
              {data.cardAnatomy.frontFields.map((field, idx) => (
                <div
                  key={field.id}
                  className="flex items-center gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800"
                >
                  <input
                    type="text"
                    value={field.name}
                    placeholder="Field name"
                    onChange={(e) => {
                      const updated = [...data.cardAnatomy.frontFields];
                      updated[idx].name = e.target.value;
                      setData({
                        ...data,
                        cardAnatomy: { ...data.cardAnatomy, frontFields: updated },
                      });
                    }}
                    className="w-1/3 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
                  />
                  <input
                    type="text"
                    value={field.hint}
                    placeholder="Hint / subtitle"
                    onChange={(e) => {
                      const updated = [...data.cardAnatomy.frontFields];
                      updated[idx].hint = e.target.value;
                      setData({
                        ...data,
                        cardAnatomy: { ...data.cardAnatomy, frontFields: updated },
                      });
                    }}
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                  />
                  <input
                    type="text"
                    value={field.iconName || ""}
                    placeholder="Icon"
                    onChange={(e) => {
                      const updated = [...data.cardAnatomy.frontFields];
                      updated[idx].iconName = e.target.value;
                      setData({
                        ...data,
                        cardAnatomy: { ...data.cardAnatomy, frontFields: updated },
                      });
                    }}
                    className="w-24 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs text-cyan-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Back Fields */}
          <div className="space-y-3 border-t border-slate-800 pt-4">
            <h3 className="text-xs font-bold text-slate-200">Back Side Fields Breakdown</h3>
            <div className="space-y-2">
              {data.cardAnatomy.backFields.map((field, idx) => (
                <div
                  key={field.id}
                  className="flex items-center gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800"
                >
                  <input
                    type="text"
                    value={field.name}
                    placeholder="Field name"
                    onChange={(e) => {
                      const updated = [...data.cardAnatomy.backFields];
                      updated[idx].name = e.target.value;
                      setData({
                        ...data,
                        cardAnatomy: { ...data.cardAnatomy, backFields: updated },
                      });
                    }}
                    className="w-1/3 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
                  />
                  <input
                    type="text"
                    value={field.hint}
                    placeholder="Hint / subtitle"
                    onChange={(e) => {
                      const updated = [...data.cardAnatomy.backFields];
                      updated[idx].hint = e.target.value;
                      setData({
                        ...data,
                        cardAnatomy: { ...data.cardAnatomy, backFields: updated },
                      });
                    }}
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                  />
                  <input
                    type="text"
                    value={field.iconName || ""}
                    placeholder="Icon"
                    onChange={(e) => {
                      const updated = [...data.cardAnatomy.backFields];
                      updated[idx].iconName = e.target.value;
                      setData({
                        ...data,
                        cardAnatomy: { ...data.cardAnatomy, backFields: updated },
                      });
                    }}
                    className="w-24 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs text-cyan-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: PERSONALIZATION TABLE */}
      {activeTab === "personalization" && (
        <div className="space-y-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-cyan-400" />
                <span>Employee ID Card Personalization Table</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                The sample variable fields and data examples displayed on the public page
              </p>
            </div>
            <button
              onClick={() => handleSaveSection("personalization", data.personalization)}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Table</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Badge</label>
              <input
                type="text"
                value={data.personalization.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    personalization: {
                      ...data.personalization,
                      badge: e.target.value,
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.personalization.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    personalization: {
                      ...data.personalization,
                      title: e.target.value,
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Description</label>
            <textarea
              rows={2}
              value={data.personalization.description}
              onChange={(e) =>
                setData({
                  ...data,
                  personalization: {
                    ...data.personalization,
                    description: e.target.value,
                  },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-200">Personalization Fields</h3>
              <button
                type="button"
                onClick={() => {
                  const newField: SamplePersonalizationField = {
                    field: "Custom Field",
                    example: "Sample Data",
                    iconName: "FileCheck",
                  };
                  setData({
                    ...data,
                    personalization: {
                      ...data.personalization,
                      fields: [...data.personalization.fields, newField],
                    },
                  });
                }}
                className="px-3 py-1 rounded-xl text-xs font-bold bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800/60 flex items-center gap-1"
              >
                <Plus className="h-3 w-3" />
                <span>Add Row</span>
              </button>
            </div>

            <div className="space-y-2">
              {data.personalization.fields.map((f, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800"
                >
                  <input
                    type="text"
                    value={f.field}
                    placeholder="Field name"
                    onChange={(e) => {
                      const updated = [...data.personalization.fields];
                      updated[idx].field = e.target.value;
                      setData({
                        ...data,
                        personalization: { ...data.personalization, fields: updated },
                      });
                    }}
                    className="w-1/3 bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white font-bold"
                  />
                  <input
                    type="text"
                    value={f.example}
                    placeholder="Example value"
                    onChange={(e) => {
                      const updated = [...data.personalization.fields];
                      updated[idx].example = e.target.value;
                      setData({
                        ...data,
                        personalization: { ...data.personalization, fields: updated },
                      });
                    }}
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-300"
                  />
                  <input
                    type="text"
                    value={f.iconName || ""}
                    placeholder="Icon name"
                    onChange={(e) => {
                      const updated = [...data.personalization.fields];
                      updated[idx].iconName = e.target.value;
                      setData({
                        ...data,
                        personalization: { ...data.personalization, fields: updated },
                      });
                    }}
                    className="w-28 bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-cyan-300"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updated = data.personalization.fields.filter(
                        (_, i) => i !== idx
                      );
                      setData({
                        ...data,
                        personalization: { ...data.personalization, fields: updated },
                      });
                    }}
                    className="text-slate-500 hover:text-rose-400 p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1 border-t border-slate-800 pt-4">
            <label className="text-xs font-bold text-slate-300">Footer Callout Note</label>
            <input
              type="text"
              value={data.personalization.footerNote}
              onChange={(e) =>
                setData({
                  ...data,
                  personalization: {
                    ...data.personalization,
                    footerNote: e.target.value,
                  },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>
        </div>
      )}

      {/* TAB 7: ONBOARDING & REPLACEMENT */}
      {activeTab === "onboarding_replacement" && (
        <div className="space-y-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-cyan-400" />
                <span>Onboarding Stepper &amp; Replacement Reissue</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                New employee HR pipeline, stepper badges, and re-order triggers
              </p>
            </div>
            <button
              onClick={async () => {
                await handleSaveSection("onboarding", data.onboarding);
                await handleSaveSection("replacement", data.replacement);
              }}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Both</span>
            </button>
          </div>

          {/* Onboarding */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-cyan-400">1. New Employee Onboarding Section</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={data.onboarding.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    onboarding: { ...data.onboarding, title: e.target.value },
                  })
                }
                placeholder="Title"
                className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
              <input
                type="text"
                value={data.onboarding.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    onboarding: { ...data.onboarding, description: e.target.value },
                  })
                }
                placeholder="Description"
                className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">
                Onboarding Steps (comma separated)
              </label>
              <input
                type="text"
                value={data.onboarding.steps.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    onboarding: {
                      ...data.onboarding,
                      steps: e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="CTA Button Text"
                value={data.onboarding.ctaText}
                onChange={(e) =>
                  setData({
                    ...data,
                    onboarding: { ...data.onboarding, ctaText: e.target.value },
                  })
                }
                className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
              <input
                type="text"
                placeholder="CTA Link"
                value={data.onboarding.ctaLink}
                onChange={(e) =>
                  setData({
                    ...data,
                    onboarding: { ...data.onboarding, ctaLink: e.target.value },
                  })
                }
                className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Replacement */}
          <div className="space-y-4 border-t border-slate-800 pt-6">
            <h3 className="text-sm font-bold text-cyan-400">2. Employee ID Card Replacement Section</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={data.replacement.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    replacement: { ...data.replacement, title: e.target.value },
                  })
                }
                placeholder="Title"
                className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
              <input
                type="text"
                value={data.replacement.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    replacement: {
                      ...data.replacement,
                      description: e.target.value,
                    },
                  })
                }
                placeholder="Description"
                className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">
                Replacement Reasons (comma separated)
              </label>
              <textarea
                rows={2}
                value={data.replacement.reasons.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    replacement: {
                      ...data.replacement,
                      reasons: e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Replacement Callout Note</label>
              <input
                type="text"
                value={data.replacement.footerNote}
                onChange={(e) =>
                  setData({
                    ...data,
                    replacement: {
                      ...data.replacement,
                      footerNote: e.target.value,
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 8: DEPARTMENTS & DIGITAL ID */}
      {activeTab === "departments_digital" && (
        <div className="space-y-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Cpu className="h-5 w-5 text-cyan-400" />
                <span>Departments Categorization &amp; Digital Identification</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Department tagging and machine-readable smart technologies (QR, Barcode, RFID)
              </p>
            </div>
            <button
              onClick={async () => {
                await handleSaveSection("departments", data.departments);
                await handleSaveSection("digitalId", data.digitalId);
              }}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Both</span>
            </button>
          </div>

          {/* Departments */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-cyan-400">Department-Wise Identification</h3>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Department Tags (comma separated)</label>
              <input
                type="text"
                value={data.departments.items.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    departments: {
                      ...data.departments,
                      items: e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Digital ID */}
          <div className="space-y-4 border-t border-slate-800 pt-6">
            <h3 className="text-sm font-bold text-cyan-400">Digital Technologies</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {data.digitalId.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2"
                >
                  <input
                    type="text"
                    value={tech.name}
                    onChange={(e) => {
                      const updated = [...data.digitalId.technologies];
                      updated[idx].name = e.target.value;
                      setData({
                        ...data,
                        digitalId: { ...data.digitalId, technologies: updated },
                      });
                    }}
                    placeholder="Tech Name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white font-bold"
                  />
                  <input
                    type="text"
                    value={tech.desc}
                    onChange={(e) => {
                      const updated = [...data.digitalId.technologies];
                      updated[idx].desc = e.target.value;
                      setData({
                        ...data,
                        digitalId: { ...data.digitalId, technologies: updated },
                      });
                    }}
                    placeholder="Description"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 9: COMPLETE SETUP & BULK */}
      {activeTab === "complete_setup_bulk" && (
        <div className="space-y-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Boxes className="h-5 w-5 text-cyan-400" />
                <span>Complete Wearable Setup &amp; Bulk Production</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Full kits (Card + Holder + Lanyard + Hook) and large-scale bulk order considerations
              </p>
            </div>
            <button
              onClick={async () => {
                await handleSaveSection("completeSetup", data.completeSetup);
                await handleSaveSection("bulk", data.bulk);
              }}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Both</span>
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-cyan-400">Complete Identification Combo Pill</h3>
            <input
              type="text"
              value={data.completeSetup.comboPill}
              onChange={(e) =>
                setData({
                  ...data,
                  completeSetup: {
                    ...data.completeSetup,
                    comboPill: e.target.value,
                  },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>

          <div className="space-y-4 border-t border-slate-800 pt-6">
            <h3 className="text-sm font-bold text-cyan-400">Bulk Production Requirements Tags</h3>
            <textarea
              rows={2}
              value={data.bulk.requirements.join(", ")}
              onChange={(e) =>
                setData({
                  ...data,
                  bulk: {
                    ...data.bulk,
                    requirements: e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean),
                  },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Bulk Critical Factors Pill</label>
              <input
                type="text"
                value={data.bulk.factorsPill}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulk: { ...data.bulk, factorsPill: e.target.value },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 10: DATA REQUIREMENTS & PREVIEW APPROVAL */}
      {activeTab === "data_preview" && (
        <div className="space-y-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
                <span>Data &amp; Photo Requirements &amp; Pre-Print Approval</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Data structure pillars and pre-production error prevention checklists
              </p>
            </div>
            <button
              onClick={async () => {
                await handleSaveSection("dataRequirements", data.dataRequirements);
                await handleSaveSection("previewApproval", data.previewApproval);
              }}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Both</span>
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-cyan-400">Data Structure Pillars</h3>
            <input
              type="text"
              value={data.dataRequirements.pillars.join(", ")}
              onChange={(e) =>
                setData({
                  ...data,
                  dataRequirements: {
                    ...data.dataRequirements,
                    pillars: e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean),
                  },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>

          <div className="space-y-4 border-t border-slate-800 pt-6">
            <h3 className="text-sm font-bold text-cyan-400">Preview Error Checkpoints</h3>
            <textarea
              rows={2}
              value={data.previewApproval.issues.join(", ")}
              onChange={(e) =>
                setData({
                  ...data,
                  previewApproval: {
                    ...data.previewApproval,
                    issues: e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean),
                  },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>
        </div>
      )}

      {/* TAB 11: PRICING, CLIENTS & ASSAM COVERAGE */}
      {activeTab === "pricing_clients_coverage" && (
        <div className="space-y-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span>Pricing, Eligible Organizations &amp; Assam Hub</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Client coverage, district list, and central pricing guidance
              </p>
            </div>
            <button
              onClick={async () => {
                await handleSaveSection("pricing", data.pricing);
                await handleSaveSection("whoCanOrder", data.whoCanOrder);
                await handleSaveSection("coverage", data.coverage);
              }}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save All 3</span>
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-cyan-400">Who Can Order Clients</h3>
            <textarea
              rows={2}
              value={data.whoCanOrder.clients.join(", ")}
              onChange={(e) =>
                setData({
                  ...data,
                  whoCanOrder: {
                    ...data.whoCanOrder,
                    clients: e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean),
                  },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>

          <div className="space-y-4 border-t border-slate-800 pt-6">
            <h3 className="text-sm font-bold text-cyan-400">Assam Locations List</h3>
            <textarea
              rows={2}
              value={data.coverage.locations.join(", ")}
              onChange={(e) =>
                setData({
                  ...data,
                  coverage: {
                    ...data.coverage,
                    locations: e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean),
                  },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>
        </div>
      )}

      {/* TAB 12: WHY CHOOSE, HOW TO ORDER & FAQS */}
      {activeTab === "why_how_faq" && (
        <div className="space-y-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-cyan-400" />
                <span>Why IDGen, Ordering Steps &amp; FAQs</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Value propositions, step-by-step order process, and answers to common queries
              </p>
            </div>
            <button
              onClick={async () => {
                await handleSaveSection("whyChoose", data.whyChoose);
                await handleSaveSection("howToOrder", data.howToOrder);
                await handleSaveSection("faq", data.faq);
                await handleSaveSection("quickAnswer", data.quickAnswer);
              }}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save All</span>
            </button>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-cyan-400">Frequently Asked Questions</h3>
              <button
                type="button"
                onClick={() => {
                  const newFaq: EmployeeFaqItem = {
                    q: "New question?",
                    a: "Answer details here.",
                  };
                  setData({
                    ...data,
                    faq: { ...data.faq, faqs: [...data.faq.faqs, newFaq] },
                  });
                }}
                className="px-3 py-1 rounded-xl text-xs font-bold bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800/60 flex items-center gap-1"
              >
                <Plus className="h-3 w-3" />
                <span>Add FAQ</span>
              </button>
            </div>

            <div className="space-y-3">
              {data.faq.faqs.map((f, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={f.q}
                      placeholder="Question"
                      onChange={(e) => {
                        const updated = [...data.faq.faqs];
                        updated[idx].q = e.target.value;
                        setData({
                          ...data,
                          faq: { ...data.faq, faqs: updated },
                        });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white font-bold"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.faq.faqs.filter((_, i) => i !== idx);
                        setData({ ...data, faq: { ...data.faq, faqs: updated } });
                      }}
                      className="text-slate-500 hover:text-rose-400 ml-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    value={f.a}
                    placeholder="Answer"
                    onChange={(e) => {
                      const updated = [...data.faq.faqs];
                      updated[idx].a = e.target.value;
                      setData({
                        ...data,
                        faq: { ...data.faq, faqs: updated },
                      });
                    }}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Answer */}
          <div className="space-y-2 border-t border-slate-800 pt-6">
            <h3 className="text-sm font-bold text-cyan-400">Quick Answer Callout Banner</h3>
            <input
              type="text"
              value={data.quickAnswer.title}
              onChange={(e) =>
                setData({
                  ...data,
                  quickAnswer: { ...data.quickAnswer, title: e.target.value },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-bold"
            />
            <textarea
              rows={3}
              value={data.quickAnswer.text}
              onChange={(e) =>
                setData({
                  ...data,
                  quickAnswer: { ...data.quickAnswer, text: e.target.value },
                })
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-300"
            />
          </div>
        </div>
      )}

      {/* TAB 13: BOTTOM CTA & SEO METADATA */}
      {activeTab === "cta_seo" && (
        <div className="space-y-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Globe className="h-5 w-5 text-cyan-400" />
                <span>Bottom CTA Conversion Band &amp; SEO Metadata</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Closing action banner, workflow pill, and Google meta title/description
              </p>
            </div>
            <button
              onClick={async () => {
                await handleSaveSection("closingCta", data.closingCta);
                await handleSaveSection("metadata", data.metadata);
              }}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Both</span>
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-cyan-400">1. Bottom CTA Banner</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={data.closingCta.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    closingCta: { ...data.closingCta, title: e.target.value },
                  })
                }
                placeholder="Title"
                className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
              <input
                type="text"
                value={data.closingCta.workflowPill || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    closingCta: { ...data.closingCta, workflowPill: e.target.value },
                  })
                }
                placeholder="Workflow Pill"
                className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <textarea
              rows={2}
              value={data.closingCta.description}
              onChange={(e) =>
                setData({
                  ...data,
                  closingCta: {
                    ...data.closingCta,
                    description: e.target.value,
                  },
                })
              }
              placeholder="Description"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>

          <div className="space-y-4 border-t border-slate-800 pt-6">
            <h3 className="text-sm font-bold text-cyan-400">2. Google SEO Metadata</h3>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Page Meta Title</label>
              <input
                type="text"
                value={data.metadata?.title || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    metadata: {
                      ...data.metadata,
                      title: e.target.value,
                      description: data.metadata?.description || "",
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Meta Description</label>
              <textarea
                rows={3}
                value={data.metadata?.description || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    metadata: {
                      ...data.metadata,
                      description: e.target.value,
                      title: data.metadata?.title || "",
                    },
                  })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminEmployeeIdCardPrintingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
          <p className="text-slate-400 text-sm font-medium">
            Loading Employee ID Card Printing CMS...
          </p>
        </div>
      }
    >
      <AdminEmployeeIdCardPrintingContent />
    </Suspense>
  );
}
