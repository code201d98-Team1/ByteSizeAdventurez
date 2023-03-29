'use strict';

const profileArray = JSON.parse(localStorage.getItem('profileArray')) || []; // checking if read item is null

let profileContainer = document.getElementById('profileContainer'); // getting profile container to append profile cards later

// loop that goes through profile arrays, iterating i, so we can make 'id' attributes that correspond with the array index
for (let i in profileArray){
  const profileCard = document.createElement('div');
  profileCard.setAttribute('id',i);
  const profileDisplayName = document.createElement('h2');
  profileDisplayName.innerHTML = profileArray[i].kidName;
  profileCard.appendChild(profileDisplayName);
  profileContainer.appendChild(profileCard);
}
//waiting to click on the name, it doesnt work if we dont click the name.
profileContainer.addEventListener('click', handleProfileSelection);

function handleProfileSelection(e){
//   console.log(e.target.innerHTML);
////////////CODE IS SUPPOSE TO IDENTIFY WHAT h2 WAS CLICKED, THEN PARSE THROUGH THE PROFILEARRAY FOR INDEX OF NAME
  let kidName = e.target.innerHTML;
  let profileIndex = profileArray.findIndex(x => x.kidName ===kidName);
  console.log(profileIndex);

  //// this if statement prevents an invalide profileIndex to be entered. invalid profiles occurs when you do not click on the h2 element, but around it.
  if(profileIndex !== -1){
    debugger;
    localStorage.setItem('appState', profileIndex);
    window.location.assign('home.html');
  }
}
