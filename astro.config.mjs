import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // define el modo de renderizado {static, hydrid, server}
  build: {
    outDir: './dist', // Define el directorio de salida
  },
});
