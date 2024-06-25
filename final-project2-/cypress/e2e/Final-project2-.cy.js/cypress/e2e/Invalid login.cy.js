// TC002: Login with invalid credentials
it('TC002 - Login with invalid credentials', () => {
    cy.visit('/loginhttps://thinking-tester-contact-list.herokuapp.com');
    cy.get('#username').type('semo.us_2006@yahoo.com');
    cy.get('#password').type('1234');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid credentials').should('be.visible');
  });
  