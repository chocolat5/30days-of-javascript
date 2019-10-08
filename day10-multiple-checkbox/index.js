import './style.scss';

const app = document.getElementById('app');

const data = [
  'This is an inbox layout.',
  'Check one item',
  'Hold down your Shift key',
  'Check a lower item',
  'Everything in between should also be set to checked',
  'Try to do it without any libraries',
  'Just regular JavaScript',
  'Good Luck!',
  `Don't forget to tweet your result!`,
];

const createCheckbox = () => {
  data.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('item');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', `checkbox_${index}`);

    const label = document.createElement('label');
    label.setAttribute('for', `checkbox_${index}`);
    label.setAttribute('for', `checkbox_${index}`);
    label.textContent = item;

    div.append(input, label);
    app.append(div);
  });
};

createCheckbox();


let lastChecked;

function handleCheck(e) {
  // check if they had shift key down
  // and check that they are checking
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));