// 1. Declare and assign the variables here:
const nameOfTheSpaceShuttle = "Determination";
const shuttleSpeed = 17500;
const distanceToMars = 225000000;
const distanceToTheMoon = 384400;
const milesPerKilometer = 0.621;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(nameOfTheSpaceShuttle));
console.log(typeof(shuttleSpeed));
console.log(typeof(distanceToMars));
console.log(typeof(distanceToTheMoon));
console.log(typeof(milesPerKilometer));

// Code your solution to exercises 3 and 4 here:
let marsMiles =(225000000 * 0.621);
let marsHours =(139725000 / 17500);
let marsDays =(7984.285714285715 / 24);

console.log(marsMiles);
console.log(marsHours);
console.log(marsDays);
console.log(nameOfTheSpaceShuttle, "will take", marsDays, "days to reach Mars.");

// Code your solution to exercise 5 here:
let moonMiles =(384400 * 0.621);
let moonHours =(238712.4 / 17500);
let moonDays =(13.64070857142857 / 24);

console.log(moonMiles);
console.log(moonHours);
console.log(moonDays);
console.log(nameOfTheSpaceShuttle + "will take" + (moonDays) + "days to reach the Moon.");