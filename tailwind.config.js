
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
          teal: '#0d9488', // Primary eco-friendly
          cyan: '#06b6d4',  // Accent
          green: '#10b981', // Secondary
          dark: '#0f172a', // Text
          light: '#f1f5f9', // Backgrounds
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
