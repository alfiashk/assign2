const removNb = require('./Q7');

test("removNb(26) returns correct pairs", () => {
    expect(removNb(26)).toEqual([[15, 21], [21, 15]]);
});

test("removNb(100) returns empty array", () => {
    expect(removNb(100)).toEqual([]);
});


