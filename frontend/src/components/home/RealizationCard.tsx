'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface RealizationCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  clients: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  priority?: boolean;
}

export default function RealizationCard({
  number,
  category,
  title,
  description,
  clients,
  imageSrc,
  imageAlt,
  href,
  priority = false,
}: RealizationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 280, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Micro 3D tilt for a refined luxury feel
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  // Subtle ambient glare position
  const glareX = useTransform(smoothX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full [perspective:1200px]"
    >
      <Link
        href={href}
        data-cursor-text="VIEW"
        className="block h-full cursor-pointer focus:outline-none"
      >
        <motion.article
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="flex h-full flex-col justify-between overflow-hidden border border-[#18181B]/15 bg-[#FAF8F5] transition-all duration-500 hover:border-[#A07A4F] hover:shadow-[0_25px_50px_-12px_rgba(24,24,27,0.18)]"
        >
          {/* Top: Architectural Photography Container (Zero text overlay) */}
          <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#EFECE6]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle Glare Reflection following cursor */}
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.35 : 0,
                background: useTransform(
                  [glareX, glareY],
                  ([gx, gy]) =>
                    `radial-gradient(circle 320px at ${gx} ${gy}, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 80%)`
                ),
              }}
            />

            {/* Subtle inner framing edge */}
            <div className="pointer-events-none absolute inset-0 border-b border-[#18181B]/10" />
          </div>

          {/* Bottom: Editorial Details */}
          <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 bg-white/40 transition-colors duration-500 group-hover:bg-white">
            <div>
              {/* Category & Index Meta */}
              <div className="mb-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#A07A4F] font-semibold">
                <span>{number}</span>
                <span className="h-px w-3 bg-[#A07A4F]/60" />
                <span>{category}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-light text-[#18181B] tracking-tight leading-snug transition-colors duration-300 group-hover:text-[#A07A4F]">
                {title}
              </h3>

              {/* Editorial Description */}
              <p className="mt-3 text-sm leading-relaxed text-[#71717A] font-light">
                {description}
              </p>
            </div>

            {/* Card Footer Bar */}
            <div className="mt-8 flex items-center justify-between border-t border-[#18181B]/10 pt-4 font-mono text-[10px] uppercase tracking-[0.16em]">
              <span className="text-[#18181B]/60 font-medium">{clients}</span>
              <span className="inline-flex items-center gap-1.5 text-[#A07A4F] font-semibold transition-transform duration-300 group-hover:translate-x-1">
                <span>Explore</span>
                <ArrowRight className="size-3" />
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    </div>
  );
}
