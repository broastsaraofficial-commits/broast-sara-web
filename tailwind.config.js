/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FFD700',
        'brand-red': '#E31837',
      },
      // THIS IS THE MISSING PIECE: Connecting the fonts to Tailwind
      fontFamily: {
        instrument: ['var(--font-instrument)', 'serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        cairo: ['var(--font-cairo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}