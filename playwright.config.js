// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,  //default is 30 seconds weare by passing it
  expect: {
    timeout: 20*1000,

  },
  reporter: [['html', { open: 'always' }]],
  use: {
    browserName: 'webkit',
    headless: true,
    screenshot:'only-on-failure',
    trace:'on'
  
    
  },

});
module.exports = { defineConfig };
