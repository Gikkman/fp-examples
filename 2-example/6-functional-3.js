const add = (n1) => (n2) => n1 + n2;
const mul = (n1) => (n2) => n1 * n2;
const pow2 = (n) => n * n;
const log = (val) => {
    console.log("Value is: " + val);
    return val;
}

const add2 = add(2);
const mul3 = mul(3);

const log_wrapper = func => val => {
    const r = func(val);
    console.log("Value is: " + r);
    return r;
}

const add2_l = log_wrapper(add2);
const mul3_l = log_wrapper(mul3);
const pow2_l = log_wrapper(pow2);

pow2_l( mul3_l( add2_l( log(2) )));