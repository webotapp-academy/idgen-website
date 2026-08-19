import Image from "next/image";
import Link from "next/link";
import { 
  Send, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MessageSquare, 
  Sparkles,
  PackageCheck,
  ArrowRight
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { services } from "@/data/services";
import { SITE } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Request a Formal Quotation & Specimen Kit | IDGen",
  description: "Request itemized factory-direct pricing, 1:1 scale digital PDF proofs, and physical sample kits for PVC ID cards, custom satin lanyards, and RFID credentials.",
  path: "/request-a-quote/",
});

const trustPillars = [
  { title: "Zero Plate / Setup Fee", desc: "No hidden die-cutting, screen, or digital prepress charges on all bulk orders." },
  { title: "Complimentary PDF Proof", desc: "Every order receives a 1:1 scale digital proof and 3D mockup before manufacturing starts." },
  { title: "48–72h Factory Dispatch", desc: "Standard batches produced and dispatched from our Guwahati central facility within 3 days." },
  { title: "NDA Data Privacy", desc: "Student and employee personal records are encrypted and expunged after production." },
];

export default function RequestAQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Factory Direct Pricing"
        icon={Send}
        title="Request a Formal Quotation & Digital Proof"
        lede="Tell us your organization type, batch volume, and required specifications. Our Guwahati engineering desk will reply with an itemized factory quotation, delivery timeline, and digital proof within 2 hours."
        stats={[
          { label: "Response SLA", value: "< 2 Hours" },
          { label: "Setup Fee", value: "₹0 (Free)" },
          { label: "Dispatch Window", value: "48–72 Hours" },
          { label: "Samples", value: "Complimentary" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Quotation & Specimen Kit Sample */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/Sample 1.jpeg"
                  alt="Complete ID Card and Lanyard Specimen Package"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Sample Kit Dispatch</span>
                </div>
              </div>

              {/* Overlapping PVC Card Specimen */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/PVC Cards Samples/Sample 1.jpg"
                  alt="30-Mil CR80 Solid PVC ID Card"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Lanyard Swivel Hook Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 17 .jpg"
                  alt="Anti-Rust Swivel Dog Hook"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Request a Quote", path: "/request-a-quote/" }]} />

        {/* Split Grid: Left Form | Right Credentials & Contact Sidebar */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          
          {/* Main Form Left Column */}
          <div className="lg:col-span-8">
            <QuoteForm services={services} />
          </div>

          {/* Right Sidebar: Trust, Direct Channels & Specimen Teaser */}
          <div className="space-y-6 lg:col-span-4">
            
            {/* 1. Factory Direct Guarantee Card */}
            <div className="rounded-3xl border border-white/10 bg-[#0B1320] p-6 text-white shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
                <ShieldCheck className="h-4 w-4" />
                <span>The IDGen Guarantee</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-white">Factory Direct Assurance</h3>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                Direct manufacturing from Guwahati with zero third-party agency markups.
              </p>

              <div className="mt-5 space-y-3.5">
                {trustPillars.map((tp) => (
                  <div key={tp.title} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{tp.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">{tp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Direct Support Desk Card */}
            <div className="rounded-3xl border border-surface-border bg-surface p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Direct Production Desk</span>
              <h3 className="mt-1 text-base font-bold text-foreground">Speak With an Engineer</h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Need advice on RFID frequency protocols, lanyard widths, or emergency 24-hour turnaround?
              </p>

              <div className="mt-5 space-y-3">
                {SITE.phone && (
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-3 rounded-2xl border border-surface-border bg-background p-3 text-xs font-semibold text-foreground transition hover:border-accent hover:text-accent"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted">Direct Hotline</span>
                      <span>{SITE.phone}</span>
                    </div>
                  </a>
                )}

                {SITE.whatsapp && (
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs font-semibold text-emerald-600 transition hover:border-emerald-500 hover:bg-emerald-500/15"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-emerald-600 font-bold">Instant WhatsApp Desk</span>
                      <span>Chat with Production</span>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* 3. Physical Sample Kit Request */}
            <div className="rounded-3xl border border-surface-border bg-gradient-to-br from-surface to-background p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase">
                <PackageCheck className="h-4 w-4" />
                <span>Institutional Specimen Kit</span>
              </div>
              <h4 className="mt-2 text-sm font-bold text-foreground">Need to inspect before ordering?</h4>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                We courier physical specimen packs including printed PVC cards, satin lanyards, RFID credentials, and acrylic holders to institutional procurement committees.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </>
  );
}
