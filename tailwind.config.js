/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff8fb',
          100: '#d6ecf3',
          200: '#aed9e8',
          300: '#7bbfd8',
          400: '#459fc4',
          500: '#2a82a8',
          600: '#216889',
          700: '#1d5470',
          800: '#1d465c',
          900: '#1c3b4e',
          950: '#0f2632',
        },
        accent: {
          50: '#f0fdf6',
          100: '#dbfbe8',
          200: '#b9f5d3',
          300: '#84eab4',
          400: '#4dd68f',
          500: '#27bd70',
          600: '#169a59',
          700: '#137a49',
          800: '#13603c',
          900: '#114f33',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,38,50,0.06), 0 8px 24px -12px rgba(15,38,50,0.18)',
      },
    },
  },
  plugins: [],
};
