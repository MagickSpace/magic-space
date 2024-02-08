import { CATEGORIES } from '../src/data/categories.js'
import { defineConfig } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: '325ea717-edfd-466f-8743-b94e9ed40e60', // Get this from tina.io
  token: '714382c2c10971751823a408f973430649835ea6', // Get this from tina.io
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'src/assets',
      publicFolder: '',
    },
  },
  schema: {
        collections: [
          {
            name: 'docs',
            label: 'Docs',
            path: 'src/content/docs',
            ui: {
              allowedActions: {
                create: true,
                delete: true,
              },
              router: () => '/',
            },
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
              },
              {
                type: 'rich-text',
                name: 'body',
                label: 'Body',
                isBody: true,
              },
            ],
          },
        ],
      },
    })