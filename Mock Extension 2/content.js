console.log("Chrome extension go");
var articleTitle = document.querySelector("h2").textContent;
console.log(articleTitle);

var currentUrl = window.location.href;
console.log("The current URL is "+currentUrl);

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if(scroll>=250){
    console.log("Unlock Page is active");
  }
});

function displayExt() {
    chrome.runtime.sendMessage({message: 'buttonClicked'}, 
  function () { 
    

     
  });
  
}
document.getElementById("pricing-card-btn").addEventListener("click", displayExt);
 
