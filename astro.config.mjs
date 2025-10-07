// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://erasmus-progetto.netlify.app',
  integrations: [],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  adapter: undefined
});