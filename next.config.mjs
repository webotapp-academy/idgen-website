import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.NODE_ENV !== "production";

// A13 SEO fix: Real Content-Security-Policy with specific allowed sources
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  // Allow scripts from self + Google Analytics/Maps + WhatsApp widget
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com https://cdn.jsdelivr.net`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // A13: Allow images from known sources + Google Maps + CDN
  "img-src 'self' data: blob: https://images.pexels.com https://images.unsplash.com https://cdn.pixabay.com https://*.googleusercontent.com https://maps.googleapis.com https://maps.gstatic.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  // A13: Allow connections to analytics + WhatsApp API
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://*.googletagmanager.com https://api.whatsapp.com https://api.indexnow.org",
  "media-src 'self' blob: data: https:",
  "frame-src https://maps.google.com https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    // 1. Apex (idgen.in) -> Canonical WWW (www.idgen.in) 301 Redirect
    const hostRules = [
      {
        source: "/:path*",
        has: [{ type: "host", value: "idgen.in" }],
        destination: "https://www.idgen.in/:path*",
        permanent: true,
      },
    ];

    // 2. Specific canonical route redirects
    const rules = [
      { source: "/about-us", destination: "/why-idgen/" },
      { source: "/about", destination: "/why-idgen/" },
      { source: "/manufacturing", destination: "/why-idgen/" },
      { source: "/quality-assurance", destination: "/why-idgen/" },
      { source: "/our-process", destination: "/why-idgen/" },
      { source: "/services/:slug", destination: "/:slug/" },
      { source: "/products/:slug", destination: "/:slug/" },
      { source: "/service-area/:state/:city", destination: "/service-areas/:state/:city/" },
      { source: "/service-area/:state", destination: "/service-areas/:state/" },
      { source: "/service-area", destination: "/service-areas/" },
      { source: "/service-areas/assam/tezpur", destination: "/service-areas/assam/sonitpur/" },
      { source: "/service-areas/assam/karimganj", destination: "/service-areas/assam/sribhumi-karimganj/" },
      { source: "/service-areas/assam/sribhumi", destination: "/service-areas/assam/sribhumi-karimganj/" },
      { source: "/get-a-quote", destination: "/request-a-quote/" },
      { source: "/become-a-partner", destination: "/partners/" },
      { source: "/contact", destination: "/contact-us/" },
      { source: "/terms", destination: "/terms-conditions/" },
      { source: "/terms-and-conditions", destination: "/terms-conditions/" },
      { source: "/privacy", destination: "/privacy-policy/" },
      { source: "/resources", destination: "/resources/blogs/" },
    ];
    return [
      ...hostRules,
      ...rules.flatMap(({ source, destination }) => [
        { source, destination, permanent: true },
        { source: `${source}/`, destination, permanent: true },
      ]),
    ];
  },
  async headers() {
    return [
      // A1 SEO fix: Immutable cache for versioned static assets
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // A1 SEO fix: Long cache for images and uploads
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/uploads/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Live dynamic updates: HTML pages revalidate immediately so admin edits show instantly
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // A13 SEO fix: Real CSP with specific sources
          { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
        ],
      },
    ];
  },
  // Static image serving: Hostinger LiteSpeed serves assets directly from public_html
  // unoptimized: true ensures Next.js renders direct <img> URLs instead of broken /_next/image proxy
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "maps.googleapis.com" },
    ],
  },
};

export default nextConfig;
