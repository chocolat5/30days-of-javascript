import './style.scss';

const app = document.getElementById('app');

const keys = document.createElement('div');
keys.setAttribute('id', 'keys');
app.append(keys);

const keysData = [
  { num: 65, id: 'A', sound: 'clap' },
  { num: 83, id: 'S', sound: 'hihat' },
  { num: 68, id: 'D', sound: 'kick' },
  { num: 70, id: 'F', sound: 'openhat' },
  { num: 71, id: 'G', sound: 'boom' },
  { num: 72, id: 'H', sound: 'ride' },
  { num: 74, id: 'J', sound: 'snare' },
  { num: 75, id: 'K', sound: 'tom' },
  { num: 76, id: 'L', sound: 'tink' },
];

const createKeys = () => keysData.forEach((data) => {
  const div = document.createElement('div');
  div.setAttribute('data-key', data.num);
  div.classList.add('key');

  const kbd = document.createElement('kbd');
  kbd.textContent = data.id;

  const sound = document.createElement('span');
  sound.classList.add('sound');
  sound.textContent = data.sound;

  div.append(kbd, sound);
  keys.append(div);
});

const createAudio = () => keysData.forEach((data) => {
  const audio = document.createElement('audio');
  audio.setAttribute('data-key', data.num);
  audio.setAttribute('src', `sounds/${data.sound}.wav`);

  app.append(audio);
});

window.addEventListener('DOMContentLoaded', createKeys());
window.addEventListener('DOMContentLoaded', createAudio());

const playSound = () => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0; // rewind to the start
  audio.play();

  key.classList.add('active');
}

const removeTransition = (event) => {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('active');
}

const keyItems = document.querySelectorAll('.key');
keyItems.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);