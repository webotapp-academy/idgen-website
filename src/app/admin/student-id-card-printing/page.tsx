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
  ChevronRight,
  Globe,
  Package,
  Award,
  Lock,
  Workflow,
  ClipboardCheck,
  Printer,
  Truck,
  GraduationCap,
  CreditCard,
  QrCode,
  Users,
  School,
  BookOpen,
  UploadCloud,
  FileSpreadsheet,
} from "lucide-react";
import type {
  DynamicStudentIdCardPrintingData,
  StudentHeroSlideItem,
  StudentOrgSlideItem,
  CardAnatomyField,
  StudentWorkflowConfigStep,
  StudentAssemblyTierItem,
  StudentWhyChooseReasonItem,
  StudentFaqItem,
} from "@/lib/dynamic-student-id-card-printing-types";

function AdminStudentIdCardPrintingContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicStudentIdCardPrintingData | null>(null);
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
      const res = await fetch("/api/admin/student-id-card-printing");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Student ID Card Printing data");
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

      const res = await fetch("/api/admin/student-id-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess("Student ID Card Printing page saved and published successfully!");
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

  const handleSaveSection = async (section: keyof DynamicStudentIdCardPrintingData) => {
    if (!data) return;
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/student-id-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section,
          sectionData: data[section],
        }),
      });

      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess(`Section '${String(section)}' saved successfully!`);
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || `Failed to save ${String(section)}`);
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error during save");
    } finally {
      setSaving(false);
    }
  };

  const handleResetToDefaults = async () => {
    if (
      !confirm(
        "Are you sure you want to reset the Student ID Card Printing page to factory defaults? All custom changes will be overwritten."
      )
    ) {
      return;
    }

    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/student-id-card-printing", {
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
            className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white font-mono"
          />

          {/* Direct Upload Button */}
          <label
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
              isUploading
                ? "bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed"
                : "bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border-slate-700 hover:border-cyan-500/50 shadow-sm"
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
          Loading Student ID Card Printing CMS...
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
    { id: "hero", label: "Hero & Details", icon: Sparkles },
    { id: "slides", label: "Hero Slides", icon: Camera },
    { id: "scope", label: "Institutions Scope", icon: School },
    { id: "anatomy", label: "Card Anatomy & Proofs", icon: CreditCard },
    { id: "design_pvc", label: "Design & PVC", icon: Sliders },
    { id: "process_assembly", label: "Workflow & Kits", icon: Workflow },
    { id: "lanyards_studio", label: "Lanyards & Studio", icon: Cpu },
    { id: "bulk_sessions", label: "Bulk & Sessions", icon: Boxes },
    { id: "security_apps", label: "Security & Utilities", icon: ShieldCheck },
    { id: "regional_why", label: "Regional & Value", icon: MapPin },
    { id: "pricing_faq", label: "Pricing & FAQs", icon: HelpCircle },
    { id: "cta_band", label: "CTA Conversion Band", icon: ArrowRight },
    { id: "seo", label: "SEO Metadata", icon: Globe },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
              Student ID Card Printing CMS
            </h1>
            <span className="text-[10px] font-black uppercase bg-cyan-950 text-cyan-300 border border-cyan-800/60 px-2.5 py-0.5 rounded-full">
              Full Suite Dynamic
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Customize all sections of the{" "}
            <code className="text-cyan-400">/student-id-card-printing/</code> page in real time with direct image upload support.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/student-id-card-printing/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 px-3.5 py-2 text-xs font-bold text-slate-200 border border-slate-700 shadow-sm transition"
          >
            <Eye className="h-4 w-4 text-cyan-400" />
            <span>Preview Page</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </Link>

          <button
            type="button"
            onClick={handleResetToDefaults}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-800/80 hover:bg-rose-950/60 hover:text-rose-300 hover:border-rose-800/60 px-3.5 py-2 text-xs font-bold text-slate-400 border border-slate-700 transition disabled:opacity-50"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={handleSaveWholePage}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-5 py-2 text-xs font-black text-white shadow-lg shadow-cyan-500/25 transition hover:scale-[1.02] disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Saving..." : "Save & Publish"}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="flex items-center gap-3 rounded-2xl bg-emerald-950/80 border border-emerald-700/60 p-4 text-xs font-bold text-emerald-300 shadow-lg">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <span>{saveSuccess}</span>
        </div>
      )}

      {saveError && (
        <div className="flex items-center gap-3 rounded-2xl bg-rose-950/80 border border-rose-700/60 p-4 text-xs font-bold text-rose-300 shadow-lg">
          <AlertCircle className="h-5 w-5 text-rose-400 shrink-0" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Tabs Bar */}
      <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-800/80">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800"
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. HERO TAB */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "hero" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Hero Headings &amp; Messaging</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure top banner eyebrow, main titles, lede, stats and CTA links.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("hero")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Hero</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Eyebrow Badge</label>
                <input
                  type="text"
                  value={data.hero.badge}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, badge: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Subtitle</label>
                <input
                  type="text"
                  value={data.hero.subtitle}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, subtitle: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Title Prefix</label>
                <input
                  type="text"
                  value={data.hero.titlePrefix}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, titlePrefix: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Title Gradient Highlight</label>
                <input
                  type="text"
                  value={data.hero.titleHighlight}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, titleHighlight: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-cyan-400 font-bold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Lede (Primary Summary)</label>
              <textarea
                rows={2}
                value={data.hero.lede}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, leede: e.target.value } as any })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Description Paragraph</label>
              <textarea
                rows={3}
                value={data.hero.description}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, description: e.target.value } })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
              />
            </div>

            {/* 4 Stats Chips */}
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <h3 className="text-xs font-black uppercase text-cyan-400 tracking-wider">
                Hero 4 Stat Chips
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {data.hero.stats.map((stat, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-3 space-y-2">
                    <div>
                      <label className="block text-[10px] text-slate-400">Label</label>
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) => {
                          const updated = [...data.hero.stats];
                          updated[idx] = { ...updated[idx], label: e.target.value };
                          setData({ ...data, hero: { ...data.hero, stats: updated } });
                        }}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-400">Value</label>
                      <input
                        type="text"
                        value={stat.value}
                        onChange={(e) => {
                          const updated = [...data.hero.stats];
                          updated[idx] = { ...updated[idx], value: e.target.value };
                          setData({ ...data, hero: { ...data.hero, stats: updated } });
                        }}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold text-cyan-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid gap-4 sm:grid-cols-2 pt-3 border-t border-slate-800">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <h4 className="text-xs font-bold text-cyan-400">Primary CTA Button</h4>
                <div>
                  <label className="block text-[10px] text-slate-400">Text</label>
                  <input
                    type="text"
                    value={data.hero.primaryCtaText}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: { ...data.hero, primaryCtaText: e.target.value },
                      })
                    }
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400">Link URL</label>
                  <input
                    type="text"
                    value={data.hero.primaryCtaLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: { ...data.hero, primaryCtaLink: e.target.value },
                      })
                    }
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <h4 className="text-xs font-bold text-cyan-400">Secondary CTA Button</h4>
                <div>
                  <label className="block text-[10px] text-slate-400">Text</label>
                  <input
                    type="text"
                    value={data.hero.secondaryCtaText}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: { ...data.hero, secondaryCtaText: e.target.value },
                      })
                    }
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400">Link URL</label>
                  <input
                    type="text"
                    value={data.hero.secondaryCtaLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: { ...data.hero, secondaryCtaLink: e.target.value },
                      })
                    }
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                  />
                </div>
              </div>
            </div>

            {/* 16 Key Identification Elements */}
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-black uppercase text-cyan-400 tracking-wider">
                    Hero Identification Elements Checklist
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Add or remove field chips shown in the bottom hero tray.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newField = prompt("Enter new student ID card field name:");
                    if (newField && newField.trim()) {
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          studentCardFields: [...data.hero.studentCardFields, newField.trim()],
                        },
                      });
                    }
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-3 py-1.5 text-xs font-bold text-cyan-300 border border-slate-700"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Element</span>
                </button>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.hero.studentCardFields.map((field, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-2 rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                  >
                    <input
                      type="text"
                      value={field}
                      onChange={(e) => {
                        const updated = [...data.hero.studentCardFields];
                        updated[idx] = e.target.value;
                        setData({ ...data, hero: { ...data.hero, studentCardFields: updated } });
                      }}
                      className="w-full bg-transparent text-xs text-white focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.hero.studentCardFields.filter((_, i) => i !== idx);
                        setData({ ...data, hero: { ...data.hero, studentCardFields: updated } });
                      }}
                      className="text-slate-500 hover:text-rose-400 p-1"
                      title="Remove field"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 mb-1">Bottom Note</label>
                <input
                  type="text"
                  value={data.hero.studentCardFieldsNote}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, studentCardFieldsNote: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. HERO SLIDES TAB (WITH IMAGE UPLOADS) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "slides" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Hero Showcase Carousel Slides</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Upload images and configure the showcase slides featured in the hero section.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const newSlide: StudentHeroSlideItem = {
                      id: `slide-${Date.now()}`,
                      imageSrc: "/images/student-hero-slide-school-id.jpg",
                      alt: "Custom Student ID Card Showcase by IDGen",
                      title: "New Student ID Card Model",
                      category: "School ID",
                      topBadge: "Student Identity",
                      specPill: "Gloss PVC",
                      bottomSpec: "Student Name • Class • QR Code",
                      hubTag: "GUWAHATI FACTORY",
                    };
                    setData({
                      ...data,
                      heroSlides: [...data.heroSlides, newSlide],
                    });
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-3.5 py-2 text-xs font-bold text-cyan-300 border border-slate-700"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Slide</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveSection("heroSlides")}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
                >
                  <Save className="h-3.5 w-3.5" />
                  <span>Save Slides</span>
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {data.heroSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-4 relative"
                >
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-xs font-black text-cyan-400">Slide #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.heroSlides.filter((_, i) => i !== idx);
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="text-slate-500 hover:text-rose-400"
                      title="Delete slide"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Direct Image Upload with Thumbnail Preview */}
                  {renderImageUploadField(
                    "Slide Image (Upload or URL)",
                    slide.imageSrc,
                    (url) => {
                      const updated = [...data.heroSlides];
                      updated[idx] = { ...updated[idx], imageSrc: url };
                      setData({ ...data, heroSlides: updated });
                    },
                    `heroSlide-${slide.id}`
                  )}

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] text-slate-400">Title</label>
                      <input
                        type="text"
                        value={slide.title}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[idx] = { ...updated[idx], title: e.target.value };
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400">Category Tag</label>
                      <input
                        type="text"
                        value={slide.category}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[idx] = { ...updated[idx], category: e.target.value };
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <label className="block text-[10px] text-slate-400">Top-Left Badge</label>
                      <input
                        type="text"
                        value={slide.topBadge}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[idx] = { ...updated[idx], topBadge: e.target.value };
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400">Spec Pill</label>
                      <input
                        type="text"
                        value={slide.specPill}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[idx] = { ...updated[idx], specPill: e.target.value };
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400">Hub Tag</label>
                      <input
                        type="text"
                        value={slide.hubTag}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[idx] = { ...updated[idx], hubTag: e.target.value };
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400">Bottom Spec Bar</label>
                    <input
                      type="text"
                      value={slide.bottomSpec}
                      onChange={(e) => {
                        const updated = [...data.heroSlides];
                        updated[idx] = { ...updated[idx], bottomSpec: e.target.value };
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. INSTITUTIONS SCOPE TAB (WITH IMAGE UPLOADS) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "scope" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Institutions Scope Carousel</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure the 4 institutional tiers: Schools, Colleges, Universities, Coaching.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("scope")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Scope</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Section Title</label>
                <input
                  type="text"
                  value={data.scope.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      scope: { ...data.scope, title: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Eyebrow</label>
                <input
                  type="text"
                  value={data.scope.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      scope: { ...data.scope, eyebrow: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Description</label>
              <textarea
                rows={2}
                value={data.scope.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    scope: { ...data.scope, description: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
              />
            </div>

            {/* 4 Institution Types */}
            <div className="grid gap-6 md:grid-cols-2 pt-3 border-t border-slate-800">
              {data.scope.items.map((org, idx) => (
                <div key={org.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-black text-cyan-400">{org.title} Tier</span>
                    <span className="text-[10px] text-slate-500 font-mono">ID: {org.id}</span>
                  </div>

                  {/* Optional Institution Showcase Image */}
                  {renderImageUploadField(
                    "Optional Banner / Photo",
                    org.imageSrc,
                    (url) => {
                      const updated = [...data.scope.items];
                      updated[idx] = { ...updated[idx], imageSrc: url };
                      setData({ ...data, scope: { ...data.scope, items: updated } });
                    },
                    `scopeOrg-${org.id}`
                  )}

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] text-slate-400">Badge</label>
                      <input
                        type="text"
                        value={org.badge}
                        onChange={(e) => {
                          const updated = [...data.scope.items];
                          updated[idx] = { ...updated[idx], badge: e.target.value };
                          setData({ ...data, scope: { ...data.scope, items: updated } });
                        }}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-400">For Label</label>
                      <input
                        type="text"
                        value={org.forLabel}
                        onChange={(e) => {
                          const updated = [...data.scope.items];
                          updated[idx] = { ...updated[idx], forLabel: e.target.value };
                          setData({ ...data, scope: { ...data.scope, items: updated } });
                        }}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400">Description</label>
                    <textarea
                      rows={2}
                      value={org.categoryDesc}
                      onChange={(e) => {
                        const updated = [...data.scope.items];
                        updated[idx] = { ...updated[idx], categoryDesc: e.target.value };
                        setData({ ...data, scope: { ...data.scope, items: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400 mb-1">
                      Sub-Institutions / Target Audience (One per line)
                    </label>
                    <textarea
                      rows={5}
                      value={org.items.join("\n")}
                      onChange={(e) => {
                        const lines = e.target.value.split("\n").filter((l) => l.trim().length > 0);
                        const updated = [...data.scope.items];
                        updated[idx] = { ...updated[idx], items: lines };
                        setData({ ...data, scope: { ...data.scope, items: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 p-2.5 text-xs text-white font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. CARD ANATOMY TAB (WITH FRONT/BACK PROOF IMAGE UPLOADS) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "anatomy" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Student Card Anatomy &amp; Field Checklists</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Upload card artwork proofs and configure front and back layout fields.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("cardAnatomy")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Anatomy</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Section Title</label>
                <input
                  type="text"
                  value={data.cardAnatomy.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      cardAnatomy: { ...data.cardAnatomy, title: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Subheading</label>
                <input
                  type="text"
                  value={data.cardAnatomy.subheading}
                  onChange={(e) =>
                    setData({
                      ...data,
                      cardAnatomy: { ...data.cardAnatomy, subheading: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            {/* Front & Back Uploaded Card Graphics */}
            <div className="grid gap-6 lg:grid-cols-2 pt-3 border-t border-slate-800">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <span className="text-xs font-black text-cyan-400 uppercase">Front Card Proof Graphic</span>
                <p className="text-[11px] text-slate-400">
                  Upload an official high-res front proof to showcase directly inside the card frame.
                </p>
                {renderImageUploadField(
                  "Front Proof Graphic",
                  data.cardAnatomy.frontCardImage,
                  (url) => {
                    setData({
                      ...data,
                      cardAnatomy: { ...data.cardAnatomy, frontCardImage: url },
                    });
                  },
                  "anatomyFrontProof"
                )}
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <span className="text-xs font-black text-cyan-400 uppercase">Back Card Proof Graphic</span>
                <p className="text-[11px] text-slate-400">
                  Upload an official high-res back proof to showcase barcode / instructions layout.
                </p>
                {renderImageUploadField(
                  "Back Proof Graphic",
                  data.cardAnatomy.backCardImage,
                  (url) => {
                    setData({
                      ...data,
                      cardAnatomy: { ...data.cardAnatomy, backCardImage: url },
                    });
                  },
                  "anatomyBackProof"
                )}
              </div>
            </div>

            {/* Front & Back Field Checklists */}
            <div className="grid gap-6 lg:grid-cols-2 pt-3 border-t border-slate-800">
              {/* Front Fields */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h3 className="text-xs font-black text-cyan-400 uppercase">Front Fields (Card Face)</h3>
                  <button
                    type="button"
                    onClick={() => {
                      const name = prompt("Enter front field name:");
                      if (name && name.trim()) {
                        const newF: CardAnatomyField = {
                          id: `f-${Date.now()}`,
                          name: name.trim(),
                          category: "front",
                          iconName: "CreditCard",
                          hint: "Front layout field",
                        };
                        setData({
                          ...data,
                          cardAnatomy: {
                            ...data.cardAnatomy,
                            frontFields: [...data.cardAnatomy.frontFields, newF],
                          },
                        });
                      }
                    }}
                    className="text-xs font-bold text-cyan-300 hover:text-white"
                  >
                    + Add Field
                  </button>
                </div>

                <div className="space-y-2">
                  {data.cardAnatomy.frontFields.map((field, idx) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={field.name}
                        onChange={(e) => {
                          const updated = [...data.cardAnatomy.frontFields];
                          updated[idx] = { ...updated[idx], name: e.target.value };
                          setData({
                            ...data,
                            cardAnatomy: { ...data.cardAnatomy, frontFields: updated },
                          });
                        }}
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = data.cardAnatomy.frontFields.filter((_, i) => i !== idx);
                          setData({
                            ...data,
                            cardAnatomy: { ...data.cardAnatomy, frontFields: updated },
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

              {/* Back Fields */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h3 className="text-xs font-black text-cyan-400 uppercase">Back Fields (Reverse Face)</h3>
                  <button
                    type="button"
                    onClick={() => {
                      const name = prompt("Enter back field name:");
                      if (name && name.trim()) {
                        const newF: CardAnatomyField = {
                          id: `b-${Date.now()}`,
                          name: name.trim(),
                          category: "back",
                          iconName: "QrCode",
                          hint: "Reverse layout field",
                        };
                        setData({
                          ...data,
                          cardAnatomy: {
                            ...data.cardAnatomy,
                            backFields: [...data.cardAnatomy.backFields, newF],
                          },
                        });
                      }
                    }}
                    className="text-xs font-bold text-cyan-300 hover:text-white"
                  >
                    + Add Field
                  </button>
                </div>

                <div className="space-y-2">
                  {data.cardAnatomy.backFields.map((field, idx) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={field.name}
                        onChange={(e) => {
                          const updated = [...data.cardAnatomy.backFields];
                          updated[idx] = { ...updated[idx], name: e.target.value };
                          setData({
                            ...data,
                            cardAnatomy: { ...data.cardAnatomy, backFields: updated },
                          });
                        }}
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = data.cardAnatomy.backFields.filter((_, i) => i !== idx);
                          setData({
                            ...data,
                            cardAnatomy: { ...data.cardAnatomy, backFields: updated },
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
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. DESIGN & PVC TAB (WITH SHOWCASE IMAGE UPLOAD) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "design_pvc" && (
        <div className="space-y-8">
          {/* Design Section */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Student ID Card Design &amp; Branding</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Upload visual identity artwork image and configure 10 customization elements.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("design")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Design</span>
              </button>
            </div>

            {/* Showcase Image Upload with Live Thumbnail */}
            {renderImageUploadField(
              "Artwork Showcase Image",
              data.design.imageSrc,
              (url) => {
                setData({
                  ...data,
                  design: { ...data.design, imageSrc: url },
                });
              },
              "designShowcaseImage"
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Image Alt Text</label>
                <input
                  type="text"
                  value={data.design.imageAlt}
                  onChange={(e) =>
                    setData({
                      ...data,
                      design: { ...data.design, imageAlt: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Top-Left Badge</label>
                <input
                  type="text"
                  value={data.design.badgeTopLeft}
                  onChange={(e) =>
                    setData({
                      ...data,
                      design: { ...data.design, badgeTopLeft: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Top-Right Badge</label>
                <input
                  type="text"
                  value={data.design.badgeTopRight}
                  onChange={(e) =>
                    setData({
                      ...data,
                      design: { ...data.design, badgeTopRight: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Footer Tagline</label>
                <input
                  type="text"
                  value={data.design.footerTagline}
                  onChange={(e) =>
                    setData({
                      ...data,
                      design: { ...data.design, footerTagline: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Footer Title</label>
                <input
                  type="text"
                  value={data.design.footerTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      design: { ...data.design, footerTitle: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800">
              <h3 className="text-xs font-black uppercase text-cyan-400 tracking-wider">
                10 Customization Elements
              </h3>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {data.design.elements.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 p-2"
                  >
                    <span className="text-[10px] font-black text-cyan-400 px-1.5">#{idx + 1}</span>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => {
                        const updated = [...data.design.elements];
                        updated[idx] = { ...updated[idx], name: e.target.value };
                        setData({ ...data, design: { ...data.design, elements: updated } });
                      }}
                      className="w-full bg-transparent text-xs text-white focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PVC Cards Section */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">PVC Student ID Cards (3 Bento Cards)</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure the 3 PVC card specification cards shown on the page.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("pvc")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save PVC</span>
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {data.pvc.cards.map((card, idx) => (
                <div key={card.number} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-black text-cyan-400">Card {card.number}</span>
                    <span className="text-[10px] font-bold text-slate-500">{card.tag}</span>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400">Title</label>
                    <input
                      type="text"
                      value={card.title}
                      onChange={(e) => {
                        const updated = [...data.pvc.cards];
                        updated[idx] = { ...updated[idx], title: e.target.value };
                        setData({ ...data, pvc: { ...data.pvc, cards: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400">Description</label>
                    <textarea
                      rows={3}
                      value={card.description}
                      onChange={(e) => {
                        const updated = [...data.pvc.cards];
                        updated[idx] = { ...updated[idx], description: e.target.value };
                        setData({ ...data, pvc: { ...data.pvc, cards: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] text-slate-400">Bottom Left</label>
                      <input
                        type="text"
                        value={card.bottomLeft}
                        onChange={(e) => {
                          const updated = [...data.pvc.cards];
                          updated[idx] = { ...updated[idx], bottomLeft: e.target.value };
                          setData({ ...data, pvc: { ...data.pvc, cards: updated } });
                        }}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-400">Bottom Right</label>
                      <input
                        type="text"
                        value={card.bottomRight}
                        onChange={(e) => {
                          const updated = [...data.pvc.cards];
                          updated[idx] = { ...updated[idx], bottomRight: e.target.value };
                          setData({ ...data, pvc: { ...data.pvc, cards: updated } });
                        }}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. WORKFLOW & KITS TAB (WITH STEP IMAGE UPLOADS) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "process_assembly" && (
        <div className="space-y-8">
          {/* 8-Step Process */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">8-Step Institution Production Workflow</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure titles, descriptions, and optional step illustrations with image upload.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("process")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Workflow</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.process.steps.map((step, idx) => (
                <div key={step.step} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-black text-cyan-400">Step {step.step}</span>
                    <span className="text-[10px] text-slate-500 font-bold">{step.categoryTag}</span>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400">Title</label>
                    <input
                      type="text"
                      value={step.title}
                      onChange={(e) => {
                        const updated = [...data.process.steps];
                        updated[idx] = { ...updated[idx], title: e.target.value };
                        setData({ ...data, process: { ...data.process, steps: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                    />
                  </div>

                  {/* Step Image Upload */}
                  {renderImageUploadField(
                    "Step Image / Graphic",
                    step.imageSrc,
                    (url) => {
                      const updated = [...data.process.steps];
                      updated[idx] = { ...updated[idx], imageSrc: url };
                      setData({ ...data, process: { ...data.process, steps: updated } });
                    },
                    `workflowStep-${step.step}`
                  )}

                  <div>
                    <label className="block text-[10px] text-slate-400">Description</label>
                    <textarea
                      rows={2}
                      value={step.description}
                      onChange={(e) => {
                        const updated = [...data.process.steps];
                        updated[idx] = { ...updated[idx], description: e.target.value };
                        setData({ ...data, process: { ...data.process, steps: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Assembly Tiers */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Assembly Options (4 Tiers)</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Card Only, Card + Holder, Wearable Student ID, and Complete Setup.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("assembly")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Assembly</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.assembly.tiers.map((tier, idx) => (
                <div
                  key={tier.tier}
                  className={`rounded-2xl border p-4 space-y-3 ${
                    tier.isHighlight
                      ? "border-cyan-500 bg-cyan-950/20"
                      : "border-slate-800 bg-slate-950"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-black text-cyan-400">TIER {tier.tier}</span>
                    {tier.isHighlight && (
                      <span className="text-[9px] font-black uppercase text-cyan-300 bg-cyan-900/80 px-2 py-0.5 rounded-full">
                        Highlight
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400">Title</label>
                    <input
                      type="text"
                      value={tier.title}
                      onChange={(e) => {
                        const updated = [...data.assembly.tiers];
                        updated[idx] = { ...updated[idx], title: e.target.value };
                        setData({ ...data, assembly: { ...data.assembly, tiers: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                    />
                  </div>

                  {/* Kit Image Upload */}
                  {renderImageUploadField(
                    "Tier Kit Image",
                    tier.imageSrc,
                    (url) => {
                      const updated = [...data.assembly.tiers];
                      updated[idx] = { ...updated[idx], imageSrc: url };
                      setData({ ...data, assembly: { ...data.assembly, tiers: updated } });
                    },
                    `assemblyTier-${tier.tier}`
                  )}

                  <div>
                    <label className="block text-[10px] text-slate-400">Kit Components</label>
                    <textarea
                      rows={2}
                      value={tier.card}
                      onChange={(e) => {
                        const updated = [...data.assembly.tiers];
                        updated[idx] = { ...updated[idx], card: e.target.value };
                        setData({ ...data, assembly: { ...data.assembly, tiers: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-cyan-300 font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400">Description</label>
                    <textarea
                      rows={2}
                      value={tier.desc}
                      onChange={(e) => {
                        const updated = [...data.assembly.tiers];
                        updated[idx] = { ...updated[idx], desc: e.target.value };
                        setData({ ...data, assembly: { ...data.assembly, tiers: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 7. LANYARDS & STUDIO TAB (WITH STUDIO IMAGE UPLOAD) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "lanyards_studio" && (
        <div className="space-y-8">
          {/* Lanyards */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Custom Student ID Lanyards</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure custom branded lanyard features and 4-step typical setup chain.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("lanyards")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Lanyards</span>
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase text-cyan-400 tracking-wider">
                6 Customization Points
              </h3>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {data.lanyards.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 p-2">
                    <span className="text-[10px] font-black text-cyan-400 px-1.5">0{idx + 1}</span>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const updated = [...data.lanyards.items];
                        updated[idx] = e.target.value;
                        setData({ ...data, lanyards: { ...data.lanyards, items: updated } });
                      }}
                      className="w-full bg-transparent text-xs text-white focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800">
              <h3 className="text-xs font-black uppercase text-cyan-400 tracking-wider">
                4-Step Setup Chain
              </h3>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {data.lanyards.setupSteps.map((step, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={step}
                    onChange={(e) => {
                      const updated = [...data.lanyards.setupSteps];
                      updated[idx] = e.target.value;
                      setData({ ...data, lanyards: { ...data.lanyards, setupSteps: updated } });
                    }}
                    className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white font-bold"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* IDGen Studio */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">IDGen Studio — Data Collection Platform</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Upload platform screenshot and configure ingestion flow steps.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("studio")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Studio</span>
              </button>
            </div>

            {/* Studio Image Upload with Live Thumbnail */}
            {renderImageUploadField(
              "Studio Platform Interface Image",
              data.studio.imageSrc,
              (url) => {
                setData({
                  ...data,
                  studio: { ...data.studio, imageSrc: url },
                });
              },
              "studioShowcaseImage"
            )}

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Badge</label>
                <input
                  type="text"
                  value={data.studio.badge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studio: { ...data.studio, badge: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Image Tag</label>
                <input
                  type="text"
                  value={data.studio.imageTag}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studio: { ...data.studio, imageTag: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Image Title</label>
                <input
                  type="text"
                  value={data.studio.imageTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      studio: { ...data.studio, imageTitle: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800">
              <h3 className="text-xs font-black uppercase text-cyan-400 tracking-wider">
                Digital Flow Steps (6 Steps)
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.studio.flowSteps.map((step, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={step}
                    onChange={(e) => {
                      const updated = [...data.studio.flowSteps];
                      updated[idx] = e.target.value;
                      setData({ ...data, studio: { ...data.studio, flowSteps: updated } });
                    }}
                    className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white font-bold"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 8. BULK & SESSIONS TAB */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "bulk_sessions" && (
        <div className="space-y-8">
          {/* Bulk */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Bulk Student ID Card Requirements</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure batch-scale requirements and production schedule factor lists.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("bulk")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Bulk</span>
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <h3 className="text-xs font-black text-cyan-400">
                  {data.bulk.leftBoxTitle}
                </h3>
                <textarea
                  rows={7}
                  value={data.bulk.bulkRequirements.join("\n")}
                  onChange={(e) => {
                    const lines = e.target.value.split("\n").filter((l) => l.trim().length > 0);
                    setData({
                      ...data,
                      bulk: { ...data.bulk, bulkRequirements: lines },
                    });
                  }}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-xs text-white font-mono"
                />
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <h3 className="text-xs font-black text-cyan-400">
                  {data.bulk.rightBoxTitle}
                </h3>
                <textarea
                  rows={7}
                  value={data.bulk.productionScheduleFactors.join("\n")}
                  onChange={(e) => {
                    const lines = e.target.value.split("\n").filter((l) => l.trim().length > 0);
                    setData({
                      ...data,
                      bulk: { ...data.bulk, productionScheduleFactors: lines },
                    });
                  }}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Sessions & Replacements */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Annual Sessions &amp; Replacements</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure the annual enrollment batch flow and replacement card triggers.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("sessions")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Sessions</span>
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <h3 className="text-xs font-black text-cyan-400">
                  {data.sessions.box1Title}
                </h3>
                <label className="block text-[10px] text-slate-400">Annual Flow Steps (comma separated)</label>
                <input
                  type="text"
                  value={data.sessions.annualFlowSteps.join(", ")}
                  onChange={(e) => {
                    const steps = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                    setData({
                      ...data,
                      sessions: { ...data.sessions, annualFlowSteps: steps },
                    });
                  }}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white font-mono"
                />
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <h3 className="text-xs font-black text-cyan-400">
                  {data.sessions.box2Title}
                </h3>
                <label className="block text-[10px] text-slate-400">Replacement Reasons (One per line)</label>
                <textarea
                  rows={5}
                  value={data.sessions.replacementReasons.join("\n")}
                  onChange={(e) => {
                    const lines = e.target.value.split("\n").filter((l) => l.trim().length > 0);
                    setData({
                      ...data,
                      sessions: { ...data.sessions, replacementReasons: lines },
                    });
                  }}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 9. SECURITY & UTILITIES TAB */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "security_apps" && (
        <div className="space-y-8">
          {/* Security & QR */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">QR Code / Barcode &amp; Security Accuracy</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure QR scanning applications and quality control workflow checkpoints.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("security")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Security</span>
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <h3 className="text-xs font-black text-cyan-400">QR Code / Barcode Applications</h3>
                <textarea
                  rows={6}
                  value={data.security.qrApplications.join("\n")}
                  onChange={(e) => {
                    const lines = e.target.value.split("\n").filter((l) => l.trim().length > 0);
                    setData({
                      ...data,
                      security: { ...data.security, qrApplications: lines },
                    });
                  }}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-xs text-white font-mono"
                />
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <h3 className="text-xs font-black text-cyan-400">Quality Check Workflow Steps</h3>
                <input
                  type="text"
                  value={data.security.qcWorkflowSteps.join(", ")}
                  onChange={(e) => {
                    const steps = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                    setData({
                      ...data,
                      security: { ...data.security, qcWorkflowSteps: steps },
                    });
                  }}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* 10 Campus Utilities Applications */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Student ID Card Applications (10 Items)</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  The 10 campus utilities: Library access, exam ID, turnstile verification, etc.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("applications")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Utilities</span>
              </button>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {data.applications.applications.map((app, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 p-2">
                  <span className="text-[10px] font-black text-cyan-400 px-1.5">0{idx + 1}</span>
                  <input
                    type="text"
                    value={app}
                    onChange={(e) => {
                      const updated = [...data.applications.applications];
                      updated[idx] = e.target.value;
                      setData({
                        ...data,
                        applications: { ...data.applications, applications: updated },
                      });
                    }}
                    className="w-full bg-transparent text-xs text-white focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 10. REGIONAL & VALUE TAB */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "regional_why" && (
        <div className="space-y-8">
          {/* Regional Coverage */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Assam &amp; Northeast India Coverage</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure regional headlines and the list of active service cities.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("coverage")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Coverage</span>
              </button>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-300">Supported Cities (Comma separated)</label>
              <input
                type="text"
                value={data.coverage.cities.join(", ")}
                onChange={(e) => {
                  const cities = e.target.value.split(",").map((c) => c.trim()).filter(Boolean);
                  setData({
                    ...data,
                    coverage: { ...data.coverage, cities },
                  });
                }}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white font-mono"
              />
            </div>
          </div>

          {/* Why Choose IDGen */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Why Choose IDGen for Student Cards (6 Reasons)</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure the 6 institutional value pillars.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("whyChoose")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Reasons</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.whyChoose.reasons.map((reason, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                  <span className="text-[10px] font-black text-cyan-400">Pillar #{idx + 1}</span>
                  <div>
                    <label className="block text-[10px] text-slate-400">Title</label>
                    <input
                      type="text"
                      value={reason.title}
                      onChange={(e) => {
                        const updated = [...data.whyChoose.reasons];
                        updated[idx] = { ...updated[idx], title: e.target.value };
                        setData({ ...data, whyChoose: { ...data.whyChoose, reasons: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-400">Body</label>
                    <textarea
                      rows={2}
                      value={reason.body}
                      onChange={(e) => {
                        const updated = [...data.whyChoose.reasons];
                        updated[idx] = { ...updated[idx], body: e.target.value };
                        setData({ ...data, whyChoose: { ...data.whyChoose, reasons: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 11. PRICING & FAQS TAB */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "pricing_faq" && (
        <div className="space-y-8">
          {/* Pricing Factors */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Student ID Card Pricing (10 Cost Factors)</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure the 10 parameters influencing bulk pricing.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("pricing")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Pricing</span>
              </button>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {data.pricing.factors.map((factor, idx) => (
                <div key={idx} className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950 p-2">
                  <span className="text-[10px] font-black text-cyan-400">0{idx + 1}</span>
                  <input
                    type="text"
                    value={factor}
                    onChange={(e) => {
                      const updated = [...data.pricing.factors];
                      updated[idx] = e.target.value;
                      setData({ ...data, pricing: { ...data.pricing, factors: updated } });
                    }}
                    className="w-full bg-transparent text-xs text-white focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Manager */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Frequently Asked Questions ({data.faq.faqs.length})</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Add, edit or reorder the student ID card printing FAQs.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const newFaq: StudentFaqItem = {
                      q: "New Student ID Question?",
                      a: "Answer description here.",
                    };
                    setData({
                      ...data,
                      faq: { ...data.faq, faqs: [...data.faq.faqs, newFaq] },
                    });
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-3.5 py-2 text-xs font-bold text-cyan-300 border border-slate-700"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add FAQ</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveSection("faq")}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
                >
                  <Save className="h-3.5 w-3.5" />
                  <span>Save FAQs</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {data.faq.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-cyan-400">Q#{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.faq.faqs.filter((_, i) => i !== idx);
                        setData({ ...data, faq: { ...data.faq, faqs: updated } });
                      }}
                      className="text-slate-500 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={faq.q}
                    onChange={(e) => {
                      const updated = [...data.faq.faqs];
                      updated[idx] = { ...updated[idx], q: e.target.value };
                      setData({ ...data, faq: { ...data.faq, faqs: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white font-bold"
                  />
                  <textarea
                    rows={2}
                    value={faq.a}
                    onChange={(e) => {
                      const updated = [...data.faq.faqs];
                      updated[idx] = { ...updated[idx], a: e.target.value };
                      setData({ ...data, faq: { ...data.faq, faqs: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 12. CTA CONVERSION BAND TAB */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "cta_band" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">Quick Answer &amp; Conversion CTA Band</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure the bottom conversion banner headlines, quick answer highlight and actions.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("quickAnswerAndCta")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save CTA Band</span>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Quick Answer Eyebrow Badge</label>
                <input
                  type="text"
                  value={data.quickAnswerAndCta.quickAnswerBadge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      quickAnswerAndCta: {
                        ...data.quickAnswerAndCta,
                        quickAnswerBadge: e.target.value,
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Quick Answer Body</label>
                <textarea
                  rows={2}
                  value={data.quickAnswerAndCta.quickAnswerBody}
                  onChange={(e) =>
                    setData({
                      ...data,
                      quickAnswerAndCta: {
                        ...data.quickAnswerAndCta,
                        quickAnswerBody: e.target.value,
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 pt-3 border-t border-slate-800">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">CTA Headline</label>
                  <input
                    type="text"
                    value={data.quickAnswerAndCta.ctaTitle}
                    onChange={(e) =>
                      setData({
                        ...data,
                        quickAnswerAndCta: {
                          ...data.quickAnswerAndCta,
                          ctaTitle: e.target.value,
                        },
                      })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white font-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">CTA Body</label>
                  <input
                    type="text"
                    value={data.quickAnswerAndCta.ctaBody}
                    onChange={(e) =>
                      setData({
                        ...data,
                        quickAnswerAndCta: {
                          ...data.quickAnswerAndCta,
                          ctaBody: e.target.value,
                        },
                      })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Primary Button Text</label>
                  <input
                    type="text"
                    value={data.quickAnswerAndCta.primaryButtonText}
                    onChange={(e) =>
                      setData({
                        ...data,
                        quickAnswerAndCta: {
                          ...data.quickAnswerAndCta,
                          primaryButtonText: e.target.value,
                        },
                      })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Primary Button Link</label>
                  <input
                    type="text"
                    value={data.quickAnswerAndCta.primaryButtonLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        quickAnswerAndCta: {
                          ...data.quickAnswerAndCta,
                          primaryButtonLink: e.target.value,
                        },
                      })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white font-mono"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 13. SEO METADATA TAB */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeTab === "seo" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-white">SEO &amp; OpenGraph Metadata</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure search engine title, meta description, and canonical path.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSaveSection("metadata")}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition disabled:opacity-50"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Metadata</span>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Page Title Tag</label>
                <input
                  type="text"
                  value={data.metadata.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      metadata: { ...data.metadata, title: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Meta Description</label>
                <textarea
                  rows={3}
                  value={data.metadata.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      metadata: { ...data.metadata, description: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Canonical URL Path</label>
                <input
                  type="text"
                  value={data.metadata.path}
                  onChange={(e) =>
                    setData({
                      ...data,
                      metadata: { ...data.metadata, path: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminStudentIdCardPrintingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
        </div>
      }
    >
      <AdminStudentIdCardPrintingContent />
    </Suspense>
  );
}
