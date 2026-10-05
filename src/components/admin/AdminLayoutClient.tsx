"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";
import {
  MapPin,
  LayoutDashboard,
  FileText,
  Users,
  ExternalLink,
  LogOut,
  ShieldCheck,
  Building2,
  IndianRupee,
  Newspaper,
  Briefcase,
  Camera,
  Sparkles,
  Award,
  Package,
  GraduationCap,
  Tag,
  Ticket,
  Radio,
  Waves,
  Layers,
  Link2,
  Shield,
  CreditCard,
  Laptop,
  BookOpen,
  HelpCircle,
  FileSpreadsheet,
  Phone,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Globe,
  Box,
  Sliders,
  Flame,
} from "lucide-react";

interface NavLinkItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeColor?: "teal" | "cyan" | "indigo" | "emerald" | "amber" | "rose" | "purple";
  publicHref?: string;
}

interface NavCategory {
  title: string;
  id: string;
  color: string;
  items: NavLinkItem[];
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    title: "Core Portals",
    id: "core",
    color: "teal",
    items: [
      {
        name: "Dashboard",
        href: "/admin/",
        icon: LayoutDashboard,
      },
      {
        name: "Home Page",
        href: "/admin/homepage/",
        icon: Sparkles,
        badge: "11 Points",
        badgeColor: "teal",
        publicHref: "/",
      },
      {
        name: "Why IDGen",
        href: "/admin/why-idgen/",
        icon: Award,
        badge: "13 Points",
        badgeColor: "teal",
        publicHref: "/why-idgen/",
      },
      {
        name: "IDGen Studio",
        href: "/admin/idgen-studio/",
        icon: Laptop,
        badge: "Interactive",
        badgeColor: "cyan",
        publicHref: "/idgen-studio/",
      },
    ],
  },
  {
    title: "Services CMS (8+)",
    id: "services",
    color: "cyan",
    items: [
      {
        name: "Services & Dropdown",
        href: "/admin/services/",
        icon: Package,
        badge: "Manager",
        badgeColor: "teal",
      },
      {
        name: "ID Card Printing",
        href: "/admin/id-card-printing/",
        icon: ShieldCheck,
        badge: "Dynamic",
        badgeColor: "cyan",
        publicHref: "/id-card-printing/",
      },
      {
        name: "Student ID Cards",
        href: "/admin/student-id-card-printing/",
        icon: GraduationCap,
        badge: "Dynamic",
        badgeColor: "cyan",
        publicHref: "/student-id-card-printing/",
      },
      {
        name: "Employee ID Cards",
        href: "/admin/employee-id-card-printing/",
        icon: Briefcase,
        badge: "Dynamic",
        badgeColor: "cyan",
        publicHref: "/employee-id-card-printing/",
      },
      {
        name: "Custom Lanyards",
        href: "/admin/custom-printed-lanyard-printing/",
        icon: Tag,
        badge: "Dynamic",
        badgeColor: "cyan",
        publicHref: "/custom-printed-lanyard-printing/",
      },
      {
        name: "Event Cards",
        href: "/admin/event-card-printing/",
        icon: Ticket,
        badge: "Dynamic",
        badgeColor: "cyan",
        publicHref: "/event-card-printing/",
      },
      {
        name: "RFID Cards",
        href: "/admin/rfid-card-printing/",
        icon: Radio,
        badge: "Dynamic",
        badgeColor: "cyan",
        publicHref: "/rfid-card-printing/",
      },
      {
        name: "Ultrasonic Sealing",
        href: "/admin/ultrasonic-sealing/",
        icon: Waves,
        badge: "Dynamic",
        badgeColor: "cyan",
        publicHref: "/ultrasonic-sealing/",
      },
      {
        name: "Membership Cards",
        href: "/admin/membership-card-printing/",
        icon: Sparkles,
        badge: "Dynamic",
        badgeColor: "cyan",
        publicHref: "/membership-card-printing/",
      },
    ],
  },
  {
    title: "Products CMS (5)",
    id: "products",
    color: "indigo",
    items: [
      {
        name: "ID Card Holders",
        href: "/admin/id-card-holders/",
        icon: Box,
        badge: "Product",
        badgeColor: "indigo",
        publicHref: "/id-card-holders/",
      },
      {
        name: "ID Card Hooks & Clips",
        href: "/admin/id-card-hooks/",
        icon: Link2,
        badge: "Product",
        badgeColor: "indigo",
        publicHref: "/id-card-hooks/",
      },
      {
        name: "Acrylic Badges & Pins",
        href: "/admin/acrylic-badges/",
        icon: Shield,
        badge: "Product",
        badgeColor: "indigo",
        publicHref: "/acrylic-badges/",
      },
      {
        name: "Custom Zinc Medals",
        href: "/admin/zinc-medals/",
        icon: Award,
        badge: "Product",
        badgeColor: "indigo",
        publicHref: "/zinc-medals/",
      },
      {
        name: "30-Mil PVC Smart Cards",
        href: "/admin/pvc-cards/",
        icon: CreditCard,
        badge: "Product",
        badgeColor: "indigo",
        publicHref: "/pvc-cards/",
      },
    ],
  },
  {
    title: "Regional & Hubs",
    id: "locations",
    color: "emerald",
    items: [
      {
        name: "Service Areas & Hubs",
        href: "/admin/service-areas/",
        icon: MapPin,
        badge: "8 States",
        badgeColor: "emerald",
        publicHref: "/service-areas/assam/",
      },
    ],
  },
  {
    title: "Content & Resources",
    id: "resources",
    color: "purple",
    items: [
      {
        name: "Blogs & Insights",
        href: "/admin/blogs/",
        icon: Newspaper,
        badge: "CMS",
        badgeColor: "purple",
        publicHref: "/resources/blogs/",
      },
      {
        name: "Technical Guides",
        href: "/admin/guides/",
        icon: BookOpen,
        badge: "CMS",
        badgeColor: "purple",
        publicHref: "/resources/guides/",
      },
      {
        name: "Institutional FAQs",
        href: "/admin/faq/",
        icon: HelpCircle,
        badge: "CMS",
        badgeColor: "purple",
        publicHref: "/faq/",
      },
      {
        name: "Case Studies / Projects",
        href: "/admin/case-studies/",
        icon: Camera,
        badge: "Gallery",
        badgeColor: "purple",
        publicHref: "/case-studies/",
      },
      {
        name: "Templates CMS",
        href: "/admin/templates/",
        icon: FileSpreadsheet,
        badge: "CMS",
        badgeColor: "purple",
        publicHref: "/templates/",
      },
      {
        name: "Partners CMS",
        href: "/admin/partners/",
        icon: Users,
        badge: "CMS",
        badgeColor: "purple",
        publicHref: "/partners/",
      },
      {
        name: "Contact Us CMS",
        href: "/admin/contact-us/",
        icon: Phone,
        badge: "CMS",
        badgeColor: "purple",
        publicHref: "/contact-us/",
      },
    ],
  },
  {
    title: "Operations & Leads",
    id: "operations",
    color: "amber",
    items: [
      {
        name: "Pricing Engine & Catalog",
        href: "/admin/pricing/",
        icon: IndianRupee,
        badge: "Rates",
        badgeColor: "emerald",
        publicHref: "/pricing/",
      },
      {
        name: "CRM Lead Quotes",
        href: "/admin/quotes/",
        icon: FileText,
        badge: "Inquiries",
        badgeColor: "amber",
      },
    ],
  },
];

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const isLoginPage = pathname ? pathname.startsWith("/admin/login") : false;

  useEffect(() => {
    if (isLoginPage) {
      setIsAuthenticated(true);
      return;
    }

    fetch("/api/admin/auth")
      .then((res) => {
        if (!res.ok) return { authenticated: false };
        return res.json();
      })
      .then((data) => {
        if (data && data.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, [pathname, isLoginPage, router]);

  // Close mobile menu on pathname change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleSection = (id: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return NAV_CATEGORIES;
    const q = searchQuery.toLowerCase().trim();

    return NAV_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.href.toLowerCase().includes(q) ||
          (item.badge && item.badge.toLowerCase().includes(q)) ||
          cat.title.toLowerCase().includes(q)
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [searchQuery]);

  const totalPagesCount = useMemo(() => {
    return NAV_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  // If this is the login page, render without sidebar
  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-teal-500/30 flex items-center justify-center">
        {children}
      </div>
    );
  }

  // Waiting for client-side auth check
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="h-10 w-10 border-2 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-semibold text-slate-400">Verifying Admin Access...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated === false) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="text-center space-y-4 max-w-sm">
          <div className="h-12 w-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/30">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-bold text-white">Authentication Required</h2>
          <p className="text-xs text-slate-400">Please sign in to access the IDGen Admin Control Panel.</p>
          <Link
            href={`/admin/login/?from=${encodeURIComponent(pathname || "/admin/")}`}
            className="inline-block px-5 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 transition"
          >
            Go to Sign In
          </Link>
        </div>
      </div>
    );
  }

  const isRouteActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/admin/" || href === "/admin") {
      return pathname === "/admin" || pathname === "/admin/";
    }
    const cleanHref = href.replace(/\/$/, "");
    const cleanPath = pathname.replace(/\/$/, "");
    return cleanPath === cleanHref || cleanPath.startsWith(cleanHref + "/");
  };

  const getBadgeClasses = (color?: string) => {
    switch (color) {
      case "cyan":
        return "bg-cyan-950/80 text-cyan-300 border-cyan-800/50";
      case "indigo":
        return "bg-indigo-950/80 text-indigo-300 border-indigo-800/50";
      case "emerald":
        return "bg-emerald-950/80 text-emerald-300 border-emerald-800/50";
      case "purple":
        return "bg-purple-950/80 text-purple-300 border-purple-800/50";
      case "amber":
        return "bg-amber-950/80 text-amber-300 border-amber-800/50";
      case "rose":
        return "bg-rose-950/80 text-rose-300 border-rose-800/50";
      case "teal":
      default:
        return "bg-teal-950/80 text-teal-300 border-teal-800/50";
    }
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-900/95">
      {/* Brand Header */}
      <div className="p-4 flex items-center justify-between border-b border-slate-800/80 shrink-0">
        <Link href="/admin/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-teal-500/20 group-hover:scale-105 transition">
            ID
          </div>
          <div>
            <div className="font-bold text-sm tracking-wide flex items-center gap-1.5 text-white">
              <span>IDGen Admin</span>
              <span className="text-[10px] font-semibold uppercase bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded border border-teal-500/30">
                Secure
              </span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1">
              <span>Control Panel</span>
              <span className="text-slate-600">•</span>
              <span className="text-teal-400/90 font-medium">{totalPagesCount} Pages</span>
            </p>
          </div>
        </Link>
        <Link
          href="/"
          target="_blank"
          title="Open Public Website in new tab"
          className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-teal-300 transition"
        >
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      {/* Quick Search Filter */}
      <div className="p-3 border-b border-slate-800/60 shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search all 26+ pages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-7 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation Links Scroll Container */}
      <nav className="p-3 flex-1 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
        {filteredCategories.length === 0 ? (
          <div className="py-8 text-center px-4">
            <p className="text-xs font-semibold text-slate-400">No pages found matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-2 text-xs text-teal-400 hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          filteredCategories.map((cat) => {
            const isCollapsed = !searchQuery && collapsedSections[cat.id];
            return (
              <div key={cat.id} className="space-y-1">
                <button
                  type="button"
                  onClick={() => toggleSection(cat.id)}
                  className="w-full flex items-center justify-between px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-200 transition select-none"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                    <span>{cat.title}</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-normal text-slate-500">
                      {cat.items.length}
                    </span>
                    <ChevronDown
                      className={`h-3 w-3 text-slate-500 transition-transform duration-200 ${
                        isCollapsed ? "-rotate-90" : ""
                      }`}
                    />
                  </div>
                </button>

                {!isCollapsed && (
                  <div className="space-y-0.5 pt-0.5">
                    {cat.items.map((item) => {
                      const Icon = item.icon;
                      const active = isRouteActive(item.href);

                      return (
                        <div
                          key={item.href}
                          className={`group flex items-center justify-between rounded-xl transition ${
                            active
                              ? "bg-gradient-to-r from-teal-500/20 to-teal-500/5 text-white font-bold border border-teal-500/30 shadow-sm"
                              : "text-slate-300 hover:text-white hover:bg-slate-800/70 border border-transparent font-medium"
                          }`}
                        >
                          <Link
                            href={item.href}
                            className="flex-1 flex items-center gap-2.5 px-3 py-2 text-xs min-w-0"
                          >
                            <Icon
                              className={`h-4 w-4 shrink-0 transition-transform ${
                                active
                                  ? "text-teal-400 scale-110"
                                  : "text-slate-400 group-hover:text-teal-400 group-hover:scale-105"
                              }`}
                            />
                            <span className="truncate">{item.name}</span>
                          </Link>

                          <div className="flex items-center gap-1 pr-2 shrink-0">
                            {item.badge && (
                              <span
                                className={`text-[9px] px-1.5 py-0.5 rounded-full border font-semibold ${getBadgeClasses(
                                  item.badgeColor
                                )}`}
                              >
                                {item.badge}
                              </span>
                            )}
                            {item.publicHref && (
                              <Link
                                href={item.publicHref}
                                target="_blank"
                                title={`Open public /${item.publicHref.replace(/^\/|\/$/g, "")}`}
                                className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-teal-300 transition"
                              >
                                <ExternalLink className="h-3 w-3" />
                              </Link>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </nav>

      {/* User Session & Logout Footer */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-900/90 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="h-8 w-8 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div className="truncate">
            <p className="text-xs font-bold text-slate-200 truncate">Administrator</p>
            <p className="text-[10px] text-teal-400/80 capitalize">Root Control Access</p>
          </div>
        </div>

        <AdminLogoutButton />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row antialiased selection:bg-teal-500/30">
      {/* Mobile Top Header Bar */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 z-40 sticky top-0">
        <Link href="/admin/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-black text-sm">
            ID
          </div>
          <div>
            <span className="font-bold text-xs text-white">IDGen Admin</span>
            <span className="ml-1 text-[9px] bg-teal-500/20 text-teal-300 px-1 py-0.2 rounded">
              Secure
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-teal-300"
            title="Public Website"
          >
            <ExternalLink className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-xs h-full bg-slate-900 border-r border-slate-800 z-10 flex flex-col shadow-2xl">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop Fixed Sidebar */}
      <aside className="hidden md:flex w-64 lg:w-72 border-r border-slate-800/90 flex-col shrink-0 h-screen sticky top-0">
        {sidebarContent}
      </aside>

      {/* Main Admin View Content */}
      <main className="flex-1 overflow-y-auto min-h-screen bg-slate-950 p-4 sm:p-6 md:p-8 lg:p-10">
        {children}
      </main>
    </div>
  );
}

