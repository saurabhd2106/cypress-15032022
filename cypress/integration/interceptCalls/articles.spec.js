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

        cy.intercept({
            method: "GET",
            url: "**/api/tags"
        }, {
            fixture: "tags_response.json"
        }).as("tagsApi")

        cy.visit("/", {
            onBeforeLoad(win) {
                win.localStorage.setItem('user', JSON.stringify(res.body.user))
            }
        })

       


    })

    it("Verify Tags API", ()=>{

        cy.wait("@tagsApi")

        cy.get("@tagsApi").then(xhr => {

        console.log(xhr)

        expect(xhr.response.body.tags).to.contain("Cypress")

       })

       cy.get(".tag-list").should('contain', "Cypress")

    })

    it.only("Verify Add Article", function () {

        cy.intercept({
            method: "POST",
            url: "**/api/articles"
        }, (req) => {

            req.body.article.title = "Cypress Updated"

        }
        
        ).as("productApi")

        

        articlePage.addArticle("Cypress", "About Cypress", "Best Article", "Cypress")

        cy.wait("@productApi")

        cy.get("@productApi").then(xhr => {

            expect(xhr.response.body.article.title).to.contain("Cypress Updated")

        })
    })





})
