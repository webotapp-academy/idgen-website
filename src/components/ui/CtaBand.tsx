import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type CtaLink = { label: string; href: string; primary?: boolean };

export function CtaBand({ title, body, links }: { title: string; body?: string; links: CtaLink[] }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1320] px-6 py-10 text-white sm:px-10 sm:py-12">
      <div className="hero-grid-pattern absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/20 blur-[110px]"
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-balance">{title}</h2>
          {body && <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-300">{body}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((link) =>
            link.primary ? (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 shadow-md transition hover:bg-accent-hover hover:text-white"
              >
                {link.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-accent hover:text-accent"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
