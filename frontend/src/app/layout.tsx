import type { Metadata, Viewport } from 'next';
import { Poppins, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import SiteShell from '@/components/layout/SiteShell';
import { SITE_URL } from '@/lib/site';
import { generalContractorJsonLd, jsonLdScript } from '@/lib/structuredData';

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
        url: '/imgs/commercial/gucci.webp',
        alt: 'Brand Kettle BuildSpaces — Turnkey Commercial Fit-Outs & Retail Interiors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Kettle BuildSpaces — Turnkey Commercial & Retail Fit-Outs',
    description: 'Design, Build & Furnish solutions for offices, retail flagships, showrooms and workspaces.',
    images: [
      {
        url: '/imgs/commercial/gucci.webp',
        alt: 'Brand Kettle BuildSpaces — Turnkey Commercial Fit-Outs & Retail Interiors',
      },
    ],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(generalContractorJsonLd)}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
