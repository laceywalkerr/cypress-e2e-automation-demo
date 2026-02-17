import LoginPage from "../../support/pageObjects/LoginPage";

describe("Authentication Flow", () => {
  const loginPage = new LoginPage();

beforeEach(() => {
  loginPage.visit();
});

it("logs in successfully with valid credentials", () => {
  loginPage.login("standard_user", "secret_sauce");

  cy.url().should("include", "/inventory.html");
  cy.get(".inventory_list").should("be.visible");
});

it("shows error with invalid credentials", () => {
  loginPage.login("invalid_user", "wrong_password");

  loginPage.errorMessage().should("be.visible");
  cy.url().should("not.include", "/inventory.html");
});
});
