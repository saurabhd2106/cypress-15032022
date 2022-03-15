export class LoginPage {

    emailLocator = "input[placeholder=\"Email\"]";

    passwordLocator = "[placeholder=\"Password\"]";

    buttonTag = "button"

    signInText = "Sign in";

    navigateToSignInPage(){
        cy.contains("a", "Sign in").click()
    }

    verifyUserIsOnLoginPage(){

        cy.contains("h1", "Sign in").should("be.visible");

    }

    loginToApplication(username, password){
        
        cy.get(this.emailLocator).as("emailField")

        cy.get(this.passwordLocator).type(password)

        cy.get("@emailField").type(username)

        cy.contains(this.buttonTag, this.signInText).click()

       
    }

    verifyLoginSuccess(){
        cy.contains("a", "Your Feed").should("be.visible")

        cy.contains("a", "New Article").should("be.visible")
    }
}

export const loginPage = new LoginPage();