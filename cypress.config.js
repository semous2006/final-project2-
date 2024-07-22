const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Example: Log test run start and end times
      on('before:run', (details) => {
        console.log('Test run starting at:', new Date().toLocaleString());
        console.log('Run details:', details);
      });

      on('after:run', (results) => {
        console.log('Test run ended at:', new Date().toLocaleString());
        console.log('Run results:', results);
      });

      // Other node event listeners can be added here

      // Return the modified config
      return config;
    },
    supportFile: 'cypress/support/e2e.js', // Ensure this line is present
  },
});
