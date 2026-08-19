import Image from "next/image";
import Link from "next/link";
import { Award, Dumbbell, HeartHandshake, Building2, Hotel, Users, QrCode, Layers, ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Membership Card Printing | Custom PVC Membership Cards | IDGen",
  description:
    "Custom membership card printing for clubs, gyms, associations, hotels, NGOs and organizations. Personalized PVC membership cards with photos, QR codes, barcodes and branding by IDGen.",
  path: "/membership-card-printing/",
});

const orgTypes = [
  { icon: Award, title: "Private Clubs & Golf Resorts", body: "High-gloss gold and silver metallic base cards with member photo, tier status, and cashless club spending chips." },
  { icon: Dumbbell, title: "Gyms & Fitness Centers", body: "Durable sweat-resistant PVC cards with barcode or RFID turnstile integration for automated 24/7 gym access." },
  { icon: HeartHandshake, title: "Professional Associations", body: "Accreditation credentials for bar associations, medical councils, rotary clubs, and trade chambers." },
  { icon: Hotel, title: "Hotel & Resort Loyalty", body: "VIP guest loyalty credentials with magnetic stripe point accumulation and room-key compatibility." },
  { icon: Users, title: "NGOs & Community Bodies", body: "Personalized volunteer and member cards with expiration dates, emergency contacts, and blood groups." },
  { icon: Building2, title: "Alumni & University Societies", body: "Lifetime membership cards with gold foil embossing and library privilege verification." },
];

const memberDeliveries = [
  { title: "Gold Tier VIP Member Card", sector: "Private Club & Resort", img: "/images/PVC Cards Samples/Sample 3.jpg" },
  { title: "Executive Laser-Cut Acrylic Badge", sector: "Professional Council", img: "/images/Acrylic Badges Samples/Sample 7.jpg" },
  { title: "Smart RFID Gym Access Card", sector: "Fitness Hub", img: "/images/ID Card Full Set Samples/IMG20250317104207.jpg" },
  { title: "Custom Magnetic Stripe Card", sector: "Hospitality & Loyalty", img: "/images/Acrylic Badges Samples/Sample 1.jpg" },
];

const process = [
  { title: "1. Specification & Tier Design", body: "Select base PVC finish (matte black, gold metallic, ultra-gloss) and encoding options (QR, Barcode, RFID)." },
  { title: "2. Member Roster Sync", body: "Upload member names, photos, membership IDs, and validity dates via Excel or IDGen Studio." },
  { title: "3. Digital Proof Approval", body: "Review exact layout, font sizing, and member portrait alignments prior to batch printing." },
  { title: "4. Precision Thermal Retransfer", body: "High-definition edge-to-edge printing with scratch-resistant protective overlaminate." },
  { title: "5. Magnetic / RFID Encoding", body: "Optional pre-programming of member points, access codes, and unique RFID sector keys." },
  { title: "6. Secure Guwahati Dispatch", body: "Numbered sequentially and shipped directly across Assam and Northeast India." },
];

const faqs: Faq[] = [
  { q: "What finishes are available for luxury membership cards?", a: "We offer frosted velvet, deep matte black, mirror gloss, and metallic gold/silver substrates with optional holographic hot-stamped foil accents." },
  { q: "Can membership cards connect to our billing and POS software?", a: "Yes. We encode standard 1D/2D barcodes, magnetic stripes (HiCo/LoCo), and contactless RFID/NFC chips compatible with leading POS and gym management systems." },
  { q: "Can we print cards in ongoing batches as new members sign up?", a: "Yes. With IDGen Studio, your staff can submit single new member applications anytime and receive replacement/new cards at your locked-in contracted price." },
  { q: "What is the expected lifespan of IDGen PVC membership cards?", a: "Our 30-mil virgin PVC cards are rated for 5+ years of daily wallet friction without edge peeling or photo fading." },
];

export default function MembershipCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Membership Card Printing",
          description: "Custom membership card printing for clubs, associations, gyms, hotels and organizations.",
          path: "/membership-card-printing/",
        })}
      />
      
      <PageHero
        eyebrow="VIP & Loyalty Solutions"
        icon={Award}
        title="Custom PVC Membership Cards & Loyalty Credentials"
        lede="Deliver an exceptional member experience with premium 30-mil PVC membership cards, smart RFID access badges, and luxury matte finishes engineered for clubs, gyms, and professional associations."
        stats={[
          { label: "Material", value: "30-Mil Solid PVC" },
          { label: "Finishes", value: "Matte, Gloss, Metallic" },
          { label: "Encoding", value: "RFID, QR & Barcode" },
          { label: "Batch Reorders", value: "Zero Minimum" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-amber-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Membership Sample Card */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/PVC Cards Samples/Sample 3.jpg"
                  alt="Gold Tier VIP Membership Card Specimen"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Gold VIP Specimen</span>
                </div>
              </div>

              {/* Overlapping Acrylic Badge Sample */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Acrylic Badges Samples/Sample 7.jpg"
                  alt="Laser Cut Acrylic Membership Badge"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Club Badge Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/IMG20250317104207.jpg"
                  alt="Custom Printed Club Badges"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Membership Card Printing", path: "/membership-card-printing/" }]} />

        {/* Real Membership Cards Showcase */}
        <div className="mt-8">
          <SectionHead
            eyebrow="Membership Showcase"
            title="Premium Finishes & Smart Credentials for Prestige Brands"
            lede="Designed to elevate member perception while providing rugged durability for daily wallet friction and turnstile taps."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {memberDeliveries.map((m) => (
              <div key={m.title} className="group overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm transition hover:shadow-xl hover:border-accent/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 img-shine">
                  <Image
                    src={m.img}
                    alt={m.title}
                    fill
                    className="img-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-bold text-slate-200 backdrop-blur-md">
                    {m.sector}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-sm">{m.title}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-500 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Real Sample</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organization Types */}
        <div className="mt-20">
          <SectionHead eyebrow="Sectors & Clubs" title="Tailored Membership Solutions for Every Community" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {orgTypes.map((o) => (
              <FeatureCard key={o.title} icon={o.icon} title={o.title} body={o.body} />
            ))}
          </div>
        </div>

        {/* Production Workflow */}
        <div className="mt-20">
          <SectionHead eyebrow="Ordering Pipeline" title="From Member Database to Personalized Cards" />
          <div className="mt-8">
            <WorkflowSteps steps={process} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About Membership Cards" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Ready to launch or upgrade your membership cards?"
            body="Contact our Guwahati production center for physical specimen kits, metallic foil samples, and custom price estimates."
            links={[
              { label: "Request Membership Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore RFID Smart Cards", href: "/rfid-card-printing/" },
              { label: "View Pricing Tiers", href: "/pricing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
