import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Building2, Ticket, Radio, Layers, CheckCircle2, MapPin, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { CtaBand } from "@/components/ui/CtaBand";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ID Card Printing Case Studies & Delivered Projects | IDGen",
  description:
    "Explore genuine IDGen identification projects across Assam and Northeast India: student ID cards, corporate badges, university credentials, and custom satin lanyards.",
  path: "/case-studies/",
});

const realCaseStudies = [
  {
    title: "Don Bosco Hr. Sec. School",
    location: "Gojapara, Assam / Meghalaya Border",
    sector: "K-12 Education",
    year: "Academic Session",
    volume: "1,200+ Student IDs",
    img1: "/images/Order Deliver/Don Bosco Hr Sec School, gojapara 1.png",
    img2: "/images/Order Deliver/Don Bosco Hr Sec School, gojapara 2.png",
    challenge: "Managing student data collection across remote hill regions with strict session start deadlines.",
    solution: "Class-wise photo collection via IDGen Studio, 300 DPI thermal retransfer on 30-mil PVC cards, pre-assembled inside V-1 crystal holders with ultrasonic welded school lanyards.",
    deliverable: "Delivered in sequential roll-number boxes directly to the school administration within 48 hours."
  },
  {
    title: "CKB College Jorhat",
    location: "Jorhat, Assam",
    sector: "Higher Education & Degree College",
    year: "Annual Intake",
    volume: "2,500+ Undergraduate Credentials",
    img1: "/images/Order Deliver/CKB COLLAGE,JORHAT 1.png",
    img2: "/images/Order Deliver/CKB COLLAGE,JORHAT 2.png",
    challenge: "Department-wise student categorization (Arts, Science, Commerce) and library barcode integration.",
    solution: "High-contrast Code 128 library barcode generation, department color-coded header ribbons, and durable 20mm satin lanyards with chrome dog hooks.",
    deliverable: "100% optical scan pass rate at the college central library turnstiles."
  },
  {
    title: "DBS Itanagar Campus",
    location: "Itanagar, Arunachal Pradesh",
    sector: "Institutional School Network",
    year: "Annual Intake",
    volume: "1,800+ IDs",
    img1: "/images/Order Deliver/DBS ITANAGAR 1.png",
    img2: "/images/Order Deliver/DBS ITANAGAR 2.png",
    challenge: "Eliminating interstate transit delays and ensuring crisp photographic fidelity across primary and secondary sections.",
    solution: "Direct dispatch from Guwahati manufacturing hub with insured express logistics, delivering door-to-door in Itanagar in under 48 hours.",
    deliverable: "Zero defect rate with ready-to-wear packaged badge sets."
  },
  {
    title: "Jorhat Kendriya Vidyalaya",
    location: "Jorhat, Assam",
    sector: "Central School Board",
    year: "Annual Intake",
    volume: "1,400+ Student Cards",
    img1: "/images/Order Deliver/Jorhat kendra vidyalaya 1.png",
    img2: "/images/Order Deliver/Jorhat kendra vidyalaya 2.png",
    challenge: "Active students requiring tear-proof lanyard loops that withstand intense sports and daily school activity.",
    solution: "20 kHz acoustic ultrasonic molecular bonding replacing traditional staples, paired with heavy-duty drop-tested polycarbonate cases.",
    deliverable: "Over 18 kg pull resistance guaranteed for the full academic cycle."
  },
  {
    title: "Rayburn College",
    location: "Churachandpur, Manipur",
    sector: "University College",
    year: "Campus Intake",
    volume: "1,600+ Credentials",
    img1: "/images/Order Deliver/RAYBURN COLLAGE,MANIPUR 1.png",
    img2: "/images/Order Deliver/RAYBURN COLLAGE,MANIPUR 2.jpeg",
    challenge: "Reliable credential production and express transit during regional logistical constraints.",
    solution: "Digital proof approvals synchronized over cloud console and dedicated bulk air express dispatch.",
    deliverable: "Successfully delivered in pre-sorted academic batches."
  },
  {
    title: "Government of Assam — Nagaon",
    location: "Nagaon, Assam",
    sector: "Public Administration",
    year: "Official Roster",
    volume: "Official Staff Badges",
    img1: "/images/Order Deliver/Government of assam,nagoan 1.jpeg",
    img2: "/images/Order Deliver/Government of assam,nagoan 2.jpeg",
    challenge: "High-security departmental credentials requiring tamper-evident printing and confidentiality protocols.",
    solution: "Guilloche security backgrounds, QR validation codes, and NDA-level encrypted record handling.",
    deliverable: "Flawless government identity credentials with anti-scratch overlaminate."
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      
      <PageHero
        eyebrow="Proven Deliveries"
        icon={Briefcase}
        title="Real Institutional Deliveries & Case Studies"
        lede="Explore genuine identity projects manufactured at our Guwahati facility — from large-scale school intakes to university campuses and government organizations across Assam and Northeast India."
        stats={[
          { label: "Documented Deliveries", value: "6 Featured Projects" },
          { label: "Sectors Served", value: "Education, Government" },
          { label: "States Served", value: "All 8 NE States" },
          { label: "Evidence Standard", value: "Real Photos Only" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Real Case Study Image */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Order Deliver/Don Bosco Hr Sec School, gojapara 1.png"
                  alt="Don Bosco Delivered ID Card Batch"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Delivered Order</span>
                </div>
              </div>

              {/* Overlapping College Card */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Order Deliver/CKB COLLAGE,JORHAT 1.png"
                  alt="CKB College ID Card Batch"
                  fill
                  className="object-cover"
                />
              </div>

              {/* KV Delivery Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Order Deliver/Jorhat kendra vidyalaya 1.png"
                  alt="Kendriya Vidyalaya ID Card Batch"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies/" }]} />

        {/* Real Case Studies Grid */}
        <div className="mt-8 space-y-12">
          {realCaseStudies.map((cs, idx) => (
            <div
              key={cs.title}
              className="overflow-hidden rounded-3xl border border-surface-border bg-surface p-6 sm:p-8 lg:p-10 shadow-sm transition hover:shadow-xl hover:border-accent/40"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                
                {/* Images Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950 img-shine border border-surface-border">
                    <Image
                      src={cs.img1}
                      alt={`${cs.title} ID Card Batch`}
                      fill
                      className="img-zoom object-cover"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-slate-900/85 px-3 py-1 text-[11px] font-bold text-slate-200 backdrop-blur-md">
                      {cs.sector}
                    </div>
                  </div>
                  
                  {cs.img2 && (
                    <div className="relative aspect-[16/6] w-full overflow-hidden rounded-xl bg-slate-950 border border-surface-border opacity-90 hover:opacity-100 transition">
                      <Image
                        src={cs.img2}
                        alt={`${cs.title} Packaging`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-accent">
                      <MapPin className="h-4 w-4" />
                      <span>{cs.location}</span>
                    </div>
                    <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-extrabold text-accent">
                      {cs.volume}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-foreground sm:text-3xl">
                    {cs.title}
                  </h2>

                  <div className="grid gap-3 pt-2">
                    <div className="rounded-xl border border-surface-border bg-background p-3.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-muted">The Requirement</p>
                      <p className="mt-1 text-xs text-foreground leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div className="rounded-xl border border-surface-border bg-background p-3.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-accent">IDGen Manufacturing Solution</p>
                      <p className="mt-1 text-xs text-foreground leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-500">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>{cs.deliverable}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Have a similar institutional requirement?"
            body="Connect with our Guwahati production center to receive genuine specimen kits and a tailored proposal."
            links={[
              { label: "Request a Proposal", href: "/request-a-quote/", primary: true },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "Browse Services", href: "/services/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
