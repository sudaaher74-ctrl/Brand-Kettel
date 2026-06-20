import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/ui/ProjectGrid';
import { projects } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Premium Residential Interiors',
  description:
    'Bespoke premium residential interiors by Brand Kettle BuildSpaces — homes where comfort, craft and detail meet.',
  keywords: ['Premium Residential Interiors', 'Luxury Home Interiors', 'Residential Interior Design'],
};

export default function ResidentialPage() {
  const residential = projects.filter((p) => p.segment === 'residential');

  return (
    <>
      <PageHero
        eyebrow="Residential interiors"
        title="Premium homes, crafted with care"
        subtitle="A refined, secondary practice for private clients who value the same execution discipline we bring to commercial work."
        image="/imgs/p061_076.jpg"
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Selected homes" title="Where comfort meets craft" />
          <div className="mt-12">
            <ProjectGrid items={residential} />
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-accent">
              Plan your home interior
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
