describe("Dashboard Accessibility", () => {
  beforeEach(() => {
    localStorage.setItem("isAuthenticated", "true");

    cy.visit("/dashboard");

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

  it("contains required dashboard elements", () => {
    cy.get('[data-testid="main-navigation"]').should("exist");

    cy.get('[data-testid="user-table"]').should("exist");

    cy.get('[data-testid="user-row-0"]').should("exist");
    cy.get('[data-testid="user-row-1"]').should("exist");
    cy.get('[data-testid="user-row-2"]').should("exist");

    cy.get('[data-testid="page-heading"]').should("exist");

    cy.get('[data-testid="logout-button"]').should("exist");
  });
});