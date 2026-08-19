import Image from "next/image";
import Link from "next/link";
import { Link2, ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "ID Card Hooks & Fish Hook Attachments for Lanyards | IDGen",
  description: "ID card hooks and fish hook attachments for ID card holders, badges and lanyards. IDGen supplies compatible attachment options for schools, companies, institutions and events.",
  path: "/id-card-hooks/",
});

const hookModels = [
  { name: "Chrome Swivel Dog Hook", material: "Nickel-Plated Zinc Alloy", pullStrength: "25 kg Tensile", img: "/images/Lanyard with Hook Samples/Sample 17 .jpg", desc: "Heavy-duty spring lever snap with 360° free rotation to prevent lanyard twists." },
  { name: "Classic Fish Hook Attachment", material: "Hardened Steel Wire", pullStrength: "15 kg Tensile", img: "/images/Lanyard with Hook Samples/Sample 18 .jpg", desc: "Lightweight, reliable wire snap hook designed for daily school badge loops." },
  { name: "Dual-Hook Conference Clip", material: "Twin Swivel Carabiners", pullStrength: "30 kg Tensile", img: "/images/Lanyard with Hook Samples/Sample 19 .jpg", desc: "Anchors oversized convention credentials at both corners to eliminate badge flip." },
  { name: "Safety Breakaway Clip", material: "Molded POM Polymer", pullStrength: "5 kg Auto-Release", img: "/images/Lanyard with Hook Samples/Sample 23 .jpg", desc: "Emergency release buckle positioned at the neck nape for workshop & hospital safety." },
];

const orderingSteps = [
  { title: "1. Specify Hook Model", body: "Select Dog Hook, Fish Hook, Crocodile Clip, or Safety Breakaway." },
  { title: "2. Choose Finish & Material", body: "Opt for mirror chrome, matte black, or heavy-duty zinc alloy." },
  { title: "3. Match Lanyard Ribbon Width", body: "Available in 12mm, 16mm, 20mm, and 25mm inner loop apertures." },
  { title: "4. Bulk Factory Delivery", body: "Packaged in poly-bags of 100 with immediate dispatch from our Guwahati warehouse." },
];

const faqs: Faq[] = [
  { q: "What is the difference between a Dog Hook and a Fish Hook?", a: "A Dog Hook features a spring-loaded trigger lever with a 360-degree swivel base that prevents lanyard tangling. A Fish Hook is a simpler curved steel snap clip favored for economical student lanyard sets." },
  { q: "Are IDGen hooks rust-resistant?", a: "Yes. All our metallic hooks are electroplated with anti-corrosion nickel/chrome layers that resist humidity, sweat, and tarnishing." },
  { q: "Can I buy hooks separately without lanyards?", a: "Yes. We supply individual hardware attachments and clips in bulk wholesale quantities for printing businesses and institutional inventory." },
];

export default function IdCardHooksPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "ID Card & Lanyard Hooks",
          description: "Fish hooks and attachment components connecting card holders to lanyards.",
          path: "/id-card-hooks/",
        })}
      />
      
      <PageHero
        eyebrow="Hardware & Attachments"
        icon={Link2}
        title="Heavy-Duty Chrome Swivel Hooks & Attachment Hardware"
        lede="Engineered for high-tension durability and effortless 360° rotation. Nickel-plated dog hooks, classic fish hooks, and safety breakaway buckles manufactured for reliable everyday badge wear."
        stats={[
          { label: "Material", value: "Nickel-Plated Zinc" },
          { label: "Rotation", value: "360° Free Swivel" },
          { label: "Tensile Rating", value: "Up to 25 kg" },
          { label: "Dispatch", value: "Immediate Stock" },
        ]}
        visual={
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Hook Product Photo */}
              <div className="absolute top-0 right-0 h-60 w-[70%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 17 .jpg"
                  alt="Chrome Swivel Dog Hook for Lanyards"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Chrome Swivel</span>
                </div>
              </div>

              {/* Secondary Fish Hook Sample */}
              <div className="absolute bottom-4 left-0 h-48 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 18 .jpg"
                  alt="Steel Wire Fish Hook Attachment"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Lanyard Set Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-full overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 19 .jpg"
                  alt="Lanyard Hardware Assembly"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products/" }, { name: "ID Card Hooks", path: "/id-card-hooks/" }]} />

        {/* Real Hardware Specimen Grid */}
        <div className="mt-8">
          <SectionHead
            eyebrow="Hardware Models"
            title="Industrial-Grade ID Card Hooks & Fasteners"
            lede="Tested to withstand continuous daily pull resistance without bending, snapping, or tarnishing."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hookModels.map((hm) => (
              <div key={hm.name} className="group overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm transition hover:shadow-xl hover:border-accent/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 img-shine">
                  <Image
                    src={hm.img}
                    alt={hm.name}
                    fill
                    className="img-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-bold text-slate-200 backdrop-blur-md">
                    {hm.pullStrength}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-sm">{hm.name}</h3>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed">{hm.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-[11px] text-accent font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>{hm.material}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connection Flow Diagram */}
        <div className="mt-20 rounded-3xl border border-surface-border bg-surface p-8 sm:p-10">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">Component Ecosystem</span>
          <h2 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl">
            How IDGen Hardware Pairs Together
          </h2>
          <p className="mt-3 text-sm text-muted max-w-2xl">
            A secure, comfortable ID setup combines high-grade PVC cards with protective cases and swivel hooks:
          </p>
          <div className="mt-8">
            <FlowChain steps={["30-Mil PVC ID Card", "Crystal Acrylic Holder", "Chrome Swivel Hook", "20mm Satin Lanyard"]} />
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-20">
          <SectionHead eyebrow="Ordering Guide" title="How to Order Lanyard Hooks in Bulk" />
          <div className="mt-8">
            <WorkflowSteps steps={orderingSteps} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About ID Card Hooks" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Looking for wholesale hardware supplies?"
            body="Get in touch with our Guwahati distribution warehouse for carton pricing on dog hooks, fish hooks, and alligator clips."
            links={[
              { label: "Request Hardware Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore ID Card Holders", href: "/id-card-holders/" },
              { label: "Custom Printed Lanyards", href: "/custom-printed-lanyard-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
