const diamond = require('./Q4');

test("Returns null for even number", () => {
    expect(diamond(4)).toBeNull();
});

test("Returns null for negative number", () => {
    expect(diamond(-5)).toBeNull();
});

test("Diamond of size 1", () => {
    expect(diamond(1)).toBe("*\n");
});

test("Diamond of size 3", () => {
    expect(diamond(3)).toBe(" *\n***\n *\n");
});

test("Diamond of size 5", () => {
    expect(diamond(5)).toBe("  *\n ***\n*****\n ***\n  *\n");
});
