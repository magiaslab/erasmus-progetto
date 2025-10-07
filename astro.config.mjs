// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://erasmus.istituto-marconi.edu.it',
  integrations: [
    tailwind(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || '',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      apiVersion: '2024-03-15',
      studioBasePath: '/studio',
    }),
  ],
  output: 'static'
});