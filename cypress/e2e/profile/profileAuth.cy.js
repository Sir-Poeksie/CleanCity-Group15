describe('Profile auth guard', () => {
  it('redirects unauthenticated user to login', () => {
    cy.window().then((win) => {
      win.localStorage.removeItem('ccUser');
    });
    cy.visit('/profile');
    cy.location('pathname', { timeout: 5000 }).should('eq', '/login');
  });

  it('shows profile info after loginAsUser helper', () => {
    cy.loginAsUser();
    cy.visit('/profile');
    cy.contains('Demo User').should('exist');
  });
});
