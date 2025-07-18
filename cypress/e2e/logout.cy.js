describe('Logout test', () => {
  it('logs out', () => {
    cy.login();
    cy.get('.logout').click();
    cy.url().should('include', 'controller=authentication');
  });
});

