'use client';

import { motion } from 'framer-motion';

const REVIEWS = [
  {
    quote:
      'BrandKettle transformed our 3,400 sq ft Goregaon showroom into a luxury retail destination in just 27 days. The speed, precision, and quality of finish were exceptional — exactly what a fast-moving jewellery brand needs.',
    author: 'Ankit Verma',
    role: 'Store Operations',
    brand: 'PNG Jewellers',
    city: 'Mumbai',
    highlight: 'Delivered in 27 Days',
  },
  {
    quote:
      'From the Havana Lounge rooftop to the private hotel zones, every space BrandKettle delivered at the Ramada felt considered and crafted. They managed a complex, multi-phase project without a single compromise on quality.',
    author: 'Rajiv Sharma',
    role: 'General Manager',
    brand: 'Ramada Encore Hotel',
    city: 'Bareilly',
    highlight: 'Hospitality & Rooftop',
  },
  {
    quote:
      'The &Work co-working fit-out in Faridabad is still one of our favourite spaces. BrandKettle understood the brief perfectly — vibrant, collaborative, and practical. Delivered on time and strictly on budget.',
    author: 'Meera Kapoor',
    role: 'Founder',
    brand: '&Work Co-working Space',
    city: 'Faridabad',
    highlight: '15,000 sq ft Campus',
  },
];

export default function RonnReviews() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] text-white py-20 md:py-32 px-5 sm:px-8 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C5A880] block mb-2">
              Client Feedback
            </span>
            <h2 className="font-display font-light text-[36px] sm:text-[48px] md:text-[60px] leading-[1.05] tracking-tight text-white uppercase">
              Listen to Them. <br />
              <span className="font-serif italic text-[#C5A880]">They trust us.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#C5A880] text-lg">★★★★★</span>
            <span className="text-xs uppercase tracking-[0.2em] font-light text-white/50">Verified Partnerships</span>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((rev, i) => (
            <motion.div
              key={rev.brand}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[24px] bg-[#121216] border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-[#C5A880]/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {rev.highlight}
                  </span>
                  <span className="text-2xl font-serif text-[#C5A880]/60">&ldquo;</span>
                </div>

                <blockquote className="text-sm sm:text-base text-[#D4D4D8] font-light leading-relaxed mb-8">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="font-display font-medium text-base text-white tracking-wide uppercase">
                  {rev.author}
                </p>
                <p className="text-xs text-[#C5A880] mt-0.5">
                  {rev.role} · <span className="text-white/70">{rev.brand}</span>
                </p>
                <p className="text-[11px] text-white/40 mt-1 uppercase tracking-wider">
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
