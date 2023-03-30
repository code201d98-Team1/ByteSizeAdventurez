'use strict';

// Load user profile

function loadAppState() {
  let appState = parseInt(localStorage.getItem('appState'));
  return appState;
}

function loadUserProfile() {
  const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
  let appState = localStorage.getItem('appState');
  let profile;
  if (appState && appState !== 'newUser') {
    const index = parseInt(appState);
    profile = profileArray[index];
  }
  return profile;
}

const profile = loadUserProfile();
const index = loadAppState();



// console.log('Name:', profile.kidName);
// console.log('Color:', profile.color);
// console.log('Animal:', profile.animal);
// console.log('Number:', profile.number);
// console.log('Video:', profile.timesVideoWatched);
// console.log('Game:', profile.timesPlayedPhysics);



// //profile construct function
// function Profiles(kidName, color, animal, number){
//   this.kidName = kidName;
//   this.color = color;
//   this.animal = animal;
//   this.number = number;
//   this.timesVideoWatched = 0;
//   this.timesPlayedPhysics = 0;
// }

// //method called when a video is watched
// Profiles.prototype.timesVideoWatched = function() {
//   this.timesVideoWatched += 1;
// };

// let profile = new Profiles('John', 'blue', 'jaguar', 7, 0, 0);

// TODO: load customized css based on profile color choice

// Retrieve image and video player elements
const imageElements = document.querySelectorAll('#image-container img');
const videoPlayerContainer = document.querySelector('#video-player-container');
const videoPlayer = document.querySelector('#video-player');
const closeButton = document.querySelector('#close-button');

// Object constructor for Video and VideoManager to manage video files & their source paths
function Video(id, src) {
  this.id = id;
  this.src = src;
}

function VideoManager() {
  this.videos = [];
}

VideoManager.prototype.addVideo = function (id, src) {
  const video = new Video(id, src);
  this.videos.push(video);
};

VideoManager.prototype.getVideoById = function (id) {
  return this.videos.find((video) => video.id === id);
};

const videoManager = new VideoManager();
videoManager.addVideo('video1', 'assets/video1_vehicles.mp4');
videoManager.addVideo('video2', 'assets/video2_placeholder.mp4');
videoManager.addVideo('video3', 'assets/video3_placeholder.mp4');
videoManager.addVideo('video4', 'assets/video4_placeholder.mp4');
videoManager.addVideo('video5', 'assets/video5_placeholder.mp4');
videoManager.addVideo('video6', 'assets/video6_placeholder.mp4');


// Add click event listener to each image, get video ID, set source and play video & update profile with timesVideoWatched & save to local storage
imageElements.forEach((imageElement) => {
  imageElement.addEventListener('click', () => {
    const videoID = imageElement.dataset.video;
    const video = videoManager.getVideoById(videoID);
    if (video) {
      videoPlayer.src = video.src;
      videoPlayer.play();
      videoPlayerContainer.style.display = 'block';
      profile.timesVideoWatched++;
      const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
      profileArray[index] = profile;
      localStorage.setItem('profileArray', JSON.stringify(profileArray));
      console.log(profileArray);
    }
  });
});

// Add click even listener to the video player and close button. If click is outside of player, hide container.
videoPlayerContainer.addEventListener('click', (event) => {
  if (event.target === videoPlayerContainer) {
    videoPlayerContainer.style.display = 'none';
    videoPlayer.pause();
  }
});

// Hide the video player when the video finishes playing
videoPlayer.addEventListener('ended', () => {
  videoPlayerContainer.style.display = 'none';
});

// Hide the video player when the close button is clicked
closeButton.addEventListener('click', () => {
  videoPlayerContainer.style.display = 'none';
  videoPlayer.pause();
});
