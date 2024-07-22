describe('Get User Details', () => {
  it('should retrieve user details', () => {
    cy.request('GET', '/api/user/details')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('name');
      });
  });
});

