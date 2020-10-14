Feature: Basic lot.com

    Scenario: Searching for flight
        Given I open lot.com page
        When I enter departure airport as WAW
        And I enter arrival airport as JFK
        And I select one way trip
        And I enter departure date as 25.10.2020
        And I search for flights
        Then avaliable flights are displayed