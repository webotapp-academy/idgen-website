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
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IllustratedCard } from "@/components/ui/IllustratedCard";
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
  { icon: School, title: "Schools", body: "Primary, secondary, senior secondary, private, public, residential and boarding schools." },
  { icon: BookOpen, title: "Colleges", body: "Undergraduate and postgraduate students, department-wise batches, new admissions and annual renewals." },
  { icon: GraduationCap, title: "Universities", body: "Undergraduate, postgraduate, research scholars, department-wise and campus-wide student batches." },
  { icon: Building2, title: "Other Institutions", body: "Coaching institutes, training institutes, professional and vocational institutions." },
];

const setups = [
  { title: "Card Only", body: "Student ID Card — for institutions that already have accessories." },
  { title: "Card + Holder", body: "Student ID Card + Holder — for protected card storage." },
  { title: "Wearable Student ID", body: "Student ID Card + Holder + Hook + Custom Printed Lanyard — for students who need to wear their ID card." },
  { title: "Complete Student ID Setup", body: "Student ID Card + Ultrasonic Sealing + Holder + Hook + Custom Printed Lanyard." },
];

const process = [
  { title: "Student Data", body: "The institution provides the required student information." },
  { title: "Photograph Collection", body: "Student photographs are provided according to the agreed data format." },
  { title: "Data Preparation", body: "The information is organized for personalization and production." },
  { title: "Design", body: "The student card design is prepared using the approved institution requirements." },
  { title: "Preview", body: "The institution can review the personalized card information where applicable." },
  { title: "Approval", body: "The approved design and data are confirmed before production." },
  { title: "Printing", body: "The student cards move into production." },
  { title: "Quality Check", body: "Finished cards are checked against the applicable requirements." },
  { title: "Accessories", body: "Where required, cards can be combined with Holder + Hook + Custom Printed Lanyard." },
  { title: "Dispatch", body: "The completed order is packaged and dispatched according to the applicable order timeline." },
];

const whyChoose = [
  { icon: GraduationCap, title: "Student-Focused Workflow", body: "Designed around student data, photographs and personalized card production." },
  { icon: Users, title: "Bulk Requirements", body: "Suitable for large student batches and institutional requirements." },
  { icon: Eye, title: "Preview Before Production", body: "Where applicable, student information can be reviewed before production." },
  { icon: ShieldCheck, title: "Complete Identification", body: "Cards can be combined with holders, hooks and custom printed lanyards." },
  { icon: Sparkles, title: "Digital Data Workflow", body: "IDGen Studio can support student data and photograph collection." },
  { icon: Layers, title: "One Identification Partner", body: "Institutions can coordinate cards and required accessories through one identity-focused supplier." },
];

const priorityCities = ["Guwahati", "Jorhat", "Dibrugarh", "Silchar", "Tezpur", "Nagaon", "Tinsukia", "Sivasagar", "Golaghat", "Bongaigaon", "Diphu", "North Lakhimpur", "Barpeta"];

const faqs: Faq[] = [
  { q: "What is a student ID card?", a: "A student ID card is a personalized identification card issued by an educational institution to identify a student and provide required institutional information." },
  { q: "Can IDGen print student ID cards for schools?", a: "Yes. IDGen provides customized student ID card printing for schools and other educational institutions." },
  { q: "Can colleges order student ID cards?", a: "Yes. The same student ID card printing service can be used for college students, including department-wise and batch-wise requirements." },
  { q: "Does IDGen print university student ID cards?", a: "Yes. University student identification projects can include undergraduate, postgraduate and research-student cards according to the institution's requirements." },
  { q: "Can student ID cards include photographs?", a: "Yes. Student photographs can be personalized onto the cards according to the supplied data and approved design." },
  { q: "Can student ID cards include QR codes?", a: "Yes. QR codes or barcodes can be incorporated when required and when the required data is provided." },
  { q: "Can student ID cards include lanyards?", a: "Yes. Student cards can be supplied with suitable holders, hooks and custom printed lanyards." },
  { q: "Can I order student ID cards in bulk?", a: "Yes. Bulk student ID card projects can be handled according to quantity, data readiness, specifications and production requirements." },
  { q: "Can IDGen collect student data?", a: "Yes. IDGen Studio is designed to support digital information and photograph collection for suitable projects." },
  { q: "Can I see the card before printing?", a: "Where applicable, the workflow can include a preview and approval stage before production." },
  { q: "Can student ID cards be replaced?", a: "Yes. Replacement cards can be produced according to the supplied student information and approved requirements." },
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
        eyebrow="Service"
        icon={GraduationCap}
        title="Student ID Cards for Schools, Colleges, Universities & Educational Institutions"
        lede="IDGen provides custom student ID card printing for educational institutions that need personalized identification cards for students — from a small class batch to a large institution-wide requirement."
        visual={
          <IllustratedCard
            org="YOUR INSTITUTION"
            subOrg="Student Identification"
            holderName="Student Name"
            holderRole="Class / Course"
            holderId="ROLL: XXXX"
          />
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Student ID Card Printing", path: "/student-id-card-printing/" }]} />

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            IDGen can manage the identification workflow from student data and photographs to personalized
            card production and final dispatch. Student ID cards can include student photograph, name,
            admission/enrollment number, roll number, class/course, section, department, academic session,
            date of birth, blood group, institution name and logo, QR code, barcode, contact information and
            other approved identification details — the exact information depends on the institution&apos;s
            requirements.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request Student ID Card Quote
          </Link>
          <Link href="/pricing/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            View ID Card Pricing
          </Link>
        </div>

        {/* Institution types */}
        <div className="mt-16">
          <SectionHead eyebrow="Every Institution" title="Student ID Card Printing for Every Type of Institution" lede="The same student-ID workflow can be adapted to different educational environments — one service, no duplicate pages for school, college and university." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {institutionTypes.map((t) => (
              <FeatureCard key={t.title} icon={t.icon} title={t.title} body={t.body} />
            ))}
          </div>
        </div>

        {/* Card layout */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">Front</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Institution logo, institution name, student photograph, student name, class/course, roll
              number / ID number.
            </p>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">Back</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Admission number, academic session, date of birth (if required), emergency/contact information
              (if required), QR code/barcode (if required), institution address.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted">The final layout can be customized according to the institution&apos;s approved design.</p>

        {/* Setups */}
        <div className="mt-16">
          <SectionHead eyebrow="Configuration" title="Student ID Card + Complete Identification Set" lede="An institution may need more than just the PVC card — the appropriate configuration depends on the institution's card and attachment requirements." />
          <div className="mt-6">
            <WorkflowSteps steps={setups} />
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-accent">
            <Link href="/id-card-holders/" className="hover:underline">Explore Complete ID Card Setup →</Link>
            <Link href="/custom-printed-lanyard-printing/" className="hover:underline">Explore Custom Printed Lanyard Printing →</Link>
          </div>
          <p className="mt-4 text-sm text-muted">
            A typical student identification setup: <span className="font-semibold text-foreground">Student ID Card → Holder → Hook → Custom Printed Lanyard</span>, with institution logo, name, branding, colours and academic session on the lanyard itself.
          </p>
        </div>

        {/* Process */}
        <div className="mt-16">
          <SectionHead eyebrow="Process" title="Student ID Card Printing Process" lede="A large student-ID project involves much more than printing names onto cards." />
          <div className="mt-6">
            <WorkflowSteps steps={process} />
          </div>
        </div>

        {/* Data collection */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Student ID Card Data Collection</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            For institutions with hundreds or thousands of students, collecting photographs and information
            can become one of the most time-consuming parts of the project. IDGen Studio helps organize
            student registration, data collection, photograph, preview, approval and printing — connecting
            student information with the final personalized ID card.
          </p>
          <Link href="/idgen-studio/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
            Explore IDGen Studio →
          </Link>
        </div>

        {/* QR / barcode */}
        <div className="mt-16 flex items-start gap-3 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <QrCode className="mt-1 h-5 w-5 shrink-0 text-accent" />
          <div>
            <h2 className="text-lg font-bold text-foreground">Student ID Cards With QR Code or Barcode</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              Institutions may choose to include a QR code or barcode on student cards for identification,
              record lookup, library systems, attendance systems, verification workflows or internal
              institutional systems — generated according to the institution&apos;s required data or system
              specifications. For RFID requirements, use the dedicated RFID service rather than treating RFID
              as a standard printed-card feature.
            </p>
            <Link href="/rfid-card-printing/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
              Explore RFID Card Printing →
            </Link>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-16 flex items-start gap-3 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
          <div>
            <h2 className="text-lg font-bold text-foreground">Student ID Card Printing in Assam & Northeast India</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              IDGen is based in Guwahati, Assam and serves educational organizations across Assam and the
              wider Northeast India market, including institutions in:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {priorityCities.map((c) => (
                <span key={c} className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground">{c}</span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-accent">
              <Link href="/service-areas/assam/" className="hover:underline">Student ID Card Printing in Assam →</Link>
              <Link href="/service-areas/assam/guwahati/" className="hover:underline">Student ID Card Printing in Guwahati →</Link>
            </div>
          </div>
        </div>

        {/* Why choose */}
        <div className="mt-16">
          <SectionHead eyebrow="Why IDGen" title="Why Choose IDGen for Student ID Cards?" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} body={w.body} />
            ))}
          </div>
          <Link href="/why-idgen/" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
            Why Choose IDGen →
          </Link>
        </div>

        {/* Who can order */}
        <div className="mt-16 rounded-2xl border border-dashed border-surface-border bg-surface p-6">
          <h2 className="text-lg font-bold text-foreground">Who Can Order Student ID Cards?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Schools, colleges, universities, coaching institutes, training institutes, vocational institutes,
            professional institutes, educational organizations, hostels and residential institutions, and
            other student-based organizations.
          </p>
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
            title="Start your student ID card project"
            body="Send us your approximate quantity, institution type, existing design (if available), student data format and required accessories — IDGen can help determine the appropriate production configuration."
            links={[
              { label: "Request Student ID Card Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "Contact IDGen", href: "/contact-us/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
