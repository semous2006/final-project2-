const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5bo2zu',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
{
  "name": "final-project2",
  "version": "1.0.0",
  "description": "",
  "main": "cypress.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cy:run": "cypress run"
  },
  "keywords": [],
  "author": "Eslam Hassan",
  "license": "ISC"
}
