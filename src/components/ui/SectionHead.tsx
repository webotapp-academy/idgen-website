export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          <p className="text-xs font-bold tracking-widest text-accent uppercase">{eyebrow}</p>
          <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
        </div>
      )}
      <h2 className="text-2xl font-extrabold text-balance text-foreground sm:text-[2rem] lg:text-[2.25rem] leading-[1.15] tracking-tight">{title}</h2>
      {lede && <p className="mt-4 text-base leading-relaxed text-muted">{lede}</p>}
    </div>
  );
}
