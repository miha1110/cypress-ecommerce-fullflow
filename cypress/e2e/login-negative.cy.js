describe('Negative form tests on Cypress demo page', () => {
  beforeEach(() => {
    cy.visit('/commands/actions');
  });

  it('should try invalid email format', () => {
    cy.get('.action-email').type('invalidemail');
    cy.get('.action-email').should('have.value', 'invalidemail');
  });

  it('should force typing in disabled input', () => {
    cy.get('.action-disabled')
      .type('thisShouldFail', { force: true })
      .should('have.value', 'thisShouldFail');
  });
});


