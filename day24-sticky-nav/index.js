import './style.scss';

const app = document.getElementById('app');

const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

const fixNav = () => {
  if (window.scrollY >= topOfNav - 8) {
    app.style.paddingTop = `${ nav.offsetHeight + 24 }px`;
    document.body.classList.add('fixed-nav');
  } else {
    app.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);