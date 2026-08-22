"use client";

// Official WhatsApp Brand SVG Path
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.2.3-.778.979-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.5-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.507-.678-.517-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.51c0 1.481 1.079 2.91 1.229 3.11.151.201 2.124 3.243 5.145 4.549.719.31 1.281.496 1.719.635.722.23 1.379.197 1.898.12.578-.086 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351zm-5.467 7.618h-.008a10.04 10.04 0 0 1-5.117-1.396l-.367-.218-3.805.998 1.016-3.71-.239-.38a10.024 10.024 0 0 1-1.536-5.321c.002-5.539 4.51-10.044 10.052-10.044a10.005 10.005 0 0 1 7.106 2.946 9.99 9.99 0 0 1 2.94 7.103c-.002 5.541-4.51 10.046-10.042 10.046zM20.52 3.48A11.934 11.934 0 0 0 12.008 0C5.396 0 .025 5.371.023 11.984a11.94 11.94 0 0 0 1.637 6.012L0 24l6.195-1.625a11.944 11.944 0 0 0 5.808 1.503h.005c6.61 0 11.982-5.372 11.985-11.987a11.92 11.92 0 0 0-3.473-8.411z"/>
    </svg>
  );
}

// Solid Official Phone Handset SVG Path
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
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
          className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/40 active:scale-95 border-none"
          title="Chat with us on WhatsApp"
        >
          {/* Side-sliding Tooltip */}
          <span className="absolute right-16 sm:right-18 bg-[#0a1628]/95 backdrop-blur-md border border-white/10 text-white text-[11px] font-extrabold tracking-wide uppercase px-3 py-1.5 rounded-xl shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
            WhatsApp Us
          </span>
          <WhatsAppIcon className="h-6.5 w-6.5 sm:h-7 sm:w-7 text-white" />
        </a>

        {/* Phone Button */}
        <a
          href={phoneUrl}
          className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/40 active:scale-95 border-none"
          title="Call our Hotline"
        >
          {/* Side-sliding Tooltip */}
          <span className="absolute right-16 sm:right-18 bg-[#0a1628]/95 backdrop-blur-md border border-white/10 text-white text-[11px] font-extrabold tracking-wide uppercase px-3 py-1.5 rounded-xl shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
            Call Hotline
          </span>
          <PhoneIcon className="h-6 w-6 sm:h-6.5 sm:w-6.5 text-white" />
        </a>
      </div>

      {/* ==========================================
          2. MOBILE FIXED BOTTOM CONTACT BAR
          ========================================== */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-[#070e17]/95 backdrop-blur-xl border-t border-white/10 p-3 flex gap-3 sm:hidden shadow-[0_-8px_30px_rgb(0,0,0,0.5)]">
        {/* WhatsApp Call Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-xs font-extrabold tracking-wider uppercase text-white shadow-md active:scale-95 transition-transform border-none"
        >
          <WhatsAppIcon className="h-5 w-5 text-white" />
          <span>WhatsApp</span>
        </a>

        {/* Direct Phone Call Button */}
        <a
          href={phoneUrl}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] py-3.5 text-xs font-extrabold tracking-wider uppercase text-white shadow-md active:scale-95 transition-transform border-none"
        >
          <PhoneIcon className="h-5 w-5 text-white" />
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
