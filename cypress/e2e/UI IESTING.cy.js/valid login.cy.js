describe('Authentication Tests', () => {
  // TC001: Login with valid credentials
  it('TC001 - Login with valid credentials', () => {
    // Visit the login page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com');

    // Enter valid username and password
    cy.get('#username', { timeout: 10000 }).type('semo.us_2006@yahoo.com'); // Increase timeout if necessary
    cy.get('#password').type('1234567');
    
    // Click on the login button
    cy.get('button[type="submit"]').click();

    // Verify successful login and navigation to the home page
    cy.url().should('include', '/home');
    
    // Verify that a user-specific element or content is visible on the home page
    cy.contains('Welcome').should('be.visible'); // Adjust this assertion based on your application's content
  });
});
