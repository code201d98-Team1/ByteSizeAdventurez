// 'use strict';

const profileArray = JSON.parse(localStorage.getItem('profileArray')) || []; // checking if read item is null

let profileContainer = document.getElementById('profileContainer'); // getting profile container to append profile cards later
let newProfileButton = document.getElementById('newProfileButton');
let appState = localStorage.getItem('appState');
//forces you to certain pages based on app state


// loop that goes through profile arrays, iterating i, so we can make 'id' attributes that correspond with the array index

for (let i in profileArray){
  const profileCard = document.createElement('div');
  profileCard.setAttribute('id',i);
  profileCard.classList.add('profile-card');
  const profileDisplayName = document.createElement('h2');
  profileDisplayName.innerHTML = profileArray[i].name;
  console.log(profileArray);
//   debugger;
  profileCard.appendChild(profileDisplayName);
  profileContainer.appendChild(profileCard);
}
//waiting to click on the name, it doesnt work if we dont click the name.
profileContainer.addEventListener('click', handleProfileSelection);
// newProfileButton.addEventListener('click',);
function handleProfileSelection(e){
//   console.log(e.target.innerHTML);
////////////CODE IS SUPPOSE TO IDENTIFY WHAT h2 WAS CLICKED, THEN PARSE THROUGH THE PROFILEARRAY FOR INDEX OF NAME
  let name = e.target.innerHTML;
  let outEvent = e;
  console.log(outEvent);
  // debugger;
  let profileHeader = outEvent.srcElement.parentElement.id;//profileArray.findIndex(x => x.name ===name);
  let profileIndex = parseInt(profileHeader);
  if(profileHeader === 'profileContainer'){
    profileIndex = parseInt(outEvent.target.id);
  }
  console.log(profileIndex);
  // debugger;

  //// this if statement prevents an invalide profileIndex to be entered. invalid profiles occurs when you do not click on the h2 element, but around it.
  if(profileIndex !== -1){
    // debugger;
    localStorage.setItem('appState', profileIndex);
    window.location.assign('home.html');
  }
}

newProfileButton.addEventListener('click', handleNewSelection);

function handleNewSelection(){
  localStorage.setItem('appState', 'newUser');
  window.location.assign('choices.html');
}
