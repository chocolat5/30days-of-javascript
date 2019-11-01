import './style.scss';

const app = document.getElementById('app');

const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.video');

function handleMove(e) {
  // 要素内でのマウスの位置を取得
  const x = e.pageX - this.offsetLeft;
  // xを1/100に換算
  const percent = x / this.offsetWidth;

  // パーセントに換算
  const width = Math.round(percent * 100) + '%';

  // barの倍速を表す数値テキスト
  const min = 0.4;
  const max = 4;
  const rate = percent * (max - min) + min;

  // マウスの動きに連動してbarを動かす
  bar.style.width = width;
  // パーセントにあわせて倍速の数値を変動
  bar.textContent = rate.toFixed(2) + 'x';

  // barにあわせてvideoの速度を変動
  video.playbackRate = rate;
}

speed.addEventListener('mousemove', handleMove);