import { Quote, MapPin, BadgeCheck, ArrowUpRight, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { REVIEWS, REVIEW_PLACES } from "@/data/reviews";
import { SITE } from "@/data/site";

const AVATAR_TONES = [
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-sky-500 to-cyan-600",
];

export function ReviewsSection() {
  return (
    <section
      aria-label="Customer reviews"
      className="relative overflow-hidden border-b border-surface-border bg-surface py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <Container>
        <div className="relative">
          <SectionHead
            align="center"
            eyebrow="Customer reviews"
            title="What schools, colleges and organisations say about IDGen"
            lede="Reviews from our Google Business Profile, written by the people who ordered. We reply to every one."
            className="max-w-3xl"
          />

          <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full border border-surface-border bg-background px-5 py-2.5 shadow-sm">
            <span className="relative inline-flex" role="img" aria-label="Highly rated on Google">
              <span className="flex gap-0.5 text-slate-300 dark:text-slate-600">
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star key={n} className="h-5 w-5 fill-current" aria-hidden="true" />
                ))}
              </span>
              <span className="absolute inset-y-0 left-0 flex w-[96%] gap-0.5 overflow-hidden text-amber-400">
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star key={n} className="h-5 w-5 shrink-0 fill-current" aria-hidden="true" />
                ))}
              </span>
            </span>
            <span className="text-sm font-bold text-foreground">Highly rated on Google</span>
          </div>

          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {REVIEW_PLACES.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-1 rounded-full border border-surface-border bg-background px-3 py-1 text-[11px] font-semibold text-muted"
              >
                <MapPin className="h-3 w-3 text-accent" aria-hidden="true" />
                {p}
              </span>
            ))}
          </div>

          <div className="relative mt-12 overflow-hidden py-2 motion-reduce:overflow-x-auto">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface to-transparent sm:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface to-transparent sm:w-28" />
            <div
              className="animate-marquee items-stretch gap-5 motion-reduce:animate-none"
              style={{ animationDuration: "150s" }}
            >
              {[...REVIEWS, ...REVIEWS].map((r, i) => (
                <figure
                  key={`${r.name}-${i}`}
                  aria-hidden={i >= REVIEWS.length}
                  className="flex w-[300px] shrink-0 flex-col rounded-3xl border border-surface-border bg-background p-6 shadow-sm sm:w-[360px]"
                >
                  <Quote className="h-6 w-6 text-accent/40" aria-hidden="true" />
                  <blockquote className="mb-4 mt-3 text-sm leading-relaxed text-foreground">{r.text}</blockquote>
                  {r.forWhom && (
                    <p className="mb-5 mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-soft/60 px-3 py-1 text-[11px] font-bold text-accent dark:bg-accent/15">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {r.forWhom}
                    </p>
                  )}
                  <figcaption className="mt-auto flex items-center gap-3 border-t border-surface-border pt-4">
                    <span
                      aria-hidden="true"
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${AVATAR_TONES[i % AVATAR_TONES.length]} text-sm font-extrabold text-white`}
                    >
                      {r.name.replace(/[^A-Za-z]/g, "").charAt(0).toUpperCase()}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-bold text-foreground">{r.name}</span>
                      <span className="flex items-center gap-1 text-[11px] text-muted">
                        <BadgeCheck className="h-3 w-3 text-emerald-500" aria-hidden="true" />
                        {r.localGuide ? "Google Local Guide" : "Google review"}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={SITE.social.gbpReview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-accent-hover"
            >
              Leave a Google review <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
