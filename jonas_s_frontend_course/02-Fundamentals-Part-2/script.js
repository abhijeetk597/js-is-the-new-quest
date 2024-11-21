"use strict"; // this activates stric mode for the entire script; this has to be the first line when strict mode  is required

// functions

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrageJuice = fruitProcessor(2, 4);
// console.log(appleOrageJuice);

// function declaration // also declared function can be called before declaration
function calcAge1(birthYear) {
  const age = 2024 - birthYear;
  return age;
}

const age1 = calcAge1(1995);
console.log(age1);

// function expression / anonymous function / function without name
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1995);
console.log(age2);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years!`;
};

console.log(yearsUntilRetirement(1995, "Someone"));
console.log(yearsUntilRetirement(1989, "Bob"));

// Calling a function inside a function
const cutPieces = (fruit) => fruit * 4;

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of Apple and ${orangePieces} pieces of Orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// Arrays
const friend1 = "Shahrukh";
const friend2 = "Salman";
const friend3 = "Aamir";

const friends = ["Shahrukh", "Salman", "Aamir"];
const friendsArray = [friend1, friend2, friend3, friend1, friend3];

console.log(friends);
console.log(friendsArray);

const years = new Array(1991, 1994, 2008, 2024);
console.log(years);

console.log(friends[1]);
console.log(`Length of friends array: ${friends.length}`);
// console.log(friends[-1]); // Negative indexing doesn't work
console.log(friends[friends.length - 1]);

friends[2] = "Ajay";
console.log(friends);

// arrays can have heterogeneous values

const myArray = ["a", 15, friends];
console.log(myArray + ["Hi"]); // concatination like this is not allowed it converts everything to string

// Array Methods

// 1. Push : Inserts element at the end of the array
friends.push("Ranbir");
const newLength = friends.push("Hritik");
console.log(friends);
console.log(newLength);

// 2. Unshift : Inserts element at the beginning of the array
friends.unshift("John"); // returns the new length of the array
console.log(friends);

// 3. Pop: Removes last element of the array
const popped = friends.pop();
console.log(friends);
console.log(popped);

// 4. Shift: Removes first array element
friends.shift(); // Also returns the removed element
console.log(friends);

// 5. indexOf
console.log(friends.indexOf("Salman"));
console.log(friends.indexOf("Ajay"));
console.log(friends.indexOf("Rajkumar")); // Returns -1 if not found in array

// 6. Includes (Returns true or false)
console.log(friends.includes("Ranbir"));

// Objects
const myObject = {
  yearOne: 1964,
  yearTwo: 1995,
  age: 2037 - 1994,
  friends: friends,
};

console.log(myObject);

// Object methods
// const abhi = {
//   firstName: "Abhijeet",
//   lastName: "Kamble",
//   birthYear: 1994,
//   job: "Developer",
//   friends: ["Girish", "Akash", "Sushant", "Sourabh"],
//   hasDriversLicense: true,
//   age: calcAge1(1994),
//   calcAge: function () {
//     return 2024 - this.birthYear; // Inside object elements can be accessed using "this" keyword
//   },
// }; // You can defined new function inside an object
// console.log(abhi);

// console.log(abhi.calcAge());

const abhi = {
  firstName: "Abhijeet",
  lastName: "Kamble",
  birthYear: 1994,
  job: "Developer",
  friends: ["Girish", "Akash", "Sushant", "Sourabh"],
  hasDriversLicense: true,
  age: calcAge1(1994),
  calcAge: function () {
    this.age = 2024 - this.birthYear; // Inside object elements can be accessed using "this" keyword
    return this.age; // this return is optional
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(abhi.age);
console.log(abhi.getSummary());

// For loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// for (let i = 0; i < abhi.friends.length; i++) {
//   console.log(abhi.friends[i]);
// }

// const yrs = [1991, 1994, 2007, 1969, 2018];
// const ages = [];

// for (let i = 0; i < yrs.length; i++) {
//   ages.push(2037 - yrs[i]);
// }
// console.log(ages);

// // continue and break
// for (let i = 0; i < yrs.length; i++) {
//   if (yrs[i] > 2000) continue;
//   console.log(yrs[i]);
// }

// // continue and break
// for (let i = 0; i < yrs.length; i++) {
//   if (yrs[i] > 2000) break;
//   console.log(yrs[i]);
// }

// // While loop
// let i = 0;
// while (i < yrs.length) {
//   console.log(yrs[i]);
//   i++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
