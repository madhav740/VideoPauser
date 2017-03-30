document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('pauseVideo');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      //d = document;
//		var x = $(".ytp-time-current").textContent;
//		$(".ytp-play-button").click();
//		var play = document.getElementsByClassName("ytp-play-button")[0]
		while (true)
{
var time = document.getElementsByClassName("ytp-play-button")[0].textContent
if (parseFloat(time) >= 0.10 )
{
var play = document.getElementsByClassName("ytp-play-button")[0];
play.click();
break;
}

}

    });
  }, false);
}, false);
