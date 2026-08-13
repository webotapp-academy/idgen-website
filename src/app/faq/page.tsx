import { HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "ID Card Printing FAQs | IDGen Identity Solutions",
  description:
    "Answers to common questions about ID card printing, student and employee cards, lanyards, RFID, pricing, bulk orders, IDGen Studio and service areas.",
  path: "/faq/",
});

const categories: { name: string; faqs: Faq[] }[] = [
  {
    name: "General",
    faqs: [
      { q: "What does IDGen do?", a: "IDGen provides customized ID cards, printed lanyards, RFID cards, event badges, ID card accessories and digital identity workflows for organizations." },
      { q: "Where is IDGen based?", a: "IDGen is based in Guwahati, Assam and serves organizations across Assam and the wider Northeast India market." },
      { q: "Does IDGen handle bulk ID card printing?", a: "Yes. IDGen supports institutional and high-volume identification requirements, with actual capacity depending on product and project specifications." },
    ],
  },
  {
    name: "ID Cards",
    faqs: [
      { q: "Can I order only ID cards?", a: "Yes. ID cards can be ordered without accessories where required." },
      { q: "Can I order a complete ID card setup?", a: "Yes. Depending on the requirement, a setup can include an ID card, holder, hook, custom printed lanyard and applicable ultrasonic sealing." },
      { q: "Can ID cards contain QR codes?", a: "Yes, where required. The actual function of a QR code depends on the supporting system or application." },
      { q: "Can ID cards contain barcodes?", a: "Yes. Barcodes can be included according to the identification requirement." },
    ],
  },
  {
    name: "Student ID Cards",
    faqs: [
      { q: "Does IDGen print student ID cards?", a: "Yes. IDGen provides customized student ID cards for schools, colleges, universities and educational organizations." },
      { q: "Can student ID cards be ordered in bulk?", a: "Yes. Institutional and high-volume student ID card projects are supported." },
    ],
  },
  {
    name: "Employee ID Cards",
    faqs: [
      { q: "Does IDGen print employee ID cards?", a: "Yes. IDGen provides customized employee and staff identification for companies, offices, hospitals, industries and institutions." },
    ],
  },
  {
    name: "Lanyards & Accessories",
    faqs: [
      { q: "Does IDGen provide custom printed lanyards?", a: "Yes. Custom printed lanyards can be supplied as part of an identification setup." },
      { q: "Can I order holders separately?", a: "Yes. ID card holders can be supplied separately or combined with other identification products." },
      { q: "Can I order hooks separately?", a: "Yes. ID card hooks and suitable attachments can be supplied according to the required configuration." },
    ],
  },
  {
    name: "RFID",
    faqs: [
      { q: "Does IDGen provide RFID cards?", a: "Yes. RFID cards can be produced according to the required RFID technology and compatible system specifications." },
      { q: "Can you guarantee RFID compatibility without checking my system?", a: "No. RFID specifications should be confirmed against the reader/system and required technology before production." },
    ],
  },
  {
    name: "IDGen Studio",
    faqs: [
      { q: "What is IDGen Studio?", a: "IDGen Studio is the digital identity workflow used to connect data collection and personalized ID card production for suitable projects." },
      { q: "Can people submit their information through a QR code?", a: "Yes — customized forms, shareable links and QR-code-based collection are part of the applicable IDGen Studio workflow." },
      { q: "Can organizations review submissions before printing?", a: "Yes, for suitable IDGen Studio projects." },
      { q: "Can approved records be printed batch-wise?", a: "Yes, where the configured IDGen Studio workflow supports batch production." },
    ],
  },
  {
    name: "Pricing",
    faqs: [
      { q: "How much does an ID card cost?", a: "Reference prices: ₹15 for single-side PVC ID card printing, ₹16 for double-side printing, ₹15 for a 20 mm custom printed lanyard, ₹35 for an event card and ₹45 for an RFID ID card, subject to specifications and order conditions." },
      { q: "Is the listed price the final price?", a: "No. Final pricing depends on quantity, specifications, personalization, accessories and applicable delivery conditions." },
    ],
  },
  {
    name: "Service Areas",
    faqs: [
      { q: "Does IDGen serve only Guwahati?", a: "No. Guwahati is the primary base, while IDGen serves organizations across Assam and the wider Northeast India market." },
      { q: "Does a city page mean IDGen has an office there?", a: "No. A city service-area page represents service coverage unless a physical branch is specifically listed." },
    ],
  },
  {
    name: "Data & Confidentiality",
    faqs: [
      { q: "Does IDGen handle identification information confidentially?", a: "IDGen treats customer-provided identification information as confidential project information and handles it for the agreed identification-related purpose." },
      { q: "What information should an organization provide?", a: "Only information required for the identification project should be provided — depending on the project, this may include names, photographs, identification numbers, classes, courses, departments, designations, QR-code and barcode information." },
    ],
  },
];

const allFaqs = categories.flatMap((c) => c.faqs);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq/" }])} />
      <JsonLd data={faqSchema(allFaqs)} />
      <PageHero
        eyebrow="FAQ"
        icon={HelpCircle}
        title="Frequently Asked Questions About IDGen"
        lede="Direct answers about ID card printing, pricing, bulk orders, lanyards, holders, RFID cards, IDGen Studio and service coverage."
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq/" }]} />

        <div className="mt-8 space-y-12">
          {categories.map((cat) => (
            <div key={cat.name}>
              <SectionHead eyebrow={cat.name} title={cat.name} />
              <div className="mt-4">
                <dl className="divide-y divide-surface-border rounded-2xl border border-surface-border bg-surface">
                  {cat.faqs.map((f) => (
                    <div key={f.q} className="p-5 sm:p-6">
                      <dt className="font-semibold text-foreground">{f.q}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-muted">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <CtaBand
            title="Still have a question?"
            body="Send IDGen your requirement and our team can help determine the appropriate product and workflow."
            links={[{ label: "Request a Quote", href: "/request-a-quote/", primary: true }]}
          />
        </div>
      </Container>
    </>
  );
}
