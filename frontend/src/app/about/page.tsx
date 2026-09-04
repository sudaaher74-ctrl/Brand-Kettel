import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us — Brand Kettle BuildSpaces',
  description:
    'Brand Kettle BuildSpaces is a turnkey interior design, commercial fit-out and custom furniture company delivering spaces across India.',
};

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
    <div className="w-full bg-[#0A0A0B] text-white min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        
        {/* ── Page Hero ── */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-[#C5A880] mb-5">
            <span>✦</span>
            <span>About Brand Kettle BuildSpaces</span>
            <span>✦</span>
          </div>
          <h1 className="font-display font-light text-[40px] sm:text-[56px] md:text-[70px] leading-[1.05] tracking-tight uppercase text-white">
            Crafted, Built &amp; <br />
            <span className="font-serif italic font-normal text-[#C5A880]">Delivered Turnkey</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed max-w-2xl mx-auto">
            We combine design thinking, in-house joinery manufacturing, and on-site execution discipline to deliver commercial environments that perform for years.
          </p>
        </div>

        {/* ── Company Story & Philosophy ── */}
        <section className="mb-24 md:mb-32">
          <div className="rounded-[28px] bg-[#121216] border border-white/10 p-8 sm:p-14 lg:p-20 shadow-2xl">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium block mb-4">
                  Our Philosophy
                </span>
                <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white font-light leading-[1.3] mb-6">
                  &ldquo;Good commercial spaces aren&apos;t defined by how they look on handover day. They&apos;re defined by how flawlessly they function, endure, and elevate the brand identity.&rdquo;
                </blockquote>
                <p className="text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed">
                  Built on the rigorous execution foundation of Brand Kettle Projects Pvt Ltd, Brand Kettle BuildSpaces unites architecture, interior contracting, and modular furniture production into a seamless, unified lifecycle.
                </p>
              </div>

              <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-white/15 bg-black">
                <Image
                  src="/imgs/commercial/home1.png"
                  alt="Brand Kettle Flagship Space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── By the Numbers (Synchronized with Homepage) ── */}
        <section className="mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C5A880] block mb-2">
                Proven Track Record
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
                Brand Kettle <span className="font-serif italic font-normal text-[#C5A880]">in figures</span>
              </h2>
            </div>
            <p className="text-sm text-[#A1A1AA] font-light max-w-md">
              Metrics grounded in verified project handovers across luxury retail, high-footfall jewellery showrooms, and enterprise workspaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[20px] bg-[#121216] p-8 border border-white/10 hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display font-light text-[46px] sm:text-[56px] text-white block mb-2 leading-none">
                    {stat.value}
                  </span>
                  <h3 className="font-display font-medium text-base text-[#C5A880] uppercase tracking-wide">
                    {stat.label}
                  </h3>
                </div>
                <p className="mt-6 text-xs text-[#A1A1AA] font-light leading-relaxed">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Photo Showcase */}
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-[24px] overflow-hidden border border-white/15 shadow-2xl bg-[#121216]">
              <Image
                src="/imgs/commercial/taksha coverimg.png"
                alt="Brand Kettle execution standards"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] block mb-0.5">Execution Rigor</span>
                <p className="text-xs font-light text-white">475 sq yd Builder Floor · Studio AKAAI collaboration</p>
              </div>
            </div>

            {/* Right: 4 Execution Pillars */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium block mb-3">
                Execution-Focused Partner
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-white uppercase tracking-tight mb-8">
                Why Industry Leaders Choose Us
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {REASONS.map((r) => (
                  <div
                    key={r.title}
                    className="p-6 rounded-2xl bg-[#121216] border border-white/10 hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-serif italic text-[#C5A880] mb-2 block">{r.num}</span>
                      <h3 className="text-base font-medium text-white mb-2 uppercase tracking-wide">
                        {r.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed mt-2">
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
            <div className="p-8 sm:p-12 rounded-[24px] bg-[#121216] border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#C5A880]" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#C5A880]">
                  Our Vision
                </span>
              </div>
              <p className="font-serif italic text-2xl sm:text-3xl font-light text-white leading-snug">
                Great spaces don&apos;t merely host human activity. <span className="text-[#C5A880]">They shape how people think, collaborate, and thrive.</span>
              </p>
            </div>

            <div className="p-8 sm:p-12 rounded-[24px] bg-[#121216] border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#C5A880]" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#C5A880]">
                  Our Mission
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed mb-4">
                We combine architectural design, manufacturing precision, and turnkey execution to deliver commercial environments with unyielding craftsmanship, speed, and integrity.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#C5A880] hover:text-white transition-colors"
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
