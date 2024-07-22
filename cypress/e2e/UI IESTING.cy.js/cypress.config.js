const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Handle uncaught exceptions
      on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
      });

      // Handle custom tasks
      on('task', {
        timeout(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        },
      });
    },
    env: {
      apiUrl: 'https://api.example.com',
      authToken: 'your-auth-token'
    },
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com',
    defaultCommandTimeout: 10000, // 10 seconds
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
});

