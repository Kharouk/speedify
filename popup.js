document.addEventListener('DOMContentLoaded', () => {
  let updateButton = document.querySelector('#update-speed--button');
  let resetButton = document.querySelector('#reset--button');
  let speedValue = document.querySelector('#speed--input');

  updateButton.addEventListener('click', async (e) => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // console.log(speedValue.value);

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        const vid = document.body.querySelector('video');
        vid.playbackRate = 2;
      },
    });
  });

  // function setPageVideoPlayback() {
  //   const vid = document.body.querySelector('video');
  //   vid.playbackRate = 2;
  // }

  // zoom uses two videos (speaker and main): grab both videos and set playback rate:
  // if (window && window.location.hostname.includes('zoom')) {
  //   videos = document.querySelectorAll('video');
  //   videos.forEach((vid) => (vid.playbackRate = speedSelection));
  // }
});
