
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

var articleTitle1 = document.querySelector("h2").textContent;
console.log(articleTitle1);



var hasExtension = false;

/*chrome.runtime.sendMessage("ammjknogcnjcfgkchbadbapalhnnmfic", { message: "version" },
    function (reply) {
        if (reply) {
            if (reply.version) {
                if (reply.version >= 0.1) {
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
  console.log('Errors Present');// handle error 
}
*/
chrome.runtime.sendMessage("ammjknogcnjcfgkchbadbapalhnnmfic", { message: articleTitle1 },
    function (reply) {
        if (reply) {
            if (reply.version) {
                if (reply.version >= 0.1) {
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
  console.log('Errors Present');// handle error 
}






