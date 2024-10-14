import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static', // define el modo de renderizado {static, hydrid, server}
  integrations: [tailwind()],
  build: {
    outDir: './dist', // Define el directorio de salida
  },
  site: 'https://space-sync-dh.github.io', // Define la URL base de tu sitio
});
