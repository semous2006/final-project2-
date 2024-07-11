describe('Contact List Tests', () => {
  // TC008: Search with invalid input
  it('TC008 - Search with invalid input', () => {
    // Correct the URL for the login page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    
    // Custom command to log in (assuming you have defined this in your support/commands.js)
    cy.login('semo.us_2006@yahoo.com', '1234567');
    
    // Visit the contact list page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');
    
    // Enter invalid search input and submit
    cy.get('#search').type('!@#');
    cy.get('#search').type('{enter}');
    
    // Verify that the 'No matching contacts' message is displayed
    cy.contains('No matching contacts').should('be.visible');
  });
});

  