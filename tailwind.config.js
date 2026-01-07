
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#FCDA06',  // Primary highlight from logo
          red: '#E51912',   // Secondary highlight
          'gold-light': '#FBE238',
          'red-dark': '#9F0402',
          black: '#1D1D1C', // Signature deep dark
          teal: '#0d9488',  // Keeping for transition, but will migrate away
          cyan: '#06b6d4',
          dark: '#0f172a',
          light: '#f1f5f9',
        }
      },
      screens: {
        'mobile': '320px',
        'large-mobile': '481px',
        'tablet-portrait': '641px',
        'tablet-landscape': '769px',
        'desktop': '1025px',
      },
    },
  },
  plugins: [],
}
