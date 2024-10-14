import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static', // define el modo de renderizado {static, hydrid, server}
  build: {
    outDir: './dist', // Define el directorio de salida
  },
});
