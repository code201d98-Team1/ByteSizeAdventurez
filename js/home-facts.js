// to be merged into home javascript

const animalFacts = document.getElementById('animal-facts');
let chosenAnimal = 'jaguar';

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
