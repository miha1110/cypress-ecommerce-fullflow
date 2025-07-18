describe('Checkout flow', () => {
  it('proceeds to checkout', () => {
    cy.visit('http://automationpractice.com/index.php?controller=order');
    cy.get('#cart_title').should('contain', 'Shopping-cart summary');
    cy.get('.cart_navigation a[title="Proceed to checkout"]').first().click();
    cy.url().should('include', 'step=1');
  });
});
