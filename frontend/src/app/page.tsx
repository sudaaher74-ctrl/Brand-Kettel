import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import ExpertiseStorytelling from '@/components/home/expertise/ExpertiseStorytelling';
import Showcase from '@/components/home/Showcase';
import Testimonials from '@/components/home/Testimonials';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import { 
  projects as fallbackProjects,
  services as fallbackServices,
  testimonials as fallbackTestimonials,
} from '@/lib/data';

export const revalidate = 60;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function fetchJson(path: string, fallback: any) {
  try {
    const res = await fetch(`${API_URL}${path}`, { next: { revalidate: 60 } });
    if (!res.ok) return fallback;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : fallback;
  } catch {
    return fallback;
  }
}

export default async function HomePage() {
  const [projects, services, testimonials] = await Promise.all([
    fetchJson('/api/admin/projects', fallbackProjects),
    fetchJson('/api/admin/services', fallbackServices),
    fetchJson('/api/admin/testimonials', fallbackTestimonials),
  ]);

  const featured = projects.length > 0 ? (projects.find((p: any) => p.slug === 'meridian-turnkey-campus') ?? projects[0]) : null;

  return (
    <>
      <Hero />
      <Welcome />
      <ExpertiseStorytelling services={services.slice(0, 3)} />
      <Showcase featured={featured} />
      <Testimonials testimonials={testimonials} />
      <ConsultationCTA />
    </>
  );
}

