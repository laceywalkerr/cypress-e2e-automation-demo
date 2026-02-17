class CartPage {
  cartItem() {
    return cy.get(".cart_item");
  }

  itemName() {
    return cy.get(".inventory_item_name");
  }
}

export default CartPage;
