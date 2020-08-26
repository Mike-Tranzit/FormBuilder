describe('FormResult', () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get('.config-form__textarea').then(elem => {
            cy.fixture('settings.json').then((json) => {
                elem.val(JSON.stringify(json, null, 2));
                cy.get('.config-form__btn').click();
                cy.get('.tabs__list > :nth-child(2)').click();
            });
        });
    });

    it('There are 3 buttons', () => {
        cy.elementOnlyOne('.bottom-buttons-container button', 3);
    });

    it('Title is visible', () => {
        cy.get('.title').should('be.visible');
        cy.elementOnlyOne('.title');
    });

    it('input[type="date"] is visible', () => {
        cy.elementOnlyOne('input[type="date"]');
    });

    it('input[type="number"] is visible', () => {
        cy.elementOnlyOne('input[type="number"]');
    });

    it('input[type="text"] is visible', () => {
        cy.elementOnlyOne('input[type="text"]');
    });

    it('input[type="checkbox"] is visible', () => {
        cy.elementOnlyOne('input[type="checkbox"]');
    });

    it('radio group is visible', () => {
        cy.elementOnlyOne('input[type="radio"]', 2);
    });

    it('textarea is visible', () => {
        cy.elementOnlyOne('.result-form textarea');
    });
});
