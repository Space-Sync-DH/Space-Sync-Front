import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Importa la integración de React

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), // Mantén la integración de Tailwind
    react(),    // Agrega la integración de React
  ],
  output: 'static', // define el modo de renderizado {static, hybrid, server}
  build: {
    outDir: './dist', // Define el directorio de salida
  },
});
