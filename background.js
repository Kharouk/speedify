chrome.runtime.onInstalled.addListener(() => {
  // console.log('logged?');
  // const videoOnPage = document.querySelector('video');
  // console.log(videoOnPage);
  // chrome.storage.sync.set({ video: videoOnPage });
});

// zoom uses two videos (speaker and main): grab both videos and set playback rate:
// if (window && window.location.hostname.includes('zoom')) {
//   videos = document.querySelectorAll('video');
//   videos.forEach((vid) => (vid.playbackRate = 3));
// }