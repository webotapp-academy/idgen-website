import { 
  Send, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MessageSquare, 
  Sparkles
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
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Request a Quote", path: "/request-a-quote/" }]} />

        {/* Split Grid: Left Form (7 cols on lg) | Right Credentials & Contact Sidebar (5 cols on lg) */}
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
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted uppercase">Phone Hotline</p>
                      <p className="font-bold">{SITE.phone}</p>
                    </div>
                  </a>
                )}

                {SITE.whatsapp && (
                  <a
                    href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello IDGen, I would like to request a quote for ID cards and lanyards.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-3 text-xs font-semibold text-emerald-900 transition hover:bg-emerald-100"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-700 uppercase">WhatsApp Instant Desk</p>
                      <p className="font-bold">+91 {SITE.whatsapp}</p>
                    </div>
                  </a>
                )}

                {SITE.email && (
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 rounded-2xl border border-surface-border bg-background p-3 text-xs font-semibold text-foreground transition hover:border-accent hover:text-accent"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted uppercase">Official Email</p>
                      <p className="font-bold truncate">{SITE.email}</p>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* 3. Physical Specimen Kit Callout */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1320] p-6 text-white shadow-md">
              <div className="relative z-10">
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-950">
                  Specimen Kit
                </span>
                <h3 className="mt-3 text-base font-bold text-white">Institutional Sample Box</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  We courier physical sample packs containing printed PVC cards, RFID smart credentials, satin lanyards, and crystal holders to school and enterprise procurement committees.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-cyan-300 font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Dispatched via priority speed post</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Process Walkthrough */}
        <div className="mt-20 rounded-3xl border border-surface-border bg-surface p-8 sm:p-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase">
            <Clock className="h-4 w-4" />
            <span>Order Progression</span>
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl">
            What Happens After You Submit Your Request?
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-surface-border bg-background p-5">
              <span className="font-mono text-xs font-bold text-accent">Step 1 (Within 2h)</span>
              <h3 className="mt-2 font-bold text-foreground text-sm">Itemized Proposal</h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">We calculate exact quantity discounts, finishing fees, and turnaround dates.</p>
            </div>

            <div className="rounded-2xl border border-surface-border bg-background p-5">
              <span className="font-mono text-xs font-bold text-accent">Step 2</span>
              <h3 className="mt-2 font-bold text-foreground text-sm">1:1 Digital Proof</h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">Review full-scale PDF proof with Pantone colors, barcodes, and text layout.</p>
            </div>

            <div className="rounded-2xl border border-surface-border bg-background p-5">
              <span className="font-mono text-xs font-bold text-accent">Step 3</span>
              <h3 className="mt-2 font-bold text-foreground text-sm">Factory Production</h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">High-definition retransfer presses, laser encoding, and ultrasonic sealing.</p>
            </div>

            <div className="rounded-2xl border border-surface-border bg-background p-5">
              <span className="font-mono text-xs font-bold text-accent">Step 4 (48–72h)</span>
              <h3 className="mt-2 font-bold text-foreground text-sm">Guwahati Dispatch</h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">Packed sequentially by class/department with live courier tracking.</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
