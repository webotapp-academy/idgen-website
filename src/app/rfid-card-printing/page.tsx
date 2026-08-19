import Image from "next/image";
import Link from "next/link";
import { Radio, GraduationCap, Building2, Hospital, Users, AlertTriangle, ShieldCheck, CheckCircle2, Cpu, ArrowRight } from "lucide-react";
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
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Smart Card Sample */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/IMG20250328133145.jpg"
                  alt="Contactless Smart Card Credentials with RFID Inlay"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-cyan-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">13.56 MHz Mifare</span>
                </div>
              </div>

              {/* Overlapping Specimen */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/PVC Cards Samples/Sample 3.jpg"
                  alt="High-Grade Encoded Smart Card"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Factory Verification Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/IMG20250317104038.jpg"
                  alt="Quality Testing RFID Badges"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "RFID Card Printing", path: "/rfid-card-printing/" }]} />

        {/* RFID Card Macro Photo Showcase */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl img-shine">
                <Image
                  src="/images/ID Card Full Set Samples/IMG20250304160401.jpg"
                  alt="RFID Proximity Smart Card Testing Specimen"
                  fill
                  priority
                  className="img-zoom object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                    Smart Specimen
                  </span>
                  <p className="text-sm font-bold mt-1">100% Signal Ping Tested Before Packaging</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Engineered Contactless Tech</span>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Zero Dead Chips. Guaranteed Turnstile Compatibility.
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              Standard desktop laminators overheat and ruin internal RFID antenna wires. IDGen utilizes temperature-regulated thermal retransfer machines specifically calibrated for contactless chip inlays, ensuring 100% read reliability at your office gates and campus turnstiles.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-surface-border bg-surface p-3">
                <p className="font-bold text-foreground">UID Data Export</p>
                <p className="text-muted text-[11px] mt-0.5">Pre-scanned Excel roster for IT</p>
              </div>
              <div className="rounded-xl border border-surface-border bg-surface p-3">
                <p className="font-bold text-foreground">Shielded PVC Core</p>
                <p className="text-muted text-[11px] mt-0.5">Protects internal chip from bending</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/request-a-quote/" className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 shadow transition hover:bg-accent-hover hover:text-white">
                Request Smart Card Quote
              </Link>
              <Link href="/pricing/" className="rounded-full border border-surface-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
                View Price Calculator
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Standards Table */}
        <div className="mt-20">
          <SectionHead eyebrow="Technical Sheet" title="Supported RFID, NFC & Proximity Chip Standards" />
          <div className="mt-6 overflow-x-auto rounded-2xl border border-surface-border bg-surface shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-surface-border bg-background/80 text-xs font-bold text-muted uppercase">
                <tr>
                  <th className="px-5 py-4">Frequency & Standard</th>
                  <th className="px-5 py-4">Security / Encryption</th>
                  <th className="px-5 py-4">Read Distance</th>
                  <th className="px-5 py-4">Common Applications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {rfidSpecs.map((spec) => (
                  <tr key={spec.standard} className="hover:bg-background/50 transition">
                    <td className="px-5 py-4 font-bold text-foreground">{spec.standard}</td>
                    <td className="px-5 py-4 text-muted">{spec.encryption}</td>
                    <td className="px-5 py-4 font-mono text-xs text-accent font-semibold">{spec.readRange}</td>
                    <td className="px-5 py-4 text-muted">{spec.commonSystems}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Applications */}
        <div className="mt-20">
          <SectionHead eyebrow="Deployment" title="Smart RFID Credentials in Action" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((a) => (
              <FeatureCard key={a.title} icon={a.icon} title={a.title} body={a.body} />
            ))}
          </div>
        </div>

        {/* Standard PVC vs Smart RFID Comparison */}
        <div className="mt-20">
          <SectionHead eyebrow="Specification Matrix" title="Standard PVC Cards vs. Contactless Smart RFID Cards" />
          <div className="mt-6">
            <CompareTable columns={["Feature / Capability", "Standard PVC Card", "RFID Smart Card"]} rows={compareRows} highlightColumn={2} />
          </div>
        </div>

        {/* Process */}
        <div className="mt-20">
          <SectionHead eyebrow="Verification Workflow" title="6-Step Zero-Defect Smart Card Production" />
          <div className="mt-6">
            <WorkflowSteps steps={process} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About RFID Smart Cards" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need sample RFID test cards for your reader system?"
            body="We supply test credentials so your IT and facilities teams can verify gate compatibility before approving production."
            links={[
              { label: "Request Test Sample Pack", href: "/request-a-quote/", primary: true },
              { label: "Explore Employee ID Cards", href: "/employee-id-card-printing/" },
              { label: "Custom Printed Lanyards", href: "/custom-printed-lanyard-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
