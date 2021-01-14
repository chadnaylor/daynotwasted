
context('Goals', () => {

    describe('Goals progress updates', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000')
            if (cy.get('input[name="email"]').length) {
                cy.get('input[name="email"]').type('brian@daynotwasted.com')
                cy.get('input[name="password"]').type('password')
                cy.get('button[name="signIn"]').click()
                cy.get('button[name="signIn"]').should('not.exist')
            }
        })
        it('Has a "newGoal" input and an "addGoal" button', () => {
            cy.get('input[name="newGoal"]').should('be.visible')
            cy.get('button[name="addGoalBtn"]').should('be.visible')
        })
        it('Adds a goal when input is entered and "Add Goal" button is clicked', () => {
            cy.get('input[name="newGoal"]').type('Learn to read')
            cy.get('button[name="addGoalBtn"]').click()
            cy.get('.goalsList').contains("Learn to read")
        })
        it('When "Add minutes" button is clicked it will push info into db', () => {
            cy.get('input[name="time"]').type('45')
            cy.get('button[name="addMinutes"]').click()
            cy.get('.goalsList').contains('45 minutes')

            cy.get('button[name="addMinutes"]').click()
            cy.get('.goalsList').contains('90 minutes')
        })
    })
})