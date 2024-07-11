describe('Contact List Tests', () => {
  // TC005: Edit an existing contact
  it('TC005 - Edit an existing contact', () => {
    // Correct the URL for the login page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    
    // Custom command to log in (assuming you have defined this in your support/commands.js)
    cy.login('semo.us_2006@yahoo.com', '1234567');
    
    // Visit the contact list page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');
    
    // Click on the contact named 'Sam Joe'
    cy.contains('Sam Joe').click();
    
    // Edit the contact details
    cy.get('#firstName').clear().type('Samy');
    cy.get('#lastName').clear().type('Joe');
    cy.get('#email').clear().type('samyjoe@yahoo.com');
    
    // Save the changes
    cy.contains('Save').click();
    
    // Verify that the changes were saved successfully
    cy.contains('Samy Joe').should('be.visible');
  });
});
