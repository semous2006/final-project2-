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
    
    // Check for presence of main sections or components
    cy.get('header').should('be.visible'); // Ensure header is visible
    cy.get('footer').should('be.visible'); // Ensure footer is visible
    
    // Check for specific elements within the page
    cy.get('.sidebar').should('be.visible'); // Ensure sidebar is visible
    cy.get('.main-content').should('be.visible'); // Ensure main content area is visible
    
    // Example of checking button state
    cy.get('button').should('be.enabled'); // Ensure buttons are enabled (if applicable)
    
    // Example of checking text content
    cy.contains('Contact List').should('be.visible'); // Ensure 'Contact List' text is visible
    
    // Example of checking styling or attributes
    cy.get('.navbar').should('have.css', 'background-color', 'rgb(0, 123, 255)'); // Check navbar color
  });
});


