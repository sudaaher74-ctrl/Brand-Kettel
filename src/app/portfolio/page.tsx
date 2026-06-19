import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/ui/ProjectGrid';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Portfolio — Commercial & Residential Interior Projects',
  description:
    'A portfolio of commercial interiors, retail fit-outs, jewellery showrooms, turnkey projects and premium residential interiors by Brand Kettle BuildSpaces.',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Every space, designed to deliver"
        subtitle="A selection of commercial and residential projects across India."
        image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=70"
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="All projects" title="Selected work" />
          <div className="mt-12">
            <ProjectGrid items={projects} />
          </div>
        </div>
      </section>
    </>
  );
}
