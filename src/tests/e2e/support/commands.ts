declare namespace Cypress {
    interface Chainable<Subject> {
        elementOnlyOne(selector: string, length?: number): Cypress.Chainable<void>;
    }
}
Cypress.Commands.add("elementOnlyOne", (selector, length = 1) => {
    cy.get(selector).its('length').should('eq', length);
});
