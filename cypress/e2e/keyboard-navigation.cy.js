describe("Keyboard Navigation", () => {
  it("tabs through login form", () => {
    cy.visit("/login");

    cy.get('[data-testid="username-input"]')
      .focus()
      .should("have.focus");

    cy.tab();

    cy.get('[data-testid="password-input"]')
      .should("have.focus");

    cy.tab();

    cy.get('[data-testid="login-button"]')
      .should("have.focus");
  });

  it("login button works with Enter key", () => {
    cy.visit("/login");

    cy.get('[data-testid="username-input"]')
      .type("testuser");

    cy.get('[data-testid="password-input"]')
      .type("password");

    cy.get('[data-testid="login-button"]')
      .focus()
      .type("{enter}");

    cy.url().should("include", "/dashboard");
  });
});