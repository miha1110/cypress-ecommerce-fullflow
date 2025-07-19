describe('Positive Login Tests', () => {
  beforeEach(() => {
    cy.visit('/commands/actions');
  });

  it('should fill the email field correctly', () => {
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com');
  });

  it('should submit the form and see confirmation', () => {
    cy.get('.action-email').type('test@example.com');
    cy.get('.action-form')
      .submit()
      .next()
      .should('contain', 'Your form has been submitted!');
  });
});
