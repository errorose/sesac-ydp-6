// const add = require('./m1');
// console.log(add(1,2));

const math = require('./m2');
console.log(math.add(1,2));
console.log(math.subtract(10,5));

const {add, subtract} = math;
console.log(add(1,2));
console.log(subtract(10,5));


