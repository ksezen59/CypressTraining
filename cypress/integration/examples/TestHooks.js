/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('Test Hooks', () => {

    before(function () {

        cy.fixture('example').then((data) => {

            this.data = data

        })

    })

    it('Test Hook Case', function () {

        Cypress.config('defaultCommandTimeout', 15000)

        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit(Cypress.env('url') + '/angularpractice')
        homePage.getEditbox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditbox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneurRadioButton().should('be.disabled')
        homePage.getShopTab().click()


        this.data.productNames.forEach(function (element) {
            cy.addProductByName(element)
        });

        productPage.getCheckoutButton().click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($e1, index, list) => {

            const actualText = $e1.text()
            var result = actualText.split(' ')
            result = result[1].trim()
            sum += Number(result)


        }).then(function () {

            cy.log(sum)

        })


        cy.get('td h3 strong').then(function (element) {

            const actualText = element.text()
            var realResult = actualText.split(' ')
            realResult = realResult[1].trim()
            expect(Number(realResult)).to.be.equal(sum)

        })

        cy.contains('Checkout').click()
        cy.get('#country').type('Turkey')
        Cypress.config('defaultCommandTimeout', 15000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').check({ force: true })
        cy.get('input[type="submit"]').click()
        cy.get('.alert.alert-success.alert-dismissible').then(function (element) {

            const actualText = element.text()

            expect(actualText.includes("Success")).to.be.true



        }


        )





    }
    )
})



