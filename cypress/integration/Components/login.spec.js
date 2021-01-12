<reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
        cy.visit('https://localhost:3000')
    })

    describe('loads into Login page', () => {
        cy.find('.Login')
        .should('be.visible')
    })
})