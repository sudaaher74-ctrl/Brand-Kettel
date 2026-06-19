import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brandkettle.com';

export default function sitemap(): MetadataRoute.Sitemap {
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

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/commercial-projects' ? 0.9 : 0.7,
  }));
}
