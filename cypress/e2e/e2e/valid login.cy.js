describe('User Authentication Tests', () => {
  // TC001: Login with valid credentials
  it('TC001 - Login with valid credentials', () => {
    // Navigate to the login page
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
