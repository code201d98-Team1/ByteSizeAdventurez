//this is a test script to test loading CSS properties

const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
const appState =  JSON.parse(localStorage.getItem('appState')).toString() || []; // 0 is parting out weird. Zero (0) the number is over written by null, unidentified, and empty array, but string '0' is not.

let index;

if(parseInt(appState)>= 0){ // this will turn all number strings to actual number variables. 
  index = parseInt(appState); // index should only be created when appState is equal to a profile number, not newUser or parentMenu
}


let bodyElement = document.querySelector('body'); //here for testing only


// if(window.location.href.indexOf('choices.html'));

/////////sample code to test appState CSS selection


bodyElement.style.backgroundColor = profileArray[index].color;

