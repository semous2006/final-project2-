
// TC004: Add a new contact
it('TC004 - Add a new contact', () => {
    cy.visit('/loginhttps://thinking-tester-contact-list.herokuapp.com');
    cy.login('semo.us_2006@yahoo.com', '1234567');
    cy.visit('/contactList');
    cy.contains('Add Contact').click();
    cy.get('#firstName').type('sam');
    cy.get('#lastName').type('Joe');
    cy.get('#email').type('samjoe@yahoo.com');
    cy.contains('Save').click();
    cy.contains('Sam Joe').should('be.visible');
  });
  