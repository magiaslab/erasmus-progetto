import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
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
      title: 'Descrizione',
      type: 'text',
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
      name: 'pubDate',
      title: 'Data di pubblicazione',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Contenuto',
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
    defineField({
      name: 'embedCode',
      title: 'Codice Embed (Canva, YouTube, etc.)',
      type: 'text',
      description: 'Incolla qui il codice embed HTML/iframe da Canva o altri servizi. Esempio: <iframe src="..." ...></iframe>',
      rows: 5,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
      date: 'pubDate',
    },
    prepare({ title, media, date }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString('it-IT') : 'Nessuna data',
        media,
      };
    },
  },
});

