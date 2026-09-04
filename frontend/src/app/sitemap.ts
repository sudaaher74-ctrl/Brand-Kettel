import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brandkettle.com';
// Use the same API URL the rest of the app uses — already configured in .env.local
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/commercial-fit-outs', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/retail-fit-outs', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/jewellery-showrooms', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/residential-interiors', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/custom-furniture', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/library-institutional-furniture', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/process', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/careers', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  const sitemap: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  try {
    // Fetch dynamic services
    const servicesRes = await fetch(`${API_URL}/api/seo/services`, { next: { revalidate: 3600 } }).catch(() => null);
    if (servicesRes && servicesRes.ok) {
      const services = await servicesRes.json().catch(() => []);
      if (Array.isArray(services)) {
        services.forEach((service: { slug: string }) => {
          if (service?.slug) {
            sitemap.push({
              url: `${SITE_URL}/services/${service.slug}`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.8,
            });
          }
        });
      }
    }

    // Fetch dynamic locations
    const locationsRes = await fetch(`${API_URL}/api/seo/locations`, { next: { revalidate: 3600 } }).catch(() => null);
    if (locationsRes && locationsRes.ok) {
      const locations = await locationsRes.json().catch(() => []);
      if (Array.isArray(locations)) {
        locations.forEach((loc: { slug: string }) => {
          if (loc?.slug) {
            sitemap.push({
              url: `${SITE_URL}/locations/${loc.slug}`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.8,
            });
          }
        });
      }
    }

    // Fetch dynamic projects
    const projectsRes = await fetch(`${API_URL}/api/admin/projects`, { next: { revalidate: 3600 } }).catch(() => null);
    if (projectsRes && projectsRes.ok) {
      const projects = await projectsRes.json().catch(() => []);
      if (Array.isArray(projects)) {
        projects.forEach((proj: { slug: string }) => {
          if (proj?.slug) {
            sitemap.push({
              url: `${SITE_URL}/portfolio/${proj.slug}`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.7,
            });
          }
        });
      }
    }

    // Fetch dynamic blogs
    const blogsRes = await fetch(`${API_URL}/api/admin/blog`, { next: { revalidate: 3600 } }).catch(() => null);
    if (blogsRes && blogsRes.ok) {
      const blogs = await blogsRes.json().catch(() => []);
      if (Array.isArray(blogs)) {
        blogs.forEach((blog: { slug: string }) => {
          if (blog?.slug) {
            sitemap.push({
              url: `${SITE_URL}/blog/${blog.slug}`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.6,
            });
          }
        });
      }
    }
  } catch (e) {
    console.error('Sitemap generation failed to fetch dynamic routes', e);
  }

  return sitemap;
}

