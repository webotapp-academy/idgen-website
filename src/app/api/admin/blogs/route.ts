import { NextResponse } from "next/server";
import {
  getAllDynamicBlogPosts,
  getDynamicBlogPost,
  saveDynamicBlogPost,
  deleteDynamicBlogPost,
  saveAllDynamicBlogPosts,
  resetDynamicBlogsToDefaults,
} from "@/lib/dynamic-blogs";
import { getAdminSession } from "@/lib/auth";
import type { BlogPost } from "@/data/blogs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (slug) {
      const post = getDynamicBlogPost(slug);
      if (!post) {
        return NextResponse.json({ success: false, error: "Blog post not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, post });
    }

    const posts = getAllDynamicBlogPosts(true);
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error("Failed to get blog posts:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch blog posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const data = await request.json();
    const { post, action } = data;

    if (action === "reset") {
      const resetPosts = resetDynamicBlogsToDefaults();
      return NextResponse.json({ success: true, message: "Blogs reset to default catalog", posts: resetPosts });
    }

    if (!post || !post.title || !post.slug) {
      return NextResponse.json(
        { success: false, error: "Article Title and URL Slug are required" },
        { status: 400 }
      );
    }

    const saved = saveDynamicBlogPost(post);
    const allPosts = getAllDynamicBlogPosts(true);

    return NextResponse.json({ success: true, post: saved, posts: allPosts });
  } catch (error) {
    console.error("Failed to save blog post:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message || "Failed to save blog post" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const data = await request.json();
    const { posts } = data;

    if (!Array.isArray(posts)) {
      return NextResponse.json({ success: false, error: "Array of posts required" }, { status: 400 });
    }

    saveAllDynamicBlogPosts(posts as BlogPost[]);
    const updated = getAllDynamicBlogPosts(true);
    return NextResponse.json({ success: true, posts: updated });
  } catch (error) {
    console.error("Failed to update blog posts array:", error);
    return NextResponse.json({ success: false, error: "Failed to update blog posts" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const action = searchParams.get("action");

    if (action === "reset") {
      const posts = resetDynamicBlogsToDefaults();
      return NextResponse.json({ success: true, message: "Blogs reset to factory defaults", posts });
    }

    if (!slug) {
      return NextResponse.json({ success: false, error: "Blog post slug is required" }, { status: 400 });
    }

    const deleted = deleteDynamicBlogPost(slug);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Blog post not found" }, { status: 404 });
    }

    const allPosts = getAllDynamicBlogPosts(true);
    return NextResponse.json({ success: true, message: "Blog post deleted successfully", posts: allPosts });
  } catch (error) {
    console.error("Failed to delete blog post:", error);
    return NextResponse.json({ success: false, error: "Failed to delete blog post" }, { status: 500 });
  }
}
