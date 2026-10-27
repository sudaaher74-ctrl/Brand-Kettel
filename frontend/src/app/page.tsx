import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Ruler, Layers, Sparkles } from 'lucide-react';
import { HOME_FAQS } from '@/lib/faqs';
import { faqPageJsonLd, jsonLdScript } from '@/lib/structuredData';
import TopographicLines from '@/components/ui/TopographicLines';
import MindframeRealizationFan from '@/components/home/MindframeRealizationFan';

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
          01. ARCHITECTURAL HERO SECTION (Northline Atelier Diagonal Split)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-[#FAF8F5] pt-24 lg:pt-0 flex items-center border-b border-[#18181B]/15">
        
        {/* Topographic Contour Lines Background on Left */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[62%] overflow-hidden pointer-events-none z-0">
          <TopographicLines className="opacity-90" />
        </div>

        {/* Diagonal Architectural Photography (Desktop: Exact Angled Split Cut) */}
        <div
          className="hidden lg:block absolute right-0 inset-y-0 w-full overflow-hidden pointer-events-none z-10"
          style={{
            clipPath: 'polygon(56% 0, 100% 0, 100% 100%, 35% 100%)',
          }}
        >
          <div className="relative h-full w-full pointer-events-auto group">
            <Image
              src="/imgs/northline_architectural_hero.jpg"
              alt="Architecture that elevates life - Brand Kettle BuildSpaces Atelier"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-center scale-[1.02] group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Subtle natural sunlight gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Content Container (Positioned on the Left) */}
        <div className="relative z-20 mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-24">
          <div className="w-full lg:max-w-xl xl:max-w-2xl">
            
            {/* Overline with Horizontal Rule */}
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#18181B] font-semibold mb-8">
              <span className="w-8 h-[1.5px] bg-[#18181B]" />
              <span>SPACES. CRAFTED WITH INTENTION.</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.2rem] font-light leading-[0.93] text-[#18181B] tracking-tight">
              Architecture<br />
              that elevates<br />
              <em className="font-serif italic font-normal text-[#60694B]">life.</em>
            </h1>

            {/* Editorial Narrative */}
            <p className="mt-8 max-w-lg text-base sm:text-lg leading-relaxed text-[#52525B] font-light">
              Brand Kettle is an architecture and interiors studio creating timeless spaces that balance beauty, purpose, and place.
            </p>

            {/* Rectangular Atelier Action Button */}
            <div className="mt-10">
              <Link
                href="/portfolio"
                data-cursor-text="EXPLORE"
                className="group inline-flex items-center gap-4 bg-[#3E4535] hover:bg-[#2F3528] text-[#FAF8F5] px-9 py-4 sm:py-4.5 text-xs font-mono uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>

            {/* Mobile / Tablet Photography Frame (Visible on screens < lg) */}
            <div className="lg:hidden mt-12 relative aspect-[16/11] w-full overflow-hidden border border-[#18181B]/15 shadow-xl">
              <Image
                src="/imgs/northline_architectural_hero.jpg"
                alt="Architecture that elevates life - Brand Kettle BuildSpaces Atelier"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          02. EDITORIAL MANIFESTO QUOTE (Second Scroll Statement)
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#F2EDE4] px-5 py-24 text-center lg:py-36 text-[#18181B] border-b border-[#18181B]/15">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A07A4F]">
          Built for those who notice the details
        </p>
        <blockquote className="mx-auto mt-8 max-w-5xl font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.96] font-light text-[#18181B]">
          “A perfectly aligned architectural reveal.<br />
          <em className="font-serif italic font-normal text-[#A07A4F]">A seamless joinery edge.</em><br />
          A space executed without compromise.”
        </blockquote>
        <p className="mx-auto mt-9 max-w-xl text-sm leading-7 text-[#71717A] font-light">
          These details may seem subtle. Together, they define the difference between a routine fit-out and an enduring architectural benchmark.
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ARCHITECTURAL BENCHMARK METRICS RIBBON (Brand Kettle Provenance)
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-[#18181B]/15 bg-[#FAF8F5]">
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
          02. REALIZATIONS (Mindframe 3D Cascading Fan Showcase)
          ───────────────────────────────────────────────────────────── */}
      <section id="collection" className="w-full max-w-[1800px] mx-auto border-t border-[#18181B]/15 px-4 sm:px-6 lg:px-10 py-4 lg:py-6 overflow-hidden">
        
        {/* Mindframe 3D Perspective Cascading Showcase */}
        <MindframeRealizationFan />
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
