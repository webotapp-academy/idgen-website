"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Save,
  RotateCcw,
  Sparkles,
  Camera,
  Layers,
  MapPin,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  UploadCloud,
  Check,
  Plus,
  Trash2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import type {
  DynamicCaseStudiesPageData,
  CaseStudiesHeroData,
  CaseStudiesCtaData,
  CaseStudiesHeroPillar,
} from "@/lib/dynamic-case-studies-types";

interface AdminCaseStudiesSectionsProps {
  pageData: DynamicCaseStudiesPageData;
  activeSection: "hero" | "cta";
  onSaveSection: (section: "hero" | "cta", data: CaseStudiesHeroData | CaseStudiesCtaData) => Promise<void>;
  onResetPage: () => Promise<void>;
  saving: boolean;
}

export function AdminCaseStudiesSections({
  pageData,
  activeSection,
  onSaveSection,
  onResetPage,
  saving,
}: AdminCaseStudiesSectionsProps) {
  const [heroForm, setHeroForm] = useState<CaseStudiesHeroData>(pageData.hero);
  const [ctaForm, setCtaForm] = useState<CaseStudiesCtaData>(pageData.cta);
  const [uploadingPillarIdx, setUploadingPillarIdx] = useState<number | null>(null);

  // Sync state if pageData updates from outside
  React.useEffect(() => {
    setHeroForm(pageData.hero);
    setCtaForm(pageData.cta);
  }, [pageData]);

  // Handle image upload for Hero showcase specimen pillars
  const handlePillarImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    pillarIdx: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingPillarIdx(pillarIdx);
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Image = reader.result as string;
          const res = await fetch("/api/admin/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64Image, filename: file.name }),
          });
          const data = await res.json();
          if (data.success && data.url) {
            setHeroForm((prev) => {
              const updatedPillars = [...prev.pillars];
              updatedPillars[pillarIdx] = {
                ...updatedPillars[pillarIdx],
                image: data.url,
              };
              return { ...prev, pillars: updatedPillars };
            });
          } else {
            alert(data.error || "Failed to upload image.");
          }
        } catch (err) {
          console.error(err);
          alert("Error uploading image");
        } finally {
          setUploadingPillarIdx(null);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error(err);
      setUploadingPillarIdx(null);
    }
  };

  // ─────────────────────────────────────────────────────────────
  // HERO SECTION EDITOR
  // ─────────────────────────────────────────────────────────────
  if (activeSection === "hero") {
    return (
      <div className="space-y-8 animate-fadeIn">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#009fe3]/10 border border-[#009fe3]/30 text-[#009fe3] text-xs font-bold mb-2">
              <Camera className="h-3.5 w-3.5" />
              <span>Hero &amp; Specimen Stage Editor</span>
            </div>
            <h2 className="text-xl font-bold text-white">Case Studies Hero Section</h2>
            <p className="text-xs text-slate-400 mt-1">
              Edit the main title, verified badge, description, feature pills, trust guarantees, and right-hand specimen showcase.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSaveSection("hero", heroForm)}
              disabled={saving}
              className="px-5 py-2.5 rounded-xl bg-[#009fe3] text-white font-bold text-xs hover:bg-[#008bc9] shadow-lg shadow-[#009fe3]/25 transition flex items-center gap-2 disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>{saving ? "Saving Hero..." : "Save Hero Section"}</span>
            </button>
          </div>
        </div>

        {/* 1. Badge & Headings */}
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-5">
          <h3 className="text-sm font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
            <span>1. Pill Badge &amp; Main Headings</span>
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Pill Badge Text</label>
              <input
                type="text"
                value={heroForm.badge}
                onChange={(e) => setHeroForm({ ...heroForm, badge: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-hidden focus:border-[#009fe3] transition"
                placeholder="e.g. Real Delivered Projects"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Pill Badge Sub-text</label>
              <input
                type="text"
                value={heroForm.badgeSub}
                onChange={(e) => setHeroForm({ ...heroForm, badgeSub: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-hidden focus:border-[#009fe3] transition"
                placeholder="e.g. Verified Customer Proof"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Heading Prefix</label>
              <input
                type="text"
                value={heroForm.title}
                onChange={(e) => setHeroForm({ ...heroForm, title: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-hidden focus:border-[#009fe3] transition"
                placeholder="e.g. IDGen Case Studies & "
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Heading Highlight (Gradient)</label>
              <input
                type="text"
                value={heroForm.titleHighlight}
                onChange={(e) => setHeroForm({ ...heroForm, titleHighlight: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-hidden focus:border-[#009fe3] transition"
                placeholder="e.g. Identification Projects"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Hero Subtitle / Description</label>
            <textarea
              rows={3}
              value={heroForm.subtitle}
              onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-hidden focus:border-[#009fe3] transition"
              placeholder="Detailed description of identification projects..."
            />
          </div>
        </div>

        {/* 2. 4 Feature Pills */}
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-5">
          <h3 className="text-sm font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
            <span>2. 4 Feature Pills (Below Description)</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {heroForm.featurePills.map((pill, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2.5">
                <span className="text-[10px] font-bold text-[#009fe3] uppercase tracking-wider block">
                  Pill #{idx + 1}
                </span>
                <div>
                  <label className="text-[11px] font-medium text-slate-400">Title</label>
                  <input
                    type="text"
                    value={pill.title}
                    onChange={(e) => {
                      const updated = [...heroForm.featurePills];
                      updated[idx] = { ...updated[idx], title: e.target.value };
                      setHeroForm({ ...heroForm, featurePills: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-hidden focus:border-[#009fe3] transition mt-1"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-slate-400">Subtitle</label>
                  <input
                    type="text"
                    value={pill.desc}
                    onChange={(e) => {
                      const updated = [...heroForm.featurePills];
                      updated[idx] = { ...updated[idx], desc: e.target.value };
                      setHeroForm({ ...heroForm, featurePills: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-hidden focus:border-[#009fe3] transition mt-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Action Buttons & Trust Points */}
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-5">
          <h3 className="text-sm font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
            <span>3. Hero CTAs &amp; Trust Points</span>
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase">Primary Button</span>
              <input
                type="text"
                placeholder="Button Label"
                value={heroForm.primaryBtnText}
                onChange={(e) => setHeroForm({ ...heroForm, primaryBtnText: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white mb-1.5"
              />
              <input
                type="text"
                placeholder="Button Link (e.g. #project-gallery)"
                value={heroForm.primaryBtnLink}
                onChange={(e) => setHeroForm({ ...heroForm, primaryBtnLink: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase">Secondary Button</span>
              <input
                type="text"
                placeholder="Button Label"
                value={heroForm.secondaryBtnText}
                onChange={(e) => setHeroForm({ ...heroForm, secondaryBtnText: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white mb-1.5"
              />
              <input
                type="text"
                placeholder="Button Link (e.g. /request-a-quote/)"
                value={heroForm.secondaryBtnLink}
                onChange={(e) => setHeroForm({ ...heroForm, secondaryBtnLink: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase">Tertiary Button</span>
              <input
                type="text"
                placeholder="Button Label"
                value={heroForm.tertiaryBtnText}
                onChange={(e) => setHeroForm({ ...heroForm, tertiaryBtnText: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white mb-1.5"
              />
              <input
                type="text"
                placeholder="Button Link (e.g. /idgen-studio/)"
                value={heroForm.tertiaryBtnLink}
                onChange={(e) => setHeroForm({ ...heroForm, tertiaryBtnLink: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <label className="text-xs font-semibold text-slate-300 block mb-2">
              Trust Badges (Under Buttons)
            </label>
            <div className="grid sm:grid-cols-3 gap-3">
              {(heroForm.trustBadges || []).map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <input
                    type="text"
                    value={badge}
                    onChange={(e) => {
                      const updated = [...heroForm.trustBadges];
                      updated[idx] = e.target.value;
                      setHeroForm({ ...heroForm, trustBadges: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Right-Hand Specimen Showcase Stage (4 Pillars) */}
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
              <Camera className="h-4 w-4" />
              <span>4. Right-Hand 3D Specimen Showcase Stage (4 Interactive Tabs)</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {heroForm.pillars.map((pillar, idx) => (
              <div
                key={pillar.id || idx}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-[#009fe3] uppercase">
                    Tab #{idx + 1}: {pillar.label}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400">
                    ID: {pillar.id}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400">Tab Label</label>
                    <input
                      type="text"
                      value={pillar.label}
                      onChange={(e) => {
                        const updated = [...heroForm.pillars];
                        updated[idx] = { ...updated[idx], label: e.target.value };
                        setHeroForm({ ...heroForm, pillars: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400">Tab Subtitle</label>
                    <input
                      type="text"
                      value={pillar.sub}
                      onChange={(e) => {
                        const updated = [...heroForm.pillars];
                        updated[idx] = { ...updated[idx], sub: e.target.value };
                        setHeroForm({ ...heroForm, pillars: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400">Client / Org Name</label>
                    <input
                      type="text"
                      value={pillar.org}
                      onChange={(e) => {
                        const updated = [...heroForm.pillars];
                        updated[idx] = { ...updated[idx], org: e.target.value };
                        setHeroForm({ ...heroForm, pillars: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400">Location</label>
                    <input
                      type="text"
                      value={pillar.loc}
                      onChange={(e) => {
                        const updated = [...heroForm.pillars];
                        updated[idx] = { ...updated[idx], loc: e.target.value };
                        setHeroForm({ ...heroForm, pillars: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-400">Spec Detail</label>
                  <input
                    type="text"
                    value={pillar.req}
                    onChange={(e) => {
                      const updated = [...heroForm.pillars];
                      updated[idx] = { ...updated[idx], req: e.target.value };
                      setHeroForm({ ...heroForm, pillars: updated });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white mt-1"
                  />
                </div>

                {/* Image & Upload */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-400">Specimen Image URL</label>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="text"
                      value={pillar.image}
                      onChange={(e) => {
                        const updated = [...heroForm.pillars];
                        updated[idx] = { ...updated[idx], image: e.target.value };
                        setHeroForm({ ...heroForm, pillars: updated });
                      }}
                      className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                    />
                    <label className="px-3 py-1.5 rounded-lg bg-slate-800 text-teal-300 hover:bg-slate-700 text-xs font-semibold cursor-pointer transition flex items-center gap-1 border border-slate-700 shrink-0">
                      <UploadCloud className="h-3.5 w-3.5" />
                      <span>{uploadingPillarIdx === idx ? "..." : "Upload"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handlePillarImageUpload(e, idx)}
                      />
                    </label>
                  </div>
                </div>

                {/* Preview Thumbnail */}
                {pillar.image && (
                  <div className="relative h-28 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                    <Image
                      unoptimized
                      src={pillar.image}
                      alt={pillar.org}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5. Bottom Metrics Under Showcase */}
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-teal-400 uppercase tracking-wider">
            5. Showcase Bottom 3 Metrics
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {(heroForm.bottomMetrics || []).map((metric, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                <label className="text-[11px] font-semibold text-slate-400 block">Label</label>
                <input
                  type="text"
                  value={metric.label}
                  onChange={(e) => {
                    const updated = [...heroForm.bottomMetrics];
                    updated[idx] = { ...updated[idx], label: e.target.value };
                    setHeroForm({ ...heroForm, bottomMetrics: updated });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                />
                <label className="text-[11px] font-semibold text-slate-400 block mt-2">Value</label>
                <input
                  type="text"
                  value={metric.value}
                  onChange={(e) => {
                    const updated = [...heroForm.bottomMetrics];
                    updated[idx] = { ...updated[idx], value: e.target.value };
                    setHeroForm({ ...heroForm, bottomMetrics: updated });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-bold"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Save Bar */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={() => onSaveSection("hero", heroForm)}
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-[#009fe3] text-white font-bold text-sm hover:bg-[#008bc9] shadow-lg shadow-[#009fe3]/25 transition flex items-center gap-2 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Saving Hero Section..." : "Save Hero Section"}</span>
          </button>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // CLOSING CTA SECTION EDITOR
  // ─────────────────────────────────────────────────────────────
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Closing Requirement CTA Editor</span>
          </div>
          <h2 className="text-xl font-bold text-white">Closing Conversion Banner</h2>
          <p className="text-xs text-slate-400 mt-1">
            Customize the high-converting requirement proposal banner at the bottom of the Case Studies page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onSaveSection("cta", ctaForm)}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-[#009fe3] text-white font-bold text-xs hover:bg-[#008bc9] shadow-lg shadow-[#009fe3]/25 transition flex items-center gap-2 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Saving CTA..." : "Save CTA Section"}</span>
          </button>
        </div>
      </div>

      {/* Form Card */}
      <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Pill Badge Text</label>
            <input
              type="text"
              value={ctaForm.badge}
              onChange={(e) => setCtaForm({ ...ctaForm, badge: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-hidden focus:border-[#009fe3] transition"
              placeholder="e.g. Real Delivery Experience"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Main Heading</label>
            <input
              type="text"
              value={ctaForm.title}
              onChange={(e) => setCtaForm({ ...ctaForm, title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-hidden focus:border-[#009fe3] transition"
              placeholder="e.g. Have a Similar Identification Requirement?"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Description Paragraph</label>
          <textarea
            rows={3}
            value={ctaForm.description}
            onChange={(e) => setCtaForm({ ...ctaForm, description: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-hidden focus:border-[#009fe3] transition"
            placeholder="Tell IDGen about your organization..."
          />
        </div>

        {/* 3 Action Buttons */}
        <div className="pt-4 border-t border-slate-800 space-y-4">
          <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
            Action Buttons
          </h4>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase">Primary Button</span>
              <input
                type="text"
                placeholder="Button Label"
                value={ctaForm.primaryBtnText}
                onChange={(e) => setCtaForm({ ...ctaForm, primaryBtnText: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
              />
              <input
                type="text"
                placeholder="Button Link"
                value={ctaForm.primaryBtnLink}
                onChange={(e) => setCtaForm({ ...ctaForm, primaryBtnLink: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase">Secondary Button</span>
              <input
                type="text"
                placeholder="Button Label"
                value={ctaForm.secondaryBtnText}
                onChange={(e) => setCtaForm({ ...ctaForm, secondaryBtnText: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
              />
              <input
                type="text"
                placeholder="Button Link"
                value={ctaForm.secondaryBtnLink}
                onChange={(e) => setCtaForm({ ...ctaForm, secondaryBtnLink: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase">Tertiary Button</span>
              <input
                type="text"
                placeholder="Button Label"
                value={ctaForm.tertiaryBtnText}
                onChange={(e) => setCtaForm({ ...ctaForm, tertiaryBtnText: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
              />
              <input
                type="text"
                placeholder="Button Link"
                value={ctaForm.tertiaryBtnLink}
                onChange={(e) => setCtaForm({ ...ctaForm, tertiaryBtnLink: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
              />
            </div>
          </div>
        </div>

        {/* Footer info line */}
        <div className="pt-4 border-t border-slate-800 space-y-4">
          <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
            Banner Footer Line
          </h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Left Brand Notice</label>
              <input
                type="text"
                value={ctaForm.footerBrand}
                onChange={(e) => setCtaForm({ ...ctaForm, footerBrand: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Right Location &amp; Dispatch Notice</label>
              <input
                type="text"
                value={ctaForm.footerText}
                onChange={(e) => setCtaForm({ ...ctaForm, footerText: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={() => onSaveSection("cta", ctaForm)}
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-[#009fe3] text-white font-bold text-sm hover:bg-[#008bc9] shadow-lg shadow-[#009fe3]/25 transition flex items-center gap-2 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Saving CTA Section..." : "Save CTA Section"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
