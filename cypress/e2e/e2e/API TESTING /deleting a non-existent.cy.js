describe('Delete Non-existent Contact (by ID) Test', () => {
  it('should handle delete attempt on a non-existent contact', () => {
    const nonExistentContactId = 321; // Replace with a non-existent contact ID

    cy.request({
      method: 'DELETE',
      url: `https://thinking-tester-contact-list.herokuapp.com/users/${nonExistentContactId}`,
      failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx response codes
    }).then((response) => {
      expect(response.status).to.eq(404); // Asserts that the status code is 404 (Not Found)
      // You can add more assertions to validate other aspects of the response if needed
    });
  });
});

