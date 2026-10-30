'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FitOutCostCalculator() {
  const [area, setArea] = useState<number>(4000);
  const [spaceType, setSpaceType] = useState<string>('office');
  const [tier, setTier] = useState<string>('executive');
  const [city, setCity] = useState<string>('indore');

  // Baseline costs per sq ft (INR)
  const baseRates: Record<string, Record<string, number>> = {
    office: { standard: 2000, executive: 3000, luxury: 4500 },
    retail: { standard: 2400, executive: 3800, luxury: 5800 },
    jewellery: { standard: 3200, executive: 4800, luxury: 7500 },
    coworking: { standard: 1900, executive: 2800, luxury: 4200 },
  };

  // City Multipliers
  const cityMultipliers: Record<string, number> = {
    mumbai: 1.25,
    'delhi-ncr': 1.18,
    bengaluru: 1.15,
    hyderabad: 1.1,
    pune: 1.08,
    indore: 1.0,
    bareilly: 0.95,
  };

  const selectedBase = baseRates[spaceType]?.[tier] || 2800;
  const multiplier = cityMultipliers[city] || 1.0;
  const perSqFt = Math.round(selectedBase * multiplier);
  const totalCost = area * perSqFt;

  // Breakdown Percentages
  const civilCost = Math.round(totalCost * 0.28);
  const mepCost = Math.round(totalCost * 0.32);
  const joineryCost = Math.round(totalCost * 0.34);
  const prelimsCost = Math.round(totalCost * 0.06);

  // Timeline Estimate
  const daysEstimate = Math.max(25, Math.round(25 + (area / 1000) * 4));

  const formatLakhsCrores = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} L`;
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-medium text-[#A07A4F] hover:text-[#18181B] transition-colors"
          >
            ← Back to Resources
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>Planning Tool</span>
            <span className="text-[#18181B]/30">·</span>
            <span>2026 Industry Benchmarks</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-[#18181B] uppercase tracking-tight mb-4">
            Commercial Fit-Out Cost Estimator
          </h1>
          <p className="text-sm sm:text-base text-[#71717A] font-light leading-relaxed">
            Instant preliminary budgeting for corporate offices, retail flagships, jewellery showrooms, and co-working hubs across India.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-white border border-[#18181B]/15 p-8 sm:p-12 shadow-sm space-y-8">
            {/* Area Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-mono text-xs uppercase tracking-wider text-[#18181B] font-semibold">
                  Carpet Area (Square Feet)
                </label>
                <span className="font-display text-2xl text-[#A07A4F] font-light">
                  {area.toLocaleString()} sq ft
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[#A07A4F] h-2 bg-[#EFE9DF] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#71717A] mt-1">
                <span>1,000 sq ft</span>
                <span>25,000 sq ft</span>
                <span>50,000 sq ft</span>
              </div>
            </div>

            {/* Space Type */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-[#18181B] font-semibold mb-3">
                Space Typology
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'office', label: 'Corporate Office' },
                  { id: 'retail', label: 'Luxury Retail Store' },
                  { id: 'jewellery', label: 'Jewellery Showroom' },
                  { id: 'coworking', label: 'Co-Working Campus' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSpaceType(item.id)}
                    className={`py-3 px-4 border text-xs font-mono uppercase tracking-wider text-left transition-all ${
                      spaceType === item.id
                        ? 'bg-[#18181B] text-[#FAF8F5] border-[#18181B]'
                        : 'bg-[#FAF8F5] text-[#71717A] border-[#18181B]/15 hover:border-[#A07A4F]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Specification Tier */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-[#18181B] font-semibold mb-3">
                Specification Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'Standard', desc: 'Functional Grade' },
                  { id: 'executive', label: 'Executive', desc: 'Enterprise Grade' },
                  { id: 'luxury', label: 'Luxury', desc: 'Flagship Grade' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTier(item.id)}
                    className={`py-3 px-3 border text-left transition-all ${
                      tier === item.id
                        ? 'bg-[#18181B] text-[#FAF8F5] border-[#18181B]'
                        : 'bg-[#FAF8F5] text-[#71717A] border-[#18181B]/15 hover:border-[#A07A4F]'
                    }`}
                  >
                    <span className="block font-mono text-xs uppercase tracking-wider font-semibold">
                      {item.label}
                    </span>
                    <span className="text-[10px] opacity-75">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* City Selection */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-[#18181B] font-semibold mb-3">
                Project Location (City Index)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'indore', label: 'Indore (HQ)' },
                  { id: 'mumbai', label: 'Mumbai' },
                  { id: 'delhi-ncr', label: 'Delhi NCR' },
                  { id: 'bengaluru', label: 'Bengaluru' },
                  { id: 'hyderabad', label: 'Hyderabad' },
                  { id: 'pune', label: 'Pune' },
                  { id: 'bareilly', label: 'Bareilly' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCity(item.id)}
                    className={`py-2 px-3 border text-[11px] font-mono uppercase tracking-wider text-center transition-all ${
                      city === item.id
                        ? 'bg-[#A07A4F] text-white border-[#A07A4F]'
                        : 'bg-[#FAF8F5] text-[#71717A] border-[#18181B]/15 hover:border-[#A07A4F]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121214] text-white p-8 sm:p-10 border border-[#18181B]/20 shadow-2xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-2">
                Estimated Project Investment
              </span>
              <div className="font-display font-light text-4xl sm:text-5xl text-white mb-2">
                {formatLakhsCrores(totalCost)}
              </div>
              <p className="font-mono text-xs text-[#A07A4F] uppercase tracking-wider mb-8">
                Estimated Rate: ₹{perSqFt.toLocaleString()} / sq ft
              </p>

              {/* Component Breakdown */}
              <div className="border-t border-white/10 pt-6 space-y-3.5 text-xs">
                <div className="flex justify-between items-center text-white/80 font-light">
                  <span>Factory Joinery &amp; Millwork (34%):</span>
                  <span className="font-mono text-white">{formatLakhsCrores(joineryCost)}</span>
                </div>
                <div className="flex justify-between items-center text-white/80 font-light">
                  <span>MEP, HVAC &amp; Lighting (32%):</span>
                  <span className="font-mono text-white">{formatLakhsCrores(mepCost)}</span>
                </div>
                <div className="flex justify-between items-center text-white/80 font-light">
                  <span>Civil Works, Ceilings &amp; Floors (28%):</span>
                  <span className="font-mono text-white">{formatLakhsCrores(civilCost)}</span>
                </div>
                <div className="flex justify-between items-center text-white/80 font-light">
                  <span>Prelims, Testing &amp; Approvals (6%):</span>
                  <span className="font-mono text-white">{formatLakhsCrores(prelimsCost)}</span>
                </div>
              </div>

              {/* Estimated Timeline */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-white/50 block">
                    Estimated Handover
                  </span>
                  <span className="text-xl font-display text-[#A07A4F]">
                    ~{daysEstimate} Days
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/60">
                  Via Concurrent Prefabrication
                </span>
              </div>

              <div className="mt-8 pt-6">
                <Link
                  href="/contact"
                  className="block w-full py-4 text-center bg-[#A07A4F] text-white hover:bg-white hover:text-[#18181B] font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
                >
                  Request Official BOQ Quotation →
                </Link>
              </div>
            </div>

            {/* Transparent Disclaimer */}
            <div className="p-6 bg-[#EFE9DF] border border-[#18181B]/15 text-xs text-[#71717A] font-light leading-relaxed">
              <strong className="text-[#18181B] font-semibold block mb-1">
                Transparent Estimation Notice:
              </strong>
              These figures represent statistical industry benchmarks derived from delivered commercial projects across India. Actual project quotations vary based on structural ceiling heights, landlord warm-shell condition, chilled-water connections, and custom architectural finishes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
