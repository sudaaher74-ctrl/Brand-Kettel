'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Who we are"
          title="Welcome to BrandKettle"
          subtitle="We are a multidisciplinary design and build studio dedicated to crafting remarkable commercial spaces."
        />
        
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-ink-muted leading-relaxed"
          >
            <p className="text-lg">
              BrandKettle bridges the gap between vision and execution. With years of expertise in commercial interior design, turnkey build-outs, and project management, we help businesses transform their environments.
            </p>
            <p className="mt-6 text-lg">
              Our approach is rooted in understanding your brand's unique identity and translating it into functional, inspiring spaces that foster growth and innovation. From concept to completion, we manage every detail to ensure a seamless experience.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-card shadow-card aspect-[4/3]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <h3 className="text-center font-display text-3xl font-bold leading-tight text-ink lg:text-4xl">
                Crafting Spaces.<br/>Building Brands.
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
