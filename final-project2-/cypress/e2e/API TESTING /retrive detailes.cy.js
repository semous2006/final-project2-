// cypress/integration/apiTests.spec.js

describe('Retrieve details of a specific contact of products', () => {
    it('should retrieve details of a specific contact of products', () => {
      cy.request('GET', 'https://thinking-tester-contact-list.herokuapp.com/users')
        .then((response) => {
          expect(response.status).to.eq(200); 
          expect(response.body).to.be.an('array').and.not.to.be.empty;
  
          const contactId = response.body[123].id;
  
          cy.request(`GET`, `https://thinking-tester-contact-list.herokuapp.com/users/${contactId}`)
            .then((contactResponse) => {
              expect(contactResponse.status).to.eq(200); 
              expect(contactResponse.body).to.have.property('id', 123); 
            });
        });
    });
  });
  