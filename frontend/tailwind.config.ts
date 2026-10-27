import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5', // Warm architectural alabaster
        foreground: '#18181B', // Deep charcoal / obsidian
        surface: '#0F0F12',    // CAD Blueprint background
        surface2: '#EFECE6',   // Linen Alternate Background
        card: '#FAF8F5',       // Card Background
        primary: {
          DEFAULT: '#18181B',
          foreground: '#FAF8F5',
        },
        secondary: {
          DEFAULT: '#EFECE6',
          foreground: '#18181B',
        },
        muted: {
          DEFAULT: '#EFECE6',
          foreground: '#71717A',
        },
        bronze: {
          DEFAULT: '#A07A4F',
          light: '#C5A880',
          dark: '#85643E',
        },
        deep: {
          DEFAULT: '#0F0F12',
          foreground: '#F4F4F5',
        },
        linen: {
          DEFAULT: '#EFECE6',
          foreground: '#18181B',
        },
        border: 'rgba(24, 24, 27, 0.15)',
        ronn: {
          obsidian: '#0F0F12',
          surface: '#18181B',
          elevated: '#27272A',
          gold: '#A07A4F',
          goldLight: '#C5A880',
          border: 'rgba(24, 24, 27, 0.15)',
          maron: '#0F0F12',
          sable: '#18181B',
          parme: '#A07A4F',
          cream: '#EFECE6',
          beige: '#FAF8F5',
          darkText: '#18181B',
        },
        accent: {
          DEFAULT: '#A07A4F',  // Warm Bronze
          secondary: '#C5A880',
          luxury: '#A07A4F',
          wood: '#B58E67',
          olive: '#717458',
          hover: '#000000',
        },
        ink: {
          DEFAULT: '#18181B',
          secondary: '#71717A',
          muted: '#A1A1AA',
        },
        line: {
          DEFAULT: 'rgba(24, 24, 27, 0.15)',
          divider: 'rgba(24, 24, 27, 0.08)',
        },
        button: {
          border: '#18181B',
          hover: '#A07A4F',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1480px',
      },
      boxShadow: {
        soft: 'none',
        card: 'none',
        float: 'none',
        accent: 'none',
        'glow-gold': 'none',
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
