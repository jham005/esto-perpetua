// @ts-check
import { defineConfig } from 'astro/config';
import { remarkImageTransformer } from './src/plugins/image-transformer';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  prefetch: true,

  markdown: {
    remarkPlugins: [remarkImageTransformer]
  },

  integrations: [mdx()]
});