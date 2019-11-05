import './style.scss';

const app = document.createElement('app');

const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemList);
  localStorage.setItem('items', JSON.stringify(items));

  // form reset
  this.reset();
}

const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

const toggleDone = (e) => {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;

  // data set to local storage
  localStorage.setItem('items', JSON.stringify(items));

  // update DOM
  populateList(items, itemList);
}

populateList(items, itemList);

addItems.addEventListener('submit', addItem);
itemList.addEventListener('click', toggleDone);