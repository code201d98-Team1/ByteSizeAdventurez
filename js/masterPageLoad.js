//this is a test script to test loading CSS properties

const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
const appState =  JSON.parse(localStorage.getItem('appState')).toString() || [];

let bodyElement = document.querySelector('body'); //here for testing only
console.log(appState);
let index = parseInt(appState); // index should only be created when appState is equal to a profile number, not newUser or parentMenu

/////////sample code to test appState CSS selection
bodyElement.style.backgroundColor = profileArray[index].color;
