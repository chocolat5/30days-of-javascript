import './style.scss';

const app = document.createElement('app');

let age = 100;
let age2 = age;
console.log(age, age2); // 100 100
age = 200;
console.log(age, age2); // 200 100

let name = 'Wes';
let name2 = name;
console.log(name, name2); // Wes Wes
name = 'Wesley';
console.log(name, name2); // Wesley Wes

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// copy of array and change object of team
//const team = players;
//team[3] = 'Lux';
//console.log(players); //  ["Wes", "Sarah", "Ryan", "Lux"]
//console.log(team); //  ["Wes", "Sarah", "Ryan", "Lux"]

const team2 = players.slice();
team2[3] = 'Lux';
console.log(players); //  ["Wes", "Sarah", "Ryan", "Poppy"]
console.log(team2); //  ["Wes", "Sarah", "Ryan", "Lux"]


// copy of array and change object of team
const team3 = [].concat(players);
team3[3] = 'Lux';
console.log(players); //  ["Wes", "Sarah", "Ryan", "Poppy"]
console.log(team3); //  ["Wes", "Sarah", "Ryan", "Lux"]


// Uses spread and and change object of team
const team4 = [...players]
team4[3] = 'Lux';
console.log(players); //  ["Wes", "Sarah", "Ryan", "Poppy"]
console.log(team4); //  ["Wes", "Sarah", "Ryan", "Lux"]

// Uses spread and and change object of team
const team5 = Array.from(players);
team5[3] = 'Lux';
console.log(players); //  ["Wes", "Sarah", "Ryan", "Poppy"]
console.log(team5); //  ["Wes", "Sarah", "Ryan", "Lux"]



//original
const person = {
  name: 'Wes Bos',
  age: 80
};


//const captain = person;
//captain.nubmer = 99;

//console.log(person); // {name: "Wes Bos", age: 80, nubmer: 99}
//console.log(captain); // {name: "Wes Bos", age: 80, nubmer: 99}

//const captain = Object.assign({}, person, {number: 99});
//console.log(person); // {name: "Wes Bos", age: 80}
//console.log(captain); // {name: "Wes Bos", age: 80, nubmer: 99}

const sarah = {
  name: 'Sarah',
  age: 60,
  social: {
    twitter: '@sarah'
  }
};

//const lucy = Object.assign({}, sarah);
//lucy.name = 'Lucy';
//lucy.social.twitter = '@lucy';
//
//console.log(sarah); // {name: "Sarah", age: 60, social: {twitter: "@lucy"}}
//console.log(lucy); // {name: "Lucy", age: 60, social: {twitter: "@lucy"}}


const lucy = JSON.parse(JSON.stringify(sarah));
lucy.name = 'Lucy';
lucy.social.twitter = '@lucy';

console.log(sarah); // {name: "Sarah", age: 60, social: {twitter: "@sarah"}}
console.log(lucy); // {name: "Lucy", age: 60, social: {twitter: "@lucy"}}