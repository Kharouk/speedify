const videoOnPage = document.querySelector('video');

videoOnPage.playbackRate = 3;

// zoom uses two videos (speaker and main): grab both videos and set playback rate:
if (window && window.location.hostname.includes('zoom')) {
  videos = document.querySelectorAll('video');
  videos.forEach((vid) => (vid.playbackRate = 3));
}
