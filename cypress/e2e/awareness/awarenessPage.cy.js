/*describe('Awareness Page Tests', () => {
  beforeEach(() => {
    cy.visit('/awareness');
  });

  it('loads eco tips and infographics', () => {
    cy.get('.awareness-card', { timeout: 10000 }).should('exist');
  });

  it('checks for missing alt-text (accessibility)', () => {
    cy.get('img').each(($img) => {
      expect($img.attr('alt')).to.not.be.undefined;
    });
  });
});
*/
describe('Awareness Page Tests', () => {
  beforeEach(() => {
    cy.visit('/awareness');
  });

  it('shows the brand and main heading', () => {
    cy.get('.awareness-brand').should('contain.text', 'CleanCity');
    cy.get('h2').contains('Eco Awareness Center').should('be.visible');
  });

  it('displays daily eco tip and cycles through tips', () => {
    cy.get('.awareness-tip-text').should('exist').and('not.be.empty');

    cy.get('.awareness-tip-counter').invoke('text').then(text1 => {
      cy.wait(6000); 
      cy.get('.awareness-tip-counter').invoke('text').should(text2 => {
        expect(text2).not.to.eq(text1); 
      });
    });
  });

  it('renders the eco quiz question, options, and handles answer selection', () => {
    cy.get('.awareness-question').should('exist').and('not.be.empty');

    cy.get('.awareness-options button').should('have.length.greaterThan', 0).each(($btn) => {
      cy.wrap($btn).should('be.visible').and('not.be.disabled');
    });

    cy.get('.awareness-options button').first().click();

    cy.get('.awareness-result').should('be.visible');
    cy.get('.result-message').invoke('text').should(text => {
      expect(text).to.match(/Correct|Incorrect/);
    });

    cy.get('.awareness-action-btn').contains('Next Question').click();

    cy.get('.awareness-question').invoke('text').then(newQuestion => {
      expect(newQuestion).to.not.be.empty;
    });
  });

  it('displays infographic with correct title and description, cycles automatically', () => {
    cy.get('.awareness-infographic-card h4').should('exist').and('not.be.empty');
    cy.get('.awareness-info').should('exist').and('not.be.empty');

    cy.get('.infographic-counter').invoke('text').then(counter1 => {
      cy.wait(9000); 
      cy.get('.infographic-counter').invoke('text').should(counter2 => {
        expect(counter2).not.to.eq(counter1);
      });
    });
  });

  it('has actionable buttons with correct labels and navigations', () => {
    cy.get('.action-buttons button').should('have.length', 3);
    cy.get('.action-buttons button').eq(0).should('contain.text', 'Schedule Pickup');
    cy.get('.action-buttons button').eq(1).should('contain.text', 'Report Issues');
    cy.get('.action-buttons button').eq(2).should('contain.text', 'Join Community');

    // Click and check URL changes
    cy.get('.action-buttons button').eq(0).click();
    cy.location('pathname').should('eq', '/home');

    cy.visit('/awareness'); // Go back to reset state before next button

    cy.get('.action-buttons button').eq(1).click();
    cy.location('pathname').should('eq', '/feedback');

    cy.visit('/awareness');

    cy.get('.action-buttons button').eq(2).click();
    cy.location('pathname').should('eq', '/community');
  });

  it('all images (if any) have alt attributes for accessibility', () => {
    cy.get('img', { timeout: 10000 }).should('exist').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt').and('not.be.empty');
    });
  });
});
