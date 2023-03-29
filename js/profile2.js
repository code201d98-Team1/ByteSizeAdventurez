'use strict';

const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];

let profileContainer = document.getElementById('profileContainer');

for (let i in profileArray){
  const profileCard = document.createElement('div');
  profileCard.setAttribute('id',i);
  const profileDisplayName = document.createElement('h2');
  profileDisplayName.innerHTML = profileArray[i].kidName;
  profileCard.appendChild(profileDisplayName);
  profileContainer.appendChild(profileCard);
}

profileContainer.addEventListener('click', handleProfileSelection);

function handleProfileSelection(e){
  console.log(e.target);
  let userName = e.target.innerHTML;
  window.location.assign('home.html');
}
