Feature: End2End E-Commerce Validation



    application Regression

    Scenario: E-Commerce Products Delivery
        Given I open e-commerce page
        When I add items to cart
        And Validate the total prices
        Then select the country submit and verify message


    Scenario: Filling the form to shop
        Given I open e-commerce page
        When I fill the form details
            | name  | gender       |
            | Canan | Femaleasdasf |
        Then Validate the form behaviour
        And Select the shop page