// @ts-check
//import { defineConfig, devices } from '@playwright/test';

const {devices} = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries:1,
  workers:3,
  // fullyParallel:true,
  timeout:30000,
  expect:{
    timeout: 5000,
  },
  reporter:'html',

  projects: [

    {
      name: 'Safari',
      use: {

        browserName: 'webkit',
        headless: false,
        screenshot: 'off',
        trace: 'on',
        ...devices['iPad (gen 7) landscape']
      }

    },
    {
      name: 'chromium',
      use: {

        browserName: 'chromium',
        headless: false,
        screenshot: 'off',
        trace: 'on',
        ignoreHttpsErrors:true,
        permissions:['geolocation'],
        video:'off'
        //viewport: {width:500, height:500}

      }

    }
  ]
  
 

  
});

module.exports = config

