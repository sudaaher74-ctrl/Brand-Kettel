'use client';

import { motion } from 'framer-motion';

const ADVANTAGES = [
  {
    num: '01',
    title: 'A SINGLE ACCOUNTABLE PARTNER',
    description:
      'Our in-house team unites architecture, 3D planning, joinery manufacturing, and site execution. One accountable point of contact — always responsible.',
  },
  {
    num: '02',
    title: 'A CLEAR VISION ON YOUR INVESTMENT',
    description:
      'We bring over 8 years of rigorous build discipline to guide your choices with clarity. Impartial advice engineered for your long-term success.',
  },
  {
    num: '03',
    title: 'SPACES TAILORED TO YOUR BRAND',
    description:
      'We never build copy-paste standard templates. Every space is customized to reflect your corporate culture, client expectations, and workflow.',
  },
  {
    num: '04',
    title: 'TOTAL ON-SITE RISK MANAGEMENT',
    description:
      'We shoulder all site challenges, statutory codes, and unforeseen execution snags. A project delivered smoothly without surprises on your end.',
  },
  {
    num: '05',
    title: 'BUILT TO ENDURE AND PERFORM',
    description:
      'We engineer today’s build with tomorrow’s durability in mind. Premium joinery, high-grade hardware, and sustainable materials that maximize ROI.',
  },
  {
    num: '06',
    title: 'FIXED GUARANTEED BUDGET & SCHEDULE',
    description:
      'We commit to a firm, transparent quotation with comprehensive line items. Clear project milestones, reliable delivery, zero hidden extras.',
  },
];

export default function RonnAdvantages() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] text-white py-20 md:py-32 px-5 sm:px-8 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C5A880] block mb-3">
            Why Brand Kettle BuildSpaces
          </span>
          <h2 className="font-display font-light text-[36px] sm:text-[48px] md:text-[60px] leading-[1.05] tracking-tight text-white uppercase">
            What you gain <br />
            <span className="font-serif italic font-normal text-[#C5A880]">working with us :</span>
          </h2>
        </div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ADVANTAGES.map((adv, i) => (
            <motion.div
              key={adv.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[20px] bg-[#121216] p-8 sm:p-9 border border-white/10 flex flex-col justify-between hover:border-[#C5A880]/60 hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-sm font-semibold tracking-wider text-[#C5A880]">
                    {adv.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#C5A880] transition-colors" />
                </div>

                <h3 className="font-display font-medium text-lg sm:text-xl text-white tracking-wide uppercase leading-snug mb-3 group-hover:text-[#C5A880] transition-colors">
                  {adv.title}
                </h3>

                <p className="text-sm text-[#A1A1AA] font-light leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white/50 group-hover:text-[#C5A880] transition-colors">
                <span>Brand Kettle Guarantee</span>
                <span>✓</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
