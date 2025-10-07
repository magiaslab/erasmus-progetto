import { defineCollection, z } from 'astro:content';

// Content collections disabilitate - ora usiamo Sanity CMS
// I contenuti sono gestiti tramite https://erasmus-marconi.sanity.studio

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  pages,
};
