import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    coverage: {
      provider: 'v8',
    },
  },
});
