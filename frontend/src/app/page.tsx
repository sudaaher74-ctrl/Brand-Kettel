import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { HOME_FAQS } from '@/lib/faqs';
import { faqPageJsonLd, jsonLdScript } from '@/lib/structuredData';

export const revalidate = 60;

export default function HomePage() {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#18181B] selection:bg-[#A07A4F] selection:text-white overflow-hidden">
      {/* FAQPage Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(HOME_FAQS, '/'))}
      />

      {/* ─────────────────────────────────────────────────────────────
          01. HERO SECTION (Identical layout to reference site)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[820px] px-5 pb-20 pt-32 lg:min-h-[96svh] lg:px-10 lg:pb-12 lg:pt-32 flex flex-col justify-between">
        
        {/* Giant Watermark Typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[14%] overflow-hidden text-center font-display text-[15vw] lg:text-[18vw] leading-none text-[#18181B]/[0.035] select-none font-bold whitespace-nowrap tracking-tight"
        >
          BUILDSPACES
        </div>

        <div className="relative mx-auto grid h-full w-full max-w-[1480px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 my-auto">
          
          {/* Left Column: Eyebrow + Monumental Headline + Value Proposition */}
          <div className="z-10 order-2 lg:order-1 lg:col-span-4 lg:self-end lg:pb-16">
            <p className="max-w-xs border-l border-[#18181B] pl-4 text-[10px] font-semibold uppercase leading-5 tracking-[0.22em] text-[#18181B]">
              Commercial Fit-Outs · Precision Joinery · Turnkey Execution
            </p>
            
            <h1 className="mt-7 max-w-md text-6xl leading-[0.84] sm:text-7xl lg:text-[5.5rem] font-light text-[#18181B]">
              Spaces,<br />
              <em className="font-normal font-serif italic text-[#A07A4F]">crafted</em> to an<br />
              exact standard.
            </h1>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              Where sophisticated architecture meets German precision engineering—turnkey commercial environments for flagship luxury retail, corporate headquarters, and landmark hospitality across India.
            </p>
          </div>

          {/* Center Column: Portrait Project Showcase + Circular Floating Explore Stamp */}
          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:col-span-5 lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden bg-[#EFECE6] relative shadow-2xl group">
              <Image
                src="/imgs/commercial/gucci.webp"
                alt="Brand Kettle Flagship Retail & Luxury Commercial Fit-Out"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
              />
            </div>

            {/* Circular Floating Explore Stamp */}
            <a
              href="#philosophy"
              aria-label="Scroll to philosophy"
              className="group absolute -bottom-8 right-4 lg:-right-7 size-28 sm:size-32 rounded-full bg-[#18181B] text-[#FAF8F5] shadow-2xl hover:bg-[#A07A4F] transition-all duration-300 flex flex-col items-center justify-center text-[10px] uppercase font-bold tracking-[0.2em] cursor-pointer"
            >
              <span>Explore</span>
              <ArrowDown className="size-4 mt-1 transition-transform group-hover:translate-y-1 text-[#FAF8F5]" />
            </a>
          </div>

          {/* Right Column: Joinery Detail Tile + Technical Specifications */}
          <div className="order-3 hidden lg:col-span-3 lg:block lg:self-end lg:pb-16">
            <div className="relative ml-auto aspect-square max-w-64 overflow-hidden bg-[#EFECE6] border border-[#18181B]/10 group">
              <Image
                src="/imgs/commercial/brandkettle1.jpg"
                alt="Brand Kettle Architectural Joinery Detail Specification"
                fill
                sizes="256px"
                className="h-full w-full object-cover scale-125 transition-transform duration-700 group-hover:scale-150"
              />
              <span className="absolute bottom-3 left-3 bg-[#FAF8F5]/95 backdrop-blur-sm px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#18181B] border border-[#18181B]/10">
                Detail / 01—24 · Joinery Spec
              </span>
            </div>

            <div className="mt-12 text-right text-[10px] uppercase tracking-[0.2em]">
              <p className="font-semibold text-[#18181B]">Engineered for commerce</p>
              <p className="mt-2 text-[#71717A]">Accuracy / tolerance / finish</p>
              <p className="mt-2 font-mono text-[#A07A4F] font-medium">120+ Spaces Delivered Pan-India</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          02. SECTION 01 / PHILOSOPHY (Identical layout to reference site)
          ───────────────────────────────────────────────────────────── */}
      <section id="philosophy" className="mx-auto grid max-w-[1480px] gap-12 border-t border-[#18181B]/15 px-5 py-24 lg:grid-cols-12 lg:px-10 lg:py-36">
        <div className="lg:col-span-2">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F]">
            01 / Philosophy
          </p>
        </div>

        <div className="lg:col-span-6">
          <h2 className="text-6xl leading-[0.9] lg:text-8xl font-light text-[#18181B]">
            Precision is<br />
            <em className="font-normal font-serif italic text-[#A07A4F]">our luxury.</em>
          </h2>
        </div>

        <div className="max-w-xl lg:col-span-4 lg:pt-16">
          <p className="font-display text-3xl leading-tight lg:text-4xl text-[#18181B] font-light">
            Luxury in commercial fit-outs isn’t only about how a space looks. It is about how precisely it is engineered and executed.
          </p>
          <p className="mt-8 text-sm leading-7 text-[#71717A] font-light">
            Our delivery model unites experienced architectural design with in-house German machinery and rigorous civil execution. This allows us to achieve exceptional structural consistency, strict schedule compliance, and immaculate detailing across every square foot.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          03. THE MAKING OF PRECISION (4 CAD Blueprint Cards - Deep Contrast)
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#121214] py-20 text-[#F4F4F5] lg:py-28">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
          
          {/* Header Grid */}
          <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C5A880] lg:col-span-3">
              The making of precision
            </p>
            <h2 className="text-5xl leading-[0.95] lg:col-span-6 lg:text-7xl font-light">
              Engineering, made <em className="font-serif italic font-normal text-[#C5A880]">visible.</em>
            </h2>
            <p className="max-w-sm text-sm leading-6 text-white/50 lg:col-span-3 font-light">
              Tolerance / consistency / control.<br />
              Every millimeter resolved before site execution.
            </p>
          </div>

          {/* 4 CAD Blueprint Cards Grid */}
          <div className="grid overflow-hidden rounded-3xl border border-white/15 md:grid-cols-2">
            
            {/* Card 1: German Machinery & Joinery */}
            <article className="group border-b border-white/15 p-5 md:odd:border-r lg:p-7 bg-[#121214] hover:bg-[#18181C] transition-colors duration-500">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                <span className="text-[#C5A880]">01 — 04</span>
                <span className="text-white/40">CUT / 01</span>
              </div>

              {/* Technical CAD SVG Drawing */}
              <div className="mt-5 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-500 group-hover:bg-white/[0.05]">
                <svg viewBox="0 0 320 190" aria-hidden="true" className="h-full w-full">
                  <defs>
                    <pattern id="grid-cad-0" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="320" height="190" fill="url(#grid-cad-0)" />
                  <g fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1">
                    <path d="M52 130h216M72 130V78h176v52M92 78V55h136v23M110 55l8-16h84l8 16M62 148h196" />
                    <path d="M110 39v-14m100 30V25M44 78h32m168 0h32" strokeDasharray="4 5" />
                    <circle cx="160" cy="92" r="22" />
                    <path d="M145 92h30M160 77v30" />
                  </g>
                  <text x="14" y="20" fill="#C5A880" fontFamily="monospace" fontSize="8" letterSpacing="1">AXIS / 01</text>
                  <text x="256" y="176" fill="#C5A880" fontFamily="monospace" fontSize="8" letterSpacing="1">REV. A</text>
                </svg>
              </div>

              <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_1.15fr]">
                <h3 className="text-2xl leading-tight lg:text-3xl font-light text-white">
                  German Machinery &amp; Joinery
                </h3>
                <p className="text-sm leading-6 text-white/60 font-light">
                  Precise CNC cutting, drilling, edge processing and architectural millwork manufactured in our owned facility.
                </p>
              </div>
            </article>

            {/* Card 2: Precision Modular Manufacturing */}
            <article className="group border-b border-white/15 p-5 md:odd:border-r lg:p-7 bg-[#121214] hover:bg-[#18181C] transition-colors duration-500">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                <span className="text-[#C5A880]">02 — 04</span>
                <span className="text-white/40">ALIGN / 02</span>
              </div>

              {/* Technical CAD SVG Drawing */}
              <div className="mt-5 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-500 group-hover:bg-white/[0.05]">
                <svg viewBox="0 0 320 190" aria-hidden="true" className="h-full w-full">
                  <defs>
                    <pattern id="grid-cad-1" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="320" height="190" fill="url(#grid-cad-1)" />
                  <g fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1">
                    <rect x="72" y="45" width="176" height="100" />
                    <rect x="88" y="59" width="144" height="72" strokeDasharray="4 4" />
                    <path d="M48 45h18m-18 100h18M54 45v100M72 158v16m176-16v16M72 166h176" />
                    <circle cx="160" cy="95" r="25" />
                    <path d="M122 95h76M160 57v76" />
                  </g>
                  <text x="14" y="20" fill="#C5A880" fontFamily="monospace" fontSize="8" letterSpacing="1">AXIS / 02</text>
                  <text x="256" y="176" fill="#C5A880" fontFamily="monospace" fontSize="8" letterSpacing="1">REV. A</text>
                </svg>
              </div>

              <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_1.15fr]">
                <h3 className="text-2xl leading-tight lg:text-3xl font-light text-white">
                  Precision Manufacturing
                </h3>
                <p className="text-sm leading-6 text-white/60 font-light">
                  Strict tolerance control and shop drawing validation ensuring seamless site assembly across commercial projects.
                </p>
              </div>
            </article>

            {/* Card 3: Refined Architectural Finishing */}
            <article className="group border-b border-white/15 p-5 md:odd:border-r lg:p-7 bg-[#121214] hover:bg-[#18181C] transition-colors duration-500">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                <span className="text-[#C5A880]">03 — 04</span>
                <span className="text-white/40">EDGE / 03</span>
              </div>

              {/* Technical CAD SVG Drawing */}
              <div className="mt-5 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-500 group-hover:bg-white/[0.05]">
                <svg viewBox="0 0 320 190" aria-hidden="true" className="h-full w-full">
                  <defs>
                    <pattern id="grid-cad-2" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="320" height="190" fill="url(#grid-cad-2)" />
                  <g fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1">
                    <path d="M63 135l45-88h135l14 20-45 88H77z" />
                    <path d="M108 47l14 20h135M77 155l45-88M212 155l45-88" />
                    <path d="M95 112h126M102 98h126M109 84h126" strokeDasharray="3 4" />
                    <circle cx="243" cy="67" r="5" />
                  </g>
                  <text x="14" y="20" fill="#C5A880" fontFamily="monospace" fontSize="8" letterSpacing="1">AXIS / 03</text>
                  <text x="256" y="176" fill="#C5A880" fontFamily="monospace" fontSize="8" letterSpacing="1">REV. A</text>
                </svg>
              </div>

              <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_1.15fr]">
                <h3 className="text-2xl leading-tight lg:text-3xl font-light text-white">
                  Refined Finishing
                </h3>
                <p className="text-sm leading-6 text-white/60 font-light">
                  Hand-selected veneers, acoustic slatted paneling, metal cladding, and exacting surface finishes.
                </p>
              </div>
            </article>

            {/* Card 4: Turnkey Civil Execution & MEP */}
            <article className="group border-b border-white/15 p-5 md:odd:border-r lg:p-7 bg-[#121214] hover:bg-[#18181C] transition-colors duration-500">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                <span className="text-[#C5A880]">04 — 04</span>
                <span className="text-white/40">LOAD / 04</span>
              </div>

              {/* Technical CAD SVG Drawing */}
              <div className="mt-5 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-500 group-hover:bg-white/[0.05]">
                <svg viewBox="0 0 320 190" aria-hidden="true" className="h-full w-full">
                  <defs>
                    <pattern id="grid-cad-3" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="320" height="190" fill="url(#grid-cad-3)" />
                  <g fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1">
                    <path d="M58 137h204M78 137V66h164v71M96 66l16-20h96l16 20M104 137v-32h112v32" />
                    <path d="M160 23v65m-8-8 8 8 8-8M80 154v16m160-16v16M80 162h160" />
                    <path d="M62 106h196" strokeDasharray="4 5" />
                  </g>
                  <text x="14" y="20" fill="#C5A880" fontFamily="monospace" fontSize="8" letterSpacing="1">AXIS / 04</text>
                  <text x="256" y="176" fill="#C5A880" fontFamily="monospace" fontSize="8" letterSpacing="1">REV. A</text>
                </svg>
              </div>

              <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_1.15fr]">
                <h3 className="text-2xl leading-tight lg:text-3xl font-light text-white">
                  Turnkey Civil Execution
                </h3>
                <p className="text-sm leading-6 text-white/60 font-light">
                  Complete MEP integration, HVAC, fire fighting, civil finishing and timely handover across 10+ metros.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          04. SECTION 02 / REALIZATIONS (3-Column Staggered Portfolio Showcase)
          ───────────────────────────────────────────────────────────── */}
      <section id="collection" className="mx-auto max-w-[1480px] px-5 py-24 lg:px-10 lg:py-36">
        
        {/* Header Grid */}
        <div className="mb-16 grid items-end border-b border-[#18181B]/15 pb-7 md:grid-cols-12">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F] md:col-span-3">
            02 / Realizations
          </p>
          <h2 className="mt-4 text-6xl leading-none md:col-span-6 md:mt-0 lg:text-8xl font-light text-[#18181B]">
            Spaces built for<br />
            <em className="font-normal font-serif italic text-[#A07A4F]">enduring impact.</em>
          </h2>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-[#71717A] md:col-span-3 md:block font-light">
            Flagship Retail.<br />
            Corporate Workspaces.<br />
            Luxury Lounges.
          </p>
        </div>

        {/* 3 Staggered Columns Grid */}
        <div className="grid gap-6 md:grid-cols-12">
          
          {/* Column 1: Retail & Luxury Flagships */}
          <article className="md:col-span-5">
            <Link href="/portfolio/gucci-flagship" className="group block">
              <div className="relative overflow-hidden aspect-[4/5] w-full bg-[#EFECE6]">
                <Image
                  src="/imgs/commercial/gucci.webp"
                  alt="Gucci Flagship Retail Interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                />
                <span className="absolute left-4 top-4 bg-[#FAF8F5] px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] border border-[#18181B]/10">
                  FIG. 01
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-5 border-t border-[#18181B]/15 pt-4">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                    Retail &amp; Jewellery Flagships
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#71717A] font-light">
                    Flagship stores for global luxury brands and premier jewellers with bespoke security vitrines, lighting, and facade engineering (Gucci, PNG Jewellers, GIVA).
                  </p>
                </div>
                <ArrowRight className="mt-2 size-5 shrink-0 text-[#A07A4F] transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          </article>

          {/* Column 2: Corporate Workspaces & HQs (Staggered Down) */}
          <article className="md:col-span-4 md:mt-28">
            <Link href="/portfolio/and-work-coworking" className="group block">
              <div className="relative overflow-hidden aspect-[4/5] w-full bg-[#EFECE6]">
                <Image
                  src="/imgs/commercial/and-work-faridabad-coworking.jpg"
                  alt="&Work Coworking Corporate Office Fit-Out"
                  fill
                  sizes="(max-width: 768px) 100vw, 34vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                />
                <span className="absolute left-4 top-4 bg-[#FAF8F5] px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] border border-[#18181B]/10">
                  FIG. 02
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-5 border-t border-[#18181B]/15 pt-4">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                    Corporate Workspaces
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#71717A] font-light">
                    High-performance enterprise headquarters, executive boardrooms, and collaborative coworking hubs (&amp;Work, Nanokirti, Corporate Suites).
                  </p>
                </div>
                <ArrowRight className="mt-2 size-5 shrink-0 text-[#A07A4F] transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          </article>

          {/* Column 3: Hospitality & Dining Environments (Staggered Further) */}
          <article className="md:col-span-3 md:mt-56">
            <Link href="/portfolio/havana-lounge-bareilly" className="group block">
              <div className="relative overflow-hidden aspect-[4/5] w-full bg-[#EFECE6]">
                <Image
                  src="/imgs/commercial/havana-lounge-bareilly-1.jpg"
                  alt="Havana Lounge Bareilly Luxury Hospitality"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                />
                <span className="absolute left-4 top-4 bg-[#FAF8F5] px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] border border-[#18181B]/10">
                  FIG. 03
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-5 border-t border-[#18181B]/15 pt-4">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                    Hospitality &amp; Dining
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#71717A] font-light">
                    Atmospheric restaurants, signature dining lounges, and boutique hotels with ambient acoustics and custom woodwork (Havana Lounge, Ramada Encore).
                  </p>
                </div>
                <ArrowRight className="mt-2 size-5 shrink-0 text-[#A07A4F] transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          </article>

        </div>

        {/* Secondary 2-Column Realization Cards */}
        <div className="mt-16 grid border-t border-[#18181B]/15 sm:grid-cols-2">
          
          <div className="border-b border-[#18181B]/15 py-10 sm:pr-12 sm:odd:border-r">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A07A4F] block mb-2">04 / RESIDENCES</span>
            <h3 className="text-3xl font-light text-[#18181B]">Luxury Residential Interiors</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#71717A] font-light">
              Bespoke private estates, luxury villas, and penthouse residences designed with custom joinery, integrated lighting, and Italian marble finishes (Taksha, Signature Residences).
            </p>
            <Link href="/residential-interiors" className="inline-flex items-center gap-2 mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#A07A4F] hover:text-[#18181B] transition-colors">
              <span>Explore Residential</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="border-b border-[#18181B]/15 py-10 sm:even:pl-12">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A07A4F] block mb-2">05 / MANUFACTURING</span>
            <h3 className="text-3xl font-light text-[#18181B]">Custom Architectural Joinery</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#71717A] font-light">
              In-house manufactured architectural partitions, reception desks, executive conference tables, wall cladding, and acoustic systems built to custom project drawings.
            </p>
            <Link href="/custom-furniture" className="inline-flex items-center gap-2 mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#A07A4F] hover:text-[#18181B] transition-colors">
              <span>Explore Millwork</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          05. SECTION 03 / CAPABILITIES (Scale & Sectors Table on Linen)
          ───────────────────────────────────────────────────────────── */}
      <section id="capabilities" className="bg-[#F2EDE4] py-24 lg:py-36 text-[#18181B]">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
          
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F]">
                03 / Capabilities
              </p>
            </div>
            <h2 className="text-6xl leading-[0.9] lg:col-span-6 lg:text-8xl font-light text-[#18181B]">
              Commercial fit-outs for<br />
              <em className="font-normal font-serif italic text-[#A07A4F]">every scale.</em>
            </h2>
            <p className="max-w-xl self-end text-sm leading-7 text-[#71717A] font-light lg:col-span-4">
              Our capabilities extend nationwide. From bespoke 2,500 sq.ft luxury boutiques to 100,000+ sq.ft corporate campuses—with the integrated manufacturing backbone for rapid rollout.
            </p>
          </div>

          {/* 4 Interactive Row Articles with Hover Arrow Translation */}
          <div className="mt-20 grid gap-x-10 border-t border-[#18181B]/15 md:grid-cols-2">
            
            <article className="group grid grid-cols-[3rem_1fr_auto] items-start border-b border-[#18181B]/15 py-8 transition-colors hover:border-[#A07A4F]">
              <span className="font-mono text-[10px] text-[#A07A4F] pt-1">01</span>
              <div>
                <h3 className="text-3xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                  Corporate Offices &amp; Campuses
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#71717A] font-light">
                  Workstations, executive suites, conference facilities, MEP systems, acoustic ceilings, and collaborative enterprise work hubs.
                </p>
              </div>
              <ArrowRight className="mt-2 size-4 text-[#A07A4F] transition-transform group-hover:translate-x-2" />
            </article>

            <article className="group grid grid-cols-[3rem_1fr_auto] items-start border-b border-[#18181B]/15 py-8 transition-colors hover:border-[#A07A4F]">
              <span className="font-mono text-[10px] text-[#A07A4F] pt-1">02</span>
              <div>
                <h3 className="text-3xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                  Retail Flagships &amp; Jewellery
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#71717A] font-light">
                  Turnkey flagship stores engineered for high footfall, secure vaulting, high-CRI color-accurate lighting, and luxury vitrines.
                </p>
              </div>
              <ArrowRight className="mt-2 size-4 text-[#A07A4F] transition-transform group-hover:translate-x-2" />
            </article>

            <article className="group grid grid-cols-[3rem_1fr_auto] items-start border-b border-[#18181B]/15 py-8 transition-colors hover:border-[#A07A4F]">
              <span className="font-mono text-[10px] text-[#A07A4F] pt-1">03</span>
              <div>
                <h3 className="text-3xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                  High-End Hospitality &amp; Dining
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#71717A] font-light">
                  Complete interior execution for signature dining lounges, bars, boutique hotels, banquet halls, and public reception lobbies.
                </p>
              </div>
              <ArrowRight className="mt-2 size-4 text-[#A07A4F] transition-transform group-hover:translate-x-2" />
            </article>

            <article className="group grid grid-cols-[3rem_1fr_auto] items-start border-b border-[#18181B]/15 py-8 transition-colors hover:border-[#A07A4F]">
              <span className="font-mono text-[10px] text-[#A07A4F] pt-1">04</span>
              <div>
                <h3 className="text-3xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                  Pan-India Rollouts &amp; Turnkey Execution
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#71717A] font-light">
                  Consistent large-volume manufacturing and multi-site project governance for enterprises and brands scaling across Indian cities.
                </p>
              </div>
              <ArrowRight className="mt-2 size-4 text-[#A07A4F] transition-transform group-hover:translate-x-2" />
            </article>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          06. SECTION 04 / PROCESS (6-Stage Architectural Delivery Grid)
          ───────────────────────────────────────────────────────────── */}
      <section id="process" className="mx-auto max-w-[1480px] px-5 py-24 lg:px-10 lg:py-36">
        
        <div className="grid gap-10 lg:grid-cols-12">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F] lg:col-span-2">
            04 / Process
          </p>
          <div className="lg:col-span-7">
            <h2 className="text-6xl leading-[0.88] lg:text-8xl font-light text-[#18181B]">
              Understand. Design.<br />
              <em className="font-normal font-serif italic text-[#A07A4F]">Engineer. Deliver.</em>
            </h2>
          </div>
          <p className="max-w-md self-end text-sm leading-7 text-[#71717A] font-light lg:col-span-3">
            We work closely with corporate leaders, architects, retail directors, and developers to translate requirements into precisely executed physical spaces.
          </p>
        </div>

        {/* 6 Step Cards */}
        <div className="mt-20 grid border-t border-[#18181B]/15 md:grid-cols-2 lg:grid-cols-3">
          
          <article className="group min-h-64 border-b border-[#18181B]/15 p-7 md:odd:border-r lg:border-r lg:nth-[3n]:border-r-0 hover:bg-[#F2EDE4]/40 transition-colors">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A07A4F]">
              <span>01</span>
              <span className="h-px flex-1 origin-left bg-[#18181B]/20 transition-transform group-hover:scale-x-75" />
            </div>
            <h3 className="mt-12 text-4xl font-light text-[#18181B]">Consult</h3>
            <p className="mt-4 text-sm leading-7 text-[#71717A] font-light">
              We evaluate operational requirements, spatial circulation, acoustic specifications, and brand guidelines to establish an objective scope.
            </p>
          </article>

          <article className="group min-h-64 border-b border-[#18181B]/15 p-7 md:odd:border-r lg:border-r lg:nth-[3n]:border-r-0 hover:bg-[#F2EDE4]/40 transition-colors">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A07A4F]">
              <span>02</span>
              <span className="h-px flex-1 origin-left bg-[#18181B]/20 transition-transform group-hover:scale-x-75" />
            </div>
            <h3 className="mt-12 text-4xl font-light text-[#18181B]">Design</h3>
            <p className="mt-4 text-sm leading-7 text-[#71717A] font-light">
              Our studio develops 3D photorealistic visualizations, detailed space planning, and validated material specifications.
            </p>
          </article>

          <article className="group min-h-64 border-b border-[#18181B]/15 p-7 md:odd:border-r lg:border-r lg:nth-[3n]:border-r-0 hover:bg-[#F2EDE4]/40 transition-colors">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A07A4F]">
              <span>03</span>
              <span className="h-px flex-1 origin-left bg-[#18181B]/20 transition-transform group-hover:scale-x-75" />
            </div>
            <h3 className="mt-12 text-4xl font-light text-[#18181B]">Engineer</h3>
            <p className="mt-4 text-sm leading-7 text-[#71717A] font-light">
              Every detail is modeled into shop drawings with MEP integration, HVAC coordination, fire clearance, and structural tolerances.
            </p>
          </article>

          <article className="group min-h-64 border-b border-[#18181B]/15 p-7 md:odd:border-r lg:border-r lg:nth-[3n]:border-r-0 hover:bg-[#F2EDE4]/40 transition-colors">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A07A4F]">
              <span>04</span>
              <span className="h-px flex-1 origin-left bg-[#18181B]/20 transition-transform group-hover:scale-x-75" />
            </div>
            <h3 className="mt-12 text-4xl font-light text-[#18181B]">Manufacture</h3>
            <p className="mt-4 text-sm leading-7 text-[#71717A] font-light">
              Advanced German CNC machinery and skilled joinery craftsmen fabricate architectural millwork, fixtures, and vitrines off-site.
            </p>
          </article>

          <article className="group min-h-64 border-b border-[#18181B]/15 p-7 md:odd:border-r lg:border-r lg:nth-[3n]:border-r-0 hover:bg-[#F2EDE4]/40 transition-colors">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A07A4F]">
              <span>05</span>
              <span className="h-px flex-1 origin-left bg-[#18181B]/20 transition-transform group-hover:scale-x-75" />
            </div>
            <h3 className="mt-12 text-4xl font-light text-[#18181B]">Finish &amp; QA</h3>
            <p className="mt-4 text-sm leading-7 text-[#71717A] font-light">
              Rigorous on-site civil execution, milestone timeline tracking, edge alignments, and multi-stage quality assurance audits.
            </p>
          </article>

          <article className="group min-h-64 border-b border-[#18181B]/15 p-7 md:odd:border-r lg:border-r lg:nth-[3n]:border-r-0 hover:bg-[#F2EDE4]/40 transition-colors">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A07A4F]">
              <span>06</span>
              <span className="h-px flex-1 origin-left bg-[#18181B]/20 transition-transform group-hover:scale-x-75" />
            </div>
            <h3 className="mt-12 text-4xl font-light text-[#18181B]">Handover</h3>
            <p className="mt-4 text-sm leading-7 text-[#71717A] font-light">
              Our site engineers conduct full testing &amp; commissioning, snag-free sign-off, and handover of your space ready for business.
            </p>
          </article>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          07. THE PRECISION MINDSET (Deep Dark Contrast Banner)
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#121214] py-24 text-[#F4F4F5] lg:py-36">
        <div className="mx-auto grid max-w-[1480px] gap-16 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              Executed with technology. Perfected by craftsmanship.
            </p>
            <h2 className="mt-6 text-6xl leading-[0.88] lg:text-8xl font-light">
              Precision is not<br />
              a machine setting.<br />
              <em className="font-serif italic font-normal text-[#C5A880]">It is a mindset.</em>
            </h2>
          </div>

          <div className="self-end">
            <p className="font-display text-3xl leading-tight font-light text-white">
              Engineering gives us precision. Eight years of site delivery gives us judgment.
            </p>
            <p className="mt-7 leading-8 text-white/65 font-light">
              German manufacturing machinery delivers micron-level accuracy and repeatability, while our seasoned project managers ensure every installation meets the uncompromising visual, functional, and acoustic standards expected by India’s leading enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          08. SECTION 05 / THE BRAND KETTLE STANDARD (6 Specification Cards)
          ───────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1480px] px-5 py-24 lg:px-10 lg:py-36">
        
        <div className="flex items-end justify-between border-b border-[#18181B]/15 pb-5">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F]">
            05 / The Brand Kettle standard
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#71717A]">
            Specification BK—06
          </p>
        </div>

        <div className="mt-8 grid border-t border-[#18181B]/15 md:grid-cols-2 lg:grid-cols-3">
          
          <article className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">01</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Precision</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              Millimeter-accurate execution for cleaner reveals, true alignments, and seamless transitions.
            </p>
          </article>

          <article className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">02</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Consistency</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              The exact same uncompromising standard across a single boutique or a 20-store national rollout.
            </p>
          </article>

          <article className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">03</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Customisation</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              Every joinery detail, showcase, and partition engineered bespoke to your brand identity.
            </p>
          </article>

          <article className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">04</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Transparency</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              Itemized BOQs, transparent milestone schedules, and real-time weekly progress reports.
            </p>
          </article>

          <article className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">05</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Finish</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              Premium commercial-grade substrates, European hardware, and meticulous surface detailing.
            </p>
          </article>

          <article className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">06</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Reliability</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              120+ spaces delivered nationwide on budget and on schedule with post-delivery warranty support.
            </p>
          </article>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          09. EDITORIAL QUOTE BANNER (Centered Monograph on Linen)
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#F2EDE4] px-5 py-24 text-center lg:py-36 text-[#18181B]">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F]">
          Built for those who notice the details
        </p>
        <blockquote className="mx-auto mt-8 max-w-5xl font-display text-5xl leading-[0.95] lg:text-8xl font-light">
          “A perfectly aligned architectural reveal.<br />
          <em className="font-serif italic font-normal text-[#A07A4F]">A seamless joinery edge.</em><br />
          A space executed without compromise.”
        </blockquote>
        <p className="mx-auto mt-9 max-w-xl text-sm leading-7 text-[#71717A] font-light">
          These details may seem subtle. Together, they define the difference between a routine fit-out and an enduring architectural benchmark.
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. SECTION 06 / START A PROJECT CTA
          ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#18181B] py-24 text-[#FAF8F5] lg:py-32">
        <div className="mx-auto grid max-w-[1480px] items-end gap-12 px-5 lg:grid-cols-12 lg:px-10">
          
          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
              06 / Start a project
            </p>
            <h2 className="mt-6 text-6xl leading-[0.88] lg:text-8xl font-light">
              Tell us about<br />
              <em className="font-serif italic font-normal text-[#A07A4F]">your next space.</em>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-8 max-w-md text-sm leading-7 text-white/70 font-light">
              Flagship retail, corporate headquarters, hospitality, or multi-city commercial expansion—our engineering team is ready to review your floor plans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#FAF8F5] bg-transparent text-[#FAF8F5] hover:bg-[#FAF8F5] hover:text-[#18181B] h-12 px-7 text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
              >
                <span>Enquire now</span>
                <ArrowRight className="size-4" />
              </Link>
              
              <a
                href="https://wa.me/918959173790"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#A07A4F] bg-[#A07A4F] text-[#FAF8F5] hover:bg-[#FAF8F5] hover:text-[#18181B] hover:border-[#FAF8F5] h-12 px-7 text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
              >
                <span>WhatsApp: +91 89591 73790</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
