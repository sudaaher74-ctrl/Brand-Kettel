import type { Metadata, Viewport } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import SiteShell from '@/components/layout/SiteShell';
import { SITE_URL } from '@/lib/site';
import { generalContractorJsonLd, jsonLdScript } from '@/lib/structuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    default: 'Brand Kettle | Commercial Interior & Fit-Out Company',
    template: '%s | Brand Kettle BuildSpaces',
  },
  description:
    'Brand Kettle delivers turnkey commercial interiors, corporate office fit-outs, luxury retail spaces, and jewellery showroom projects across India.',
  authors: [{ name: 'Brand Kettle BuildSpaces Pvt. Ltd.' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Brand Kettle BuildSpaces',
    title: 'Brand Kettle | Commercial Interior & Fit-Out Company',
    description:
      'Brand Kettle delivers turnkey commercial interiors, corporate office fit-outs, luxury retail spaces, and jewellery showroom projects across India.',
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
  themeColor: '#FAF8F5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MSP3NY3PTC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MSP3NY3PTC');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(generalContractorJsonLd)}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
