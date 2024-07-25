it('TC007 - Search with valid input', () => {
  cy.visit('https://thinking-tester-contact-list.herokuapp.com');
  
  cy.get('#username', { timeout: 10000 }).should('be.visible').type('semo.us_2006@yahoo.com');
  cy.get('#password').type('1234567');
  cy.get('button[type="submit"]').click();
  
  // Verify login success
  cy.url().should('include', '/home');
  
  // Navigate to contact list
  cy.visit('/contactList');
  
  // Perform search action
  cy.get('#search', { timeout: 10000 }).should('be.visible').type('Eslam{enter}');
  
  // Verify the search result
  cy.contains('Eslam').should('be.visible');
});

