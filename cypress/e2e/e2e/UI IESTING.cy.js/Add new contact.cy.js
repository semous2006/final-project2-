describe('Contact List App Tests', () => {
  // TC004: Add a new contact
  it('TC004 - Add a new contact', () => {
    // Visit the login page and login
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    cy.get('#username').type('semo.us_2006@yahoo.com');
    cy.get('#password').type('1234567');
    cy.get('button[type="submit"]').click();
    
    // Verify successful login
    cy.url().should('include', '/home');

    // Navigate to the contact list page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');
    
    // Click on 'Add Contact' button
    cy.contains('Add Contact').click();
    
    // Enter details for the new contact
    cy.get('#firstName').type('sam');
    cy.get('#lastName').type('Joe');
    cy.get('#email').type('samjoe@yahoo.com');
    
    // Save the new contact
    cy.contains('Save').click();
    
    // Verify that the new contact is visible in the contact list
    cy.contains('Sam Joe').should('be.visible');
  });
});

  
  