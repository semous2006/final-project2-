// cypress/integration/apiTests.spec.js

describe('Get User Details Endpoint Test', () => {
  it('should retrieve details of a specific user', () => {
    cy.request('GET', 'https://thinking-tester-contact-list.herokuapp.com/users')
      .then((response) => {
        expect(response.status).to.eq(200); 
        expect(response.body).to.be.an('array').and.not.to.be.empty;
        const userId = response.body[0].id;

        cy.request(`GET`, `https://thinking-tester-contact-list.herokuapp.com/users/${userId}`)
          .then((userResponse) => {
            expect(userResponse.status).to.eq(200); 
            expect(userResponse.body).to.have.property('id', 123); 
          });
      });
  });
});
