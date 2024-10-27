// js constructor functions

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 'this' is like 'self' in python

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar);

let myNewCar = new Car("Tata", "Nexon");
console.log(myNewCar);

// 'new' is like how class is called while creating object using '()' in python

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}

let myTea = new Tea("Masala Chai");
console.log(myTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let myDog = new Animal("Dog");
console.log(myDog.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with 'new' prefix");
  }
  this.name = name;
}

let water = new Drink("water");
console.log(water);
