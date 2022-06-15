const f = (a,b) => a + b;
const g = a => a * a;

const h = (a,b) => g(f(a,b));

const sum = h(2,3);