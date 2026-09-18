import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Newspaper,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Boxes,
  GraduationCap,
  Layers,
  Radio,
  Clock,
  PhoneCall,
  MessageSquare,
  Flame,
  Award,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { getAllDynamicBlogPosts, getDynamicFeaturedBlogPost } from "@/lib/dynamic-blogs";
import { BlogsExplorer } from "@/components/resources/blogs/BlogsExplorer";

/* ─────────────────────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────────────────────── */
export const metadata = pageMetadata({
  title: "Blogs & Technical Insights | IDGen Credential Engineering",
  description:
    "In-depth teardowns, RFID contactless comparisons, ultrasonic lanyard welding engineering, and institutional card holder guides from the IDGen Guwahati cleanroom.",
  path: "/resources/blogs/",
});

export default function BlogsPage() {
  const posts = getAllDynamicBlogPosts();
  const featuredPost = getDynamicFeaturedBlogPost();

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "IDGen Credential Engineering & Identification Blogs",
    description:
      "Technical blogs, material comparisons, ultrasonic lanyard welding guides, and RFID access insights by IDGen.",
    url: "https://idgen.in/resources/blogs/",
    hasPart: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      url: `https://idgen.in/resources/blogs/${p.slug}/`,
      datePublished: p.publishedDate,
      author: {
        "@type": "Person",
        name: p.author.name,
      },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLdData} />

      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM ATMOSPHERIC HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-12 lg:pt-12 lg:pb-16 transition-colors">
        {/* Ambient Backlight Lighting */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/15 dark:bg-cyan-500/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-[#009fe3]/15 dark:bg-[#009fe3]/20 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #009fe3 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Resources", path: "/resources/" },
              { name: "Blogs & Technical Insights", path: "/resources/blogs/" },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-cyan-800 dark:text-cyan-300 mb-4 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                <span>Cleanroom Technical Publications</span>
                <span className="text-cyan-400 dark:text-cyan-600">•</span>
                <span className="font-semibold text-slate-600 dark:text-cyan-200">Guwahati Factory</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Credential Engineering, Materials &amp; Smart Access{" "}
                <span className="bg-gradient-to-r from-[#009fe3] via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
                Direct factory perspectives on 30-mil virgin PVC security, high-frequency ultrasonic
                lanyard welding, 13.56 MHz Mifare protocols, and automated campus photo workflows.
              </p>

              {/* Metrics / Guarantee Row */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 p-3">
                  <div className="text-xl sm:text-2xl font-black text-[#009fe3]">
                    {posts.length} Guides
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    In-Depth Teardowns
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 p-3">
                  <div className="text-xl sm:text-2xl font-black text-emerald-500">100%</div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    Technical Benchmarks
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 p-3">
                  <div className="text-xl sm:text-2xl font-black text-cyan-400">CR80</div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    ISO Calibrated PVC
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 p-3">
                  <div className="text-xl sm:text-2xl font-black text-amber-500">20 kHz</div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    Acoustic Lanyard Weld
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Hero Specimen Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                {/* Floating Card Specimen 1 */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-900 shadow-2xl shadow-cyan-500/10 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/ID Card Full Set Samples/Sample 1.jpeg"
                      alt="IDGen High Precision Identification Set"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-full bg-[#009fe3] text-white px-2.5 py-0.5 text-[10px] font-black uppercase">
                        Factory Reference
                      </span>
                      <span className="text-[11px] font-bold text-cyan-300 backdrop-blur-md bg-slate-950/70 px-2 py-0.5 rounded-md border border-cyan-400/30">
                        30-Mil Virgin PVC
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Card Specimen 2 (Overlap) */}
                <div className="absolute -bottom-6 -left-6 w-3/5 rounded-xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 hidden sm:block">
                  <div className="relative h-32 w-full">
                    <Image
                      src="/images/Lanyard with Hook Samples/Sample 1.jpeg"
                      alt="Ultrasonic Sealed Satin Lanyard"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2">
                      <span className="text-[9px] font-bold text-white bg-slate-950/80 px-1.5 py-0.5 rounded border border-white/20">
                        Ultrasonic Seam
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN BLOG EXPLORER & CATALOG (Interactive Search + Filter)
      ───────────────────────────────────────────────────────────── */}
      <Container className="py-12 sm:py-16">
        <BlogsExplorer posts={posts} featuredPost={featuredPost} />

        {/* ─────────────────────────────────────────────────────────────
            3. FACTORY SAMPLE KIT & TECHNICAL ASSISTANCE CTA
        ───────────────────────────────────────────────────────────── */}
        <div className="mt-16">
          <CtaBand
            title="Need physical credential samples for institutional evaluation?"
            body="We dispatch curated sample kits containing 30-mil PVC cards, ultrasonic satin lanyards, and polycarbonate V-1/V-2 holders across Assam and the Northeast within 24 hours."
            links={[
              { label: "Request Free Sample Kit", href: "/request-a-quote/", primary: true },
              { label: "Explore Wholesale Pricing", href: "/pricing/" },
              { label: "Talk to Production Desk", href: "https://wa.me/919207012084" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
