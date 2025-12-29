import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // VATGenius brand green
        brand: {
          DEFAULT: '#00A86A',
          light: '#00C77B',
          dark: '#008F5A',
        },
        // Accent Aqua - for links, hover states, UI elements
        accent: {
          DEFAULT: '#2BB0E6',
          light: '#5CC4ED',
          dark: '#1A9BD4',
        },
        // Section backgrounds
        'soft-green': '#ECFDF5',
        'soft-blue': '#E6F7FF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
