// cypress/integration/apiTests.spec.js

describe('Delete Contact (by ID) Test', () => {
    it('should delete a contact by ID', () => {
      const contactId = 123;
  
      cy.request({
        method: 'DELETE',
        url: `https://thinking-tester-contact-list.herokuapp.com/users/${contactId}`
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });
  