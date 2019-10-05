import './style.scss';

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


const setData = () => {
  const now = new Date();
  const seconds = now.getSeconds(); //秒
  const secondDegrees = ((seconds / 60) * 360) - 90; //秒の角度
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const mins = now.getMinutes(); //分
  const minsDegrees = ((mins / 60) * 360) - 90; //分の角度
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours(); //分
  const hoursDegrees = ((hours / 12) * 360) - 90; //分の角度
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(hours);
}

setInterval(setData, 1000);