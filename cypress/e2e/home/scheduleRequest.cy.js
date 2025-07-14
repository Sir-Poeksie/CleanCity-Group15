describe('Schedule pickup request', () => {
  beforeEach(() => {
    cy.loginAsUser();
    cy.visit('/home');
  });

  it('blocks submit when fields missing', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Full name is required').should('exist');
  });

  it('creates pickup request and stores in localStorage', () => {
    cy.get('#fullName').type('QA Cypress User');
    cy.get('#location').select('Nairobi');
    cy.get('#wasteType').select('General Waste');
    cy.get('button[type="submit"]').click();

    cy.contains('Request submitted successfully').should('exist');

    cy.window()
      .its('localStorage.cleanCity_pickup_requests')
      .then(JSON.parse)
      .should((arr) => expect(arr.length).to.be.greaterThan(0));
  });
});
