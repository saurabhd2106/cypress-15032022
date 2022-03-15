import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import { loginPage } from "../../../support/pages/loginPage";

Given("Saurabh is a a writer and has access to conduit application", function() {

    cy.visit("/")

    loginPage.navigateToSignInPage();


    loginPage.verifyUserIsOnLoginPage();

    cy.loginToConduit("saurabh@fake.com", "admin")

})

When("Saurabh publishes an article on {string}", (title)=>{

    articlePage.addArticle(title, "About Cypress", "Best Article", "Cypress")

})

Then("the article is visible in your reading list", ()=>{

    cy.log("Post article successfull")

})