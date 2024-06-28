// TC009: Check responsiveness
it('TC009 - Check responsiveness', () => {
    cy.viewport(320, 480);
    cy.visit('https://thinking-tester-contact-list.herokuapp.com');
    cy.get('#username').type('semo.us_2006@yahoo.com');
    cy.get('#password').type('1234567');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/home');
   
  });
  