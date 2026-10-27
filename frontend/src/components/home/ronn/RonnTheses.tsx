'use client';

import { motion } from 'framer-motion';

const STATS = [
  {
    idx: '01',
    code: 'METRIC / 01',
    value: '120+',
    label: 'Projects Delivered',
    sub: 'Flagship showrooms, corporate offices, and retail fit-outs completed turnkey across India.',
  },
  {
    idx: '02',
    code: 'EXP / 02',
    value: '8+',
    label: 'Years of Craft',
    sub: 'Proven track record uniting architecture, in-house joinery manufacturing, and site execution.',
  },
  {
    idx: '03',
    code: 'CLIENT / 03',
    value: '50+',
    label: 'Brands Served',
    sub: 'Trusted by luxury fashion houses, premier jewellers, and forward-thinking enterprises.',
  },
  {
    idx: '04',
    code: 'REACH / 04',
    value: 'Pan-India',
    label: 'Execution Reach',
    sub: 'Active delivery teams in Mumbai, Delhi NCR, Hyderabad, Bengaluru, Bareilly, and Indore.',
  },
];

export default function RonnTheses() {
  return (
    <section className="relative overflow-hidden bg-[#070708] text-white py-24 md:py-32 px-5 sm:px-8 lg:px-10 border-b border-white/10">
      <div className="max-w-[1480px] mx-auto">
        
        {/* Section Header Grid (Akshat Reference) */}
        <div className="grid gap-8 lg:grid-cols-12 items-end mb-16 md:mb-20 border-b border-white/10 pb-8">
          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C5A880]">
              02 / Figures
            </p>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-[0.92] font-light tracking-tight text-white uppercase">
              Brand Kettle <br />
              <span className="font-serif italic font-normal text-[#C5A880] lowercase">in figures.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 max-w-md lg:text-right">
            <p className="text-sm leading-relaxed text-[#A1A1AA] font-light">
              Consistent quality, strict milestone execution, and zero-compromise craftsmanship have earned us the confidence of leading brands nationwide.
            </p>
          </div>
        </div>

        {/* 4 Architectural Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group border border-white/10 hover:border-[#C5A880]/60 bg-[#121216] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300"
            >
              {/* Top metadata */}
              <div>
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] pb-6 border-b border-white/10 mb-6">
                  <span className="text-[#C5A880]">{stat.idx} — 04</span>
                  <span className="text-white/40">{stat.code}</span>
                </div>

                <span className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-none text-white block mb-3 group-hover:text-[#C5A880] transition-colors">
                  {stat.value}
                </span>

                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-white/90 font-medium">
                  {stat.label}
                </h3>
              </div>

              {/* Bottom copy & animated indicator line */}
              <div className="mt-8 pt-5 border-t border-white/10">
                <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                  {stat.sub}
                </p>
                <div className="mt-4 h-0.5 w-8 bg-white/10 group-hover:w-full group-hover:bg-[#C5A880] transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
