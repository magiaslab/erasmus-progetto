// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://erasmus.istituto-marconi.edu.it',

  integrations: [tailwind(), sanity({
    projectId: 'fot89z96',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-03-15',
    studioBasePath: '/studio',
  }), react()],

  output: 'server',
  adapter: netlify()
});