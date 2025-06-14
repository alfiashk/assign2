const createRNG = require('./Q8');

test('RNG should return all numbers from 0 to n-1 without repeat per cycle', () => {
  const rand = createRNG(3);
  const seen = new Set();

  for (let i = 0; i < 3; i++) {
    const val = rand();
    expect(val).toBeGreaterThanOrEqual(0);
    expect(val).toBeLessThan(3);
    expect(seen.has(val)).toBe(false);
    seen.add(val);
  }
});