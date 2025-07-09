describe('Navigation Bar', () => {
  it('loads all public routes', () => {
    cy.visit('/');
    cy.contains('Schedule Pickup');
    cy.contains('Blog');
    cy.contains('Community');
  });

  it('shows user-specific links on login', () => {
    cy.loginAsUser();
    cy.visit('/');
    cy.contains('Profile');
    cy.contains('Logout');
  });

  it('shows admin link for admin', () => {
    cy.loginAsAdmin();
    cy.visit('/');
    cy.contains('Admin');
  });
});
