import LoginPage from "../../support/pageObjects/LoginPage";
import InventoryPage from "../../support/pageObjects/InventoryPage";
import CartPage from "../../support/pageObjects/CartPage";

describe("Cart Flow", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();

beforeEach(() => {
  cy.login("standard_user", "secret_sauce");
  cy.get(".inventory_list").should("be.visible");
});

  it("adds an item to the cart and verifies it in the cart page", () => {
    inventoryPage.addBackpackToCart();

    inventoryPage.cartBadge().should("contain", "1");

    inventoryPage.goToCart();

    cy.url().should("include", "/cart.html");
    cartPage.cartItem().should("have.length", 1);
    cartPage.itemName().should("contain", "Sauce Labs Backpack");
  });
});
