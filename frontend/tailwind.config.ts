import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        surface2: '#1a1a1a',
        card: '#141414',
        accent: {
          DEFAULT: '#F5F5DC',
          soft: '#FDF5E6',
          dark: '#E6E6B8',
        },
        ink: {
          DEFAULT: '#F0ECE4',
          muted: '#8A8278',
        },
        line: '#222222',
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
        soft: '0 4px 24px -8px rgba(0, 0, 0, 0.60)',
        card: '0 12px 40px -12px rgba(0, 0, 0, 0.70)',
        float: '0 30px 60px -24px rgba(0, 0, 0, 0.80)',
        accent: '0 18px 40px -16px rgba(245, 245, 220, 0.35)',
        'glow-gold': '0 0 40px rgba(245, 245, 220, 0.15)',
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
        'gold-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
        'gold-pulse': 'gold-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
