describe('Search and add to cart', () => {
  it('searches and adds product to cart', () => {
    cy.visit('http://automationpractice.com');
    cy.get('#search_query_top').type('dress{enter}');
    cy.get('.product_list .product-container').first().trigger('mouseover');
    cy.get('.ajax_add_to_cart_button').first().click();
    cy.get('.layer_cart_product h2').should('contain', 'Product successfully added');
  });
});
