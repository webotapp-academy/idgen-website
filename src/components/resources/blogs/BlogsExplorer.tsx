"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Sparkles,
  Clock,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Flame,
  Radio,
  Sliders,
  X,
  Layers,
  Send,
  Check,
} from "lucide-react";
import { BlogPost, BLOG_CATEGORIES } from "@/data/blogs";

interface BlogsExplorerProps {
  posts: BlogPost[];
  featuredPost: BlogPost;
}

const CATEGORY_ICONS: Record<string, typeof ShieldCheck> = {
  "All Articles": Layers,
  "Security & Smart Access": ShieldCheck,
  "Lanyard Engineering": Flame,
  "Hardware & Accessories": Sliders,
  "Digital Workflow": Sparkles,
  "Event Credentials": Radio,
};

export function BlogsExplorer({ posts, featuredPost }: BlogsExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  // Category counts calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Articles": posts.length };
    posts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, [posts]);

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Articles" || post.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase();
      const matchesTitle = post.title.toLowerCase().includes(query);
      const matchesSubtitle = post.subtitle.toLowerCase().includes(query);
      const matchesExcerpt = post.excerpt.toLowerCase().includes(query);
      const matchesTags = post.tags.some((tag) => tag.toLowerCase().includes(query));
      const matchesAuthor = post.author.name.toLowerCase().includes(query);

      return matchesTitle || matchesSubtitle || matchesExcerpt || matchesTags || matchesAuthor;
    });
  }, [posts, selectedCategory, searchQuery]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <div className="space-y-12">
      {/* ── 1. FEATURED ARTICLE SPOTLIGHT (When no active search query) ── */}
      {!searchQuery && selectedCategory === "All Articles" && (
        <div className="relative group">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-[#009fe3] to-sky-600 opacity-20 blur-xl group-hover:opacity-35 transition duration-500" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0c1424] shadow-2xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Banner */}
              <div className="relative lg:col-span-6 min-h-[300px] sm:min-h-[380px] lg:min-h-full overflow-hidden">
                <Image
                  src={featuredPost.featuredImage}
                  alt={featuredPost.alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0c1424]" />
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#009fe3] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    Featured Teardown
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-400/30 px-3 py-1 text-xs font-semibold">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-cyan-500" />
                      {featuredPost.readTime}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-cyan-500" />
                      {featuredPost.formattedDate}
                    </span>
                  </div>

                  <Link href={`/resources/blogs/${featuredPost.slug}/`}>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug hover:text-[#009fe3] dark:hover:text-cyan-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {featuredPost.subtitle}
                  </p>

                  {/* Key Takeaways Preview */}
                  <div className="mt-5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Key Industry Takeaways
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {featuredPost.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#009fe3] font-bold mt-0.5">•</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {featuredPost.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium rounded-md px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Meta & CTA */}
                <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-cyan-500 to-sky-600 p-[1.5px] flex items-center justify-center text-white font-black text-xs">
                      {featuredPost.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {featuredPost.author.name}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">
                        {featuredPost.author.role}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/resources/blogs/${featuredPost.slug}/`}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#009fe3] to-cyan-500 text-white px-5 py-2.5 text-xs font-bold shadow-md hover:shadow-cyan-500/25 hover:from-[#008bc7] hover:to-cyan-600 transition-all group/btn"
                  >
                    <span>Read Full Teardown</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. CONTROLS BAR: SEARCH & CATEGORY FILTER TABS ── */}
      <div className="space-y-4">
        {/* Search Input Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, RFID, holders, lanyards, cleanroom..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009fe3] focus:border-transparent transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 self-end sm:self-center">
            Showing <span className="text-[#009fe3] font-bold">{filteredPosts.length}</span>{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {BLOG_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            const Icon = CATEGORY_ICONS[category] || Layers;
            const count = categoryCounts[category] || 0;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? "bg-[#009fe3] text-white shadow-md shadow-cyan-500/20"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isSelected ? "text-white" : "text-cyan-500"}`} />
                <span>{category}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 3. BLOG POSTS GRID ── */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0b1220] shadow-md hover:shadow-xl dark:shadow-black/40 hover:-translate-y-1 hover:border-[#009fe3]/50 dark:hover:border-cyan-500/50 transition-all duration-300"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={post.featuredImage}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-lg bg-slate-950/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-cyan-300 border border-cyan-400/25">
                      {post.category}
                    </span>
                  </div>

                  {post.isFeatured && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 rounded-lg bg-[#009fe3] px-2 py-0.5 text-[10px] font-black uppercase text-white shadow-sm">
                        <Sparkles className="h-2.5 w-2.5" />
                        Top Guide
                      </span>
                    </div>
                  )}
                </div>

                {/* Article Header & Excerpt */}
                <div className="p-5 sm:p-6">
                  {/* Meta Bar */}
                  <div className="flex items-center gap-3 text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-2.5">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3 text-cyan-500" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-cyan-500" />
                      {post.formattedDate}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/resources/blogs/${post.slug}/`}>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 sm:p-6 pt-0 mt-auto">
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-cyan-600/20 text-cyan-400 border border-cyan-400/30 flex items-center justify-center font-bold text-[10px]">
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="text-[11px]">
                      <div className="font-bold text-slate-900 dark:text-white">
                        {post.author.name}
                      </div>
                      <div className="text-[9px] text-slate-400 truncate max-w-[120px]">
                        {post.author.role}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/resources/blogs/${post.slug}/`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-12 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            No articles match your search
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            We couldn&apos;t find any technical articles matching &ldquo;{searchQuery}&rdquo;. Try
            adjusting your keyword or reset filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Articles");
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#009fe3] text-white px-4 py-2 text-xs font-bold hover:bg-[#008bc7] transition"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* ── 4. TECHNICAL DIGEST / FACTORY SPEC NEWSLETTER ── */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-[#071324] to-slate-950 p-8 sm:p-10 shadow-2xl text-white">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="h-3 w-3" />
              Quarterly Credential Digest
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white">
              Get Cleanroom Spec Sheets &amp; Access Control Updates
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Join over 400+ school principals, university IT directors, and plant security managers
              across Northeast India. Receive deep dives on RFID anti-cloning, material longevity, and
              admission workflows.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your institutional email..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#009fe3] to-cyan-500 hover:from-[#008bc7] hover:to-cyan-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 transition whitespace-nowrap"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Subscribe</span>
                </button>
              </div>

              {isSubscribed && (
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-1.5 animate-fadeIn">
                  <Check className="h-3.5 w-3.5" />
                  <span>Thank you! You have been subscribed to IDGen technical updates.</span>
                </div>
              )}

              <p className="text-[11px] text-slate-400">
                🔒 Zero spam. Unsubscribe anytime. Sent strictly once a quarter.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
