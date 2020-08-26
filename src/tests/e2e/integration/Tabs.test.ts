describe("Tabs", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('Tabs should be visible', () => {
        cy.get('.tabs__list').should('be.visible');
    });

    it('Content div should be visible', () => {
        cy.get('.tabs__content').should('be.visible');
    });

    it('Active Tab should be only one', () => {
        cy.elementOnlyOne('.tabs__item--active');
    });

    it('Two tabs should be visible', () => {
        cy.elementOnlyOne('.tabs__item', 2);
    });


    it('Active tab is Config', () => {
        cy.get('.tabs__item--active').contains('Config');
    });

    it('Toggle active class', () => {
        cy.get('.tabs__list > :nth-child(2)').click();
        cy.get('.tabs__list > :nth-child(2)').should('have.class', 'tabs__item--active');
        cy.get('.tabs__list > :nth-child(1)').should('not.have.class', 'tabs__item--active');
    })
});
