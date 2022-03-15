describe("Alert Handling", ()=> {

    beforeEach(()=>{
        cy.visit("https://test.qatechhub.com/alert-handling/")
    })

    it("TC #1 - Verify different alert methods", ()=> {

        cy.get("#NormalAlert").click()

        cy.on("window:alert", (message)=>{

            expect(message).to.equal("Hello! I am an alert box!")

        })

        cy.get("#CustomAlert").click()

        cy.on("window:confirm", (message)=>{

            expect(message).to.equal("Press a button!")
            return false;
        })
    }) 

   
})