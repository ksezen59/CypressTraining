/// <reference types="Cypress" />


describe('My Second Test Suit', function () {

    it('My First Test Case', function () {

        //Alert Handling
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then(function (e1) {

            const openTabUrl = e1.prop('href')
            cy.log(openTabUrl)
            cy.visit(openTabUrl)
        }
        )



        


        cy.url().should('not.contain', 'AutomationPractice')



    })






})

