'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltShowcaseCardProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function TiltShowcaseCard({
  src,
  alt,
  className = '',
  priority = false,
}: TiltShowcaseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates relative to card center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for fluid movement
  const springConfig = { damping: 22, stiffness: 260, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Dynamic 3D tilt angles
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  // Dynamic light glare position
  const glareX = useTransform(smoothX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized mouse position relative to center: -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

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
      className={`relative select-none [perspective:1200px] cursor-pointer ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[5/6] w-full overflow-hidden bg-[#EFECE6] border border-[#18181B]/15 shadow-2xl transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(24,24,27,0.22)]"
      >
        {/* Architectural Image */}
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="h-full w-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: 'translateZ(10px) scale(1.04)' }}
        />

        {/* Ambient Cursor Glare / Light Reflection */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle 350px at ${gx} ${gy}, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 80%)`
            ),
          }}
        />

        {/* Subtle Architectural Border Rim */}
        <div className="pointer-events-none absolute inset-0 border border-white/20" />
      </motion.div>
    </div>
  );
}
