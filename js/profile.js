// creating variables to hold user profiles

const profileList = [];

function Profiles(kidName, color, animal, number){
  this.kidName = kidName;
  this.color = color;
  this.animal = animal;
  this.number = number;
  this.timesVideoWatched = 0;
  this.timesPlayedPhysics = 0;
}

let formEl = document.getElementById('profile-form');

