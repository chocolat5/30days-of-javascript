import './style.scss';

const canvas = document.getElementById('app');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 16;
ctx.globalCompositeOperation = 'lighten';

let isDrawing = false;
let lastX  = 0;
let lastY  = 0;
let hue = 0;
let direction = true;

const draw = (e) => {
  console.log(e);
  if(!isDrawing) return; // stop when not moused down

  ctx.strokeStyle = `hsl(${hue}, 70%, 85%)`;
  ctx.beginPath();

  // start from
  ctx.moveTo(lastX, lastY);

  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  // update offset
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if(hue >= 360) {
    hue = 0;
  }
  if(ctx.lineWidth >= 150 || ctx.lineWidth <= 10) {
    direction = !direction;
  }
  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);