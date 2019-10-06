import './style.scss';

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

const panelItems = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  //console.log(e.propertyName);
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('is-active');
  }
}

panelItems.forEach(panel => panel.addEventListener('click', toggleOpen));
panelItems.forEach(panel => panel.addEventListener('transitionend', toggleActive));