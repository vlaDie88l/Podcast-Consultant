import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // forwards any requests starting with "/api" to your node server
      '/podcast-details': 'http://localhost:5173/',
      '/podcast-feed-url': 'http://localhost:5173/',
      '/feed': 'http://localhost:5173/',
    },
  },
  plugins: [react(), eslint(), reactRefresh()],
});
