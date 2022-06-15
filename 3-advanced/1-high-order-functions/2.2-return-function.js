const addFactory = () => (a, b) => a + b;
const mulFactory = () => (a, b) => a * b;

const op1 = mulFactory();
const op2 = addFactory();

const sum1 = op1(1, 2); 
console.log(sum1);

const sum2 = op2(1, 2); 
console.log(sum2);

