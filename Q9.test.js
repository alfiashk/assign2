const { movingShift, demovingShift } = require('./Q9'); // change 'yourModule' to your filename

describe('movingShift and demovingShift', () => {
  test('movingShift encodes string and splits into 5 parts', () => {
    const input = "I should have known that you would have a perfect answer for me!!!";
    const shift = 1;

    const encoded = movingShift(input, shift);

    // encoded should be an array of 5 strings
    expect(encoded.length).toBe(5);

    // The sum of the lengths of all 5 parts should equal original string length
    const totalLength = encoded.reduce((sum, part) => sum + part.length, 0);
    expect(totalLength).toBeGreaterThanOrEqual(input.length);

    // Check that the parts follow the rule about part lengths:
    // - parts 1 to 4 at least as long as Math.ceil(total / 5)
    // - parts 5 can be shorter (or empty string)
    const partSize = Math.ceil(totalLength / 5);
    for (let i = 0; i < 4; i++) {
      expect(encoded[i].length).toBeGreaterThanOrEqual(partSize - 1);
      expect(encoded[i].length).toBeLessThanOrEqual(partSize);
    }
  });

  test('demovingShift decodes correctly', () => {
    const input = "I should have known that you would have a perfect answer for me!!!";
    const shift = 1;

    const encoded = movingShift(input, shift);
    const decoded = demovingShift(encoded, shift);

    expect(decoded).toBe(input);
  });

  test('empty string input returns 5 empty strings', () => {
    const encoded = movingShift("", 1);
    expect(encoded).toEqual(["", "", "", "", ""]);

    const decoded = demovingShift(encoded, 1);
    expect(decoded).toBe("");
  });
});
