import './style.scss';

const app = document.getElementById('app');
const bandList = document.createElement('ul');
app.append(bandList);

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const strip = (bandName) => {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

//const sortedBands = bands.sort((a, b) => {
//    if(strip(a) > strip(b)) {
//      return 1;
//    } else {
//      return -1;
//    }
//});

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

bandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

console.log(sortedBands);