describe('User Interface Tests', () => {
  // TC009: Check responsiveness
  it('TC009 - Check responsiveness', () => {
    // Set viewport dimensions for a mobile device
    cy.viewport(320, 480);

    // Visit the login page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    
    // Enter valid credentials
    cy.get('#username').type('semo.us_2006@yahoo.com');
    cy.get('#password').type('1234567');
    
    // Submit the login form
    cy.get('button[type="submit"]').click();
    
    // Verify that the URL includes /home, indicating a successful login
    cy.url().should('include', '/home');
  });
});

  