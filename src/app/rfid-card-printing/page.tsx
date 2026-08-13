import Image from "next/image";
import Link from "next/link";
import { Radio, GraduationCap, Building2, Hospital, Users, AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CompareTable } from "@/components/ui/CompareTable";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "RFID Card Printing | Custom RFID & NFC Smart Credentials | IDGen",
  description:
    "Custom RFID card printing for schools, companies, institutions and organizations. Personalized RFID ID cards matched to compatible readers and systems, with bulk printing and accessory options.",
  path: "/rfid-card-printing/",
});

const applications = [
  { icon: GraduationCap, title: "Universities & Campus Gates", body: "Automated student gate access, library book checkout, canteen contactless payments, and hostel security." },
  { icon: Building2, title: "Corporate Access Control", body: "Turnstile tap badges, elevator floor restriction, server room access, and automated biometric time-attendance." },
  { icon: Hospital, title: "Hospitals & Secure Labs", body: "Doctor and staff access to ICU, surgical suites, pharmaceutical inventory, and emergency wards." },
  { icon: Users, title: "VIP Clubs & Membership", body: "Prepaid cashless spending, VIP lounge entry, gym turnstile access, and membership tier validation." },
];

const rfidSpecs = [
  { standard: "13.56 MHz HF (Mifare Classic 1K / 4K)", encryption: "Crypto-1 (1K/4K EEPROM)", readRange: "Up to 10 cm", commonSystems: "College campuses, metro transit, corporate turnstiles" },
  { standard: "13.56 MHz HF (Mifare DESFire EV2/EV3)", encryption: "AES-128 / 3DES Hardware", readRange: "Up to 10 cm", commonSystems: "Banking, defense, high-security enterprise data centers" },
  { standard: "13.56 MHz HF (NFC NTAG213 / 215 / 216)", encryption: "Universal NFC ISO 14443A", readRange: "Smartphone Tap (5 cm)", commonSystems: "Digital business cards, event accreditation, dynamic URLs" },
  { standard: "125 kHz LF (EM4100 / TK4100 / T5577)", encryption: "64-bit Read-Only UID", readRange: "Up to 5 cm", commonSystems: "Legacy door controllers, basic employee attendance punches" },
  { standard: "Dual-Frequency Hybrid (HF + LF Inlay)", encryption: "Mifare 1K + EM4100 Dual Core", readRange: "Up to 10 cm", commonSystems: "Organizations transitioning between older & newer readers" },
];

const process = [
  { title: "1. Reader & Frequency Audit", body: "We identify your current access controller model (13.56 MHz ISO 14443A or 125 kHz Proximity)." },
  { title: "2. Sample Chip Verification", body: "We provide physical sample test cards to swipe on your actual door locks before mass printing." },
  { title: "3. UID Reading / Pre-Encoding", body: "Option to pre-encode sector data or extract UID serial numbers in a clean spreadsheet for IT mapping." },
  { title: "4. Thermal Retransfer Lamination", body: "Edge-to-edge color graphics printed without damaging internal copper antenna coils." },
  { title: "5. 100% RF Frequency Ping Test", body: "Every finished card is electronically pinged across RF readers to ensure zero dead chips." },
  { title: "6. Guwahati Dispatch", body: "Packed in anti-static protective boxes and shipped directly across Assam and Northeast India." },
];

const compareRows = [
  ["Edge-to-edge color printing", "Yes", "Yes"],
  ["Photo & Biometric accuracy", "Yes", "Yes"],
  ["Internal copper antenna coil", "No", "Yes (Embedded Inlay)"],
  ["Contactless tap functionality", "No", "Yes (0–10 cm range)"],
  ["Turnstile / Gate integration", "Barcode Only", "Instant RF Electromagnetic Tap"],
  ["Data sector encryption", "No", "Yes (AES/Crypto-1)"],
  ["Smartphone NFC compatibility", "No", "Yes (NTAG & Mifare models)"],
];

const faqs: Faq[] = [
  { q: "How do I know which RFID chip my organization needs?", a: "The easiest way is to share a photo of your door reader model or send us one of your existing working access cards. Our engineers will scan the frequency and chip family to guarantee 100% compatibility." },
  { q: "Can RFID cards be printed with full-color photos and barcodes?", a: "Yes. Our high-precision thermal retransfer presses print full photographic detail over the card surface without disrupting the delicate internal microchip or copper antenna inlay." },
  { q: "Do you supply dual-frequency hybrid cards?", a: "Yes. If your company uses older 125 kHz readers for parking and modern 13.56 MHz Mifare readers for office doors, a hybrid dual-frequency card consolidates everything onto a single badge." },
  { q: "Can you provide a sequential UID list for our IT database?", a: "Yes. We can electronically scan and log every card's unique hexadecimal/decimal UID into an Excel/CSV file matched to the cardholder's printed name." },
];

export default function RfidCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "RFID Card Printing",
          description: "Customized RFID ID cards for organizations, matched to compatible readers and systems.",
          path: "/rfid-card-printing/",
        })}
      />
      
      <PageHero
        eyebrow="Smart Credentials"
        icon={Radio}
        title="Custom Contactless RFID & NFC Smart Card Printing"
        lede="High-security 13.56 MHz Mifare, DESFire, NTAG, and 125 kHz EM-Proximity credentials engineered for seamless turnstile attendance, door access, and campus ecosystems across Northeast India."
        stats={[
          { label: "Frequency Range", value: "13.56 MHz / 125 kHz" },
          { label: "Chip Testing", value: "100% RF Verified" },
          { label: "Encoding", value: "UID Pre-Logged" },
          { label: "Turnaround", value: "48–72h Batch" },
        ]}
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "RFID Card Printing", path: "/rfid-card-printing/" }]} />

        {/* RFID Card Macro Photo Showcase */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950 p-2 shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/rfid-nfc-credentials.jpg"
                  alt="Futuristic Matte Black RFID NFC Contactless Smart Access Card with Internal Antenna Glow"
                  fill
                  priority
                  className="img-zoom object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded bg-cyan-400 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-950">
                    Smart Contactless Inlay
                  </span>
                  <p className="text-sm font-bold mt-1">13.56 MHz High-Speed RF Induction • Zero Wear & Tear</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Security & Turnstile Integration</span>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Embedded Microchips Matched to Your Access Control System
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              Stop guessing chip specifications. IDGen delivers customized smart credentials matched precisely to your biometric turnstiles, time-attendance clocks, and hospital door locks — complete with crisp color printing and optional UID data logging.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-surface-border bg-surface p-3">
                <p className="font-bold text-foreground">100% Pre-Tested Chips</p>
                <p className="text-muted text-[11px] mt-0.5">Zero defective or dead units in batch</p>
              </div>
              <div className="rounded-xl border border-surface-border bg-surface p-3">
                <p className="font-bold text-foreground">Dual-Frequency Options</p>
                <p className="text-muted text-[11px] mt-0.5">Combine 13.56 MHz + 125 kHz in one card</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/request-a-quote/?service=rfid" className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 shadow transition hover:bg-accent-hover hover:text-white">
                Request an RFID Quote
              </Link>
              <Link href="/pricing/" className="rounded-full border border-surface-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
                Calculate Batch Pricing
              </Link>
            </div>
          </div>
        </div>

        {/* Compatibility Warning Box */}
        <div className="mt-12 flex items-start gap-4 rounded-3xl border border-amber-400/40 bg-amber-500/10 p-6 backdrop-blur-sm">
          <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-amber-500" />
          <div>
            <h3 className="text-base font-bold text-foreground">Important: Chip Compatibility Guarantee</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
              Not all RFID cards function with all readers. If you are unsure of your reader&apos;s frequency or chip protocol, simply send us your existing card sample or reader model number. We will scan and verify compatibility free of charge before manufacturing.
            </p>
          </div>
        </div>

        {/* RFID Frequency Technical Matrix */}
        <div className="mt-16">
          <SectionHead eyebrow="Technical Sheet" title="RFID & NFC Chip Protocol Matrix" />
          <div className="mt-6 overflow-x-auto rounded-2xl border border-surface-border bg-surface shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-surface-border bg-background/80 text-xs font-bold text-muted uppercase">
                <tr>
                  <th className="px-5 py-4">Protocol / Standard</th>
                  <th className="px-5 py-4">Encryption Level</th>
                  <th className="px-5 py-4">Read Range</th>
                  <th className="px-5 py-4">Typical Deployment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {rfidSpecs.map((spec) => (
                  <tr key={spec.standard} className="hover:bg-background/50 transition">
                    <td className="px-5 py-4 font-bold text-foreground">{spec.standard}</td>
                    <td className="px-5 py-4 text-muted font-mono text-xs">{spec.encryption}</td>
                    <td className="px-5 py-4 font-semibold text-accent">{spec.readRange}</td>
                    <td className="px-5 py-4 text-muted">{spec.commonSystems}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Standard vs RFID Comparison */}
        <div className="mt-16">
          <SectionHead eyebrow="Feature Comparison" title="Plain PVC Card vs RFID Smart Card" />
          <div className="mt-6">
            <CompareTable columns={["Credential Feature", "Standard CR80 PVC Card", "RFID Smart Card"]} rows={compareRows} highlightColumn={2} />
          </div>
        </div>

        {/* Applications */}
        <div className="mt-16">
          <SectionHead eyebrow="Sectors" title="Where IDGen RFID Credentials Are Used" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((a) => (
              <FeatureCard key={a.title} icon={a.icon} title={a.title} body={a.body} />
            ))}
          </div>
        </div>

        {/* 6-Stage Engineering Process */}
        <div className="mt-16">
          <SectionHead eyebrow="Quality Pipeline" title="RFID Testing & Production Lifecycle" />
          <div className="mt-6">
            <WorkflowSteps steps={process} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About RFID Cards" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need RFID access cards matched to your turnstiles?"
            body="Speak directly with our RFID technical team in Guwahati to confirm reader frequencies, test sample cards, and receive batch pricing."
            links={[
              { label: "Request an RFID Quote", href: "/request-a-quote/", primary: true },
              { label: "View Pricing Tiers", href: "/pricing/" },
              { label: "Explore ID Card Printing", href: "/id-card-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
