import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static', // define el modo de renderizado {static, hydrid, server}
  integrations: [tailwind()],
  build: {
    outDir: './dist', // Define el directorio de salida
  },
  site: 'https://space-sync-dh.github.io/Space-Sync-Front', // Define la URL base de tu sitio
  base: 'Space-Sync-Front', // Define la URL base de tu sitio
});
