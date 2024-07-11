describe('UI Tests', () => {
  // TC010: Check UI consistency
  it('TC010 - Check UI consistency', () => {
    // Visit the login page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    
    // Enter valid credentials and login
    cy.get('#username').type('semo.us_2006@yahoo.com');
    cy.get('#password').type('1234567');
    cy.get('button[type="submit"]').click();
    
    // Verify that the URL includes /home, indicating a successful login
    cy.url().should('include', '/home');

    // Example of additional UI consistency checks (modify as per your application's UI)
    // Example: Verify presence of important elements after login
    cy.get('.navbar').should('be.visible'); // Example: Check if navbar is visible
    cy.contains('Welcome').should('be.visible'); // Example: Check if welcome message is visible
    // Add more assertions as needed to check UI elements and consistency
  });
});

