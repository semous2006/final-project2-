// TC001: Login with valid credentials
it('TC001 - Login with valid credentials', () => {
  cy.visit('https://thinking-tester-contact-list.herokuapp.com');
  cy.get('#username').type('semo.us_2006@yahoo.com');
  cy.get('#password').type('1234567');
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/home');
  
});