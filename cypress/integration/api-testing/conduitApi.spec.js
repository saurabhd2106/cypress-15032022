/// <reference types="cypress"/>

import { stringify } from "querystring"
import { loginPageApi } from "../../support/pages/loginPageApi"


describe("Verify API testing", () => {

    let token

    beforeEach(()=>{

        loginPageApi.loginViaApi("saurabh@fake.com", "admin").as("loginApi")

        cy.get("@loginApi").then(response => {

           token = response.body.user.token
            cy.log(token)
        })
    })

    it("GET Tags API", () => {

        cy.request({
            url: "/api/tags",
            method: "GET"
        }).then((response) => {

            cy.log(stringify(response.headers))

            expect(response.status).to.equal(200)

            expect(response.body).to.have.property("tags")
            expect(response.body.tags).to.contain("Cypress")

            expect(response.headers).to.have.property("content-type", "application/json; charset=utf-8")
        })

        cy.request({
            url: "/api/tags",
            method: "GET"
        }).as("getTags")

        cy.get("@getTags").its("status").should("be.equal", 200)

        cy.get("@getTags").its("headers").should("have.a.property", "content-type")
    })

    it("Add Article", ()=>{

        cy.request({
            url: "/api/articles",
            method: "POST",
            headers: {
                "Authorization": "Token " + token
            },
            body: {
                "article": {
                    "title": "Test",
                    "description": "Test",
                    "body": "Test",
                    "tagList": [
                        "Test"
                    ]
                }
            }
        }).then(response => {
            expect(response.status).to.equal(200)
        })

    })


})