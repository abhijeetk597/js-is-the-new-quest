const person = {
  name: "Abhijeet",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet(); //output-> Hi, I am Abhijeet

const greetFunction = person.greet;
greetFunction(); //output-> Hi, I am undefined

const boundGreet = person.greet.bind({ name: "John" });
boundGreet(); //output-> Hi, I am John

// bind, call and apply
