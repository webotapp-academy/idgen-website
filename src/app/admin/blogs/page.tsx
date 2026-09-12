"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Newspaper,
  Sparkles,
  Plus,
  Search,
  CheckCircle2,
  Trash2,
  Edit3,
  ExternalLink,
  RotateCcw,
  Save,
  Star,
  StarOff,
  Eye,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Clock,
  Calendar,
  Layers,
  Flame,
  Sliders,
  Radio,
  X,
  FileText,
  ListPlus,
  Table,
  Check,
} from "lucide-react";
import type { BlogPost } from "@/data/blogs";
import { BLOG_CATEGORIES } from "@/data/blogs";

interface SectionForm {
  id: string;
  heading: string;
  bodyText: string;
  tipTitle: string;
  tipText: string;
  specs: { label: string; value: string }[];
}

interface BlogFormData {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  featuredImage: string;
  alt: string;
  isFeatured: boolean;
  tagsString: string;
  takeawaysString: string;
  lead: string;
  sections: SectionForm[];
}

const initialFormState: BlogFormData = {
  slug: "",
  title: "",
  subtitle: "",
  excerpt: "",
  category: "Security & Smart Access",
  readTime: "5 min read",
  publishedDate: new Date().toISOString().split("T")[0],
  authorName: "Pranab Jyoti Das",
  authorRole: "Head of Credential Engineering, IDGen",
  authorAvatar: "/images/idgen-hero-cards-mockup.png",
  featuredImage: "/images/PVC Cards Samples/Sample 1.jpg",
  alt: "",
  isFeatured: false,
  tagsString: "CR80 PVC, Campus Security, Access Control",
  takeawaysString: "Solid virgin PVC cards provide moisture-impermeable longevity with zero corner de-lamination.\nEncrypting contactless credentials shields identity against physical duplication.",
  lead: "",
  sections: [
    {
      id: "sec-1",
      heading: "1. Overview & Technical Specifications",
      bodyText: "Enter the primary analysis and technical explanation for this section.",
      tipTitle: "Cleanroom Tip",
      tipText: "Always ensure high-contrast vector assets prior to thermal retransfer print runs.",
      specs: [
        { label: "Standard Spec", value: "CR-80 (ISO 7810)" },
        { label: "Material", value: "100% Virgin Polycarbonate / PVC" },
      ],
    },
  ],
};

export default function AdminBlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [formData, setFormData] = useState<BlogFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/blogs");
      const data = await res.json();
      if (data.success && Array.isArray(data.posts)) {
        setPosts(data.posts);
      }
    } catch (e) {
      console.error("Failed to load blog posts:", e);
      showToast("Failed to fetch articles", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Filtered posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === "All Articles" || post.category === activeCategory;
      if (!matchesCategory) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.slug.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [posts, activeCategory, searchQuery]);

  // Open Add Modal
  const handleOpenAdd = () => {
    setEditingSlug(null);
    setFormData(initialFormState);
    setModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (post: BlogPost) => {
    setEditingSlug(post.slug);
    setFormData({
      slug: post.slug,
      title: post.title,
      subtitle: post.subtitle,
      excerpt: post.excerpt,
      category: post.category,
      readTime: post.readTime,
      publishedDate: post.publishedDate,
      authorName: post.author.name,
      authorRole: post.author.role,
      authorAvatar: post.author.avatar,
      featuredImage: post.featuredImage,
      alt: post.alt,
      isFeatured: Boolean(post.isFeatured),
      tagsString: post.tags.join(", "),
      takeawaysString: post.keyTakeaways.join("\n"),
      lead: post.content.lead,
      sections: post.content.sections.map((sec) => ({
        id: sec.id,
        heading: sec.heading,
        bodyText: sec.body.join("\n\n"),
        tipTitle: sec.tipBox?.title || "",
        tipText: sec.tipBox?.text || "",
        specs: sec.specsTable || [],
      })),
    });
    setModalOpen(true);
  };

  // Save / Submit
  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.slug.trim()) {
      showToast("Title and URL Slug are required", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload: Partial<BlogPost> & { slug: string; title: string } = {
        slug: formData.slug.trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-"),
        title: formData.title.trim(),
        subtitle: formData.subtitle.trim(),
        excerpt: formData.excerpt.trim() || formData.subtitle.trim(),
        category: formData.category as BlogPost["category"],
        readTime: formData.readTime.trim(),
        publishedDate: formData.publishedDate,
        author: {
          name: formData.authorName.trim(),
          role: formData.authorRole.trim(),
          avatar: formData.authorAvatar.trim(),
        },
        featuredImage: formData.featuredImage.trim(),
        alt: formData.alt.trim() || formData.title.trim(),
        isFeatured: formData.isFeatured,
        tags: formData.tagsString
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        keyTakeaways: formData.takeawaysString
          .split("\n")
          .map((t) => t.trim())
          .filter(Boolean),
        content: {
          lead: formData.lead.trim(),
          sections: formData.sections.map((s, idx) => ({
            id: s.id.trim() || `section-${idx + 1}`,
            heading: s.heading.trim(),
            body: s.bodyText.split("\n\n").map((b) => b.trim()).filter(Boolean),
            tipBox: s.tipTitle.trim() ? { title: s.tipTitle.trim(), text: s.tipText.trim() } : undefined,
            specsTable: s.specs.filter((sp) => sp.label.trim() && sp.value.trim()),
          })),
        },
      };

      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ post: payload }),
      });

      const result = await res.json();
      if (result.success) {
        showToast(editingSlug ? "Article updated successfully!" : "New article published!");
        setModalOpen(false);
        fetchPosts();
      } else {
        showToast(result.error || "Failed to save article", "error");
      }
    } catch (e) {
      console.error("Save error:", e);
      showToast("Network error saving article", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle Featured
  const handleToggleFeatured = async (post: BlogPost) => {
    try {
      const updated = { ...post, isFeatured: !post.isFeatured };
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ post: updated }),
      });
      const data = await res.json();
      if (data.success) {
        showToast(post.isFeatured ? "Article un-featured" : "Flagship article spotlight updated!");
        fetchPosts();
      }
    } catch {
      showToast("Failed to toggle spotlight", "error");
    }
  };

  // Delete Post
  const handleDeletePost = async (slug: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) return;

    try {
      const res = await fetch(`/api/admin/blogs?slug=${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        showToast("Article deleted successfully");
        fetchPosts();
      } else {
        showToast(data.error || "Failed to delete article", "error");
      }
    } catch {
      showToast("Network error deleting article", "error");
    }
  };

  // Reset to Defaults
  const handleResetDefaults = async () => {
    if (!confirm("Reset all articles to factory cleanroom defaults? Any custom added articles will be replaced."))
      return;

    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const data = await res.json();
      if (data.success) {
        showToast("Articles reset to cleanroom factory defaults");
        fetchPosts();
      }
    } catch {
      showToast("Failed to reset articles", "error");
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-2xl text-xs font-bold border transition-all animate-in slide-in-from-bottom-5 ${
            toastMessage.type === "success"
              ? "bg-emerald-950 text-emerald-300 border-emerald-700/60"
              : "bg-red-950 text-red-300 border-red-700/60"
          }`}
        >
          {toastMessage.type === "success" ? (
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-400" />
          )}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* ── 1. HEADER & METRICS ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-400 mb-1">
            <Newspaper className="h-4 w-4" />
            <span>Dynamic Content Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Institutional Blogs &amp; Technical Insights
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Manage live technical teardowns, RFID whitepapers, ultrasonic lanyard welding reports, and
            institutional guides shown on <code className="text-cyan-300 font-mono">/resources/blogs/</code>.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleResetDefaults}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 text-xs font-bold transition"
            title="Reset to default factory guides"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Defaults</span>
          </button>

          <Link
            href="/resources/blogs/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 text-xs font-bold transition"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>View Live Hub</span>
          </Link>

          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#009fe3] to-cyan-500 hover:from-[#008bc7] hover:to-cyan-600 text-white text-xs font-black shadow-lg shadow-cyan-500/20 transition"
          >
            <Plus className="h-4 w-4" />
            <span>New Article</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <div className="text-xs font-bold text-slate-400">Total Live Articles</div>
          <div className="text-2xl font-black text-white mt-1">{posts.length}</div>
          <div className="text-[11px] text-cyan-400 mt-0.5">Persisted in JSON database</div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <div className="text-xs font-bold text-slate-400">Flagship Spotlight</div>
          <div className="text-sm font-bold text-cyan-300 mt-1 truncate">
            {posts.find((p) => p.isFeatured)?.title || "None selected"}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">Hero Teardown Card</div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <div className="text-xs font-bold text-slate-400">Categories</div>
          <div className="text-2xl font-black text-white mt-1">5 Pillars</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Security, Lanyards, RFID...</div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <div className="text-xs font-bold text-slate-400">Cleanroom Protocol</div>
          <div className="text-2xl font-black text-emerald-400 mt-1">Active</div>
          <div className="text-[11px] text-emerald-400/80 mt-0.5">Instant live publishing</div>
        </div>
      </div>

      {/* ── 2. SEARCH & FILTER CONTROLS ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, tag, slug..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                activeCategory === cat
                  ? "bg-[#009fe3] text-white"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── 3. ARTICLES LIST ── */}
      {loading ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center text-xs text-slate-400">
          Loading dynamic article database...
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/30 p-12 text-center space-y-3">
          <div className="mx-auto h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
            <Newspaper className="h-5 w-5" />
          </div>
          <div className="text-sm font-bold text-white">No articles found</div>
          <p className="text-xs text-slate-400">No blog posts match your current search or category filter.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              className={`rounded-2xl border transition-all p-5 sm:p-6 ${
                post.isFeatured
                  ? "border-cyan-500/50 bg-gradient-to-r from-slate-900 via-[#0a1628] to-slate-900 shadow-xl shadow-cyan-500/5"
                  : "border-slate-800 bg-slate-900/80 hover:border-slate-700"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Article Info */}
                <div className="flex items-start gap-4">
                  {/* Thumbnail */}
                  <div className="relative h-20 w-28 shrink-0 rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
                    <Image
                      src={post.featuredImage}
                      alt={post.alt || post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      {post.isFeatured && (
                        <span className="inline-flex items-center gap-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 text-[10px] font-black uppercase">
                          <Sparkles className="h-3 w-3" />
                          Featured Spotlight
                        </span>
                      )}
                      <span className="rounded-md bg-slate-800 text-slate-300 px-2 py-0.5 text-[10px] font-bold">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Clock className="h-3 w-3 text-cyan-500" />
                        {post.readTime}
                      </span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-cyan-500" />
                        {post.formattedDate}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 max-w-3xl">
                      {post.subtitle || post.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-500">
                      <span>
                        Slug: <code className="text-cyan-400">/resources/blogs/{post.slug}/</code>
                      </span>
                      <span>•</span>
                      <span>By {post.author.name} ({post.author.role})</span>
                      <span>•</span>
                      <span>{post.content.sections.length} Sections</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 self-end lg:self-center shrink-0">
                  <button
                    onClick={() => handleToggleFeatured(post)}
                    className={`p-2 rounded-xl text-xs font-bold transition ${
                      post.isFeatured
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
                    }`}
                    title={post.isFeatured ? "Remove from Spotlight" : "Set as Featured Spotlight"}
                  >
                    {post.isFeatured ? <Star className="h-4 w-4 fill-cyan-400 text-cyan-400" /> : <StarOff className="h-4 w-4" />}
                  </button>

                  <Link
                    href={`/resources/blogs/${post.slug}/`}
                    target="_blank"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:text-white transition"
                    title="View live article"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>

                  <button
                    onClick={() => handleOpenEdit(post)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-bold transition"
                  >
                    <Edit3 className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Edit</span>
                  </button>

                  <button
                    onClick={() => handleDeletePost(post.slug, post.title)}
                    className="p-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-900/60 transition"
                    title="Delete article"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── 4. CREATE / EDIT ARTICLE MODAL ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/60">
              <div>
                <h2 className="text-lg font-black text-white">
                  {editingSlug ? "Edit Article" : "Create New Technical Article"}
                </h2>
                <p className="text-xs text-slate-400">
                  Publish or update credential engineering guides directly into the live website.
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSavePost} className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Row 1: Title & Slug */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Article Title <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        title,
                        slug: prev.slug || title.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, ""),
                      }));
                    }}
                    placeholder="e.g. Modern ID Card Security Guide"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    URL Slug <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                    placeholder="modern-id-card-security-guide"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-cyan-300 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Row 2: Subtitle / Synopsis */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Subtitle / Technical Synopsis
                </label>
                <textarea
                  rows={2}
                  value={formData.subtitle}
                  onChange={(e) => setFormData((prev) => ({ ...prev, subtitle: e.target.value }))}
                  placeholder="Detailed subtitle introducing the engineering focus..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Row 3: Category, Read Time, Date, Featured */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {BLOG_CATEGORIES.filter((c) => c !== "All Articles").map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Read Time</label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData((prev) => ({ ...prev, readTime: e.target.value }))}
                    placeholder="5 min read"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Publish Date</label>
                  <input
                    type="date"
                    value={formData.publishedDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, publishedDate: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="flex items-center gap-2 pt-6">
                  <input
                    type="checkbox"
                    id="isFeatured"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData((prev) => ({ ...prev, isFeatured: e.target.checked }))}
                    className="h-4 w-4 rounded border-slate-700 text-cyan-500 focus:ring-cyan-400 bg-slate-800"
                  />
                  <label htmlFor="isFeatured" className="text-xs font-bold text-white cursor-pointer">
                    Flagship Spotlight
                  </label>
                </div>
              </div>

              {/* Row 4: Author & Image */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Author Name</label>
                  <input
                    type="text"
                    value={formData.authorName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, authorName: e.target.value }))}
                    placeholder="Pranab Jyoti Das"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Author Role</label>
                  <input
                    type="text"
                    value={formData.authorRole}
                    onChange={(e) => setFormData((prev) => ({ ...prev, authorRole: e.target.value }))}
                    placeholder="Head of Credential Engineering, IDGen"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Featured Image Path</label>
                  <input
                    type="text"
                    value={formData.featuredImage}
                    onChange={(e) => setFormData((prev) => ({ ...prev, featuredImage: e.target.value }))}
                    placeholder="/images/PVC Cards Samples/Sample 1.jpg"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-cyan-300 font-mono"
                  />
                </div>
              </div>

              {/* Row 5: Tags & Key Takeaways */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Tags (Comma Separated)
                  </label>
                  <input
                    type="text"
                    value={formData.tagsString}
                    onChange={(e) => setFormData((prev) => ({ ...prev, tagsString: e.target.value }))}
                    placeholder="CR80 PVC, Smart Access, RFID Turnstiles"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Key Takeaways (One per line)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.takeawaysString}
                    onChange={(e) => setFormData((prev) => ({ ...prev, takeawaysString: e.target.value }))}
                    placeholder="Solid virgin PVC prevents edge de-lamination..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>

              {/* Lead Paragraph */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Lead Paragraph (Intro dropcap style)
                </label>
                <textarea
                  rows={2}
                  value={formData.lead}
                  onChange={(e) => setFormData((prev) => ({ ...prev, lead: e.target.value }))}
                  placeholder="In an era of heightened institutional governance..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                />
              </div>

              {/* Sections Editor */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Article Sections ({formData.sections.length})
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        sections: [
                          ...prev.sections,
                          {
                            id: `sec-${prev.sections.length + 1}`,
                            heading: `${prev.sections.length + 1}. New Heading`,
                            bodyText: "Write section paragraphs here. Separate multiple paragraphs with blank lines.",
                            tipTitle: "",
                            tipText: "",
                            specs: [],
                          },
                        ],
                      }))
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold hover:bg-cyan-500/30 transition"
                  >
                    <Plus className="h-3 w-3" />
                    <span>Add Section</span>
                  </button>
                </div>

                {formData.sections.map((section, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Section {idx + 1}</span>
                      {formData.sections.length > 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              sections: prev.sections.filter((_, sIdx) => sIdx !== idx),
                            }))
                          }
                          className="text-xs text-red-400 hover:text-red-300"
                        >
                          Remove Section
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">Section Heading</label>
                        <input
                          type="text"
                          value={section.heading}
                          onChange={(e) => {
                            const val = e.target.value;
                            setFormData((prev) => {
                              const copy = [...prev.sections];
                              copy[idx].heading = val;
                              return { ...prev, sections: copy };
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">Section Anchor ID</label>
                        <input
                          type="text"
                          value={section.id}
                          onChange={(e) => {
                            const val = e.target.value;
                            setFormData((prev) => {
                              const copy = [...prev.sections];
                              copy[idx].id = val;
                              return { ...prev, sections: copy };
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-cyan-300 font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        Body Content (Double Enter for new paragraphs)
                      </label>
                      <textarea
                        rows={3}
                        value={section.bodyText}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData((prev) => {
                            const copy = [...prev.sections];
                            copy[idx].bodyText = val;
                            return { ...prev, sections: copy };
                          });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white"
                      />
                    </div>

                    {/* Tip Box fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div>
                        <label className="block text-[10px] text-slate-400 mb-1">
                          Optional Callout Tip Title
                        </label>
                        <input
                          type="text"
                          value={section.tipTitle}
                          onChange={(e) => {
                            const val = e.target.value;
                            setFormData((prev) => {
                              const copy = [...prev.sections];
                              copy[idx].tipTitle = val;
                              return { ...prev, sections: copy };
                            });
                          }}
                          placeholder="e.g. Security Risk Alert"
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] text-slate-400 mb-1">
                          Callout Tip Text
                        </label>
                        <input
                          type="text"
                          value={section.tipText}
                          onChange={(e) => {
                            const val = e.target.value;
                            setFormData((prev) => {
                              const copy = [...prev.sections];
                              copy[idx].tipText = val;
                              return { ...prev, sections: copy };
                            });
                          }}
                          placeholder="Short alert or recommendation..."
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-[#009fe3] to-cyan-500 hover:from-[#008bc7] hover:to-cyan-600 text-white text-xs font-black shadow-lg shadow-cyan-500/20 transition disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  <span>{isSubmitting ? "Saving..." : editingSlug ? "Save Changes" : "Publish Article"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
