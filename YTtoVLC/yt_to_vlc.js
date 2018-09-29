console.log("YTtoVLC loading");

let divElm = document.createElement('div');
divElm.setAttribute("id", "open-in-vlc");
divElm.setAttribute("class", "custom-style");

let divButtonElm = document.createElement('div');
divButtonElm.setAttribute("class", "yt_to_vlc-style force-icon-button-style");
divButtonElm.setAttribute("id", "vlcButton");

let aElm = document.createElement('a');
aElm.setAttribute("href", 'YTtoVLC:///' + window.location.href);
aElm.setAttribute("class", "yt_to_vlc-style force-icon-button-style");
aElm.setAttribute("tabindex", "-1");
aElm.innerHTML = "Open in VLC";


divButtonElm.appendChild(aElm);
divElm.appendChild(divButtonElm);

var addVlcButton = function() {
  var elm = document.getElementById("menu-container");
  if (elm != null && elm != undefined) {
    elm.parentNode.insertBefore(divElm, elm);
    console.log("=====COMPLETED=====");
  } else {
    console.log("Waiting for the menu-container element to load.");
    setTimeout(addVlcButton, 100);
  }
};

aElm.addEventListener("click", function(){
	document.querySelector('video').pause();
});


window.onload = function() {
  addVlcButton();
}
