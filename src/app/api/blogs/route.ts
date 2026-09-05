import { NextResponse } from "next/server";
import { getAllDynamicBlogPosts, getDynamicBlogPost } from "@/lib/dynamic-blogs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (slug) {
      const post = getDynamicBlogPost(slug);
      if (!post) {
        return NextResponse.json({ success: false, error: "Article not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, post });
    }

    const posts = getAllDynamicBlogPosts();
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error("Public blogs API error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch articles" }, { status: 500 });
  }
}
