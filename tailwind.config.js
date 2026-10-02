/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2545',
          dark: '#071A31',
          light: '#13355E',
          muted: '#1E4473',
          border: 'rgba(11, 37, 69, 0.15)',
        },
        yellow: {
          DEFAULT: '#F5B700',
          hover: '#E0A700',
          light: '#FFF4D6',
        },
        offwhite: {
          DEFAULT: '#FAF9F6',
          surface: '#FFFFFF',
          border: '#E5E3DB',
          subtle: '#F2F0E8',
        },
      },
      fontFamily: {
        display: ['Oswald', 'Impact', 'sans-serif'],
        sans: ['DM Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
};
