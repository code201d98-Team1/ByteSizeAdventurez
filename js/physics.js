// Write or Adjust your JavaScript code here.
'use strict';

function setBackground() {
  loadUserProfile();
  loadAppState();
  const bodyElement = document.querySelector('html');
  try {
    profile.color;
  }
  catch(err){
    alert('There is an error with the local data. Please make a new profile.');
    window.location.assign('profile.html');
  }
  if (profile.color === 'blue') {
    bodyElement.style.backgroundImage = 'url("assets/backgroundBlue.png")';
  } else if (profile.color === 'green') {
    bodyElement.style.backgroundImage = 'url("assets/backgroundGreen.png")';
  } else if (profile.color === 'purple') {
    bodyElement.style.backgroundImage = 'url("assets/backgroundPurple.png")';
  } else {
    bodyElement.style.backgroundColor = 'white';
  }
  bodyElement.style.backgroundSize = 'cover';
  bodyElement.style.backgroundRepeat = 'no-repeat';
  bodyElement.style.backgroundPosition = 'center center';
}

window.addEventListener('load', setBackground);

function loadAppState() {
  let appState = parseInt(localStorage.getItem('appState'));
  return appState;
}

function loadUserProfile() {
  const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
  let appState = localStorage.getItem('appState');
  let profile;
  if (appState && appState !== 'newUser') {
    const index = parseInt(appState);
    profile = profileArray[index];
  }
  return profile;
}

const profile = loadUserProfile();
const index = loadAppState();

let theCanvas = document.getElementById('theCanvas');
let theContext = theCanvas.getContext('2d');
let canvasExplosion = document.getElementById('canvasExplosion');
let canvasObjectThrown = document.getElementById('canvasObjectThrown');
let dt = 0.2; // time step in seconds
let t = 0; // initial time
let timer, vel, yo, xo, a, angle, vx, vy, x, y, ay; // declare all motion variables
let speedSlider = document.getElementById('speedSlider');
let angleSlider = document.getElementById('angleSlider');
let heightSlider = document.getElementById('heightSlider');
let gravitySlider = document.getElementById('gravitySlider');
let speedReadout = document.getElementById('speedReadout');
let angleReadout = document.getElementById('angleReadout');
let gravityReadout = document.getElementById('gravityReadout');

showSpeed();
showAngle();
showGravity();


// function is called in HTML element for the Throw button
function throwProjectile() {
  switchCharacter();
  switchEndEffect();
  // debugger;
  
  canvasExplosion.style = 'position:absolute; z-index: -1;';
  if (timer) {
    window.clearTimeout(timer);
    timer = null;
  }
  x = 0;
  y = 0;
  t = 0;
  ay = Number(gravitySlider.value); //ADDED GRAVITY SLIDER
  vel = Number(speedSlider.value);
  a = Number(angleSlider.value);
  angle = a * Math.PI / 180; // convert to radians
  yo = Number(heightSlider.value);
  xo = 0;//Number(xSlider.value);
  vx = vel * Math.cos(angle);
  vy = vel * Math.sin(angle);
  console.log('Y-Velocity' + vy);
  x = xo; // position at t=0
  y = yo; // position at t=0
  moveProjectile();
  profile.timesPlayedPhysics++;
  const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
  profileArray[index] = profile;
  localStorage.setItem('profileArray', JSON.stringify(profileArray));
  console.log(profileArray);
}

function drawProjectile() {
  theContext.clearRect(0, 0, theCanvas.width, theCanvas.height);
  theContext.beginPath();
  theContext.arc(x, y, 2, 0, 2 * Math.PI);
  theContext.fillStyle = 'rgb(0,0,0)';
  theContext.fill();
}

function moveProjectile() {
  let thrownImage = document.getElementById('thrownImage');
  if (y < 488 && x < 735) {
    t += dt;
    x = xo + vx * t;
    y = yo - vy * t + .5 * ay * (t * t); // yo = - .5 * ay * (t * t) + vy * t + y
    drawProjectile();
    if (timer) window.clearTimeout(timer);
    timer = window.setTimeout(moveProjectile, 100 * dt); // The number 100 can be increased for slow motion
    canvasObjectThrown.style = `position:absolute; left: ${x-32}px; top: ${y-40}px; z-index: 1;`;
    thrownImage.style =`animation: rotation ${30/vel}s infinite linear;`;
  } else if (x >= 735) { // RIGHT BORDER
    console.log('HIT');
    canvasObjectThrown.style = 'position:absolute; z-index: -1; left:20px; top:20px;';
    canvasExplosion.style = `position:absolute; left: ${x-32}px; top: ${y-40}px; z-index: 1;`;
  } else if (y >= 488) { // BOTTOM BORDER
    console.log('Miss');
    console.log(thrownImage);
  }
}

function showSpeed() {
  speedReadout.innerHTML = speedSlider.value;
}
function showAngle() {
  angleReadout.innerHTML = angleSlider.value;
}

function showGravity() {
  gravityReadout.innerHTML = gravitySlider.value;
  let value = gravitySlider.value;
  let gravityParagraph = document.getElementById('infoParagraph');
  if(value < -1){
    gravityParagraph.innerHTML = 'YOU ARE FLYING!!';
  } else if(value >= -1 && value <1){
    gravityParagraph.innerHTML = 'This is how space feels.';
  } else if(value >= 1 && value <2.5){
    gravityParagraph.innerHTML = "Houston.... we're on the MOON";
  } else if(value >= 2.5 && value <7){
    gravityParagraph.innerHTML = 'You just stepped foot on MARS';
  } else if(value >= 7 && value <12){
    gravityParagraph.innerHTML = "You are on Earth. Don't stay here too long";
  } else if(value >= 12 && value <20){
    gravityParagraph.innerHTML = "Are things getting heavy or is it just me?";
  } else {
    gravityParagraph.innerHTML = "JUPITER?? Can you throw very far?";
  }

}
//END OF PHYSICS FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function switchCharacter(){
  let characterEl = document.getElementById('canvasObjectThrown');
  characterEl.innerHTML = '';
  let img = document.createElement('img');
  let targetElement = document.querySelector('div#my-character-select.icon-select div.icon.selected img');
  let characterID = parseInt(targetElement.id);
  console.log(targetElement.id);
  img.setAttribute('id','thrownImage');
  img.setAttribute('src', `img/icons/${characterID}.png`);
  img.setAttribute('width', '60');
  characterEl.appendChild(img);

}

function switchEndEffect(){
  let endEffectEl = document.getElementById('canvasExplosion');
  endEffectEl.innerHTML = '';
  let img = document.createElement('img');
  let targetElement = document.querySelector('div#my-endEffect-select.icon-select div.icon.selected img');
  let endEffectID = parseInt(targetElement.id);
  console.log(targetElement.id);
  img.setAttribute('id','explodeImg');
  img.setAttribute('src', `img/icons/${endEffectID}.png`);
  img.setAttribute('width', '60');
  endEffectEl.appendChild(img);
}
