var google = document.getElementById("action-panel-overflow-button");
var button = document.createElement("button");
var text = document.createTextNode("nightfury");
button.appendChild(text);
var classname = "nightfury yt-uix-button yt-uix-button-icon yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup pause-resume-autoplay  yt-uix-tooltip yt-uix-button-toggled"
button.setAttribute("class", classname);
var timeout;
button.addEventListener("click", function(event) {
timeout = setInterval("myfunc()",2000);
  event.preventDefault();
});


google.appendChild(button);

function myfunc() {

var currTime = document.getElementsByClassName("ytp-time-current")[0].textContent.replace(":", ".");
	currTime = parseFloat(currTime);
	var finalTime = 0.10;
	if (currTime > finalTime){  
		var playButton = document.getElementsByClassName("ytp-play-button");
		playButton[0].click();
	console.log(timeout);
		console.log(clearInterval(timeout));
	}
}


