import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8080/',
        secure: false,

    },
  },

  plugins: [react()],
});
