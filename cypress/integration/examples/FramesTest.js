/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


describe('Framse Test Suite', function () {

    it('My First Frame Test', function () {


        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find(".pricing-title").should('have.length', 2)
        // cy.iframe().find("span.fa.fa-star").should('have.length', 40)






    })






})

