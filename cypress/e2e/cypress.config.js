const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Log the start time and details of the test run
      on('before:run', (details) => {
        console.log('Test run starting at:', new Date().toLocaleString());
        console.log('Run details:', details);
      });

      // Log the end time and results of the test run
      on('after:run', (results) => {
        console.log('Test run ended at:', new Date().toLocaleString());
        console.log('Run results:', results);
      });

      // Return the modified config
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Ensure this line is present
    supportFile: 'cypress/support/e2e.js', // Ensure this line is present
  },
});
