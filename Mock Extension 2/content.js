console.log("Chrome extension go");



function displayExt() {
    chrome.runtime.sendMessage({message: 'buttonClicked'}, 
  function () { 
    

     
  });
  
}
document.getElementById("myBtn").addEventListener("click", displayExt);