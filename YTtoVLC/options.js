window.addEventListener("load", loadOptions);
document.getElementById("saveButton").addEventListener("click",saveOptions);
document.getElementById("restoreButton").addEventListener("click",restoreDefault);

function loadOptions() {
  let select = document.getElementById("vlcParams")
  chrome.storage.local.get('vlcParams', function(result) {
      if (result.vlcParams == null || typeof result.vlcParams == "undefined") {
        restoreDefault();
      } else {
        select.value = result.vlcParams;
      }
  });
}

function saveOptions() {
  let select = document.getElementById("vlcParams");
  chrome.storage.local.set({'vlcParams': select.value}, function() {
  });
}

function restoreDefault() {
  let defaultParams = "--qt-minimal-view --no-video-title-show";
  let select = document.getElementById("vlcParams");
  chrome.storage.local.set({'vlcParams': defaultParams}, function() {
    select.value = defaultParams;
  });
}
