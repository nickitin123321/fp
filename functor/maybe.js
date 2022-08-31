const {post, prefix} = require('../trash/increment.js');

const maybe = (x) => (fn) => maybe(x && fn ? fn(x) : null);

maybe(5)(x => x**2)(console.log)
maybe(10)(post)(prefix)(console.log)
