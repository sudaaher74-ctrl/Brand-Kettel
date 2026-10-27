'use client';

import { motion } from 'framer-motion';

const REVIEWS = [
  {
    idx: '01',
    quote:
      'BrandKettle transformed our 3,400 sq ft Goregaon showroom into a luxury retail destination in just 27 days. The speed, precision, and quality of finish were exceptional — exactly what a fast-moving jewellery brand needs.',
    author: 'Ankit Verma',
    role: 'Store Operations',
    brand: 'PNG Jewellers',
    city: 'Mumbai',
    highlight: '27-Day Fast-Track Delivery',
  },
  {
    idx: '02',
    quote:
      'From the Havana Lounge rooftop to the private hotel zones, every space BrandKettle delivered at the Ramada felt considered and crafted. They managed a complex, multi-phase project without a single compromise on quality.',
    author: 'Rajiv Sharma',
    role: 'General Manager',
    brand: 'Ramada Encore Hotel',
    city: 'Bareilly',
    highlight: '8,500 SQ FT Hospitality Rooftop',
  },
  {
    idx: '03',
    quote:
      'The &Work co-working fit-out in Faridabad is still one of our favourite spaces. BrandKettle understood the brief perfectly — vibrant, collaborative, and practical. Delivered on time and strictly on budget.',
    author: 'Meera Kapoor',
    role: 'Founder',
    brand: '&Work Co-working Space',
    city: 'Faridabad',
    highlight: '15,000 SQ FT Corporate Campus',
  },
];

export default function RonnReviews() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] text-white py-24 md:py-36 px-5 sm:px-8 lg:px-10 border-b border-white/10">
      <div className="max-w-[1480px] mx-auto">
        
        {/* Section Header Grid */}
        <div className="mb-16 md:mb-20 grid gap-8 lg:grid-cols-12 items-end border-b border-white/10 pb-8">
          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C5A880]">
              05 / Trust
            </p>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-[0.92] font-light tracking-tight text-white uppercase">
              Listen to Them. <br />
              <span className="font-serif italic font-normal text-[#C5A880] lowercase">they trust us.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 max-w-md lg:text-right flex lg:justify-end items-center gap-3">
            <span className="text-[#C5A880] text-sm tracking-widest">★★★★★</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              Verified Client Partnerships
            </span>
          </div>
        </div>

        {/* Testimonials 3-Card Grid with Akshat Architectural Framing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((rev, i) => (
            <motion.div
              key={rev.brand}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border border-white/10 hover:border-[#C5A880]/60 bg-[#121216] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Meta row */}
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] pb-5 border-b border-white/10 mb-6">
                  <span className="text-[#C5A880]">{rev.idx} — 03</span>
                  <span className="text-white/40">{rev.highlight}</span>
                </div>

                <blockquote className="text-sm sm:text-base text-[#D4D4D8] font-light leading-relaxed mb-8">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="font-display font-medium text-base text-white tracking-wide uppercase group-hover:text-[#C5A880] transition-colors">
                  {rev.author}
                </p>
                <p className="text-xs text-[#C5A880] mt-0.5">
                  {rev.role} · <span className="text-white/70">{rev.brand}</span>
                </p>
                <p className="font-mono text-[10px] text-white/40 mt-1 uppercase tracking-wider">
                  {rev.city}, India
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
