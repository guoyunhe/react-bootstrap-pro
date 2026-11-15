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
    siteURL: 'https://guoyunhe.github.io/react-bootstrap-pro/',
    theme: '@vited/theme-bootstrap',
  },
  server: {
    open: true,
  },
});
