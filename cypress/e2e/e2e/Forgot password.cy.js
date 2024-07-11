describe('User Authentication Tests', () => {
  // TC003: Forgot Password functionality
  it('TC003 - Forgot Password functionality', () => {
    // Correct the URL for the login page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    
    // Click on 'Forgot Password' link
    cy.contains('Forgot Password').click();
    
    // Type the username/email
    cy.get('#username').type('semo.us_2006@yahoo.com');
    
    // Click on 'Reset Password' button
    cy.contains('Reset Password').click();
    
    // Verify that the password reset email was sent
    cy.contains('Password reset email sent').should('be.visible');
  });
});

  