const cur = require('./cur.js');
const sum = require('../trash/sum');

test('curring', () => {
  const curriedSum = cur(sum);
  expect(curriedSum(1)(2)(3)).toBe(6);
  expect(curriedSum(1, 2)(3)()).toBe(6);
  expect(curriedSum(1)(5)()).toBe(6)
  expect(curriedSum(1)(4, 1)()).toBe(6)
})
