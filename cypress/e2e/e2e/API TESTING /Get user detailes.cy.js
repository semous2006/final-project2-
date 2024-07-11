describe('Get User Details Endpoint Test', () => {
  it('should retrieve details of a specific user', () => {
    cy.request('GET', 'https://thinking-tester-contact-list.herokuapp.com/users')
      .then((response) => {
        expect(response.status).to.eq(200); // Asserts that the status code is 200 (OK)
        expect(response.body).to.be.an('array').and.not.to.be.empty; // Asserts that the response body is an array and not empty

        const userId = response.body[0].id; // Assumes the first user ID in the array

        cy.request(`GET`, `https://thinking-tester-contact-list.herokuapp.com/users/${userId}`)
          .then((userResponse) => {
            expect(userResponse.status).to.eq(200); // Asserts that the status code for the user details request is 200 (OK)
            expect(userResponse.body).to.have.property('id', userId); // Asserts that the user details response body has the expected user ID
            // You can add more assertions to validate other details of the user response if needed
          });
      });
  });
});
