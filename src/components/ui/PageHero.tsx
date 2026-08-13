import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="border-b border-surface-border bg-navy text-white">
      <Container className="py-14 sm:py-16">
        <p className="text-xs font-bold tracking-widest text-accent uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold text-balance sm:text-4xl">{title}</h1>
        {lede && <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">{lede}</p>}
      </Container>
    </div>
  );
}
