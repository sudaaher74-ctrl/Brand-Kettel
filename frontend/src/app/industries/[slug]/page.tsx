import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { INDUSTRIES, getIndustry } from '@/lib/landingContent';
import { breadcrumbJsonLd, serviceJsonLd, jsonLdScript } from '@/lib/structuredData';
import PageHero from '@/components/ui/PageHero';
import LandingCopy from '@/components/ui/LandingCopy';
import Link from 'next/link';

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const industry = getIndustry((await params).slug);
  if (!industry) return {};
  return pageMetadata({
    path: `/industries/${industry.slug}`,
    title: industry.title,
    description: industry.description,
    socialTitle: industry.title,
    socialDescription: industry.description,
    image: industry.image,
    imageAlt: `${industry.name} interior fit-out by Brand Kettle BuildSpaces`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();
  const path = `/industries/${industry.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceJsonLd({ name: industry.title, serviceType: `${industry.name} Interior Fit-Out`, description: industry.description, path }),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: industry.name, path },
          ]),
        )}
      />
      <PageHero eyebrow={industry.name} title={industry.title} subtitle={industry.heroSubtitle} image={industry.image} />
      <LandingCopy content={industry.content} path={path} />
      <section className="bg-background pb-16 text-center">
        <Link href="/contact" className="btn-accent">Discuss your {industry.name.toLowerCase()} project</Link>
      </section>
    </>
  );
}

