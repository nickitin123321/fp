/*
  const curedSum = cur(sum);	
  curedSum(1)(2)(3);
  curedSum(1)(2,3);
  curedSum(1,2)(3);
  curedSum(1,2,3);
*/
module.exports = (f) => (a) => (b) => (c) => f(a, b, c);
