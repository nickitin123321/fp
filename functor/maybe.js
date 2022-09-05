const {post: pInc, pre: prInc} = require('../trash/increment.js');
const {post: pDec, pre: prDec} = require('../trash/decrement.js');

const maybe = (x) => (fn) => maybe(x && fn ? fn(x) : null);

maybe(5)(x => x**2)(console.log)
maybe(10)(prInc)(prInc)(prInc)(prDec)(prDec)(prDec)(console.log)
maybe(10)(prDec)(prDec)(console.log)
