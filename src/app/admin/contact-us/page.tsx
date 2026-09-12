"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MessageSquare,
  Building2,
  Clock,
  MapPin,
  Sparkles,
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  UploadCloud,
  Check,
  RefreshCw,
  Camera,
  Star,
  Send,
  Globe2,
} from "lucide-react";
import type {
  DynamicContactUsData,
  DynamicContactUsHero,
  DynamicContactUsChannels,
  DynamicContactUsFacility,
  DynamicContactUsFormSection,
  DynamicContactUsClosingCta,
  DynamicContactUsMeta,
  DynamicContactUsSocialLink,
} from "@/lib/dynamic-contact-us-types";

interface ContactLeadRecord {
  id: string;
  type: "quote" | "partner";
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  service?: string;
  city?: string;
  quantity?: string;
  message?: string;
  sourcePage?: string;
  status: "new" | "in_review" | "contacted" | "closed";
  createdAt: string;
}

function AdminContactUsContent() {
  const [mainMode, setMainMode] = useState<"cms" | "crm">("cms");
  const [data, setData] = useState<DynamicContactUsData | null>(null);
  const [activeTab, setActiveTab] = useState<string>("hero");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingSection, setSavingSection] = useState<string | null>(null);
  const [uploadingField, setUploadingField] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  // CRM State (Inbound Contact Inquiries)
  const [inquiries, setInquiries] = useState<ContactLeadRecord[]>([]);
  const [loadingCrm, setLoadingCrm] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedInquiry, setSelectedInquiry] = useState<ContactLeadRecord | null>(null);

  useEffect(() => {
    fetchData();
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      setLoadingCrm(true);
      const res = await fetch("/api/admin/leads/?type=quote");
      const json = await res.json();
      if (json.success) {
        setInquiries(json.leads || []);
      }
    } catch (e) {
      console.error("Failed to load inquiries:", e);
    } finally {
      setLoadingCrm(false);
    }
  };

  const updateInquiryStatus = async (id: string, status: string) => {
    try {
      const res = await fetch("/api/admin/leads/", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const json = await res.json();
      if (json.success) {
        fetchInquiries();
        if (selectedInquiry?.id === id) {
          setSelectedInquiry({ ...selectedInquiry, status: status as ContactLeadRecord["status"] });
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact message?")) return;
    try {
      const res = await fetch(`/api/admin/leads/?id=${id}`, { method: "DELETE" });
      const json = await res.json();
      if (json.success) {
        fetchInquiries();
        if (selectedInquiry?.id === id) setSelectedInquiry(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/contact-us");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Contact Us data");
      }
    } catch (err: any) {
      setSaveError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAll = async () => {
    if (!data) return;
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);
      const res = await fetch("/api/admin/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const json = await res.json();
      if (json.success) {
        setSaveSuccess("Contact Us page successfully published and saved!");
        setData(json.data);
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to save data");
      }
    } catch (err: any) {
      setSaveError(err.message || "Error saving data");
    } finally {
      setSaving(false);
    }
  };

  const handleSaveSection = async (sectionKey: keyof DynamicContactUsData) => {
    if (!data) return;
    try {
      setSavingSection(sectionKey as string);
      setSaveSuccess(null);
      setSaveError(null);
      const res = await fetch("/api/admin/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: sectionKey,
          sectionData: data[sectionKey],
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSaveSuccess(`Section '${String(sectionKey)}' saved successfully!`);
        setData(json.data);
        setTimeout(() => setSaveSuccess(null), 3000);
      } else {
        setSaveError(json.error || `Failed to save ${String(sectionKey)}`);
      }
    } catch (err: any) {
      setSaveError(err.message || "Error saving section");
    } finally {
      setSavingSection(null);
    }
  };

  const handleReset = async () => {
    if (!confirm("Are you sure you want to reset the Contact Us page back to factory defaults? Any custom edits will be lost.")) {
      return;
    }
    try {
      setSaving(true);
      const res = await fetch("/api/admin/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess("Contact Us page restored to default content!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Reset failed");
      }
    } catch (err: any) {
      setSaveError(err.message || "Error resetting data");
    } finally {
      setSaving(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldPath: string) => {
    const file = e.target.files?.[0];
    if (!file || !data) return;
    try {
      setUploadingField(fieldPath);
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (json.url) {
        if (fieldPath === "visual.primaryImage") {
          setData({
            ...data,
            hero: {
              ...data.hero,
              visual: {
                ...data.hero.visual,
                primaryImage: {
                  ...data.hero.visual.primaryImage,
                  src: json.url,
                },
              },
            },
          });
        } else if (fieldPath === "visual.secondaryImage") {
          setData({
            ...data,
            hero: {
              ...data.hero,
              visual: {
                ...data.hero.visual,
                secondaryImage: {
                  ...data.hero.visual.secondaryImage,
                  src: json.url,
                },
              },
            },
          });
        } else if (fieldPath === "visual.tertiaryImage") {
          setData({
            ...data,
            hero: {
              ...data.hero,
              visual: {
                ...data.hero.visual,
                tertiaryImage: {
                  ...data.hero.visual.tertiaryImage,
                  src: json.url,
                },
              },
            },
          });
        }
        setSaveSuccess("Image uploaded! Click 'Save Section' to publish.");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Upload failed");
      }
    } catch (err: any) {
      setSaveError(err.message || "Upload failed");
    } finally {
      setUploadingField(null);
    }
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <RefreshCw className="h-5 w-5 animate-spin text-[#009fe3]" />
          <span>Loading Contact Us CMS Data...</span>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center">
        <AlertCircle className="h-8 w-8 text-red-400 mx-auto mb-2" />
        <p className="text-sm text-red-300">Failed to load Contact Us CMS data.</p>
        <button
          onClick={fetchData}
          className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-lg text-xs"
        >
          Try Again
        </button>
      </div>
    );
  }

  const tabs = [
    { id: "hero", label: "Hero & Showcase", icon: Sparkles },
    { id: "channels", label: "Contact Channels", icon: Phone },
    { id: "social", label: "Social & Reviews", icon: Star },
    { id: "facility", label: "Facility & Hours", icon: Building2 },
    { id: "form", label: "Form & Closing CTA", icon: Send },
  ];

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.name.toLowerCase().includes(search.toLowerCase()) ||
      (inq.organization || "").toLowerCase().includes(search.toLowerCase()) ||
      (inq.email || "").toLowerCase().includes(search.toLowerCase()) ||
      (inq.phone || "").toLowerCase().includes(search.toLowerCase()) ||
      (inq.city || "").toLowerCase().includes(search.toLowerCase()) ||
      (inq.service || "").toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "all" || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Top Header & Actions */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-[#071525] to-slate-900 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-800/40 bg-cyan-950/60 px-3.5 py-1 text-xs font-bold text-cyan-300">
              <Phone className="h-3.5 w-3.5 text-cyan-400" />
              <span>DIRECT FACTORY DESK & CMS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Contact Us Management &amp; Inquiries
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Dynamically customize contact channels, factory address, and review inbound direct messages from institutions and visitors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Main Mode Switcher: CMS vs CRM */}
            <div className="inline-flex rounded-2xl border border-slate-800 bg-slate-950 p-1">
              <button
                onClick={() => setMainMode("cms")}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition ${
                  mainMode === "cms"
                    ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Page Content (CMS)
              </button>
              <button
                onClick={() => setMainMode("crm")}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 ${
                  mainMode === "crm"
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>Inbound Messages</span>
                {inquiries.length > 0 && (
                  <span className="bg-white/20 text-white px-1.5 py-0.2 rounded-full text-[10px]">
                    {inquiries.length}
                  </span>
                )}
              </button>
            </div>

            <Link
              href="/contact-us/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-300 bg-slate-800/80 border border-slate-700 hover:text-white hover:bg-slate-700 transition"
            >
              <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
              <span>Live Page</span>
            </Link>

            {mainMode === "cms" && (
              <>
                <button
                  onClick={handleReset}
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-rose-400 bg-rose-950/30 border border-rose-900/40 hover:bg-rose-950/60 transition disabled:opacity-50"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset</span>
                </button>
                <button
                  onClick={handleSaveAll}
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-[#009fe3] to-[#0284c7] hover:from-[#008bc9] hover:to-[#0369a1] shadow-lg shadow-[#009fe3]/25 transition disabled:opacity-50"
                >
                  {saving ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                  <span>{saving ? "Saving All..." : "Save & Publish All"}</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Global Notifications */}
        {saveSuccess && (
          <div className="mt-4 flex items-center gap-2.5 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 px-4 py-3 text-xs font-bold text-emerald-300 animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>{saveSuccess}</span>
          </div>
        )}
        {saveError && (
          <div className="mt-4 flex items-center gap-2.5 rounded-2xl bg-rose-950/60 border border-rose-800/60 px-4 py-3 text-xs font-bold text-rose-300 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
            <span>{saveError}</span>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* MODE 1: CRM INBOUND MESSAGES & INQUIRIES */}
      {/* ========================================================= */}
      {mainMode === "crm" && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Controls Bar: Search & Status Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-slate-900/60 border border-slate-800 p-4 rounded-2xl backdrop-blur-sm">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by name, institution, city, requirement, or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:border-cyan-500 outline-none"
              />
              <Phone className="absolute left-3 top-3 h-3.5 w-3.5 text-slate-500" />
            </div>

            <div className="flex items-center gap-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 outline-none focus:border-cyan-500"
              >
                <option value="all">All Statuses ({inquiries.length})</option>
                <option value="new">New ({inquiries.filter((i) => i.status === "new").length})</option>
                <option value="in_review">In Review ({inquiries.filter((i) => i.status === "in_review").length})</option>
                <option value="contacted">Contacted ({inquiries.filter((i) => i.status === "contacted").length})</option>
                <option value="closed">Closed ({inquiries.filter((i) => i.status === "closed").length})</option>
              </select>

              <button
                onClick={fetchInquiries}
                disabled={loadingCrm}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${loadingCrm ? "animate-spin text-cyan-400" : ""}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          {/* Inquiries Table */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden shadow-xl">
            {loadingCrm ? (
              <div className="p-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                <RefreshCw className="h-4 w-4 animate-spin text-cyan-400" />
                <span>Loading inbound messages...</span>
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div className="p-12 text-center space-y-2">
                <Mail className="h-8 w-8 text-slate-600 mx-auto" />
                <p className="text-xs font-bold text-slate-400">No contact messages found</p>
                <p className="text-[11px] text-slate-500">
                  New submissions from the /contact-us/ and /request-a-quote/ pages will appear here in real-time.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950/80 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="px-5 py-3.5">Contact / Institution</th>
                      <th className="px-5 py-3.5">Reach Out</th>
                      <th className="px-5 py-3.5">Requirement</th>
                      <th className="px-5 py-3.5">City / Source</th>
                      <th className="px-5 py-3.5">Date</th>
                      <th className="px-5 py-3.5">Status</th>
                      <th className="px-5 py-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-medium">
                    {filteredInquiries.map((inq) => (
                      <tr
                        key={inq.id}
                        className="hover:bg-slate-800/40 transition cursor-pointer"
                        onClick={() => setSelectedInquiry(inq)}
                      >
                        <td className="px-5 py-4">
                          <div className="font-extrabold text-white text-sm">{inq.name}</div>
                          {inq.organization && (
                            <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                              <Building2 className="h-3 w-3 text-cyan-400 shrink-0" />
                              <span>{inq.organization}</span>
                            </div>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          <div className="space-y-1" onClick={(e) => e.stopPropagation()}>
                            <a
                              href={`mailto:${inq.email}`}
                              className="flex items-center gap-1.5 text-cyan-400 hover:underline text-[11px]"
                            >
                              <Mail className="h-3 w-3" />
                              <span>{inq.email}</span>
                            </a>
                            {inq.phone && (
                              <a
                                href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-emerald-400 hover:underline text-[11px]"
                              >
                                <MessageSquare className="h-3 w-3" />
                                <span>{inq.phone}</span>
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <span className="inline-block px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-[11px] font-bold">
                            {inq.service || "General Inquiry"}
                          </span>
                          {inq.quantity && (
                            <div className="text-[10px] text-slate-400 mt-1">
                              Qty: {inq.quantity}
                            </div>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1 text-slate-300">
                            <MapPin className="h-3 w-3 text-slate-500 shrink-0" />
                            <span>{inq.city || "Guwahati Hub"}</span>
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">
                            {inq.sourcePage || "/contact-us/"}
                          </div>
                        </td>
                        <td className="px-5 py-4 text-slate-400 whitespace-nowrap text-[11px]">
                          {new Date(inq.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="px-5 py-4" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={inq.status}
                            onChange={(e) => updateInquiryStatus(inq.id, e.target.value)}
                            className={`rounded-lg px-2.5 py-1 text-[11px] font-bold border outline-none cursor-pointer ${
                              inq.status === "new"
                                ? "bg-amber-950/80 border-amber-600/50 text-amber-300"
                                : inq.status === "in_review"
                                ? "bg-blue-950/80 border-blue-600/50 text-blue-300"
                                : inq.status === "contacted"
                                ? "bg-emerald-950/80 border-emerald-600/50 text-emerald-300"
                                : "bg-slate-800 border-slate-700 text-slate-400"
                            }`}
                          >
                            <option value="new">New</option>
                            <option value="in_review">In Review</option>
                            <option value="contacted">Contacted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                        <td className="px-5 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => deleteInquiry(inq.id)}
                            title="Delete Inquiry"
                            className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-950/30 transition"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Modal Preview for Selected Inquiry */}
          {selectedInquiry && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
              onClick={() => setSelectedInquiry(null)}
            >
              <div
                className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl space-y-5 animate-in zoom-in-95"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-extrabold text-cyan-400">
                      Inbound Direct Factory Inquiry
                    </div>
                    <h2 className="text-xl font-black text-white mt-1">{selectedInquiry.name}</h2>
                    {selectedInquiry.organization && (
                      <p className="text-xs text-slate-400 font-semibold">{selectedInquiry.organization}</p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedInquiry(null)}
                    className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
                  >
                    &times;
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Email</div>
                    <a
                      href={`mailto:${selectedInquiry.email}`}
                      className="text-cyan-400 font-semibold hover:underline mt-0.5 block truncate"
                    >
                      {selectedInquiry.email}
                    </a>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Phone / WhatsApp</div>
                    {selectedInquiry.phone ? (
                      <a
                        href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 font-semibold hover:underline mt-0.5 block truncate"
                      >
                        {selectedInquiry.phone}
                      </a>
                    ) : (
                      <span className="text-slate-400">Not provided</span>
                    )}
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Location</div>
                    <div className="text-white font-semibold mt-0.5">{selectedInquiry.city || "Guwahati Hub"}</div>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Requirement</div>
                    <div className="text-white font-semibold mt-0.5">{selectedInquiry.service || "General Inquiry"}</div>
                  </div>
                </div>

                {selectedInquiry.message && (
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Message &amp; Specifications</div>
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs leading-relaxed text-slate-200 whitespace-pre-wrap max-h-48 overflow-y-auto">
                      {selectedInquiry.message}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Status:</span>
                    <select
                      value={selectedInquiry.status}
                      onChange={(e) => updateInquiryStatus(selectedInquiry.id, e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs font-bold text-white outline-none"
                    >
                      <option value="new">New</option>
                      <option value="in_review">In Review</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedInquiry.phone && (
                      <a
                        href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>Chat WhatsApp</span>
                      </a>
                    )}
                    <a
                      href={`mailto:${selectedInquiry.email}`}
                      className="px-3.5 py-1.5 bg-[#009fe3] hover:bg-[#008bc9] text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>Send Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* MODE 2: CMS PAGE CONTENT EDITOR */}
      {/* ========================================================= */}
      {mainMode === "cms" && (
        <div className="space-y-6">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25"
                      : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

      {/* TAB 1: HERO & SHOWCASE */}
      {activeTab === "hero" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <h2 className="text-base font-bold text-white">Hero Header &amp; Showcase Visuals</h2>
              <p className="text-xs text-slate-400">Edit headline, lede, stats and 3 showcase images</p>
            </div>
            <button
              onClick={() => handleSaveSection("hero")}
              disabled={savingSection === "hero"}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-[#009fe3] hover:bg-[#008bc9] transition disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "hero" ? "Saving..." : "Save Section"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-semibold text-slate-300">Eyebrow Tag</label>
              <input
                type="text"
                value={data.hero.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, eyebrow: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#009fe3]"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-semibold text-slate-300">H1 Headline</label>
              <input
                type="text"
                value={data.hero.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, title: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#009fe3]"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-semibold text-slate-300">Hero Lede Paragraph</label>
              <textarea
                rows={3}
                value={data.hero.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, lede: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#009fe3]"
              />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="space-y-3 pt-4 border-t border-slate-800/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              4 Key Stat Badges
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {data.hero.stats.map((st, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/90 p-3 space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-500">Label</label>
                  <input
                    type="text"
                    value={st.label}
                    onChange={(e) => {
                      const updated = [...data.hero.stats];
                      updated[idx] = { ...updated[idx], label: e.target.value };
                      setData({ ...data, hero: { ...data.hero, stats: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#009fe3]"
                  />
                  <label className="text-[10px] uppercase font-bold text-slate-500">Value</label>
                  <input
                    type="text"
                    value={st.value}
                    onChange={(e) => {
                      const updated = [...data.hero.stats];
                      updated[idx] = { ...updated[idx], value: e.target.value };
                      setData({ ...data, hero: { ...data.hero, stats: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs font-bold text-[#009fe3] outline-none focus:border-[#009fe3]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 3 Showcase Visual Images */}
          <div className="space-y-3 pt-4 border-t border-slate-800/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Hero Showcase Visuals (3 Overlapping Images)
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Primary Image */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-3">
                <span className="text-xs font-bold text-cyan-400">1. Primary Factory Photo</span>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-slate-400">Image URL</label>
                  <input
                    type="text"
                    value={data.hero.visual.primaryImage.src}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          visual: {
                            ...data.hero.visual,
                            primaryImage: {
                              ...data.hero.visual.primaryImage,
                              src: e.target.value,
                            },
                          },
                        },
                      })
                    }
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#009fe3]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-700">
                    <UploadCloud className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, "visual.primaryImage")}
                    />
                  </label>
                  {uploadingField === "visual.primaryImage" && (
                    <RefreshCw className="h-4 w-4 animate-spin text-cyan-400" />
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-slate-400">Badge Text</label>
                  <input
                    type="text"
                    value={data.hero.visual.primaryImage.badge}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          visual: {
                            ...data.hero.visual,
                            primaryImage: {
                              ...data.hero.visual.primaryImage,
                              badge: e.target.value,
                            },
                          },
                        },
                      })
                    }
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#009fe3]"
                  />
                </div>
              </div>

              {/* Secondary Image */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-3">
                <span className="text-xs font-bold text-cyan-400">2. Specimen Package Photo</span>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-slate-400">Image URL</label>
                  <input
                    type="text"
                    value={data.hero.visual.secondaryImage.src}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          visual: {
                            ...data.hero.visual,
                            secondaryImage: {
                              ...data.hero.visual.secondaryImage,
                              src: e.target.value,
                            },
                          },
                        },
                      })
                    }
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#009fe3]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-700">
                    <UploadCloud className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, "visual.secondaryImage")}
                    />
                  </label>
                  {uploadingField === "visual.secondaryImage" && (
                    <RefreshCw className="h-4 w-4 animate-spin text-cyan-400" />
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-slate-400">Alt Text</label>
                  <input
                    type="text"
                    value={data.hero.visual.secondaryImage.alt}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          visual: {
                            ...data.hero.visual,
                            secondaryImage: {
                              ...data.hero.visual.secondaryImage,
                              alt: e.target.value,
                            },
                          },
                        },
                      })
                    }
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#009fe3]"
                  />
                </div>
              </div>

              {/* Tertiary Image */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-3">
                <span className="text-xs font-bold text-cyan-400">3. Machinery Accent Photo</span>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-slate-400">Image URL</label>
                  <input
                    type="text"
                    value={data.hero.visual.tertiaryImage.src}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          visual: {
                            ...data.hero.visual,
                            tertiaryImage: {
                              ...data.hero.visual.tertiaryImage,
                              src: e.target.value,
                            },
                          },
                        },
                      })
                    }
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#009fe3]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-700">
                    <UploadCloud className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, "visual.tertiaryImage")}
                    />
                  </label>
                  {uploadingField === "visual.tertiaryImage" && (
                    <RefreshCw className="h-4 w-4 animate-spin text-cyan-400" />
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-slate-400">Alt Text</label>
                  <input
                    type="text"
                    value={data.hero.visual.tertiaryImage.alt}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          visual: {
                            ...data.hero.visual,
                            tertiaryImage: {
                              ...data.hero.visual.tertiaryImage,
                              alt: e.target.value,
                            },
                          },
                        },
                      })
                    }
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#009fe3]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CONTACT CHANNELS */}
      {activeTab === "channels" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <h2 className="text-base font-bold text-white">Direct Production Channels</h2>
              <p className="text-xs text-slate-400">Phone hotline, WhatsApp instant desk, and official email</p>
            </div>
            <button
              onClick={() => handleSaveSection("channels")}
              disabled={savingSection === "channels"}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-[#009fe3] hover:bg-[#008bc9] transition disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "channels" ? "Saving..." : "Save Section"}</span>
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Hotline */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-3">
              <div className="flex items-center gap-2 text-[#009fe3]">
                <Phone className="h-5 w-5" />
                <h3 className="font-bold text-sm text-white">1. Direct Hotline</h3>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Card Title</label>
                <input
                  type="text"
                  value={data.channels.hotline.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        hotline: { ...data.channels.hotline, title: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                <textarea
                  rows={2}
                  value={data.channels.hotline.desc}
                  onChange={(e) =>
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        hotline: { ...data.channels.hotline, desc: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Phone Number</label>
                <input
                  type="text"
                  value={data.channels.hotline.phone}
                  onChange={(e) =>
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        hotline: { ...data.channels.hotline, phone: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-mono text-cyan-300 outline-none focus:border-[#009fe3]"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <MessageSquare className="h-5 w-5" />
                <h3 className="font-bold text-sm text-white">2. WhatsApp Desk</h3>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Card Title</label>
                <input
                  type="text"
                  value={data.channels.whatsapp.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        whatsapp: { ...data.channels.whatsapp, title: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                <textarea
                  rows={2}
                  value={data.channels.whatsapp.desc}
                  onChange={(e) =>
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        whatsapp: { ...data.channels.whatsapp, desc: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">WhatsApp Digits (with country code)</label>
                <input
                  type="text"
                  value={data.channels.whatsapp.number}
                  onChange={(e) =>
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        whatsapp: { ...data.channels.whatsapp, number: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-mono text-emerald-300 outline-none focus:border-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Button CTA Text</label>
                <input
                  type="text"
                  value={data.channels.whatsapp.ctaText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        whatsapp: { ...data.channels.whatsapp, ctaText: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-3">
              <div className="flex items-center gap-2 text-[#009fe3]">
                <Mail className="h-5 w-5" />
                <h3 className="font-bold text-sm text-white">3. Official Enquiries</h3>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Card Title</label>
                <input
                  type="text"
                  value={data.channels.email.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        email: { ...data.channels.email, title: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Description</label>
                <textarea
                  rows={2}
                  value={data.channels.email.desc}
                  onChange={(e) =>
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        email: { ...data.channels.email, desc: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400">Email Address</label>
                <input
                  type="email"
                  value={data.channels.email.address}
                  onChange={(e) =>
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        email: { ...data.channels.email, address: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SOCIAL & REVIEWS */}
      {activeTab === "social" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <h2 className="text-base font-bold text-white">Social &amp; Verified Reviews</h2>
              <p className="text-xs text-slate-400">Google reviews, WhatsApp broadcast, and verified social media links</p>
            </div>
            <button
              onClick={() => handleSaveSection("channels")}
              disabled={savingSection === "channels"}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-[#009fe3] hover:bg-[#008bc9] transition disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "channels" ? "Saving..." : "Save Section"}</span>
            </button>
          </div>

          <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-5 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Section Title</label>
                <input
                  type="text"
                  value={data.channels.socialAndReviews.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        socialAndReviews: {
                          ...data.channels.socialAndReviews,
                          title: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-amber-400"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Description</label>
                <input
                  type="text"
                  value={data.channels.socialAndReviews.desc}
                  onChange={(e) =>
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        socialAndReviews: {
                          ...data.channels.socialAndReviews,
                          desc: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-amber-500/20">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Individual Social &amp; Review Links
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const newLink: DynamicContactUsSocialLink = {
                      label: "Instagram",
                      href: "https://instagram.com/idgenguwahati",
                      platform: "instagram",
                    };
                    setData({
                      ...data,
                      channels: {
                        ...data.channels,
                        socialAndReviews: {
                          ...data.channels.socialAndReviews,
                          links: [...data.channels.socialAndReviews.links, newLink],
                        },
                      },
                    });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Link</span>
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {data.channels.socialAndReviews.links.map((link, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-3 space-y-2 relative"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.channels.socialAndReviews.links.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          channels: {
                            ...data.channels,
                            socialAndReviews: {
                              ...data.channels.socialAndReviews,
                              links: updated,
                            },
                          },
                        });
                      }}
                      className="absolute top-2 right-2 text-slate-500 hover:text-red-400"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>

                    <label className="text-[10px] uppercase font-bold text-slate-400 block">
                      Label
                    </label>
                    <input
                      type="text"
                      value={link.label}
                      onChange={(e) => {
                        const updated = [...data.channels.socialAndReviews.links];
                        updated[idx] = { ...updated[idx], label: e.target.value };
                        setData({
                          ...data,
                          channels: {
                            ...data.channels,
                            socialAndReviews: {
                              ...data.channels.socialAndReviews,
                              links: updated,
                            },
                          },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-white outline-none focus:border-amber-400"
                    />

                    <label className="text-[10px] uppercase font-bold text-slate-400 block">
                      Destination URL
                    </label>
                    <input
                      type="text"
                      value={link.href}
                      onChange={(e) => {
                        const updated = [...data.channels.socialAndReviews.links];
                        updated[idx] = { ...updated[idx], href: e.target.value };
                        setData({
                          ...data,
                          channels: {
                            ...data.channels,
                            socialAndReviews: {
                              ...data.channels.socialAndReviews,
                              links: updated,
                            },
                          },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-white outline-none focus:border-amber-400"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: FACILITY & HOURS */}
      {activeTab === "facility" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <h2 className="text-base font-bold text-white">Central Manufacturing Facility Card</h2>
              <p className="text-xs text-slate-400">Physical address, operating hours, and action links</p>
            </div>
            <button
              onClick={() => handleSaveSection("facility")}
              disabled={savingSection === "facility"}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-[#009fe3] hover:bg-[#008bc9] transition disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "facility" ? "Saving..." : "Save Section"}</span>
            </button>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Eyebrow Tag</label>
                <input
                  type="text"
                  value={data.facility.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      facility: { ...data.facility, eyebrow: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Facility Title</label>
                <input
                  type="text"
                  value={data.facility.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      facility: { ...data.facility, title: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-slate-300">Facility Description</label>
                <textarea
                  rows={2}
                  value={data.facility.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      facility: { ...data.facility, description: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-slate-300">Physical Address</label>
                <input
                  type="text"
                  value={data.facility.address}
                  onChange={(e) =>
                    setData({
                      ...data,
                      facility: { ...data.facility, address: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-slate-300">Operating Hours</label>
                <input
                  type="text"
                  value={data.facility.operatingHours}
                  onChange={(e) =>
                    setData({
                      ...data,
                      facility: { ...data.facility, operatingHours: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-3 border-t border-slate-800">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-2">
                <span className="text-xs font-bold text-cyan-400">Primary Button</span>
                <input
                  type="text"
                  placeholder="Label"
                  value={data.facility.primaryCta.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      facility: {
                        ...data.facility,
                        primaryCta: { ...data.facility.primaryCta, label: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#009fe3]"
                />
                <input
                  type="text"
                  placeholder="Href"
                  value={data.facility.primaryCta.href}
                  onChange={(e) =>
                    setData({
                      ...data,
                      facility: {
                        ...data.facility,
                        primaryCta: { ...data.facility.primaryCta, href: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-2">
                <span className="text-xs font-bold text-cyan-400">Secondary Button</span>
                <input
                  type="text"
                  placeholder="Label"
                  value={data.facility.secondaryCta.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      facility: {
                        ...data.facility,
                        secondaryCta: { ...data.facility.secondaryCta, label: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#009fe3]"
                />
                <input
                  type="text"
                  placeholder="Href"
                  value={data.facility.secondaryCta.href}
                  onChange={(e) =>
                    setData({
                      ...data,
                      facility: {
                        ...data.facility,
                        secondaryCta: { ...data.facility.secondaryCta, href: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: FORM, CLOSING CTA & SEO META */}
      {activeTab === "form" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <h2 className="text-base font-bold text-white">Direct Message Desk, Closing CTA &amp; SEO</h2>
              <p className="text-xs text-slate-400">Configure direct inquiry form, closing CTA band, and metadata</p>
            </div>
            <button
              onClick={handleSaveAll}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-[#009fe3] hover:bg-[#008bc9] transition disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{saving ? "Saving..." : "Save All"}</span>
            </button>
          </div>

          {/* Form Desk Section */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">Direct Factory Message Desk</h3>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.formSection.enabled}
                  onChange={(e) =>
                    setData({
                      ...data,
                      formSection: { ...data.formSection, enabled: e.target.checked },
                    })
                  }
                  className="rounded border-slate-700 text-[#009fe3] focus:ring-[#009fe3]"
                />
                <span>Enable Form on Contact Us Page</span>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Badge Tag</label>
                <input
                  type="text"
                  value={data.formSection.badge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      formSection: { ...data.formSection, badge: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Form Title</label>
                <input
                  type="text"
                  value={data.formSection.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      formSection: { ...data.formSection, title: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-slate-300">Description</label>
                <textarea
                  rows={2}
                  value={data.formSection.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      formSection: { ...data.formSection, description: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-slate-300">SLA Badge Text</label>
                <input
                  type="text"
                  value={data.formSection.slaBadge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      formSection: { ...data.formSection, slaBadge: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-4">
            <h3 className="text-sm font-bold text-white">Closing CTA Band</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.closingCta.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, title: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-slate-300">Body</label>
                <textarea
                  rows={2}
                  value={data.closingCta.body}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, body: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>
            </div>
          </div>

          {/* SEO Metadata */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-4">
            <h3 className="text-sm font-bold text-white">SEO &amp; Search Engine Settings</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-slate-300">Meta Title</label>
                <input
                  type="text"
                  value={data.meta.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      meta: { ...data.meta, title: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-semibold text-slate-300">Meta Description</label>
                <textarea
                  rows={2}
                  value={data.meta.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      meta: { ...data.meta, description: e.target.value },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white outline-none focus:border-[#009fe3]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
      )}
    </div>
  );
}

export default function AdminContactUsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-96 items-center justify-center text-slate-400 text-sm">
          Loading Contact Us Admin CMS...
        </div>
      }
    >
      <AdminContactUsContent />
    </Suspense>
  );
}
