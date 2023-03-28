// Write or Adjust your JavaScript code here.
let theCanvas = document.getElementById('theCanvas');
let theContext = theCanvas.getContext('2d');
let canvasExplosion = document.getElementById('canvasExplosion');
let canvasObjectThrown = document.getElementById('canvasObjectThrown');
// let ay = 9.81;        // grav. constant in SI units
let dt = 0.2; // time step in seconds
let t = 0; // initial time
let timer, vel, yo, xo, a, angle, vx, vy, x, y, x_old, y_old, ay; // declare all motion variables
let speedSlider = document.getElementById('speedSlider');
let angleSlider = document.getElementById('angleSlider');
let heightSlider = document.getElementById('heightSlider');
// let xSlider = document.getElementById('xSlider');
let gravitySlider = document.getElementById('gravitySlider');
let speedReadout = document.getElementById('speedReadout');
let angleReadout = document.getElementById('angleReadout');
let heightReadout = document.getElementById('heightReadout');
// let xReadout = document.getElementById('xReadout');
let gravityReadout = document.getElementById('gravityReadout');
let test = 0;

// moveProjectile();
// throwProjectile();
showSpeed();
showAngle();
showHeight();
// showPosition();
showGravity();


// function is called in HTML element for the Throw button
function throwProjectile() {
  switchCharacter();
  switchEndEffect()
  canvasExplosion.style = 'position:absolute; z-index: -1;';
  // canvasObjectThrown.style = `position:absolute; z-index: -1;`
  if (timer) {
    window.clearTimeout(timer);
    timer = null;
  }
  x = 0;
  y = 0;
  t = 0;
  test = 0; //added
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
}

function drawProjectile() {
  theContext.clearRect(0, 0, theCanvas.width, theCanvas.height);
  theContext.beginPath();
  theContext.arc(x, y, 2, 0, 2 * Math.PI);
  theContext.fillStyle = 'rgb(0,0,0)';
  theContext.fill();
}

function moveProjectile() {
  if (y < 500 && x < 500) {
    t += dt;
    y_old = y;
    x_old = x;
    x = xo + vx * t;
    y = yo - vy * t + .5 * ay * (t * t); // yo = - .5 * ay * (t * t) + vy * t + y
    drawProjectile();
    // console.log('Y-Position' + y);
    if (timer) window.clearTimeout(timer);
    timer = window.setTimeout(moveProjectile, 100 * dt); // The number 100 can be increased for slow motion
    canvasObjectThrown.style = `position:absolute; left: ${x-32}px; top: ${y-40}px; z-index: 1;`;
    // console.log(` X = ${x} \n Y = ${y} \n Xo = ${xo} \n Yo = ${yo} \n X_old = ${x_old} \n Y_old = ${y_old} \n Vx = ${vx} \n Vy = ${vy} \n Gravity = ${ay} \n Time = ${t} \n test =  ${test} `)
  } else if (x >= 490) { // RIGHT BORDER
    console.log('HIT');
    canvasObjectThrown.style = 'position:absolute; z-index: -1;';
    canvasExplosion.style = `position:absolute; left: ${x-32}px; top: ${y-40}px; z-index: 1;`;
  } else if (y >= 500) { // BOTTOM BORDER
    console.log('Miss');
  }
}

function showSpeed() {
  speedReadout.innerHTML = speedSlider.value;
}
function showAngle() {
  angleReadout.innerHTML = angleSlider.value;
}
function showHeight() {
  heightReadout.innerHTML = heightSlider.value;
}
// function showPosition() {
//   xReadout.innerHTML = xSlider.value;
// }
function showGravity() {
  gravityReadout.innerHTML = gravitySlider.value;
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
  img.setAttribute('src', `img/icons/${endEffectID}.png`);
  img.setAttribute('width', '60');
  endEffectEl.appendChild(img);
}


