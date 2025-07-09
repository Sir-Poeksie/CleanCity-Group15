describe('Schedule Waste Pickup', () => {
  beforeEach(() => {
    cy.loginAsUser();
    cy.visit('/home');
  });

  it('submits valid pickup form', () => {
    cy.get('input[name="fullName"]').type('John Test');
    cy.get('select[name="location"]').select('Nairobi');
    cy.get('select[name="wasteType"]').select('General Waste');
    cy.get('input[name="preferredDate"]').type('2025-07-20');
    cy.get('form').submit();
    cy.contains('Request submitted successfully').should('exist');
  });

  it('shows error for invalid form submission', () => {
    cy.get('form').submit();
    cy.get('#name-error').should('contain', 'Full name is required');
  });
});
