import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F3F0EB', // Primary Background
        surface: '#FAF8F5',    // Secondary Background
        surface2: '#ECE6DE',   // Section Alternate Background
        card: '#FFFFFF',       // Card Background
        accent: {
          DEFAULT: '#8D7458',  // Primary Accent
          secondary: '#B79B78', // Secondary Accent
          luxury: '#C8A97E',    // Luxury Gold
          wood: '#B58E67',      // Natural Wood
          olive: '#717458',     // Olive Accent
          hover: '#3A352F',     // Button Hover
        },
        ink: {
          DEFAULT: '#2B2B2B',  // Primary Text
          secondary: '#5E5952', // Secondary Text
          muted: '#8B857D',     // Muted Text
        },
        line: {
          DEFAULT: '#D8D1C8',  // Border Color
          divider: '#E7E1D9',  // Divider
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Manrope', 'Neue Haas Grotesk', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['var(--font-display)', 'Cormorant Garamond', 'Canela', 'IvyPresto', 'Libre Baskerville', 'serif'],
      },
      maxWidth: {
        container: '1400px',
      },
      borderRadius: {
        xl: '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.25rem', // 20px
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.05)',
        card: '0 20px 60px rgba(0, 0, 0, 0.05)',
        float: '0 30px 60px rgba(0, 0, 0, 0.08)',
        accent: '0 18px 40px -16px rgba(141, 116, 88, 0.35)',
        'glow-gold': '0 0 40px rgba(200, 169, 126, 0.15)',
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
