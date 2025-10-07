/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'erasmus-blue': '#003366',
        'erasmus-light-blue': '#0066cc',
        'erasmus-yellow': '#ffcc00',
        'erasmus-dark-yellow': '#e6b800',
        'erasmus-green': '#00cc66',
        'erasmus-red': '#cc0000',
      }
    },
  },
  plugins: [],
}
