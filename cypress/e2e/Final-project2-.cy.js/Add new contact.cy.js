
// TC004: Add a new contact

   describe('Contact List App Tests', () => {
    it('TC004 - Add a new contact', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com');
      cy.get('#username').type('semo.us_2006@yahoo.com');
      cy.get('#password').type('1234567');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/home');
      cy.visit('/contactList');
      cy.contains('Add Contact').click();
      cy.get('#firstName').type('sam');
      cy.get('#lastName').type('Joe');
    cy.get('#email').type('samjoe@yahoo.com');
    cy.contains('Save').click();
    cy.contains('Sam Joe').should('be.visible');
    
    });
  });
  