describe('Responsive Design Tests', () => {
  // TC009: Check responsiveness
  it('TC009 - Check responsiveness', () => {
    // Test different viewport sizes to ensure responsiveness
    const viewports = [
      { width: 320, height: 480, name: 'mobile' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 1200, height: 800, name: 'desktop' }
    ];

    viewports.forEach(({ width, height, name }) => {
      it(`should display correctly on ${name} (${width}x${height})`, () => {
        // Set viewport dimensions
        cy.viewport(width, height);

        // Visit the login page and login
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#username').type('semo.us_2006@yahoo.com');
        cy.get('#password').type('1234567');
        cy.get('button[type="submit"]').click();
        
        // Verify successful login and navigation to the home page
        cy.url().should('include', '/home');
        
        // Example: Check responsiveness of specific UI elements or layout
        // Ensure navbar is visible
        cy.get('.navbar').should('be.visible');

        // Check if the layout adapts correctly
        cy.get('.sidebar').should(name === 'mobile' ? 'not.be.visible' : 'be.visible');
        cy.get('.main-content').should('be.visible');

        // Example: Check for a responsive design class or attribute (if applicable)
        cy.get('body').should('have.class', 'responsive'); // Adjust if your app uses a different class
        
        // Additional checks based on specific responsive behavior of your application
        if (name === 'mobile') {
          cy.get('.contact-form').should('be.visible').and('have.css', 'width', '100%');
        } else {
          cy.get('.contact-form').should('be.visible').and('not.have.css', 'width', '100%');
        }
      });
    });
  });
});


  