describe('Add User Endpoint Test', () => {
  it('should successfully add a new user', () => {
    const newUser = {
      name: "Eslam",
      email: "Ehassan@example.com"
    };

    cy.request({
      method: 'POST',
      url: 'https://thinking-tester-contact-list.herokuapp.com/users',
      body: newUser
    }).then((response) => {
      expect(response.status).to.eq(201);
      // Add more assertions as needed to validate the response body or headers
    });
  });
});
