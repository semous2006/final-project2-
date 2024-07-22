describe('Contact Management Tests', () => {
  // TC007: Search with valid input
  it('TC007 - Search with valid input', () => {
    // Visit the login page and login
    cy.login('semo.us_2006@yahoo.com', '1234567');

    // Navigate to the contact list page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');

    // Perform search with valid input ('Johny')
    cy.get('#search').type('Johny');
    cy.get('#search').type('{enter}');

    // Verify that 'Johny' is visible in the search results
    cy.contains('Johny').should('be.visible');
  });
});


  