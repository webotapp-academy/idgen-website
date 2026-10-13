import { MapPin, Phone, ShieldCheck, Clock } from "lucide-react";
import { SITE } from "@/data/site";

interface LocationAddressBarProps {
  locationName: string;
  address?: string;
  isPrimary?: boolean;
}

export function LocationAddressBar({ locationName, address, isPrimary }: LocationAddressBarProps) {
  const displayAddress =
    address?.trim() ||
    (isPrimary || locationName.toLowerCase() === "guwahati"
      ? SITE.address
      : `Primary Central Cleanroom: ${SITE.address} (Direct courier dispatch to ${locationName})`);

  return (
    <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-[#0d1627] dark:via-[#0e1a2f] dark:to-[#0a1322] p-6 sm:p-7 shadow-sm dark:shadow-xl transition-all">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="flex items-start gap-4 min-w-0">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-cyan-500/10 border border-accent/30 text-accent shadow-xs">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[11px] font-bold text-accent uppercase tracking-wider">
                {isPrimary ? "Central Manufacturing Facility" : `${locationName} Service & Dispatch`}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                <ShieldCheck className="h-3 w-3" />
                Verified Facility
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-foreground">
              {locationName} Operational Address
            </h4>
            <p className="mt-1 text-xs text-muted leading-relaxed max-w-2xl">
              {displayAddress}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-col gap-2 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-white/10 sm:pl-6 text-xs">
          <div className="flex items-center gap-2 text-muted">
            <Phone className="h-3.5 w-3.5 text-accent shrink-0" />
            <a href={`tel:${SITE.phone}`} className="font-semibold text-foreground hover:text-accent transition">
              {SITE.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted">
            <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
            <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
