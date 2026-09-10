import { SITE_URL, absoluteUrl } from '@/lib/site';
import type { Faq } from '@/lib/faqs';

/**
 * Stable @id for the business entity. Every other node (Service.provider,
 * BreadcrumbList, Article.publisher) references this instead of repeating the
 * organisation inline, so search engines resolve one entity rather than a
 * dozen near-duplicates.
 */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/** Cities where projects are actually executed — used for areaServed. */
export const AREAS_SERVED = [
  'Mumbai',
  'Delhi NCR',
  'Hyderabad',
  'Bengaluru',
  'Bareilly',
  'Indore',
] as const;

export const TELEPHONE = '+918959173790';

const areaServedNodes = AREAS_SERVED.map((name) => ({ '@type': 'City', name }));

/**
 * GeneralContractor is a subtype of LocalBusiness (and therefore of
 * Organization), so this single node replaces the separate Organization +
 * LocalBusiness blobs the layout used to emit.
 *
 * Deliberately omits Review / AggregateRating: the testimonials on the site are
 * not sourced from a verifiable review platform, and marking them up invites a
 * manual action.
 */
export const generalContractorJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  '@id': ORGANIZATION_ID,
  name: 'Brand Kettle BuildSpaces',
  legalName: 'Brand Kettle BuildSpaces Pvt. Ltd.',
  description:
    'Brand Kettle BuildSpaces is a design-build and commercial fit-out firm headquartered in Indore, delivering turnkey interior solutions across India.',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/logo.png'),
    width: 1024,
    height: 1024,
  },
  image: absoluteUrl('/imgs/commercial/brandkettle1.jpg'),
  telephone: TELEPHONE,
  priceRange: '₹₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Bank Transfer, Cheque, Credit Card',
  sameAs: [
    'https://www.instagram.com/brandkettle_buildspaces',
    'https://www.linkedin.com/company/brand-kettle-buildspaces',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Scheme No. 78, Vijay Nagar',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    postalCode: '452010',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.7533,
    longitude: 75.8937,
  },
  areaServed: areaServedNodes,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: TELEPHONE,
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  knowsAbout: [
    'Commercial fit-outs',
    'Design-build delivery',
    'Turnkey interior solutions',
    'Retail fit-outs',
    'Jewellery showroom design',
    'Custom joinery manufacturing',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '19:00',
    },
  ],
};

/** Service node for an expertise page, provided by the business entity above. */
export function serviceJsonLd(input: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(input.path)}#service`,
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { '@id': ORGANIZATION_ID },
    areaServed: areaServedNodes,
  };
}

/** BreadcrumbList from an ordered list of { name, path } crumbs. */
export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** FAQPage built from the same array the visible accordion renders. */
export function faqPageJsonLd(faqs: Faq[], path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

/** Renders a JSON-LD payload as a <script> tag. Input is always static, never user data. */
export function jsonLdScript(payload: unknown) {
  return { __html: JSON.stringify(payload) };
}
