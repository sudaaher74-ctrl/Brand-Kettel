import HeroGrid from '@/components/home/HeroGrid';
import Expertise from '@/components/home/Expertise';
import PromoSection from '@/components/home/PromoSection';
import {
  projects as fallbackProjects,
  services as fallbackServices
} from '@/lib/data';

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getContent(type: string, fallback: any) {
  try {
    const res = await fetch(`${API_URL}/api/admin/content?type=${type}`, { next: { revalidate: 60 } });
    if (!res.ok) return fallback;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : fallback;
  } catch {
    return fallback;
  }
}

async function getProjects() {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return fallbackProjects;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

export default async function HomePage() {
  const projects = await getProjects();
  const featured = projects.find((p) => p.slug === 'meridian-turnkey-campus') ?? projects[0];

  const servicesData = await getContent('services', fallbackServices);

  return (
    <>
      <HeroGrid />
      <Expertise services={servicesData} />
      <PromoSection
        eyebrow="Who we are"
        title="Design & Build"
        body="A premium Design Build Company offering Commercial & Retail Turnkey Interior Solutions. From concept and 3D visualisation to on-site execution, every detail is crafted by one accountable in-house team."
        ctaLabel="Learn More"
        ctaHref="/about"
        image={featured.image}
        alt={`${featured.name} — ${featured.category}`}
      />
      <PromoSection
        eyebrow="Our work"
        title="Our Portfolio"
        body="Browse our commercial and retail portfolio, showcasing how we've transformed our clients' vision into reality across India — from luxury retail and jewellery showrooms to corporate offices and hospitality."
        ctaLabel="Explore"
        ctaHref="/portfolio"
        image="/imgs/commercial/malbargold1.jpg"
        alt="Brand Kettle Portfolio"
      />
      <PromoSection
        eyebrow="Get in touch"
        title="Visit Us"
        body="Speak with our in-house design and build team about your space. We offer Commercial & Retail Turnkey Interior Solutions, delivered end-to-end on time."
        ctaLabel="Contact Us"
        ctaHref="/contact"
        image="/imgs/commercial/brandkettle1.jpg"
        alt="Brand Kettle Office"
      />
    </>
  );
}
