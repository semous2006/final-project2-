describe('Update Non-existent Contact Test', () => {
  it('should handle update attempt on a non-existent contact', () => {
    const nonExistentContactId = 12345; // ID of a contact that does not exist
    const updatedDetails = {
      name: "Jan Smith",
      email: "jsmith.smith@example.com"
    };

    cy.request({
      method: 'PUT',
      url: `https://thinking-tester-contact-list.herokuapp.com/users/${nonExistentContactId}`,
      body: updatedDetails,
      failOnStatusCode: false // Allows the test to pass even if the status code is not 2xx
    }).then((response) => {
      expect(response.status).to.eq(404); // Asserting that the response status code is 404 (Not Found)
    });
  });
});

  