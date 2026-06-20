import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brandkettle.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/about',
    '/commercial-projects',
    '/residential-interiors',
    '/services',
    '/portfolio',
    '/process',
    '/blog',
    '/contact',
  ];

  const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/commercial-projects' ? 0.9 : 0.7,
  }));

  try {
    // Fetch dynamic services
    const servicesRes = await fetch('http://localhost:3001/api/seo/services').then(res => res.json());
    servicesRes.forEach((service: { slug: string }) => {
      sitemap.push({
        url: `${SITE_URL}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });

    // Fetch dynamic locations
    const locationsRes = await fetch('http://localhost:3001/api/seo/locations').then(res => res.json());
    locationsRes.forEach((loc: { slug: string }) => {
      sitemap.push({
        url: `${SITE_URL}/locations/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });

    // Fetch dynamic projects
    const projectsRes = await fetch('http://localhost:3001/api/admin/projects').then(res => res.json());
    projectsRes.forEach((proj: { slug: string }) => {
      if(proj.slug) {
        sitemap.push({
          url: `${SITE_URL}/portfolio/${proj.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      }
    });

    // Fetch dynamic blogs
    const blogsRes = await fetch('http://localhost:3001/api/admin/blog').then(res => res.json());
    blogsRes.forEach((blog: { slug: string }) => {
      if(blog.slug) {
        sitemap.push({
          url: `${SITE_URL}/blog/${blog.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      }
    });
  } catch (e) {
    console.error('Sitemap generation failed to fetch dynamic routes', e);
  }

  return sitemap;
}
