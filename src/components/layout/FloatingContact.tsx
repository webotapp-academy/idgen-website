"use client";

import { Phone } from "lucide-react";

// Official WhatsApp Brand SVG Path
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.636-1.023-5.11-2.884-6.974-1.862-1.865-4.343-2.891-6.986-2.892-5.44 0-9.865 4.421-9.868 9.866-.001 1.77.462 3.5 1.341 5.022l-.973 3.55 3.685-.959zm10.743-7.51c-.26-.13-1.536-.759-1.773-.846-.237-.087-.41-.13-.58.13-.17.26-.658.823-.808.997-.15.174-.3.195-.56.065-.26-.13-1.098-.405-2.091-1.293-.772-.688-1.293-1.539-1.445-1.8-.15-.26-.016-.4.113-.529.117-.117.26-.304.39-.456.13-.152.173-.26.26-.434.087-.174.043-.326-.021-.456-.065-.13-.58-1.399-.795-1.921-.21-.506-.442-.437-.607-.437-.157-.004-.336-.004-.515-.004-.18 0-.472.067-.719.336-.247.269-.942.922-.942 2.247s.965 2.603 1.098 2.777c.133.174 1.899 2.901 4.599 4.066.643.278 1.144.444 1.534.569.646.205 1.233.176 1.697.107.517-.077 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.237-.174-.497-.304z" />
    </svg>
  );
}

export function FloatingContact() {
  const whatsappUrl = "https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20would%20like%20to%20inquire%20about%20ID%20card%20and%20lanyard%20printing.";
  const phoneUrl = "tel:+919207012084";

  return (
    <>
      {/* ==========================================
          1. DESKTOP FLOATING WIDGET (Bottom Right)
          ========================================== */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col gap-3.5 items-end">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-950/80 text-emerald-300 shadow-xl shadow-emerald-500/10 backdrop-blur-md transition-all duration-300 hover:bg-emerald-900 hover:border-emerald-400 hover:scale-110 active:scale-95"
          title="Chat with us on WhatsApp"
        >
          {/* Side-sliding Tooltip */}
          <span className="absolute right-16 sm:right-18 bg-[#0a1628]/95 backdrop-blur-md border border-white/10 text-white text-[11px] font-extrabold tracking-wide uppercase px-3 py-1.5 rounded-xl shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
            WhatsApp Us
          </span>
          <WhatsAppIcon className="h-6 w-6 text-emerald-400" />
        </a>

        {/* Phone Button */}
        <a
          href={phoneUrl}
          className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-950/80 text-cyan-300 shadow-xl shadow-cyan-500/10 backdrop-blur-md transition-all duration-300 hover:bg-cyan-900 hover:border-cyan-400 hover:scale-110 active:scale-95"
          title="Call our Hotline"
        >
          {/* Side-sliding Tooltip */}
          <span className="absolute right-16 sm:right-18 bg-[#0a1628]/95 backdrop-blur-md border border-white/10 text-white text-[11px] font-extrabold tracking-wide uppercase px-3 py-1.5 rounded-xl shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
            Call Hotline
          </span>
          <Phone className="h-6 w-6 text-cyan-400" />
        </a>
      </div>

      {/* ==========================================
          2. MOBILE FIXED BOTTOM CONTACT BAR
          ========================================== */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-[#070e17]/90 backdrop-blur-xl border-t border-white/10 p-3 flex gap-3 sm:hidden shadow-[0_-8px_30px_rgb(0,0,0,0.5)]">
        {/* WhatsApp Call Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/80 py-3 text-xs font-extrabold tracking-wider uppercase text-emerald-300 shadow-md active:scale-95 transition-transform"
        >
          <WhatsAppIcon className="h-4.5 w-4.5 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        {/* Direct Phone Call Button */}
        <a
          href={phoneUrl}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/80 py-3 text-xs font-extrabold tracking-wider uppercase text-cyan-300 shadow-md active:scale-95 transition-transform"
        >
          <Phone className="h-4.5 w-4.5 text-cyan-400" />
          <span>Call Now</span>
        </a>
      </div>

      {/* Spacer style to prevent footer/content cutoff on mobile */}
      <style jsx global>{`
        @media (max-width: 639px) {
          body {
            padding-bottom: 72px !important;
          }
        }
      `}</style>
    </>
  );
}
