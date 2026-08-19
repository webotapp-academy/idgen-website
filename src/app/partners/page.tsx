import Image from "next/image";
import Link from "next/link";
import { Handshake, Store, Megaphone, Laptop2, Cable, CheckCircle2, XCircle, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FlowChain } from "@/components/ui/FlowChain";
import { FaqList } from "@/components/ui/FaqList";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "ID Card Reseller & Partner Program | IDGen Northeast India",
  description:
    "Become an IDGen reseller, referral, printing or School ERP partner. Build your local ID card business with IDGen production support across Northeast India.",
  path: "/partners/",
});

const strengths = [
  "Local Customers — you know schools, businesses, institutions or organizations in your area.",
  "Local Market Knowledge — you understand how customers in your city or state purchase identification products.",
  "Sales Network — you already sell printing, stationery, technology, school or corporate products.",
  "Existing Business — you may already operate a printing, IT, advertising, stationery, ERP or related business.",
  "Technology Platform — you may operate software that already serves schools or organizations.",
];

const models = [
  {
    icon: Store,
    title: "Reseller Partner",
    tagline: "Sell identification products in your market.",
    body: "Acquire customers and sell IDGen products under an agreed wholesale reseller margin. Suitable for local printers, stationery businesses, advertising agencies, and school suppliers.",
  },
  {
    icon: Megaphone,
    title: "Referral Partner",
    tagline: "Refer institutional customers to IDGen.",
    body: "Pass qualified institutional leads to IDGen and earn recurring commissions on all fulfilled print runs without managing production or logistics.",
  },
  {
    icon: Laptop2,
    title: "School ERP & EdTech Partner",
    tagline: "Your software. Our physical ID production.",
    body: "Integrate physical student ID card and lanyard fulfillment directly into your School ERP software, offering a complete digital-to-physical bundle to your school clients.",
  },
  {
    icon: Cable,
    title: "Technology Integration Partner",
    tagline: "Connect software with physical credentials.",
    body: "Access control, biometric hardware vendors, and HRMS platforms seeking seamless RFID/NFC smart card manufacturing for client turnstiles.",
  },
];

const faqs: Faq[] = [
  { q: "What is the IDGen reseller program?", a: "The IDGen reseller program allows suitable businesses to acquire customers and offer IDGen identity products under an agreed reseller arrangement while IDGen supports the applicable production workflow." },
  { q: "Do I need my own ID card printing machine?", a: "No! The partner model is designed so partners focus purely on sales, relationships, and customer service while IDGen handles all retransfer printing, lanyard sublimation, and ultrasonic assembly in Guwahati." },
  { q: "Can I become an IDGen reseller in my city?", a: "Yes. IDGen is expanding across all 8 Northeast states and actively partners with regional distributors in Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, and Sikkim." },
  { q: "Can a School ERP company partner with IDGen?", a: "Yes. School ERP companies can connect student rosters directly to IDGen Studio for instant digital proofing and physical delivery to schools." },
];

export default function PartnersPage() {
  return (
    <>
      
      <PageHero
        eyebrow="B2B & Reseller Network"
        icon={Handshake}
        title="Become an IDGen Partner & Reseller"
        lede="Build a high-margin identity business in your city. You own the client relationship — IDGen powers high-volume thermal retransfer production, lanyard sublimation, and 48-hour express dispatch."
        stats={[
          { label: "Margin Potential", value: "Wholesale Tiers" },
          { label: "Production Setup", value: "Zero CapEx Needed" },
          { label: "Partner Hubs", value: "All 8 NE States" },
          { label: "Turnaround", value: "48–72h Delivery" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Factory Production Photo */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/IMG20250321154119.jpg"
                  alt="High Capacity ID Production Lines at IDGen"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-cyan-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Factory Production Backing</span>
                </div>
              </div>

              {/* Overlapping Specimen Kit */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/Sample 1.jpeg"
                  alt="Complete ID Card and Lanyard Specimen Package"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Hardware Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 1.jpeg"
                  alt="Full Color Printed Lanyard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Partners", path: "/partners/" }]} />

        {/* Partnership Ecosystem Flow */}
        <div className="mt-8 rounded-3xl border border-surface-border bg-surface p-8 sm:p-10 shadow-sm">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">How The Model Works</span>
          <h2 className="mt-2 text-2xl font-black text-foreground sm:text-3xl">
            You Win Customers. We Deliver Factory Precision.
          </h2>
          <p className="mt-3 text-sm text-muted max-w-2xl leading-relaxed">
            Eliminate equipment maintenance, ink stockouts, and manual labor. Focus on growing your business while leveraging IDGen&apos;s industrial printing lines in Guwahati.
          </p>
          <div className="mt-8">
            <FlowChain steps={["Acquire Customer", "Collect Roster & Photo", "Submit to IDGen Studio", "Guwahati Factory Print", "Direct Express Dispatch", "Satisfied Client"]} />
          </div>
        </div>

        {/* 4 Partnership Models */}
        <div className="mt-20">
          <SectionHead
            eyebrow="Collaboration Models"
            title="Choose Your Ideal Partnership Model"
            lede="Flexible arrangements designed for local printers, School ERP software companies, agencies, and entrepreneurs."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {models.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="group rounded-3xl border border-surface-border bg-surface p-6 sm:p-8 transition-all hover:border-accent/40 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-slate-950 font-bold mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{m.title}</h3>
                  <p className="mt-1 font-mono text-xs text-accent font-semibold">{m.tagline}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{m.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partner Onboarding Form Split */}
        <div id="apply" className="mt-20 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-surface-border bg-surface p-6 sm:p-10 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Apply for Partner Status</span>
              <h2 className="mt-1 text-2xl font-black text-foreground sm:text-3xl">
                Partner Onboarding Application
              </h2>
              <p className="mt-2 text-xs text-muted leading-relaxed mb-6">
                Tell us about your business, current customer base, and target region. We review applications within 24 business hours.
              </p>
              <PartnerForm />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-3xl border border-white/10 bg-[#0B1320] p-6 text-white shadow-xl">
              <span className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase">
                <ShieldCheck className="h-4 w-4" />
                <span>Partner Benefits</span>
              </span>
              <h3 className="mt-2 text-lg font-bold text-white">Why Partner with IDGen?</h3>
              <div className="mt-4 space-y-3">
                {strengths.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About the Partner Program" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </Container>
    </>
  );
}
