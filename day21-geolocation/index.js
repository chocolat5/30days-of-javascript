import './style.scss';

const app = document.getElementById('app');
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// 機器の位置が変化するたびに自動的に呼び出されるハンドラー関数を登録するために用いられます
// watch ID を返す
navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (error) => {
  console.log(err);
  alert('Something wrong!');
});