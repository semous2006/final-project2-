describe('Delete Contact (by ID) Test', () => {
  it('should delete a contact by ID', () => {
    const contactId = 123; // Replace with a valid contact ID from your application

    cy.request({
      method: 'DELETE',
      url: `https://thinking-tester-contact-list.herokuapp.com/users/${contactId}`
    }).then((response) => {
      expect(response.status).to.eq(204); // Asserts that the status code is 204 (No Content)
      // You can add more assertions to validate other aspects of the response if needed
    });
  });
});

  