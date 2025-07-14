/**
 * User Registration E2E tests
 * Route: /register
 */
describe('User Registration', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/register');
    cy.location('pathname').should('eq', '/register');
  });

  it('validates missing fields', () => {
    cy.get('form').submit();

    cy.get('.register-error')
      .should('exist')
      .and('contain', 'fill in all fields');
  });

  it('registers a new user', () => {
    const timestamp = Date.now();
    cy.get('[id="register-name"]').type(`Test User ${timestamp}`);
    cy.get('[id="register-email"]').type(`test${timestamp}@example.com`);
    cy.get('[id="register-password"]').type('test1234');
    cy.get('form').submit();

    // After successful registration, app redirects to /login (per onRegister)
    cy.location('pathname', { timeout: 10_000 }).should('eq', '/login');
    cy.contains('Login').should('exist');
  });
});

