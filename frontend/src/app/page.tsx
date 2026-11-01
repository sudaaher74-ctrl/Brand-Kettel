import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Ruler, Layers, Sparkles } from 'lucide-react';
import { HOME_FAQS } from '@/lib/faqs';
import { faqPageJsonLd, jsonLdScript } from '@/lib/structuredData';
import TopographicLines from '@/components/ui/TopographicLines';
import MindframeRealizationFan from '@/components/home/MindframeRealizationFan';
import HomeMotion from '@/components/home/HomeMotion';
import HomeProcess from '@/components/home/HomeProcess';

export const revalidate = 60;

export default function HomePage() {
  return (
    <HomeMotion>
    <div className="w-full bg-[#FAF8F5] text-[#18181B] selection:bg-[#A07A4F] selection:text-white overflow-hidden">
      {/* FAQPage Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(HOME_FAQS, '/'))}
      />

      {/* ─────────────────────────────────────────────────────────────
          01. ARCHITECTURAL HERO SECTION (Northline Atelier Diagonal Split)
          ───────────────────────────────────────────────────────────── */}
      <section data-motion="hero" className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-[#FAF8F5] pt-24 lg:pt-0 flex items-center border-b border-[#18181B]/15">
        
        {/* Topographic Contour Lines Background on Left */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[62%] overflow-hidden pointer-events-none z-0">
          <TopographicLines className="opacity-90" />
        </div>

        {/* Diagonal Architectural Photography (Desktop: Exact Angled Split Cut) */}
        <div
          data-motion="hero-image"
          className="hidden lg:block absolute right-0 inset-y-0 w-full overflow-hidden pointer-events-none z-10"
          style={{
            clipPath: 'polygon(56% 0, 100% 0, 100% 100%, 35% 100%)',
          }}
        >
          <div data-motion-parallax className="relative h-full w-full pointer-events-auto group">
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
            <div data-hero-copy className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#18181B] font-semibold mb-8">
              <span className="w-8 h-[1.5px] bg-[#18181B]" />
              <span>SPACES. CRAFTED WITH INTENTION.</span>
            </div>

            {/* Headline */}
            <h1 data-hero-copy className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.2rem] font-light leading-[0.93] text-[#18181B] tracking-tight">
              Architecture<br />
              that elevates<br />
              <em className="font-serif italic font-normal text-[#60694B]">life.</em>
            </h1>

            {/* Editorial Narrative */}
            <p data-hero-copy className="mt-8 max-w-lg text-base sm:text-lg leading-relaxed text-[#52525B] font-light">
              Brand Kettle is an architecture and interiors studio creating timeless spaces that balance beauty, purpose, and place.
            </p>

            {/* Rectangular Atelier Action Button */}
            <div data-hero-copy className="mt-10">
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
            <div data-motion="image-reveal" className="lg:hidden mt-12 relative aspect-[16/11] w-full overflow-hidden border border-[#18181B]/15 shadow-xl">
              <Image
                src="/imgs/northline_architectural_hero.jpg"
                alt="Architecture that elevates life - Brand Kettle BuildSpaces Atelier"
                fill
                priority
                sizes="100vw"
                className="object-cover"
                data-motion-image
              />
            </div>

          </div>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          02. EDITORIAL MANIFESTO QUOTE (Second Scroll Statement)
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#F2EDE4] px-5 py-24 text-center lg:py-36 text-[#18181B] border-b border-[#18181B]/15">
        <p data-motion="rise" className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A07A4F]">
          Built for those who notice the details
        </p>
        <blockquote data-motion="rise" className="mx-auto mt-8 max-w-5xl font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.96] font-light text-[#18181B]">
          “A perfectly aligned architectural reveal.<br />
          <em className="font-serif italic font-normal text-[#A07A4F]">A seamless joinery edge.</em><br />
          A space executed without compromise.”
        </blockquote>
        <p data-motion="rise" className="mx-auto mt-9 max-w-xl text-sm leading-7 text-[#71717A] font-light">
          These details may seem subtle. Together, they define the difference between a routine fit-out and an enduring architectural benchmark.
        </p>
      </section>



      {/* ─────────────────────────────────────────────────────────────
          02. REALIZATIONS (Mindframe 3D Cascading Fan Showcase)
          ───────────────────────────────────────────────────────────── */}
      <section id="collection" data-motion="rise" className="relative isolate w-full overflow-hidden border-y border-[#18181B]/10 bg-[#F6F3EE] py-16 text-[#18181B] lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-[-5%] bg-cover bg-center opacity-20 blur-[2px]"
            style={{ backgroundImage: "url('/imgs/commercial/bk_hero_flagship.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5]/95 via-[#F3EEE6]/80 to-[#E7E1D7]/95" />
          <div className="absolute -left-24 top-12 size-80 rounded-full bg-[#A07A4F]/10 blur-3xl" />
          <div className="absolute -right-24 bottom-0 size-96 rounded-full bg-[#60694B]/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-10">
          <MindframeRealizationFan />
          <p className="mx-auto mt-2 max-w-[1800px] text-right text-xs leading-6 text-[#52525B] sm:text-sm">
            <span className="mr-2 font-display text-2xl font-semibold tracking-tight text-[#18181B] sm:text-3xl">120+</span>
            spaces delivered nationwide on budget and on schedule.
          </p>
        </div>
      </section>



      <HomeProcess />

      {/* ─────────────────────────────────────────────────────────────
          07. THE PRECISION MINDSET (Deep Dark Contrast Banner)
          ───────────────────────────────────────────────────────────── */}
      <section data-motion="stagger" className="bg-[#121214] py-24 text-[#F4F4F5] lg:py-36">
        <div className="mx-auto grid max-w-[1480px] gap-16 px-5 lg:grid-cols-2 lg:px-10">
          <div data-motion-item>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              Executed with technology. Perfected by craftsmanship.
            </p>
            <h2 className="mt-6 text-6xl leading-[0.88] lg:text-8xl font-light">
              Precision is not<br />
              a machine setting.<br />
              <em className="font-serif italic font-normal text-[#C5A880]">It is a mindset.</em>
            </h2>
          </div>

          <div data-motion-item className="self-end">
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
        
        <div data-motion="stagger" className="flex items-end justify-between border-b border-[#18181B]/15 pb-5">
          <p data-motion-item className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A07A4F]">
            05 / The Brand Kettle standard
          </p>
          <p data-motion-item className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#71717A]">
            Specification BK—06
          </p>
        </div>

        <div data-motion="stagger" className="mt-8 grid border-t border-[#18181B]/15 md:grid-cols-2 lg:grid-cols-3">
          
          <article data-motion-item className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">01</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Precision</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              Millimeter-accurate execution for cleaner reveals, true alignments, and seamless transitions.
            </p>
          </article>

          <article data-motion-item className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">02</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Consistency</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              The exact same uncompromising standard across a single boutique or a 20-store national rollout.
            </p>
          </article>

          <article data-motion-item className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">03</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Customisation</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              Every joinery detail, showcase, and partition engineered bespoke to your brand identity.
            </p>
          </article>

          <article data-motion-item className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">04</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Transparency</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              Itemized BOQs, transparent milestone schedules, and real-time weekly progress reports.
            </p>
          </article>

          <article data-motion-item className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#A07A4F]">05</span>
              <span className="h-px flex-1 bg-[#18181B]/15" />
            </div>
            <h3 className="mt-8 text-4xl font-light text-[#18181B]">Finish</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A] font-light">
              Premium commercial-grade substrates, European hardware, and meticulous surface detailing.
            </p>
          </article>

          <article data-motion-item className="group border-b border-[#18181B]/15 py-9 lg:pr-10">
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
      <section id="contact" data-motion="stagger" className="bg-[#18181B] py-24 text-[#FAF8F5] lg:py-32">
        <div className="mx-auto grid max-w-[1480px] items-end gap-12 px-5 lg:grid-cols-12 lg:px-10">
          
          <div data-motion-item className="lg:col-span-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
              06 / Start a project
            </p>
            <h2 className="mt-6 text-6xl leading-[0.88] lg:text-8xl font-light">
              Tell us about<br />
              <em className="font-serif italic font-normal text-[#A07A4F]">your next space.</em>
            </h2>
          </div>

          <div data-motion-item className="lg:col-span-4">
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
    </HomeMotion>
  );
}
