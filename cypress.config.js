const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportHeight: 760,
  viewportWidth: 1100,
  env: {
    application_URL: 'https://rahulshettyacademy.com/angularpractice/',
    application_URL_AutomationPractice:
      'https://rahulshettyacademy.com/AutomationPractice/',
  },
  projectId: 'sahoze',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    charts: true,
    reportPageTitle: 'Cypress-Mochawesome-Reporter',
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
    autoOpen: true,
    reportFilename: 'Automation_UI_Report_[datetime]',
    code: true,
    timestamp: 'longDate',
    showPassed: true,
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    // specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}',

  },
})
