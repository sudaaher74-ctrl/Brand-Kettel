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
  'upgrade-insecure-requests',
  'report-uri /api/csp-report',
];

const contentSecurityPolicy = {
  key: 'Content-Security-Policy-Report-Only',
  value: cspDirectives.join('; '),
};

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
