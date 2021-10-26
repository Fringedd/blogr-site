'use strict';

const li1 = document.getElementById('li1');
const li2 = document.getElementById('li2');
const li3 = document.getElementById('li3');

const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');

const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');

/* Mobile Menu IDs*/
const product = document.getElementById('mob-product');
const company = document.getElementById('mob-comp');
const connect = document.getElementById('mob-connect');
const ProductM = document.getElementById('modal-mob1');
const CompanyM = document.getElementById('modal-mob2');
const ConnectM = document.getElementById('modal-mob3');
const arrowM1 = document.getElementById('mob-arrow1');
const arrowM2 = document.getElementById('mob-arrow2');
const arrowM3 = document.getElementById('mob-arrow3');

// Mobile Query Selectors

const hamburgerMob = document.querySelector('.hamburger');
const closeMob = document.querySelector('.close');
const OpenMobMenu = document.querySelector('.mob-menu');
/*Header active state components */

//Arrow Components Desktop
const Press1 = function () {
  if (modal1.classList.contains('hidden')) {
    arrow1.style.transform = 'rotate(180deg)';
    modal1.classList.remove('hidden');
  } else {
    arrow1.style.transform = 'rotate(0deg)';
    modal1.classList.add('hidden');
  }
};
const Press2 = function () {
  if (modal2.classList.contains('hidden')) {
    arrow2.style.transform = 'rotate(180deg)';
    modal2.classList.remove('hidden');
  } else {
    arrow2.style.transform = 'rotate(0deg)';
    modal2.classList.add('hidden');
  }
};
const Press3 = function () {
  if (modal3.classList.contains('hidden')) {
    arrow3.style.transform = 'rotate(180deg)';
    modal3.classList.remove('hidden');
  } else {
    arrow3.style.transform = 'rotate(0deg)';
    modal3.classList.add('hidden');
  }
};

//Arrow Components Mobile

const PressProd = function () {
  if (ProductM.classList.contains('hidden')) {
    ProductM.classList.remove('hidden');
    arrowM1.style.transform = 'rotate(180deg)';
  } else {
    ProductM.classList.add('hidden');
    arrowM1.style.transform = 'rotate(0deg)';
  }
};

const PressComp = function () {
  if (CompanyM.classList.contains('hidden')) {
    CompanyM.classList.remove('hidden');
    arrowM2.style.transform = 'rotate(180deg)';
  } else {
    CompanyM.classList.add('hidden');
    arrowM2.style.transform = 'rotate(0deg)';
  }
};
const PressCon = function () {
  if (ConnectM.classList.contains('hidden')) {
    ConnectM.classList.remove('hidden');
    arrowM3.style.transform = 'rotate(180deg)';
  } else {
    ConnectM.classList.add('hidden');
    arrowM3.style.transform = 'rotate(0deg)';
  }
};

const hamBurger = function () {
  if (!hamburgerMob.classList.contains('hidden')) {
    hamburgerMob.classList.add('hidden');
    closeMob.classList.remove('hidden');
    OpenMobMenu.classList.remove('hidden');
  } else {
    hamburgerMob.classList.remove('hidden');
    closeMob.classList.add('hidden');
    OpenMobMenu.classList.add('hidden');
  }
};
const closeIt = function () {
  if (!closeMob.classList.contains('hidden')) {
    closeMob.classList.add('hidden');
    hamburgerMob.classList.remove('hidden');
    OpenMobMenu.classList.add('hidden');
  } else {
    closeMob.classList.remove('hidden');
    hamburgerMob.classList.add('hidden');
    OpenMobMenu.classList.remove('hidden');
  }
};

//EVENT LISTENERS Desktop
li1.addEventListener('click', Press1);
li2.addEventListener('click', Press2);
li3.addEventListener('click', Press3);

//EVENT LISTENERS Mobile
product.addEventListener('click', PressProd);
company.addEventListener('click', PressComp);
connect.addEventListener('click', PressCon);
hamburgerMob.addEventListener('click', hamBurger);
closeMob.addEventListener('click', closeIt);
