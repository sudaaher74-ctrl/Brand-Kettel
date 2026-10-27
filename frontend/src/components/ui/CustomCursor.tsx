'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
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
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor-text]') as HTMLElement | null;
      if (cursorTarget) {
        setIsHovered(true);
        setCursorText(cursorTarget.getAttribute('data-cursor-text') || '');
        return;
      }

      const interactiveTarget = target.closest(
        'a, button, input, textarea, .cursor-pointer, [role="button"]'
      );
      if (interactiveTarget) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
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
      {/* Precision Center Dot (tracks mouse instantly, fades when text is shown) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18181B]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity: cursorText ? 0 : 1,
          scale: cursorText ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Smooth Trailing Spring Ring / View Badge */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width: cursorText ? 64 : isHovered ? 44 : 26,
          height: cursorText ? 64 : isHovered ? 44 : 26,
          borderColor: cursorText
            ? 'rgba(160, 122, 79, 0.9)'
            : isHovered
            ? '#A07A4F'
            : 'rgba(24, 24, 27, 0.4)',
          backgroundColor: cursorText
            ? 'rgba(160, 122, 79, 0.92)'
            : isHovered
            ? 'rgba(160, 122, 79, 0.08)'
            : 'rgba(24, 24, 27, 0.02)',
          boxShadow: cursorText
            ? '0 10px 25px -5px rgba(160, 122, 79, 0.4)'
            : 'none',
        }}
        transition={{
          type: 'spring',
          stiffness: 380,
          damping: 24,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="font-mono text-[9px] font-semibold tracking-[0.2em] text-white uppercase select-none pointer-events-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
