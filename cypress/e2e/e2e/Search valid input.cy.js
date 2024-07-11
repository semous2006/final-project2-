describe('Contact List Tests', () => {
  // TC007: Search with valid input
  it('TC007 - Search with valid input', () => {
    // Correct the URL for the login page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    
    // Custom command to log in (assuming you have defined this in your support/commands.js)
    cy.login('semo.us_2006@yahoo.com', '1234567');
    
    // Visit the contact list page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');
    
    // Enter valid search input and submit
    cy.get('#search').type('Johny');
    cy.get('#search').type('{enter}');
    
    // Verify that the 'Johny' is visible
    cy.contains('Johny').should('be.visible');
  });
});
