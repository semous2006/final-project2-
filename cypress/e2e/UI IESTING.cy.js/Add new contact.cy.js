describe('Contact List App Tests', () => {
  it('TC004 - Add a new contact', () => {
    // Use the custom login command
    cy.login('semo.us_2006@yahoo.com', '1234567');
    
    // Navigate to the contact list page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');
    
    // Ensure the "Add Contact" button is visible before clicking
    cy.contains('Add Contact').should('be.visible').click();
    
    // Fill in the contact details
    cy.get('#firstName').should('be.visible').type('sam');
    cy.get('#lastName').should('be.visible').type('Joe');
    cy.get('#email').should('be.visible').type('samjoe@yahoo.com');
    
    // Save the new contact
    cy.contains('Save').should('be.visible').click();
    
    // Verify that the new contact is visible in the contact list
    cy.contains('Sam Joe').should('be.visible');
  });
});
