/// <reference types="Cypress"/>

import { articlePage } from "../../support/pages/articlePage";
import { loginPage } from "../../support/pages/loginPage"
import { loginPageApi } from "../../support/pages/loginPageApi";
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

        let res;

        loginPageApi.loginViaApi(data.username, data.password).then(response =>{

            res = response
        })



        cy.visit("/", {
            onBeforeLoad(win) {
                win.localStorage.setItem('user', JSON.stringify(res.body.user))
            }
        })

       


    })

    it("Verify Add Article", function () {


        articlePage.addArticle("Cypress", "About Cypress", "Best Article", "Cypress")

    })



})
