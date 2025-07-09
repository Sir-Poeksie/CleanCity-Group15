describe('Submit Feedback', () => {
  beforeEach(() => {
    cy.loginAsUser();
    cy.visit('/feedback');
  });

  it('shows validation errors', () => {
    cy.get('form').submit();
    cy.contains('Request ID is required').should('exist');
  });

  it('submits feedback correctly', () => {
    cy.get('input[name="requestId"]').type('REQ004');
    cy.get('select[name="reason"]').select('Missed Pickup');
    cy.get('textarea[name="comments"]').type('Missed scheduled pickup on 15th July');
    cy.get('form').submit();
    cy.contains('Feedback submitted successfully').should('exist');
  });
});
