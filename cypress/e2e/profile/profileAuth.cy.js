/// <reference types="cypress" />

describe('Profile auth guard', () => {
  it('redirects unauthenticated user to login', () => {
    cy.clearLocalStorage('ccUser');
    cy.visit('/profile');
    cy.location('pathname').should('eq', '/login');
  });

  it('shows profile info after loginAsUser helper', () => {
    cy.loginAsUser();
    cy.visit('/profile');
    cy.contains('Demo User').should('exist');
  });
});
