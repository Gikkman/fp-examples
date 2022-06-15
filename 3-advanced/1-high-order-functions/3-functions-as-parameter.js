const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const log = (a, b) => { console.log(a); console.log(b); }

const exec = (func, a, b) => func(a,b);

const sum1 = exec(add, 1, 2);
const sum2 = exec(mul, 2, 2);
exec(log, sum1, sum2);