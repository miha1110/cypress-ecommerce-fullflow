describe('Login test', () => {
  it('logs in with valid credentials', () => {
    cy.login();
    cy.get('.account').should('contain', 'Test');
  });
});
