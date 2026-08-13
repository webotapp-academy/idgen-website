import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "iDGen Studio",
  description: "Custom card design service — layout, branding, and template work before your batch prints.",
  path: "/idgen-studio",
});

export default function IdgenStudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Design"
        title="iDGen Studio"
        lede="Custom card and lanyard design — logo placement, color matching, and layout — before a single card prints."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "iDGen Studio", path: "/idgen-studio" }]} />
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-foreground/90">
          <p>
            Most organizations don&apos;t have an in-house designer for something as specific as an ID card
            layout — matching institutional colors, fitting a crest or logo cleanly, deciding what goes on the
            back. iDGen Studio handles that design work as part of your order, so what prints matches your
            brand rather than a generic template stretched to fit.
          </p>
          <p>
            This applies across every service line — school and college cards, employee badges, event
            credentials, and custom lanyards. Bring a logo file and color reference; we handle the rest of the
            layout.
          </p>
        </div>
        <div className="mt-8 rounded-2xl border border-surface-border bg-surface p-6">
          <h2 className="font-semibold">Design gallery</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            A gallery of sample card and lanyard designs is being built out here — check back, or ask for
            samples directly when you request a quote.
          </p>
          <Link href="/get-a-quote" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
            Get a Quote →
          </Link>
        </div>
      </Container>
    </>
  );
}
