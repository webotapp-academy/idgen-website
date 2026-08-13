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
  "frame-src https://maps.google.com https://www.google.com",
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
    // Sources include the trailing slash so these fire in a single hop —
    // trailingSlash:true would otherwise redirect once to normalize the
    // slash, then again to the real destination.
    return [
      { source: "/about-us/", destination: "/why-idgen/", permanent: true },
      { source: "/manufacturing/", destination: "/why-idgen/", permanent: true },
      { source: "/quality-assurance/", destination: "/why-idgen/", permanent: true },
      { source: "/our-process/", destination: "/why-idgen/", permanent: true },
      { source: "/services/:slug/", destination: "/:slug/", permanent: true },
      { source: "/products/:slug/", destination: "/:slug/", permanent: true },
      { source: "/service-area/:state/:city/", destination: "/service-areas/:state/:city/", permanent: true },
      { source: "/service-area/:state/", destination: "/service-areas/:state/", permanent: true },
      { source: "/service-area/", destination: "/service-areas/", permanent: true },
      { source: "/get-a-quote/", destination: "/request-a-quote/", permanent: true },
      { source: "/become-a-partner/", destination: "/partners/", permanent: true },
    ];
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
