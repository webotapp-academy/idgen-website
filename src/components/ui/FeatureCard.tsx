import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  body,
  href,
  imageSrc,
  imageAlt,
  badge,
  tag,
}: {
  icon?: LucideIcon;
  title: string;
  body: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  badge?: string;
  tag?: string;
}) {
  const content = (
    <>
      {imageSrc && (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900 mb-4 border border-surface-border/60">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="img-zoom object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
          {badge && (
            <span className="absolute top-3 left-3 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[10px] font-bold tracking-wider text-accent uppercase">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        {Icon && !imageSrc && (
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-[#07192e] shadow-[0_6px_16px_-6px_rgba(2,132,199,0.55)] transition-transform duration-200 group-hover:scale-105">
            <Icon className="h-5 w-5 text-white" strokeWidth={2.25} />
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15" aria-hidden="true" />
          </div>
        )}
        {tag && (
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-semibold text-accent">
            {tag}
          </span>
        )}
      </div>

      <div className={Icon && !imageSrc ? "mt-4" : ""}>
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold text-foreground text-lg transition-colors group-hover:text-accent">
            {title}
          </h3>
          {href && (
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-15px_rgba(7,25,46,0.15)]"
      >
        <span
          className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-colors duration-300 group-hover:bg-accent/10"
          aria-hidden="true"
        />
        <div>{content}</div>
      </Link>
    );
  }

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-surface p-5 transition-all duration-300">
      <div>{content}</div>
    </div>
  );
}
