describe("Login Page Accessibility", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.injectAxe();
  });

  it("has no accessibility violations", () => {
    cy.checkA11y();
  });

  it("contains required elements", () => {
    cy.get('[data-testid="login-form"]').should("exist");
    cy.get('[data-testid="username-input"]').should("exist");
    cy.get('[data-testid="password-input"]').should("exist");
    cy.get('[data-testid="login-button"]').should("exist");
    cy.get('[data-testid="login-error"]').should("exist");
    cy.get('[data-testid="skip-to-main"]').should("exist");
  });
});