// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// some will check at least one thing in your array meets what you're looking for
// Array.prototype.some() // is at least one person 19 or older?

//   const isAdult = people.some(function(person) {
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.year >= 19) {
//         return true;
//     }
//   });

// or write code in some good manner

const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19)
console.log(isAdult);

// Array.prototype.every() // is everyone 19 or older?

const allAdult = people.every(person => (new Date()).getFullYear() - person.year >= 19)
console.log(allAdult);

// Array.prototype.find()
// kind of filter but instead of returning you a subset of the array, it return you the first item that it finds
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// const comment = comments.find(function(comment) {
//     if(comment.id === 823423) {
//         return true;
//     }
// })

// better way

const comment = comments.find(comment => (comment.id === 823423));
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// to delete from array

// comments.splice(index,1);

// using redux and create a new array of updated comments array

const newComments = [
    ...comments.splice(0,index),
    ...comments.splice(index + 1)
];