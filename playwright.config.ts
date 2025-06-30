import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 30000,
  retries: 0,
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI
  },
  use: {
    baseURL: 'http://localhost:4173',
    headless: true,
    trace: 'on'
  }
});
