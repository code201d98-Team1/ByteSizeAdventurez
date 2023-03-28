'use strict';

// Retrieve image and video player elements

const imageElements = document.querySelectorAll('#image-container img');
const videoPlayerContainer = document.querySelector('#video-player-container');
const videoPlayer = document.querySelector('#video-player');
const closeButton = document.querySelector('#close-button');

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
