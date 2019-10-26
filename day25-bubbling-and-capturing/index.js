import './style.scss';

const app = document.getElementById('app');

const divs = document.querySelectorAll('.box');

function logText(e) {
  e.stopPropagation();
  console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));