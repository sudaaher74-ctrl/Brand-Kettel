'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  fullScreen = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  fullScreen?: boolean;
}) {
  if (fullScreen) {
    return (
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
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
          {/* Overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="container-px relative z-10 text-center text-white mt-16 sm:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-px w-6 bg-accent" />
            <span className="eyebrow text-white/90">{eyebrow}</span>
            <span className="h-px w-6 bg-accent" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-section-lg text-white"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-body-main max-w-[700px] mx-auto text-white/90"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-surface pt-28 sm:pt-36">
      <div className="container-px relative pb-12 sm:pb-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow"
            >
              <span className="h-px w-6 bg-accent" />
              {eyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-section-lg text-ink"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-body-main max-w-[700px]"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="scene"
          >
            {image.endsWith('.mp4') ? (
              <div className="relative w-full overflow-hidden rounded-none shadow-none">
                <video
                  src={image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              </div>
            ) : (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none shadow-none">
                <Image
                  src={image}
                  alt={title}
                  className="object-cover"
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
