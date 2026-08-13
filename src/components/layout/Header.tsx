"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV } from "@/data/site";
import { IdgenLogo } from "@/components/ui/IdgenLogo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface/90 text-foreground backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <IdgenLogo size="sm" withTagline={false} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 text-xs font-semibold lg:flex">
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
                  className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-foreground/80 transition hover:bg-surface-border/50 hover:text-accent"
                >
                  {item.label}
                  <ChevronDown className="h-3 w-3 shrink-0" />
                </Link>
                {openDropdown === item.href && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-64 rounded-2xl border border-surface-border bg-surface/95 p-2 shadow-2xl backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3.5 py-2 text-xs font-medium text-foreground/80 transition hover:bg-accent-soft hover:text-accent"
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
                className="whitespace-nowrap rounded-full px-3 py-2 text-foreground/80 transition hover:bg-surface-border/50 hover:text-accent"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <Link
            href="/request-a-quote/"
            className="hidden shrink-0 whitespace-nowrap rounded-full bg-accent px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-accent-hover hover:shadow-md lg:inline-block"
          >
            Request a Quote
          </Link>

          <button
            type="button"
            className="flex items-center justify-center rounded-full p-2 text-foreground hover:bg-surface-border/50 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <nav className="border-t border-surface-border bg-surface px-5 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-2.5 font-semibold text-foreground hover:bg-surface-border/50 hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-3 flex flex-col gap-0.5 border-l border-surface-border pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-2 py-1.5 text-xs text-muted hover:bg-surface-border/50 hover:text-accent"
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
            <li className="pt-3">
              <Link
                href="/request-a-quote/"
                className="block rounded-full bg-accent px-4 py-2.5 text-center font-bold text-white shadow-sm"
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
