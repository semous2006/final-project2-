// TC003: Forgot Password functionality
it('TC003 - Forgot Password functionality', () => {
    cy.visit('/loginhttps://thinking-tester-contact-list.herokuapp.com');
    cy.contains('Forgot Password').click();
    cy.get('#username').type('semo.us_2006@yahoo.com');
    cy.contains('Reset Password').click();
    cy.contains('Password reset email sent').should('be.visible');
  });
  