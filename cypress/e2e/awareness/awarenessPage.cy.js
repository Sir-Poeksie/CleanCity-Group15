describe('Awareness Page Tests', () => {
  it('loads eco tips and infographics', () => {
    cy.visit('/awareness');
    cy.get('.awareness-card').should('exist');
  });

  it('checks for missing alt-text (accessibility)', () => {
    cy.get('img').each(($img) => {
      expect($img.attr('alt')).to.not.be.undefined;
    });
  });
});
