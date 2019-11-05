import './style.scss';

/* html elements */
const app = document.getElementById('app');

const panels = document.createElement('div');
panels.classList.add('panels');

let panelAry;
for (let i = 0; i < 5; i++) {
  const div = document.createElement('div');
  div.classList.add('panel', `panel${i + 1}`);
  const p1 = document.createElement('p');
  p1.textContent = `Upper Text`;
  const p2 = document.createElement('p');
  p2.textContent = `Panel${i + 1}`;
  const p3 = document.createElement('p');
  p3.textContent = `Bottom Text`;
  div.append(p1, p2, p3);

  panels.append(div);
}

app.append(panels);


/* dunctions */
const panelItems = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.add('open');
}

function toggleClose() {
  this.classList.remove('open');
}

function showText(e) {
  if(e.propertyName.includes('flex') && this.classList.contains('open') ) {
    this.classList.add('is-active');
  }
  if(e.propertyName.includes('flex') && !this.classList.contains('open') ) {
    this.classList.remove('is-active');
  }
}

panelItems.forEach(panel => panel.addEventListener('mouseenter', toggleOpen));
panelItems.forEach(panel => panel.addEventListener('mouseleave', toggleClose));
panelItems.forEach(panel => panel.addEventListener('transitionend', showText));