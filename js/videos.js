'use strict';

// Load user profile

// function loadUserProfile() {
//   const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
// let appState =  JSON.parse(localStorage.getItem('appState')).toString() || []; // 0 is parting out weird. Zero (0) the number is over written by null, unidentified, and empty array, but string '0' is not.
// let index;
// }



// if(parseInt(appState)>= 0){ // this will turn all number strings to actual number variables. 
//   index = parseInt(appState); // index should only be created when appState is equal to a profile number, not newUser or parentMenu
// }


// Standin while we're debugging loadUserProfile();
// let profile = { // stand in for testing while we get the loadUserProfile() function worked out
//   kidName: 'John',
//   color: 'green',
//   animal: 'monkey',
//   number: '4',
//   timesVideoWatched = 0;
//   console.log(profile);
// };

//profile construct function
function Profiles(kidName, color, animal, number){
  this.kidName = kidName;
  this.color = color;
  this.animal = animal;
  this.number = number;
  this.timesVideoWatched = 0;
  this.timesPlayedPhysics = 0;
}

//method called when a video is watched
Profiles.prototype.timesVideoWatched = function() {
  this.timesVideoWatched += 1;
};

let profile = new Profiles('John', 'blue', 'jaguar', 7, 0, 0);

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
      profile.timesVideoWatched += 1;
      // localStorage.setItem('profileArray', JSON.stringify(profileArray));
      console.log(profile);
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
