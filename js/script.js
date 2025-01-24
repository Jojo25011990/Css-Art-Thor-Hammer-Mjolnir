'use strict';

const lightning = document.querySelector('.lightning');
const lightningZone = document.querySelector('.lightning__start-zone');
const hammerHeadText = document.querySelector('.hammer__head-text');

hammerHeadText.addEventListener('click', () => {
  lightningZone.classList.add('active');
  setTimeout(() => {
    lightningZone.classList.remove('active');
  }, 2035);

  lightning.classList.add('active');
  setTimeout(() => {
    lightning.classList.remove('active');
  }, 2000);
});
