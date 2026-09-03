import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema-org";
import { SITE, SITE_URL, NAV, NavItem } from "@/data/site";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Inter } from "next/font/google";
import { getAllStates } from "@/lib/dynamic-locations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  // Every other page sets its own canonical via pageMetadata() (which
  // overrides this). The homepage doesn't call pageMetadata(), so without
  // this default it was the only page shipping with no canonical tag.
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
      style={{
        "--font-sans": inter.style.fontFamily,
        "--font-display": inter.style.fontFamily,
      } as React.CSSProperties}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <JsonLd data={organizationSchema()} />
          <JsonLd data={websiteSchema()} />
          {(() => {
            const states = getAllStates();
            const dynamicNav: NavItem[] = NAV.map(item => {
              if (item.label === "Service Areas") {
                return {
                  ...item,
                  children: states.map(state => ({
                      label: state.name,
                      href: `/service-areas/${state.slug}/`,
                      children: state.cities.map(city => ({
                        label: city.name,
                        href: `/service-areas/${state.slug}/${city.slug}/`
                      }))
                    }))
                };
              }
              return item;
            });
            return <Header navItems={dynamicNav} />;
          })()}
          <main className="flex-1 w-full overflow-x-hidden">{children}</main>
          <Footer />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}

