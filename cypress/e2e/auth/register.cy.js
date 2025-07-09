describe('User Registration', () => {
  beforeEach(() => cy.visit('/register'));

  it('validates missing fields', () => {
    cy.get('form').submit();
    cy.contains('Name is required').should('exist');
  });

  it('registers a new user', () => {
    const uniqueEmail = `test${Date.now()}@mail.com`;
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type(uniqueEmail);
    cy.get('input[name="password"]').type('testpass123');
    cy.get('input[name="confirmPassword"]').type('testpass123');
    cy.get('form').submit();
    cy.contains('Registration successful').should('exist');
  });
});
