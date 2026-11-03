import { fileURLToPath } from 'node:url';

import { defineConfig } from '@vited/core';

export default defineConfig({
  base: '/react-bootstrap-pro/',
  resolve: {
    alias: {
      'react-bootstrap-pro': fileURLToPath(new URL('src/index.ts', import.meta.url)),
    },
  },
  docs: {
    title: 'React Bootstrap Pro',
    theme: '@vited/theme-bootstrap',
  },
  server: {
    open: true,
  },
});
