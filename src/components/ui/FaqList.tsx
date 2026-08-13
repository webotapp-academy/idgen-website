import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema-org";
import type { Faq } from "@/data/types";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  if (!faqs.length) return null;
  return (
    <div>
      <JsonLd data={faqSchema(faqs)} />
      <dl className="divide-y divide-surface-border rounded-2xl border border-surface-border bg-surface">
        {faqs.map((f) => (
          <div key={f.q} className="p-5 sm:p-6">
            <dt className="font-semibold text-foreground">{f.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{f.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
