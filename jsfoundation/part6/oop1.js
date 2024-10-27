class Vehicle {
  constructor(make, model, year) {
    //like '__init__' in python
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    return `${this.make} ${this.model} is a car from ${this.year}`;
  }
}

// Inheritance
class Car extends Vehicle {
  drive() {
    return `${this.make}: This is an inheritance example`;
  }
}

let myCar = new Car("Tata", "Nexon", "2022");
// console.log(myCar.drive());
// console.log(myCar.start());

// Encapsulation
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log("Initial Balance", account.getBalance());
account.deposit(45);
console.log("New Balance", account.getBalance());

// Abstraction

// Polymorphism

// static method
//Static methods in JavaScript can only be called on the class itself, not on instances
//Static methods in JavaScript can use this to refer to the class itself
//Static methods in Python can be called on both the class and its instances
//Static methods in Python don't have access to the class or instance through self or cls
class Calculator {
  static add(a, b) {
    return a + b;
  }
}
// console.log(Calculator.add(2, 3))

// Getters and Setters

class Employee {
  constructor(name, salary) {
    if (salary < 0) {
      throw new console.error("Invalid salary");
    }
    this.name = name;
    this._salary = salary; // it's better to use #salary
  }

  get salary() {
    return "You are not allowed to see salary";
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
    return "Salary updated";
  }
}
