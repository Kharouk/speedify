console.log("I'm in lads.");

document.addEventListener('DOMContentLoaded', () => {
  let updateButton = document.querySelector('#update-speed--button');
  const videoOnPage = document.querySelector('video');

  updateButton.addEventListener('click', (e) => {
    const speedSelection = document.querySelector(
      '#speed-select option:checked'
    ).value;

    videoOnPage.playbackRate = speedSelection;
  });

  // zoom uses two videos (speaker and main): grab both videos and set playback rate:
  if (window && window.location.hostname.includes('zoom')) {
    videos = document.querySelectorAll('video');
    videos.forEach((vid) => (vid.playbackRate = speedSelection));
  }

  function modifyDOM() {}
  chrome.tabs.executeScript({ code: '(' + modifyDOM + ')();' });
});
