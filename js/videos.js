'use strict';

// Retrieve image and video player elements

const imageElements = document.querySelectorAll('#image-container img');
const videoPlayerContainer = document.querySelector('#video-player-container');
const videoPlayer = document.querySelector('#video-player');
const closeButton = document.querySelector('#close-button');


// Object constructor to manage video files & their source paths

class Video {
  constructor(id, src) {
    this.id = id;
    this.src = src;
  }
}

class VideoManager {
  constructor() {
    this.videos = [];
  }

  addVideo(id, src) {
    const video = new Video(id, src);
    this.videos.push(video);
  }

  getVideoById(id) {
    return this.videos.find((video) => video.id === id);
  }
}

const videoManager = new VideoManager();
videoManager.addVideo('video1', 'assets/video1_vehicles.mp4');
videoManager.addVideo('video2', 'assets/video2_placeholder.mp4');
videoManager.addVideo('video3', 'assets/video3_placeholder.mp4');
videoManager.addVideo('video4', 'assets/video4_placeholder.mp4');
videoManager.addVideo('video5', 'assets/video5_placeholder.mp4');
videoManager.addVideo('video6', 'assets/video6_placeholder.mp4');

imageElements.forEach((imageElement) => {
  imageElement.addEventListener('click', () => {
    const videoID = imageElement.dataset.video;
    const video = videoManager.getVideoById(videoID);
    if (video) {
      videoPlayer.src = video.src;
      videoPlayerContainer.style.display = 'block';
    }
  });
});


// Add click event listener to each image, get video ID, set source and play video

imageElements.forEach(imageElement => {
  imageElement.addEventListener('click', () => {
    const videoID = imageElement.dataset.video;
    videoPlayer.src = document.querySelector(`#${videoID}`).src;
    videoPlayerContainer.style.display = 'block';
  });
});



// Add click even listener to the video player and close button. If click is outside of player, hide container.

videoPlayerContainer.addEventListener('click', (event) => {
  if (event.target === videoPlayerContainer) {
    videoPlayerContainer.style.display = 'none';
    videoPlayer.pause();
  }
});

// Hide the video player when the close button is clicked

closeButton.addEventListener('click', () => {
  videoPlayerContainer.style.display = 'none';
  videoPlayer.pause();
});
