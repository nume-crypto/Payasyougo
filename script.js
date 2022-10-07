
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const date = new Date();
const n = date.toDateString();
const time = date.toLocaleTimeString();
console.log('Date: ' + n);
document.getElementById("showDate").innerHTML=n;
console.log('Time: ' + time);


$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),

  });

  function updateProgressBar(ProgressBar, value){
      ProgressBar.querySelector(".progress__fill").style.width = '${value}%';
      ProgressBar.querySelector(".progress__text").textContent = '${value}%';
  }
//To show the unlock part of the page on scrolling
$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 250) {
      $(".UnlockContainer").fadeIn(1000);
      $("p").hide();
      $(".row").hide();
  } else {
      
      $("p").show();
      $(".row").show();
  }

});

//Function to display info in the pill

function displayInfo(){
  document.getElementById("message_box").style.height = "300px";
  document.getElementById("expandPill").style.display = "none";
  document.getElementById("collapsePill").style.visibility = "visible";

}

// To collapse pill to original size
function collapse() {
  document.getElementById("message_box").style.height = "100px";
  document.getElementById("expandPill").style.display = "inline";
  document.getElementById("collapsePill").style.visibility = "hidden";
}

/*document.getElementById("button1").addEventListener("click", myFunction);*/
//To increment NumePay wallet when user clicks on the button

/*var x=0;
document.getElementById("myBtn").addEventListener("click", showcontent);
function showcontent() {
    x=x+0.25;
    document.getElementById("value").innerHTML = x +  "  BTC";
    document.getElementById("pagebottom").style.display="none";
}
*/



/*var element = document.getElementById("bottomMenu");
  element.style.display = "none";
  */

//scroll the message box to the top offset of browser's scrool bar
/*$(window).scroll(function()
{
  $('#message_box').animate({top:$(window).scrollTop()+"px" },{queue: false, duration: 350});
});

//when the close button at right corner of the message box is clicked
$('#close_message').click(function()
{
  //the messagebox gets scrool down with top property and gets hidden with zero opacity
  $('#message_box').animate({ top:"+=15px",opacity:0 }, "slow");
});
*/


/*function openLink() {
    var href = this.href;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: "chrome-extension://flndlfhjfjmninbmdmcnallkdaibccal/popup.html"});
    });
}

for (var i=0,a; a=hrefs[i]; ++i) {
    hrefs[i].addEventListener('click', openLink);
}
*/ 


var hasExtension = false;
var extensionId = "nfhkhdepameiajalicpddgejigjnknma";
chrome.runtime.sendMessage(extensionId, { message: "version" },
    function (reply) {
        if (reply) {
            if (reply.version) {
                if (reply.version >= 1.0) {
                    hasExtension = true;
                    console.log('Present');
                }
            }
        }
        else {
          hasExtension = false;
          console.log('Not Present');
        }
    });


    
if (chrome.runtime.lastError) {
  // handle error 
}