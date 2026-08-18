'use client';

import { motion } from 'framer-motion';

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 md:py-36">

      {/* Top gold line */}
      <div className="container-px mb-16 md:mb-24">
        <div className="gold-line" />
      </div>

      <div className="container-px">

        {/* Manifesto grid */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-16 items-start">

          {/* Left: Index label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex flex-col items-start gap-3 pt-3"
          >
            <span className="font-display text-[72px] font-light leading-none text-accent/20 select-none">01</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-ink-muted font-light mt-2">Studio</span>
          </motion.div>

          {/* Centre: Big statement headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left"
          >
            <h2 className="font-display font-light text-white leading-[1.0] tracking-[0.02em] text-[44px] md:text-[64px] lg:text-[80px]">
              Design.<br />
              Build.<br />
              <span className="text-accent italic">Deliver.</span>
            </h2>
          </motion.div>

          {/* Right: Body copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:max-w-[320px] pt-3"
          >
            <p className="text-body-main mb-6">
              At Brand Kettle BuildSpaces, we bring together design, manufacturing and execution to create spaces built with intent — from retail stores and jewellery showrooms to workplaces and residences.
            </p>
            <p className="text-small text-ink-muted">
              Everything is born from the love of design. The solid vision, worked with the craftsmanship of those who know how to turn a concept into a piece of artwork.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Bottom gold line */}
      <div className="container-px mt-16 md:mt-24">
        <div className="gold-line" />
      </div>

    </section>
  );
}
