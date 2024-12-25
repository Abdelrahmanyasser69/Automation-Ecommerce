const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  viewportHeight: 768,
  viewportWidth: 1400,

  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: "https://automationexercise.com",
    reporter: "mochawesome", 
    reporterOptions: {
      reportDir: "cypress/reports", 
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
