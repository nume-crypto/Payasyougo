console.log("Chrome extension go");



function displayExt() {
    chrome.runtime.sendMessage({message: 'buttonClicked'}, 
  function () { 
    

     
  });
  
}
document.getElementById("pricing-card-btn").addEventListener("click", displayExt);
 
var x = document.getElementById("email").value; //To get the user email 
var y = document.getElementById("password").value;//To get the password
if(document.getElementById("submit").clicked == true){
  alert("Sign in request");
}

var articleTitle = document.querySelector(".articleHeading").textContent;
console.log(articleTitle);

