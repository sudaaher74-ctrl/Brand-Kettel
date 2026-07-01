'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';

const IMAGES = [
  '/imgs/experties1.png',
  '/imgs/experties2.png',
  '/imgs/residential3.png',
];

function ImageLayer({ src, progress, index }: { src: string, progress: MotionValue<number>, index: number }) {
  // Same logic as Content panes
  const start = index * (1 / 3);
  const end = (index + 1) * (1 / 3);
  
  const fadeStart = start + 0.05;
  const fadeEnd = end - 0.05;

  const opacity = useTransform(
    progress,
    [start - 0.1, fadeStart, fadeEnd, end + 0.1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [start, end],
    [1.05, 1]
  );

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="absolute inset-0 w-full h-full"
    >
      <Image
        src={src}
        alt={`Expertise Image ${index + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 60vw"
        priority={index === 0}
      />
      {/* Subtle overlay for better blending */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
    </motion.div>
  );
}

export default function ExpertiseImages({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <div className="relative w-full h-full bg-surface overflow-hidden">
      {IMAGES.map((src, index) => (
        <ImageLayer 
          key={src} 
          src={src} 
          progress={scrollProgress} 
          index={index} 
        />
      ))}
    </div>
  );
}
