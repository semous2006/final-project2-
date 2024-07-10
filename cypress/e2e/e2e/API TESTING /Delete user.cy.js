// cypress/integration/apiTests.spec.js

describe('Delete User Endpoint Test', () => {
    it('should successfully delete a user', () => {
      const userId = 123;
  
      cy.request({
        method: 'DELETE',
        url: `https://thinking-tester-contact-list.herokuapp.com/users/${userId}`
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });
  