/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

/**
 * Content-Security-Policy.
 *
 * Origins were derived from an audit of the codebase, not guessed. The site
 * loads no analytics, no tag manager, no pixels, no embedded video and no
 * third-party chat/WhatsApp widget — WhatsApp and social links are plain
 * outbound <a href> and need no directive. Fonts come from next/font/google,
 * which downloads them at build time and serves them from /_next/static, so
 * fonts.googleapis.com and fonts.gstatic.com are NOT required at runtime.
 * The only external image origins are the two next/image remotePatterns.
 *
 * script-src uses 'unsafe-inline' rather than a nonce. A nonce has to be minted
 * per request in middleware, which forces every route to be dynamically
 * rendered and gives up static generation — a direct cost to the LCP targets
 * this site is being tuned for. Revisit if third-party scripts are ever added.
 *
 * 'unsafe-eval' is deliberately absent: no dependency in the tree needs it.
 *
 * Shipped as Report-Only. Watch /api/csp-report, then rename the header key to
 * 'Content-Security-Policy' to enforce.
 */
const cspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://res.cloudinary.com https://images.unsplash.com",
  "font-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  'report-uri /api/csp-report',
];

// `upgrade-insecure-requests` is intentionally absent while the policy is
// report-only: browsers ignore it in that mode and log a console error for it,
// which shows up as a real error in monitoring. Add it back in the same commit
// that switches the header key to 'Content-Security-Policy'.
const contentSecurityPolicy = {
  key: 'Content-Security-Policy-Report-Only',
  value: cspDirectives.join('; '),
};

/**
 * One canonical host.
 *
 * The apex and www hosts must not both answer 200, or every page exists at two
 * URLs and the canonical tag is the only thing separating them. The platform's
 * own domain settings are the primary place to configure this (on Vercel:
 * add both domains, mark www as primary); this redirect is the portable
 * fallback so the rule travels with the code and survives a host change.
 *
 * Conditioned on the apex host only, so www -> www can never loop.
 */
const CANONICAL_HOST = 'www.brandkettle.co.in';
const APEX_HOST = 'brandkettle.co.in';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/imgs/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [...securityHeaders, contentSecurityPolicy],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: APEX_HOST }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        // 301 rather than Next's default 308: both are permanent and Google
        // treats them identically, but 301 is what the wider tooling expects.
        statusCode: 301,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/:path*`
      }
    ];
  }
};

export default nextConfig;
