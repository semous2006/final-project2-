describe('Create New Contact (Missing Data) Test', () => {
  it('should handle missing data for new contact creation', () => {
    const incompleteData = {}; // Define an empty object for incomplete data
    cy.request({
      method: 'POST',
      url: 'https://thinking-tester-contact-list.herokuapp.com/users',
      body: incompleteData,
      failOnStatusCode: false // Allow the request to fail without failing the test
    }).then((response) => {
      expect(response.status).to.eq(400); // Asserts that the status code is 400 (Bad Request)
      // You can add more assertions to validate the response body or specific error messages if needed
    });
  });
});

  