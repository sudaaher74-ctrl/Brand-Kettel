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
              Designed with Purpose. Built with Precision.
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
              At Brand Kettle BuildSpaces, we bring together design, manufacturing and execution to create spaces that are built with intent. From retail stores and jewellery showrooms to workplaces and residences, we work closely with our clients to turn ideas into spaces that feel effortless, function beautifully and are made to last.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
