import './style.scss';

// html elements
const app = document.getElementById('app');

const display = document.createElement('div');
display.setAttribute('class', 'display');

const displayLeft = document.createElement('div');
displayLeft.setAttribute('class', 'display-time_left');

const displayEnd = document.createElement('div');
displayEnd.setAttribute('class', 'display-time_end');

display.append(displayLeft, displayEnd);
app.append(display);

// buttons
const buttons = document.querySelectorAll('[data-time]');


// functions
let countdown;

const timer = (seconds) => {
  // clear any existing timer
  clearInterval(countdown);

  // ミリ秒のタイムスタンプを取得
  const now = Date.now();
  const then = now + seconds * 1000;

  // setIntervalの１度目の実行の遅延回避
  displayTimeLeft(seconds);

  displayTimeEnd(then);

  // 残り時間の計算
  // setIntervalは読子後即座に実行されない => 1000秒後に初めて1回目が実行される
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // check if should stop it
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }

    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  const displayTime = `${minutes} : ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  displayLeft.textContent = displayTime;

  // タイトルタグをタイマーに
  document.title = displayTime;
};

const displayTimeEnd = (timestamp) => {
  // ミリ秒を日付の形式に変換
  const end = new Date(timestamp);

  const hour = end.getHours();
  const minutes = end.getMinutes();

  displayEnd.textContent = `Be back at ${hour} : ${minutes < 10 ? '0' : ''}${minutes}`;
};

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
