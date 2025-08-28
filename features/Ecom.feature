Feature: End to End E-commerce

@regression
Scenario: User can search, add to cart, and checkout successfully

    Given User is on the e-commerce landing page
    When user logins with username "testuday123@mailinator.com" and password "Manikyam@459"
    Then User should be logged in successfully
    When add  product "iphone 13 pro1" to cart
    Then verify product "iphone 13 pro" is added to cart
    When user enter valid details and place the order
    Then verify order is present in order history


@foo1
Scenario: invalid login

    Given User is on the e-commerce landing page
    When user logins with username "abc@test.com" and password "Manikyam@459"


    
@invalidlogin
Scenario Outline:  invalid login with different user

    Given User is on the e-commerce landing page
    When user logins with username "<username>" and password "<password"
    Then User should be logged in successfully

    Examples:
        | username     | password     |
        | abc@test.com | Manikyam@459 |
        | xyz@test.com | Manikyam@459 |

