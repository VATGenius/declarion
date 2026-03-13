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
          50: '#e8edf5',
          100: '#c5d0e5',
          200: '#9fb3d5',
          300: '#7996c4',
          400: '#5c81b8',
          500: '#3f6cac',
          600: '#123F8A',
          700: '#0f3574',
          800: '#0c2b5e',
          900: '#091f47',
          950: '#051431',
        },
        // Declarion brand blue
        brand: {
          DEFAULT: '#123F8A',
          light: '#2F8BC7',
          dark: '#0c2b5e',
        },
        // Medium blue - for links, hover states, UI elements
        accent: {
          DEFAULT: '#2F8BC7',
          light: '#5AA3D4',
          dark: '#1A6FA3',
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
