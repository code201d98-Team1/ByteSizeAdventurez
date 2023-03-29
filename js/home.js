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
const colorDisplay = document.getElementById('colorDisplay');
const numDisplay = document.getElementById('numDisplay');
const animalDisplay = document.getElementById('animalDisplay');
const factDisplay = document.getElementById('factDisplay');


// Correlate profile choices with image src paths

function renderAnimalImage(profile) {
  const animalImage = document.getElementById('animalDisplay');
  let imageSrc;

  switch (profile.animal) {
  case 'jaguar':
    imageSrc = 'assets/animal2_jaguar.png';
    break;
  case 'monkey':
    imageSrc = 'assets/animal1_monkey.png';
    break;
  case 'octopus':
    imageSrc = 'assets/animal3_octopus.png';
    break;
  default:
    imageSrc = ''; // handle invalid animal choices
  }

  animalImage.src = imageSrc;
}

function renderColorImage(profile) {
  const colorImage = document.getElementById('colorImage');
  let imageSrc;

  switch (profile.color) {
  case 'purple':
    imageSrc = 'assets/color3_purple.png';
    break;
  case 'blue':
    imageSrc = 'assets/color2_blue.png';
    break;
  case 'green':
    imageSrc = 'assets/color1_green.png';
    break;
  default:
    imageSrc = ''; // handle invalid color choices
  }

  colorImage.src = imageSrc;
}

function renderNumberImage(profile) {
  const numberImage = document.getElementById('numberImage');
  let imageSrc;

  switch (profile.number) {
  case '1':
    imageSrc = 'assets/1.png';
    break;
  case '2':
    imageSrc = 'assets/2.png';
    break;
  case '3':
    imageSrc = 'assets/3.png';
    break;
  case '4':
    imageSrc = 'assets/4.png';
    break;
  case '5':
    imageSrc = 'assets/5.png';
    break;
  case '6':
    imageSrc = 'assets/6.png';
    break;
  case '7':
    imageSrc = 'assets/7.png';
    break;
  case '8':
    imageSrc = 'assets/8.png';
    break;
  case '9':
    imageSrc = 'assets/9.png';
    break;
  default:
    imageSrc = ''; // handle invalid number choices
  }

  numberImage.src = imageSrc;
}


// Create new div element
const profileDiv = document.createElement('div');

// Customize div with profile choices (name, animal, number, animal fact)
// const profile = loadUserProfile();

// stand in for testing while we get the loadUserProfile() function worked out
const profile = {
  kidName: 'John',
  color: 'blue',
  animal: 'monkey',
  number: '4'
};

if (profile) {
  homeDisplay.style.display = 'block';
  nameDisplay.innerHTML = `<p>Hello ${profile.kidName}!</p>`;
//   colorDisplay.innerHTML = `<p>Color: ${profile.color}</p>`;
//   numDisplay.innerHTML = `<p>Number: ${profile.number}</p>`;
//   animalDisplay.innerHTML = `<p>Animal Name: ${profile.animal}</p>`;
//   factDisplay.innerHTML = `<p>Animal fact for ${profile.animal}</p>`;
  console.log(profile);

  renderAnimalImage(profile);
  renderColorImage(profile);
  renderNumberImage(profile);
}


// set page color based on profile choice
profileDiv.style.backgroundColor = 'red';
profileDiv.style.padding = '10px';


// append div element to container and render
homeDisplay.appendChild(profileDiv);
