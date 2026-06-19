import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/ui/ProjectGrid';
import { projects } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Projects — Office, Retail & Turnkey Fit-Outs',
  description:
    'Explore commercial interior projects by Brand Kettle BuildSpaces: corporate office interiors, retail fit-outs, jewellery showrooms and turnkey commercial spaces.',
  keywords: [
    'Commercial Interior Design',
    'Corporate Office Interiors',
    'Retail Interior Design',
    'Commercial Fit-Out Company',
    'Turnkey Interior Solutions',
  ],
};

export default function CommercialProjectsPage() {
  const commercial = projects.filter((p) => p.segment === 'commercial');

  return (
    <>
      <PageHero
        eyebrow="Commercial projects"
        title="Spaces engineered for performance and brand impact"
        subtitle="Our core expertise — office interiors, retail environments, showrooms and turnkey commercial campuses."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=70"
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Selected work"
            title="Commercial interiors, delivered turnkey"
          />
          <div className="mt-12">
            <ProjectGrid items={commercial} />
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-accent">
              Start a commercial project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
