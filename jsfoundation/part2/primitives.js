// Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(typeof balance);

console.log(anotherBalance);
console.log(anotherBalance.valueOf());

console.log(typeof anotherBalance);

// boolean
let isActive = true;
let isReallyActive = new Boolean(true);

console.log(typeof isActive);
console.log(typeof isReallyActive);

// null and undefined

let firstname;
console.log(firstname);
console.log(typeof firstname);

let fname = null;
console.log(fname);
console.log(typeof fname);

// strings

let myString = "Hello";
let myStringOne = "Hola";
let username = "Abhijeet";

let oldGreet = myString + "Abhi";
console.log(oldGreet);

let greetMessage = `Hello ${username}, how are you?`;
console.log(greetMessage);
