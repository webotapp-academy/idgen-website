"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";

interface ContactDirectFormProps {
  whatsappNumber?: string;
}

export function ContactDirectForm({ whatsappNumber = "919207012084" }: ContactDirectFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/quote-requests/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          organization: payload.organization,
          city: payload.city,
          service: payload.service || "Bulk Student ID Cards",
          message: payload.message,
          sourcePage: "/contact-us/",
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message. Please try again or message on WhatsApp.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-sm text-emerald-950 dark:text-emerald-200">
        <div className="flex items-center gap-2 font-bold text-base text-emerald-800 dark:text-emerald-300">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          <span>Message Received by Guwahati Engineering Desk</span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          Thank you for getting in touch. Our identity specialists will review your requirements and respond via email or phone within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span>Your Name *</span>
          <input
            name="name"
            required
            placeholder="Aravind Sharma"
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white outline-none focus:border-[#009fe3]"
          />
        </label>
        <label className="grid gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span>Organization / Institution</span>
          <input
            name="organization"
            placeholder="DPS Guwahati / Tech Solutions Ltd"
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white outline-none focus:border-[#009fe3]"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span>Email Address *</span>
          <input
            name="email"
            type="email"
            required
            placeholder="name@organization.com"
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white outline-none focus:border-[#009fe3]"
          />
        </label>
        <label className="grid gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span>Phone / WhatsApp *</span>
          <input
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white outline-none focus:border-[#009fe3]"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span>City / State</span>
          <input
            name="city"
            placeholder="Guwahati, Assam"
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white outline-none focus:border-[#009fe3]"
          />
        </label>
        <label className="grid gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span>Requirement Category</span>
          <select
            name="service"
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white outline-none focus:border-[#009fe3]"
          >
            <option value="Bulk Student ID Cards">Bulk Student ID Cards</option>
            <option value="Employee Corporate Badges">Employee Corporate Badges</option>
            <option value="Custom Printed Lanyards">Custom Printed Lanyards</option>
            <option value="RFID / Smart Cards">RFID / Smart Cards</option>
            <option value="Free Specimen Kit Request">Free Physical Specimen Kit Request</option>
            <option value="Factory Visit Appointment">Factory Visit Appointment</option>
            <option value="General Query">General Query</option>
          </select>
        </label>
      </div>

      <label className="grid gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
        <span>Message / Specifications</span>
        <textarea
          name="message"
          rows={3}
          placeholder="Estimated quantity, card thickness, lanyard width, or any specific delivery deadline..."
          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white outline-none focus:border-[#009fe3]"
        />
      </label>

      {status === "error" && (
        <p className="text-xs font-semibold text-red-500">{error}</p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow-md shadow-[#009fe3]/25 hover:bg-[#008bc9] transition disabled:opacity-60"
        >
          <Send className="h-3.5 w-3.5" />
          <span>{status === "sending" ? "Sending to Factory..." : "Send Direct Message"}</span>
        </button>

        {whatsappNumber && (
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20IDGen%20Team%2C%20I%20would%20like%20to%20inquire%20about%20identity%20cards%20and%20lanyards.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition"
          >
            <MessageSquare className="h-3.5 w-3.5 text-emerald-500" />
            <span>Or WhatsApp Instant Desk</span>
          </a>
        )}
      </div>
    </form>
  );
}
