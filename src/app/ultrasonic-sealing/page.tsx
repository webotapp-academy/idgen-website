import Image from "next/image";
import Link from "next/link";
import { Waves, Sparkles, ShieldCheck, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CompareTable } from "@/components/ui/CompareTable";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Ultrasonic Sealing for ID Card Lanyards | IDGen",
  description:
    "Ultrasonic sealing for ID card lanyards and hook attachments. Cleaner lanyard assembly for school, employee, event and bulk ID card projects. One-hook and two-hook configurations available.",
  path: "/ultrasonic-sealing/",
});

const weldingSpecs = [
  { feature: "Acoustic Frequency", value: "20 kHz Ultrasonic Sonotrode Resonance" },
  { feature: "Tensile Seam Strength", value: "> 18.5 kg Continuous Pull Resistance" },
  { feature: "Joint Hermeticity", value: "100% Fused Polymer Seam (Zero Thread Fraying)" },
  { feature: "Hardware Compatibility", value: "Single-Hook & Dual-Hook Lanyard Configurations" },
  { feature: "Aesthetic Finish", value: "Embossed IDGen Precision Joint Seal" },
];

const process = [
  { title: "1. Ribbon Loop Alignment", body: "Satin lanyard strap is folded precisely around the chrome hook eyelet with laser positioning." },
  { title: "2. High-Frequency Acoustic Pulse", body: "A 20 kHz acoustic horn applies targeted ultrasonic vibration to melt polyester fibers locally." },
  { title: "3. Molecular Fusion Weld", body: "Ribbon layers fuse into a solid structural polymer joint in under 0.6 seconds without adhesives." },
  { title: "4. Tensile Pull-Test Audit", body: "Sample units tested under 18 kg hydraulic load to guarantee zero joint separation in the field." },
  { title: "5. Final Sequential Packaging", body: "Assembled lanyards bundled and paired with card holders for direct factory dispatch." },
];

const useCases = [
  { icon: Sparkles, title: "K-12 & University Intakes", body: "Student ID Card + Holder + Hook + Ultrasonic Sealing + School Satin Lanyard.", href: "/student-id-card-printing/" },
  { icon: ShieldCheck, title: "Corporate Workforces", body: "Employee ID Card + Holder + Hook + Ultrasonic Sealing + Branded Corporate Lanyard.", href: "/employee-id-card-printing/" },
  { icon: Layers, title: "VIP Conferences & Expos", body: "Event Card + 2 Hooks + Dual Ultrasonic Sealing Points for non-flipping badge display.", href: "/event-card-printing/" },
];

const compareRows = [
  ["Attachment technology", "Metal staple / crimp clamp", "Ultrasonic molecular polymer fusion"],
  ["Sharp edge risk", "Exposed metal corners scratch skin", "Smooth, seamless fabric weld"],
  ["Rust & corrosion risk", "Staples oxidize and rust when washed", "100% rust-free (zero exposed metal)"],
  ["Pull-force resistance", "Staples pull loose at 6–8 kg", "Withstands over 18.5 kg tension"],
  ["Aesthetic presentation", "Bulky, industrial wire appearance", "Flush, modern corporate finish"],
  ["Institutional longevity", "Frayed ends after 3–6 months", "Lasts for full multi-year academic tenure"],
];

const faqs: Faq[] = [
  { q: "What is ultrasonic sealing on an ID card lanyard?", a: "Ultrasonic sealing uses high-frequency 20 kHz acoustic sound waves to generate localized frictional heat, fusing polyester ribbon fibers together into a single indestructible joint without threads, staples, or glue." },
  { q: "Why is ultrasonic sealing superior to metal stapling?", a: "Metal staples rust over time, have sharp edges that snag clothing or scratch skin, and pull loose easily. Ultrasonic welds are flush, smooth, completely rust-proof, and hold over 18 kg of pull force." },
  { q: "Can ultrasonic sealing be used on both 1-hook and 2-hook lanyards?", a: "Yes. Standard single-hook lanyards receive 1 ultrasonic weld point, while wide-format conference event lanyards receive 2 ultrasonic weld points." },
];

export default function UltrasonicSealingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Ultrasonic Sealing for ID Card Lanyards",
          description: "Ultrasonic sealing for ID card lanyard and hook attachments, for a cleaner finished assembly.",
          path: "/ultrasonic-sealing/",
        })}
      />
      
      <PageHero
        eyebrow="Precision Finishing"
        icon={Waves}
        title="Automated Ultrasonic Sealing for ID Card Lanyards"
        lede="Eliminate unsightly metal staples, rivets, and fraying threads. Our factory ultrasonic welders fuse lanyard ribbon loops into seamless, tear-proof, skin-friendly bonds with 18+ kg pull strength."
        stats={[
          { label: "Bond Strength", value: "18.5 kg+ Tensile" },
          { label: "Seam Finish", value: "100% Rust-Free" },
          { label: "Technology", value: "20 kHz Acoustic" },
          { label: "Factory Output", value: "10,000+ Loops / Day" },
        ]}
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Ultrasonic Sealing", path: "/ultrasonic-sealing/" }]} />

        {/* Machinery Macro Photo Showcase Banner */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/ultrasonic-welding.jpg"
                  alt="Industrial Automated Ultrasonic Welding Machine Sealing Satin Lanyard Loop with Laser Guide"
                  fill
                  priority
                  className="img-zoom object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                    20 kHz Sonotrode Weld
                  </span>
                  <p className="text-sm font-bold mt-1">Laser-Guided Precision • 18.5 kg Tensile Pull Strength</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Acoustic Molecular Fusion</span>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Clean, Tear-Proof Seams with Zero Exposed Metal Staples
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              Traditional lanyard attachments crimp cheap wire staples or sheet metal clamps around the fabric. These rust when exposed to rain or sweat, leave sharp burrs that scratch student necks, and fail under moderate tension. IDGen ultrasonic welding fuses the ribbon at a molecular level for permanent structural integrity.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-surface-border bg-surface p-3">
                <p className="font-bold text-foreground">Zero Skin Irritation</p>
                <p className="text-muted text-[11px] mt-0.5">Flush soft texture against collars</p>
              </div>
              <div className="rounded-xl border border-surface-border bg-surface p-3">
                <p className="font-bold text-foreground">100% Waterproof</p>
                <p className="text-muted text-[11px] mt-0.5">Machine washable with zero rusting</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/request-a-quote/?service=sealing" className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 shadow transition hover:bg-accent-hover hover:text-white">
                Request Sealed Lanyard Quote
              </Link>
              <Link href="/custom-printed-lanyard-printing/" className="rounded-full border border-surface-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
                Explore Custom Lanyards
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Specs Table */}
        <div className="mt-16">
          <SectionHead eyebrow="Technical Sheet" title="Ultrasonic Sealing Engineering Specifications" />
          <div className="mt-6 overflow-x-auto rounded-2xl border border-surface-border bg-surface shadow-sm">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-surface-border">
                {weldingSpecs.map((spec) => (
                  <tr key={spec.feature} className="hover:bg-background/50 transition">
                    <td className="px-6 py-4 font-bold text-foreground w-1/3">{spec.feature}</td>
                    <td className="px-6 py-4 text-muted font-medium">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Staple vs Ultrasonic Comparison */}
        <div className="mt-16">
          <SectionHead eyebrow="Direct Comparison" title="Traditional Metal Staple vs IDGen Ultrasonic Welding" />
          <div className="mt-6">
            <CompareTable columns={["Feature / Factor", "Traditional Metal Staple Crimp", "IDGen Ultrasonic Molecular Weld"]} rows={compareRows} highlightColumn={2} />
          </div>
        </div>

        {/* One Hook vs Two Hook Configurations */}
        <div className="mt-16">
          <SectionHead eyebrow="Configurations" title="Single-Hook vs Dual-Hook Attachment Geometry" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="rounded bg-sky-500/20 px-2 py-0.5 text-xs font-bold text-accent">1 Sealing Point</span>
                <h3 className="font-bold text-foreground text-lg">Single-Hook Standard Setup</h3>
              </div>
              <p className="mt-2 text-sm text-muted">Ideal for standard vertical and horizontal card holders used by students, corporate employees, and hospital staff.</p>
              <div className="mt-4">
                <FlowChain steps={["Satin Lanyard", "Ultrasonic Weld", "Swivel Dog Hook", "CR80 Card Holder"]} />
              </div>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-600">2 Sealing Points</span>
                <h3 className="font-bold text-foreground text-lg">Dual-Hook Anti-Twist Setup</h3>
              </div>
              <p className="mt-2 text-sm text-muted">Specially engineered for oversized VIP event passes and delegate badges to keep cards facing 100% forward without flipping.</p>
              <div className="mt-4">
                <FlowChain steps={["Satin Lanyard", "Dual Ultrasonic Welds", "2 Corner Hooks", "Wide Event Badge"]} />
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-16">
          <SectionHead eyebrow="Applications" title="Who Specifies Ultrasonic Sealing?" />
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {useCases.map((u) => (
              <FeatureCard key={u.title} icon={u.icon} title={u.title} body={u.body} href={u.href} />
            ))}
          </div>
        </div>

        {/* 5-Step Process */}
        <div className="mt-16">
          <SectionHead eyebrow="Manufacturing Pipeline" title="The Ultrasonic Sealing Process" />
          <div className="mt-6">
            <WorkflowSteps steps={process} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About Ultrasonic Sealing" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Upgrade your lanyard attachment to ultrasonic sealing"
            body="Experience the difference in comfort, durability, and brand presentation. Contact our production facility in Guwahati for custom samples."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore Custom Lanyards", href: "/custom-printed-lanyard-printing/" },
              { label: "View Pricing Tiers", href: "/pricing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
