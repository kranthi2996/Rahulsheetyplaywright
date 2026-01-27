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
  
  use: {
    browserName: 'webkit',
    headless: false,
  
    
  },

});
module.exports = { defineConfig };