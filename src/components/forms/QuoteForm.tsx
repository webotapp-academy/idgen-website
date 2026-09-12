"use client";

import { useState } from "react";
import { 
  CheckCircle2, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Tag, 
  Radio, 
  Ticket, 
  Clock, 
  Building2, 
  GraduationCap, 
  Phone,
  MessageSquare
} from "lucide-react";
import type { ServiceIndexItem } from "@/data/types";
import { SITE } from "@/data/site";

interface ProductChoice {
  slug: string;
  name: string;
  icon: typeof Layers;
  badge?: string;
}

const PRODUCT_CHOICES: ProductChoice[] = [
  { slug: "id-card-printing", name: "PVC ID Cards (CR80)", icon: Layers, badge: "Popular" },
  { slug: "custom-printed-lanyard-printing", name: "20mm Satin Lanyards", icon: Tag, badge: "Bestseller" },
  { slug: "rfid-card-printing", name: "RFID / NFC Smart Cards", icon: Radio, badge: "Smart Tech" },
  { slug: "student-id-card-printing", name: "Student ID Complete Kits", icon: GraduationCap },
  { slug: "employee-id-card-printing", name: "Employee Access Badges", icon: Building2 },
  { slug: "event-card-printing", name: "VIP Event Passes", icon: Ticket },
  { slug: "id-card-holders", name: "Holders & Swivel Hooks", icon: ShieldCheck },
  { slug: "ultrasonic-sealing", name: "Ultrasonic Sealing Finish", icon: Sparkles },
];

const QUANTITY_PRESETS = ["100–250", "500", "1,000", "2,500", "5,000", "10,000+"];
const ORG_TYPES = ["University / School", "Corporate Enterprise", "Hospital / Healthcare", "Event / Summit", "Government / NGO"];

export function QuoteForm({ defaultServiceSlug }: { services?: ServiceIndexItem[]; defaultServiceSlug?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  
  const [selectedService, setSelectedService] = useState<string>(defaultServiceSlug || "id-card-printing");
  const [selectedQty, setSelectedQty] = useState<string>("500");
  const [selectedOrgType, setSelectedOrgType] = useState<string>("University / School");
  
  const [needUltrasonic, setNeedUltrasonic] = useState(true);
  const [needHolders, setNeedHolders] = useState(true);
  const [needSampleKit, setNeedSampleKit] = useState(false);
  const [needStudio, setNeedStudio] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    city: "Guwahati",
    notes: "",
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const addons = [];
    if (needUltrasonic) addons.push("Ultrasonic Sealing");
    if (needHolders) addons.push("Card Holders & Hooks");
    if (needStudio) addons.push("IDGen Studio Portal");
    if (needSampleKit) addons.push("Physical Specimen Kit Requested");

    const fullMessage = [
      `[Sector]: ${selectedOrgType}`,
      `[Add-ons]: ${addons.length > 0 ? addons.join(", ") : "None"}`,
      formData.notes ? `[Notes]: ${formData.notes}` : "",
    ].filter(Boolean).join("\n");

    const payload = {
      name: formData.name,
      organization: formData.organization || selectedOrgType,
      email: formData.email,
      phone: formData.phone,
      serviceSlug: selectedService,
      city: formData.city,
      quantity: selectedQty,
      message: fullMessage,
      sourcePage: "/request-a-quote/",
    };

    try {
      const res = await fetch("/api/quote-requests/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#06241a] to-[#03150e] p-8 text-white shadow-2xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 uppercase tracking-wider">
          Quote Inquiry Confirmed
        </span>
        <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
          Thank you, {formData.name || "Valued Client"}!
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Your project inquiry for <strong className="text-white">{selectedQty} units</strong> has been assigned to our Guwahati technical production team. We will review your specifications and send a formal itemized quotation and 1:1 scale digital sample proof to <strong className="text-emerald-300">{formData.email}</strong> within 2 business hours.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Need Immediate Fast-Track Assistance?</p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold">
            {SITE.phone && (
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-1.5 text-cyan-300 hover:underline">
                <Phone className="h-3.5 w-3.5" />
                <span>Call Production Desk: {SITE.phone}</span>
              </a>
            )}
            {SITE.whatsapp && (
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-emerald-400 hover:underline">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>WhatsApp: +91 {SITE.whatsapp}</span>
              </a>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", organization: "", email: "", phone: "", city: "Guwahati", notes: "" });
          }}
          className="mt-8 rounded-full bg-white/10 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-white/20"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-surface-border bg-surface p-6 sm:p-10 shadow-xl space-y-8">
      {/* 1. Product / Service Selection */}
      <div>
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold tracking-widest text-accent uppercase">
            1. Select Required Product / Service
          </label>
          <span className="text-xs text-muted">Select primary item</span>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_CHOICES.map((prod) => {
            const Icon = prod.icon;
            const isSelected = selectedService === prod.slug;
            return (
              <button
                key={prod.slug}
                type="button"
                onClick={() => setSelectedService(prod.slug)}
                className={`relative flex items-center gap-2.5 rounded-2xl border p-3 text-left transition ${
                  isSelected
                    ? "border-accent bg-accent/10 text-foreground shadow-sm ring-1 ring-accent"
                    : "border-surface-border bg-background/50 text-muted hover:border-accent/40 hover:bg-background"
                }`}
              >
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${isSelected ? "bg-accent text-white" : "bg-surface-border text-muted"}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold truncate text-foreground">{prod.name}</span>
                {prod.badge && (
                  <span className="absolute -top-2 right-2 rounded-full bg-accent px-1.5 py-0.2 text-[8px] font-extrabold text-white">
                    {prod.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Quantity & Sector */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Quantity */}
        <div>
          <label className="text-xs font-bold tracking-widest text-accent uppercase">
            2. Approximate Quantity
          </label>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {QUANTITY_PRESETS.map((qty) => (
              <button
                key={qty}
                type="button"
                onClick={() => setSelectedQty(qty)}
                className={`rounded-xl border py-2 text-xs font-bold transition ${
                  selectedQty === qty
                    ? "border-accent bg-accent text-white shadow-sm"
                    : "border-surface-border bg-background text-foreground hover:border-accent/40"
                }`}
              >
                {qty}
              </button>
            ))}
          </div>
        </div>

        {/* Organization Type */}
        <div>
          <label className="text-xs font-bold tracking-widest text-accent uppercase">
            3. Organization Type
          </label>
          <select
            value={selectedOrgType}
            onChange={(e) => setSelectedOrgType(e.target.value)}
            className="mt-3 w-full rounded-xl border border-surface-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          >
            {ORG_TYPES.map((org) => (
              <option key={org} value={org}>
                {org}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 3. Optional Finishing & Add-ons */}
      <div>
        <label className="text-xs font-bold tracking-widest text-accent uppercase">
          4. Finishing & Hardware Add-ons
        </label>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          <label className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 text-xs transition ${needUltrasonic ? "border-accent/60 bg-accent-soft/40" : "border-surface-border bg-background"}`}>
            <input
              type="checkbox"
              checked={needUltrasonic}
              onChange={(e) => setNeedUltrasonic(e.target.checked)}
              className="mt-0.5 rounded border-surface-border accent-accent"
            />
            <div>
              <p className="font-bold text-foreground">Ultrasonic Sealing</p>
              <p className="text-[10px] text-muted">Tear-proof ribbon weld</p>
            </div>
          </label>

          <label className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 text-xs transition ${needHolders ? "border-accent/60 bg-accent-soft/40" : "border-surface-border bg-background"}`}>
            <input
              type="checkbox"
              checked={needHolders}
              onChange={(e) => setNeedHolders(e.target.checked)}
              className="mt-0.5 rounded border-surface-border accent-accent"
            />
            <div>
              <p className="font-bold text-foreground">Card Holders & Hooks</p>
              <p className="text-[10px] text-muted">Crystal polycarbonate case</p>
            </div>
          </label>

          <label className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 text-xs transition ${needStudio ? "border-accent/60 bg-accent-soft/40" : "border-surface-border bg-background"}`}>
            <input
              type="checkbox"
              checked={needStudio}
              onChange={(e) => setNeedStudio(e.target.checked)}
              className="mt-0.5 rounded border-surface-border accent-accent"
            />
            <div>
              <p className="font-bold text-foreground">IDGen Studio Portal</p>
              <p className="text-[10px] text-muted">Digital roster & photo crop</p>
            </div>
          </label>

          <label className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 text-xs transition ${needSampleKit ? "border-accent/60 bg-accent-soft/40" : "border-surface-border bg-background"}`}>
            <input
              type="checkbox"
              checked={needSampleKit}
              onChange={(e) => setNeedSampleKit(e.target.checked)}
              className="mt-0.5 rounded border-surface-border accent-accent"
            />
            <div>
              <p className="font-bold text-foreground">Free Specimen Kit</p>
              <p className="text-[10px] text-muted">Physical samples by post</p>
            </div>
          </label>
        </div>
      </div>

      {/* 4. Contact Details */}
      <div className="pt-2 border-t border-surface-border">
        <label className="text-xs font-bold tracking-widest text-accent uppercase">
          5. Contact & Delivery Information
        </label>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-foreground">
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Dr. Priyam Sharma"
              className="mt-1 w-full rounded-xl border border-surface-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground">
              Organization / School Name
            </label>
            <input
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="e.g. Assam Valley School"
              className="mt-1 w-full rounded-xl border border-surface-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <label className="text-xs font-semibold text-foreground">
              Official Email <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="admin@institution.edu"
              className="mt-1 w-full rounded-xl border border-surface-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground">
              Phone / WhatsApp <span className="text-accent">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="mt-1 w-full rounded-xl border border-surface-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground">
              City / State
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="Guwahati, Assam"
              className="mt-1 w-full rounded-xl border border-surface-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-xs font-semibold text-foreground">
            Project Notes / Specific Requirements (Optional)
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Tell us about RFID frequency, lanyard width, urgent delivery deadlines, or artwork specifications..."
            className="mt-1 w-full rounded-xl border border-surface-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700">
          {error}
        </div>
      )}

      {/* Submit Button & SLA Commitment */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-slate-950 shadow-md transition hover:bg-accent-hover hover:text-white disabled:opacity-60"
        >
          <span>{status === "sending" ? "Processing Inquiry..." : "Submit Formal Quote Request"}</span>
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>

        <div className="flex items-center gap-2 text-xs text-muted">
          <Clock className="h-4 w-4 text-emerald-500" />
          <span>Guaranteed 2-Hour Response SLA during factory hours</span>
        </div>
      </div>
    </form>
  );
}
