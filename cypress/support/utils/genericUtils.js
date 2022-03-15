export class GenericUtils {

    getCredentials() {
       return cy.fixture("loginDetails").then(
            (response) => {

               return response;
           }

       )
    }

}

export const genericUtils = new GenericUtils();