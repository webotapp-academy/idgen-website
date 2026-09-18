import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ShieldCheck,
  Tag,
  BookOpen,
  Layers,
  Flame,
  Sliders,
  Radio,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import {
  getAllDynamicBlogPosts,
  getDynamicBlogPost,
  getDynamicRelatedBlogPosts,
} from "@/lib/dynamic-blogs";
import type { BlogPost } from "@/data/blogs";
import { BlogArticleInteractive } from "@/components/resources/blogs/BlogArticleInteractive";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const posts = getAllDynamicBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getDynamicBlogPost(slug);
  if (!post) {
    return pageMetadata({
      title: "Article Not Found | IDGen",
      description: "The requested identity technical guide could not be found.",
      path: "/resources/blogs/",
    });
  }

  return pageMetadata({
    title: `${post.title} | IDGen Technical Insights`,
    description: post.excerpt,
    path: `/resources/blogs/${post.slug}/`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getDynamicBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getDynamicRelatedBlogPosts(post.relatedSlugs);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://idgen.in/resources/blogs/${post.slug}/`,
    image: `https://idgen.in${post.featuredImage}`,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "IDGen Identity Technologies",
      logo: {
        "@type": "ImageObject",
        url: "https://idgen.in/images/iDGen%20Primary%20logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://idgen.in/resources/blogs/${post.slug}/`,
    },
  };

  return (
    <>
      <JsonLd data={jsonLdData} />

      {/* ── 1. ARTICLE HERO HEADER ── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-10 lg:pt-12 lg:pb-14 transition-colors">
        {/* Ambient Backlight Glows */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/15 dark:bg-cyan-500/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-[#009fe3]/15 dark:bg-[#009fe3]/20 blur-3xl pointer-events-none" />

        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Resources", path: "/resources/" },
              { name: "Blogs & Insights", path: "/resources/blogs/" },
              { name: post.title, path: `/resources/blogs/${post.slug}/` },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            {/* Category & Read Time Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/10 text-[#009fe3] dark:text-cyan-300 border border-cyan-500/30 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="h-3.5 w-3.5" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <Clock className="h-3.5 w-3.5 text-cyan-500" />
                {post.readTime}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <Calendar className="h-3.5 w-3.5 text-cyan-500" />
                {post.formattedDate}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              {post.title}
            </h1>

            {/* Subtitle / Synopsis */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {post.subtitle}
            </p>

            {/* Author Byline Box */}
            <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-[#009fe3] to-cyan-400 p-[2px] flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-sm">
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <Link
                href="/resources/blogs/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to All Blogs</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. FEATURED IMAGE SPOTLIGHT ── */}
      <Container className="pt-8">
        <div className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-900 shadow-2xl">
          <Image
            src={post.featuredImage}
            alt={post.alt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-200 backdrop-blur-md bg-slate-950/60 px-3 py-1.5 rounded-xl border border-white/10">
              IDGen Cleanroom Technical Reference • {post.tags[0]}
            </span>
          </div>
        </div>
      </Container>

      {/* ── 3. MAIN ARTICLE LAYOUT (CONTENT + STICKY SIDEBAR) ── */}
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Article Body (Col 8) */}
          <main className="lg:col-span-8 space-y-10">
            {/* Lead Paragraph */}
            <div className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed border-l-4 border-[#009fe3] pl-5 sm:pl-6 italic">
              {post.content.lead}
            </div>

            {/* Key Takeaways Card */}
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-[#0a1628] to-slate-950 p-6 sm:p-8 text-white shadow-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-3 py-1 text-xs font-black uppercase tracking-wider mb-4">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Executive Summary &amp; Takeaways</span>
              </div>
              <ul className="space-y-3">
                {post.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections Loop */}
            <div className="space-y-12 pt-4">
              {post.content.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 space-y-5"
                >
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {section.heading}
                  </h2>

                  <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {section.body.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* Optional Tip / Alert Box */}
                  {section.tipBox && (
                    <div className="rounded-xl border border-cyan-500/30 bg-cyan-50/50 dark:bg-cyan-950/30 p-5 my-4">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 mb-1.5">
                        <Lightbulb className="h-4 w-4" />
                        <span>{section.tipBox.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {section.tipBox.text}
                      </p>
                    </div>
                  )}

                  {/* Optional Specs Table */}
                  {section.specsTable && (
                    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 my-4 shadow-sm">
                      <div className="bg-slate-50 dark:bg-slate-800/80 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Technical Specifications Reference
                      </div>
                      <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {section.specsTable.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="grid grid-cols-2 p-3 text-xs sm:text-sm hover:bg-slate-50/60 dark:hover:bg-slate-850 transition"
                          >
                            <span className="font-semibold text-slate-500 dark:text-slate-400">
                              {spec.label}
                            </span>
                            <span className="font-bold text-slate-900 dark:text-white">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Tags Row */}
            <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Tag className="h-3.5 w-3.5 text-[#009fe3]" />
                <span>Related Topic Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Credentials Card */}
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-[#0c1424] p-6 sm:p-7 flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-sm">
              <div className="h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-tr from-[#009fe3] to-cyan-500 p-[2px] flex items-center justify-center">
                <div className="h-full w-full rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-xl">
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  Published By Credential Specialist
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {post.author.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {post.author.role}
                </div>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Oversees cleanroom variable-data production, ultrasonic lanyard fabrication, and
                  automated RFID access testing for schools, universities, and enterprise workforces
                  across Northeast India.
                </p>
              </div>
            </div>
          </main>

          {/* Sticky Interactive Sidebar (Col 4) */}
          <aside className="lg:col-span-4 lg:order-last">
            <BlogArticleInteractive
              tableOfContents={post.tableOfContents}
              title={post.title}
            />
          </aside>
        </div>

        {/* ── 4. RELATED TECHNICAL INSIGHTS ── */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200/90 dark:border-slate-800/90">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  Continue Reading
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-0.5">
                  Related Technical Insights
                </h3>
              </div>
              <Link
                href="/resources/blogs/"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>View All Articles</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <article
                  key={rel.slug}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0b1220] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={rel.featuredImage}
                        alt={rel.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="rounded-md bg-slate-950/80 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold text-cyan-300 border border-cyan-400/30">
                          {rel.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-[10px] text-slate-400 mb-1.5 flex items-center gap-1.5">
                        <Clock className="h-3 w-3 text-cyan-500" />
                        <span>{rel.readTime}</span>
                      </div>
                      <Link href={`/resources/blogs/${rel.slug}/`}>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {rel.title}
                        </h4>
                      </Link>
                      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <Link
                      href={`/resources/blogs/${rel.slug}/`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ── 5. CLOSING CALL TO ACTION ── */}
        <div className="mt-16">
          <CtaBand
            title="Have an upcoming campus or corporate identity requirement?"
            body="From student ID cards and ultrasonic lanyards to 13.56 MHz RFID turnstiles, get direct factory quotes and custom digital proofs tailored to your roster."
            links={[
              { label: "Request Free Sample Kit", href: "/request-a-quote/", primary: true },
              { label: "Check Wholesale Pricing", href: "/pricing/" },
              { label: "Northeast Delivery Matrix", href: "/contact-us/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
