describe('PodcastEpisodeDetails', () => {
  beforeEach(() => {
    cy.visit('/podcast/1698768033');
  });

  it('should display the episode title', () => {
    cy.get('.episode-title').should('be.visible');
  });

  it('should display the episode audio player', () => {
    cy.get('audio').should('be.visible');
  });

  it('should display the episode description', () => {
    cy.get('.episode-description').should('be.visible');
  });
});
