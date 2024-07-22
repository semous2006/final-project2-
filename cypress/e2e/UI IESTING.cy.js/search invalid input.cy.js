describe('Contact Management Tests', () => {
  // TC008: Search with invalid input
  it('TC008 - Search with invalid input', () => {
    // Visit the login page and login
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    cy.login('semo.us_2006@yahoo.com', '1234567');

    // Navigate to the contact list page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');

    // Perform search with invalid input
    cy.get('#search').type('!@#');
    cy.get('#search').type('{enter}');

    // Verify that the "No matching contacts" message is displayed
    cy.contains('No matching contacts').should('be.visible');
  });
});

  