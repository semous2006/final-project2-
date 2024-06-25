// TC007: Search with valid input
it('TC007 - Search with valid input', () => {
    cy.visit('/loginhttps://thinking-tester-contact-list.herokuapp.com'); 
    cy.login('semo.us_2006@yahoo.com', '1234567');
    cy.visit('/contactList');
    cy.get('#search').type('Johny');
    cy.get('#search').type('{enter}');
    cy.contains('Johny').should('be.visible');
  });
  