import './style.scss';

const app = document.getElementById('app');

const slider = document.querySelector('.items');

// つかんでいるかどうか
let isDown = false;

// つかんだX座標
let startX;

// つかんで動かした距離
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');

  // 最初にclickした座標
  // slider.offsetLeftはslider内での位置を知りたいため、marginを引いている
  startX = e.pageX - slider.offsetLeft;

  // slider内でどのくらいスクロールしたか
  scrollLeft = slider.scrollLeft;

  console.log(scrollLeft);
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  // 最初につかんだ位置からの移動距離を出す
  // * 数字 は動く速度
  const move = (x - startX) * 2;


  // sliderの位置をマウスの動きにあわせて移動
  slider.scrollLeft = scrollLeft - move;
  console.log(move);
}); 