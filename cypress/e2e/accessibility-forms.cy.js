describe("Profile Form Accessibility", () => {
  beforeEach(() => {
    localStorage.setItem("isAuthenticated", "true");

    cy.visit("/profile/edit");

    cy.injectAxe();
  });

  it("has no accessibility violations", () => {
    cy.checkA11y(null, null, (violations) => {
      const seriousViolations = violations.filter(
        (v) =>
          v.impact === "critical" ||
          v.impact === "serious"
      );

      cy.writeFile(
        "cypress/reports/accessibility-report.json",
        seriousViolations
      );

      expect(seriousViolations).to.have.length(0);
    });
  });

  it("contains required form fields", () => {
    cy.get('[data-testid="profile-form"]').should("exist");

    cy.get('[data-testid="name-input"]').should("exist");

    cy.get('[data-testid="email-input"]').should("exist");

    cy.get('[data-testid="bio-textarea"]').should("exist");

    cy.get(
      '[data-testid="color-preference-select"]'
    ).should("exist");

    cy.get('[data-testid="save-button"]').should("exist");

    cy.get('[data-testid="cancel-button"]').should("exist");

    cy.get('[data-testid="success-message"]').should("exist");
  });
});