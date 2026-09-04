'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { cleanImagePath } from '@/lib/imageUtils';

interface ProjectDetailMediaProps {
  projectName: string;
  heroImage?: string;
  gallery?: string[];
  children: React.ReactNode;
}

export default function ProjectDetailMedia({
  projectName,
  heroImage,
  gallery = [],
  children,
}: ProjectDetailMediaProps) {
  const cleanedHero = cleanImagePath(heroImage);
  const cleanedGallery = React.useMemo(() => {
    return (gallery || [])
      .map(cleanImagePath)
      .filter((img, idx, arr) => img && arr.indexOf(img) === idx && img !== cleanedHero);
  }, [gallery, cleanedHero]);

  const allImages = React.useMemo(() => {
    return [cleanedHero, ...cleanedGallery].filter(Boolean) as string[];
  }, [cleanedHero, cleanedGallery]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % allImages.length;
    });
  }, [allImages.length]);

  const prevImage = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current - 1 + allImages.length) % allImages.length;
    });
  }, [allImages.length]);

  // Handle keyboard events (Escape, Left, Right)
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, closeLightbox, nextImage, prevImage]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextImage();
      else prevImage();
    }
    touchStartX.current = null;
  };

  return (
    <>
      {/* Top Split: Project Story & Specs (Left) + Sticky Hero Photo Frame (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
        {/* Left Column: Children (Story, Category, Specs) */}
        <div className="lg:col-span-6 flex flex-col">{children}</div>

        {/* Right Column: Sticky Hero Photo Frame with Fullscreen Trigger */}
        {cleanedHero && (
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            <div
              onClick={() => openLightbox(0)}
              className="group relative rounded-[24px] overflow-hidden aspect-[4/3] lg:aspect-[4/5] w-full border border-white/15 bg-[#121216] shadow-2xl cursor-pointer"
            >
              <Image
                src={cleanedHero}
                alt={projectName}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Hover Overlay & Expand Badge */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md px-4 py-2 border border-white/20 text-white text-xs uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
                <Maximize2 className="h-3.5 w-3.5 text-[#C5A880]" />
                <span>Fullscreen View</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Gallery Grid */}
      {cleanedGallery && cleanedGallery.length > 0 && (
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium block mb-1">
                Visual Documentation
              </span>
              <h3 className="font-display font-light text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Project Gallery
              </h3>
            </div>
            <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">
              {cleanedGallery.length} {cleanedGallery.length === 1 ? 'View' : 'Views'} • Click to Zoom
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cleanedGallery.map((img, i) => {
              const itemIndex = cleanedHero ? i + 1 : i;
              return (
                <div
                  key={i}
                  onClick={() => openLightbox(itemIndex)}
                  className="group relative rounded-[20px] overflow-hidden aspect-[4/3] border border-white/10 bg-[#121216] cursor-pointer shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`${projectName} detail view ${i + 1}`}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover Overlay with Champagne Gold Zoom Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="h-11 w-11 rounded-full bg-[#C5A880] text-[#0A0A0B] flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="h-5 w-5" />
                    </span>
                  </div>

                  {/* Image number tag */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-wider text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Detail {i + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Interactive Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#0A0A0B]/95 backdrop-blur-2xl p-4 sm:p-8 select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar: Title & Close */}
            <div className="w-full max-w-7xl flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#C5A880] rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5">
                  {projectName}
                </span>
                <span className="text-xs text-white/60 tracking-wider">
                  {activeIndex + 1} of {allImages.length}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center border border-white/15 transition-all duration-300 cursor-pointer shadow-xl"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Center Stage: Active Image with Prev / Next Triggers */}
            <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-4 overflow-hidden">
              {/* Previous Button */}
              {allImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 sm:left-4 z-20 h-12 w-12 rounded-full bg-black/60 hover:bg-[#C5A880] hover:text-[#0A0A0B] text-white flex items-center justify-center border border-white/15 backdrop-blur-md transition-all duration-300 shadow-2xl cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {/* Main Image Container */}
              <div className="relative h-[65vh] sm:h-[72vh] w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#121216]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={allImages[activeIndex]}
                      alt={`${projectName} photo ${activeIndex + 1}`}
                      className="object-contain"
                      fill
                      priority
                      sizes="95vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              {allImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 sm:right-4 z-20 h-12 w-12 rounded-full bg-black/60 hover:bg-[#C5A880] hover:text-[#0A0A0B] text-white flex items-center justify-center border border-white/15 backdrop-blur-md transition-all duration-300 shadow-2xl cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>

            {/* Bottom Thumbnail Strip */}
            {allImages.length > 1 && (
              <div className="w-full max-w-3xl flex items-center justify-center gap-2.5 overflow-x-auto py-2 px-4 z-10 no-scrollbar">
                {allImages.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer flex-shrink-0 ${
                      activeIndex === idx
                        ? 'border-[#C5A880] ring-2 ring-[#C5A880]/50 scale-105'
                        : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={thumb}
                      alt={`Thumbnail ${idx + 1}`}
                      className="object-cover"
                      fill
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
