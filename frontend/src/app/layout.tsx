import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import SiteShell from '@/components/layout/SiteShell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brandkettle.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Commercial Fit-Out Company in Indore | Brand Kettle BuildSpaces',
    template: '%s | Brand Kettle BuildSpaces',
  },
  description:
    'Brand Kettle BuildSpaces is a premium Design Build Company & Commercial Fit-Out Company in Indore. We provide Turnkey Interior Solutions, Commercial Interior Contractors, and Retail Fit-Outs.',
  keywords: [
    'Commercial Fit-Out Company',
    'Design Build Company',
    'Interior Fit-Out Company',
    'Turnkey Interior Solutions',
    'Commercial Interior Contractors',
    'Retail Fit-Out Company',
    'Office Interior Company',
    'Custom Furniture Manufacturer',
    'Commercial Interior Company in Indore',
  ],
  authors: [{ name: 'Brand Kettle BuildSpaces Pvt. Ltd.' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Brand Kettle BuildSpaces',
    title: 'Brand Kettle BuildSpaces — Commercial Spaces That Inspire Growth',
    description:
      'Design, Build & Furnish solutions for offices, retail stores, showrooms and modern workspaces.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Kettle BuildSpaces',
    description: 'Premium commercial interiors, retail fit-outs and turnkey projects.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brand Kettle BuildSpaces Pvt. Ltd.',
  description:
    'Brand Kettle BuildSpaces is a premium Design Build Company & Commercial Fit-Out Company in Indore providing Turnkey Interior Solutions.',
  url: SITE_URL,
  areaServed: 'IN',
  knowsAbout: [
    'Commercial Fit-Out Company',
    'Design Build Company',
    'Interior Fit-Out Company',
    'Turnkey Interior Solutions',
    'Retail Fit-Out Company',
  ],
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Brand Kettle BuildSpaces',
  image: `${SITE_URL}/logo.png`,
  telephone: '+919999999999',
  url: SITE_URL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Corporate Office',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    postalCode: '452001',
    addressCountry: 'IN'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
