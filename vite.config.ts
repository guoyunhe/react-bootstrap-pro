import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  root: './playground',
  plugins: [react()],
  resolve: {
    alias: {
      'react-bootstrap-pro': fileURLToPath(new URL('src/index.ts', import.meta.url)),
    },
  },
  test: {
    root: '.',
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      headless: true,
    },
  },
});
