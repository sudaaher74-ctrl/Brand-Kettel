import type { Metadata } from 'next';

export type PageSeo = {
  /** Route-relative canonical path, e.g. '/contact'. */
  path: string;
  /** Browser <title> — the root layout template appends the brand. */
  title: string;
  /** <meta name="description"> */
  description: string;
  /** og:title / twitter:title — written for a share card, not for SERPs. */
  socialTitle: string;
  /** og:description / twitter:description */
  socialDescription: string;
  /** Route-relative image path; resolved against metadataBase by Next. */
  image: string;
  /** og:image:alt — required so share cards are accessible. */
  imageAlt: string;
  type?: 'website' | 'article';
};

/**
 * Builds a complete, self-contained metadata object for one route.
 *
 * Every route must set its own openGraph/twitter title, description, url and
 * image. Without this, Next merges the root layout's openGraph block into each
 * page and every share card claims to be the homepage.
 */
export function pageMetadata(seo: PageSeo): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.path },
    robots: { index: true, follow: true },
    openGraph: {
      type: seo.type ?? 'website',
      locale: 'en_IN',
      siteName: 'Brand Kettle BuildSpaces',
      url: seo.path,
      title: seo.socialTitle,
      description: seo.socialDescription,
      images: [{ url: seo.image, alt: seo.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.socialTitle,
      description: seo.socialDescription,
      images: [{ url: seo.image, alt: seo.imageAlt }],
    },
  };
}
