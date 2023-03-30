'use strict';

// Load user profile from storage

function loadUserProfile() {
  const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
  const appState = localStorage.getItem('appState');
  let profile;

  if (appState && appState !== 'newUser') {
    const index = parseInt(appState);
    profile = profileArray[index];
  }

  return profile;
}

// Get container element from DOM
const homeDisplay = document.getElementById('homeDisplay');
const nameDisplay = document.getElementById('nameDisplay');


// Map profile choices to image source paths for animals, colors & numbers

function renderAnimalImage(profile) {
  const animalImage = document.getElementById('animalImage');
  const animalSrcMap = {
    jaguar: 'assets/animal2_jaguar.png',
    monkey: 'assets/animal1_monkey.png',
    octopus: 'assets/animal3_octopus.png'
  };

  let imageSrc = '';

  for (const animalName in animalSrcMap) {
    if (profile.animal === animalName) {
      imageSrc = animalSrcMap[animalName];
      break;
    }
  }

  animalImage.src = imageSrc;
}

function renderColorImage(profile) {
  const colorImage = document.getElementById('colorImage');
  let imageSrc = '';

  const colorOptions = {
    purple: 'color3_purple.png',
    blue: 'color2_blue.png',
    green: 'color1_green.png'
  };

  for (const [color, filename] of Object.entries(colorOptions)) {
    if (color === profile.color) {
      imageSrc = `assets/${filename}`;
      break;
    }
  }
  colorImage.src = imageSrc;
}

function renderNumberImage(profile) {
  const numberImage = document.getElementById('numberImage');
  let imageSrc = '';

  const numberOptions = {
    '1': '1.png',
    '2': '2.png',
    '3': '3.png',
    '4': '4.png',
    '5': '5.png',
    '6': '6.png',
    '7': '7.png',
    '8': '8.png',
    '9': '9.png'
  };

  for (const [number, filename] of Object.entries(numberOptions)) {
    if (number === profile.number) {
      imageSrc = `assets/${filename}`;
      break;
    }
  }

  numberImage.src = imageSrc;
}


// Customize div with profile choices (name, animal, number, animal fact)
const profile = loadUserProfile();


if (profile) {
  nameDisplay.innerHTML = `Hello ${profile.name}!`;
  renderAnimalImage(profile);
  renderColorImage(profile);
  renderNumberImage(profile);
  console.log(profile);
}

// set page color based on profile choice
homeDisplay.style.backgroundColor = '${profile.color}';
homeDisplay.style.padding = '10px';

// creation of facts for homepage
const animalFacts = document.getElementById('animal-facts');
let chosenAnimal = profile.animal; // needs to pull kid's animal choice

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

let factNumber = getRandomNumber(0, 2);

function randomAnimalFact(){
  if(chosenAnimal === 'monkey'){
    let factsMonkey = ['Monkeys live on the ground and in trees!', 'Most monkeys have tails!', 'Monkeys sleep while sitting in trees, often upright!'];
    return(document.createTextNode(factsMonkey[factNumber]));
  } else if (chosenAnimal === 'jaguar'){
    let factsJaguar = ['Jaguars are excellent swimmers!', 'Jaguars will eat ALMOST anything!', 'Jaguars ROAR!!!'];
    return(document.createTextNode(factsJaguar[factNumber]));
  } else if (chosenAnimal === 'octopus'){
    let factsOctopus = ['Octopus have 8 long arms!', 'Octopus eat crabs, shrimps, lobsters, and even sharks!', 'Octopus live alone in dens made from rocks, that they move with their powerful arms!'];
    return(document.createTextNode(factsOctopus[factNumber]));
  }
}


animalFacts.appendChild(randomAnimalFact());

let lockEl = document.getElementById('parent-controls');
let randomNumber1 = getRandomNumber(1, 9);
let randomNumber2 = getRandomNumber(1, 9);

lockEl.onclick = function adultTest(){
  let answer = prompt("Please add " + randomNumber1 + " to " + randomNumber2 + ".");
  if(answer == randomNumber1 + randomNumber2){
    lockEl.href="controls.html";
  }
};




