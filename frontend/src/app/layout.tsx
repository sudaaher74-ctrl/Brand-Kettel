import type { Metadata, Viewport } from 'next';
import { Poppins, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import SiteShell from '@/components/layout/SiteShell';
import { SITE_URL, absoluteUrl } from '@/lib/site';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  // SITE_URL === process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brandkettle.co.in',
  // with loopback origins additionally rejected — see src/lib/site.ts.
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
    url: '/',
    siteName: 'Brand Kettle BuildSpaces',
    title: 'Brand Kettle BuildSpaces — Commercial Spaces That Inspire Growth',
    description:
      'Turnkey Commercial Fit-Outs, Retail Flagships, Jewellery Showrooms, and Custom Architectural Joinery across India.',
    images: [
      {
        url: '/imgs/commercial/gucci.png',
        width: 1200,
        height: 630,
        alt: 'Brand Kettle BuildSpaces — Turnkey Commercial Fit-Outs & Retail Interiors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Kettle BuildSpaces — Turnkey Commercial & Retail Fit-Outs',
    description: 'Design, Build & Furnish solutions for offices, retail flagships, showrooms and workspaces.',
    images: ['/imgs/commercial/gucci.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brand Kettle BuildSpaces Pvt. Ltd.',
  description:
    'Brand Kettle BuildSpaces is a premier Design-Build and Commercial Fit-Out firm in Indore providing Turnkey Interior Solutions Pan-India.',
  url: SITE_URL,
  logo: absoluteUrl('/logo.png'),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91 89591 73790',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  areaServed: 'IN',
  knowsAbout: [
    'Commercial Fit-Out Company',
    'Design Build Company',
    'Interior Fit-Out Company',
    'Turnkey Interior Solutions',
    'Retail Fit-Out Company',
    'Jewellery Showroom Design',
    'Custom Joinery Manufacturing',
  ],
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Brand Kettle BuildSpaces',
  image: absoluteUrl('/imgs/commercial/gucci.png'),
  telephone: '+91 89591 73790',
  url: SITE_URL,
  priceRange: '₹₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Bank Transfer, Cheque, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Corporate Office & Design Studio',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    postalCode: '452001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.7196,
    longitude: 75.8577,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '19:00',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant.variable}`}>
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
