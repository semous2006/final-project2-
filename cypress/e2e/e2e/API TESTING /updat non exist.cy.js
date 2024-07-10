// cypress/integration/apiTests.spec.js

describe('Update Non-existent Contact Test', () => {
    it('should handle update attempt on a non-existent contact', () => {
      const nonExistentContactId = 12345;
      const updatedDetails = {
        name: "Jan Smith",
        email: "jsmith.smith@example.com"
      };
  
      cy.request({
        method: 'PUT',
        url: `https://thinking-tester-contact-list.herokuapp.com/users/${nonExistentContactId}`,
        body: updatedDetails,
        failOnStatusCode: false 
      }).then((response) => {
     
        expect(response.status).to.eq(404);
      });
    });
  });
  