const video = document.querySelector('video');

chrome.runtime.sendMessage(
  {
    message: 'get_video_playback',
  },
  (response) => {
    console.log('sup bro, I am from foreground', { response });
    if (response.message === 'success') {
      video.playbackRate = response.payload;
    }
  }
);

// zoom uses two videos (speaker and main): grab both videos and set playback rate:
// if (window && window.location.hostname.includes('zoom')) {
//   videos = document.querySelectorAll('video');
//   videos.forEach((vid) => (vid.playbackRate = speedSelection));
// }
