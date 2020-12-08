/// <reference types="Cypress" />


describe('My Second Test Suit', function () {

    it('My First Test Case', function () {


        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('contain', '#top')






    })






})

