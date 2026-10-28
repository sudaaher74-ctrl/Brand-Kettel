'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CardItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const CARDS: CardItem[] = [
  {
    id: 'retail-flagships',
    number: '01/20',
    title: 'Retail Flagships',
    subtitle: 'Emerald marble & custom bronze vitrines',
    tags: ['Retail', '4,200 sq.ft', 'High-CRI', 'Luxury'],
    imageSrc: '/imgs/commercial/bk_realization_retail.jpg',
    imageAlt: 'Brand Kettle Luxury Retail & Jewellery Flagship with Emerald Marble and Bronze Vitrines',
    href: '/portfolio',
  },
  {
    id: 'corporate-headquarters',
    number: '02/20',
    title: 'Corporate HQs',
    subtitle: 'Acoustic timber & executive boardrooms',
    tags: ['Corporate', '25,000 sq.ft', 'Turnkey MEP', 'Pan-India'],
    imageSrc: '/imgs/commercial/bk_realization_office.jpg',
    imageAlt: 'Brand Kettle Executive Corporate Boardroom with Slatted Oak Acoustic Walls',
    href: '/portfolio',
  },
  {
    id: 'flagship-atrium',
    number: '03/20',
    title: 'Turnkey Atrium',
    subtitle: 'Double-height fluted travertine & bronze',
    tags: ['Flagship Atrium', '18,500 sq.ft', 'Turnkey', 'German CNC'],
    imageSrc: '/imgs/commercial/bk_hero_flagship.jpg',
    imageAlt: 'Brand Kettle Turnkey Commercial Flagship Atrium with Fluted Travertine and Monumental Staircase',
    href: '/portfolio',
  },
  {
    id: 'hospitality-lounges',
    number: '04/20',
    title: 'Hospitality & Dining',
    subtitle: 'Backlit amber onyx bar & coffered timber',
    tags: ['Hospitality', '8,500 sq.ft', 'Onyx Bar', 'Bespoke'],
    imageSrc: '/imgs/commercial/bk_hospitality_lounge.jpg',
    imageAlt: 'Brand Kettle Signature Luxury Hospitality Lounge with Backlit Amber Onyx Bar',
    href: '/portfolio',
  },
  {
    id: 'precision-joinery',
    number: '05/20',
    title: 'Precision Joinery',
    subtitle: 'Laser-calibrated architectural millwork',
    tags: ['Direct Joinery', '±0.5mm', '5-Axis CNC', '50k sq.ft Plant'],
    imageSrc: '/imgs/commercial/bk_joinery_detail.jpg',
    imageAlt: 'Brand Kettle Architectural Fluted Oak Joinery Detail with Concealed Cove Lighting',
    href: '/portfolio',
  },
];

export default function MindframeRealizationFan() {
  // Center card is index 2 ("Modular space", 01/20) by default
  const [activeIndex, setActiveIndex] = useState(2);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1440);
  const total = CARDS.length;

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (idx: number) => {
    setActiveIndex(idx);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      window.location.href = '/contact';
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 4000);
  };

  // Compute wide horizontal distribution covering the full viewport
  const getCardTransform = (offset: number) => {
    if (!mounted || screenWidth >= 1200) {
      if (offset === 0) {
        return { x: '0vw', scale: 1.03, zIndex: 30, opacity: 1, rotateY: 0 };
      }
      if (offset === -1) {
        return { x: '-18.5vw', scale: 0.92, zIndex: 20, opacity: 0.96, rotateY: 3 };
      }
      if (offset === 1) {
        return { x: '18.5vw', scale: 0.92, zIndex: 20, opacity: 0.96, rotateY: -3 };
      }
      if (offset === -2) {
        return { x: '-36vw', scale: 0.84, zIndex: 10, opacity: 0.92, rotateY: 6 };
      }
      return { x: '36vw', scale: 0.84, zIndex: 10, opacity: 0.92, rotateY: -6 };
    }

    if (screenWidth >= 768) {
      if (offset === 0) {
        return { x: '0vw', scale: 1, zIndex: 30, opacity: 1, rotateY: 0 };
      }
      if (offset === -1) {
        return { x: '-24vw', scale: 0.89, zIndex: 20, opacity: 0.94, rotateY: 3 };
      }
      if (offset === 1) {
        return { x: '24vw', scale: 0.89, zIndex: 20, opacity: 0.94, rotateY: -3 };
      }
      if (offset === -2) {
        return { x: '-42vw', scale: 0.8, zIndex: 10, opacity: 0.86, rotateY: 6 };
      }
      return { x: '42vw', scale: 0.8, zIndex: 10, opacity: 0.86, rotateY: -6 };
    }

    // Mobile screens (< 768px)
    if (offset === 0) {
      return { x: '0%', scale: 1, zIndex: 30, opacity: 1, rotateY: 0 };
    }
    if (offset === -1) {
      return { x: '-80%', scale: 0.86, zIndex: 20, opacity: 0.88, rotateY: 4 };
    }
    if (offset === 1) {
      return { x: '80%', scale: 0.86, zIndex: 20, opacity: 0.88, rotateY: -4 };
    }
    return {
      x: offset < 0 ? '-140%' : '140%',
      scale: 0.75,
      zIndex: 10,
      opacity: 0,
      rotateY: 0,
    };
  };

  return (
    <div className="relative w-full select-none font-sans">
      
      {/* Dynamic Font Styling for Exact Calligraphy & Typography */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@1,400;1,600&display=swap');

        .font-alex-brush {
          font-family: 'Alex Brush', cursive;
        }
      `}</style>

      {/* ─────────────────────────────────────────────────────────────
          1. GRAND SECTION HEADER: Large Scale Editorial Typography
          ───────────────────────────────────────────────────────────── */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 px-2 sm:px-4 mb-6 sm:mb-10">
        
        {/* Left Headline: "02 / Realizations" + "Create your space with us" */}
        <div>
          <p className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A07A4F] mb-3">
            02 / Realizations
          </p>
          <h2 className="tracking-tight leading-[0.92]">
            <span className="font-alex-brush text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-normal block -mb-2">
              Create your
            </span>
            <span className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
              space{' '}
            </span>
            <span className="font-serif italic text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#A07A4F]">
              with us
            </span>
          </h2>
        </div>

        {/* Right Badges: Staggered "Comfort" & "Buildings" in Dark Luxury Theme */}
        <div className="relative flex flex-col items-end self-start md:self-end pt-2">
          <div className="px-5 sm:px-6 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-xs sm:text-sm font-sans text-white z-10 shadow-sm">
            Comfort
          </div>
          <div className="-mt-2 sm:-mt-2.5 mr-3 sm:mr-4 px-5 sm:px-6 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-xs sm:text-sm font-sans text-white z-20 shadow-sm">
            Buildings
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. 3D PERSPECTIVE FANNED CARDS (Wide Arc on Deep Dark Canvas)
          ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[470px] sm:h-[510px] lg:h-[560px] xl:h-[600px] flex items-center justify-center [perspective:1800px] overflow-hidden my-2">
        
        <div className="relative w-full h-full flex items-center justify-center">
          {CARDS.map((card, idx) => {
            // Compute relative offset from active center card: -2, -1, 0, 1, 2
            let offset = idx - activeIndex;
            if (offset < -2) offset += total;
            if (offset > 2) offset -= total;

            const isCenter = offset === 0;
            const anim = getCardTransform(offset);

            return (
              <motion.div
                key={card.id}
                onClick={() => handleCardClick(idx)}
                initial={false}
                animate={{
                  x: anim.x,
                  scale: anim.scale,
                  zIndex: anim.zIndex,
                  opacity: anim.opacity,
                  rotateY: anim.rotateY,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 28,
                }}
                className={`absolute w-[86%] sm:w-[50%] md:w-[38%] lg:w-[30%] xl:w-[26%] 2xl:w-[24%] h-[430px] sm:h-[470px] lg:h-[515px] xl:h-[545px] rounded-[26px] sm:rounded-[32px] overflow-hidden cursor-pointer bg-neutral-900 transition-shadow duration-300 ${
                  isCenter
                    ? 'shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7)] ring-1 ring-white/20'
                    : 'shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] hover:shadow-2xl'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Full-bleed Architectural Image */}
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  priority={isCenter}
                  sizes="(max-width: 768px) 85vw, 30vw"
                  className="object-cover object-center"
                />

                {/* Top-Right Tab Notch Badge (01/20, 02/20, 19/20, 20/20, etc.) */}
                <div className="absolute top-0 right-0 z-20">
                  <div className="bg-[#121214] pl-4 sm:pl-5 pr-3.5 sm:pr-4 py-2 rounded-bl-[20px] font-mono text-[10px] sm:text-xs font-semibold text-[#A1A1AA] tracking-wider">
                    {card.number}
                  </div>
                </div>

                {/* Bottom Overlay with Subtle Gradient */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/45 to-transparent text-white pt-24">
                  
                  {/* Card Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white tracking-tight capitalize leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/80 font-light line-clamp-1">
                    {card.subtitle}
                  </p>

                  {/* Solid White Pill Tags (office, 480m², for business, modular, etc.) */}
                  <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white text-[#121214] text-[10px] sm:text-[11px] font-sans font-medium shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Center Card Interactive Email & Contact Pill Bar */}
                  {isCenter && (
                    <div className="mt-4 sm:mt-5">
                      <form
                        onSubmit={handleEmailSubmit}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center rounded-full bg-white p-1 sm:p-1.5 shadow-2xl transition-all w-full border border-white/40"
                      >
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={submitted ? 'Message sent!' : 'Enter your email'}
                          disabled={submitted}
                          className="min-w-0 flex-1 bg-transparent px-2.5 sm:px-3 text-[11px] sm:text-xs text-[#18181B] placeholder-[#71717A] focus:outline-none font-light"
                        />
                        <button
                          type="submit"
                          disabled={submitted}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#18181B] hover:bg-[#A07A4F] text-white text-[11px] sm:text-xs font-medium transition-colors flex items-center gap-1 shrink-0 shadow-sm"
                        >
                          <span>Contact us</span>
                          <ArrowRight className="size-3" />
                        </button>
                      </form>
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
