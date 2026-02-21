let tc = 1;

describe("Inventory Network Validation", () => {
  it(`[${tc++}] [#JIRA-2005] Verify inventory page can be deterministically stubbed via network intercept`, () => {
    cy.intercept("GET", "**/inventory.html", {
      statusCode: 200,
      body: `
        <html>
          <body>
            <div class="inventory_list">Stubbed Inventory</div>
          </body>
        </html>
      `,
    }).as("inventoryStub");

    cy.visit("/inventory.html");

    cy.wait("@inventoryStub")
      .its("response.statusCode")
      .should("eq", 200);

    cy.contains("Stubbed Inventory").should("be.visible");
  });
});
