'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const FEATURED_PROJECTS = [
  {
    slug: 'gucci',
    name: 'Gucci',
    category: 'Luxury Retail',
    location: 'India',
    year: '2023',
    image: '/imgs/commercial/gucci-green.png',
  },
  {
    slug: 'png',
    name: 'PNG Jewellers',
    category: 'Jewellery Showroom',
    location: 'Goregaon, Mumbai',
    year: '27 days',
    image: '/imgs/commercial/pnjcoverimg.png',
  },
  {
    slug: 'havana-lounge-bareilly',
    name: 'Havana Lounge',
    category: 'Hospitality',
    location: 'Ramada Hotel, Bareilly',
    year: '2022',
    image: '/imgs/commercial/Havana lounge1.jpg',
  },
  {
    slug: 'ramada-encore-bareilly',
    name: 'Ramada Encore Hotel',
    category: 'Hospitality',
    location: 'Bareilly',
    year: '2023',
    image: '/imgs/commercial/ramda encre hotel1.jpg',
  },
  {
    slug: 'nanokirti-pvt',
    name: 'Nanokirti Pvt',
    category: 'Corporate Office',
    location: 'India',
    year: '2023',
    image: '/imgs/commercial/nanokirti pvt1.jpg',
  },
  {
    slug: 'pret-a-manger-delhi',
    name: 'Pret A Manger',
    category: 'Hospitality',
    location: 'Select City Walk, Delhi',
    year: '2023',
    image: '/imgs/commercial/p080_111.jpg',
  },
];

export default function PortfolioPreview() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-background py-20 md:py-28 overflow-hidden">
      {/* Section header */}
      <div className="container-px mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent" />
              Selected Work
            </span>
            <h2 className="mt-4 text-section-lg">
              Projects that{' '}
              <span className="text-accent italic font-light">define us.</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-light text-white/50 hover:text-white transition-colors duration-300 group shrink-0"
          >
            View All Projects
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7l-10 10M17 7H7m10 0v10" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-5 overflow-x-auto px-5 sm:px-8 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: 'x mandatory' }}
        onMouseDown={(e) => {
          const el = trackRef.current;
          if (!el) return;
          let startX = e.pageX - el.offsetLeft;
          let scrollLeft = el.scrollLeft;
          const onMove = (ev: MouseEvent) => {
            const x = ev.pageX - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX);
          };
          const onUp = () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
            el.style.cursor = 'grab';
          };
          window.addEventListener('mousemove', onMove);
          window.addEventListener('mouseup', onUp);
        }}
      >
        {FEATURED_PROJECTS.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative shrink-0 overflow-hidden"
            style={{
              width: 'clamp(260px, 32vw, 420px)',
              height: 'clamp(340px, 45vw, 540px)',
              scrollSnapAlign: 'start',
            }}
          >
            <Link href={`/portfolio`} className="absolute inset-0 z-20" aria-label={project.name} />

            {/* Image */}
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 80vw, 32vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] font-light text-accent mb-2">
                {project.category}
              </p>
              <h3 className="font-display font-light text-white text-[22px] md:text-[26px] leading-tight">
                {project.name}
              </h3>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-[11px] font-light text-white/40 tracking-wide">
                  {project.location}
                </p>
                <p className="text-[11px] font-light text-white/30">
                  {project.year}
                </p>
              </div>
            </div>

            {/* Hover arrow */}
            <div className="absolute top-4 right-4 w-9 h-9 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-white/40 bg-background/20 backdrop-blur-sm">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>

            {/* Subtle border on hover */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}

        {/* End spacer + View All card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="shrink-0 flex flex-col items-center justify-center border border-line/40 bg-surface/30"
          style={{
            width: 'clamp(200px, 22vw, 300px)',
            height: 'clamp(340px, 45vw, 540px)',
            scrollSnapAlign: 'start',
          }}
        >
          <Link
            href="/portfolio"
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-12 h-12 border border-accent/40 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 7l-10 10M17 7H7m10 0v10" />
              </svg>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-light text-white/50 group-hover:text-white transition-colors duration-300 text-center">
              View All<br />Projects
            </span>
          </Link>
        </motion.div>

        {/* Trailing padding */}
        <div className="w-5 md:w-8 shrink-0" aria-hidden />
      </div>

      {/* Scroll hint — desktop only */}
      <div className="container-px mt-6 hidden md:flex items-center gap-3">
        <div className="h-px w-8 bg-accent/30" />
        <p className="text-[10px] uppercase tracking-[0.3em] font-light text-white/20">
          Drag to explore
        </p>
      </div>
    </section>
  );
}
