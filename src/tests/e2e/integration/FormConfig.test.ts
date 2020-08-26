describe("FormConfig", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('Apply button and textarea should be visible', () => {
        cy.get('.config-form__btn').should('be.visible');
        cy.get('.config-form__textarea').should('be.visible');
    });
});
