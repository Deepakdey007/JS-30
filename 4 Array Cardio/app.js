const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter((invetor) => invetor.year >= 1500);
// or

// const fifteen = inventors.filter(function(event) {
//     if(event.year>=1500 && event.year<1600) {
//         return true;
//     }
// })

// or using arrow function
// const fifteen = inventors.filter(event => {
//     if(event.year>=1500 && event.year<1600) {
//         return true;
//     }
// })

console.table(fifteen);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const fullNames = inventors.map(items => items.first+" "+items.last)
// or
// const fullNames = inventors.map(item => `${item.first} ${item.last}`) to reduce the backticks

console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// const ordered = inventors.sort(function(a,b) {
//     if(a.year > b.year) {
//         return 1;
//     }
//     else {
//         return -1;
//     }
// })

// or 

const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.table(ordered)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const totalYears = inventors.reduce((total,inventor) => {
    return total + (inventor.passed - inventor.year);
},0)

console.log(totalYears);

// 5. Sort the inventors by years lived

const oldest = inventors.sort((a,b) => {
    let first = a.passed-a.year;
    let second = b.passed-b.year;
    return first > second ? -1 : 1;
})

console.table(oldest)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');

// const links = category.querySelectorAll('a');
// links will return an NodeList and map function is not there
// so convert it in array to use all the functions of array

// below there are two ways
// (a) = Array.from(category.querySelectorAll('a'))
// (b) = [...category.querySelectorAll('a')]

// const links = Array.from(category.querySelectorAll('a'));

// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// console.log(de);



// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort((lastOne, nextOne) => {
    const [alast, afirst] = lastOne.split(',');
    const [blast, bfirst] = nextOne.split(',');

    return alast > blast ? 1 : -1;  
})

console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick"
];

const transportation = data.reduce(function(obj,item) {
    // console.log(item);
    // below one is for initially no obj is there so it will create with 0 value;
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
},{})

console.log(transportation);