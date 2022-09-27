console.log("Chrome extension go");



function displayExt() {
    chrome.runtime.sendMessage({message: 'buttonClicked'}, 
  function () { 
    

     
  });
  
}
document.getElementById("pricing-card-btn").addEventListener("click", displayExt);