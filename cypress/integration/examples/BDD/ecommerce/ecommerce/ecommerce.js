import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'

const homePage = new HomePage()
const productPage = new ProductPage()

Given('I open e-commerce page', function () {

    cy.visit(Cypress.env('url') + '/angularpractice')


})

When('I add items to cart', function () {


    homePage.getShopTab().click()


    this.data.productNames.forEach(function (element) {
        cy.addProductByName(element)
    });

    productPage.getCheckoutButton().click()


})

And('Validate the total prices', () => {

    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {


        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)

    }).then(function () {
        cy.log(sum)
    })
    cy.get('h3 strong').then(function (element) {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)

    })

})


Then('select the country submit and verify message', () => {

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


})

When('I fill the form details', function (dataTable) {

    homePage.getEditbox().type(dataTable.rawTable)
    homePage.getGender().select(this.data.gender)

})

Then('Validate the form details', function () {
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    homePage.getEditbox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneurRadioButton().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 15000)

}

)

And('Select the shop page', () => {

    homePage.getShopTab().click()



})