describe('Contact Management Tests', () => {
  // TC005: Edit an existing contact
  it('TC005 - Edit an existing contact', () => {
    // Visit the login page and login
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    cy.get('#username').type('semo.us_2006@yahoo.com');
    cy.get('#password').type('1234567');
    cy.get('button[type="submit"]').click();
    
    // Verify successful login and navigation to the home page
    cy.url().should('include', '/home');

    // Visit the contact list page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');
    
    // Click on the contact you want to edit (assuming 'Sam Joe' exists in the list)
    cy.contains('Sam Joe').click();

    // Modify contact details
    cy.get('#firstName').clear().type('Samy');
    cy.get('#lastName').clear().type('Joe');
    cy.get('#email').clear().type('samyjoe@yahoo.com');

    // Save the changes
    cy.contains('Save').click();

    // Handle possible confirmation or success messages (if any)
    cy.on('window:alert', (str) => {
      expect(str).to.contains('Contact updated successfully'); // Adjust this message based on your application's behavior
      return true; // Automatically confirm the alert
    });

    // Verify that the edited contact details are updated and visible
    cy.contains('Samy Joe').should('be.visible');
    cy.contains('Sam Joe').should('not.exist'); // Ensure old name is no longer visible
  });
});

