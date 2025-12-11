// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  site: 'https://AbdurRahman22224.github.io/', // 👈 Full user site URL
  base: '/', // 👈 Root, not repo name
});