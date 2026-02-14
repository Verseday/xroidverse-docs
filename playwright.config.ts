import { defineConfig } from '@playwright/test';

const PORT = 3100;
const BASE_PATH = '/xroidverse-docs';

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: `http://127.0.0.1:${PORT}${BASE_PATH}`,
    headless: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
  webServer: {
    command: `npm run start -- --host 127.0.0.1 --port ${PORT} --no-open`,
    url: `http://127.0.0.1:${PORT}${BASE_PATH}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
