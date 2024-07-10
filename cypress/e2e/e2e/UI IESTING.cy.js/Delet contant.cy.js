// TC006: Delete a contact
it('TC006 - Delete a contact', () => {
  cy.visit('/loginhttps://thinking-tester-contact-list.herokuapp.com'); 
  cy.login('semo.us_2006@yahoo.com', '1234567');
  cy.visit('/contactList');
  cy.contains('John Smith').parent().find('button').click(); 
  cy.contains('John Smith').should('not.exist');
});
