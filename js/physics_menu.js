let characterSelect; // initializes election of character menu construct
let endEffectSelect; // initializes election of end effect menu construct

window.onload = function(){
  // constuct for menu. Not sure how it works in its entirety.
  characterSelect = new IconSelect('my-character-select', // 'my-character-select' pairs with a div in the HTML
    {'selectedIconWidth':48,
      'selectedIconHeight':48,
      'selectedBoxPadding':1,
      'iconsWidth':48,
      'iconsHeight':48,
      'boxIconSpace':1,
      'vectoralIconNumber':2,
      'horizontalIconNumber':6});

  let iconC = [];
  iconC.push({'iconFilePath':'img/icons/1.png', 'iconValue':'1'});
  iconC.push({'iconFilePath':'img/icons/2.png', 'iconValue':'2'});
  iconC.push({'iconFilePath':'img/icons/3.png', 'iconValue':'3'});
  iconC.push({'iconFilePath':'img/icons/4.png', 'iconValue':'4'});
  iconC.push({'iconFilePath':'img/icons/5.png', 'iconValue':'5'});
  iconC.push({'iconFilePath':'img/icons/6.png', 'iconValue':'6'});
  iconC.push({'iconFilePath':'img/icons/7.png', 'iconValue':'7'});
  iconC.push({'iconFilePath':'img/icons/8.png', 'iconValue':'8'});
  iconC.push({'iconFilePath':'img/icons/9.png', 'iconValue':'9'});
  iconC.push({'iconFilePath':'img/icons/10.png', 'iconValue':'10'});
  iconC.push({'iconFilePath':'img/icons/11.png', 'iconValue':'11'});
  iconC.push({'iconFilePath':'img/icons/12.png', 'iconValue':'12'});
  iconC.push({'iconFilePath':'img/icons/13.png', 'iconValue':'13'});
  iconC.push({'iconFilePath':'img/icons/14.png', 'iconValue':'14'});

  characterSelect.refresh(iconC);

  endEffectSelect = new IconSelect('my-endEffect-select', // 'my-endEffect-select' pairs with a div in the HTML
    {'selectedIconWidth':48,
      'selectedIconHeight':48,
      'selectedBoxPadding':1,
      'iconsWidth':48,
      'iconsHeight':48,
      'boxIconSpace':1,
      'vectoralIconNumber':2,
      'horizontalIconNumber':6});

  let iconE = [];
  iconE.push({'iconFilePath':'img/icons/7.png', 'iconValue':'7'});
  iconE.push({'iconFilePath':'img/icons/8.png', 'iconValue':'8'});
  iconE.push({'iconFilePath':'img/icons/9.png', 'iconValue':'9'});
  iconE.push({'iconFilePath':'img/icons/10.png', 'iconValue':'10'});
  iconE.push({'iconFilePath':'img/icons/11.png', 'iconValue':'11'});
  iconE.push({'iconFilePath':'img/icons/12.png', 'iconValue':'12'});
  iconE.push({'iconFilePath':'img/icons/13.png', 'iconValue':'13'});
  iconE.push({'iconFilePath':'img/icons/14.png', 'iconValue':'14'});

  endEffectSelect.refresh(iconE);

};

// function to change back drop. The call of the function is in the HTML dropdown menu element
function backDropChange(){ 
  let backdropImgEl = document.getElementById('backdropImage'); //grab the Image element
  console.log(event.currentTarget.value);
  backdropImgEl.setAttribute('src', `img/backdrop/${event.currentTarget.value}.jpg`); //change its source attribute
}


