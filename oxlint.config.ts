import { defineConfig } from 'oxlint';
import recommended from 'oxlint-config-recommended';
import recommendedUnicorn from 'oxlint-config-recommended/unicorn';
import recommendedReact from 'oxlint-config-recommended/react';
import recommendedJsxA11y from 'oxlint-config-recommended/jsx-a11y';

export default defineConfig({
  extends: [recommended, recommendedUnicorn, recommendedReact, recommendedJsxA11y],
});
