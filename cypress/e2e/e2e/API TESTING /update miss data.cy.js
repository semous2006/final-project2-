describe('Update Contact (Missing Data) Test', () => {
  it('should handle missing data for contact update', () => {
    const contactId = 123; // ID of the contact to update
    const incompleteData = {}; // Empty object simulating missing data

    cy.request({
      method: 'PUT',
      url: `https://thinking-tester-contact-list.herokuapp.com/users/${contactId}`,
      body: incompleteData,
      failOnStatusCode: false // Allows the test to pass even if the status code is not 2xx
    }).then((response) => {
      expect(response.status).to.eq(400); // Asserting that the response status code is 400 (Bad Request)
    });
  });
});

  