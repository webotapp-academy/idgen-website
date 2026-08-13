import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqList } from "@/components/ui/FaqList";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "FAQ",
  description: "Common questions about iDGen's ID card, RFID card, and lanyard printing services.",
  path: "/faq",
});

const generalFaqs: Faq[] = [
  {
    q: "What areas does iDGen deliver to?",
    a: "Assam, Meghalaya, Nagaland, Manipur, Mizoram, Tripura, and Arunachal Pradesh — see Service Area for city-level coverage and typical turnaround per state.",
  },
  {
    q: "What's the minimum order quantity for bulk ID card printing?",
    a: "There's no fixed minimum, but per-card pricing improves significantly at higher volumes. Share your expected quantity when requesting a quote for an exact rate.",
  },
  {
    q: "Can I order a mix of card types in one batch — for example, staff and student cards together?",
    a: "Yes — a single order can include multiple card types or templates, as long as each group's data is submitted separately.",
  },
  {
    q: "Do you handle card design, or do I need to supply a print-ready file?",
    a: "Both — send a print-ready file if you have one, or use iDGen Studio for layout and design help before printing.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Frequently asked questions"
        lede="General questions below. Every service page also has questions specific to that card type."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />

        <div className="mt-8 max-w-3xl space-y-10">
          <div>
            <h2 className="text-lg font-bold">General</h2>
            <div className="mt-4">
              <FaqList faqs={generalFaqs} />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold">By service</h2>
            <div className="mt-4 space-y-3">
              {services
                .filter((s) => s.faqs.length)
                .map((s) => (
                  <details key={s.slug} className="rounded-2xl border border-surface-border bg-surface p-5">
                    <summary className="cursor-pointer font-semibold">{s.name}</summary>
                    <div className="mt-4 space-y-4">
                      {s.faqs.map((f) => (
                        <div key={f.q}>
                          <p className="text-sm font-medium text-foreground">{f.q}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted">{f.a}</p>
                        </div>
                      ))}
                    </div>
                    <Link href={`/services/${s.slug}`} className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
                      View {s.name} →
                    </Link>
                  </details>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
