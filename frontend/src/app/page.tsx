import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import Expertise from '@/components/home/Expertise';
import Showcase from '@/components/home/Showcase';
import Testimonials from '@/components/home/Testimonials';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import WhyBrandKettle from '@/components/home/WhyBrandKettle';
import { fetchJson } from '@/lib/api';
import { 
  projects as fallbackProjects,
  services as fallbackServices,
  testimonials as fallbackTestimonials,
} from '@/lib/data';

export const revalidate = 60;

export default async function HomePage() {
  const [projects, services, testimonials] = await Promise.all([
    fetchJson('/api/admin/projects', fallbackProjects),
    fetchJson('/api/admin/services', fallbackServices),
    fetchJson('/api/admin/testimonials', fallbackTestimonials),
  ]);

  // Use the first project marked as featured, or fall back to the first project
  const featured: any =
    projects.find((p: any) => p.featured) ?? (projects.length > 0 ? projects[0] : null);

  return (
    <>
      <Hero />
      <Welcome />
      <Expertise services={services.slice(0, 3)} />
      <Showcase featured={featured} />
      <WhyBrandKettle />
      <Testimonials testimonials={testimonials} />
      <ConsultationCTA />
    </>
  );
}

