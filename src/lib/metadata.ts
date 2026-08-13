import type { Metadata } from "next";
import { SITE_URL } from "@/data/site";

export function pageMetadata(opts: { title: string; description: string; path: string }): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
    },
  };
}
