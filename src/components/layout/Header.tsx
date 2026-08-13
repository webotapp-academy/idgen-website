"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="flex items-baseline gap-0.5 text-2xl" onClick={() => setOpen(false)}>
          <span className="mr-1 inline-block h-2 w-2 -translate-y-3.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-display font-extrabold tracking-tight">iDGen</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/85 transition hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/get-a-quote"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-navy-deep transition hover:bg-accent-hover hover:text-white lg:inline-block"
        >
          Get a Quote
        </Link>

        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 pb-5 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-2.5 text-white/85 hover:bg-white/5 hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/get-a-quote"
                className="block rounded-full bg-accent px-4 py-2.5 text-center font-semibold text-navy-deep"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
