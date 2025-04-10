Feature: Login and Checkout Flow in SauceDemo

  Scenario: User logs in, adds products, and completes checkout
    Given user opens the SauceDemo site
    When user logs in with standard credentials
    And user adds two items to the cart
    And user opens the shopping cart
    Then the cart badge should display "2"
    When user proceeds to checkout
    And user fills out personal info
    And user completes the checkout
    Then the thank you message should appear