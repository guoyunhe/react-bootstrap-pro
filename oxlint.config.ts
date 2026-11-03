import { defineConfig } from 'oxlint';
import recommended from 'oxlint-config-recommended';
import recommendedJsxA11y from 'oxlint-config-recommended/jsx-a11y';
import recommendedReact from 'oxlint-config-recommended/react';

export default defineConfig({
  extends: [recommended, recommendedReact, recommendedJsxA11y],
  env: { browser: true, node: true, vitest: true },
});
