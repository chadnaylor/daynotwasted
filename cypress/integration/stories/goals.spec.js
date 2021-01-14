
context('Goals', () => {

    describe('Goals progress updates', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000')
            cy.get('input[name="email"]').type('brian@daynotwasted.com')
            cy.get('input[name="password"]').type('password')
            cy.get('button[name="signIn"]').click()
        })
        afterEach(() => {
            cy.get('button[name="signOutbtn"]').click()

        })
        it('Has a "newGoal" input and an "addGoal" button', () => {
            cy.get('input[name="newGoal"]').should('be.visible')
            cy.get('button[name="addGoalBtn"]').should('be.visible')
        })
    })
})