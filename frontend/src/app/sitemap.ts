import type { MetadataRoute } from 'next';
import { SITE_URL, API_URL } from '@/lib/site';
import { projects as fallbackProjects } from '@/lib/data';

type Entry = MetadataRoute.Sitemap[number];

/** Static routes. `/` and `/contact` carry the highest priority, `/careers` the lowest. */
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: Entry['changeFrequency'] }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/commercial-fit-outs', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/retail-fit-outs', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/jewellery-showrooms', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/portfolio', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/custom-furniture', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/residential-interiors', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/library-institutional-furniture', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/process', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.5, changeFrequency: 'weekly' },
  { path: '/careers', priority: 0.3, changeFrequency: 'yearly' },
];

/** Fetches a list of `{ slug }` records, returning [] on any failure. */
async function fetchSlugs(endpoint: string): Promise<string[]> {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const rows = await res.json();
    if (!Array.isArray(rows)) return [];
    return rows.map((row: { slug?: string }) => row?.slug).filter((slug): slug is string => Boolean(slug));
  } catch (error) {
    console.error(`Sitemap: failed to fetch ${endpoint}`, error);
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

  // Portfolio slugs must be present even when the CMS API is unreachable at
  // build time, so start from the bundled project data and merge the API in.
  const projectSlugs = Array.from(
    new Set([...fallbackProjects.map((p) => p.slug), ...apiProjects]),
  );

  const entries: MetadataRoute.Sitemap = [
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...projectSlugs.map((slug) => ({
      url: `${SITE_URL}/portfolio/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...apiBlogSlugs.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...apiServiceSlugs.map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...apiLocationSlugs.map((slug) => ({
      url: `${SITE_URL}/locations/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  // A duplicate <loc> makes the whole sitemap suspect; de-dupe on URL.
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
