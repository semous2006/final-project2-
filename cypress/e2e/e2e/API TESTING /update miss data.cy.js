// cypress/integration/apiTests.spec.js

describe('Update Contact (Missing Data) Test', () => {
    it('should handle missing data for contact update', () => {
      const contactId = 123;
      const incompleteData = {}; 
  
      cy.request({
        method: 'PUT',
        url: `https://thinking-tester-contact-list.herokuapp.com/users/${contactId}`,
        body: incompleteData,
        failOnStatusCode: false 
      }).then((response) => {
        
        expect(response.status).to.eq(400);
      });
    });
  });
  