'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from 'framer-motion';
import { HardHat, Network, RefreshCw, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Link each service to its page in order of appearance
const SERVICE_LINKS = [
  '/commercial-fit-outs',
  '/jewellery-showrooms',
  '/residential-interiors',
];

type Service = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

const ICONS = [HardHat, Network, RefreshCw];

export default function Expertise({ services }: { services: Service[] | null }) {
  const sectionRef = useRef<HTMLElement>(null);
  const items = (services ?? []).slice(0, 3);
  const total = items.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(total - 1, Math.max(0, Math.floor(v * total))));
  });

  if (total === 0) return null;

  return (
    <section ref={sectionRef} className="relative bg-background" style={{ height: `${total * 100}vh` }}>
      <div className="sticky top-0 h-svh w-full flex flex-col overflow-hidden">

        {/* Header */}
        <div className="pt-12 md:pt-16 shrink-0">
          <div className="container-px flex items-center justify-between">
            <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold">
              O u r &nbsp; E x p e r t i s e
            </span>
            <span className="font-display text-sm text-ink-muted tracking-widest tabular-nums">
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Split content */}
        <div className="flex-1 flex items-center">
          <div className="container-px w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

              {/* Left: text stack */}
              <div className="relative h-[280px] sm:h-[240px] lg:h-[320px] order-2 lg:order-1">
                {items.map((s, i) => {
                  const Icon = ICONS[i % ICONS.length];
                  return (
                    <TextPanel
                      key={s.title}
                      service={s}
                      icon={Icon}
                      index={i}
                      total={total}
                      progress={scrollYProgress}
                      isActive={i === active}
                      link={SERVICE_LINKS[i] ?? '/services'}
                    />
                  );
                })}
              </div>

              {/* Right: image stack */}
              <div className="relative aspect-[4/3] lg:aspect-square w-full rounded-3xl overflow-hidden border border-line bg-surface order-1 lg:order-2">
                {items.map((s, i) => (
                  <ImagePanel key={s.title} service={s} index={i} total={total} progress={scrollYProgress} />
                ))}
              </div>
            </div>

            {/* Progress dots */}
            <div className="mt-10 lg:mt-16 flex items-center justify-center lg:justify-start gap-3">
              {items.map((_, i) => (
                <span
                  key={i}
                  className={`block rounded-full transition-all duration-500 ${
                    i === active ? 'h-1.5 w-8 bg-accent' : 'h-1.5 w-1.5 bg-ink-muted/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function useCrossfade(progress: MotionValue<number>, index: number, total: number) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const overlap = segment * 0.15;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  const input = [
    isFirst ? 0 : start - overlap,
    isFirst ? start : start + overlap,
    isLast ? end : end - overlap,
    isLast ? 1 : end + overlap,
  ];
  const opacity = useTransform(progress, input, [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]);
  return { opacity, input };
}

function TextPanel({
  service,
  icon: Icon,
  index,
  total,
  progress,
  isActive,
  link,
}: {
  service: Service;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  index: number;
  total: number;
  progress: MotionValue<number>;
  isActive: boolean;
  link: string;
}) {
  const { opacity, input } = useCrossfade(progress, index, total);
  const y = useTransform(progress, input, [24, 0, 0, -24]);

  return (
    <motion.div
      style={{ opacity, y, pointerEvents: isActive ? 'auto' : 'none' }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-line">
        <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
      </div>

      <span className="font-display text-xs text-ink-muted tracking-widest mb-3">
        STEP {String(index + 1).padStart(2, '0')}
      </span>

      <h3 className="text-3xl md:text-4xl text-ink mb-5 leading-tight font-display font-light tracking-wide">
        {service.title}
      </h3>

      <div
        className="text-sm md:text-base text-ink-secondary leading-relaxed max-w-md mb-6 prose prose-sm prose-p:text-ink-secondary prose-li:text-ink-secondary"
        dangerouslySetInnerHTML={{ __html: service.description }}
      />

      {/* Arrow button → navigates to the relevant service page */}
      <Link
        href={link}
        aria-label={`Learn more about ${service.title}`}
        className="flex items-center justify-center w-12 h-12 rounded-full border border-line text-ink-muted hover:text-ink hover:border-ink transition-all duration-300"
      >
        <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
      </Link>
    </motion.div>
  );
}

function ImagePanel({
  service,
  index,
  total,
  progress,
}: {
  service: Service;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const { opacity } = useCrossfade(progress, index, total);
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const scale = useTransform(progress, [start, end], [1.08, 1]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.div style={{ scale }} className="relative h-full w-full will-change-transform">
        <Image
          src={service.image || `https://placehold.co/1200x1200/131317/8D7458?text=${service.title.split(' ').join('+')}`}
          alt={service.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority={false}
        />
      </motion.div>
    </motion.div>
  );
}
