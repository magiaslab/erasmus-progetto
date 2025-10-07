import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Progetti Erasmus',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo del progetto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione breve',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Paese',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Durata',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Immagine principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Testo alternativo',
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Dettagli del progetto',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'alt',
              title: 'Testo alternativo',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      country: 'country',
      media: 'heroImage',
    },
    prepare({ title, country, media }) {
      return {
        title,
        subtitle: country,
        media,
      };
    },
  },
});

