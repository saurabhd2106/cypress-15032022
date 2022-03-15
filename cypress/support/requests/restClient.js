export class RestClient {

    sendGetrequest(endpointUrl){

      return  cy.request({
            method: "GET",
            url: endpointUrl
        })

    }

    sendPostRequest(endpointUrl, body, headers){

        return  cy.request({
            method: "POST",
            url: endpointUrl,
            body: body,
            headers: headers
        })

    }

    sendPutRequest(endpointUrl, body, headers){

        return  cy.request({
            method: "PUT",
            url: endpointUrl,
            body: body,
            headers: headers
        })

    }

    sendDeleteRequest(endpointUrl, headers){

        return  cy.request({
            method: "DELETE",
            url: endpointUrl,
            headers: headers
        })

    }

}

export const restClient = new RestClient();