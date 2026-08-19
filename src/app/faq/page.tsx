import Image from "next/image";
import Link from "next/link";
import { HelpCircle, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema-org";
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
    name: "General & Manufacturing",
    faqs: [
      { q: "What does IDGen do?", a: "IDGen is a direct identification manufacturer based in Guwahati, operating high-capacity thermal retransfer ID presses, continuous dye-sublimation lanyard printers, and ultrasonic acoustic welding equipment." },
      { q: "Where is IDGen's manufacturing hub located?", a: "Our production facility is centrally located in Guwahati, Assam, providing express 24–48h door-step delivery to all 8 Northeast Indian states." },
      { q: "Does IDGen handle massive bulk orders?", a: "Yes. Our automated lines produce over 10,000+ cards and lanyards daily, easily fulfilling large annual university intakes and state-wide enterprise rollouts." },
    ],
  },
  {
    name: "PVC Cards & Materials",
    faqs: [
      { q: "What card material grade do you use?", a: "We exclusively print on 30-mil (0.76 mm) solid virgin PVC cores with anti-scratch overlaminates — identical to standard bank credit cards." },
      { q: "Can cards be ordered pre-assembled with lanyards and holders?", a: "Yes! Over 80% of our clients choose our complete wearable kit, where cards arrive pre-fitted inside holders and attached to custom printed lanyards." },
      { q: "Can you print dynamic QR codes and library barcodes?", a: "Yes. We encode standard Code 128 barcodes, QR verification links, and magnetic stripes compatible with library turnstiles and attendance systems." },
    ],
  },
  {
    name: "Lanyards & Ultrasonic Sealing",
    faqs: [
      { q: "What is ultrasonic sealing on lanyards?", a: "Ultrasonic sealing uses high-frequency acoustic sound waves to molecularly weld satin polyester ribbon loops, creating an indestructible 18.5+ kg pull-tested joint with zero rust-prone metal staples." },
      { q: "What lanyard widths are available?", a: "We manufacture 12mm, 16mm, 20mm (standard bestseller), and 25mm satin lanyards with full-color edge-to-edge dye-sublimation." },
    ],
  },
  {
    name: "RFID & Smart Credentials",
    faqs: [
      { q: "Which RFID contactless chips do you support?", a: "We supply and encode 13.56 MHz (Mifare Classic 1K/4K, DESFire EV2/EV3, NTAG213/215/216) and 125 kHz EM4100 proximity chips." },
      { q: "Can you guarantee compatibility with our office door access reader?", a: "Yes. We provide sample test cards for your IT team to swipe on your existing turnstiles before batch production begins." },
    ],
  },
  {
    name: "IDGen Studio & Onboarding",
    faqs: [
      { q: "What is IDGen Studio?", a: "IDGen Studio is our proprietary cloud platform that allows parents and employees to submit photos and details directly from mobile phones with automated AI face cropping and digital card previews." },
      { q: "Can we print cards in progressive batches?", a: "Yes. You can approve and print in batches of 200–500 cards rather than waiting for an entire institution to complete data submission." },
    ],
  },
];

const allFaqs = categories.flatMap((c) => c.faqs);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      
      <PageHero
        eyebrow="Help & Information Center"
        icon={HelpCircle}
        title="Frequently Asked Questions About IDGen"
        lede="Everything you need to know about PVC card printing, custom satin lanyards, RFID protocols, IDGen Studio, and Northeast delivery timelines."
        stats={[
          { label: "Answered Questions", value: "25+ Topics" },
          { label: "Direct Support Desk", value: "Available" },
          { label: "Specimen Kit", value: "Free Request" },
          { label: "Factory Hub", value: "Guwahati, Assam" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary FAQ Specimen Image */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/Sample 1.jpeg"
                  alt="IDGen Card and Lanyard Specimen Kit"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">IDGen Knowledge Base</span>
                </div>
              </div>

              {/* Overlapping Specimen */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/PVC Cards Samples/Sample 1.jpg"
                  alt="30-Mil CR80 ID Card"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Hardware Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 1.jpeg"
                  alt="Custom Satin Lanyard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq/" }]} />

        {/* Categorized FAQs */}
        <div className="mt-8 space-y-16">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-3xl border border-surface-border bg-surface p-6 sm:p-10 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">{cat.name}</span>
              <h2 className="mt-1 text-2xl font-black text-foreground sm:text-3xl">{cat.name} Questions</h2>
              <div className="mt-8">
                <FaqList faqs={cat.faqs} />
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Have a specific question not covered here?"
            body="Speak directly with our Guwahati identity engineering desk for immediate answers."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Contact Engineering", href: "/contact-us/" },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
