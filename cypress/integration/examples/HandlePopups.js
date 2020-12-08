/// <reference types="Cypress" />


describe('My Second Test Suit', function () {

    it('My First Test Case', function () {

        //Alert Handling
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {

            expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })

        cy.wait(2000)

        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str) => {

            expect(str).to.equal('Hello , Are you sure you want to confirm?')

        })

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include', '#/index')

        cy.go('back')







    })






})

