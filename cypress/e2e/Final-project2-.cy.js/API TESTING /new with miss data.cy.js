// cypress/integration/apiTests.spec.js

describe('Create New Contact (Missing Data) Test', () => {
    it('should handle missing data for new contact creation', () => {
      const incompleteData = {}; 
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users',
        body: incompleteData,
        failOnStatusCode: false
      }).then((response) => {
        
        expect(response.status).to.eq(400);
      });
    });
  });
  