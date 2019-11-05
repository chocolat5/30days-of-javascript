import './style.scss';

const app = document.getElementById('app');
const text = app.querySelector('h2');
const move = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = app;
  let { offsetX: x, offsetY: y } = e;
  
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xMove = Math.round((x / width * move) - (move / 2));
  const yMove = Math.round((y / height * move) - (move / 2));
  
  text.style.textShadow = `
${xMove}px ${yMove}px 0 #ffff31,
${xMove * -1}px ${yMove}px 0 #a7f432,
${yMove}px ${xMove * -1}px 0 #6d9bc3,
${yMove * -1}px ${xMove}px 0 #ff007c
  `;
}

app.addEventListener('mousemove', shadow);