it('TC008 - Search with invalid input', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com');
    
    cy.get('#username', { timeout: 10000 }).should('be.visible').type('semo.us_2006@yahoo.com');
    cy.get('#password').type('1234567');
    cy.get('button[type="submit"]').click();
    
    // Verify login success
    cy.url().should('include', '/home');
    
    // Navigate to contact list
    cy.visit('/contactList');
    
    // Perform search action with invalid input
    cy.get('#search', { timeout: 10000 }).should('be.visible').type('InvalidSearchTerm{enter}');
    
    // Verify that no results are found
    cy.contains('No results found').should('be.visible');
  });
  

  