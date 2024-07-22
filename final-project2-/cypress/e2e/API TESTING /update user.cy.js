// cypress/integration/apiTests.spec.js

describe('Update User Endpoint Test', () => {
    it('should successfully update user details', () => {
      const userId = 123;
      const updatedUserDetails = {
        name: "Eslam Hassan"
      };
  
      cy.request({
        method: 'PUT',
        url: `https://thinking-tester-contact-list.herokuapp.com/users/${userId}`,
        body: updatedUserDetails
      }).then((response) => {
        expect(response.status).to.eq(200);
  
      
      });
    });
  });
  