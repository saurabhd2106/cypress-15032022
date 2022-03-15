describe("Multiple tab testing", ()=> {

    beforeEach(()=>{
        cy.visit("https://test.qatechhub.com/window-handling/")
    })

    it("TC #1 - Verify multiple tab support", ()=> {

        cy.get(".wp-block-button__link").invoke("removeAttr", "target").click()

       
    }) 

    it("TC #2 - Verify multiple tab support", ()=> {

       
        cy.get(".wp-block-button__link").then((link)=>{
            cy.wrap(link).should("have.attr", target).and("equal", "_blank")

            cy.wrap(link).should("have.attr", "href").and("equal", "https://qatechhub.com")
        })
        
    })
})