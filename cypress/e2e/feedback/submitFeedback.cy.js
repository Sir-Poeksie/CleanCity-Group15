/**
 * Submit Feedback E2E tests
 * Route: /feedback
 
describe('Submit Feedback', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

    // seed at least one pickup request so there is a valid ID
    const seed = [
      {
        id: 'REQ777',
        name: 'Seeded User',
        location: 'Nairobi',
        date: '2025-07-13',
        status: 'Completed'
      }
    ];
    window.localStorage.setItem('pickupRequests', JSON.stringify(seed));

    // login as a normal user via helper command
    cy.loginAsUser();
    cy.visit('/feedback');
    cy.location('pathname').should('eq', '/feedback');
  });

  it('shows validation errors when fields are empty', () => {
    cy.get('form').submit();

    cy.get('.error-message')
      .should('exist')
      .and(($els) => {
        expect($els.length).to.be.greaterThan(0);
      });
  });

  it('submits feedback correctly', () => {
    cy.get('[name="requestId"]').type('REQ777');
    cy.get('[name="reason"]').select('Missed Pickup');
    cy.get('[name="comments"]').type('The truck never came today.');

    cy.get('form').submit();

    cy.contains('Feedback submitted successfully', { timeout: 5_000 }).should('exist');

    // feedback list (if rendered) should include our new entry
    cy.visit('/dashboard'); // or wherever feedback is displayed
    cy.contains('REQ777').should('exist');
  });
});
*/


describe('Feedback form', () => {
  beforeEach(() => {
    cy.loginAsUser();
    cy.visit('/feedback');
  });

  it('validates required fields', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Request ID is required').should('exist');
    cy.contains('Please select a reason').should('exist');
  });

  it('submits feedback successfully', () => {
    cy.get('#requestId').type('REQ100');
    cy.get('#reason').select('Missed Pickup');
    cy.get('#comments').type('Driver didn’t show up');
    cy.get('button[type="submit"]').click();
    cy.contains('Feedback submitted successfully').should('exist');

    cy.window()
      .its('localStorage.cleanCity_feedback')
      .then(JSON.parse)
      .should((arr) => expect(arr).to.have.length.greaterThan(0));
  });
});
