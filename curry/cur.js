/*
  const curedSum = cur(sum);	
  curriedSum(1)(2)(3);
  curriedSum(1)(2,3);
  curriedSum(1,2)(3);
  curriedSum(1,2,3);
*/
module.exports = (f) => (...argsA) => (...argsB) => (...argsC) => f(...argsA, ...argsB, ...argsC);
