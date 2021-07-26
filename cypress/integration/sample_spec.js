describe("My First Test", function () {
  it("Visits the kitchen sink", function () {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");
  });
});

