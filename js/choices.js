// 'use strict';



//profile construct function
function Profiles(name, color, animal, number){
  this.name = name;
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




let currentQuestion = 0;
let selectedChoices = [];
function startQuestions() {
  // let x=1;
  const name = document.getElementById('nameInput').value;
  console.log(name);
  // debugger;
  localStorage.setItem('name', name); // testing for integrating profile array contruc
  const questionsContainer = document.getElementById('questions');
  questionsContainer.style.display = 'block';
  showQuestion(currentQuestion);
}

function showQuestion(iQ) {
  const name = localStorage.getItem('name');
  const questions = [
    {
      title: `Hi ${name}, what is your favorite animal?`,
      choices: ['jaguar', 'monkey', 'octopus'],
    },
    {
      title: 'What is your favorite color?',
      choices: ['purple', 'blue', 'green'],
    },
    {
      title: 'What is your favorite number?',
      choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
  ];
  const question = questions[iQ];
  const nameFieldDiv = document.getElementById('nameFieldDiv');
  nameFieldDiv.innerHTML='';
  const container = document.getElementById('questions');
  container.innerHTML = `<h2>${question.title}</h2>`;
  const containerH1 = document.getElementById('firstQ');
  containerH1.innerHTML = '';

  question.choices.forEach((choice) => {

    console.log(document.getElementById(choice).cloneNode(true));
    // debugger;
    const image = document.getElementById(choice).cloneNode(true);
    image.style.display = 'inline-block'; // Show the image
    image.onclick = () => {
      selectedChoices.push(choice);
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
      } else {
        const name = localStorage.getItem('name');
        const animal = selectedChoices[0];
        const color = selectedChoices[1];
        const number = selectedChoices[2];
        // debugger;
        let index;
        let appState =  localStorage.getItem('appState') || []; // 0 is parting out weird. Zero (0) the number is over written by null, unidentified, and empty array, but string '0' is not.
        if(parseInt(appState)>= 0){ // this will turn all number strings to actual number variables. 
          index = parseInt(appState); // index should only be created when appState is equal to a profile number, not newUser or parentMenu
        }
        const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
        if(appState === 'newUser'){ // captures new user if appState is new user
          const profile = new Profiles(name, color, animal, number);
          profileArray.push(profile);
          console.log(profileArray);
          localStorage.setItem('appState', (profileArray.length - 1));
        }else if (index>= 0){
          console.log(profileArray);
          profileArray[index].name = name;
          profileArray[index].color = color;
          profileArray[index].animal = animal;
          profileArray[index].number = number;
        }
        // debugger;
        let profileArrayString = JSON.stringify(profileArray);
        console.log(profileArrayString);
        // debugger;
        localStorage.setItem('profileArray', profileArrayString);
        localStorage.removeItem('name');
        window.location.href = 'home.html';
      }
    };
    container.appendChild(image);
  });

}

// Populate the home page with the user's choices
if (document.getElementById('name')) {
  document.getElementById('name').innerText = localStorage.getItem('name');
  const choices = JSON.parse(localStorage.getItem('choices'));
  const choicesContainer = document.getElementById('choices');

  choices.forEach((choice) => {
    const image = document.getElementById(choice).cloneNode(true);
    image.style.display = 'inline-block'; // Show the image
    choicesContainer.appendChild(image);
  });
}


