function handle(){
var consumer_email = document.querySelector('#email').value;
var consumer_password = document.querySelector('#password').value;
var user_client_id = "7pfdc6e2ahgidr8qr2dl1bfs2t";
console.log(consumer_password);
console.log(consumer_email);

}

async function fetchAwsTokensFromUserpool(username, password, clientId){
    console.log("invoked fetchAwsTokens ", username , "  " ,password , "  " , clientId)
    let axiosConfig = {
      headers: {
          "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
          "Content-Type": "application/x-amz-json-1.1"
      }
    };
    let payload = {"AuthFlow": "USER_PASSWORD_AUTH",
      "AuthParameters": {
          "PASSWORD": password,
          "USERNAME": username
      },
      "ClientId": clientId
    };
  
    //console.log("Final payload ",payload)
    let json = await axios.post("https://cognito-idp.us-east-1.amazonaws.com", payload, axiosConfig)
    return json;
}

var walletCognitoResponse =  await fetchAwsTokensFromUserpool(consumer_email, consumer_password, user_client_id)


//const axios = require('axios');
let idToken = walletCognitoResponse.data.AuthenticationResult.IdToken

let receivedStatus = walletCognitoResponse.status;
if(receivedStatus == 200){
    console.log("successful login!");
}
    else if(receivedStatus!=200) {
        console.log("Improper credentials!");
    }
