export function SpecTable({ specs, title }: { specs: Record<string, string>; title?: string }) {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface p-5">
      {title && <h3 className="text-sm font-bold tracking-wide text-muted uppercase">{title}</h3>}
      <dl className={title ? "mt-4 space-y-3 text-sm" : "space-y-3 text-sm"}>
        {Object.entries(specs).map(([k, v]) => (
          <div
            key={k}
            className="flex items-baseline justify-between gap-4 border-b border-surface-border pb-3 last:border-0 last:pb-0"
          >
            <dt className="text-muted">{k}</dt>
            <dd className="text-right font-semibold text-foreground">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
