describe('MainView', () => {
  it('displays a list of podcasts', () => {
    cy.visit('/');

    cy.get('.podcast-item').should('have.length.greaterThan', 0);
  });

  it('filters podcasts by search term', () => {
    cy.visit('/');

    cy.get('.search-input').type('Metal');

    cy.get('.podcast-item').should('have.length', 1);
  });

  it('navigates to podcast detail page on click', () => {
    cy.visit('/');

    cy.get('.podcast-item').first().click();

    cy.url().should('include', '/podcast/');
  });
});
