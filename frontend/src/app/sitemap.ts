import type { MetadataRoute } from 'next';
import { SITE_URL, API_URL } from '@/lib/site';
import { projects as fallbackProjects } from '@/lib/data';
import { INDUSTRIES } from '@/lib/landingContent';
import { LOCATIONS_DATA } from '@/lib/locationsData';
import { SERVICES_DATA } from '@/lib/servicesData';
import { BLOG_ARTICLES } from '@/lib/blogData';

type Entry = MetadataRoute.Sitemap[number];

/** Static core and category routes */
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: Entry['changeFrequency'] }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/portfolio', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/commercial-fit-outs', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/retail-fit-outs', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/jewellery-showrooms', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/custom-furniture', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/residential-interiors', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/library-institutional-furniture', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/resources', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/resources/fit-out-cost-calculator', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/resources/office-interior-planning-checklist', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/resources/commercial-interior-faq-hub', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/resources/turnkey-fit-out-process-guide', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/process', priority: 0.7, changeFrequency: 'monthly' },
  ...INDUSTRIES.map((i) => ({ path: `/industries/${i.slug}`, priority: 0.8, changeFrequency: 'monthly' as const })),
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/careers', priority: 0.3, changeFrequency: 'yearly' },
];

/** Fetches a list of `{ slug }` records from API, returning [] on failure. */
async function fetchSlugs(endpoint: string): Promise<string[]> {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const rows = await res.json();
    if (!Array.isArray(rows)) return [];
    return rows.map((row: { slug?: string }) => row?.slug).filter((slug): slug is string => Boolean(slug));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const [apiProjects, apiBlogSlugs, apiServiceSlugs, apiLocationSlugs] = await Promise.all([
    fetchSlugs('/api/admin/projects'),
    fetchSlugs('/api/admin/blog'),
    fetchSlugs('/api/seo/services'),
    fetchSlugs('/api/seo/locations'),
  ]);

  // Guaranteed static records merged with any CMS API additions
  const projectSlugs = Array.from(new Set([...fallbackProjects.map((p) => p.slug), ...apiProjects]));
  const locationSlugs = Array.from(new Set([...LOCATIONS_DATA.map((l) => l.slug), ...apiLocationSlugs]));
  const serviceSlugs = Array.from(new Set([...SERVICES_DATA.map((s) => s.slug), ...apiServiceSlugs]));
  const blogSlugs = Array.from(new Set([...BLOG_ARTICLES.map((b) => b.slug), ...apiBlogSlugs]));

  const entries: MetadataRoute.Sitemap = [
    ...STATIC_ROUTES.map((route) => ({
      url: route.path ? `${SITE_URL}${route.path}` : `${SITE_URL}/`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...projectSlugs.map((slug) => ({
      url: `${SITE_URL}/portfolio/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...locationSlugs.map((slug) => ({
      url: `${SITE_URL}/locations/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];

  // De-duplicate URLs
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
