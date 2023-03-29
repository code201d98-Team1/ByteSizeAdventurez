// creating variables to hold user profiles

const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
const localState = 'new_user'; //states new_user, prof1, prof2, prof3, parent

function Profiles(kidName, color, animal, number){
  this.kidName = kidName;
  this.color = color;
  this.animal = animal;
  this.number = number;
  this.timesVideoWatched = 0;
  this.timesPlayedPhysics = 0;
  this.newAccount = true;
}

Profiles.prototype.timesVideoWatched = function() {
  this.timesVideoWatched += 1;
};

Profiles.prototype.timesPlayedPhysics = function() {
  this.timesPlayedPhysics += 1;
};


const catalogForm = document.getElementById('sampleSubmit');
catalogForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
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

  const profile = new Profiles(kidName, favColor, animal, favNumber);
  profileArray.push(profile);
  console.log(profileArray);
  let profileArrayString = JSON.stringify(profileArray);
  console.log(profileArrayString);
  localStorage.setItem('profileArray', profileArrayString);

}
