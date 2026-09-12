import type { NextConfig } from "next";
import path from "node:path";

const isDev = process.env.NODE_ENV !== "production";

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.pexels.com https://images.unsplash.com https://cdn.pixabay.com https://*.googleusercontent.com",
  "font-src 'self' data:",
  "connect-src 'self'",
  "media-src 'self' blob: data: https:",
  "frame-src https://maps.google.com https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  trailingSlash: true,
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    // Each rule is listed with AND without the trailing slash. Sources with
    // the slash fire in a single hop; without it, trailingSlash:true's own
    // normalization would otherwise add a second hop (e.g. /about-us →
    // /about-us/ → /why-idgen/) before the destination is ever reached.
    const rules: { source: string; destination: string }[] = [
      { source: "/about-us", destination: "/why-idgen/" },
      { source: "/about", destination: "/why-idgen/" }, // was a dead end: /about → /about/ → 404
      { source: "/manufacturing", destination: "/why-idgen/" },
      { source: "/quality-assurance", destination: "/why-idgen/" },
      { source: "/our-process", destination: "/why-idgen/" },
      { source: "/services/:slug", destination: "/:slug/" },
      { source: "/products/:slug", destination: "/:slug/" },
      { source: "/service-area/:state/:city", destination: "/service-areas/:state/:city/" },
      { source: "/service-area/:state", destination: "/service-areas/:state/" },
      { source: "/service-area", destination: "/service-areas/" },
      { source: "/get-a-quote", destination: "/request-a-quote/" },
      { source: "/become-a-partner", destination: "/partners/" },
      { source: "/contact", destination: "/contact-us/" },
      { source: "/terms", destination: "/terms-conditions/" },
      { source: "/terms-and-conditions", destination: "/terms-conditions/" },
      { source: "/privacy", destination: "/privacy-policy/" },
    ];
    return rules.flatMap(({ source, destination }) => [
      { source, destination, permanent: true },
      { source: `${source}/`, destination, permanent: true },
    ]);
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
    ],
  },
};

export default nextConfig;
