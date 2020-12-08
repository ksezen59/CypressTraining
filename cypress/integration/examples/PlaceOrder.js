/// <reference types="Cypress" />


describe('My Second Test Suit', function () {

    it('My First Test Case', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')


        cy.get('.products').find('.product').each(($e1, index, $list) => {

            const vegText = $e1.find('.product-name').text()

            if (vegText.includes('Cashews')) {

                $e1.find('button').trigger('click')
            }


        }
        )

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('PLACE ORDER').click()

        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())

        }

        )




    }

    )
})

