import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  School,
  Building2,
  BookOpen,
  Layers,
  Eye,
  Sparkles,
  ShieldCheck,
  Users,
  MapPin,
  QrCode,
  CheckCircle2,
  ArrowRight,
  Camera,
  FileSpreadsheet
} from "lucide-react";
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
  title: "Student ID Card Printing | School, College & University ID Cards | IDGen",
  description:
    "Custom student ID card printing for schools, colleges, universities and educational institutions. Bulk PVC student cards with photo, QR code, lanyard, holder and complete ID solutions.",
  path: "/student-id-card-printing/",
});

const institutionTypes = [
  { icon: School, title: "K-12 & High Schools", body: "Primary, secondary, and senior secondary schools with class/section sorting, parent contacts, and transport route codes." },
  { icon: BookOpen, title: "Colleges & Institutes", body: "Undergraduate and postgraduate department-wise credentials, annual intake batches, and library barcodes." },
  { icon: GraduationCap, title: "Universities & Campus", body: "Dual RFID turnstile access, hostel identification, multi-year smart credentials for thousands of students." },
  { icon: Building2, title: "Vocational & Academies", body: "Coaching institutes, training centers, and skill academies needing swift 48-hour card dispatch." },
];

const setups = [
  { title: "Standard PVC Card", body: "30-Mil CR80 edge-to-edge full color print with protective overlaminate." },
  { title: "Protected Card + Acrylic Holder", body: "Card housed inside vertical/horizontal crystal clear drop-proof casing." },
  { title: "Wearable ID + Custom Lanyard", body: "Full kit: Card + Holder + Heavy-duty Swivel Hook + 20mm Custom Sublimated Satin Lanyard." },
  { title: "Ultrasonic Sealed Complete Setup", body: "Acoustically welded tear-proof lanyard loop + Holder + Hook + Printed Card for 100% security." },
];

const schoolDeliveries = [
  { name: "Don Bosco Hr Sec School", location: "Assam / Meghalaya", img: "/images/Order Deliver/Don Bosco Hr Sec School, gojapara 1.png" },
  { name: "Ardalivia English School", location: "Northeast Region", img: "/images/Order Deliver/Ardalivia English School 1.png" },
  { name: "Jorhat Kendriya Vidyalaya", location: "Jorhat, Assam", img: "/images/Order Deliver/Jorhat kendra vidyalaya 1.png" },
  { name: "Siang Lamin Memorial School", location: "Arunachal / Assam", img: "/images/Order Deliver/Siang Lamin Pohthmi Memorial School,Lamin 1.png" },
  { name: "Garlan English School", location: "Haflong, Assam", img: "/images/Order Deliver/Garlan English School,Haflong1.jpeg" },
  { name: "Klimso English High School", location: "Diphu, Karbi Anglong", img: "/images/Order Deliver/Klimso English High School,Diphu1.jpeg" },
];

const process = [
  { title: "Excel Roster / Data Sync", body: "Upload student admission logs, blood groups, DOB, and parent contacts via Excel or IDGen Studio." },
  { title: "Automated Photo Cropping", body: "System automatically detects faces, normalizes lighting, and centers portraits to 300 DPI specifications." },
  { title: "Digital Class Proof Review", body: "School administration reviews interactive PDF proof sheets arranged by class and roll number." },
  { title: "Precision Retransfer Printing", body: "Cards printed on solid virgin PVC cores with vivid color reproduction and anti-scratch coating." },
  { title: "Hardware Assembly & Ultrasonic Weld", body: "Cards placed in holders, attached to custom school lanyards, and sorted chronologically." },
  { title: "Direct School Campus Dispatch", body: "Packaged class-wise in heavy-duty protective boxes for instant, effortless distribution to students." },
];

const whyChoose = [
  { icon: GraduationCap, title: "Zero Data-Entry Burden", body: "IDGen Studio lets parents or class teachers submit photos and info from mobile phones." },
  { icon: Users, title: "Class-Wise Sorting", body: "Every batch arrives chronologically organized by grade, section, and roll number for 5-minute distribution." },
  { icon: Eye, title: "Digital Proof Approval", body: "Inspect exact typography, logo colors, and student portraits before a single card goes to press." },
  { icon: ShieldCheck, title: "Complete Ready-to-Wear Sets", body: "No manual assembly needed — cards arrive pre-fitted into holders with lanyards attached." },
  { icon: Sparkles, title: "Replacement Card Program", body: "Zero minimum reorder requirement for mid-year transfers and lost cards at fixed contract rates." },
  { icon: Layers, title: "Guwahati Factory Direct", body: "Immediate dispatch across all 8 Northeast states without transit delays from distant hubs." },
];

const priorityCities = ["Guwahati", "Jorhat", "Dibrugarh", "Silchar", "Tezpur", "Nagaon", "Tinsukia", "Sivasagar", "Golaghat", "Bongaigaon", "Diphu", "North Lakhimpur", "Barpeta", "Itanagar", "Shillong", "Dimapur", "Aizawl", "Imphal", "Agartala"];

const faqs: Faq[] = [
  { q: "How do schools submit student photos and data?", a: "Schools can upload a single Excel roster and ZIP file of photos, or invite parents directly via IDGen Studio's secure mobile link for self-service photo capture." },
  { q: "Can student ID cards include QR codes and library barcodes?", a: "Yes. We encode standard Code 128 barcodes, QR codes containing student biometric IDs, and magnetic/RFID data compatible with campus LMS and library turnstiles." },
  { q: "What happens when a new student joins mid-session?", a: "Our Zero Minimum Reorder program allows schools to print 1 to 5 replacement cards for new admissions at the same contracted bulk price." },
  { q: "How are the cards packaged for distribution?", a: "Cards are boxed systematically by standard/grade and section, in exact roll-number sequence, so class teachers can hand them out immediately." },
];

export default function StudentIdCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Student ID Card Printing",
          description: "Custom student ID card printing for schools, colleges, universities and educational institutions.",
          path: "/student-id-card-printing/",
        })}
      />
      
      <PageHero
        eyebrow="Education Credential Specialist"
        icon={GraduationCap}
        title="Institutional Student ID Card Printing & Full Wearable Kits"
        lede="Complete ID card and custom lanyard solutions for schools, colleges, and universities across Assam and Northeast India. Class-sorted packaging, automated photo normalization, and rapid factory delivery."
        stats={[
          { label: "Annual Student IDs", value: "250,000+" },
          { label: "Card Core", value: "30-Mil Virgin PVC" },
          { label: "Packaging", value: "Class-Wise Sorted" },
          { label: "Turnaround", value: "48–72h Delivery" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Real School Delivery Photo */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/Customized Student ID Cards supplied to educational institutions in Guwahati with premium PVC quality and professional design..jpg"
                  alt="Customized Student ID Cards supplied to educational institutions in Guwahati"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Guwahati School Delivery</span>
                </div>
              </div>

              {/* Overlapping Sample Card */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Order Deliver/Don Bosco Hr Sec School, gojapara 1.png"
                  alt="Don Bosco Student Identity Card by IDGen"
                  fill
                  className="object-cover"
                />
              </div>

              {/* School Lanyard Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 1.jpeg"
                  alt="School Printed Lanyard and Holder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Student ID Card Printing", path: "/student-id-card-printing/" }]} />

        {/* Real School Deliveries Gallery */}
        <div className="mt-8">
          <SectionHead
            eyebrow="Proven Institutional Reach"
            title="Trusted by Leading Schools & Colleges Across Northeast India"
            lede="From Guwahati city schools to residential academies in Haflong, Diphu, and Itanagar, we manufacture high-durability credentials built for active students."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {schoolDeliveries.map((s) => (
              <div key={s.name} className="group overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm transition hover:shadow-xl hover:border-accent/40">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 img-shine">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    className="img-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-bold text-slate-200 backdrop-blur-md">
                    {s.location}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-base">{s.name}</h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-500 font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Complete ID Card & Lanyard Batch Delivered</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institution Types */}
        <div className="mt-20">
          <SectionHead eyebrow="Institutional Tiers" title="Tailored Programs for Every Educational Level" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {institutionTypes.map((t) => (
              <FeatureCard key={t.title} icon={t.icon} title={t.title} body={t.body} />
            ))}
          </div>
        </div>

        {/* 4 Package Setups */}
        <div className="mt-20 rounded-3xl border border-surface-border bg-surface p-8 sm:p-10">
          <SectionHead eyebrow="Package Configurations" title="Choose Your School's Credential Setup" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {setups.map((s, idx) => (
              <div key={s.title} className="rounded-2xl border border-surface-border bg-background p-5 hover:border-accent/30 transition">
                <span className="font-mono text-xs font-extrabold text-accent">OPTION {idx + 1}</span>
                <h3 className="mt-2 font-bold text-foreground text-sm">{s.title}</h3>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-20">
          <SectionHead eyebrow="Streamlined Process" title="Zero-Hassle Annual Student Intake Workflow" />
          <div className="mt-8">
            <WorkflowSteps steps={process} />
          </div>
        </div>

        {/* Why Choose IDGen */}
        <div className="mt-20">
          <SectionHead eyebrow="The IDGen Difference" title="Why School Administrators Prefer IDGen" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} body={w.body} />
            ))}
          </div>
        </div>

        {/* Regional Coverage Band */}
        <div className="mt-20 rounded-2xl border border-surface-border bg-background p-6">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase mb-3">
            <MapPin className="h-4 w-4" />
            <span>Direct Northeast Supply Hubs</span>
          </div>
          <p className="text-xs text-muted leading-relaxed">
            Fast, insured courier dispatch to all districts and educational centers: {priorityCities.join(" • ")}.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About School ID Cards" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Planning your school's new academic session ID cards?"
            body="Get in touch today to receive sample kits, card design proofs, and factory-direct institutional pricing."
            links={[
              { label: "Request School ID Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "Custom Printed Lanyards", href: "/custom-printed-lanyard-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
