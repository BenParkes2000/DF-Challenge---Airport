// Imports
import Airport from "../src/airport.js";
import { assertEquals } from "./test-framework.js";
import Plane from "../src/plane.js";

// Initialising Variables
let testName, testResult, expectedValue;

const userStory1 = function () {
  console.log(`----------User Story 1----------`);

  const test1 = function () {
    // Test 1 - Test to see if the capacity of an airport can be modified.
    // Arrange
    testName = "Test to see whether the capacity can be modified initially";
    expectedValue = 5;

    // Act
    const airport = new Airport(5);

    // Assert
    testResult = assertEquals(airport.maximumCapacity, expectedValue);

    // Report
    console.log(`${testName} gives the result: ${testResult}`);

    // Clean-up
    testName = testResult = expectedValue = undefined;
  };

  const test2 = function () {
    // Test 2 - Test to see if capacity can be changed after initial use of the system.
    // Arrange
    testName =
      "Test to see if capacity can be changed after initial use of the system";
    expectedValue = 25;

    // Act
    const airport = new Airport(10);
    airport.changeCapacity(25);

    // Assert
    testResult = assertEquals(airport.maximumCapacity, expectedValue);

    // Report
    console.log(`${testName} gives the result: ${testResult}`);

    // Clean-up
    testName = testResult = expectedValue = undefined;
  };

  const test3 = function () {
    // Test 3 - Test to see that the program only accepts positive capacities.
    // Arrange
    testName = "Test to see that the program only accepts positive capacities";
    expectedValue = 20;

    // Act
    const airport = new Airport();
    airport.changeCapacity(-50);

    // Assert
    testResult = assertEquals(airport.maximumCapacity, expectedValue);

    // Report
    console.log(`${testName} gives the result: ${testResult}`);

    // Clean-up
    testName = testResult = expectedValue = undefined;
  };

  test1();
  test2();
  test3();
};

const userStory2 = function () {
  console.log(`----------User Story 2----------`);

  const test1 = function () {
    // Test 1 - Test an item is added to the airport's plane list
    // Arrange
    testName =
      "Test to see whether an item is added to the airport's plane list";
    expectedValue = 1;

    // Act
    const airport = new Airport();
    const plane = new Plane("1234");
    airport.landPlane(plane);

    // Assert
    testResult = assertEquals(airport.storedPlanes.length, expectedValue);

    // Report
    console.log(`${testName} gives the result: ${testResult}`);

    // Clean-up
    testName = testResult = expectedValue = undefined;
  };

  const test2 = function () {
    // Test 2 - Test that only planes can land at the airport
    // Arrange
    testName =
      "Test to see whether only planes are able to land at the airport";
    expectedValue = 1;

    // Act
    const airport = new Airport();
    const helicopter = "1234";
    airport.landPlane(helicopter);
    const plane = new Plane("5678");
    airport.landPlane(plane);

    // Assert
    testResult = assertEquals(airport.storedPlanes.length, expectedValue);

    // Report
    console.log(`${testName} gives the result: ${testResult}`);

    // Clean-up
    testName = testResult = expectedValue = undefined;
  };

  const test3 = function () {
    // Test 3 - Test that planes cannot land if the airport is full
    // Arrange
    testName = "Test to see whether planes cannot land if the airport is full";
    expectedValue = 3;

    // Act
    const airport = new Airport(3);
    const plane1 = new Plane("01");
    const plane2 = new Plane("02");
    const plane3 = new Plane("03");
    const plane4 = new Plane("04");
    airport.landPlane(plane1);
    airport.landPlane(plane2);
    airport.landPlane(plane3);
    airport.landPlane(plane4);

    // Assert
    testResult = assertEquals(airport.storedPlanes.length, expectedValue);

    // Report
    console.log(`${testName} gives the result: ${testResult}`);

    // Clean-up
    testName = testResult = expectedValue = undefined;
  };

  const test4 = function () {
    // Test 4 - Test that planes cannot land if they are already at the airport
    // Arrange
    testName =
      "Test to see whether planes cannot land if they are already at the airport";
    expectedValue = 2;

    // Act
    const airport = new Airport(5);
    const plane1 = new Plane("01");
    const plane2 = new Plane("02");
    airport.landPlane(plane1);
    airport.landPlane(plane2);
    airport.landPlane(plane1);

    // Assert
    testResult = assertEquals(airport.storedPlanes.length, expectedValue);

    // Report
    console.log(`${testName} gives the result: ${testResult}`);

    // Clean-up
    testName = testResult = expectedValue = undefined;
  };
  test1();
  test2();
  test3();
  test4();
};

const userStory3 = function () {
  console.log(`----------User Story 3----------`);

  const test1 = function () {
    // Test 1 - Test to check that a plane is removed from the airport
    // Arrange
    let testName = "Test to check that a plane is removed from the airport";
    expectedValue = 1;

    // Act
    const airport = new Airport();
    const plane1 = new Plane("01");
    const plane2 = new Plane("02");
    airport.landPlane(plane1);
    airport.landPlane(plane2);
    airport.takeoffPlane(plane2);

    // Assert
    testResult = assertEquals(airport.storedPlanes.length, expectedValue);

    // Report
    console.log(`${testName} gives the result: ${testResult}`);

    // Clean-up
    testName = testResult = expectedValue = undefined;
  };

  const test2 = function () {
    // Test 2 - Test that the correct plane is removed from the airport
    // Arrange
    testName = "Test to see that the correct plane is removed from the airport";
    expectedValue = false;

    // Act
    const airport = new Airport();
    const plane1 = new Plane("01");
    const plane2 = new Plane("02");
    const plane3 = new Plane("03");
    airport.landPlane(plane1);
    airport.landPlane(plane2);
    airport.landPlane(plane3);
    airport.takeoffPlane(plane2);

    // Assert
    testResult = assertEquals(
      airport.storedPlanes.includes(plane2),
      expectedValue
    );

    // Report
    console.log(`${testName} gives the result: ${testResult}`);

    // Clean-up
    testName = testResult = expectedValue = undefined;
  };

  const test3 = function () {
    // Test 3 - Test to see that a plane cannot be removed twice from the airport if it has already left
    // Arrange
    testName =
      "Test to see that a plane cannot be removed from the airport if it has already left it";
    expectedValue = 1;

    // Act
    const airport = new Airport();
    const plane1 = new Plane("01");
    const plane2 = new Plane("02");
    airport.landPlane(plane1);
    airport.landPlane(plane2);
    airport.takeoffPlane(plane2);
    airport.takeoffPlane(plane2);

    // Assert
    testResult = assertEquals(airport.storedPlanes.length, expectedValue);
    // Report
    console.log(`${testName} gives the result: ${testResult}`);

    // Clean-up
    testName = testResult = expectedValue = undefined;
  };
  test1();
  test2();
  test3();
};

const userStory4_5 = function () {
  console.log(`----------User Story 4----------`);

  const test1 = function () {
    // Test 1 - Test to check that if the weather is stormy, the plane wont land
    // Arrange
    let testName =
      "Test to check that if the weather is stormy the plane wont land";
    expectedValue = 0;

    // Act
    const airport = new Airport(10);
    const plane = new Plane("01");
    airport.weather = "stormy";
    airport.landPlane(plane);

    // Assert
    testResult = assertEquals(airport.storedPlanes.length, expectedValue);
    // Report
    console.log(`${testName} gives the result: ${testResult}`);

    // Clean-up
    testName = testResult = expectedValue = undefined;
  };

  const test2 = function () {
    // Test 2 - Test to see that the weather can be randomly assigned to different weathers

    /* Test to give random weathers suggests that most of the time the test will pass, but may fail sometimes.
       Unsure how to test for random things */

    // Arrange
    let testName =
      "Test to see that the weather can be randomly assigned to different weathers";

    // Act
    const airport = new Airport(10);
    const initialValue = airport.weather;
    airport.changeWeather();
    const secondValue = airport.weather;
    console.log(initialValue, secondValue);

    // Assert
    testResult = !assertEquals(secondValue, initialValue);
    // Report
    console.log(`${testName} gives the result: ${testResult}`);

    // Clean-up
    testName = testResult = expectedValue = undefined;
  };
  test1();
  test2();
};
userStory1();
userStory2();
userStory3();
userStory4_5();
