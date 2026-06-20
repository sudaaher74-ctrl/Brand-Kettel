import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { services as fallbackServices } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Services — Design, Build & Furnish',
  description:
    'Commercial interiors, retail stores, jewellery showrooms, office fit-outs, residential interiors and custom furniture — delivered turnkey by Brand Kettle BuildSpaces.',
  keywords: [
    'Commercial Interior Design',
    'Office Interior Design',
    'Retail Interior Design',
    'Jewellery Showroom Design',
    'Turnkey Interior Solutions',
  ],
};

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getServices() {
  try {
    const res = await fetch(`${API_URL}/api/admin/content?type=services`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackServices;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : fallbackServices;
  } catch {
    return fallbackServices;
  }
}

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Design, Build & Furnish — under one roof"
        subtitle="Six disciplines, one accountable team, delivered end-to-end from concept to handover."
        image="/imgs/p061_076.jpg"
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="What we do" title="Capabilities across every commercial discipline" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s: { title: string; image: string; tag: string; description: string }, i: number) => (
              <Reveal key={s.title} index={i % 3}>
                <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-card transition-shadow duration-300 hover:shadow-float">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                      {s.tag}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-accent">
              Discuss your requirement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
