/// <reference types="Cypress" />


describe('My First Test Suit', function () {

    it('My First Test Case', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($e1, index, $list) => {

            const vegText = $e1.find('.product-name').text()

            if (vegText.includes('Cashews')) {

                $e1.find('button').trigger('click')
            }


        }
        )

        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())

        }

        )




    }

    )
})

