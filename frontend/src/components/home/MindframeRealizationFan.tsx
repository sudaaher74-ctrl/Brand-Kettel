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
    id: 'four-story-office',
    number: '20/20',
    title: 'Four-story office',
    subtitle: 'Installed between buildings',
    tags: ['office', '480m²', 'for business', 'modular'],
    imageSrc: '/imgs/four_story_urban_insert.jpg',
    imageAlt: 'Four-story modern architectural building installed between historic townhouses',
    href: '/portfolio',
  },
  {
    id: 'cafe-house',
    number: '19/20',
    title: 'Cafe house',
    subtitle: 'Installation near the building',
    tags: ['cafe', '120m²', 'for business', 'frame'],
    imageSrc: '/imgs/commercial_glass_facade.jpg',
    imageAlt: 'European cafe house with modern double-height glass vitrine facade',
    href: '/portfolio',
  },
  {
    id: 'modular-space',
    number: '01/20',
    title: 'Modular space',
    subtitle: 'Recommended on the Black Sea coast',
    tags: ['villa', '65m²', 'for living', 'prefabricated'],
    imageSrc: '/imgs/modular_architectural_pavilion.jpg',
    imageAlt: 'Modular space pavilion recommended on the Black Sea coast',
    href: '/portfolio',
  },
  {
    id: 'two-story-villa',
    number: '02/20',
    title: 'Two story villa',
    subtitle: 'Recommended for coastal cafes',
    tags: ['villa', '132m²', 'cafe', 'prefabricated'],
    imageSrc: '/imgs/two_story_coastal_villa.jpg',
    imageAlt: 'Two story cantilevered villa recommended for coastal cafes',
    href: '/portfolio',
  },
  {
    id: 'three-story-cafe',
    number: '03/20',
    title: 'Three-story cafe',
    subtitle: 'Recommended with restoration',
    tags: ['cafe', '240m²', 'for business', 'frame'],
    imageSrc: '/imgs/three_story_cafe.jpg',
    imageAlt: 'Three-story cafe recommended with architectural restoration',
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
    if (!email) return;
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
          <p className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C5A880] mb-3">
            02 / Realizations
          </p>
          <h2 className="tracking-tight leading-[0.92]">
            <span className="font-alex-brush text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-normal block -mb-2">
              Create your
            </span>
            <span className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
              space{' '}
            </span>
            <span className="font-serif italic text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#C5A880]">
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
                        className="flex items-center rounded-full bg-white/10 backdrop-blur-md p-1 shadow-lg border border-white/20"
                      >
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={submitted ? 'Message sent!' : 'Enter your e-mail'}
                          disabled={submitted}
                          className="flex-1 bg-transparent px-3.5 text-xs sm:text-sm text-white placeholder-white/50 focus:outline-none font-light"
                        />
                        <button
                          type="submit"
                          disabled={submitted}
                          className="px-4 sm:px-5 py-2 rounded-full bg-[#C5A880] hover:bg-[#B8996F] text-[#121214] text-xs sm:text-sm font-sans font-semibold transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
                        >
                          <span>Contact us</span>
                          <ArrowRight className="size-3.5" />
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
