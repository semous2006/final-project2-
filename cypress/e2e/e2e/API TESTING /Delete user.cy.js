// cypress/integration/apiTests.spec.js
describe('Delete User Endpoint Test', () => {
  it('should successfully delete a user', () => {
    const userId = 123; // Replace with a valid user ID from your application

    cy.request({
      method: 'DELETE',
      url: `https://thinking-tester-contact-list.herokuapp.com/users/${userId}`
    }).then((response) => {
      expect(response.status).to.eq(204); // Asserts that the status code is 204 (No Content)
      // You can add more assertions to validate other aspects of the response if needed
    });
  });
});

  