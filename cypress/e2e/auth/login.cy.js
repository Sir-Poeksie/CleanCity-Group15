describe('User Login', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/login');
    cy.location('pathname').should('eq', '/login');
  });

  it('logs in with valid credentials', () => {
    cy.get('#login-email').type('user@cleancity.com');
    cy.get('#login-password').type('password123');
    cy.get('form').submit();

    cy.location('pathname', { timeout: 10000 }).should('match', /\/(profile|dashboard)/);
    cy.contains('Logout').should('be.visible');
    cy.contains('Profile').should('be.visible');
  });

  it('shows error on invalid credentials', () => {
    cy.get('#login-email').type('wrong@cleancity.com');
    cy.get('#login-password').type('wrongpass');
    cy.get('form').submit();

    cy.get('.login-error').should('exist').and('contain.text', 'Invalid');
    cy.location('pathname').should('eq', '/login');
  });

  it('shows validation errors when email and password are empty', () => {
    cy.get('form').submit();
    cy.get('#login-email:invalid').should('exist');
    cy.get('#login-password:invalid').should('exist');
  });

  it('shows error if email is empty', () => {
    cy.get('#login-password').type('password123');
    cy.get('form').submit();
    cy.get('#login-email:invalid').should('exist');
  });

  it('shows error if password is empty', () => {
    cy.get('#login-email').type('user@cleancity.com');
    cy.get('form').submit();
    cy.get('#login-password:invalid').should('exist');
  });

  it('allows keyboard navigation through form inputs and submit button', () => {
    cy.get('body').tab();
    cy.focused().should('have.id', 'login-email').type('test@domain.com');
    cy.focused().tab().should('have.id', 'login-password').type('password123');
    cy.focused().tab().should('match', 'button[type="submit"]');
  });
});
