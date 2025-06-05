const uniqueInOrder = require('./Q6'); // adjust filename if needed

test("Removes consecutive duplicates from string 'AAAABBBCCDAABBB'", () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
});

test("Handles case-sensitive characters in string 'ABBCcAD'", () => {
    expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
});

test("Removes consecutive duplicates from array [1, 2, 2, 3, 3]", () => {
    expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});

test("Handles empty string input", () => {
    expect(uniqueInOrder('')).toEqual([]);
});

test("Handles empty array input", () => {
    expect(uniqueInOrder([])).toEqual([]);
});

