import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Ruler, Layers, Sparkles } from 'lucide-react';
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
          01. HERO SECTION (Differentiated Architectural Fit-Out Showcase)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[820px] px-5 pb-16 pt-32 lg:min-h-[96svh] lg:px-10 lg:pb-12 lg:pt-32 flex flex-col justify-between">
        
        {/* Giant Watermark Typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[14%] overflow-hidden text-center font-display text-[15vw] lg:text-[18vw] leading-none text-[#18181B]/[0.035] select-none font-bold whitespace-nowrap tracking-tight"
        >
          BUILDSPACES
        </div>

        <div className="relative mx-auto grid h-full w-full max-w-[1480px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 my-auto">
          
          {/* Left Column: Coordinates + Monumental Headline + Value Proposition */}
          <div className="z-10 order-2 lg:order-1 lg:col-span-4 lg:self-end lg:pb-16">
            
            <h1 className="max-w-md text-6xl leading-[0.84] sm:text-7xl lg:text-[5.5rem] font-light text-[#18181B]">
              Spaces,<br />
              <em className="font-normal font-serif italic text-[#A07A4F]">crafted</em> to an<br />
              exact standard.
            </h1>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              Where architectural vision meets German precision engineering—turnkey commercial environments for flagship luxury retail, corporate headquarters, and landmark hospitality across India.
            </p>

          </div>

          {/* Center Column: 4K Portrait Project Showcase + Floating Technical Annotations */}
          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:col-span-5 lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden bg-[#EFECE6] relative shadow-2xl group border border-[#18181B]/10">
              <Image
                src="/imgs/commercial/bk_hero_flagship.jpg"
                alt="Brand Kettle Flagship Commercial Interior Showcase with Fluted Travertine & Bronze Vitrines"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
              />

              {/* Floating Architectural Technical Spec Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="bg-[#18181B]/85 backdrop-blur-md px-3 py-1 text-[#FAF8F5] font-mono text-[9px] uppercase tracking-[0.2em] border border-white/10">
                  FLAGSHIP SPEC · BK-2026
                </span>
                <span className="hidden sm:inline-block bg-[#FAF8F5]/90 backdrop-blur-md px-2.5 py-1 text-[#18181B] font-mono text-[9px] uppercase tracking-[0.18em]">
                  ATRIUM AT ±0.5MM
                </span>
              </div>

              {/* Bottom Architectural Caption Plaque */}
              <div className="absolute bottom-4 left-4 right-24 sm:right-28 bg-[#18181B]/85 backdrop-blur-md p-3 text-white border border-white/10">
                <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#C5A880]">Turnkey Realization</p>
                <p className="text-xs font-light tracking-wide text-white/90 truncate">
                  Double-Height Fluted Travertine &amp; Bronze Architectural Joinery
                </p>
              </div>
            </div>

            {/* Circular Floating Explore Stamp */}
            <a
              href="#philosophy"
              aria-label="Scroll to philosophy"
              className="group absolute -bottom-7 right-3 lg:-right-7 size-28 sm:size-32 rounded-full bg-[#18181B] text-[#FAF8F5] shadow-2xl hover:bg-[#A07A4F] transition-all duration-300 flex flex-col items-center justify-center text-[10px] uppercase font-bold tracking-[0.2em] cursor-pointer"
            >
              <span>Explore</span>
              <ArrowDown className="size-4 mt-1 transition-transform group-hover:translate-y-1 text-[#FAF8F5]" />
            </a>
          </div>

          {/* Right Column: 4K Joinery Detail Tile + Technical Specifications */}
          <div className="order-3 hidden lg:col-span-3 lg:block lg:self-end lg:pb-16">
            <div className="relative ml-auto aspect-square max-w-64 overflow-hidden bg-[#EFECE6] border border-[#18181B]/10 shadow-lg group">
              <Image
                src="/imgs/commercial/bk_joinery_detail.jpg"
                alt="Brand Kettle Architectural Fluted Oak Joinery Detail"
                fill
                sizes="256px"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute bottom-3 left-3 bg-[#FAF8F5]/95 backdrop-blur-sm px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#18181B] border border-[#18181B]/10">
                MACRO / 01 · 5mm Reveal
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ARCHITECTURAL BENCHMARK METRICS RIBBON (Brand Kettle Provenance)
          ───────────────────────────────────────────────────────────── */}
      <section className="border-y border-[#18181B]/15 bg-[#FAF8F5]">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#18181B]/15">
            <div className="py-7 md:py-9 pr-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A07A4F] block">Portfolio Metric</span>
              <p className="mt-2 text-4xl lg:text-5xl font-light text-[#18181B]">120<span className="text-[#A07A4F]">+</span></p>
              <p className="mt-2 text-xs font-light text-[#71717A] leading-relaxed">Turnkey spaces commissioned across 10+ Indian metros</p>
            </div>
            <div className="py-7 md:py-9 px-0 md:px-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A07A4F] block">Direct Manufacturing</span>
              <p className="mt-2 text-4xl lg:text-5xl font-light text-[#18181B]">50k<span className="text-xl font-normal text-[#A07A4F]"> SQ FT</span></p>
              <p className="mt-2 text-xs font-light text-[#71717A] leading-relaxed">Owned 5-axis CNC joinery facility in Central India</p>
            </div>
            <div className="py-7 md:py-9 px-0 md:px-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A07A4F] block">Execution Velocity</span>
              <p className="mt-2 text-4xl lg:text-5xl font-light text-[#18181B]">27<span className="text-xl font-normal text-[#A07A4F]"> DAYS</span></p>
              <p className="mt-2 text-xs font-light text-[#71717A] leading-relaxed">Average rapid-track delivery for commercial flagships</p>
            </div>
            <div className="py-7 md:py-9 pl-0 md:pl-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A07A4F] block">Fabrication Standard</span>
              <p className="mt-2 text-4xl lg:text-5xl font-light text-[#18181B]">±0.5<span className="text-xl font-normal text-[#A07A4F]"> MM</span></p>
              <p className="mt-2 text-xs font-light text-[#71717A] leading-relaxed">Micron tolerance with laser-calibrated shop drawings</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CLIENT TRUST MARQUEE (Pan-India Corporate & Retail Flagships)
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-[#18181B]/15 bg-[#F2EDE4]/60 py-4 overflow-hidden">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-block size-1.5 rounded-full bg-[#A07A4F]" />
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#A07A4F]">
              TRUSTED BY LEADERS IN COMMERCE:
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#18181B]/80 font-medium">
            <span className="hover:text-[#A07A4F] transition-colors">GUCCI</span>
            <span className="text-[#18181B]/20">/</span>
            <span className="hover:text-[#A07A4F] transition-colors">PNG JEWELLERS</span>
            <span className="text-[#18181B]/20">/</span>
            <span className="hover:text-[#A07A4F] transition-colors">GIVA</span>
            <span className="text-[#18181B]/20">/</span>
            <span className="hover:text-[#A07A4F] transition-colors">RAMADA ENCORE</span>
            <span className="text-[#18181B]/20">/</span>
            <span className="hover:text-[#A07A4F] transition-colors">&amp;WORK COWORKING</span>
            <span className="text-[#18181B]/20">/</span>
            <span className="hover:text-[#A07A4F] transition-colors">PRET A MANGER</span>
            <span className="text-[#18181B]/20">/</span>
            <span className="hover:text-[#A07A4F] transition-colors">TAKSHA</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          02. SECTION 01 / PHILOSOPHY
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

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#18181B]/15 pt-6 text-xs font-mono uppercase tracking-[0.16em] text-[#18181B]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-[#A07A4F]" />
              <span>Zero-Snag Handover</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-[#A07A4F]" />
              <span>BIM LOD-400 Modeling</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          03. BUILDOS™ Turnkey Fit-Out & Engineering Protocol
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#121214] py-20 text-[#F4F4F5] lg:py-28">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
          
          {/* Header Grid */}
          <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#C5A880]/15 text-[#C5A880] font-mono text-[9px] uppercase tracking-[0.2em] mb-2 border border-[#C5A880]/30">
                <span className="size-1.5 rounded-full bg-[#C5A880]" />
                BuildOS™ Protocol
              </span>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C5A880]">
                Turnkey Engineering
              </p>
            </div>
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
                <span className="text-[#C5A880]">01 — 04 · MILLWORK</span>
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
                <div>
                  <h3 className="text-2xl leading-tight lg:text-3xl font-light text-white">
                    German Machinery &amp; Joinery
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-[9px] font-mono text-white/50">
                    <span className="border border-white/10 px-2 py-0.5">TOLERANCE ±0.5MM</span>
                    <span className="border border-white/10 px-2 py-0.5 text-[#C5A880]">5-AXIS CNC HOMAG</span>
                  </div>
                </div>
                <p className="text-sm leading-6 text-white/60 font-light">
                  Precise CNC cutting, drilling, edge processing and architectural millwork manufactured in our owned 50,000 sq ft facility.
                </p>
              </div>
            </article>

            {/* Card 2: Precision Modular Manufacturing */}
            <article className="group border-b border-white/15 p-5 md:odd:border-r lg:p-7 bg-[#121214] hover:bg-[#18181C] transition-colors duration-500">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                <span className="text-[#C5A880]">02 — 04 · FABRICATION</span>
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
                <div>
                  <h3 className="text-2xl leading-tight lg:text-3xl font-light text-white">
                    Precision Manufacturing
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-[9px] font-mono text-white/50">
                    <span className="border border-white/10 px-2 py-0.5">BIM LOD-400</span>
                    <span className="border border-white/10 px-2 py-0.5 text-[#C5A880]">CLASH DETECTION</span>
                  </div>
                </div>
                <p className="text-sm leading-6 text-white/60 font-light">
                  Strict tolerance control and shop drawing validation ensuring zero field errors during fast-track assembly.
                </p>
              </div>
            </article>

            {/* Card 3: Refined Architectural Finishing */}
            <article className="group border-b border-white/15 p-5 md:odd:border-r lg:p-7 bg-[#121214] hover:bg-[#18181C] transition-colors duration-500">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                <span className="text-[#C5A880]">03 — 04 · SURFACES</span>
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
                <div>
                  <h3 className="text-2xl leading-tight lg:text-3xl font-light text-white">
                    Refined Architectural Finishing
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-[9px] font-mono text-white/50">
                    <span className="border border-white/10 px-2 py-0.5">ACOUSTIC NRC 0.85</span>
                    <span className="border border-white/10 px-2 py-0.5 text-[#C5A880]">BRUSHED BRONZE</span>
                  </div>
                </div>
                <p className="text-sm leading-6 text-white/60 font-light">
                  Hand-selected veneers, acoustic slatted paneling, bronze vitrines, and exacting surface reveals.
                </p>
              </div>
            </article>

            {/* Card 4: Turnkey Civil Execution & MEP */}
            <article className="group border-b border-white/15 p-5 md:odd:border-r lg:p-7 bg-[#121214] hover:bg-[#18181C] transition-colors duration-500">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                <span className="text-[#C5A880]">04 — 04 · EXECUTION</span>
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
                <div>
                  <h3 className="text-2xl leading-tight lg:text-3xl font-light text-white">
                    Turnkey Civil Execution
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-[9px] font-mono text-white/50">
                    <span className="border border-white/10 px-2 py-0.5">MEP &amp; HVAC INTEGRATION</span>
                    <span className="border border-white/10 px-2 py-0.5 text-[#C5A880]">27-DAY FAST TRACK</span>
                  </div>
                </div>
                <p className="text-sm leading-6 text-white/60 font-light">
                  Complete MEP integration, HVAC, fire fighting, civil finishing and snag-free handover across 10+ metros.
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
        <div className="mb-12 grid items-end border-b border-[#18181B]/15 pb-7 md:grid-cols-12">
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

        {/* Architectural Sector Directory Ribbon */}
        <div className="mb-14 flex flex-wrap items-center gap-3 border-b border-[#18181B]/10 pb-6 text-[10px] font-mono uppercase tracking-[0.18em]">
          <span className="text-[#71717A] mr-2">FILTER BY SECTOR:</span>
          <Link
            href="/portfolio"
            className="px-3.5 py-1.5 rounded-full bg-[#18181B] text-[#FAF8F5] font-semibold transition-all hover:bg-[#A07A4F]"
          >
            All Sectors (120+)
          </Link>
          <Link
            href="/portfolio?sector=retail"
            className="px-3.5 py-1.5 rounded-full border border-[#18181B]/20 text-[#18181B] transition-all hover:border-[#A07A4F] hover:text-[#A07A4F]"
          >
            Luxury Retail Flagships
          </Link>
          <Link
            href="/portfolio?sector=corporate"
            className="px-3.5 py-1.5 rounded-full border border-[#18181B]/20 text-[#18181B] transition-all hover:border-[#A07A4F] hover:text-[#A07A4F]"
          >
            Corporate Workspaces
          </Link>
          <Link
            href="/portfolio?sector=hospitality"
            className="px-3.5 py-1.5 rounded-full border border-[#18181B]/20 text-[#18181B] transition-all hover:border-[#A07A4F] hover:text-[#A07A4F]"
          >
            Hospitality &amp; Dining
          </Link>
          <Link
            href="/portfolio?sector=joinery"
            className="px-3.5 py-1.5 rounded-full border border-[#18181B]/20 text-[#18181B] transition-all hover:border-[#A07A4F] hover:text-[#A07A4F]"
          >
            Direct Joinery Works
          </Link>
        </div>

        {/* 3 Staggered Columns Grid with 4K Interior Photography */}
        <div className="grid gap-8 md:grid-cols-12">
          
          {/* Column 1: Retail & Luxury Flagships (4K Emerald Marble Boutique) */}
          <article className="md:col-span-5">
            <Link href="/portfolio/gucci-flagship" className="group block">
              <div className="relative overflow-hidden aspect-[4/5] w-full bg-[#EFECE6] border border-[#18181B]/10 shadow-lg">
                <Image
                  src="/imgs/commercial/bk_realization_retail.jpg"
                  alt="Brand Kettle High-End Retail & Jewellery Flagship Boutique"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-[#FAF8F5]/95 backdrop-blur-sm px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] border border-[#18181B]/10 font-medium">
                    FIG. 01 / RETAIL
                  </span>
                  <span className="bg-[#18181B]/80 backdrop-blur-sm text-white px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em]">
                    3,400 SQ FT
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-[#18181B]/85 backdrop-blur-md px-3 py-2 text-white border border-white/10 opacity-90 transition-opacity group-hover:opacity-100">
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#C5A880]">Joinery Specification</p>
                  <p className="text-[11px] font-light text-white/90 truncate">Emerald Marble Wall &amp; Brushed Brass Vitrines</p>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-5 border-t border-[#18181B]/15 pt-4">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                    Retail &amp; Jewellery Flagships
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#71717A] font-light">
                    Flagship stores for luxury brands with bespoke security vitrines, high-CRI illumination, and architectural facade engineering (Gucci, PNG Jewellers, GIVA).
                  </p>
                  <div className="mt-3 flex items-center gap-3 font-mono text-[9px] text-[#A07A4F] uppercase tracking-[0.16em]">
                    <span>Precision CNC Vitrines</span>
                    <span>·</span>
                    <span>27-Day Handover</span>
                  </div>
                </div>
                <ArrowRight className="mt-2 size-5 shrink-0 text-[#A07A4F] transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          </article>

          {/* Column 2: Corporate Workspaces & HQs (4K Smoked Oak Boardroom) */}
          <article className="md:col-span-4 md:mt-24">
            <Link href="/portfolio/and-work-coworking" className="group block">
              <div className="relative overflow-hidden aspect-[4/5] w-full bg-[#EFECE6] border border-[#18181B]/10 shadow-lg">
                <Image
                  src="/imgs/commercial/bk_realization_office.jpg"
                  alt="Brand Kettle Corporate Headquarters and Executive Boardroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 34vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-[#FAF8F5]/95 backdrop-blur-sm px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] border border-[#18181B]/10 font-medium">
                    FIG. 02 / CORPORATE
                  </span>
                  <span className="bg-[#18181B]/80 backdrop-blur-sm text-white px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em]">
                    18,500 SQ FT
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-[#18181B]/85 backdrop-blur-md px-3 py-2 text-white border border-white/10 opacity-90 transition-opacity group-hover:opacity-100">
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#C5A880]">Acoustic &amp; Millwork Spec</p>
                  <p className="text-[11px] font-light text-white/90 truncate">Fluted Smoked Oak &amp; Double-Glazed Bronze Partitions</p>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-5 border-t border-[#18181B]/15 pt-4">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                    Corporate Workspaces
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#71717A] font-light">
                    High-performance enterprise headquarters, executive boardrooms, and collaborative coworking hubs with integrated MEP (&amp;Work, Nanokirti, Corporate Suites).
                  </p>
                  <div className="mt-3 flex items-center gap-3 font-mono text-[9px] text-[#A07A4F] uppercase tracking-[0.16em]">
                    <span>LOD-400 BIM</span>
                    <span>·</span>
                    <span>Acoustic NRC 0.85</span>
                  </div>
                </div>
                <ArrowRight className="mt-2 size-5 shrink-0 text-[#A07A4F] transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          </article>

          {/* Column 3: Hospitality & Dining Environments (4K Amber Onyx Lounge) */}
          <article className="md:col-span-3 md:mt-48">
            <Link href="/portfolio/havana-lounge-bareilly" className="group block">
              <div className="relative overflow-hidden aspect-[4/5] w-full bg-[#EFECE6] border border-[#18181B]/10 shadow-lg">
                <Image
                  src="/imgs/commercial/bk_hospitality_lounge.jpg"
                  alt="Brand Kettle Luxury Hospitality Lounge with Amber Onyx Bar"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-[#FAF8F5]/95 backdrop-blur-sm px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] border border-[#18181B]/10 font-medium">
                    FIG. 03 / LOUNGE
                  </span>
                  <span className="bg-[#18181B]/80 backdrop-blur-sm text-white px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em]">
                    6,200 SQ FT
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-[#18181B]/85 backdrop-blur-md px-3 py-2 text-white border border-white/10 opacity-90 transition-opacity group-hover:opacity-100">
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#C5A880]">Signature Surface Spec</p>
                  <p className="text-[11px] font-light text-white/90 truncate">Illuminated Onyx &amp; Coffered Walnut Millwork</p>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-5 border-t border-[#18181B]/15 pt-4">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors">
                    Hospitality &amp; Dining
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#71717A] font-light">
                    Atmospheric dining lounges, signature bars, and boutique hotels with ambient acoustics and custom woodwork (Havana Lounge, Ramada Encore).
                  </p>
                  <div className="mt-3 flex items-center gap-3 font-mono text-[9px] text-[#A07A4F] uppercase tracking-[0.16em]">
                    <span>Custom Millwork</span>
                    <span>·</span>
                    <span>Turnkey MEP</span>
                  </div>
                </div>
                <ArrowRight className="mt-2 size-5 shrink-0 text-[#A07A4F] transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          </article>

        </div>

        {/* Secondary 2-Column Realization Cards */}
        <div className="mt-20 grid border-t border-[#18181B]/15 sm:grid-cols-2">
          
          <div className="border-b border-[#18181B]/15 py-10 sm:pr-12 sm:odd:border-r">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A07A4F] block mb-2">04 / RESIDENCES</span>
            <h3 className="text-3xl font-light text-[#18181B]">Luxury Residential Interiors</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#71717A] font-light">
              Bespoke private estates, luxury villas, and penthouse residences designed with custom joinery, integrated lighting, and Italian marble finishes (Taksha, Signature Residences).
            </p>
            <Link href="/residential-interiors" className="inline-flex items-center gap-2 mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#A07A4F] hover:text-[#18181B] transition-colors font-medium">
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
            <Link href="/custom-furniture" className="inline-flex items-center gap-2 mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#A07A4F] hover:text-[#18181B] transition-colors font-medium">
              <span>Explore Millwork</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ARCHITECTURAL STANDARD MATRIX (Brand Kettle Differentiator)
          ───────────────────────────────────────────────────────────── */}
      <section className="border-y border-[#18181B]/15 bg-[#FAF8F5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
          
          <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-3">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A07A4F]">
                Standard of delivery
              </span>
            </div>
            <h2 className="text-5xl leading-[0.95] lg:col-span-6 lg:text-7xl font-light text-[#18181B]">
              Engineered standard vs <em className="font-serif italic font-normal text-[#A07A4F]">conventional.</em>
            </h2>
            <p className="max-w-sm text-sm leading-6 text-[#71717A] lg:col-span-3 font-light">
              Why India’s most demanding corporate directors and luxury retail brands mandate Brand Kettle BuildSpaces.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-[#18181B]/15 text-sm">
              <thead>
                <tr className="bg-[#F2EDE4] font-mono text-[10px] uppercase tracking-[0.2em] text-[#18181B]">
                  <th className="p-4 lg:p-6 border-b border-r border-[#18181B]/15 font-semibold">Delivery Parameter</th>
                  <th className="p-4 lg:p-6 border-b border-r border-[#18181B]/15 font-semibold text-[#A07A4F] bg-[#FAF8F5]">
                    ★ Brand Kettle BuildSpaces
                  </th>
                  <th className="p-4 lg:p-6 border-b border-[#18181B]/15 font-light text-[#71717A]">
                    Conventional Contractors
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#18181B]/15 font-light">
                <tr className="hover:bg-[#F2EDE4]/30 transition-colors">
                  <td className="p-4 lg:p-6 border-r border-[#18181B]/15 font-medium text-[#18181B]">
                    Joinery &amp; Millwork Fabrication
                  </td>
                  <td className="p-4 lg:p-6 border-r border-[#18181B]/15 bg-[#FAF8F5]/80">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-[#A07A4F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-medium text-[#18181B]">Direct 50,000 sq.ft 5-Axis Factory</strong>
                        <p className="mt-1 text-xs text-[#71717A]">Off-site CNC manufacturing, edge banding, zero site sawdust.</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 lg:p-6 text-[#71717A]">
                    Manual on-site carpentry with inconsistent cuts, high dust &amp; uneven reveals.
                  </td>
                </tr>

                <tr className="hover:bg-[#F2EDE4]/30 transition-colors">
                  <td className="p-4 lg:p-6 border-r border-[#18181B]/15 font-medium text-[#18181B]">
                    Timeline &amp; Penalty Guarantee
                  </td>
                  <td className="p-4 lg:p-6 border-r border-[#18181B]/15 bg-[#FAF8F5]/80">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-[#A07A4F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-medium text-[#18181B]">27-Day Fast-Track Delivery</strong>
                        <p className="mt-1 text-xs text-[#71717A]">Milestone-backed scheduling with daily digital site log updates.</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 lg:p-6 text-[#71717A]">
                    Frequent 60-90 day uncoordinated delays, rent leakage, and scope creep.
                  </td>
                </tr>

                <tr className="hover:bg-[#F2EDE4]/30 transition-colors">
                  <td className="p-4 lg:p-6 border-r border-[#18181B]/15 font-medium text-[#18181B]">
                    Technical Coordination (BIM &amp; MEP)
                  </td>
                  <td className="p-4 lg:p-6 border-r border-[#18181B]/15 bg-[#FAF8F5]/80">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-[#A07A4F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-medium text-[#18181B]">LOD-400 3D Modeling</strong>
                        <p className="mt-1 text-xs text-[#71717A]">Pre-fabrication clash detection for HVAC, electrical, and plumbing.</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 lg:p-6 text-[#71717A]">
                    Uncoordinated 2D paper drawings causing site clashes and costly rework.
                  </td>
                </tr>

                <tr className="hover:bg-[#F2EDE4]/30 transition-colors">
                  <td className="p-4 lg:p-6 border-r border-[#18181B]/15 font-medium text-[#18181B]">
                    Quality Tolerance &amp; Warranty
                  </td>
                  <td className="p-4 lg:p-6 border-r border-[#18181B]/15 bg-[#FAF8F5]/80">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-[#A07A4F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-medium text-[#18181B]">±0.5mm Tolerance · 5-Yr Warranty</strong>
                        <p className="mt-1 text-xs text-[#71717A]">Laser calibrated finishes, snag-free signoff, and SLA support.</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 lg:p-6 text-[#71717A]">
                    No tolerance standard, zero formal warranty, and difficult snag rectification.
                  </td>
                </tr>
              </tbody>
            </table>
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
