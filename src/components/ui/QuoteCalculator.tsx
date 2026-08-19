"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Layers, 
  Tag, 
  Radio, 
  Ticket,
  ShieldCheck,
  Zap,
  Flame
} from "lucide-react";

interface ProductConfig {
  id: string;
  name: string;
  subtitle: string;
  icon: typeof Layers;
  basePrice: number;
  unit: string;
  popularQty: number;
  badge?: string;
}

const PRODUCTS: ProductConfig[] = [
  { id: "complete-set", name: "Complete Wearable ID Set", subtitle: "Card + Lanyard + Holder", icon: Sparkles, basePrice: 42, unit: "set", popularQty: 500, badge: "Most Popular" },
  { id: "pvc-cards", name: "CR80 PVC ID Cards", subtitle: "Virgin PVC Core 30-Mil", icon: Layers, basePrice: 18, unit: "card", popularQty: 1000 },
  { id: "custom-lanyards", name: "20mm Satin Lanyards", subtitle: "Sublimation Printed", icon: Tag, basePrice: 14, unit: "lanyard", popularQty: 500 },
  { id: "rfid-smart", name: "RFID / NFC Smart Cards", subtitle: "Mifare 1K / TK4100 Chip", icon: Radio, basePrice: 32, unit: "card", popularQty: 500 },
  { id: "event-badges", name: "VIP Event Passes", subtitle: "Oversized & Dual-Hook", icon: Ticket, basePrice: 28, unit: "badge", popularQty: 250 },
];

export function QuoteCalculator() {
  const [selectedProduct, setSelectedProduct] = useState<string>("complete-set");
  const [quantity, setQuantity] = useState<number>(500);
  const [hasUltrasonic, setHasUltrasonic] = useState<boolean>(true);
  const [hasHologram, setHasHologram] = useState<boolean>(false);
  const [hasStudioData, setHasStudioData] = useState<boolean>(true);

  const product = PRODUCTS.find((p) => p.id === selectedProduct) || PRODUCTS[0];

  // Volume discount multiplier
  let volumeMultiplier = 1.0;
  if (quantity >= 5000) volumeMultiplier = 0.65;
  else if (quantity >= 2000) volumeMultiplier = 0.72;
  else if (quantity >= 1000) volumeMultiplier = 0.8;
  else if (quantity >= 500) volumeMultiplier = 0.88;
  else if (quantity >= 250) volumeMultiplier = 0.94;

  let unitPrice = product.basePrice * volumeMultiplier;
  if (hasUltrasonic && selectedProduct !== "pvc-cards") unitPrice += 2.5;
  if (hasHologram) unitPrice += 3.0;

  const minUnitEst = Math.floor(unitPrice);
  const maxUnitEst = Math.ceil(unitPrice * 1.15);
  const totalMinEst = minUnitEst * quantity;
  const totalMaxEst = maxUnitEst * quantity;

  // Turnaround days calculation
  let turnaround = "48–72 Hours";
  if (quantity > 5000) turnaround = "3–5 Days";
  else if (quantity <= 500) turnaround = "24–48 Hours";

  return (
    <div className="overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#091629] via-[#06101f] to-[#040914] text-white shadow-2xl backdrop-blur-2xl">
      {/* Header Band */}
      <div className="border-b border-white/10 bg-white/[0.03] p-4 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
              <Calculator className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-2xl font-extrabold text-white">Instant Project Estimator</h3>
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <p className="text-[11px] sm:text-sm text-slate-300 mt-0.5">Simulate real-time institutional batch pricing & dispatch commitments</p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-950/60 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold text-emerald-300 shadow-md">
            <Zap className="h-3.5 w-3.5 text-emerald-400" />
            <span>Guwahati Live Factory Rates</span>
          </span>
        </div>
      </div>

      <div className="grid gap-6 sm:gap-8 p-4 sm:p-8 lg:grid-cols-12">
        {/* Configuration Left (7 cols) */}
        <div className="space-y-7 lg:col-span-7">
          {/* Step 1: Select Product */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] text-cyan-300">1</span>
                Choose Product / Service Category
              </label>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {PRODUCTS.map((p) => {
                const Icon = p.icon;
                const isSelected = selectedProduct === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setSelectedProduct(p.id);
                      setQuantity(p.popularQty);
                    }}
                    className={`relative flex items-start gap-3.5 rounded-2xl border p-4 text-left transition-all duration-200 ${
                      isSelected
                        ? "border-cyan-400 bg-gradient-to-br from-cyan-500/20 via-cyan-950/40 to-slate-900 text-white shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/50"
                        : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25 hover:bg-white/[0.07]"
                    }`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isSelected ? "bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-400/20" : "bg-white/10 text-white"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <p className="font-bold text-sm text-white truncate">{p.name}</p>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{p.subtitle}</p>
                      <p className="text-xs font-semibold text-cyan-300 mt-1.5">Starting ~₹{p.basePrice}/{p.unit}</p>
                    </div>

                    {p.badge && (
                      <span className="absolute -top-2.5 right-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                        {p.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Quantity Selection */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label className="text-xs font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] text-cyan-300">2</span>
                Select Batch Quantity
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-white bg-cyan-500/20 border border-cyan-400/30 px-3 py-1 rounded-xl">
                  {quantity.toLocaleString()} {product.unit}s
                </span>
                {quantity >= 1000 && (
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-xl">
                    ⚡ {Math.round((1 - volumeMultiplier) * 100)}% Bulk Discount
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4 px-1">
              <input
                type="range"
                min="100"
                max="10000"
                step="50"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-cyan-400"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[100, 250, 500, 1000, 2500, 5000, 10000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setQuantity(preset)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                    quantity === preset
                      ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20 scale-105"
                      : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/15"
                  }`}
                >
                  {preset.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Add-on Options */}
          <div>
            <label className="text-xs font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-2 mb-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] text-cyan-300">3</span>
              Specification & Production Add-ons
            </label>
            
            <div className="grid gap-3 sm:grid-cols-3">
              <label className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 text-xs transition-all ${
                hasUltrasonic ? "border-cyan-400 bg-cyan-500/10 shadow-md" : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
              }`}>
                <input
                  type="checkbox"
                  checked={hasUltrasonic}
                  onChange={(e) => setHasUltrasonic(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-white/30 accent-cyan-400"
                />
                <div>
                  <p className="font-bold text-white text-xs">Ultrasonic Sealing</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Acoustic tear-proof seam weld (+₹2.5)</p>
                </div>
              </label>

              <label className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 text-xs transition-all ${
                hasHologram ? "border-cyan-400 bg-cyan-500/10 shadow-md" : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
              }`}>
                <input
                  type="checkbox"
                  checked={hasHologram}
                  onChange={(e) => setHasHologram(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-white/30 accent-cyan-400"
                />
                <div>
                  <p className="font-bold text-white text-xs">Holographic Foil</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">3D Anti-counterfeit overlay (+₹3.0)</p>
                </div>
              </label>

              <label className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 text-xs transition-all ${
                hasStudioData ? "border-cyan-400 bg-cyan-500/10 shadow-md" : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
              }`}>
                <input
                  type="checkbox"
                  checked={hasStudioData}
                  onChange={(e) => setHasStudioData(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-white/30 accent-cyan-400"
                />
                <div>
                  <p className="font-bold text-white text-xs">IDGen Studio Portal</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Automated photo & excel prep (Free)</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Estimation Summary Card Right (5 cols) */}
        <div className="flex flex-col justify-between rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0a1e38] via-[#08172c] to-[#050e1c] p-4 sm:p-7 shadow-2xl backdrop-blur-2xl lg:col-span-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-40 w-40 bg-cyan-500/15 blur-[60px] rounded-full pointer-events-none" />

          <div>
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">Estimated Budget</span>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 text-xs font-bold text-emerald-300">
                <Clock className="h-3.5 w-3.5 text-emerald-400" />
                <span>Ready in {turnaround}</span>
              </span>
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">Estimated Rate Per Unit</p>
              <div className="mt-1 flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl xs:text-4xl sm:text-5xl font-black text-white tracking-tight">
                  ₹{minUnitEst} – ₹{maxUnitEst}
                </span>
                <span className="text-sm font-semibold text-slate-300">/ {product.unit}</span>
              </div>

              <div className="mt-5 rounded-2xl bg-white/[0.04] border border-white/10 p-3.5 sm:p-4 shadow-inner">
                <p className="text-xs text-slate-400">Total Project Estimate for {quantity.toLocaleString()} units:</p>
                <p className="mt-1 text-xl sm:text-3xl font-extrabold text-cyan-300">
                  ₹{totalMinEst.toLocaleString()} – ₹{totalMaxEst.toLocaleString()}*
                </p>
              </div>
            </div>

            {/* Included Guarantees */}
            <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Free Digital Sample PDF Proof before press run</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Zero Plate & Screen charges on bulk orders</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Direct factory express dispatch from Guwahati</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-5 border-t border-white/10">
            <Link
              href={`/request-a-quote/?type=${selectedProduct}&quantity=${quantity}`}
              className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:bg-accent-hover hover:text-white hover:shadow-cyan-500/50 hover:scale-[1.02] btn-glow"
            >
              <Sparkles className="h-4 w-4" />
              <span>Lock in This Formal Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-2.5 text-center text-[10px] text-slate-400">
              *Taxes and courier extra. Final rate confirmed upon artwork & spec sign-off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

