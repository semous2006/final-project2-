const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Valid event registrations
      on('before:run', (details) => {
        console.log('Test run starting at:', new Date().toLocaleString());
        console.log('Run details:', details);
      });

      on('after:run', (results) => {
        console.log('Test run ended at:', new Date().toLocaleString());
        console.log('Run results:', results);
      });

      // Other node event listeners can be added here

      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: 'cypress/support/e2e.js',
  },
});

