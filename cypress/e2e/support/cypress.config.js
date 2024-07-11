const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Example: Log before and after test run
      on('before:run', (details) => {
        console.log('Running Cypress tests...');
        // You can perform additional setup tasks here
      });

      on('after:run', (results) => {
        console.log('Cypress tests completed.');
        // You can perform cleanup tasks or handle results here
      });

      // Add more event listeners as needed
    },
  },
});

