
// TC005: Edit an existing contact
it('TC005 - Edit an existing contact', () => {
    cy.visit('/loginhttps://thinking-tester-contact-list.herokuapp.com');
    cy.login('semo.us_2006@yahoo.com', '1234567');
    cy.visit('/contactList');
    cy.contains('Sam Joe').click();
    cy.get('#firstName').clear().type('Samy');
    cy.get('#lastName').clear().type('Joe');
    cy.get('#email').clear().type('samyjoe@yahoo.com');
    cy.contains('Save').click();
    cy.contains('Jane Smith').should('be.visible');
  });