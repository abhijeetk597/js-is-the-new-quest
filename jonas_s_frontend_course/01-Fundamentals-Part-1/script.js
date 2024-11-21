let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");
console.log(40 + 8 - 25);

console.log("Jonas");
console.log(23);

let firstName = "Abhijeet";
console.log(firstName);

let PI = 3.1415;

let myFirstJob = "Programmer";

/* Pritive Data Types -> total 7

1. Number: floating point numbers used for decimals and integers

2. String: Sequence of characters used for text

3. Boolean: Logical type that can only be true or false

4. Undefined: Value taken by a variable tha tis not yet defined ('empty value')

5. Null: Also means 'empty value'

6. Symbol (ES2015): Value that is unique and cannot be changed

7. BigInt (ES2020): Larger integers than the Number type can hold

* JavaScript has dynamic typing: We do not have to manually define the data type of the value
stored in variable. Instead, data types are determined automatically.
 */

console.log(typeof true);
console.log(typeof firstName);
console.log(typeof PI);
console.log(typeof undefined);
console.log(typeof null);

/* let, const and var */

/* Basic Operators */

const now = 2025;
const ageAbhi = now - 1994;
const ageRavina = now - 1993;
console.log(ageAbhi, ageRavina);

console.log(ageAbhi * 2, ageAbhi / 2, 2 ** 3);

const lastName = "Kamble";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

console.log(ageAbhi > ageRavina);

const age = 15;

// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log(`Sarah can start driving 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Type conversion
const inputYear = "1991";
console.log(inputYear + 18);
console.log(inputYear);
console.log(Number(inputYear));
console.log(Number("Abhijeet")); //Return NaN
console.log(typeof NaN); //Returns -> number

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old");
console.log(inputYear - 18); //"-" sign triggers type coercion
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

// 5 falsy values -> 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Abhi"));
console.log(Boolean({})); //this is true in js while this is false in python
console.log(Boolean(""));

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

// "===" strict equality operator, doesn't support type coercion
// "==" loose equality operator
console.log("18" == 18);
console.log("18" === 18);

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 15) {
//   console.log(`${favourite} : loose equality`);
// } else if (favourite === 15) {
//   console.log(`${favourite} : strict equality`);
// }

// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // and operator
console.log(hasDriversLicense || hasGoodVision); // or operator
console.log(!hasDriversLicense); // not operator

let aValue = true;
let bValue = false; // in Python true and false are like True and False, in titlecase

// Switch statement

const day = "monday";

switch (day) {
  case "monday": // strict equality
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break; // enters next block without checking condition until it finds break
  case "tuesday":
    console.log("Take rest");
    break;
  case "wednesday":
  case "thursday":
    console.log("This is wednesaday or thursday");
    break;
  case "friday":
    console.log("Fix the bug");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

// conditional (ternary) operator -> if-else statement in single line

const myAge = 23;

myAge >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");
