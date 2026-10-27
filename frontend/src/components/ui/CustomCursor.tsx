'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Instantaneous cursor coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth lagging spring coordinates for trailing ring
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsClient(true);

    // Only show custom cursor on fine pointer devices (desktop with mouse/trackpad)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', () => setIsVisible(true));
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isClient || !isVisible) return null;

  return (
    <>
      {/* Precision Center Dot (tracks mouse instantly) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18181B]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />

      {/* Smooth Trailing Spring Ring (expands over clickable elements) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#18181B]/40"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          borderColor: isHovered ? '#A07A4F' : 'rgba(24, 24, 27, 0.4)',
          backgroundColor: isHovered ? 'rgba(160, 122, 79, 0.08)' : 'rgba(24, 24, 27, 0.02)',
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      />
    </>
  );
}
