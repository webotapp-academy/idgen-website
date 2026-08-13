import type { LucideIcon } from "lucide-react";
import Link from "next/link";

export function FeatureCard({
  icon: Icon,
  title,
  body,
  href,
}: {
  icon?: LucideIcon;
  title: string;
  body: string;
  href?: string;
}) {
  const inner = (
    <>
      {Icon && (
        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-[#0b3550] shadow-[0_6px_16px_-6px_rgba(27,159,222,0.55)] transition-transform duration-200 group-hover:scale-105">
          <Icon className="h-5 w-5 text-white" strokeWidth={2.25} />
          <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15" aria-hidden="true" />
        </div>
      )}
      <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-2xl border border-surface-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_16px_32px_-16px_rgba(11,53,80,0.35)]"
      >
        <span
          className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-colors duration-300 group-hover:bg-accent/10"
          aria-hidden="true"
        />
        {inner}
      </Link>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface p-5">
      {inner}
    </div>
  );
}
