// cypress/integration/apiTests.spec.js

describe('Delete Non-existent Contact (by ID) Test', () => {
  it('should handle delete attempt on a non-existent contact', () => {
    const nonExistentContactId = 321;

    cy.request({
      method: 'DELETE',
      url: `https://thinking-tester-contact-list.herokuapp.com/users/${nonExistentContactId}`,
      failOnStatusCode: false 
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
