"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/types";

function FaqItem({ faq, index }: { faq: Faq; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group border-b border-surface-border last:border-0 transition-colors duration-200 ${
        isOpen ? "bg-accent/[0.03]" : "hover:bg-surface/80"
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 ${
            isOpen ? "bg-accent text-white shadow-md shadow-accent/30" : "bg-accent/10 text-accent"
          }`}>
            {index + 1}
          </span>
          <dt className={`font-semibold transition-colors duration-200 ${isOpen ? "text-accent" : "text-foreground"}`}>
            {faq.q}
          </dt>
        </div>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted transition-all duration-300 ${
            isOpen ? "rotate-180 text-accent" : "group-hover:text-accent"
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <dd className="px-5 pb-5 sm:px-6 sm:pb-6 pl-[4.25rem] text-sm leading-relaxed text-muted">
            {faq.a}
          </dd>
        </div>
      </div>
    </div>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  if (!faqs.length) return null;
  return (
    <div>
      <dl className="overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm">
        {faqs.map((f, i) => (
          <FaqItem key={f.q} faq={f} index={i} />
        ))}
      </dl>
    </div>
  );
}
