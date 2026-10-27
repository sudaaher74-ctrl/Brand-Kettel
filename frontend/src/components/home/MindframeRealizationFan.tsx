'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mic, Sparkles } from 'lucide-react';

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

  // Compute wide horizontal distribution to completely fill left and right space
  const getCardTransform = (offset: number) => {
    if (!mounted || screenWidth >= 1200) {
      // Large screens / Desktops: Wide horizontal spread covering entire container
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
        return { x: '-35.5vw', scale: 0.84, zIndex: 10, opacity: 0.92, rotateY: 6 };
      }
      // offset === 2
      return { x: '35.5vw', scale: 0.84, zIndex: 10, opacity: 0.92, rotateY: -6 };
    }

    if (screenWidth >= 768) {
      // Tablets / Medium screens
      if (offset === 0) {
        return { x: '0vw', scale: 1, zIndex: 30, opacity: 1, rotateY: 0 };
      }
      if (offset === -1) {
        return { x: '-24vw', scale: 0.88, zIndex: 20, opacity: 0.94, rotateY: 3 };
      }
      if (offset === 1) {
        return { x: '24vw', scale: 0.88, zIndex: 20, opacity: 0.94, rotateY: -3 };
      }
      if (offset === -2) {
        return { x: '-42vw', scale: 0.8, zIndex: 10, opacity: 0.85, rotateY: 6 };
      }
      return { x: '42vw', scale: 0.8, zIndex: 10, opacity: 0.85, rotateY: -6 };
    }

    // Mobile screens (< 768px): Focus on center card with adjacent cards peeking
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
          1. UPPER SECTION HEADER: Headline & Overlapping Sector Badges
          ───────────────────────────────────────────────────────────── */}
      <div className="w-full flex items-start justify-between px-2 sm:px-4 mb-4 sm:mb-8">
        
        {/* Left Headline: "Create your" (Cursive) + "space with US" */}
        <div>
          <h2 className="tracking-tight leading-[0.98]">
            <span className="font-alex-brush text-5xl sm:text-7xl lg:text-[5.5rem] text-[#18181B] font-normal block mb-1">
              Create your
            </span>
            <span className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-[#18181B] tracking-tight">
              space{' '}
            </span>
            <span className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B]">
              with US
            </span>
          </h2>
        </div>

        {/* Right Badges: Staggered "Comfort" & "Buildings" with thin black outline */}
        <div className="relative flex flex-col items-end pt-3 sm:pt-4">
          <div className="px-5 sm:px-6 py-1.5 sm:py-2 rounded-full border border-black/80 bg-[#FAF8F5] text-xs sm:text-sm font-sans text-black z-10 shadow-xs">
            Comfort
          </div>
          <div className="-mt-2 sm:-mt-2.5 mr-3 sm:mr-4 px-5 sm:px-6 py-1.5 sm:py-2 rounded-full border border-black/80 bg-[#FAF8F5] text-xs sm:text-sm font-sans text-black z-20 shadow-xs">
            Buildings
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. 3D PERSPECTIVE FANNED CARDS (Full-Width Arc from Left to Right Edge)
          ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[540px] sm:h-[600px] lg:h-[660px] xl:h-[700px] flex items-center justify-center [perspective:1800px] overflow-hidden my-2 sm:my-4">
        
        <div className="relative w-full h-full flex items-center justify-center">
          {CARDS.map((card, idx) => {
            // Compute relative offset from the currently active center card: -2, -1, 0, 1, 2
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
                className={`absolute w-[86%] sm:w-[50%] md:w-[38%] lg:w-[30%] xl:w-[26%] 2xl:w-[24%] h-[480px] sm:h-[540px] lg:h-[600px] xl:h-[640px] rounded-[30px] sm:rounded-[36px] overflow-hidden cursor-pointer bg-neutral-900 transition-shadow duration-300 ${
                  isCenter
                    ? 'shadow-[0_35px_70px_-15px_rgba(0,0,0,0.38)] ring-1 ring-[#18181B]/15'
                    : 'shadow-[0_15px_35px_-10px_rgba(0,0,0,0.22)] hover:shadow-2xl'
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
                  <div className="bg-[#FAF8F5] pl-5 pr-4 py-2.5 rounded-bl-[22px] font-mono text-[11px] sm:text-xs font-semibold text-[#71717A] tracking-wider">
                    {card.number}
                  </div>
                </div>

                {/* Bottom Overlay with Subtle Gradient (Preserves image clarity while keeping text readable) */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-7 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white pt-28">
                  
                  {/* Card Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-white capitalize leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/90 font-light line-clamp-1">
                    {card.subtitle}
                  </p>

                  {/* Solid White Pill Tags (office, 480m², for business, modular, etc.) */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5 sm:gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white text-neutral-800 text-[10px] sm:text-[11px] font-sans font-medium shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Center Card Interactive Email & Contact Pill Bar */}
                  {isCenter && (
                    <div className="mt-5">
                      <form
                        onSubmit={handleEmailSubmit}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center rounded-full bg-white/95 backdrop-blur-md p-1 shadow-lg border border-black/5"
                      >
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={submitted ? 'Message sent!' : 'Enter your e-mail'}
                          disabled={submitted}
                          className="flex-1 bg-transparent px-4 text-xs sm:text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none font-light"
                        />
                        <button
                          type="submit"
                          disabled={submitted}
                          className="px-4 sm:px-5 py-2 rounded-full border border-black/80 bg-white hover:bg-neutral-50 text-neutral-900 text-xs sm:text-sm font-sans font-medium transition-colors flex items-center gap-1.5 shrink-0 shadow-xs"
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

      {/* ─────────────────────────────────────────────────────────────
          3. BOTTOM CONTROLS: "🎙 AI Helper" (Left) & Customer Stats / Avatars (Right)
          ───────────────────────────────────────────────────────────── */}
      <div className="w-full mt-4 sm:mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#18181B]/15 px-2 sm:px-4">
        
        {/* Bottom Left: "🎙 AI Helper" Pill Button */}
        <Link
          href="/contact"
          data-cursor-text="ASK"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/80 bg-[#FAF8F5] text-xs sm:text-sm font-sans text-black hover:bg-black hover:text-white transition-all shadow-xs cursor-pointer"
        >
          <Mic className="size-3.5 stroke-[2]" />
          <span className="font-medium">AI Helper</span>
        </Link>

        {/* Bottom Right: "2741 customers are satisfied..." + Avatars Reviews Capsule */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 text-center sm:text-right">
          <div>
            <p className="text-xs sm:text-sm text-[#52525B] leading-snug">
              <strong className="font-bold text-[#18181B] text-sm sm:text-base">2741</strong> customers are{' '}
              <em className="font-serif italic text-black font-normal">satisfied</em> with the results<br className="hidden sm:inline" />
              and have created their own dream spaces{' '}
              <em className="font-serif italic text-black font-normal">with us.</em>
            </p>
          </div>

          {/* Customer Reviews Capsule with 3 Photo Avatars + Sparkle Badge */}
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] sm:text-xs font-normal text-[#71717A]">
              Customer reviews
            </span>
            <div className="flex items-center -space-x-2">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden ring-2 ring-[#FAF8F5] shadow-xs">
                <Image
                  src="/imgs/avatar_user1.jpg"
                  alt="Customer Reviewer 1"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden ring-2 ring-[#FAF8F5] shadow-xs">
                <Image
                  src="/imgs/avatar_user2.jpg"
                  alt="Customer Reviewer 2"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden ring-2 ring-[#FAF8F5] shadow-xs">
                <Image
                  src="/imgs/avatar_user3.jpg"
                  alt="Customer Reviewer 3"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#18181B] flex items-center justify-center text-white ring-2 ring-[#FAF8F5] shadow-xs">
                <Sparkles className="size-3.5 text-white" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
