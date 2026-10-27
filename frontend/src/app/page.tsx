import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Ruler, Layers, Sparkles } from 'lucide-react';
import { HOME_FAQS } from '@/lib/faqs';
import { faqPageJsonLd, jsonLdScript } from '@/lib/structuredData';
import TiltShowcaseCard from '@/components/ui/TiltShowcaseCard';
import RealizationCard from '@/components/home/RealizationCard';

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
          01. ARCHITECTURAL HERO SECTION (50/50 Balanced Split)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[820px] lg:min-h-[92svh] px-5 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-36 flex items-center">
        
        {/* Giant Watermark Typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[12%] overflow-hidden text-center font-display text-[15vw] lg:text-[17vw] leading-none text-[#18181B]/[0.03] select-none font-bold whitespace-nowrap tracking-tight"
        >
          BUILDSPACES
        </div>

        <div className="relative mx-auto grid w-full max-w-[1480px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 my-auto">
          
          {/* Left Column: Headline, Narrative & Direct Action CTAs */}
          <div className="z-10 order-2 lg:order-1 lg:col-span-7 xl:col-span-6">
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-light leading-[0.92] text-[#18181B] tracking-tight">
              Spaces,<br />
              <em className="font-normal font-serif italic text-[#A07A4F]">crafted</em> to an<br />
              exact standard.
            </h1>

            <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-[#71717A] font-light">
              Where architectural vision meets German precision engineering—turnkey commercial environments for flagship luxury retail, corporate headquarters, and landmark hospitality across India.
            </p>

            {/* Direct Architectural Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#18181B] text-[#FAF8F5] text-xs font-mono uppercase tracking-[0.18em] font-semibold hover:bg-[#A07A4F] transition-all shadow-sm"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-[#18181B]/20 text-[#18181B] text-xs font-mono uppercase tracking-[0.18em] font-medium hover:border-[#18181B] hover:bg-[#18181B]/5 transition-all"
              >
                <span>Start a Project</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Commanding 4K Architectural Showcase Frame */}
          <div className="relative order-1 mx-auto w-full max-w-lg lg:order-2 lg:col-span-5 xl:col-span-6 lg:max-w-none">
            <div className="relative ml-auto aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full max-w-xl overflow-hidden bg-[#EFECE6] border border-[#18181B]/15 shadow-2xl group">
              <Image
                src="/imgs/commercial/bk_hero_flagship.jpg"
                alt="Brand Kettle Flagship Commercial Interior Showcase with Fluted Travertine & Bronze Vitrines"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
              />
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
          02. SECTION 01 / PHILOSOPHY (with Cursor-Reactive 3D Showcase)
          ───────────────────────────────────────────────────────────── */}
      <section id="philosophy" className="mx-auto max-w-[1480px] px-5 py-24 lg:px-10 lg:py-36">
        
        {/* Top Header Row */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#18181B]/15 pb-10">
          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A07A4F]">
              01 / Philosophy
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.92] text-[#18181B] tracking-tight">
              Precision is<br />
              <em className="font-normal font-serif italic text-[#A07A4F]">our luxury.</em>
            </h2>
          </div>
        </div>

        {/* 2-Column Pairing: Cursor-Reactive 3D Tilt Frame + Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Cursor-Interactive Architectural Showcase */}
          <div className="lg:col-span-6 xl:col-span-5">
            <TiltShowcaseCard
              src="/imgs/commercial/bk_joinery_detail.jpg"
              alt="Brand Kettle Architectural Precision Millwork and Joinery Detail"
            />
          </div>

          {/* Right Column: Narrative & Technical Standards */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#18181B] font-light leading-snug">
              Luxury in commercial fit-outs isn’t only about how a space looks. It is about how precisely it is engineered and executed.
            </p>
            <p className="mt-8 text-base sm:text-lg leading-relaxed text-[#71717A] font-light max-w-xl">
              Our delivery model unites experienced architectural design with in-house German machinery and rigorous civil execution. This allows us to achieve exceptional structural consistency, strict schedule compliance, and immaculate detailing across every square foot.
            </p>

            {/* Quality Standard Badges */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#18181B]/15 pt-6 text-xs font-mono uppercase tracking-[0.16em] text-[#18181B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#A07A4F]" />
                <span>Zero-Snag Handover</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#A07A4F]" />
                <span>BIM LOD-400 Modeling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#A07A4F]" />
                <span>Owned 50k Sq.Ft Facility</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#A07A4F]" />
                <span>±0.5mm CNC Tolerance</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          03. SECTION 02 / REALIZATIONS (Architectural Portfolio Grid)
          ───────────────────────────────────────────────────────────── */}
      <section id="collection" className="mx-auto max-w-[1480px] border-t border-[#18181B]/15 px-5 py-24 lg:px-10 lg:py-36">
        
        {/* Header Grid */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#18181B]/15 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A07A4F] mb-3">
              <span className="w-5 h-px bg-[#A07A4F]" />
              <span>02 / Realizations</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.92] text-[#18181B] tracking-tight">
              Spaces built for<br />
              <em className="font-normal font-serif italic text-[#A07A4F]">enduring impact.</em>
            </h2>
          </div>
          <Link
            href="/portfolio"
            data-cursor-text="VIEW"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#18181B] hover:text-[#A07A4F] transition-colors font-medium border-b border-[#18181B]/20 pb-1 shrink-0"
          >
            <span>View All Realizations (120+)</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Column Interactive Architectural Realization Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          <RealizationCard
            number="01"
            category="Retail & Luxury"
            title="Retail & Jewellery Flagships"
            description="Flagship stores for luxury brands with bespoke security vitrines, high-CRI illumination, and architectural facade engineering."
            clients="Gucci · PNG Jewellers · GIVA"
            imageSrc="/imgs/commercial/bk_realization_retail.jpg"
            imageAlt="Brand Kettle High-End Retail & Jewellery Flagship Boutique"
            href="/portfolio/gucci-flagship"
          />

          <RealizationCard
            number="02"
            category="Corporate HQs"
            title="Corporate Workspaces"
            description="High-performance enterprise headquarters, executive boardrooms, and collaborative coworking hubs with integrated MEP."
            clients="&Work · Nanokirti · Suites"
            imageSrc="/imgs/commercial/bk_realization_office.jpg"
            imageAlt="Brand Kettle Corporate Headquarters and Executive Boardroom"
            href="/portfolio/and-work-coworking"
          />

          <RealizationCard
            number="03"
            category="Hospitality"
            title="Hospitality & Dining"
            description="Atmospheric dining lounges, signature bars, and boutique hotels with ambient acoustics and custom millwork."
            clients="Havana Lounge · Ramada Encore"
            imageSrc="/imgs/commercial/bk_hospitality_lounge.jpg"
            imageAlt="Brand Kettle Luxury Hospitality Lounge with Amber Onyx Bar"
            href="/portfolio/havana-lounge-bareilly"
          />
        </div>

        {/* Secondary 2-Column Architectural Split Cards (Residences & Manufacturing) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-[#18181B]/15 pt-16">
          
          {/* Card 04: Luxury Residences */}
          <Link
            href="/residential-interiors"
            data-cursor-text="VIEW"
            className="group block border border-[#18181B]/15 bg-[#FAF8F5] hover:border-[#A07A4F] transition-all duration-500 hover:shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
              <div className="sm:col-span-5 relative aspect-[16/11] sm:aspect-auto sm:min-h-[220px] overflow-hidden bg-[#EFECE6]">
                <Image
                  src="/imgs/commercial/taksha-hyderabad-cover.webp"
                  alt="Taksha Luxury Villa Residence by Brand Kettle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white/40 group-hover:bg-white transition-colors duration-500">
                <div>
                  <div className="mb-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#A07A4F] font-semibold">
                    <span>04</span>
                    <span className="h-px w-3 bg-[#A07A4F]/60" />
                    <span>Private Estates</span>
                  </div>
                  <h3 className="text-2xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors leading-snug">
                    Luxury Residential Interiors
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#71717A] font-light">
                    Bespoke private estates, luxury villas, and penthouse residences designed with custom joinery and Italian marble.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[#18181B]/10 pt-4 font-mono text-[10px] uppercase tracking-[0.16em]">
                  <span className="text-[#18181B]/60 font-medium">Taksha · Signature Villas</span>
                  <span className="inline-flex items-center gap-1 text-[#A07A4F] font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="size-3" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 05: In-House Manufacturing */}
          <Link
            href="/custom-furniture"
            data-cursor-text="VIEW"
            className="group block border border-[#18181B]/15 bg-[#FAF8F5] hover:border-[#A07A4F] transition-all duration-500 hover:shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
              <div className="sm:col-span-5 relative aspect-[16/11] sm:aspect-auto sm:min-h-[220px] overflow-hidden bg-[#EFECE6]">
                <Image
                  src="/imgs/commercial/bk_joinery_detail.jpg"
                  alt="Brand Kettle 5-Axis CNC Precision Joinery Detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white/40 group-hover:bg-white transition-colors duration-500">
                <div>
                  <div className="mb-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#A07A4F] font-semibold">
                    <span>05</span>
                    <span className="h-px w-3 bg-[#A07A4F]/60" />
                    <span>In-House Millwork</span>
                  </div>
                  <h3 className="text-2xl font-light text-[#18181B] group-hover:text-[#A07A4F] transition-colors leading-snug">
                    Custom Architectural Joinery
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#71717A] font-light">
                    Direct factory-manufactured acoustic panels, conference tables, vitrines, and wall panelling built to custom CAD drawings.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[#18181B]/10 pt-4 font-mono text-[10px] uppercase tracking-[0.16em]">
                  <span className="text-[#18181B]/60 font-medium">50,000 Sq.Ft Facility</span>
                  <span className="inline-flex items-center gap-1 text-[#A07A4F] font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="size-3" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          04. SECTION 03 / CAPABILITIES (Scale & Sectors Table on Linen)
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
