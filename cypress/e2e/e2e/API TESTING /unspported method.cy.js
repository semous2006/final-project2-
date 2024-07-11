describe('Unsupported Method Test', () => {
  it('should handle an unsupported method', () => {
    cy.request({
      method: 'PUT', // Using PUT method for testing unsupported method scenario
      url: 'https://thinking-tester-contact-list.herokuapp.com/users',
      failOnStatusCode: false // Allows the test to pass even if the status code is not 2xx
    }).then((response) => {
      expect(response.status).to.eq(405); // Asserting that the response status code is 405 (Method Not Allowed)
    });
  });
});

  