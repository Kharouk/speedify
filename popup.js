document.addEventListener('DOMContentLoaded', () => {
  let updateButton = document.querySelector('#update-speed--button');

  updateButton.addEventListener('click', async (e) => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const speedSelection = document.querySelector(
      '#speed-select option:checked'
    ).value;

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageVideoPlayback(speedSelection),
    });
  });

  function setPageVideoPlayback(speedSelection) {
    console.log(speedSelection);
    chrome.storage.sync.get('video', ({ video }) => {
      document.body.querySelector('video').playbackRate = speedSelection;
    });
  }

  // zoom uses two videos (speaker and main): grab both videos and set playback rate:
  // if (window && window.location.hostname.includes('zoom')) {
  //   videos = document.querySelectorAll('video');
  //   videos.forEach((vid) => (vid.playbackRate = speedSelection));
  // }
});
