const add = (n1) => (n2) => n1 + n2;
const mul = (n1) => (n2) => n1 * n2;
const pow2 = (n) => n * n;
const log = (val) => {
    console.log("Value is: " + val);
    return val;
}

const add2 = add(2);
const mul3 = mul(3);

log( pow2( log( mul3( log( add2( log(2) ))))));