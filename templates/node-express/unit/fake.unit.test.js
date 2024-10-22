const fake = (a,b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(fake(1, 2)).toBe(3);
});
