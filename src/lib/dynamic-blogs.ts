import { loadDynamicJson, saveDynamicJson } from "./dynamic-storage";
import { BlogPost, BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blogs";

const FILENAME = "dynamic-blogs.json";

export function getAllDynamicBlogPosts(includeDrafts = false): BlogPost[] {
  try {
    const loaded = loadDynamicJson<BlogPost[]>(FILENAME, BLOG_POSTS);
    if (Array.isArray(loaded) && loaded.length > 0) {
      return loaded;
    }
  } catch (e) {
    console.error("Error reading dynamic-blogs.json, falling back to defaults:", e);
  }
  return BLOG_POSTS;
}

export function saveAllDynamicBlogPosts(posts: BlogPost[]): void {
  saveDynamicJson(FILENAME, posts);
}

export function getDynamicBlogPost(slug: string): BlogPost | undefined {
  const posts = getAllDynamicBlogPosts(true);
  return posts.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getDynamicFeaturedBlogPost(): BlogPost {
  const posts = getAllDynamicBlogPosts();
  return posts.find((p) => p.isFeatured) || posts[0] || BLOG_POSTS[0];
}

export function getDynamicRelatedBlogPosts(slugs: string[]): BlogPost[] {
  const posts = getAllDynamicBlogPosts();
  return posts.filter((p) => slugs.includes(p.slug));
}

export function saveDynamicBlogPost(postData: Partial<BlogPost> & { slug: string; title: string }): BlogPost {
  const posts = getAllDynamicBlogPosts(true);
  const slug = postData.slug.trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
  const index = posts.findIndex((p) => p.slug.toLowerCase() === slug.toLowerCase());

  // Auto-generate table of contents from sections if not explicitly provided
  const sections = postData.content?.sections || [];
  const tableOfContents =
    postData.tableOfContents && postData.tableOfContents.length > 0
      ? postData.tableOfContents
      : sections.map((sec, i) => ({
          id: sec.id || `section-${i + 1}`,
          title: sec.heading || `Section ${i + 1}`,
        }));

  const updatedPost: BlogPost = {
    slug,
    title: postData.title.trim(),
    subtitle: postData.subtitle?.trim() || "",
    excerpt: postData.excerpt?.trim() || postData.subtitle?.trim() || "",
    category: postData.category || "Security & Smart Access",
    readTime: postData.readTime?.trim() || "5 min read",
    publishedDate: postData.publishedDate || new Date().toISOString().split("T")[0],
    formattedDate:
      postData.formattedDate ||
      new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    author: {
      name: postData.author?.name || "Pranab Jyoti Das",
      role: postData.author?.role || "Head of Credential Engineering, IDGen",
      avatar: postData.author?.avatar || "/images/idgen-hero-cards-mockup.png",
    },
    featuredImage: postData.featuredImage || "/images/PVC Cards Samples/Sample 1.jpg",
    alt: postData.alt || postData.title,
    isFeatured: Boolean(postData.isFeatured),
    tags: Array.isArray(postData.tags) ? postData.tags.filter(Boolean) : ["IDGen", "PVC Cards"],
    tableOfContents,
    keyTakeaways: Array.isArray(postData.keyTakeaways) ? postData.keyTakeaways.filter(Boolean) : [],
    content: {
      lead: postData.content?.lead || "",
      sections: sections.map((s, i) => ({
        id: s.id || `sec-${i + 1}`,
        heading: s.heading || `Heading ${i + 1}`,
        body: Array.isArray(s.body) ? s.body.filter(Boolean) : [],
        tipBox: s.tipBox?.title ? s.tipBox : undefined,
        specsTable: Array.isArray(s.specsTable) ? s.specsTable.filter(item => item.label && item.value) : undefined,
      })),
    },
    relatedSlugs: Array.isArray(postData.relatedSlugs) ? postData.relatedSlugs : [],
  };

  // If this post is marked featured, un-feature others to maintain one flagship spotlight
  if (updatedPost.isFeatured) {
    posts.forEach((p) => {
      if (p.slug !== slug) p.isFeatured = false;
    });
  }

  if (index >= 0) {
    posts[index] = { ...posts[index], ...updatedPost };
  } else {
    posts.unshift(updatedPost);
  }

  saveAllDynamicBlogPosts(posts);
  return updatedPost;
}

export function deleteDynamicBlogPost(slug: string): boolean {
  const posts = getAllDynamicBlogPosts(true);
  const filtered = posts.filter((p) => p.slug.toLowerCase() !== slug.toLowerCase());
  if (filtered.length === posts.length) return false;
  saveAllDynamicBlogPosts(filtered);
  return true;
}

export function resetDynamicBlogsToDefaults(): BlogPost[] {
  saveAllDynamicBlogPosts(BLOG_POSTS);
  return BLOG_POSTS;
}
