/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  require('cypress-mochawesome-reporter/plugin')(on);

  // This plugin is added for executing the Cypress test cases with TAGGING feature
  require('cypress-grep/src/plugin')(config);

    // https://docs.cypress.io/api/plugins/after-run-api#Log-the-number-of-passed-tests-of-a-run
    // on('after:run', (results) => {
    //   if (results) {
    //     console.log('======================================')
    //     console.log(results.totalPassed, 'out of', results.totalTests, 'passed')
    //   }
    // })
  

    // on('before:run', (details) => {
    //   if (details.specs && details.browser) {
    //     // details.specs and details.browser will be undefined in interactive mode
    //     console.log('======================================')
    //     console.log(
    //       'Running',
    //       details.specs.length,
    //       'specs in',
    //       details.browser.name
    //     )
    //   }
    // })

}
