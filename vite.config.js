import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'dist', // Change 'build' to 'dist'
    },
    plugins: [react()],
    server: {
      port: 200,
      host: true,
    },
  };
});