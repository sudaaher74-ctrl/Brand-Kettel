import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Ruler, Layers, Sparkles } from 'lucide-react';
import { HOME_FAQS } from '@/lib/faqs';
import { faqPageJsonLd, jsonLdScript } from '@/lib/structuredData';
import TopographicLines from '@/components/ui/TopographicLines';
import HomeRealizations from '@/components/home/HomeRealizations';
import HomeMotion from '@/components/home/HomeMotion';
import HomeProcess from '@/components/home/HomeProcess';
import HomeClients from '@/components/home/HomeClients';
import HomePrecision from '@/components/home/HomePrecision';

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

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[15] hidden bg-gradient-to-r from-[#18181B]/85 via-[#18181B]/60 to-transparent lg:block" />

        {/* Content Container (Positioned on the Left) */}
        <div className="relative z-20 mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-24">
          <div className="w-full lg:max-w-xl xl:max-w-2xl">
            
            {/* Overline with Horizontal Rule */}
            <div data-hero-copy className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#18181B] font-semibold mb-8 lg:text-[#FAF8F5]">
              <span className="w-8 h-[1.5px] bg-[#18181B] lg:bg-[#FAF8F5]" />
              <span>SPACES. CRAFTED WITH INTENTION.</span>
            </div>

            {/* Headline */}
            <h1 data-hero-copy className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.2rem] font-light leading-[0.93] text-[#18181B] tracking-tight lg:text-[#FAF8F5]">
              Architecture<br />
              that elevates<br />
              <em className="font-serif italic font-normal text-[#60694B] lg:text-[#D6B47E]">life.</em>
            </h1>

            {/* Editorial Narrative */}
            <p data-hero-copy className="mt-8 max-w-lg text-base sm:text-lg leading-relaxed text-[#52525B] font-light lg:text-white/85">
              Brand Kettle is an architecture and interiors studio creating timeless spaces that balance beauty, purpose, and place.
            </p>

            {/* Rectangular Atelier Action Button */}
            <div data-hero-copy className="mt-10">
              <Link
                href="/portfolio"
                data-cursor-text="EXPLORE"
                className="group inline-flex items-center gap-4 bg-[#3E4535] hover:bg-[#2F3528] text-[#FAF8F5] px-9 py-4 sm:py-4.5 text-xs font-mono uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm hover:shadow-md lg:bg-[#F2EDE4] lg:text-[#18181B] lg:hover:bg-[#D6B47E] lg:hover:text-[#18181B] lg:shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
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



      <HomeRealizations />



      <HomeProcess />

      <HomePrecision />

      <HomeClients />


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
