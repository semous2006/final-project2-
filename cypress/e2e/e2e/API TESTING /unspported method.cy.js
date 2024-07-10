// cypress/integration/apiTests.spec.js

describe('Unsupported Method Test', () => {
    it('should handle an unsupported method', () => {
      cy.request({
        method: 'PUT',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users',
        failOnStatusCode: false 
      }).then((response) => {
        expect(response.status).to.eq(405);
      });
    });
  });
  