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

const process = [
  { title: "Select the Configuration", body: "Confirm lanyard, hook, holder (if required), number of hooks and sealing requirement." },
  { title: "Confirm Materials", body: "The lanyard and attachment materials are checked for suitability." },
  { title: "Prepare the Assembly", body: "The lanyard and attachment are positioned according to the required configuration." },
  { title: "Ultrasonic Sealing", body: "The appropriate sealing process is applied to create the required attachment." },
  { title: "Inspection", body: "The finished attachment is checked for position, appearance, attachment quality and required configuration." },
  { title: "Complete Assembly", body: "The sealed lanyard is combined with the required identification components." },
  { title: "Final Quality Check", body: "The completed identification setup is checked before packaging and dispatch." },
];

const useCases = [
  { icon: Sparkles, title: "Schools", body: "Student ID Card + Holder + Hook + Ultrasonic Sealing + School Lanyard.", href: "/student-id-card-printing/" },
  { icon: ShieldCheck, title: "Companies", body: "Employee ID Card + Holder + Hook + Ultrasonic Sealing + Company Lanyard.", href: "/employee-id-card-printing/" },
  { icon: Layers, title: "Events", body: "Event Card + Lanyard + one or two hooks, sealing points matched to the attachment configuration.", href: "/event-card-printing/" },
];

const compareRows = [
  ["Lanyard attachment", "Metal hardware", "Sealed attachment configuration"],
  ["Exposed metal", "Depends on design", "Can be reduced"],
  ["Sharp exposed edges", "Possible", "Can be reduced in suitable designs"],
  ["Rust/corrosion appearance", "Possible with exposed metal", "Reduced where exposed metal is eliminated/reduced"],
  ["Appearance", "Conventional", "Cleaner, integrated appearance"],
  ["Suitable for bulk ID projects", "Yes", "Yes"],
];

const faqs: Faq[] = [
  { q: "What is ultrasonic sealing in ID card lanyards?", a: "Ultrasonic sealing is a joining process that uses high-frequency mechanical vibration to create a sealed attachment between compatible materials in a lanyard assembly." },
  { q: "Is ultrasonic sealing used with lanyards?", a: "Yes. IDGen uses ultrasonic sealing as an attachment option for suitable lanyard and hook configurations." },
  { q: "Is ultrasonic sealing better than a metal attachment?", a: "It can provide a cleaner and more integrated attachment and can reduce exposed metal hardware in suitable configurations. The best method depends on the lanyard and attachment design." },
  { q: "Can metal hooks rust?", a: "Exposed metal hardware can develop corrosion or surface deterioration depending on the metal, coating, environment and usage. Ultrasonic sealing can reduce exposed metal in suitable attachment configurations." },
  { q: "Can ultrasonic sealing remove sharp metal edges?", a: "It can reduce exposure to certain metal attachment components where the design allows it, but the final configuration depends on the selected hook and lanyard." },
  { q: "How many sealing points are required for one hook?", a: "A one-hook configuration generally requires one sealing point." },
  { q: "How many sealing points are required for two hooks?", a: "A two-hook configuration generally requires two sealing points." },
  { q: "Can event cards use ultrasonic sealing?", a: "Yes. Event cards can use ultrasonic sealing when the selected lanyard and hook configuration is suitable." },
  { q: "Can ultrasonic sealing be added to a complete ID card set?", a: "Yes. A complete setup can include ID Card + Holder + Hook + Ultrasonic Sealing + Lanyard." },
  { q: "Does ultrasonic sealing replace the ID card holder?", a: "No. Ultrasonic sealing is an attachment/assembly method — it does not replace a holder when a holder is required." },
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
        eyebrow="Service"
        icon={Waves}
        title="A Cleaner Way to Attach Lanyards to ID Card Holders"
        lede="IDGen provides ultrasonic sealing for ID card lanyard attachments, creating a finished connection between the lanyard and the required attachment configuration — used with suitable hooks and lanyard assemblies where a cleaner, more finished attachment is required."
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Ultrasonic Sealing", path: "/ultrasonic-sealing/" }]} />

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Instead of relying only on a conventional exposed metal attachment, ultrasonic sealing can create a
            more integrated finished lanyard assembly. Ultrasonic sealing uses high-frequency mechanical
            vibration to join compatible materials through localized heat generated at the joining area — the
            exact sealing method depends on lanyard construction, attachment type, number of attachment
            points, material and required configuration.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request an Ultrasonic Sealing Quote
          </Link>
          <Link href="/custom-printed-lanyard-printing/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            Explore Custom Printed Lanyards
          </Link>
        </div>

        {/* Why use */}
        <div className="mt-16">
          <SectionHead
            eyebrow="Why It's Used"
            title="Why Use Ultrasonic Sealing?"
            lede="Traditional lanyard assemblies can use exposed metal attachment components — which, depending on the design and environment, may feel sharp, catch on clothing, develop surface corrosion over time, or become visually untidy."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["A More Finished Appearance", "The sealed connection can create a cleaner-looking transition between the lanyard and attachment."],
              ["Reduced Exposure to Sharp Metal", "Where the selected configuration allows it, ultrasonic sealing can reduce the amount of exposed metal hardware around the attachment area."],
              ["Better Long-Term Appearance", "Because the attachment can be integrated into the lanyard assembly, it can avoid some appearance issues associated with exposed metal hardware."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-surface-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-xl bg-background p-4 text-sm text-muted">
            <strong className="text-foreground">Important:</strong> ultrasonic sealing does not make every
            lanyard or attachment configuration permanently corrosion-proof. Its suitability depends on the
            materials and construction used.
          </p>
        </div>

        {/* Comparison */}
        <div className="mt-16">
          <SectionHead eyebrow="Comparison" title="Ultrasonic Sealing vs Conventional Metal Attachment" lede="The right method depends on the customer's product design and required attachment configuration." />
          <div className="mt-6">
            <CompareTable columns={["Feature", "Conventional Metal Attachment", "Ultrasonic Sealing"]} rows={compareRows} highlightColumn={2} />
          </div>
        </div>

        {/* Hook configurations */}
        <div className="mt-16">
          <SectionHead eyebrow="Configuration" title="One Hook vs Two Hook Sealing" lede="The number of ultrasonic sealing points depends on the attachment configuration." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-surface-border bg-surface p-6">
              <h3 className="font-semibold text-foreground">One-Hook Configuration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">1 Hook + 1 Ultrasonic Sealing Point.</p>
              <div className="mt-3">
                <FlowChain steps={["Lanyard", "Ultrasonic Sealing", "Hook", "ID Card / Holder"]} />
              </div>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-6">
              <h3 className="font-semibold text-foreground">Two-Hook Configuration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">2 Hooks + 2 Ultrasonic Sealing Points.</p>
              <div className="mt-3">
                <FlowChain steps={["Lanyard", "Ultrasonic Sealing", "Hook", "Card"]} />
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            The final configuration should be confirmed according to the actual lanyard and card design — this
            applies equally to{" "}
            <Link href="/event-card-printing/" className="font-semibold text-accent hover:underline">event cards →</Link>, which should be quoted based on the complete attachment configuration rather than one generic sealing charge.
          </p>
        </div>

        {/* Use cases */}
        <div className="mt-16">
          <SectionHead eyebrow="By Use Case" title="Who Can Order Ultrasonic Sealing?" lede="Especially relevant when the customer wants a finished lanyard attachment rather than a loose lanyard and separate hardware." />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {useCases.map((u) => (
              <FeatureCard key={u.title} icon={u.icon} title={u.title} body={u.body} href={u.href} />
            ))}
          </div>
        </div>

        {/* Complete sets */}
        <div className="mt-16 rounded-2xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
          <h2 className="text-lg font-bold text-navy-deep">Complete Lanyard Attachment Options</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Conventional Attachment", "Lanyard + Hook"],
              ["Single Ultrasonic Sealing", "Lanyard + Hook + 1 Sealing Point"],
              ["Two-Hook Ultrasonic", "Lanyard + 2 Hooks + 2 Sealing Points"],
              ["Complete ID Card Assembly", "ID Card + Holder + Hook(s) + Ultrasonic Sealing + Lanyard"],
            ].map(([label, body]) => (
              <div key={label} className="rounded-xl bg-white/60 p-4 dark:bg-white/5">
                <p className="text-xs font-bold tracking-widest text-navy-deep/70 uppercase">{label}</p>
                <p className="mt-1.5 text-sm font-medium text-navy-deep">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-16">
          <SectionHead eyebrow="Process" title="Ultrasonic Sealing Process" />
          <div className="mt-6">
            <WorkflowSteps steps={process} />
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Ultrasonic Sealing Price</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            The cost depends on the required configuration — number of sealing points, number of hooks,
            lanyard type, attachment configuration, quantity and complete-set requirement. Basic principle: 1
            Hook → 1 Sealing Point, 2 Hooks → 2 Sealing Points — priced according to the actual configuration
            rather than assuming the same sealing quantity for every order.
          </p>
          <Link href="/pricing/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
            View IDGen Pricing →
          </Link>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need ultrasonic sealing?"
            body="Tell us your number of ID cards, lanyard type, number of hooks, holder requirement and one- or two-hook configuration — we can determine the appropriate sealing and assembly configuration."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore Custom Printed Lanyards", href: "/custom-printed-lanyard-printing/" },
              { label: "Explore Event Card Printing", href: "/event-card-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
