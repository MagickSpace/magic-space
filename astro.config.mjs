import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import million from "million/compiler";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  website: "https://magick-space.vercel.app",
  vite: {
    plugins: [
      million.vite({
        mode: "react",
        server: true,
        auto: {
          threshold: 0.05,
          skip: ["useBadHook", /badVariable/g],
        },
      }),
    ],
  },
  integrations: [starlight({
    title: 'My Docs',
    social: {
      github: 'https://github.com/MagickSpace/magick-space'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), react(), sitemap(), tailwind({
    applyBaseStyles: false
  }), partytown()]
});