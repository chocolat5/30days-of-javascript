import './style.scss';

// html elements
const app = document.getElementById('app');

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const btn = document.querySelector('.start_btn');

let lastHole;
let timeUp = false;
let score = 0;

const randTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}

const randHole = (holes) => {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  // 同じholeが連続するのを回避
  if (hole === lastHole) {
    return randHole(holes);
  }
  lastHole = hole;
  return hole;
};

const peep = () => {
  const time = randTime(200, 1000);
  const hole = randHole(holes);

  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    // タイムアップになるまでもぐら無限ループ
    if (!timeUp) peep();
  }, time);
};

const startGame = () => {
  scoreBoard.textContent = 0;
  timeUp = false;
  peep();

  // 指定秒後にゲーム終了
  setTimeout(() => {
    timeUp = true;
  }, 10000);
};

function bonk(e) {
  // cheater
  if (!e.isTrusted) return;
  score++;
  scoreBoard.textContent = score;
  this.classList.remove('up');
};

btn.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', bonk));