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
      {eyebrow && <p className="text-xs font-bold tracking-widest text-accent uppercase">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-extrabold text-balance text-foreground sm:text-[2rem]">{title}</h2>
      {lede && <p className="mt-3 text-base leading-relaxed text-muted">{lede}</p>}
    </div>
  );
}
