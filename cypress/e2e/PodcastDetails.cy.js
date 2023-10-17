describe('PodcastDetails', () => {
  beforeEach(() => {
    cy.visit('/podcast/1698768033');
  });

  it('displays the podcast title', () => {
    cy.get('.podcast-info-title').should('be.visible');
  });

  it('displays the podcast image', () => {
    cy.get('.podcast-info-image').should('be.visible');
  });

  it('has a go back button', () => {
    cy.get('.go-back-btn').should('be.visible');
  });

  it('navigates back when "Go Back" button is clicked', () => {
    cy.window().then(win => {
      cy.stub(win.history, 'back');
    });
    cy.get('.go-back-btn').click();
    cy.window().its('history.back').should('have.been.called');
  });
});
