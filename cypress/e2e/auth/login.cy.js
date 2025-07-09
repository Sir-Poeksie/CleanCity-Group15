describe('User Login', () => {
  beforeEach(() => cy.visit('/login'));

  it('logs in with valid credentials', () => {
    cy.get('input[name="email"]').type(Cypress.env('TEST_USER_EMAIL'));
    cy.get('input[name="password"]').type(Cypress.env('TEST_USER_PASSWORD'));
    cy.get('form').submit();
    cy.url().should('include', '/dashboard');
  });

  it('shows error on invalid credentials', () => {
    cy.get('input[name="email"]').type('wrong@cleancity.com');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('form').submit();
    cy.contains('Invalid email or password').should('exist');
  });
});
