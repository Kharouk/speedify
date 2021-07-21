document.addEventListener('DOMContentLoaded', () => {
  let updateButton = document.querySelector('#update-speed--button');
  let resetButton = document.querySelector('#reset--button');

  // resetButton.addEventListener('click', async (e) => {
  //   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // });

  updateButton.addEventListener('click', async (e) => {
    // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { text: 'message' },
        function (response) {
          console.log(response);
        }
      );
    });
    let speedSelection = document.querySelector(
      '#speed-select option:checked'
    ).value;

    // chrome.runtime.onMessage.addListener((msg, sender, response) => {
    //   console.log('sent');
    //   if (msg.name === 'message') response({ text: speedSelection });
    // });

    // chrome.scripting.executeScript({
    //   target: { tabId: tab.id },
    //   function: setPageVideoPlayback,
    // });
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
