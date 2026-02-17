class InventoryPage {
  addBackpackToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  cartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  cartIcon() {
    return cy.get(".shopping_cart_link");
  }

  goToCart() {
    this.cartIcon().click();
  }
}

export default InventoryPage;
