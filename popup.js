chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  let speedValue = document.querySelector('#speed--input');

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'get_video_playback') {
      sendResponse({
        message: 'success',
        payload: speedValue.value,
      });

      return true;
    }
  });
});
