"use client";

import { useState } from "react";
import type { ServiceIndexItem } from "@/data/types";

export function QuoteForm({ services, defaultServiceSlug }: { services: ServiceIndexItem[]; defaultServiceSlug?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/quote-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, sourcePage: "/get-a-quote" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent-soft p-6 text-sm text-navy-deep">
        <p className="font-semibold">Request received.</p>
        <p className="mt-1">We&apos;ll get back to you with pricing and turnaround shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-surface-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Organization" name="organization" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone / WhatsApp" name="phone" type="tel" />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-foreground">Service</span>
          <select
            name="serviceSlug"
            defaultValue={defaultServiceSlug || ""}
            className="rounded-lg border border-surface-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <Field label="City" name="city" />
        <Field label="Quantity" name="quantity" placeholder="e.g. 300 cards" />
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-foreground">Message</span>
        <textarea
          name="message"
          rows={4}
          className="rounded-lg border border-surface-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </label>

      {status === "error" && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="justify-self-start rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-accent-hover hover:text-white disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request Quote"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-foreground">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-lg border border-surface-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
      />
    </label>
  );
}
