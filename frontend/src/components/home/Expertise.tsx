'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const SERVICE_LINKS = [
  '/commercial-fit-outs',
  '/jewellery-showrooms',
  '/residential-interiors',
];

type Service = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

export default function Expertise({ services }: { services: Service[] | null }) {
  const items = (services ?? []).slice(0, 3);
  if (items.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="container-px">
        {/* Header */}
        <div className="flex items-start justify-between">
          <span className="max-w-[140px] text-[11px] font-semibold uppercase leading-relaxed tracking-wide text-white/45">
            Doing our job from the bottom of our hearts
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-white/45">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Brand Kettle
          </span>
        </div>

        <h2 className="-mt-2 font-display leading-[0.9] text-white">
          <span className="block text-[15vw] sm:text-[9vw] lg:text-[6.5vw] font-light tracking-tight">OUR</span>
          <span className="-mt-2 sm:-mt-4 block text-[15vw] sm:text-[9vw] lg:text-[6.5vw] font-extrabold tracking-tight">
            EXPERTISE
          </span>
        </h2>

        {/* Zig-zag rows */}
        <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
          {items.map((s, i) => (
            <Row key={s.title} service={s} index={i} link={SERVICE_LINKS[i] ?? '/services'} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[#1a1410] transition-transform hover:-translate-y-0.5"
          >
            Get a Free Estimate
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Row({ service, index, link }: { service: Service; index: number; link: string }) {
  const reversed = index % 2 === 1;
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`grid grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2 ${
        reversed ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
            {service.title}
          </h3>
          <span className="h-px flex-1 max-w-[60px] bg-white/15" />
        </div>
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/55">
          {service.description}
        </p>
        <Link
          href={link}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8D7458] underline decoration-[#8D7458]/40 underline-offset-4"
        >
          Learn more
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <span
          className={`absolute ${
            reversed ? 'left-4 top-4' : 'right-4 top-4'
          } font-display text-3xl font-light text-white drop-shadow-md sm:text-4xl`}
        >
          {num}
        </span>
      </motion.div>
    </div>
  );
}
