'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Asterisk, Briefcase, TrendingUp, Handshake, ArrowUpRight } from 'lucide-react';

const SERVICE_LINKS = [
  '/commercial-fit-outs',
  '/jewellery-showrooms',
  '/residential-interiors',
];

const ICONS = [Briefcase, TrendingUp, Handshake];

type Service = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

const CARD_THEMES = [
  {
    card: 'bg-[#161310] border border-white/10',
    icon: 'text-accent',
    iconWrap: 'bg-white/8',
    title: 'text-white',
    body: 'text-white/55',
    pill: 'bg-white text-[#141310]',
  },
  {
    card: 'bg-accent',
    icon: 'text-[#1a1410]',
    iconWrap: 'bg-white/25',
    title: 'text-[#1a1410]',
    body: 'text-[#1a1410]/70',
    pill: 'bg-[#1a1410] text-white',
  },
  {
    card: 'bg-[#1f1a14] border border-accent/20',
    icon: 'text-accent',
    iconWrap: 'bg-white/8',
    title: 'text-white',
    body: 'text-white/55',
    pill: 'bg-white text-[#141310]',
  },
];

export default function Expertise({ services }: { services: Service[] | null }) {
  const items = (services ?? []).slice(0, 3);
  if (items.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="container-px">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70">
            <Asterisk className="h-4 w-4 text-accent" />
            Our Expertise
          </span>
          <h2 className="mt-5 max-w-2xl font-display text-[34px] sm:text-[44px] font-bold leading-[1.1] text-white">
            Essential expertise for modern commercial spaces
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            const theme = CARD_THEMES[i % CARD_THEMES.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.06, y: -10 }}
                className={`group relative z-0 hover:z-10 rounded-[28px] p-8 shadow-sm transition-shadow duration-300 hover:shadow-2xl ${theme.card}`}
                style={{ transformOrigin: 'center bottom' }}
              >
                <div className={`grid h-14 w-14 place-items-center rounded-2xl ${theme.iconWrap}`}>
                  <Icon className={`h-6 w-6 ${theme.icon}`} strokeWidth={1.75} />
                </div>

                <h3 className={`mt-8 text-xl font-bold leading-snug ${theme.title}`}>{s.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${theme.body}`}>{s.description}</p>

                <Link
                  href={SERVICE_LINKS[i] ?? '/services'}
                  className={`relative z-10 mt-8 inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold shadow-md transition-transform group-hover:translate-y-0.5 ${theme.pill}`}
                >
                  Explore More
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
