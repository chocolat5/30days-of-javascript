import './style.scss';

/* html elements */
const app = document.getElementById('app');

const clock = document.createElement('div');
clock.classList.add('clock');

const clockFace = document.createElement('div');
clockFace.classList.add('clock-face');

const hourHand = document.createElement('div');
hourHand.classList.add('hand', 'hour-hand');
const minHand = document.createElement('div');
minHand.classList.add('hand', 'min-hand');
const secondHand = document.createElement('div');
secondHand.classList.add('hand', 'second-hand');

app.append(clock);
clock.append(clockFace);
clockFace.append(hourHand, minHand, secondHand);

const digital = document.createElement('div');
digital.classList.add('clock-digital');
const hourEl = document.createElement('p');
const minEl = document.createElement('p');
const secondEl = document.createElement('p');


app.append(digital);
digital.append(hourEl, minEl, secondEl);


/* functions */
const getTime = () => {
  const now = new Date();
  const seconds = now.getSeconds(); //秒
  const mins = now.getMinutes(); //分
  const hours = now.getHours(); //時間

  setClockHands(seconds, mins, hours);
  setClockDigital(seconds, mins, hours);
};


const setClockHands = (seconds, mins, hours) => {
  const secondDegrees = ((seconds / 60) * 360) - 90; //秒の角度
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minsDegrees = ((mins / 60) * 360) - 90; //分の角度
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hoursDegrees = ((hours / 12) * 360) - 90; //時間の角度
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

const setClockDigital = (seconds, mins, hours) => {
  hourEl.textContent = hours;
  minEl.textContent = `:${mins < 10 ? '0' + mins : mins}`;
  secondEl.textContent = `:${seconds < 10 ? '0' + seconds : seconds}`;
}

setInterval(getTime, 1000);