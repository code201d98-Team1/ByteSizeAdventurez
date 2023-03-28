'use strict';

let kidName;
let animal;
let color;
let number;

function startQuestions() {

    kidName = document.getElementById("name").value;

    document.getElementById("choiceDisplay").style.display = "none";
    document.getElementById("questionBox1").style.display = "block";
}

function chooseAnimal() {
    animal = chosenAnimal;

    document.getElementById("questionBox1").style.display = "none";
    document.getElementById("questionBox2").style.display = "block";
}

function chooseColor(chosenColor) {
    color = chosenColor;

    document.getElementById("questionBox2").style.display = "none";
    document.getElementById("questionBox3").style.display = "block";
}

// Choose number and then show choices on Home Page

function chooseNumber(chosenNumber) {
    number = chosenNumber;

    document.getElementById("questionBox3").style.display = "none";
    document.getElementById("homeDisplay").style.display = "block";

    // Show choices on Home Page

    document.getElementById("nameDisplay").innerHTML = "Hi " + kidName + "!";
    let choicesEl = document.getElementById("choices");

    // Animal Selection

    let animalImg = document.createElement("img");
    animalImg.src = animal + ".png";
    //might need to change the image suffix depending on the image type
    animalImg.alt = animal;
    let animalText = document.createTextNode("Your favorite animal is a " + animal + "!");
    let animalEl = document.createElement("div");
    animalEl.appendChild(animalImg);
    animalEl.appendChild(animalText);
    choicesEl.appendChild(animalEl);

    // Color Selection

    let colorImg = document.createElement("img");
    colorImg.src = color + ".png";
    //might need to change the image suffix depending on the image type
    colorImg.alt = color;
    let colorText = document.createTextNode("Your favorite color is " + color + "!");
    let colorEl = document.createElement("div");
    colorEl.appendChild(colorImg);
    colorEl.appendChild(colorText);
    choicesEl.appendChild(colorEl);

    // Number Selection

    let numberImg = document.createElement("img");
    numberImg.src = number + ".png";
    //might need to change the image suffix depending on the image type
    numberImg.alt = number;
    let numberText = document.createTextNode("Your favorite number is " + number + "!");
    let numberEl = document.createElement("div");
    numberEl.appendChild(numberImg);
    numberEl.appendChild(numberText);
    choicesEl.appendChild(numberEl);
};
