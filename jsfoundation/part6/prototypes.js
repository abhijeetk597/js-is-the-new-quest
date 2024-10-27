let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

//or
// tesla.__proto__ = genericCar

console.log(`tesla `, tesla);
console.log(`tesla tyres `, tesla.tyres);
console.log(`tesla ptototypes `, Object.getPrototypeOf(tesla));
console.log(`tesla prototypes `, tesla.__proto__);
