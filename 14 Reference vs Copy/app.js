// start with strings, numbers and booleans

let age = 100;
let age2 = 200;
console.log(age, age2);

age = 300;

console.log(age, age2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

const team = players;
console.log(players, team);

// and we want to make a copy of it.
// You might think we can just do something like this:

team[3] = "Lux";
console.log(players, team);

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!

const players2 = ["Wes", "Sarah", "Ryan", "Poppy"];

const team2 = players2.slice();
team2[3] = "Lux";
console.log(players2, team2);

// one way

const team3 = [].concat(players2);
team3[3] = "hero";
console.log(players2, team3);

// or create a new array and concat the old one in

// or use the new ES6 Spread

const team4 = [...players2];
team4[3] = "deepak";
console.log(players2, team4);

const team5 = Array.from(players2);
team5[3] = "cool";
console.log(players2, team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:

const captain = person;
captain.number = 99;
console.log(person);

// how do we take a copy instead?


const person2 = {
  name: "Wes Bos",
  age: 80,
};

const cap2 = Object.assign({}, person2, { number: 98, age: 12 });
console.log(person2, cap2);


// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name: 'wes',
    age: 100,
    social : {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}

console.log(wes);

const dev = Object.assign({},wes);



const dev2 = JSON.parse(JSON.stringify(wes));
console.log(dev2);

