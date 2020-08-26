Cypress.Commands.add("elementOnlyOne", (selector, length = 1) => {
    cy.get(selector).its('length').should('eq', length);
});
