// @ts-check
import { defineConfig } from 'astro/config';
import { remarkImageTransformer } from './src/plugins/image-transformer';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkImageTransformer]
  }
});
