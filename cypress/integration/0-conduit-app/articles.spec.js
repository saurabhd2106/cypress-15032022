/// <reference types="Cypress"/>

import { articlePage } from "../../support/pages/articlePage";
import { loginPage } from "../../support/pages/loginPage"
import { genericUtils } from "../../support/utils/genericUtils";



describe("Verify Articles feature", function () {

    let data;

    before(function () {

        genericUtils.getCredentials().then((response) => {
            data = response;
        });

        cy.log(data)

    })

    beforeEach(function () {

        cy.visit("/")

        // cy.get("a[href='/user/login']").click()

        loginPage.navigateToSignInPage();


        loginPage.verifyUserIsOnLoginPage();

        cy.loginToConduit(data.username, data.password)

        // loginPage.loginToApplication(this.data.username, this.data.password)

        loginPage.verifyLoginSuccess();


    })

    it("Verify Add Article", function () {


        articlePage.addArticle("Cypress", "About Cypress", "Best Article", "Cypress")

    })



})
