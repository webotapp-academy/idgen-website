import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Send, MapPin, Clock, MessageSquare, ShieldCheck, ArrowRight, Building2, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema-org";
import { SITE } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact IDGen | Guwahati Manufacturing Facility & Sales Desk",
  description: "Get in touch with IDGen's Guwahati direct manufacturing facility for bulk ID card printing, custom lanyards, RFID credentials, and institutional specimen kits.",
  path: "/contact-us/",
});

export default function ContactUsPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema({ areaServed: SITE.regionalFocus })} />
      
      <PageHero
        eyebrow="Direct Factory Communications"
        icon={Send}
        title="Get in Touch with IDGen Guwahati"
        lede="Connect with our identity engineering desk, request factory visit appointments, or order complimentary physical specimen kits for your institutional procurement committee."
        stats={[
          { label: "Factory Hub", value: "Guwahati, Assam" },
          { label: "Response SLA", value: "< 2 Hours" },
          { label: "WhatsApp Support", value: "Instant Desk" },
          { label: "Dispatch", value: "All 8 NE States" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Factory Production Photo */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/IMG20250321153934.jpg"
                  alt="IDGen Guwahati Production Facility"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Guwahati Facility</span>
                </div>
              </div>

              {/* Overlapping Card Specimen */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/Sample 1.jpeg"
                  alt="Complete ID Card and Lanyard Specimen Package"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Machinery Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/IMG20250321154119.jpg"
                  alt="Retransfer Machine Assembly"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact-us/" }]} />

        {/* Contact Channels Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Phone / Hotline */}
          <div className="group rounded-3xl border border-surface-border bg-surface p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-bold text-foreground text-lg">Direct Production Hotline</h3>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              Speak directly with an identity specialist regarding pricing, specs, and delivery timelines.
            </p>
            {SITE.phone && (
              <a
                href={`tel:${SITE.phone}`}
                className="mt-4 inline-flex items-center gap-2 font-mono text-sm font-bold text-accent hover:underline"
              >
                <span>{SITE.phone}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* WhatsApp Support Desk */}
          <div className="group rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-6 shadow-sm transition hover:border-emerald-500/40 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-bold text-foreground text-lg">Instant WhatsApp Desk</h3>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              Send logos, request quick estimates, and receive instant 3D design mockups via WhatsApp.
            </p>
            {SITE.whatsapp && (
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:underline"
              >
                <span>Start WhatsApp Chat</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Email Support */}
          <div className="group rounded-3xl border border-surface-border bg-surface p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-bold text-foreground text-lg">Official Enquiries</h3>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              For formal purchase orders, institutional tender notices, and enterprise RFPs.
            </p>
            {SITE.email && (
              <a
                href={`mailto:${SITE.email}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
              >
                <span>{SITE.email}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>

        </div>

        {/* Factory Location & Visit Info */}
        <div className="mt-12 rounded-3xl border border-surface-border bg-gradient-to-br from-surface to-background p-8 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase">
                <Building2 className="h-4 w-4" />
                <span>Central Manufacturing Facility</span>
              </span>
              <h2 className="text-2xl font-black text-foreground sm:text-3xl">
                Guwahati Industrial Production Hub
              </h2>
              <p className="text-sm text-muted leading-relaxed max-w-2xl">
                Our cleanroom manufacturing facility operates automated thermal retransfer printing presses, continuous dye-sublimation lines, and ultrasonic acoustic welding machinery.
              </p>
              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-foreground">
                <div className="flex items-start gap-2 max-w-lg">
                  <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{SITE.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>Mon – Sat: 9:30 AM – 7:00 PM</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-slate-950 shadow transition hover:bg-accent-hover hover:text-white"
              >
                <span>Request Itemized Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/service-areas/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                <span>View Northeast Delivery Network</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need an immediate quotation for an upcoming batch?"
            body="Submit your card requirements online for an official factory estimate within 2 hours."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "View Pricing Tiers", href: "/pricing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
