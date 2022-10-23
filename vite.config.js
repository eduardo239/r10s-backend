/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  test: {
    coverage: {
      provider: 'c8', // or 'c8'
    },
    environment: 'jsdom',
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
