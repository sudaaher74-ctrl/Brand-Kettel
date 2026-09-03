'use client';

import { motion } from 'framer-motion';

const STATS = [
  {
    value: '120+',
    label: 'Projects Delivered',
    sub: 'Offices, showrooms, and retail fit-outs completed turnkey.',
  },
  {
    value: '8+',
    label: 'Years of Craft',
    sub: 'Proven track record in architecture, joinery & execution.',
  },
  {
    value: '50+',
    label: 'Brands Served',
    sub: 'Trusted by global luxury houses, jewellers & enterprises.',
  },
  {
    value: 'Pan-India',
    label: 'Execution Reach',
    sub: 'Active projects in Mumbai, Delhi, Hyderabad, Bengaluru, Indore.',
  },
];

export default function RonnTheses() {
  return (
    <section className="relative overflow-hidden bg-[#070708] text-white py-20 md:py-28 px-5 sm:px-8 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C5A880] block mb-2">
              By the Numbers
            </span>
            <h2 className="font-display font-light text-[36px] sm:text-[48px] md:text-[60px] leading-[1.05] tracking-tight uppercase text-white">
              Brand Kettle <br />
              <span className="font-serif italic font-normal text-[#C5A880]">in figures</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md font-light leading-relaxed">
            Consistent quality, strict timelines, and transparent delivery have earned us the confidence of leading brands nationwide.
          </p>
        </div>

        {/* 4 Large Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[20px] bg-[#121216] p-8 border border-white/10 hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-light text-[46px] sm:text-[56px] lg:text-[62px] leading-none text-white block mb-2">
                  {stat.value}
                </span>
                <h3 className="font-display font-medium text-base text-[#C5A880] uppercase tracking-wide">
                  {stat.label}
                </h3>
              </div>
              <p className="mt-6 text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
