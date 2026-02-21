import InventoryPage from "../../support/pageObjects/InventoryPage";
import CartPage from "../../support/pageObjects/CartPage";

let tc = 1;

describe("Checkout Flow", () => {
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    cy.loginAsSauceDemo();
    cy.get(".inventory_list").should("be.visible");
  });

  it(`[${tc++}] [#JIRA-2001] Verify that a user can complete checkout successfully`, () => {
    inventoryPage.addBackpackToCart();
    inventoryPage.goToCart();

    cartPage.checkoutButton().click();
    cartPage.fillCheckoutInfo("Jane", "Doe", "37174");
    cartPage.continueCheckout();

    cartPage.finishCheckout();

    cartPage.completeHeader()
      .should("have.text", "Thank you for your order!");
  });

  it(`[${tc++}] [#JIRA-2004] Verify checkout fails when required fields are missing`, () => {
  inventoryPage.addBackpackToCart();
  inventoryPage.goToCart();

  cartPage.checkoutButton().click();
  cartPage.continueCheckout();

  cy.get('[data-test="error"]')
    .should("contain", "Error: First Name is required");
  });

});
