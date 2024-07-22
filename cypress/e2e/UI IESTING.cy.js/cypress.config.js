const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Handle uncaught exceptions
      on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
      });

      // You can add more node event listeners as needed

      // Example: Handle timeouts
      on('task', {
        timeout(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        },
      });
    },
  },
});

