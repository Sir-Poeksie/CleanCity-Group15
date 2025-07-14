import './commands';
afterEach(function () {
  if (this.currentTest.state === 'passed') {
    cy.screenshot(this.currentTest.title);
  }
});
// cypress/support/e2e.js
afterEach(function () {
  if (this.currentTest.state === 'passed') {
    const name = this.currentTest.title.replace(/ /g, '_');
    cy.screenshot(`PASSED - ${name}`);
  }
});
