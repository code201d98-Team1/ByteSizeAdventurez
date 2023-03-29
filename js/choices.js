'use strict';

let kidName;
let animal;
let color;
let number;

function Profiles(kidName, color, animal, number) {
  this.kidName = kidName;
  this.color = color;
  this.animal = animal;
  this.number = number;
  this.timesVideoWatched = 0;
  this.timesPlayedPhysics = 0;
}

function startQuestions() {

  kidName = document.getElementById('name').value;

  document.getElementById('choiceDisplay').style.display = 'none';
  document.getElementById('questionBox1').style.display = 'block';
}

function chooseAnimal() {
  animal = chosenAnimal;

  document.getElementById('questionBox1').style.display = 'none';
  document.getElementById('questionBox2').style.display = 'block';
}

function chooseColor(chosenColor) {
  color = chosenColor;

  document.getElementById('questionBox2').style.display = 'none';
  document.getElementById('questionBox3').style.display = 'block';
}

// Choose number and then show choices on Home Page

function chooseNumber(chosenNumber) {
  number = chosenNumber;

  document.getElementById('questionBox3').style.display = 'none';
  document.getElementById('homeDisplay').style.display = 'block';

  localStorage.setItem('name', kidName);
  localStorage.setItem('animal', animal);
  localStorage.setItem('color', color);
  localStorage.setItem('number', number);

  window.location.href = 'home.html';

  // Show choices on Home Page

  document.getElementById('nameDisplay').innerHTML = 'Hi ' + kidName + '!';
  let choicesEl = document.getElementById('choices');

  // Animal Selection

  let animalImg = document.createElement('img');
  animalImg.src = animal + '.png';
  //might need to change the image suffix depending on the image type
  animalImg.alt = animal;
  let animalText = document.createTextNode('Your favorite animal is a ' + animal + '!');
  let animalEl = document.createElement('div');
  animalEl.appendChild(animalImg);
  animalEl.appendChild(animalText);
  choicesEl.appendChild(animalEl);

  // Color Selection

  let colorImg = document.createElement('img');
  colorImg.src = color + '.png';
  //might need to change the image suffix depending on the image type
  colorImg.alt = color;
  let colorText = document.createTextNode('Your favorite color is ' + color + '!');
  let colorEl = document.createElement('div');
  colorEl.appendChild(colorImg);
  colorEl.appendChild(colorText);
  choicesEl.appendChild(colorEl);

  // Number Selection

  let numberImg = document.createElement('img');
  numberImg.src = number + '.png';
  //might need to change the image suffix depending on the image type
  numberImg.alt = number;
  let numberText = document.createTextNode('Your favorite number is ' + number + '!');
  let numberEl = document.createElement('div');
  numberEl.appendChild(numberImg);
  numberEl.appendChild(numberText);
  choicesEl.appendChild(numberEl);


  let profile = new Profiles(kidName, animal, color, number);


  let profileStringify = JSON.stringify(profile);
  localStorage.setItem(this.name, profileStringify);

}

//CODE BELOW NEEDS REFACTORED FOR FUNCTIONING CHOICE PAGE
const catalogForm = document.getElementById('sampleSubmit');
catalogForm.addEventListener('submit', captureChoiceSelection);


function captureChoiceSelection(event){
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
