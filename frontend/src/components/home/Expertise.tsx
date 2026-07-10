'use client';

import { motion } from 'framer-motion';
import { HardHat, Network, RefreshCw, MessageSquare, ArrowUpRight } from 'lucide-react';

type Service = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

export default function Expertise({ services }: { services: Service[] | null }) {
  if (!services || !Array.isArray(services) || services.length === 0) return null;

  const icons = [HardHat, Network, RefreshCw, MessageSquare];

  return (
    <section className="relative bg-background py-16 lg:py-24 overflow-hidden">
      <div className="container-px mx-auto relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-16">
          <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold">
            O u r &nbsp; E x p e r t i e s
          </span>
        </div>

        {/* Grid Layout matching the design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            // Shift the even columns down (index 1, 3, etc.) on large screens
            const isPushedDown = i % 2 !== 0;
            const Icon = icons[i % icons.length];

            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col px-5 lg:px-6 py-8 lg:py-0 border-t lg:border-t-0 border-l border-line hover:bg-white/[0.02] transition-colors duration-500 ${isPushedDown ? "lg:pt-12" : "lg:pb-12"
                  }`}
              >
                {/* Icon (Gold Accent) */}
                <div className="mb-4 mt-2 lg:mt-0">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl text-ink mb-5 leading-tight font-display font-light tracking-wide transition-colors duration-300 pr-2">
                  {s.title}
                </h3>

                {/* Image */}
                <div className="relative w-full aspect-video overflow-hidden mb-5 bg-surface rounded-xl border border-line">
                  <img
                    src={s.image || `https://placehold.co/800x600/131317/8D7458?text=${s.title.split(" ").join("+")}`}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Description */}
                <div
                  className="text-xs text-ink-secondary leading-relaxed mb-8 flex-grow prose prose-sm prose-p:text-ink-secondary prose-li:text-ink-secondary"
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />

                {/* Arrow Button */}
                <div className="mt-auto pb-2 lg:pb-0">
                  <button className="flex items-center justify-center w-8 h-8 rounded-full border border-line text-ink-muted group-hover:text-ink group-hover:border-ink transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

