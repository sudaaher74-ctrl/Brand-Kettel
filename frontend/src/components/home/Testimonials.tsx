'use client';

import { motion } from 'framer-motion';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  // Duplicate for seamless loop
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials].reverse();
  const row2Loop = [...row2, ...row2];

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-[100px] md:py-[140px]">
      {/* Graph-paper grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
        }}
        aria-hidden
      />

      {/* Section heading */}
      <div className="container-px mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent" />
              Client Voices
            </span>
            <h2 className="mt-4 font-display font-light text-white leading-[1.05] tracking-[0.02em] text-[36px] md:text-[48px]">
              What our{' '}
              <span className="text-accent italic">clients say.</span>
            </h2>
          </div>
          {/* Stars */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="ml-2 text-[11px] uppercase tracking-[0.2em] font-light text-white/30">5.0 Rating</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee Row 1 — left to right */}
      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#0b0b0b] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#0b0b0b] to-transparent z-10" />

        <div className="flex gap-4 overflow-hidden">
          <div
            className="flex gap-4 shrink-0"
            style={{
              animation: 'marquee-ltr 40s linear infinite',
            }}
          >
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Row 2 — right to left (reversed) */}
      {testimonials.length > 1 && (
        <div className="relative mt-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#0b0b0b] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#0b0b0b] to-transparent z-10" />

          <div className="flex gap-4 overflow-hidden">
            <div
              className="flex gap-4 shrink-0"
              style={{
                animation: 'marquee-rtl 50s linear infinite',
              }}
            >
              {row2Loop.map((t, i) => (
                <TestimonialCard key={`r2-${i}`} testimonial={t} variant="muted" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS keyframes — injected inline */}
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  variant = 'default',
}: {
  testimonial: { quote: string; name: string; role: string };
  variant?: 'default' | 'muted';
}) {
  return (
    <figure
      className={`shrink-0 w-[300px] md:w-[360px] border border-line/50 px-7 py-6 flex flex-col gap-4 ${
        variant === 'muted' ? 'bg-surface/30 opacity-70' : 'bg-surface/60'
      }`}
    >
      {/* Opening quote mark */}
      <div className="text-accent/30 font-display text-[48px] leading-none font-light select-none -mb-2">
        &ldquo;
      </div>

      <blockquote className="font-sans font-light text-[14px] leading-[1.75] text-ink-secondary flex-1">
        {testimonial.quote}
      </blockquote>

      <figcaption className="flex items-center gap-3 pt-3 border-t border-line/30">
        <div className="w-7 h-7 border border-accent/30 flex items-center justify-center shrink-0">
          <span className="font-display text-[11px] font-light text-accent">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-[12px] font-light text-white tracking-[0.05em]">
            {testimonial.name}
          </p>
          {testimonial.role && (
            <p className="text-[10px] font-light text-ink-muted tracking-[0.1em] uppercase mt-0.5">
              {testimonial.role}
            </p>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
