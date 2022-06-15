const add = (a, b) => a + b;
const mul5 = (a) => a * 3;
const div = (a, b) => a / b;

const sum = div( mul5( add(1, 3) ), 2);
// sum = ((1 + 3) * 5) / 2 = 10
// Not that the first operation to execute must be the inner-most in the call chain