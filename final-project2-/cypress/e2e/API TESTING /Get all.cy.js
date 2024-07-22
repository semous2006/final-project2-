// cypress/integration/apiTests.spec.js

describe('API Testing with Cypress', () => {
  it('should retrieve all booking IDs', () => {
    cy.request('GET', 'https://thinking-tester-contact-list.herokuapp.com/')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.greaterThan(0);
      });
  });
});
