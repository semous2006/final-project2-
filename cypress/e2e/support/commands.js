// cypress/support/commands.js
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    cy.get('#username').type(email);
    cy.get('#password').type(password);
    cy.contains('Login').click();
  });
  