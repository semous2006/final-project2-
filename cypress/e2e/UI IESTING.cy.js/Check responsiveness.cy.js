describe('Responsive Design Tests', () => {
  // TC009: Check responsiveness
  it('TC009 - Check responsiveness', () => {
    // Set viewport dimensions for a mobile device
    cy.viewport(320, 480);

    // Visit the login page and login
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    cy.get('#username').type('semo.us_2006@yahoo.com');
    cy.get('#password').type('1234567');
    cy.get('button[type="submit"]').click();
    
    // Verify successful login and navigation to the home page
    cy.url().should('include', '/home');
    
    // Example: Check responsiveness of specific UI elements or layout
    // Example: Ensure certain elements are visible or positioned correctly on mobile view
    cy.get('.navbar').should('be.visible'); // Example: Check if navbar is visible
    
    // Add more specific assertions as needed to check responsiveness

    // Optionally, you can check for a responsive design class or attribute
    // cy.get('body').should('have.class', 'responsive'); // Example: If your app adds a class for responsive design

    // Note: Adjust assertions based on your application's specific responsive behavior
  });
});

  