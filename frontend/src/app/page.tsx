import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import Expertise from '@/components/home/Expertise';
import Showcase from '@/components/home/Showcase';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import { 
  projects as fallbackProjects,
  services as fallbackServices,
  processSteps as fallbackProcess
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
  const processData = await getContent('processSteps', fallbackProcess);

  return (
    <>
      <Hero />
      <Welcome />
      <Expertise services={servicesData} />
      <Showcase featured={featured} />
      <ConsultationCTA />
    </>
  );
}
