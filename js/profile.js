// creating variables to hold user profiles
'use strict';

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

// method called when game is played (maybe every time ball is thrown?)
Profiles.prototype.timesPlayedPhysics = function() {
  this.timesPlayedPhysics += 1;
};

//CODE BELOW NEEDS REFACTORED FOR FUNCTIONING CHOICE PAGE
const catalogForm = document.getElementById('sampleSubmit');
catalogForm.addEventListener('submit', captureChoiceSelection);


function captureChoiceSelection(event, appState){
  event.preventDefault();
  const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
  console.log(event.target.kidName.value);
  console.log(event.target.favColor.value);
  console.log(event.target.animal.value);
  console.log(event.target.favNumber.value);

  let kidName = event.target.kidName.value;
  let favColor = event.target.favColor.value;
  let animal = event.target.animal.value;
  let favNumber = event.target.favNumber.value;
  let index = parseInt(appState);
  if(appState === 'newUser'){ // captures new user if appState is new user
    const profile = new Profiles(kidName, favColor, animal, favNumber);
    profileArray.push(profile);
    console.log(profileArray);
  }else if (index>= 0){
    console.log(appState);
    profileArray[index].kidName = kidName;
    profileArray[index].color = favColor;
    profileArray[index].animal = animal;
    profileArray[index].number = favNumber;
  }
  let profileArrayString = JSON.stringify(profileArray);
  console.log(profileArrayString);
  localStorage.setItem('profileArray', profileArrayString);
}
