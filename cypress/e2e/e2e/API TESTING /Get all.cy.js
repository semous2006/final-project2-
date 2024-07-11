describe('API Testing with Cypress', () => {
  it('should retrieve all booking IDs', () => {
    cy.request('GET', 'https://thinking-tester-contact-list.herokuapp.com/')
      .should((response) => {
        expect(response.status).to.eq(200); // Asserts that the status code is 200 (OK)
        expect(response.body).to.have.length.greaterThan(0); // Asserts that the response body has data
        // You can add more assertions to validate other aspects of the response if needed
      });
  });
});

