/*async function handleInput(){
    var consumer_email = document.querySelector('#email').value;
    var consumer_password = document.querySelector('#password').value;
    const user_client_id = "2hcb3n0k27c61q3kc8jhfov8il";
    var walletCognitoResponse =  await fetchAwsTokensFromUserpool(consumer_email, consumer_password, user_client_id)
}
*/
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
    let json = await axios.post("https://cognito-idp.us-east-1.amazonaws.com", payload, axiosConfig);
    return json;


    let idToken = walletCognitoResponse.data.AuthenticationResult.IdToken;
//To check whether credentials are corrrect 
let receivedStatus = walletCognitoResponse.status;
if(receivedStatus == 200){
    console.log("successful login!");
}
    else if(receivedStatus!=200) {
        console.log("Improper credentials!");
    }

}

console.log("hi");
const submitRequest = document.getElementById("myButton");
submitRequest.addEventListener("click",myFunction1);

async function myFunction1(){
    var consumer_email = document.querySelector('#email').value;
    var consumer_password = document.querySelector('#password').value;
    const user_client_id = "2hcb3n0k27c61q3kc8jhfov8il";
    var walletCognitoResponse =  await fetchAwsTokensFromUserpool(consumer_email, consumer_password, user_client_id)
  
}



