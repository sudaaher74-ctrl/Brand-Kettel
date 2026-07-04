import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F5F2', // Primary Background
        surface: '#FAF8F5',    // Secondary Background
        surface2: '#ECE6DE',   // Section Alternate Background
        card: '#FFFFFF',       // Card Background
        accent: {
          DEFAULT: '#8D7458',  // Primary Accent
          secondary: '#B79B78', // Secondary Accent
          luxury: '#C8A97E',    // Luxury Gold
          wood: '#B58E67',      // Natural Wood
          olive: '#717458',     // Olive Accent
          hover: '#000000',     // Button Hover
        },
        ink: {
          DEFAULT: '#1D1D1D',  // Primary Text
          secondary: '#6E6E6E', // Secondary Text
          muted: '#8B857D',     // Muted Text
        },
        line: {
          DEFAULT: '#D8D8D8',  // Border Color
          divider: '#E7E1D9',  // Divider
        },
        button: {
          border: '#2D2D2D',
          hover: '#000000',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Montserrat', 'sans-serif'],
        display: ['Canela Light', 'Canela', 'var(--font-display)', 'Cormorant Garamond', 'serif'],
      },
      maxWidth: {
        container: '1400px',
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
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
