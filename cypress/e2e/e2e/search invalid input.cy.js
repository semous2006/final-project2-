
// TC008: Search with invalid input
it('TC008 - Search with invalid input', () => {
    cy.visit('/loginhttps://thinking-tester-contact-list.herokuapp.com'); 
    cy.login('semo.us_2006@yahoo.com', '1234567');
    cy.visit('/contactList');
    cy.get('#search').type('!@#');
    cy.get('#search').type('{enter}');
    cy.contains('No matching contacts').should('be.visible');
  });
  