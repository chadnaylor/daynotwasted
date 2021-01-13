import fire from '../../../src/fire'

//fire.firestore().useEmulator("localhost", 8080);
context('Login', () => {

    describe('Register/login flow', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000')

        })

        it('shows login/register fields and buttons', () => {

            cy.get('input[name="email"]').should('be.visible')
            cy.get('input[name="password"]').should('be.visible')
            cy.get('button[name="signIn"]').should('be.visible')
            cy.get('button[name="signUp"]').should('be.visible')
        })

        it('signs up users', () => {
            cy.get('input[name="email"]').type('brian@daynotwasted.com')
            cy.get('input[name="password"]').type('password')
            cy.get('button[name="signUp"]').click()
            cy.get('button[name="signIn"]').should('not.exist')
            cy.get('button[name="logOutbtn"]').click()
        })
        it('logs in users', () => {
            cy.get('input[name="email"]').type('brian@daynotwasted.com')
            cy.get('input[name="password"]').type('password')
            cy.get('button[name="signIn"]').click()
            cy.get('button[name="signIn"]').should('not.exist')
            cy.get('button[name="logOutbtn"]').click()
        })
        it('Logs out the user when Sign Out buton is clicked', () => {
            cy.get('input[name="email"]').type('brian@daynotwasted.com')
            cy.get('input[name="password"]').type('password')
            cy.get('button[name="signIn"]').click()
            cy.get('button[name="logOutbtn"]').click()
            cy.get('button[name="signIn"]').should('exist')
        })
        afterEach(() => {
            cy.clearCookies()
            cy.clearLocalStorage()

        })
    })
})