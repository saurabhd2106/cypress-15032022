Feature:  Test Articles feature
    This is a feature file where we test all add article scenarios

    Background:
        Given Saurabh is a a writer and has access to conduit application

    Scenario: Add an article
        When Saurabh publishes an article on Cypress
        Then the article is visible in your reading list


    Scenario: Edit an article
        Given Saurabh has published an article
        And has access to the application
        When Saurabh deletes the published article
        Then article is deleted