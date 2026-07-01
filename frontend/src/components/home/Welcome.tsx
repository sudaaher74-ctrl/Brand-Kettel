'use client';

import { motion } from 'framer-motion';

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-24 max-w-7xl mx-auto">
        
        {/* Header / Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-px bg-accent/40" />
          <span className="text-sm font-mono uppercase tracking-widest text-accent">Who We Are</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Main Statement (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-ink leading-[1.3] tracking-tight">
              Brand Kettle BuildSpaces is a turnkey interior design, fit-out and furniture solutions company creating retail, commercial and residential environments across India.
            </h2>
          </motion.div>

          {/* Supporting Text & Quote (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center space-y-8 text-lg text-ink-muted leading-relaxed"
          >
            <p>
              Built on the execution expertise of Brand Kettle Projects, we combine design thinking, manufacturing capability and turnkey execution to deliver spaces that are functional, immersive and built to last.
            </p>
            <p>
              We bring together craftsmanship, precision and execution excellence under one integrated platform — from luxury jewellery showrooms and retail environments to corporate workplaces and bespoke residential interiors.
            </p>
          </motion.div>

        </div>

        {/* Large Quote Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 pt-16 border-t border-line"
        >
          <blockquote className="text-center max-w-4xl mx-auto">
            <span className="block text-4xl sm:text-5xl md:text-6xl font-display font-light text-ink tracking-tight italic">
              &quot;We believe great spaces are not just designed &mdash; they are crafted, built and experienced.&quot;
            </span>
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}
