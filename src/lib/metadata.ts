import type { Metadata } from "next";
import { SITE_URL } from "@/data/site";

// Layout template appends " | IDGen" (8 chars). Google truncates titles past
// ~65 chars, so keep "|"-separated segments only while the full title fits.
const TITLE_SUFFIX_LENGTH = " | IDGen".length;
const MAX_TITLE_LENGTH = 65;

export function fitTitle(title: string): string {
  if (title.length + TITLE_SUFFIX_LENGTH <= MAX_TITLE_LENGTH) return title;
  const segments = title.split(/\s+\|\s+/);
  let fitted = segments[0];
  for (const segment of segments.slice(1)) {
    const next = `${fitted} | ${segment}`;
    if (next.length + TITLE_SUFFIX_LENGTH > MAX_TITLE_LENGTH) break;
    fitted = next;
  }
  return fitted;
}

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  // Strip trailing " | IDGen" or " | IDGen" so the layout template (%s | IDGen) does not double the suffix
  const cleanTitle = fitTitle(
    opts.title.replace(/\s*\|\s*(IDGen Identity Solutions|IDGen)\s*$/i, "").trim(),
  );
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
