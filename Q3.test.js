const countBits = require('./Q3');

test("returns correct number of 1s in binary representation", () => {
  expect(countBits(1234)).toBe(5);
});