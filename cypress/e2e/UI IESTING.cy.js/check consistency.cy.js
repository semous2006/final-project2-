describe('User Interface Tests', () => {
  // TC010: Check UI consistency
  it('TC010 - Check UI consistency', () => {
    // Visit the login page and login
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    cy.get('#username').type('semo.us_2006@yahoo.com');
    cy.get('#password').type('1234567');
    cy.get('button[type="submit"]').click();
    
    // Verify successful login and navigation to the home page
    cy.url().should('include', '/home');

    // Example UI consistency checks
    cy.get('.navbar').should('be.visible'); // Ensure the navbar is visible
    cy.contains('Welcome').should('be.visible'); // Ensure a welcome message or user information is visible
    // Add more assertions as needed to check other UI elements for consistency
  });
});

