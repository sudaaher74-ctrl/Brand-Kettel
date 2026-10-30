'use client';

import { useState } from 'react';
import Link from 'next/link';

type ChecklistItem = {
  id: string;
  category: string;
  title: string;
  detail: string;
};

const CHECKLIST_ITEMS: ChecklistItem[] = [
  // Phase 1: Lease & Building Due Diligence
  {
    id: 'l1',
    category: 'Lease & Building Due Diligence',
    title: 'Verify Building Handover Condition',
    detail: 'Confirm whether property is delivered bare-shell (bare slab & structural columns) or warm-shell (pre-installed screed, perimeter AC lines, and primary electrical risers).',
  },
  {
    id: 'l2',
    category: 'Lease & Building Due Diligence',
    title: 'Review Landlord Tenant Fit-Out Manual',
    detail: 'Obtain building work-hour regulations, night-shift requirements, insurance criteria (CAR policy), and freight elevator load capacities.',
  },
  {
    id: 'l3',
    category: 'Lease & Building Due Diligence',
    title: 'Check Floor-to-Soffit Slab Heights',
    detail: 'Measure true slab-to-slab height to ensure sufficient clearance for HVAC ducts, electrical cable trays, and minimum 9.5 ft finished false ceiling height.',
  },
  {
    id: 'l4',
    category: 'Lease & Building Due Diligence',
    title: 'Assess Building Electrical Sanctioned Load',
    detail: 'Verify sanctioned power (KVA) per 1,000 sq ft and confirm automatic DG backup transition capacity.',
  },
  {
    id: 'l5',
    category: 'Lease & Building Due Diligence',
    title: 'Inspect Plumbing & Drainage Inlets',
    detail: 'Verify wet stack locations for executive washrooms, server room condenser drains, and employee cafeterias before locking the floor plan.',
  },

  // Phase 2: Space Planning & Density
  {
    id: 's1',
    category: 'Space Planning & Density',
    title: 'Model Seat Density Ratios',
    detail: 'Establish target density (e.g. 65 sq ft per seat for hybrid offices, 85 sq ft for enterprise executive floors) including circulation.',
  },
  {
    id: 's2',
    category: 'Space Planning & Density',
    title: 'Plan Natural Daylight Egress',
    detail: 'Keep open workstations along the perimeter glass window line, placing enclosed cabins and meeting rooms along the interior core.',
  },
  {
    id: 's3',
    category: 'Space Planning & Density',
    title: 'Acoustic Zoning & Neighborhood Planning',
    detail: 'Separate high-decibel phone call zones and cafeterias from quiet engineering and legal focus spaces.',
  },
  {
    id: 's4',
    category: 'Space Planning & Density',
    title: 'Design Multi-Functional Common Areas',
    detail: 'Incorporate cafeteria spaces that easily double as town hall presentation pavilions with integrated projector screens.',
  },

  // Phase 3: MEP & Technical Engineering
  {
    id: 'm1',
    category: 'MEP & Technical Engineering',
    title: 'Execute 3D MEP Clash Detection',
    detail: 'Overlay mechanical ductwork, fire sprinkler piping, and electrical cable trays in CAD to prevent ceiling collisions on site.',
  },
  {
    id: 'm2',
    category: 'MEP & Technical Engineering',
    title: 'Calculate Fresh Air CFM Requirements',
    detail: 'Ensure HVAC design provides minimum 20–30 CFM per occupant to maintain indoor CO2 levels below 800 ppm.',
  },
  {
    id: 'm3',
    category: 'MEP & Technical Engineering',
    title: 'Plan Dedicated Server Room Precision Cooling',
    detail: 'Specify redundant (N+1) inverter split units and fire-retardant gas suppression (FM200 or Novec 1230) for IT server racks.',
  },
  {
    id: 'm4',
    category: 'MEP & Technical Engineering',
    title: 'Specify Ergonomic Task Lighting (CRI > 85)',
    detail: 'Calibrate desktop illumination to 400–500 lux with minimal glare ratings (UGR < 19) to prevent eye strain.',
  },

  // Phase 4: Factory Joinery & Millwork
  {
    id: 'j1',
    category: 'Factory Joinery & Millwork',
    title: 'Insist on Factory-Edge-Banded Modular Furniture',
    detail: 'Eliminate on-site carpentry delays by ordering laser-cut, PUR-bonded modular workstations prefabricated in an industrial factory.',
  },
  {
    id: 'j2',
    category: 'Factory Joinery & Millwork',
    title: 'Verify Hardware Durability Standards',
    detail: 'Specify certified commercial hardware (Hafele, Hettich, or Blum) tested to 100,000+ open-close cycles.',
  },
  {
    id: 'j3',
    category: 'Factory Joinery & Millwork',
    title: 'Review Full-Scale Material Mockups',
    detail: 'Inspect physical mockups of executive desks, glass partition trims, and acoustic fabric paneling before mass manufacturing.',
  },

  // Phase 5: Snagging & Handover
  {
    id: 'h1',
    category: 'Testing, Snagging & Handover',
    title: 'Perform Electrical Distribution Board Thermal Scan',
    detail: 'Conduct infrared thermographic scans on live DB panels to detect loose terminations or phase overload hot spots.',
  },
  {
    id: 'h2',
    category: 'Testing, Snagging & Handover',
    title: 'Hydraulic Pressure Testing of Fire Sprinklers',
    detail: 'Witness pressure testing at 1.5x operating bar pressure before false ceilings are closed.',
  },
  {
    id: 'h3',
    category: 'Testing, Snagging & Handover',
    title: 'Compile As-Built Drawings & O&M Manuals',
    detail: 'Ensure the contractor hands over complete laminated As-Built CAD drawings, circuit schedules, and vendor warranty certificates.',
  },
];

export default function OfficePlanningChecklistPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Lease & Building Due Diligence',
    'Space Planning & Density',
    'MEP & Technical Engineering',
    'Factory Joinery & Millwork',
    'Testing, Snagging & Handover',
  ];

  const toggleCheck = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems =
    activeCategory === 'All'
      ? CHECKLIST_ITEMS
      : CHECKLIST_ITEMS.filter((i) => i.category === activeCategory);

  const completedCount = Object.values(checked).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);

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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>Corporate Checklist</span>
            <span className="text-[#18181B]/30">·</span>
            <span>Commercial Fit-Out Due Diligence</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-[#18181B] uppercase tracking-tight mb-4">
            Office Interior Planning Checklist
          </h1>
          <p className="text-sm sm:text-base text-[#71717A] font-light leading-relaxed">
            A comprehensive due-diligence framework for founders, Operations heads, and Corporate Real Estate teams planning an office fit-out in India.
          </p>
        </div>

        {/* Progress Tracker Strip */}
        <div className="max-w-4xl mx-auto bg-white border border-[#18181B]/15 p-6 mb-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#71717A] block mb-1">
              Planning Completion Progress
            </span>
            <div className="text-xl font-display text-[#18181B]">
              {completedCount} of {CHECKLIST_ITEMS.length} Tasks Verified ({progressPercent}%)
            </div>
          </div>
          <div className="w-full sm:w-64 bg-[#EFE9DF] h-3 rounded-full overflow-hidden">
            <div
              className="bg-[#A07A4F] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-all ${
                activeCategory === cat
                  ? 'bg-[#18181B] text-white border-[#18181B]'
                  : 'bg-white text-[#71717A] border-[#18181B]/15 hover:border-[#A07A4F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Checklist Cards List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-6 border transition-all cursor-pointer flex items-start gap-4 ${
                checked[item.id]
                  ? 'bg-[#FAF8F5] border-[#A07A4F]/40 opacity-70'
                  : 'bg-white border-[#18181B]/15 hover:border-[#A07A4F]'
              }`}
            >
              <input
                type="checkbox"
                checked={!!checked[item.id]}
                onChange={() => {}}
                className="w-5 h-5 accent-[#A07A4F] mt-1 shrink-0 cursor-pointer"
              />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A07A4F] font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className={`font-display font-medium text-lg uppercase ${checked[item.id] ? 'line-through text-[#71717A]' : 'text-[#18181B]'}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-[#71717A] font-light leading-relaxed mt-1">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="max-w-4xl mx-auto bg-[#121214] text-white p-8 sm:p-12 text-center">
          <h3 className="font-display font-light text-2xl text-white uppercase mb-2">
            Want an Expert Commercial Site Audit?
          </h3>
          <p className="text-sm text-white/70 font-light max-w-xl mx-auto mb-6">
            Our engineering directors can accompany you on commercial site visits to inspect MEP infrastructure, floor-to-slab clearance, and lease suitability before you sign.
          </p>
          <Link href="/contact" className="btn-accent inline-block">
            Book a Technical Site Audit
          </Link>
        </div>
      </div>
    </div>
  );
}

