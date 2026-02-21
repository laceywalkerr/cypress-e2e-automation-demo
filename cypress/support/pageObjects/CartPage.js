class CartPage {
  cartItem() {
    return cy.get(".cart_item");
  }

  itemName() {
    return cy.get(".inventory_item_name");
  }

  checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }

  fillCheckoutInfo(first, last, postal) {
    cy.get('[data-test="firstName"]').type(first);
    cy.get('[data-test="lastName"]').type(last);
    cy.get('[data-test="postalCode"]').type(postal);
  }

  continueCheckout() {
    cy.get('[data-test="continue"]').click();
  }

  finishCheckout() {
    cy.get('[data-test="finish"]').click();
  }

  completeHeader() {
    return cy.get('[data-test="complete-header"]');
  }
}

export default CartPage;
