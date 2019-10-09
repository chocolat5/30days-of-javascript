import './style.scss';

const app = document.getElementById('app');

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.placeholder = 'Guess the secret word  ...';

const msg = document.createElement('p');

app.append(input, msg);


let pressed = [];
const secretCode = 'javascript';

const checkGuess = (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if(pressed.join('').includes(secretCode)) {
    msg.textContent = 'Correct!';
  }

  console.log(pressed);
}

input.addEventListener('keyup', checkGuess);