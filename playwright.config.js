//playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  reporter: 'list',
  use: {
    headless: true, //run in headless mode
    screenshot: 'off',
    video: 'off',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
};
