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
  Ticket 
} from "lucide-react";

interface ProductConfig {
  id: string;
  name: string;
  icon: typeof Layers;
  basePrice: number;
  unit: string;
  popularQty: number;
  badge?: string;
}

const PRODUCTS: ProductConfig[] = [
  { id: "complete-set", name: "Complete Wearable ID Set", icon: Sparkles, basePrice: 42, unit: "set", popularQty: 500, badge: "Most Popular" },
  { id: "pvc-cards", name: "CR80 PVC ID Cards", icon: Layers, basePrice: 18, unit: "card", popularQty: 1000 },
  { id: "custom-lanyards", name: "20mm Satin Lanyards", icon: Tag, basePrice: 14, unit: "lanyard", popularQty: 500 },
  { id: "rfid-smart", name: "RFID / NFC Smart Cards", icon: Radio, basePrice: 32, unit: "card", popularQty: 500 },
  { id: "event-badges", name: "VIP Event Passes", icon: Ticket, basePrice: 28, unit: "badge", popularQty: 250 },
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
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#07192e] text-white shadow-2xl backdrop-blur-xl">
      <div className="border-b border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-slate-950">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Instant Project Estimator</h3>
              <p className="text-xs text-slate-300">Simulate real-time institutional batch pricing & dispatch commitments</p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            Live Factory Rates
          </span>
        </div>
      </div>

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12">
        {/* Configuration Left (7 cols) */}
        <div className="space-y-6 lg:col-span-7">
          {/* Step 1: Select Type */}
          <div>
            <label className="text-xs font-bold tracking-widest text-accent uppercase">
              1. Choose Product / Service
            </label>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
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
                    className={`relative flex items-center gap-3 rounded-2xl border p-3.5 text-left transition ${
                      isSelected
                        ? "border-accent bg-accent/15 text-white shadow-[0_0_20px_rgba(2,132,199,0.2)]"
                        : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${isSelected ? "bg-accent text-slate-950" : "bg-white/10 text-white"}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold">{p.name}</p>
                      <p className="text-xs text-slate-400">Starting ~₹{p.basePrice}/{p.unit}</p>
                    </div>
                    {p.badge && (
                      <span className="absolute top-2 right-2 rounded bg-amber-400/20 px-1.5 py-0.5 text-[9px] font-extrabold text-amber-300">
                        {p.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Quantity Selection */}
          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold tracking-widest text-accent uppercase">
                2. Select Quantity: <span className="text-white text-sm font-extrabold">{quantity.toLocaleString()} {product.unit}s</span>
              </label>
              {quantity >= 1000 && (
                <span className="text-xs font-bold text-emerald-400">
                  ⚡ Tier Discount Applied ({Math.round((1 - volumeMultiplier) * 100)}% OFF)
                </span>
              )}
            </div>

            <input
              type="range"
              min="100"
              max="10000"
              step="50"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-3 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-accent"
            />

            <div className="mt-2 flex flex-wrap gap-2">
              {[100, 250, 500, 1000, 2500, 5000, 10000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setQuantity(preset)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                    quantity === preset
                      ? "bg-accent text-slate-950 font-bold"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {preset.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Add-on Options */}
          <div>
            <label className="text-xs font-bold tracking-widest text-accent uppercase">
              3. Specification Add-ons
            </label>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
              <label className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 text-xs transition ${hasUltrasonic ? "border-accent/60 bg-accent/10" : "border-white/10 bg-white/[0.02]"}`}>
                <input
                  type="checkbox"
                  checked={hasUltrasonic}
                  onChange={(e) => setHasUltrasonic(e.target.checked)}
                  className="mt-0.5 rounded border-white/20 accent-accent"
                />
                <div>
                  <p className="font-bold text-white">Ultrasonic Sealing</p>
                  <p className="text-[11px] text-slate-400">Tear-proof ribbon weld</p>
                </div>
              </label>

              <label className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 text-xs transition ${hasHologram ? "border-accent/60 bg-accent/10" : "border-white/10 bg-white/[0.02]"}`}>
                <input
                  type="checkbox"
                  checked={hasHologram}
                  onChange={(e) => setHasHologram(e.target.checked)}
                  className="mt-0.5 rounded border-white/20 accent-accent"
                />
                <div>
                  <p className="font-bold text-white">Holographic Overlay</p>
                  <p className="text-[11px] text-slate-400">Anti-counterfeit foil</p>
                </div>
              </label>

              <label className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 text-xs transition ${hasStudioData ? "border-accent/60 bg-accent/10" : "border-white/10 bg-white/[0.02]"}`}>
                <input
                  type="checkbox"
                  checked={hasStudioData}
                  onChange={(e) => setHasStudioData(e.target.checked)}
                  className="mt-0.5 rounded border-white/20 accent-accent"
                />
                <div>
                  <p className="font-bold text-white">IDGen Studio Portal</p>
                  <p className="text-[11px] text-slate-400">Photo & record prep</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Estimation Summary Card Right (5 cols) */}
        <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-xl lg:col-span-5">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Estimated Range</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <Clock className="h-3.5 w-3.5" />
                <span>Ready in {turnaround}</span>
              </span>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider">Per Unit Estimate</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-black text-white sm:text-4xl">₹{minUnitEst} – ₹{maxUnitEst}</span>
                <span className="text-sm text-slate-400">/ {product.unit}</span>
              </div>

              <div className="mt-4 rounded-xl bg-white/5 p-3.5 border border-white/10">
                <p className="text-xs text-slate-400">Total Project Bracket for {quantity.toLocaleString()} units:</p>
                <p className="mt-0.5 text-xl font-extrabold text-white">₹{totalMinEst.toLocaleString()} – ₹{totalMaxEst.toLocaleString()}*</p>
              </div>
            </div>

            {/* Included Guarantees */}
            <ul className="mt-6 space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Free Digital Sample PDF Proof before printing</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Zero Plate / Screen charges on bulk orders</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Direct regional factory dispatch from Guwahati</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10">
            <Link
              href={`/request-a-quote/?type=${selectedProduct}&quantity=${quantity}`}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(2,132,199,0.5)] transition hover:bg-accent-hover hover:text-white"
            >
              <span>Lock in This Formal Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-2 text-center text-[10px] text-slate-500">
              *Taxes and courier extra. Exact rate finalized upon artwork and RFID specification confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
