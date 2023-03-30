// 'use strict';

// let kidName;
// let animal;
// let color;
// let number;

// function Profiles(kidName, color, animal, number) {
//   this.kidName = kidName;
//   this.color = color;
//   this.animal = animal;
//   this.number = number;
//   this.timesVideoWatched = 0;
//   this.timesPlayedPhysics = 0;
// }

// function startQuestions() {



//     kidName = document.getElementById("name").value;

//     document.getElementById("choiceDisplay").style.display = "none";
//     document.getElementById("questionBox1").style.display = "block";
// }

// function chooseAnimal() {
//     animal = chosenAnimal;

//     document.getElementById("questionBox1").style.display = "none";
//     document.getElementById("questionBox2").style.display = "block";
// }

// function chooseColor(chosenColor) {
//     color = chosenColor;

//     document.getElementById("questionBox2").style.display = "none";
//     document.getElementById("questionBox3").style.display = "block";
// }


// // Choose number and then show choices on Home Page


// function chooseNumber(chosenNumber) {
//     number = chosenNumber;

//     document.getElementById("questionBox3").style.display = "none";
//     document.getElementById("homeDisplay").style.display = "block";

//     localStorage.setItem('name', kidName);
//     localStorage.setItem('animal', animal);
//     localStorage.setItem('color', color);
//     localStorage.setItem('number', number);

//     window.location.href = "home.html";

//     // Show choices on Home Page

//     document.getElementById("nameDisplay").innerHTML = "Hi " + kidName + "!";
//     let choicesEl = document.getElementById("choices");

//     // Animal Selection

//     let animalImg = document.createElement("img");
//     animalImg.src = animal + ".png";
//     //might need to change the image suffix depending on the image type
//     animalImg.alt = animal;
//     let animalText = document.createTextNode("Your favorite animal is a " + animal + "!");
//     let animalEl = document.createElement("div");
//     animalEl.appendChild(animalImg);
//     animalEl.appendChild(animalText);
//     choicesEl.appendChild(animalEl);

//     // Color Selection

//     let colorImg = document.createElement("img");
//     colorImg.src = color + ".png";
//     //might need to change the image suffix depending on the image type
//     colorImg.alt = color;
//     let colorText = document.createTextNode("Your favorite color is " + color + "!");
//     let colorEl = document.createElement("div");
//     colorEl.appendChild(colorImg);
//     colorEl.appendChild(colorText);
//     choicesEl.appendChild(colorEl);

//     // Number Selection


//     let numberImg = document.createElement("img");
//     numberImg.src = number + ".png";
//     //might need to change the image suffix depending on the image type
//     numberImg.alt = number;
//     let numberText = document.createTextNode("Your favorite number is " + number + "!");
//     let numberEl = document.createElement("div");
//     numberEl.appendChild(numberImg);
//     numberEl.appendChild(numberText);
//     choicesEl.appendChild(numberEl);



// let profile = new Profiles(kidName, animal, color, number);


// let profileStringify = JSON.stringify(profile);
// localStorage.setItem(this.name, profileStringify);


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


const questions = [
  {
    title: 'What is your favorite animal?',
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

let currentQuestion = 0;
let selectedChoices = [];
// const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
function startQuestions() {
  // const name = document.getElementById('nameInput').value;
  // console.log(name);
  // debugger;
  // // localStorage.setItem('name', name); // testing for integrating profile array contruct

  const questionsContainer = document.getElementById('questions');
  questionsContainer.style.display = 'block';
  showQuestion(currentQuestion);
}

function showQuestion(iQ) {
  const question = questions[iQ];
  const container = document.getElementById('questions');
  container.innerHTML = `<h2>${question.title}</h2>`;

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
        // localStorage.setItem('choices', JSON.stringify(selectedChoices));
        // const name = localStorage.getItem('name');
        const animal = selectedChoices[0];
        const color = selectedChoices[1];
        const number = selectedChoices[2];
        // debugger;
        let index = parseInt(appState);
        let name = document.getElementById('nameInput').value;
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
        window.location.href = 'home.html';

        // let profile = new Profiles(name, animal, color, number);
        // let profileStringify = JSON.stringify(profile);
        // localStorage.setItem(name, profileStringify);
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


