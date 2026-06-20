import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import FilterableProjectGallery from '@/components/ui/FilterableProjectGallery';
import { caseStudies } from '@/lib/projectsData';

export const metadata: Metadata = {
  title: 'Portfolio — Commercial & Residential Interior Projects',
  description:
    'A portfolio of commercial interiors, retail fit-outs, jewellery showrooms, turnkey projects and premium residential interiors by Brand Kettle BuildSpaces.',
};

export default function PortfolioPage() {
  return (
    <section className="bg-background py-8 sm:py-12">
      <div className="container-px">
        <FilterableProjectGallery projects={caseStudies} />
      </div>
    </section>
  );
}
