import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { serviceJsonLd, jsonLdScript } from '@/lib/structuredData';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/ui/ProjectGrid';
import { projects as fallbackProjects } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = pageMetadata({
  path: '/jewellery-showrooms',
  title: 'Jewellery Showroom Interior Designers | Jewellery Store Interior Design',
  description: 'Brand Kettle BuildSpaces specializes in Jewellery Showroom Fit-Out and Jewellery Display Solutions. We are leading Jewellery Showroom Interior Designers crafting secure, luminous retail environments.',
  socialTitle: 'Jewellery Showroom Fit-Outs — Secure, Luminous, Fast',
  socialDescription: 'Display counters, high-CRI lighting and secure millwork for PNG Jewellers, Giva and Indriya, prefabricated for fast-track handover.',
  image: '/imgs/commercial/jewellery-showroom-display.webp',
  imageAlt: 'Illuminated jewellery showroom display counters built by Brand Kettle BuildSpaces',
});

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getJewelleryProjects() {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackProjects.filter((p) => p.category.toLowerCase().includes('jewel'));
    const data = await res.json();
    const jewellery = (Array.isArray(data) ? data : fallbackProjects).filter((p: any) => p.category.toLowerCase().includes('jewel'));
    return jewellery.length > 0 ? jewellery : fallbackProjects.filter((p) => p.category.toLowerCase().includes('jewel'));
  } catch (error) {
    console.warn(`Failed to fetch jewellery projects:`, error);
    return fallbackProjects.filter((p) => p.category.toLowerCase().includes('jewel'));
  }
}

export default async function JewelleryShowroomsPage() {
  const jewellery = await getJewelleryProjects();

  const serviceSchema = serviceJsonLd({
    name: 'Jewellery Showroom Fit-Outs',
    serviceType: 'Jewellery Showroom Interior Design',
    description: 'Jewellery showroom interior design and fit-out: secure display counters, high-CRI illumination, bespoke millwork and vault-adjacent detailing, prefabricated for fast-track handover.',
    path: '/jewellery-showrooms',
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceSchema)} />
      <PageHero
        eyebrow="Jewellery Showrooms"
        title="Secure, luminous environments"
        subtitle="Crafting bespoke Jewellery Store Interior Design that enhances high-value display."
        image="/imgs/commercial/malbargold1.jpg"
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Selected showrooms"
            title="Premium jewellery display solutions"
          />
          <div className="mt-12">
            <ProjectGrid items={jewellery} />
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-accent">
              Start your showroom project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
