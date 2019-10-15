import './style.scss';

const app = document.getElementById('app');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
app.appendChild(p);

recognition.addEventListener('result', e => {

  const transcript = Array.from(e.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('');

  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    app.appendChild(p);
  }

  if (transcript.includes('dog')) {
    console.log('dog');
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();