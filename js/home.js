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
// const profile = loadUserProfile();

const profile = {    // stand in for testing while we get the loadUserProfile() function worked out
  kidName: 'John',
  color: 'green',
  animal: 'monkey',
  number: '4'
};

if (profile) {
  nameDisplay.innerHTML = `Hello ${profile.kidName}!`;
  renderAnimalImage(profile);
  renderColorImage(profile);
  renderNumberImage(profile);
  console.log(profile);
}


// set page color based on profile choice
homeDisplay.style.backgroundColor = '${profile.color}';
homeDisplay.style.padding = '10px';
