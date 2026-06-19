import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F8F9FA',
        card: '#FFFFFF',
        accent: {
          DEFAULT: '#C9A86A',
          soft: '#E4D3AF',
          dark: '#B0905030',
        },
        ink: {
          DEFAULT: '#2D3748',
          muted: '#718096',
        },
        line: '#E2E8F0',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(45, 55, 72, 0.10)',
        card: '0 12px 40px -12px rgba(45, 55, 72, 0.14)',
        float: '0 30px 60px -24px rgba(45, 55, 72, 0.22)',
        accent: '0 18px 40px -16px rgba(201, 168, 106, 0.45)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
