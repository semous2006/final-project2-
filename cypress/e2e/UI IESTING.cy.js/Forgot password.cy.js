describe('Authentication Tests', () => {
  // TC003: Forgot Password functionality
  it('TC003 - Forgot Password functionality', () => {
    // Visit the login page and navigate to the forgot password section
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    cy.contains('Forgot Password').click();

    // Enter the username (assuming '#username' is the field for email/username)
    cy.get('#username').type('semo.us_2006@yahoo.com');

    // Click on the 'Reset Password' button
    cy.contains('Reset Password').click();

    // Verify that the password reset email confirmation message is displayed
    cy.contains('Password reset email sent').should('be.visible');
    
    // Optional: Check if a confirmation email was actually sent (if applicable)
    // This would require integration with an email testing tool or a mock service
    // cy.task('checkEmail', { email: 'semo.us_2006@yahoo.com' }).then((emailSent) => {
    //   expect(emailSent).to.be.true;
    // });
  });
});

