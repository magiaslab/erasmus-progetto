import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master'

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || '', // Get this from tina.io
  token: process.env.TINA_TOKEN || '', // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'src/content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Publication Date',
            required: true,
          },
          {
            type: 'string',
            name: 'heroImage',
            label: 'Hero Image',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'page',
        label: 'Pages',
        path: 'src/content/pages',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'project',
        label: 'Erasmus Projects',
        path: 'src/content/projects',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Project Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Project Description',
            required: true,
          },
          {
            type: 'string',
            name: 'country',
            label: 'Country',
            required: true,
          },
          {
            type: 'string',
            name: 'duration',
            label: 'Duration',
            required: true,
          },
          {
            type: 'string',
            name: 'heroImage',
            label: 'Hero Image',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Project Details',
            isBody: true,
          },
        ],
      },
    ],
  },
})