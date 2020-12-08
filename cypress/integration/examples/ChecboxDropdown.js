/// <reference types="Cypress" />


describe('My Second Test Suit', function () {

    it('My First Test Case', function () {

        //Checboxes
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('input#checkBoxOption1').check().should('be.checked')
        cy.get('input#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type=checkbox]').check(['option2', 'option3'])

        // Static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        // Dynamic Dropdown

        cy.get('#autocomplete').type('Tur')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if ($e1.text() === 'Turkey') {

                cy.log('Turkey has been found')
                $e1.trigger('click')

            }
            else {


            }


        }

        )

        cy.get('#autocomplete').should('have.value', 'Turkey')

        // Visibility checks
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


        //Radio buttons
        cy.get('input[value=radio2]').check().should('be.checked')

    })






})

