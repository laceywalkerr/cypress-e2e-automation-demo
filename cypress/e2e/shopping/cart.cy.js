import LoginPage from "../../support/pageObjects/LoginPage";
import InventoryPage from "../../support/pageObjects/InventoryPage";
import CartPage from "../../support/pageObjects/CartPage";

let tc = 1;

describe("Cart Flow", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    cy.loginAsSauceDemo();
  });

  it(`[${tc++}] [#JIRA-1234] Verify that when the backpack is added to the cart, the cart badge increments to 1`, () => {
    inventoryPage.addBackpackToCart();
    inventoryPage.cartBadge().should("contain", "1");
  });

  it(`[${tc++}] [#JIRA-1235] Verify that when the cart icon is clicked, the user is redirected to the cart page`, () => {
    inventoryPage.goToCart();
    cy.url().should("include", "/cart.html");
  });

  it(`[${tc++}] [#JIRA-1236] Verify that when the backpack is added and the cart page is opened, the backpack appears in the cart`, () => {
    inventoryPage.addBackpackToCart();
    inventoryPage.goToCart();
    cartPage.itemName().should("contain", "Sauce Labs Backpack");
  });

  // Validates UI content against controlled fixture data
  // Demonstrates data-driven test strategy
  it(`[${tc++}] [#JIRA-1237] Verify that the backpack description matches expected fixture data`, () => {
    cy.fixture("inventory").then((data) => {
      inventoryPage.backpackDescription().should("have.text", data.backpack.description);
    });
  });

  it(`[${tc++}] [#JIRA-2006] Verify backpack price matches fixture data`, () => {
    cy.fixture("inventory").then((data) => {
      cy.get('[data-test="inventory-item-price"]')
        .first()
        .should("have.text", data.backpack.price);
    });
  });

});

