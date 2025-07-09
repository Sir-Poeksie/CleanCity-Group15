describe('Admin Request Management', () => {
  beforeEach(() => {
    cy.loginAsAdmin();
    cy.visit('/admin');
  });

  it('loads all pickup requests', () => {
    cy.get('table tr').should('have.length.greaterThan', 1);
  });

  it('updates status of request', () => {
    cy.get('#requestSelect').select('REQ002');
    cy.get('#statusSelect').select('Completed');
    cy.get('#updateStatusBtn').click();
    cy.contains('Request status updated successfully').should('exist');
  });
});
