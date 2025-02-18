'use strict';

let btn = document.getElementById('btn');
// let btnText = document.getElementById('btnText');
let btnIcon = document.getElementById('btnIcon');
let logoIcon = document.getElementById('logoIcon');

btn.onclick = function () {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    btnIcon.src = 'assets/images/sun.png';
    // btnText.innerHTML = 'Light';
    logoIcon.src = 'assets/images/logo-white-bg.svg';
  } else {
    btnIcon.src = 'assets/images/moon.png';
    // btnText.innerHTML = 'Dark';
    logoIcon.src = 'assets/images/logo-dark-bg.svg';
  }
};
