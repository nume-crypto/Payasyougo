console.log("background is running");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message == 'buttonClicked') {
        chrome.windows.create({
            focused: true,
            width: 50,
            height: 500,
            url:  'popup.html'
          }, null);
    // Create a new tab with options page
   }
  });
  
/*
  chrome.runtime.onMessage.addListener(request => { 

    if (request.messsage == "buttonClicked") {
  
        chrome.windows.create({
            url: "popup.html",
            type: "popup",
            focused: true,
            width: 400,
            height: 600,
            top: 0,
            left: screen.width - 400,
        }, () => {
            console.log("Opened popup!")
        })
  
    }
  
  })
  */