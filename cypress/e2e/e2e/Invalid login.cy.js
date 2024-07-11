describe('User Authentication Tests', () => {
  // TC002: Login with invalid credentials
  it('TC002 - Login with invalid credentials', () => {
    // Correct the URL for the login page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    
    // Enter invalid username and password
    cy.get('#username').type('semo.us_2006@yahoo.com');
    cy.get('#password').type('1234');
    
    // Click on the login button
    cy.get('button[type="submit"]').click();
    
    // Verify that the 'Invalid credentials' message is displayed
    cy.contains('Invalid credentials').should('be.visible');
  });
});

  