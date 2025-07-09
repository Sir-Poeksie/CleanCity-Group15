describe('Dashboard Filters', () => {
  beforeEach(() => {
    cy.loginAsUser();
    cy.visit('/dashboard');
  });

  it('filters by status', () => {
    cy.get('#statusFilter').select('Scheduled');
    cy.get('tbody tr').each(row => {
      cy.wrap(row).contains('Scheduled');
    });
  });

  it('filters by location (bug check)', () => {
    cy.get('#locationFilter').select('Eldoret');
    cy.get('tbody tr').should('not.contain', 'Eldoret'); // Intentional bug: returns Nairobi
  });
});
