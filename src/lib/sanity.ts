import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: 'fot89z96',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-15',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper per convertire contenuto Portable Text in HTML
export async function portableTextToHtml(blocks: any[]) {
  const { toHTML } = await import('@portabletext/to-html');
  return toHTML(blocks, {
    components: {
      types: {
        image: ({ value }: any) => {
          const imageUrl = urlFor(value).width(800).url();
          return `<img src="${imageUrl}" alt="${value.alt || ''}" />`;
        },
      },
    },
  });
}

