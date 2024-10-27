/* 
1. Write a 'for' loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"]
and stops the loop when it finds "chai".
Store all teas before "chai" in a new array named "selectedTeas"
*/
let myArray = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] == "chai") {
    break;
  }
  selectedTeas.push(myArray[i]);
}
// console.log(selectedTeas);

/* 
2. Write a 'for' loop that loops through the array ["London", "New York", "Paris", "Berlin"]
and skips "Paris"
Store the other cities in a new array named "visitedCities"
*/
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] == "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(cities);
// console.log(visitedCities);

/* 
3. Use a 'for-of' loop to iterate through the array [1, 2, 3, 4, 5] and stop when
the number 4 is found.
Store the numbers before '4' in an array named 'smallNumbers'
*/
let myNums = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const number of myNums) {
  if (number == 4) {
    break;
  }
  smallNumbers.push(number);
}
// console.log(myNums);
// console.log(smallNumbers);

/* 
4. Use a 'for-of' loop to iterate through the array
["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea".
Store the other teas in array named 'preferredTeas'
*/
let myTeas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const tea of myTeas) {
  if (tea == "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}
// console.log(myTeas);
// console.log(preferredTeas);

/* 
5. Use a 'for-in' loop to loop through an object containing city populations.
Stop the loop when the population of "Berlin" is found and store all previous
cities populations in a new object named 'cityPopulations'

citiesPopulation = {
    "London": 89,
    "New York": 84,
    "Paris": 22
    "Berlin": 35
}
*/
let citiesPopulation = {
  London: 89,
  "New York": 84,
  Paris: 22,
  Berlin: 35,
};

let cityPopulations = {};
// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  if (Object.prototype.hasOwnProperty.call(citiesPopulation, city)) {
    const population = citiesPopulation[city];
    if (city == "Berlin") {
      break;
    }
    cityPopulations[city] = population;
  }
}
// console.log(citiesPopulation);
// console.log(cityPopulations);

// imp object methods for interview: call, bind & apply

/*
6. Use a 'for-in' loop to loop through an object containing city populations.
Skip any city with a population below 2 million and store the rest in a new
object named 'largeCities'

worldCities = {
    "Sydney": 50,
    "Tokyo": 90,
    "Berlin": 35,
    "Paris": 22
}
 */

let worldCities = {
  Sydney: 50,
  Tokyo: 90,
  Paris: 22,
  Berlin: 35,
};
let largeCities = {};
for (const city in worldCities) {
  if (Object.prototype.hasOwnProperty.call(worldCities, city)) {
    const popu = worldCities[city];
    if (popu < 30) {
      continue;
    }
    largeCities[city] = popu;
  }
}
// console.log(worldCities);
// console.log(largeCities);

/* 
7. Write a 'forEach' loop that iterates through the array
["earl grey", "green tea", "chai", "oolong tea"].
Skip "chai" is found and store all tea types
in an array named 'availableTeas'
*/
let teas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teas.forEach((tea) => {
  if (tea == "chai") {
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas);

/* 
8. Write a 'forEach' loop that iterates through the array
["Berlin", "Tokyo", "Sydney", "Paris"]. Skip "Sydney" and store the other cities
in a new array named 'traveledCities'
*/
let myCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});

// console.log(traveledCities);

/* 
9. Write a 'for' loop that iterates through the array [2, 5, 7, 9]
Skip the value '7' and multiply the rest by 2. Store the results in a new 
array named 'doubledNumbers'
*/
let numArray = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] === 7) {
    continue;
  }
  doubledNumbers.push(numArray[i] * 2);
}
// console.log(doubledNumbers);

/* 
10. Use a 'for-of' loop to iterate through the array 
["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] and stop
when the length of the current tea name is greate than 10.
Store the teas iterated over in array named 'shortTeas'
*/
let teaArray = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of teaArray) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
