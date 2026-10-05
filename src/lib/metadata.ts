import type { Metadata } from "next";
import { SITE_URL } from "@/data/site";

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  // Strip trailing " | IDGen" or " | IDGen" so the layout template (%s | IDGen) does not double the suffix
  const cleanTitle = opts.title.replace(/\s*\|\s*(IDGen Identity Solutions|IDGen|IDGen)\s*$/i, "").trim();
  const ogImages = opts.image
    ? [{ url: opts.image.startsWith("http") ? opts.image : `${SITE_URL}${opts.image}` }]
    : undefined;

  return {
    title: cleanTitle,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: cleanTitle,
      description: opts.description,
      url,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: opts.description,
      images: ogImages ? [ogImages[0].url] : undefined,
    },
  };
}
