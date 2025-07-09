describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should fail login with incorrect credentials', () => {
    cy.get('input[name=email]').type('fake@user.com');
    cy.get('input[name=password]').type('wrongpass');
    cy.get('form').submit();
    cy.contains('Invalid email or password');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('input[name=email]').type('admin@cleancity.com');
    cy.get('input[name=password]').type('admin123');
    cy.get('form').submit();
    cy.url().should('include', '/dashboard');
  });
});
