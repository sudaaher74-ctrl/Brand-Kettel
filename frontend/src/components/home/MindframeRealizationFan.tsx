'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'modular-pavilion',
    number: '01/05',
    title: 'Modular space',
    subtitle: 'High-Performance Cantilevered Pavilion',
    tags: ['commercial', '12,000 sq.ft', 'turnkey mep', 'prefabricated joinery'],
    imageSrc: '/imgs/modular_architectural_pavilion.jpg',
    imageAlt: 'Modern Modular Architectural Commercial Space by Brand Kettle',
    href: '/portfolio',
  },
  {
    id: 'lumina-flagship',
    number: '02/05',
    title: 'Flagship boutique cafe',
    subtitle: 'Double-Height Vitrine Facade & Retail Interior',
    tags: ['luxury retail', 'high-cri lighting', 'precision vitrines', '27-day handover'],
    imageSrc: '/imgs/commercial_glass_facade.jpg',
    imageAlt: 'Lumina Commercial Flagship Boutique with Double-Height Vitrine',
    href: '/portfolio/gucci-flagship',
  },
  {
    id: 'corporate-workspaces',
    number: '03/05',
    title: 'Corporate workspaces',
    subtitle: 'High-Performance Executive Headquarters & Boardrooms',
    tags: ['corporate hq', 'lod-400 bim', 'acoustic nrc 0.85', 'smoked oak'],
    imageSrc: '/imgs/commercial/bk_realization_office.jpg',
    imageAlt: 'Brand Kettle Corporate Executive Boardroom and Headquarters',
    href: '/portfolio/and-work-coworking',
  },
  {
    id: 'hospitality-lounge',
    number: '04/05',
    title: 'Two-story lounge',
    subtitle: 'Signature Dining Lounges & Luxury Hospitality',
    tags: ['signature lounge', 'backlit onyx', 'custom millwork', 'turnkey mep'],
    imageSrc: '/imgs/commercial/bk_hospitality_lounge.jpg',
    imageAlt: 'Luxury Hospitality Lounge with Amber Onyx Bar by Brand Kettle',
    href: '/portfolio/havana-lounge-bareilly',
  },
  {
    id: 'private-estate',
    number: '05/05',
    title: 'Taksha private estate',
    subtitle: 'Bespoke Private Residences & Penthouse Joinery',
    tags: ['private villa', 'italian marble', 'bespoke woodwork', 'smart lighting'],
    imageSrc: '/imgs/commercial/taksha-hyderabad-cover.webp',
    imageAlt: 'Taksha Luxury Villa Residence by Brand Kettle',
    href: '/residential-interiors',
  },
];

export default function MindframeRealizationFan() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const total = PROJECTS.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <div className="w-full relative overflow-hidden py-6">
      
      {/* ─────────────────────────────────────────────────────────────
          Top Header: Editorial Typography & Sector Badges
          ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A07A4F] mb-3">
            02 / Realizations
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#18181B] tracking-tight leading-[1.04]">
            <span className="font-serif italic font-normal text-[#18181B]">Create your</span><br />
            <span className="font-sans font-bold">space </span>
            <span className="font-serif italic font-normal text-[#A07A4F]">with us</span>
          </h2>
        </div>

        {/* Top-Right Category Pill Badges (Matching Mindframe 'Comfort' / 'Buildings') */}
        <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
          <button
            onClick={() => setActiveIndex(0)}
            className={`px-5 py-2 rounded-full border text-xs font-mono uppercase tracking-[0.16em] transition-all duration-300 ${
              activeIndex === 0
                ? 'bg-[#18181B] text-white border-[#18181B]'
                : 'border-[#18181B]/20 text-[#18181B] hover:border-[#18181B] bg-white/70'
            }`}
          >
            Modular Space
          </button>
          <button
            onClick={() => setActiveIndex(1)}
            className={`px-5 py-2 rounded-full border text-xs font-mono uppercase tracking-[0.16em] transition-all duration-300 ${
              activeIndex === 1
                ? 'bg-[#18181B] text-white border-[#18181B]'
                : 'border-[#18181B]/20 text-[#18181B] hover:border-[#18181B] bg-white/70'
            }`}
          >
            Flagships
          </button>
          <button
            onClick={() => setActiveIndex(2)}
            className={`px-5 py-2 rounded-full border text-xs font-mono uppercase tracking-[0.16em] transition-all duration-300 ${
              activeIndex === 2
                ? 'bg-[#18181B] text-white border-[#18181B]'
                : 'border-[#18181B]/20 text-[#18181B] hover:border-[#18181B] bg-white/70'
            }`}
          >
            Workspaces
          </button>
          <button
            onClick={() => setActiveIndex(3)}
            className={`px-5 py-2 rounded-full border text-xs font-mono uppercase tracking-[0.16em] transition-all duration-300 ${
              activeIndex === 3
                ? 'bg-[#18181B] text-white border-[#18181B]'
                : 'border-[#18181B]/20 text-[#18181B] hover:border-[#18181B] bg-white/70'
            }`}
          >
            Hospitality
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3D Perspective Cascading Fan Cards Container
          ───────────────────────────────────────────────────────────── */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] w-full flex items-center justify-center [perspective:1400px]">
        
        {/* Navigation Arrow Floating Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous Project"
          className="absolute left-2 sm:left-4 z-40 p-3 sm:p-4 rounded-full bg-white/90 hover:bg-white text-[#18181B] shadow-xl border border-[#18181B]/10 hover:border-[#A07A4F] transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="size-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Project"
          className="absolute right-2 sm:right-4 z-40 p-3 sm:p-4 rounded-full bg-white/90 hover:bg-white text-[#18181B] shadow-xl border border-[#18181B]/10 hover:border-[#A07A4F] transition-all hover:scale-105 active:scale-95"
        >
          <ArrowRight className="size-5" />
        </button>

        {/* The 5 Stacked Cards */}
        <div className="relative w-full h-[540px] sm:h-[600px] lg:h-[640px] flex items-center justify-center">
          {PROJECTS.map((project, idx) => {
            // Calculate relative offset from active index (-2, -1, 0, +1, +2)
            let offset = idx - activeIndex;
            if (offset < -2) offset += total;
            if (offset > 2) offset -= total;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Compute dynamic 3D positioning
            const xPercent = offset * 26; // horizontal shift percent
            const scale = 1 - Math.abs(offset) * 0.12;
            const zIndex = 30 - Math.abs(offset) * 10;
            const opacity = 1 - Math.abs(offset) * 0.28;
            const rotateY = offset * -6; // subtle 3D tilt inwards

            return (
              <motion.article
                key={project.id}
                onClick={() => setActiveIndex(idx)}
                initial={false}
                animate={{
                  x: `${xPercent}%`,
                  scale,
                  zIndex,
                  opacity,
                  rotateY,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 26,
                }}
                className={`absolute w-[86%] sm:w-[58%] md:w-[48%] lg:w-[40%] xl:w-[35%] h-full rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-2xl cursor-pointer select-none transition-shadow duration-500 ${
                  isCenter
                    ? 'ring-1 ring-[#18181B]/10 shadow-[0_30px_70px_-15px_rgba(24,24,27,0.35)]'
                    : 'shadow-lg hover:opacity-100'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Background Full Photography */}
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  priority={isCenter}
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                />

                {/* Top Notch Tab Index (Matching Mindframe '01/20' notch) */}
                <div className="absolute top-0 right-0 z-20">
                  <div className="bg-[#FAF8F5]/90 backdrop-blur-md px-6 py-2.5 rounded-bl-[20px] border-b border-l border-[#18181B]/10 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#18181B]">
                    {project.number}
                  </div>
                </div>

                {/* Bottom Overlay Gradient & Project Meta */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white pt-24">
                  
                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white capitalize">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/80 font-light line-clamp-1">
                    {project.subtitle}
                  </p>

                  {/* Specification Pill Badges (villa, 65m², for living, prefabricated) */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-[0.12em] text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Inline Contact Bar / Quick Action (Matching Mindframe input + 'Contact us') */}
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="mt-6"
                    >
                      <form
                        onSubmit={handleSubmit}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 p-1.5 focus-within:border-white transition-colors"
                      >
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={submitted ? 'Inquiry received!' : 'Enter your e-mail'}
                          disabled={submitted}
                          className="flex-1 bg-transparent px-4 text-xs text-white placeholder-white/70 focus:outline-none font-light"
                        />
                        <button
                          type="submit"
                          disabled={submitted}
                          className="px-5 py-2 rounded-full bg-white text-[#18181B] text-xs font-mono font-semibold uppercase tracking-[0.14em] hover:bg-[#FAF8F5] transition-all flex items-center gap-1.5 shrink-0 shadow-sm"
                        >
                          {submitted ? (
                            <>
                              <span>Sent</span>
                              <Check className="size-3 text-emerald-600" />
                            </>
                          ) : (
                            <>
                              <span>Contact us</span>
                              <ArrowRight className="size-3" />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {!isCenter && (
                    <div className="mt-5 flex items-center justify-between text-xs font-mono uppercase tracking-[0.16em] text-white/80">
                      <span>Click to view</span>
                      <ArrowRight className="size-3.5" />
                    </div>
                  )}

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          Bottom Social Proof & Archive Link (Matching Mindframe 2741 customers)
          ───────────────────────────────────────────────────────────── */}
      <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#18181B]/15 pt-8">
        
        {/* Customer Trust Metric */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2 overflow-hidden">
            <span className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FAF8F5] bg-[#E8E4DC] flex items-center justify-center text-[10px] font-bold text-[#18181B] shadow-sm">
              GC
            </span>
            <span className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FAF8F5] bg-[#D8CFBF] flex items-center justify-center text-[10px] font-bold text-[#18181B] shadow-sm">
              PG
            </span>
            <span className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FAF8F5] bg-[#A07A4F] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
              BK
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#71717A] font-light">
            <strong className="font-semibold text-[#18181B]">120+ enterprises</strong> are{' '}
            <em className="font-serif italic text-[#A07A4F]">satisfied with the precision</em>{' '}
            and have built their landmark spaces with us.
          </p>
        </div>

        {/* View All Archive Link */}
        <Link
          href="/portfolio"
          data-cursor-text="VIEW ALL"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#18181B] hover:text-[#A07A4F] transition-colors font-medium border-b border-[#18181B]/20 pb-1 shrink-0"
        >
          <span>View All Realizations (120+)</span>
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

    </div>
  );
}
