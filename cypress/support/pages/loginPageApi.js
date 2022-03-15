import { restClient } from "../requests/restClient";


export class LoginPageApi {

    getTags(){

    }
    
    loginViaApi(email, password) {
      let  body = {
                
            "user": {
                "email": email,
                "password": password
            }
        
        }

      let  endpointUrl = "/api/users/login"

       return restClient.sendPostRequest(endpointUrl, body)
    }

}

export const loginPageApi = new LoginPageApi();