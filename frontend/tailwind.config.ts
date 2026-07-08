import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0D', // Primary Background
        surface: '#0F0F12',    // Secondary Background
        surface2: '#131317',   // Section Alternate Background
        card: '#131317',       // Card Background
        accent: {
          DEFAULT: '#8D7458',  // Primary Accent
          secondary: '#B79B78', // Secondary Accent
          luxury: '#C8A97E',    // Luxury Gold
          wood: '#B58E67',      // Natural Wood
          olive: '#717458',     // Olive Accent
          hover: '#000000',     // Button Hover
        },
        ink: {
          DEFAULT: '#F4F4F5',  // Primary Text
          secondary: '#8A8A93', // Secondary Text
          muted: '#63636B',     // Muted Text
        },
        line: {
          DEFAULT: 'rgba(255, 255, 255, 0.09)',  // Border Color
          divider: 'rgba(255, 255, 255, 0.05)',  // Divider
        },
        button: {
          border: '#2D2D2D',
          hover: '#000000',
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        display: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
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
