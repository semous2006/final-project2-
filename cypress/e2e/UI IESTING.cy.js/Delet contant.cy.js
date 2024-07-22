describe('Contact Management Tests', () => {
  // TC006: Delete a contact
  it('TC006 - Delete a contact', () => {
    // Visit the login page and login
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    cy.get('#username').type('semo.us_2006@yahoo.com');
    cy.get('#password').type('1234567');
    cy.get('button[type="submit"]').click();
    
    // Verify successful login and navigation to the home page
    cy.url().should('include', '/home');

    // Visit the contact list page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');
    
    // Find and delete a specific contact (assuming 'John Smith' exists in the list)
    cy.contains('John Smith').parent().find('button').click(); // Click on the delete button or action
    
    // Handle potential confirmation dialog
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Are you sure you want to delete this contact?'); // Adjust if your confirmation message is different
      return true; // Automatically confirm the dialog
    });

    // Verify that the deleted contact is no longer visible in the contact list
    cy.contains('John Smith').should('not.exist');
  });
});
