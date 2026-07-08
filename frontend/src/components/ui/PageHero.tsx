'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
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
