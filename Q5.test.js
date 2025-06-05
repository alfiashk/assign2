const propertyNumbers = require('./Q5'); 

test("Find numbers with property in range 1 to 10", () => {
  expect(propertyNumbers(1, 10)).toEqual([1,2,3,4,5,6,7,8,9]);
});

test("Find numbers with property in range 1 to 100", () => {
  expect(propertyNumbers(1, 100)).toEqual([1,2,3,4,5,6,7,8,9,89]);
});

test("Find numbers with property in range 90 to 150", () => {
  expect(propertyNumbers(90, 150)).toEqual([135]);
});

test("Find numbers with property in range 1 to 1", () => {
  expect(propertyNumbers(1, 1)).toEqual([1]);
});

test("Empty range returns empty array", () => {
  expect(propertyNumbers(200, 201)).toEqual([]);
});
