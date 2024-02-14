// Program to show the functionality of the program
import Airport from "./airport.js";
import Plane from "./plane.js";

console.log(`Create a plane`);
let plane = new Plane("01");
console.log(plane);

console.log(`Create an airport`);
let airport = new Airport(10);
console.log(airport);

console.log(
  `The maximum capacity of the airport can be changed, it is currently ${airport.maximumCapacity}`
);
airport.changeCapacity(2);
console.log(`The maximum capacity is now ${airport.maximumCapacity}`);

console.log(`Have a plane land at the airport`);
console.log(`The airport is empty`);
console.log(airport.storedPlanes);
airport.landPlane(plane);
console.log(`The airport contains: `);
console.log(airport.storedPlanes);

console.log(`Show that a plane without an ID cannot land`);
let plane2 = new Plane();
airport.landPlane(plane2);
console.log(`The airport contains: `);
console.log(airport.storedPlanes);

console.log(`Show that plane's cannot land at the airport if it is full`);
plane2 = new Plane(`02`);
let plane3 = new Plane(`03`);
airport.landPlane(plane2);
airport.landPlane(plane3);
console.log(
  `Plane2 and Plane3 have tried to land but the capacity can only allow one of them to land`
);
console.log(`The airport now contains:`);
console.log(airport.storedPlanes);

// console.log(
//   `Show that plane's cannot land when they are already at the airport`
// );
// airport.landPlane(plane);
// console.log(`Plane1 has tried to land again but it is already at the airport`);
// console.log(`The airport now contains:`);
// console.log(airport.storedPlanes);

console.log(`Show that planes are able to take off from the airport`);
airport.takeoffPlane(plane2);
console.log(`The airport now contains:`);
console.log(airport.storedPlanes);

console.log(
  `Show that planes cannot land or takeoff when the weather is stormy`
);
airport.weather = "stormy";
console.log(`The weather is now ${airport.weather}`);
console.log(`Plane2 is wanting to land`);
airport.landPlane(plane2);
console.log(`The airport now contains:`);
console.log(airport.storedPlanes);
console.log(`Plane1 is wanting to take off`);
airport.takeoffPlane(plane);
console.log(`The airport now contains:`);
console.log(airport.storedPlanes);
