class HomePage {

    getEditbox() {

        return cy.get('input[name="name"]:nth-child(2)')

    }

    getTwoWayDataBinding() {

        return cy.get('app-root:nth-child(1) form-comp:nth-child(3) div.container h4:nth-child(4) > input.ng-untouched.ng-pristine.ng-valid')

    }

    getGender() {


        return cy.get('select')

    }

    getEntrepreneurRadioButton() {

        return cy.get('#inlineRadio3')


    }

    getShopTab() {

        return cy.get('a[href="/angularpractice/shop"]')

    }



}


export default HomePage;