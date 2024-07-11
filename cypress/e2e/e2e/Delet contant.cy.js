describe('Delete User', () => {
  it('should delete a user successfully', () => {
    const userId = 123;

    cy.request({
      method: 'DELETE',
      url: `https://thinking-tester-contact-list.herokuapp.com/users/${userId}`,
    }).then((response) => {
      // Assertions to ensure the delete was successful
      expect(response.status).to.eq(200);
      // Add more assertions if needed
    });
  });
});
