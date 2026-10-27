import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = pageMetadata({
  path: '/about',
  title: 'About Us — Brand Kettle BuildSpaces',
  description: 'Brand Kettle BuildSpaces is a turnkey interior design, commercial fit-out and custom furniture company delivering spaces across India.',
  socialTitle: 'About Brand Kettle BuildSpaces — One Partner, Design to Handover',
  socialDescription: 'An Indore-headquartered design-build firm with an in-house joinery factory and site teams delivering turnkey fit-outs across India.',
  image: '/imgs/commercial/brandkettle4.jpg',
  imageAlt: 'Inside the Brand Kettle BuildSpaces design studio in Indore',
});

const STATS = [
  { value: '120+', label: 'Projects Delivered', sub: 'Offices, showrooms, and retail fit-outs completed turnkey.' },
  { value: '8+', label: 'Years of Craft', sub: 'Proven track record in architecture, joinery & execution.' },
  { value: '50+', label: 'Brands Served', sub: 'Trusted by global luxury houses, jewellers & enterprises.' },
  { value: 'Pan-India', label: 'Execution Reach', sub: 'Active hubs in Mumbai, Delhi, Hyderabad, Bengaluru, Indore.' },
];

const REASONS = [
  {
    num: '01',
    title: 'Purpose Before Design',
    body: 'Every project begins with understanding how the space needs to function, flow, and drive business value—not just how it looks on day one.',
  },
  {
    num: '02',
    title: 'In-House Manufacturing',
    body: 'Direct joinery and metal fabrication facilities give us unmatched control over precision tolerances, finishes, and costs.',
  },
  {
    num: '03',
    title: 'Timelines You Can Count On',
    body: 'Like delivering 3,400 sq ft for PNG Jewellers in 27 days, we commit to strict milestone accountability without compromise.',
  },
  {
    num: '04',
    title: 'Turnkey Accountability',
    body: 'One single team from conceptual layout to engineering, MEP, procurement, and final handover. No handoff gaps, zero surprises.',
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#18181B] min-h-screen pt-28 sm:pt-36 pb-24 selection:bg-[#A07A4F] selection:text-white">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* ── Page Hero ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] font-semibold text-[#A07A4F] mb-4">
            <span>01</span>
            <span className="text-[#18181B]/30">/</span>
            <span>Studio &amp; Factory</span>
            <span className="text-[#18181B]/30">—</span>
            <span>About Us</span>
          </div>
          <h1 className="font-display font-light text-[40px] sm:text-[56px] md:text-[70px] leading-[1.04] tracking-tight uppercase text-[#18181B]">
            Crafted, Built &amp; <br />
            <span className="font-serif italic font-normal text-[#A07A4F]">Delivered Turnkey</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#71717A] font-light leading-relaxed max-w-2xl mx-auto">
            We combine design thinking, in-house joinery manufacturing, and on-site execution discipline to deliver commercial environments that perform for years.
          </p>
        </div>

        {/* ── Company Story & Philosophy (Linen Architectural Frame) ── */}
        <section className="mb-20 md:mb-28">
          <div className="bg-[#F2EDE4] border border-[#18181B]/15 p-8 sm:p-14 lg:p-16 shadow-sm">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-4">
                  Our Philosophy
                </span>
                <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#18181B] font-light leading-[1.3] mb-6">
                  &ldquo;Good commercial spaces aren&apos;t defined by how they look on handover day. They&apos;re defined by how flawlessly they function, endure, and elevate the brand identity.&rdquo;
                </blockquote>
                <p className="text-sm sm:text-base text-[#71717A] font-light leading-relaxed">
                  Built on the rigorous execution foundation of Brand Kettle Projects Pvt Ltd, Brand Kettle BuildSpaces unites architecture, interior contracting, and modular furniture production into a seamless, unified lifecycle.
                </p>
              </div>

              <div className="lg:col-span-5 relative aspect-square overflow-hidden border border-[#18181B]/15 bg-white">
                <Image
                  src="/imgs/commercial/home1.webp"
                  alt="Brand Kettle Flagship Space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── By the Numbers ── */}
        <section className="mb-20 md:mb-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] font-semibold text-[#A07A4F] block mb-2">
                Proven Track Record
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#18181B] uppercase tracking-tight">
                Brand Kettle <span className="font-serif italic font-normal text-[#A07A4F]">in figures</span>
              </h2>
            </div>
            <p className="text-sm text-[#71717A] font-light max-w-md">
              Metrics grounded in verified project handovers across luxury retail, high-footfall jewellery showrooms, and enterprise workspaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-8 border border-[#18181B]/15 hover:border-[#18181B]/50 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="font-display font-light text-[46px] sm:text-[56px] text-[#18181B] block mb-2 leading-none">
                    {stat.value}
                  </span>
                  <h3 className="font-mono text-[11px] font-semibold text-[#A07A4F] uppercase tracking-[0.16em]">
                    {stat.label}
                  </h3>
                </div>
                <p className="mt-6 text-xs text-[#71717A] font-light leading-relaxed">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Photo Showcase */}
            <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden border border-[#18181B]/15 shadow-md bg-[#F2EDE4]">
              <Image
                src="/imgs/commercial/taksha-hyderabad-cover.webp"
                alt="Brand Kettle execution standards"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#18181B]/15">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A07A4F] block mb-0.5">Execution Rigor</span>
                <p className="text-xs font-light text-[#18181B]">475 sq yd Builder Floor · Studio AKAAI collaboration</p>
              </div>
            </div>

            {/* Right: 4 Execution Pillars */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A07A4F] font-semibold block mb-3">
                Execution-Focused Partner
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-[#18181B] uppercase tracking-tight mb-8">
                Why Industry Leaders Choose Us
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {REASONS.map((r) => (
                  <div
                    key={r.title}
                    className="p-6 bg-[#F2EDE4] border border-[#18181B]/15 hover:border-[#18181B]/50 transition-all duration-300 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold mb-2 block">{r.num}</span>
                      <h3 className="text-sm font-semibold text-[#18181B] mb-2 uppercase tracking-wide">
                        {r.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#71717A] font-light leading-relaxed mt-2">
                      {r.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── Vision & Mission Split ── */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision in Deep Charcoal Contrast */}
            <div className="p-8 sm:p-12 bg-[#121214] text-white border border-[#18181B]/20 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#A07A4F]" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A07A4F]">
                  Our Vision
                </span>
              </div>
              <p className="font-serif italic text-2xl sm:text-3xl font-light text-white leading-snug">
                Great spaces don&apos;t merely host human activity. <span className="text-[#A07A4F]">They shape how people think, collaborate, and thrive.</span>
              </p>
            </div>

            {/* Mission in Warm Linen */}
            <div className="p-8 sm:p-12 bg-[#F2EDE4] text-[#18181B] border border-[#18181B]/15 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#A07A4F]" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A07A4F]">
                  Our Mission
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#71717A] font-light leading-relaxed mb-6">
                We combine architectural design, manufacturing precision, and turnkey execution to deliver commercial environments with unyielding craftsmanship, speed, and integrity.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A07A4F] hover:text-[#18181B] transition-colors"
                >
                  Schedule an architectural consultation →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
