/**
 * User Login E2E tests
 * Route: /login
 */
describe('User Login', () => {
  beforeEach(() => {
    // always start clean
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/login');
    cy.location('pathname').should('eq', '/login');
  });

  it('logs in with valid credentials', () => {
    cy.get('[id="login-email"]').type('user@cleancity.com');
    cy.get('[id="login-password"]').type('password123');
    cy.get('form').submit();

    // redirected to profile (default) or previously intended page
    cy.location('pathname', { timeout: 10_000 }).should('match', /\/(profile|dashboard)/);

    // navbar should now show Logout + Profile links
    cy.contains('Logout').should('be.visible');
    cy.contains('Profile').should('be.visible');
  });

  it('shows error on invalid credentials', () => {
    cy.get('[id="login-email"]').type('wrong@cleancity.com');
    cy.get('[id="login-password"]').type('wrongpass');
    cy.get('form').submit();

    cy.get('.login-error')
      .should('exist')
      .and('contain', 'Invalid');
    cy.location('pathname').should('eq', '/login');
  });
});
