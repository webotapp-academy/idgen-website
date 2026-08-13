"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071626]/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5">
        <Link href="/" className="flex items-baseline gap-0.5 text-2xl" onClick={() => setOpen(false)}>
          <span className="mr-1 inline-block h-2 w-2 -translate-y-3.5 rounded-full bg-accent shadow-[0_0_10px_rgba(27,159,222,0.8)]" aria-hidden="true" />
          <span className="font-display font-extrabold tracking-tight">IDGen</span>
        </Link>

        <nav className="hidden items-center gap-0.5 text-sm font-medium lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-white/85 transition hover:bg-white/5 hover:text-accent"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 shrink-0" />
                </Link>
                {openDropdown === item.href && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-64 rounded-2xl border border-white/10 bg-[#0b2237]/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3.5 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-2.5 py-2 text-white/85 transition hover:bg-white/5 hover:text-accent"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/request-a-quote/"
          className="hidden shrink-0 whitespace-nowrap rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(27,159,222,0.4)] transition hover:bg-accent-hover hover:text-white hover:shadow-[0_0_28px_rgba(27,159,222,0.6)] lg:inline-block"
        >
          Request a Quote
        </Link>

        <button
          type="button"
          className="flex items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 pb-5 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-2.5 font-semibold text-white/85 hover:bg-white/5 hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-3 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-2 py-2 text-sm text-white/65 hover:bg-white/5 hover:text-accent"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/request-a-quote/"
                className="block rounded-full bg-accent px-4 py-2.5 text-center font-bold text-slate-950"
                onClick={() => setOpen(false)}
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
