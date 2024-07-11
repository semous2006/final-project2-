describe('Retrieve details of a specific contact', () => {
  it('should retrieve details of a specific contact', () => {
    cy.request('GET', 'https://thinking-tester-contact-list.herokuapp.com/users')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array').and.not.to.be.empty;

        // Assuming you want to retrieve details of the first contact in the array
        const contactId = response.body[0].id; // Access the ID of the first contact

        cy.request(`GET`, `https://thinking-tester-contact-list.herokuapp.com/users/${contactId}`)
          .then((contactResponse) => {
            expect(contactResponse.status).to.eq(200);
            expect(contactResponse.body).to.have.property('id', contactId); // Validate the ID of the retrieved contact
          });
      });
  });
});
