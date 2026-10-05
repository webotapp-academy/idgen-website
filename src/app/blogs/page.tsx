// A1 SEO fix: ISR - revalidate every hour for CDN caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { redirect } from "next/navigation";

export default function BlogsAliasPage() {
  redirect("/resources/blogs/");
}
