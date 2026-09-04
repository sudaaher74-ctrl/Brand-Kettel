'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  fullScreen = false,
  hideText = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  fullScreen?: boolean;
  hideText?: boolean;
}) {
  if (fullScreen) {
    return (
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-[#0A0A0B]">
        {/* Background Media */}
        <div className="absolute inset-0 z-0">
          {image.endsWith('.mp4') ? (
            <video
              src={image}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={image}
              alt={title}
              className="object-cover"
              fill
              priority
              sizes="100vw"
            />
          )}
          {/* Subtle cinematic gradient overlay to ensure text readability */}
          {!hideText && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/60 via-black/40 to-[#0A0A0B]" />
          )}
        </div>

        {/* Content */}
        {!hideText && (
          <div className="container-px relative z-10 text-center text-white mt-16 sm:mt-0 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-4 py-1.5 mb-6 shadow-xl"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#C5A880]">
                {eyebrow}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-[0.02em] leading-[1.1]"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] pt-28 sm:pt-36">
      <div className="container-px relative pb-14 sm:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Column: Typography */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 mb-6 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#C5A880]">
                {eyebrow}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-[0.02em] leading-[1.15]"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed max-w-xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Right Column: Framed Media with Ambient Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            {/* Ambient halo glow */}
            <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-tr from-[#C5A880]/20 via-transparent to-[#C5A880]/10 blur-2xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

            {image.endsWith('.mp4') ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/15 bg-[#121216] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <video
                  src={image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/15 bg-[#121216] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <Image
                  src={image}
                  alt={title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
