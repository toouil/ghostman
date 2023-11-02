/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sc_800': { 'raw': '(max-width: 800px)' },
        'mobile': { 'raw': '(max-width: 500px)' },
        'sc_361': { 'raw': '(max-width: 361px)' },
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}