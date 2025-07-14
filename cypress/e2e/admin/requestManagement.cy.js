// cypress/e2e/admin/requestManagement.cy.js

describe('Admin Request Management', () => {
  beforeEach(() => {
    cy.seedAdminRequests();   // test data
    cy.loginAsAdmin();
    cy.visit('/admin');
    cy.contains('Manage Requests').should('exist');

    cy.get('.admin-page-root', { timeout: 10000 }).should('exist');
    cy.get('h2').contains('Admin: Manage Requests').should('exist');
    cy.get('table.admin-table', { timeout: 10000 }).should('exist');

    cy.log('Admin page loaded');
  });

  it('loads all pickup requests', () => {
    cy.get('table.admin-table tbody tr')
      .its('length')
      .should('be.greaterThan', 0);
  });

  it('marks a request as Completed', () => {
    cy.get('table.admin-table tbody tr').first().within(() => {
      cy.contains('Complete').click();
    });

    cy.get('table.admin-table tbody tr')
      .first()
      .contains('td', 'Completed')
      .should('exist');
  });

  it('marks a request as Missed', () => {
    cy.get('table.admin-table tbody tr').eq(1).within(() => {
      cy.contains('Missed').click();
    });

    cy.get('table.admin-table tbody tr')
      .eq(1)
      .contains('td', 'Missed')
      .should('exist');
  });

  it('deletes a request', () => {
    cy.on('window:confirm', () => true);

    cy.get('table.admin-table tbody tr')
      .its('length')
      .then((countBefore) => {
        cy.get('table.admin-table tbody tr')
          .first()
          .within(() => {
            cy.contains('Delete').click();
          });

          cy.get('table.admin-table tbody tr')
          .its('length')
          .should('be.lt', countBefore);
      });
  });
});
